# Icons

Локальный набор SVG-иконок, который используют встроенные block tunes, popover-компоненты и stub-тула. Заменяет внешний пакет `@codexteam/icons`, от которого форк отказался.

## Где лежат

Один файл: [`src/components/icons/index.ts`](../src/components/icons/index.ts). Каждая иконка — экспортируемая строка с инлайновым `<svg>`.

## Принципы

- **`viewBox="0 0 20 20"`** у всех иконок — единый размер, чтобы CSS-правило `.ce-popover-item__icon svg { width: var(--icon-size); height: var(--icon-size) }` рендерило их одинаково.
- **Явные `stroke="..."` или `fill="..."`** на каждом `<path>` / `<circle>`. Это важно: глобальное правило `.codex-editor path { stroke: currentColor }` из старого `ui.css` удалено, поэтому иконки без явного атрибута не будут видны.
- **`stroke="currentColor"` / `fill="currentColor"`** — цвет наследуется от родителя через `color`. Темизация работает через CSS-переменные, иконкам ничего знать про тему не нужно.
- **`stroke-width="1.5"`, `stroke-linecap="round"`, `stroke-linejoin="round"`** — единый визуальный стиль (тонкие закруглённые штрихи). Совпадает со стилем иконок таблицы (`src/features/editor/tools/table/action-sheet.ts` в родительском проекте).

## Доступные иконки

| Export | Где используется |
|---|---|
| `IconArrowUp` | `block-tune-move-up.ts` — пункт «Move up» в block settings popover |
| `IconArrowDown` | `block-tune-move-down.ts` — пункт «Move down» |
| `IconDelete` | `block-tune-delete.ts` — пункт «Delete» |
| `IconChevronLeft` | `popover-header.ts` — кнопка «назад» в mobile popover |
| `IconChevronRight` | `popover-item-default.ts` — индикатор «есть вложенный popover» |
| `IconDotCircle` | `popover-item-default.ts` — fallback, если у item не задана иконка |
| `IconWarning` | `tools/stub/index.ts` — индикатор «тула не загружена» |

## Как использовать

```ts
import { IconArrowUp } from '../icons'; // путь зависит от глубины

return {
  icon: IconArrowUp,
  title: this.api.i18n.t('Move up'),
  onActivate: () => this.handleClick(),
  name: 'move-up',
};
```

В runtime Editor.js просто пишет `element.innerHTML = item.icon`, поэтому строка попадает в DOM как есть.

## Как добавить новую иконку

1. Подобрать SVG (Lucide, Tabler, Heroicons — что угодно с `viewBox="0 0 24 24"` или меньше).
2. Привести к `viewBox="0 0 20 20"`. Если оригинал в 24×24 — масштабируй геометрию вручную или оставь viewBox 24×24, но тогда потеряется визуальное соответствие остальным.
3. Поставить `stroke="currentColor"` (для line-иконок) или `fill="currentColor"` (для solid). **Не оставлять без атрибута** — иначе путь не отрисуется.
4. Унифицировать стиль штрихов: `stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`.
5. Минифицировать (можно SVGO с пресетом по умолчанию) и положить одной строкой в `src/components/icons/index.ts`.
6. Импортировать в нужный модуль — npm-пакет добавлять не надо.

## Что делать НЕ нужно

- Не возвращать `@codexteam/icons` — даже ради одной иконки. Вся причина выпиливания — не тащить пакет ради десятка строк SVG.
- Не добавлять `path { stroke: currentColor }` глобально. Если новая иконка не видна — у неё нет явного `stroke`/`fill` атрибута, фиксить надо саму иконку, а не CSS.
- Не выносить иконки в отдельный пакет / отдельный JS-файл с lazy-load — они инлайнятся в общий бандл `dist/editorjs.mjs`, это норм.
