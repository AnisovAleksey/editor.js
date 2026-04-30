# VK Toolbar — «+» на пустом блоке и горизонтальный toolbox

Документ описывает поведение `VkToolbarPlugin` — fork-specific замены ванильного `.ce-toolbar`. Реализация: `src/components/modules/toolbar/vk-plugin.ts`. Стили: `src/styles/toolbar-vk.css`.

## Suммарная модель

В отличие от upstream (одна toolbar-полоска слева от текущего блока), VK-плагин рендерит **две независимых кнопки**, привязанных к двум разным сигналам:

| Кнопка | Когда видна | Сигнал | Что открывает |
|--------|-------------|--------|---------------|
| `«+»` (`.ce-toolbar-vk-plus`) | каретка в **пустом** блоке | `selectionchange` / input / focus | Toolbox (выбор типа блока) |
| Drag handle (`.ce-toolbar-vk-drag`) | hover по **непустому** блоку | `BlockHovered` | Block settings (move/delete + tunes) |

Кнопки могут существовать одновременно — например, «+» возле каретки на пустом параграфе и drag handle на блоке выше, по которому ведут мышью.

Ванильный `.ce-toolbar` скрывается через класс `.ce-toolbar--vk-hidden` (см. `vk-plugin.ts:60`).

## «+» на новом блоке

### Когда появляется

«+» виден **только** при выполнении трёх условий одновременно:

1. Активен `paragraph`-блок (это базовый тип, в который Editor.js конвертирует пустые блоки по Enter / при инициализации);
2. В блоке нет текста (`textContent.trim() === ''`);
3. В блоке стоит каретка (`window.getSelection().anchorNode` принадлежит этому блоку).

Логика — в `vk-plugin.ts:262` (`getFocusedBlock`) и `vk-plugin.ts:277` (`isBlockEmpty`). Hover на пустой блок «+» **не показывает** — это сделано намеренно: пустых параграфов в статье много (между смысловыми блоками), и появление «+» на каждом hover давало бы визуальный шум.

Как только пользователь начинает печатать — ловится `input`-событие, блок перестаёт быть пустым → «+» уходит, drag handle (по hover) занимает его место.

### Позиционирование

Кнопка абсолютно спозиционирована внутри `.codex-editor`. Якорь — `block.querySelector('.ce-block__content')`, коорд. вычисляются от его `getBoundingClientRect()` минус ширина кнопки (34 px) минус gap (6 px). См. `positionElement` в `vk-plugin.ts:180`.

**Спецслучай — таблицы**. Если блок содержит `.vk-table`, якорем становится первая `<tr>` (а не `.ce-block__content`), и gap увеличивается с 6 до 15 px. Без этого хендл «уезжает» от верхнего-левого угла таблицы при ресайзе колонок.

### Клик → toolbox

`mousedown` на `.ce-toolbar-vk-plus__trigger` вызывает `ctx.toggleToolbox(false)`. Аргумент `false` важен:

- `toggleToolbox(true)` (default) — toolbox привяжется к `hoveredBlock`;
- `toggleToolbox(false)` — toolbox привяжется к блоку, в котором стоит каретка.

«+» по дизайну живёт там, где каретка, поэтому именно вторая семантика корректна — иначе при перемещении мыши между моментом «прицелился в +» и «нажал» toolbox мог бы открыться над не тем блоком.

`stopPropagation` на этом `mousedown` предотвращает закрытие toolbox-а собственным же глобальным listener-ом (любой клик вне popover закрывает popover).

При открытом toolbox CSS `.codex-editor--toolbox-opened .ce-toolbar-vk-plus__trigger > svg` поворачивает иконку `+` на 45° → визуально превращает её в крестик «закрыть».

## Toolbox как «инлайн-панель»

В upstream toolbox — это вертикальный popover, плавающий слева от блока. В форке он:

1. **Reparent-ится в DOM кнопки**. На init плагин вставляет `ctx.toolboxElement` как ребёнка `.ce-toolbar-vk-plus` (`vk-plugin.ts:139`). Editor.js при открытии добавляет popover внутрь `.ce-toolbox` — и popover автоматически оказывается рядом с «+», без вычислений координат.
2. **Рендерится горизонтально** (desktop, `min-width: 651px`). `toolbar-vk.css:88-100` ставит `flex-direction: row` на `.ce-popover__container` и `.ce-popover__items` — список инструментов превращается в полоску иконок.
3. **Скрывает встроенный поиск** popover-а — он не имеет смысла на 5–8 кнопках.

### Тултипы вместо подписей

Подпись инструмента (`.ce-popover-item__title`) спрятана через `opacity: 0`, но абсолютно спозиционирована над иконкой (`bottom: calc(100% + 8px)`) с `border-top` стрелкой-«носиком» — получается стандартный CSS-тултип на hover (`toolbar-vk.css:102-137`). Это:

- освобождает горизонтальное место (полоска не разрастается с локализованными подписями);
- сохраняет accessibility — текст всё ещё в DOM и читается screen-reader-ом.

Дополнительно `.ce-popover-item__secondary-title` (горячие клавиши) скрывается полностью — на полоске всё равно негде их рисовать.

### Вертикальное позиционирование popover-а

Popover Editor.js по умолчанию рендерит свой `.ce-popover__container` под item-ом, к которому привязан. В нашем случае host — кнопка «+» (34 px), а popover — горизонтальная полоска (~46 px высотой). Если оставить дефолт, полоска уедет вниз и закроет следующий блок.

Фикс — `toolbar-vk.css:55-59`:

```css
.ce-toolbar-vk-plus .ce-popover__container {
  top: 0 !important;
  transform: translateY(calc((34px - 100%) / 2));
}
```

Translate-формула центрирует popover вертикально относительно кнопки (полоска оказывается «по центру» «+»). `!important` — потому что Editor.js пишет `top` инлайном при позиционировании.

### Mobile: bottom sheet вместо горизонтальной полоски

Под `max-width: 650px` весь VK-механизм отключается:

- `.ce-toolbar-vk-plus` и `.ce-toolbar-vk-drag` скрыты (`display: none`);
- ванильный `.ce-toolbar` снова показывается, но **fixed-pinned** к низу visual viewport через `--editor-vv-bottom`;
- popover toolbox-а превращается в bottom sheet: `position: fixed; bottom: 0; max-height: 50vh; border-radius: 12px 12px 0 0` (`toolbar-vk.css:230-250`).

Без `--editor-vv-bottom` (его выставляет приложение из visual-viewport listener-а) toolbar упадёт на `100vh` — это fallback, а не корректное поведение. Подробнее — в `CLAUDE.md` форка, секция Styles.

## Файлы реализации

```
src/components/modules/toolbar/vk-plugin.ts   — класс VkToolbarPlugin (default)
src/components/modules/toolbar/index.ts       — Toolbar module, инстанцирует плагин по умолчанию
src/styles/toolbar-vk.css                     — стили «+», drag handle, горизонтальный toolbox, mobile bottom sheet
types/configs/toolbar-plugin.d.ts             — интерфейс ToolbarPlugin (контракт для override)
```

## Подключение

`VkToolbarPlugin` — bundled default. Подключается автоматически, импорта и конфигурации не требует:

```ts
import EditorJS from '@editorjs/editorjs';

new EditorJS({
  holder: 'editor',
  tools: { /* ... */ },
});
```

Слот `EditorConfig.toolbar.plugin` оставлен опциональным на случай кастомной имплементации toolbar-а — передайте свой объект, реализующий интерфейс `ToolbarPlugin`, и он используется вместо VK:

```ts
new EditorJS({
  toolbar: { plugin: new MyCustomToolbar() },
  /* ... */
});
```

`VkToolbarPlugin` также экспортируется как named export из package entry — на случай если нужно его использовать явно (например, обернуть или скомбинировать с собственной логикой).

## Что трогать осторожно

- **`isBlockEmpty`** в `vk-plugin.ts:277`. Сейчас «пустой» = «paragraph без текста». Если расширить определение (например, считать пустым `header` без текста), «+» будет появляться чаще — но в местах, где пользователь только что нажал H2 для заголовка, что обычно мешает.
- **`toggleToolbox(false)`** на mousedown «+». Замена на default `true` сломает сценарий «двинул мышь после прицела»: toolbox откроется над hover-блоком, а не над блоком с кареткой.
- **`stopPropagation` на trigger**. Без него глобальный outside-click listener popover-а закроет toolbox в тот же tick, в котором он открылся.
- **Reparent toolbox-а в DOM кнопки** (`vk-plugin.ts:139`). Если делать toolbox обратно глобальным — придётся возвращать ручное позиционирование popover-а относительно «+».
