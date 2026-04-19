# CLAUDE.md — Editor.js Fork

## Overview

Fork of [Editor.js](https://github.com/codex-team/editor.js) (v2.31.6) — block-style WYSIWYG editor with JSON output. TypeScript, Vite build, Apache-2.0 license.

Upstream: `codex-team/editor.js`. Fork: `AnisovAleksey/editor.js`.

## Development

```bash
npm install       # install dependencies
npm run dev       # dev server on port 3303
npm run build     # production build → dist/editorjs.{umd.js,mjs}
npm run lint:fix  # lint + autofix
```

After build, the parent project (`mediktest-pages`) uses `"@editorjs/editorjs": "file:./packages/editor-js"` to resolve from this local package.

## Architecture

### Entry Point

`src/codex.ts` — public `EditorJS` class. Creates `Core`, exports API shorthands (`blocks`, `caret`, `saver`, `toolbar`, etc.), exposes `isReady` promise.

### Core Bootstrap (`src/components/core.ts`)

Lifecycle: validate config → init modules → start → render blocks → enable observer.

All modules inherit from `src/components/__module.ts` (provides config, listeners, event dispatcher, RTL detection).

### Module System (`src/components/modules/`)

| Module | File | Responsibility |
|--------|------|----------------|
| **BlockManager** | `blockManager.ts` | Block CRUD, ordering, currentBlock/nextBlock |
| **Toolbar** | `toolbar/index.ts` | Plus button, toolbox, settings toggler, positioning |
| **BlockSettings** | `toolbar/blockSettings.ts` | Block tunes menu (delete, move up/down) |
| **InlineToolbar** | `toolbar/inline.ts` | Text formatting toolbar on selection |
| **Caret** | `caret.ts` | Cursor positioning and navigation |
| **Saver** | `saver.ts` | Serialize blocks → JSON (`OutputData`) |
| **Renderer** | `renderer.ts` | Render blocks to DOM |
| **Paste** | `paste.ts` | Paste event handling and conversion |
| **DragNDrop** | `dragNDrop.ts` | Drag and drop support |
| **UI** | `ui.ts` | Editor DOM structure, wrapper classes, responsive |
| **Tools** | `tools.ts` | Load, validate, categorize tools (block/inline/tune) |
| **ReadOnly** | `readonly.ts` | Read-only mode toggle |
| **ModificationsObserver** | `modificationsObserver.ts` | DOM mutation watching |
| **BlockSelection** | `blockSelection.ts` | Single block selection |
| **CrossBlockSelection** | `crossBlockSelection.ts` | Multi-block selection |
| **RectangleSelection** | `rectangleSelection.ts` | Rectangle drag selection |
| **BlockEvents** | `blockEvents.ts` | Block event delegation |

### API Layer (`src/components/modules/api/`)

Each API module exposes a slice of functionality to tools and external consumers:

`blocks`, `caret`, `events`, `i18n`, `listeners`, `notifier`, `readonly`, `sanitizer`, `saver`, `selection`, `styles`, `toolbar`, `tooltip`, `tools`, `ui`

Aggregated in `api/index.ts`, exposed as `editor.blocks.*`, `editor.caret.*`, etc.

### Block System

- **`src/components/block/index.ts`** — `Block` class: wraps a tool instance, manages element, data, lifecycle hooks (`render`, `rendered`, `save`, `validate`, `onPaste`, `moved`, `updated`, `removed`)
- **`src/components/block/api.ts`** — `BlockAPI`: limited interface for tool access to block
- **`src/components/blocks.ts`** — Block storage with proxy interface

### Tool Adapters (`src/components/tools/`)

Wrap user-provided tool classes into a consistent interface:

- `base.ts` → `BaseToolAdapter` (common: config, sanitizer, shortcuts)
- `block.ts` → `BlockToolAdapter` (toolbox entries, tunes, conversion)
- `inline.ts` → `InlineToolAdapter` (inline formatting)
- `tune.ts` → `BlockTuneAdapter` (block-level settings)
- `factory.ts` → `ToolsFactory` (creates appropriate adapter)
- `collection.ts` → `ToolsCollection` (manages tool sets)

### Built-in Tools

**Inline tools** (`src/components/inline-tools/`):
- `inline-tool-bold.ts` — Bold (Cmd+B)
- `inline-tool-italic.ts` — Italic (Cmd+I)
- `inline-tool-link.ts` — Link insertion
- `inline-tool-convert.ts` — Block type conversion

**Block tunes** (`src/components/block-tunes/`):
- `block-tune-move-up.ts` — Move block up
- `block-tune-move-down.ts` — Move block down
- `block-tune-delete.ts` — Delete block

### Popover System (`src/components/utils/popover/`)

Universal menu component used for toolbox, block settings, inline toolbar.

- `popover-abstract.ts` — Base class (items, search, events)
- `popover-desktop.ts` — Desktop: nested popovers, keyboard nav (Flipper)
- `popover-mobile.ts` — Mobile: bottom sheet
- `popover-inline.ts` — Inline positioning variant

Sub-components in `components/`:
- `popover-item/` — Item types: default (clickable), html (custom), separator
- `search-input/` — Filterable search
- `popover-header/` — Header with back button
- `hint/` — Tooltip hints

### Utilities (`src/components/utils/`)

- `bem.ts` — BEM class naming: `ne("ce-popover")` → factory for `ce-popover`, `ce-popover__item`, `ce-popover--opened`
- `events.ts` — `EventsDispatcher` (typed pub/sub)
- `listeners.ts` — DOM event listener management with tracking
- `caret.ts` — Caret positioning helpers
- `keyboard.ts` — Keyboard event helpers
- `sanitizer.ts` — HTML sanitization via html-janitor
- `blocks.ts` — Block data conversion
- `scroll-locker.ts` — Prevent scroll when modals open
- `flipper.ts` (in `components/`) — Keyboard navigation between focusable elements

### Styles (`src/styles/`)

CSS injected into page via JS at runtime (Vite plugin):

`main.css` (entry) → `variables.css`, `block.css`, `toolbar.css`, `inline-toolbar.css`, `popover.css`, `popover-inline.css`, `ui.css`, `animations.css`, `placeholders.css`, `input.css`, `export.css`, `stub.css`, `rtl.css`

### Events (`src/components/events/`)

Typed event classes: `BlockChanged`, `BlockHovered`, `RedactorDomChanged`, `EditorMobileLayoutToggled`, `FakeCursorAboutToBeToggled`, `FakeCursorHaveBeenSet`

## Key CSS Classes

| Class | Element |
|-------|---------|
| `.codex-editor` | Editor wrapper |
| `.ce-toolbar` | Block toolbar (left side) |
| `.ce-toolbar__plus` | Plus button |
| `.ce-toolbar__actions` | Settings button container |
| `.ce-toolbar__settings-btn` | Settings button |
| `.ce-toolbox` | Toolbox container (holds popover for adding blocks) |
| `.ce-popover` | Popover base |
| `.ce-popover--opened` | Popover visible |
| `.ce-popover--open-left` | Popover opens leftward |
| `.ce-popover--open-top` | Popover opens upward |
| `.ce-popover--inline` | Inline toolbar popover |
| `.ce-popover__container` | Popover inner container |
| `.ce-popover-item` | Menu item |
| `.ce-popover-item__icon` | Item icon |
| `.ce-popover-item__title` | Item label |
| `.ce-inline-toolbar` | Inline formatting toolbar |
| `.ce-block` | Block wrapper |
| `.ce-block--selected` | Selected block |

## Key Files for Toolbar Customization

These are the files most relevant for modifying toolbar behavior:

```
src/components/modules/toolbar/index.ts    — Toolbar module (positioning, plus button, toggling)
src/components/modules/toolbar/blockSettings.ts — Block settings menu
src/components/modules/ui.ts               — Creates editor DOM structure
src/components/utils/popover/              — All popover rendering logic
src/styles/toolbar.css                     — Toolbar styles
src/styles/popover.css                     — Popover styles
```

## Data Flow

```
EditorJS → Core → init modules → render blocks
                                      ↓
Tool.render() → Block DOM → ce-block elements
                                      ↓
User interaction → Toolbar/InlineToolbar/Popover
                                      ↓
editor.save() → Saver → iterate blocks → Tool.save() → OutputData (JSON)
```

## Types (`types/`)

Public type definitions organized by domain:

- `types/configs/` — `EditorConfig`, `SanitizerConfig`, `I18nConfig`, `PasteConfig`
- `types/tools/` — `BlockTool`, `InlineTool`, `ToolConfig`, `ToolSettings`, `MenuConfig`
- `types/tools/adapters/` — Adapter interfaces
- `types/api/` — API method interfaces
- `types/data-formats/` — `OutputData`, `BlockData`, `BlockId`
- `types/block-tunes/` — `BlockTune`, `BlockTuneData`
- `types/utils/popover/` — Popover types

## Dependencies

**Runtime:** `@editorjs/caret`, `@editorjs/dom-adapt`, `@editorjs/helpers`, `@editorjs/model`, `codex-notifier`, `codex-tooltip`

**Build:** Vite, TypeScript 5.0.3, ESLint, Cypress (E2E)

**Icons:** `@codexteam/icons` — SVG icons used in toolbar, tunes, inline tools

## Conventions

- BEM naming via `ne()` helper: `ne("ce-popover")` returns factory function
- Modules access each other via `this.Editor.ModuleName`
- Tools receive `API` object with scoped methods
- CSS is bundled into JS (no separate CSS file in dist)
- All user-facing strings go through i18n system
