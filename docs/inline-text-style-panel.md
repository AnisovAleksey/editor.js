# Inline Text Style Panel — панель форматирования при выделении

Документ описывает кастомную inline-toolbar форка. Реализация: `src/components/modules/toolbar/inline.ts` (класс `InlineToolbar`). Стили: `src/styles/inline-toolbar.css`.

## Зачем переписали

В upstream inline-toolbar — это `PopoverInline` (наследник `PopoverDesktop`), плюс отдельная вложенная popover-логика для «Convert to» dropdown. Получалось:

- два этажа меню (форматирование + dropdown с типами блоков);
- ширина зависит от локализации подписей;
- popover-инфраструктура несёт keyboard-flipper, search input и nested popovers — ничего из этого в inline-формате не нужно.

В форке весь popover-стек заменён на простой `<div>` с прямой раскладкой кнопок. Старый `PopoverInline` удалён вместе с `popover-inline.css` — см. CLAUDE.md, секция Fork Changes.

## Триггер показа

Панель открывается через `tryToShow()` из `BlockEvents` (на `selectionchange` / `mouseup` / `keyup`). Перед показом — проверки в `allowedToShow()` (`inline.ts:315`):

1. `Selection` не схлопнут (есть выделенный текст);
2. Длина выделения ≥ 1 символа;
3. Anchor — не `IMG` / `INPUT`;
4. Anchor — внутри `[contenteditable]`;
5. У текущего блока есть **хотя бы один** разрешённый inline-tool (`currentBlock.tool.inlineTools`).

Если все условия выполнены — `open()` создаёт инстансы tools, рендерит кнопки и позиционирует панель.

`close()` снимает все шорткаты (`Shortcuts.remove`), вызывает `clear()` на каждом инстансе и удаляет DOM кнопок.

## Позиционирование

Панель центрируется **над** выделенным текстом (`inline.ts:273`):

```
x = selectionRect.center − panelRect.width/2
y = selectionRect.top − panelRect.height − gap
```

`gap` = 4 px на десктопе, 20 px на мобильном. Дальше — clamp по горизонтали, чтобы не выезжать за `Editor.UI.contentRect`. Ванильный popover-механизм не используется вообще; `wrapper` лежит внутри `.codex-editor` и двигается через inline-стили `top` / `left`.

## Архитектура DOM

```
.ce-inline-text-style-panel              ← позиционирующий wrapper
├── .ce-inline-text-style-panel__container   ← полоска кнопок (flex row, padding 4px, border-radius 12px)
│   ├── .ce-inline-text-style-panel__btn       ← каждая кнопка 32×32, иконка 24×24
│   ├── .ce-inline-text-style-panel__sep       ← вертикальный сепаратор (1×20 px)
│   └── ...
└── .ce-inline-text-style-panel__actions   ← опциональный slot под input-ы (e.g. ввод URL для Link)
```

`actionsEl` появляется только если хотя бы один tool вернул `renderActions()` (используется LinkInlineTool для поля ввода URL). Иначе блок не добавляется в DOM.

Состояние «активна» — класс `--active` на кнопке: подсвечивается синим (`var(--editor-active-bg)` / `var(--editor-active)`).

## Два API инструмента

`renderButtons()` (`inline.ts:167`) поддерживает обе формы возвращаемого значения из `tool.render()`:

### Old API — `HTMLElement`

Tool возвращает готовый `HTMLElement` (как в upstream). Кнопке навешивается `click` → `tool.surround(range)`. Active-state обновляется через `tool.checkState(selection)` после каждого клика.

Используется в:
- `BoldInlineTool` (на самом деле теперь New API, см. ниже)
- `ItalicInlineTool`
- `LinkInlineTool` (+ `renderActions()` для поля URL)

### New API — `MenuConfig`

Tool возвращает объект `{ icon, name, onActivate, isActive }`. Wrapper создаёт `<button>`, ставит `innerHTML = icon`, на клик вызывает `onActivate()`. Active-state — через `isActive()`.

Используется в:
- `BoldInlineTool` (`render()` возвращает `MenuConfig` с `name: 'bold'`)
- `StrikethroughInlineTool` (`name: 'strikethrough'`)
- `HeadingH2/H3/H4ConvertTool` (`name: 'convert-heading-{2|3|4}'`)
- `QuoteConvertInlineTool` (`name: 'convert-quote'`)
- `ListUnorderedConvertTool` / `ListOrderedConvertTool`

Detect API: `$.isElement(rendered)` (`inline.ts:190`). Если HTMLElement — старый путь, если объект — новый.

## Встроенные inline-tools

Файлы — в `src/components/inline-tools/`. Регистрируются автоматически в `src/components/modules/tools.ts`.

| Tool | Назначение | API | Shortcut |
|------|------------|-----|----------|
| `BoldInlineTool` | `<b>` | new | `CMD+B` |
| `ItalicInlineTool` | `<i>` | old | `CMD+I` |
| `StrikethroughInlineTool` | `<s>` (через `execCommand('strikeThrough')`) | new | `CMD+SHIFT+S` |
| `LinkInlineTool` | `<a>` + поле URL | old | `CMD+K` |
| `HeadingH2ConvertTool` | parent block → `header` (level 2) | new | — |
| `HeadingH3ConvertTool` | parent block → `header` (level 3) | new | — |
| `HeadingH4ConvertTool` | parent block → `header` (level 4) | new | — |
| `QuoteConvertInlineTool` | parent block → `quote` | new | — |
| `ListUnorderedConvertTool` | parent block → `list` (unordered) | new | — |
| `ListOrderedConvertTool` | parent block → `list` (ordered) | new | — |

Convert-tools — это **inline-tools, конвертирующие сам блок** через `api.blocks.convert()` (см. реализацию в `inline-tool-convert-heading.ts:72`). Повторный клик на активный convert-tool возвращает блок к paragraph (toggle).

Iконки — встроенные SVG-строки, стиль VK (24×24, `fill="currentColor"` или stroke-only outline). Внешний `@codexteam/icons` не используется.

## Сепараторы

`inline.ts:64`:

```ts
private readonly separatorBefore = new Set(['convertHeadingH2', 'bold']);
```

Сепаратор вставляется **перед** инструментом из этого набора, **если до него уже что-то отрисовано** (предотвращает сепаратор в начале панели). Логически это даёт три группы:

```
[ convert-heading-2 | convert-heading-3 | convert-heading-4 | quote | list-unordered | list-ordered ]
                                                                                                   │ separator
[ bold | italic | strikethrough | link ]
```

> ⚠️ В наборе указано `'convertHeadingH2'`, но `name` у tool — `'convert-heading-2'`. Это lookup по name из tool-registry (не по `MenuConfig.name`), и `convertHeadingH2` — ключ, под которым tool зарегистрирован в `Tools` module. Если переименовывать tools, этот set нужно править параллельно — иначе сепаратор тихо пропадёт.

## Rebuild при конвертации

Сценарий: пользователь выделил текст в paragraph, нажал «Quote». Block-tool у блока поменялся (`paragraph` → `quote`), а у `quote` может быть **другой набор** разрешённых inline-tools — например, в `quote` может быть отключён `header-convert`.

Стандартное поведение popover-а — закрыть себя при изменении блока. Здесь — другое: после `onActivate()` (`inline.ts:230`) сравнивается `currentBlock.name` до и после. Если изменилось — `rebuildTools()` (`inline.ts:393`):

1. Снимает шорткаты со старых инстансов;
2. Создаёт новые инстансы (с актуальным набором tools);
3. Перерисовывает кнопки в том же `wrapper`;
4. Ре-позиционирует.

Панель **не закрывается**, выделение **не сбрасывается**. UX: после конверсии можно сразу нажать B/I/S без повторного выделения.

## Selection offsets — сохранение выделения через `api.blocks.convert()`

Внутренний хелпер `captureBlockSelectionOffsets` / `applyBlockSelectionOffsets` (`src/components/utils/selection-offsets.ts`) используется во всех convert-tools. Проблема: `api.blocks.convert()` пересоздаёт holder блока — старые `Range`-объекты становятся невалидными, и Selection схлопывается.

Хелпер запоминает оффсеты от начала текстового содержимого блока, после конверсии накладывает их на новый holder. Без него после клика на heading-кнопку выделение бы пропало → `tryToShow()` сразу же закрыл бы панель → второй клик нельзя сделать.

Если будете писать свой convert-tool — обязательно используйте эти хелперы.

## Mobile

Под `max-width: 650px` (`toolbar-vk.css:173`) панель перепинивается к низу visual viewport:

```css
.ce-inline-text-style-panel {
  position: fixed;
  top: var(--editor-vv-bottom, 100vh);
  transform: translateY(-100%);
  width: 100%;
  z-index: 50;
}
```

То есть на мобиле панель растягивается на всю ширину экрана и стоит над клавиатурой (если приложение пишет `--editor-vv-bottom` от visual-viewport listener-а). Внутренний `gap` для позиционирования увеличивается до 20 px (`inline.ts:43`) — но при mobile-CSS он уже неважен, override `top: var(--editor-vv-bottom)` его перебивает.

## Файлы реализации

```
src/components/modules/toolbar/inline.ts        — InlineToolbar (rendering, positioning, rebuild)
src/styles/inline-toolbar.css                   — стили панели и кнопок (self-contained, без popover-зависимостей)
src/styles/toolbar-vk.css                       — mobile bottom-pin override (.ce-inline-text-style-panel)
src/components/inline-tools/                    — все встроенные inline-tools
src/components/utils/selection-offsets.ts       — сохранение выделения через convert()
src/components/modules/tools.ts                 — регистрация built-in inline-tools
```

## Что трогать осторожно

- **`separatorBefore` set vs. `MenuConfig.name`**. Это разные namespace-ы (см. предупреждение выше). Переименование одного без другого ломает сепараторы тихо.
- **`rebuildTools()` без `close()`** — намеренно. Если переписать на close+open, потеряется выделение и панель схлопнется.
- **`actionsEl` создаётся в `renderButtons()` всегда**, но добавляется в DOM только если в нём есть дети (`inline.ts:251`). Если новый tool возвращает `renderActions()`, проверьте, что слот не падает после первого закрытия панели.
- **Detection «old vs new API»** через `$.isElement(rendered)`. Если ваш new-API tool по ошибке вернёт DOM-элемент в `MenuConfig.icon` — он попадёт в old-API ветку, и `surround()`/`checkState()` упадут с runtime error.
- **Selection-offsets в convert-tools**. Без них `tryToShow` после конверсии не найдёт выделение и закроет панель → пользователь подумает, что кнопка «не сработала».
