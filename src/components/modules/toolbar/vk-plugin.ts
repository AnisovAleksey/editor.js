import type {
  ToolbarPlugin,
  ToolbarPluginContext,
  ToolbarBlockInfo,
} from '../../../../types/configs/toolbar-plugin';

/**
 * SVG icon: plus sign
 */
const ICON_PLUS = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
  <line x1="12" y1="7" x2="12" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`;

/**
 * SVG icon: 6-dot drag handle (2×3)
 */
const ICON_DRAG_HANDLE = `<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6-12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd"/></svg>`;

/**
 * VK-style toolbar plugin for Editor.js.
 *
 * Both "+" and drag handle are separate absolutely-positioned elements
 * inside .codex-editor, positioned via JS relative to blocks.
 *
 * The toolbox and block settings elements are reparented into these
 * buttons, so popovers naturally appear near the buttons without
 * any positioning hacks.
 *
 * - "+" follows the CARET — visible only when caret is in an empty block
 * - Drag handle follows HOVER — visible only on non-empty blocks
 * - Empty blocks do not react to hover
 * - "+" and drag handle can be visible simultaneously on different blocks
 */
export default class VkToolbarPlugin implements ToolbarPlugin {
  private ctx: ToolbarPluginContext | null = null;

  /** Plus button (follows caret to empty blocks) */
  private plusButton: HTMLElement | null = null;
  /** Drag handle (follows hover to filled blocks) */
  private dragHandle: HTMLElement | null = null;
  /** Editor wrapper (.codex-editor) */
  private editorWrapper: HTMLElement | null = null;

  /** Whether elements have been initialized */
  private initialized = false;

  /** Bound listeners for cleanup */
  private onClickBound: ((e: Event) => void) | null = null;
  private onKeyUpBound: ((e: Event) => void) | null = null;
  private onInputBound: ((e: Event) => void) | null = null;
  private onFocusInBound: ((e: Event) => void) | null = null;

  public render(ctx: ToolbarPluginContext): void {
    this.ctx = ctx;

    // Hide the core toolbar — we use our own elements
    const toolbarWrapper = ctx.actionsContainer.closest('.ce-toolbar') as HTMLElement | null;
    if (toolbarWrapper) {
      toolbarWrapper.classList.add('ce-toolbar--vk-hidden');
    }

    // Toolbar DOM is not yet in .codex-editor during render(),
    // so schedule init for the next frame when it will be attached.
    requestAnimationFrame(() => {
      if (!this.initialized) {
        this.initElements();
      }
    });
  }

  public onBlockHover(block: ToolbarBlockInfo): void {
    if (!this.initialized) {
      this.initElements();
    }
    if (!this.dragHandle || !this.editorWrapper) return;

    // On mobile — hide separate elements
    if (block.isMobile) {
      this.dragHandle.style.display = 'none';
      return;
    }

    if (block.isEmpty) {
      // Empty blocks don't react to hover — hide drag handle
      this.dragHandle.style.display = 'none';
    } else {
      // Filled block — position and show drag handle
      this.positionElement(this.dragHandle, block.holder);
      this.dragHandle.style.display = '';
    }
  }

  public destroy(): void {
    if (this.editorWrapper) {
      if (this.onClickBound) this.editorWrapper.removeEventListener('click', this.onClickBound, true);
      if (this.onKeyUpBound) this.editorWrapper.removeEventListener('keyup', this.onKeyUpBound, true);
      if (this.onInputBound) this.editorWrapper.removeEventListener('input', this.onInputBound, true);
      if (this.onFocusInBound) this.editorWrapper.removeEventListener('focusin', this.onFocusInBound, true);
    }
    this.plusButton?.remove();
    this.dragHandle?.remove();
    this.plusButton = null;
    this.dragHandle = null;
    this.ctx = null;
    this.editorWrapper = null;
  }

  /**
   * Create elements and attach listeners.
   */
  private initElements(): void {
    if (!this.ctx) return;

    this.editorWrapper = this.ctx.actionsContainer.closest('.codex-editor') as HTMLElement;
    if (!this.editorWrapper) return;

    this.initialized = true;

    // --- Plus button (VK-style circle) ---
    this.plusButton = document.createElement('div');
    this.plusButton.className = 'ce-toolbar-vk-plus';
    this.plusButton.style.display = 'none';

    // Icon trigger is a separate element so its mousedown listener
    // doesn't intercept clicks inside the sibling toolbox popover.
    const plusTrigger = document.createElement('div');
    plusTrigger.className = 'ce-toolbar-vk-plus__trigger';
    plusTrigger.innerHTML = ICON_PLUS;
    plusTrigger.addEventListener('mousedown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.ctx?.toggleToolbox(false);
    });
    this.plusButton.appendChild(plusTrigger);

    // Toolbox sits as a sibling of the trigger — clicks inside it
    // never bubble through the trigger, so no guard checks needed.
    this.plusButton.appendChild(this.ctx.toolboxElement);
    this.editorWrapper.appendChild(this.plusButton);

    // --- Drag handle ---
    this.dragHandle = document.createElement('div');
    this.dragHandle.className = 'ce-toolbar-vk-drag';
    this.dragHandle.style.display = 'none';

    const dragTrigger = document.createElement('div');
    dragTrigger.className = 'ce-toolbar-vk-drag__trigger';
    dragTrigger.innerHTML = ICON_DRAG_HANDLE;
    dragTrigger.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      this.ctx?.toggleBlockSettings(true);
    });
    this.dragHandle.appendChild(dragTrigger);

    // Block settings popover sits as a sibling of the trigger.
    this.dragHandle.appendChild(this.ctx.blockSettingsElement);
    this.editorWrapper.appendChild(this.dragHandle);

    // --- Caret tracking listeners ---
    this.onClickBound = () => this.updatePlusButton();
    this.onKeyUpBound = () => this.updatePlusButton();
    this.onInputBound = () => this.onInput();
    this.onFocusInBound = () => this.updatePlusButton();

    this.editorWrapper.addEventListener('click', this.onClickBound, true);
    this.editorWrapper.addEventListener('keyup', this.onKeyUpBound, true);
    this.editorWrapper.addEventListener('input', this.onInputBound, true);
    this.editorWrapper.addEventListener('focusin', this.onFocusInBound, true);

    // Run immediately in case the editor already has focus
    this.updatePlusButton();
  }

  /**
   * Position an element to the left of a block's content area.
   * For table blocks with resized width, anchors to the actual table element
   * so the handle stays at the table's top-left corner.
   */
  private positionElement(el: HTMLElement, blockHolder: HTMLElement): void {
    if (!this.editorWrapper) return;

    const wrapperRect = this.editorWrapper.getBoundingClientRect();
    const blockRect = blockHolder.getBoundingClientRect();

    const contentEl = blockHolder.querySelector('.ce-block__content') as HTMLElement;
    const contentRect = contentEl ? contentEl.getBoundingClientRect() : blockRect;

    const elSize = 34;
    const gap = 6;

    // For table blocks, anchor to .vk-table so handle aligns with the first row
    const tableEl = blockHolder.querySelector('.vk-table') as HTMLElement;
    const isTable = !!tableEl;
    const leftRef = tableEl ?? contentEl ?? blockHolder;
    const leftRefRect = leftRef.getBoundingClientRect();

    const tableGap = isTable ? 15 : gap;

    let top: number;
    if (tableEl) {
      const firstRow = tableEl.querySelector('tr');
      const rowRect = firstRow ? firstRow.getBoundingClientRect() : leftRefRect;
      top = rowRect.top - wrapperRect.top + (rowRect.height - elSize) / 2 - 4;
    } else {
      top = blockRect.top - wrapperRect.top + (blockRect.height - elSize) / 2;
    }
    const left = leftRefRect.left - wrapperRect.left - elSize - tableGap;

    el.style.top = `${top}px`;
    el.style.left = `${left}px`;
  }

  /**
   * Handle input events.
   */
  private onInput(): void {
    this.updatePlusButton();
    this.updateDragOnInput();
  }

  /**
   * Update drag handle visibility when typing in a block.
   */
  private updateDragOnInput(): void {
    if (!this.dragHandle || !this.editorWrapper) return;

    const blockEl = this.getFocusedBlock();
    if (!blockEl) return;

    if (this.isBlockEmpty(blockEl)) {
      this.dragHandle.style.display = 'none';
    } else {
      this.positionElement(this.dragHandle, blockEl);
      this.dragHandle.style.display = '';
    }
  }

  /**
   * Find which block the caret is in and update the "+" button.
   */
  private updatePlusButton(): void {
    if (!this.plusButton || !this.editorWrapper) return;

    const blockEl = this.getFocusedBlock();
    if (!blockEl) {
      this.plusButton.style.display = 'none';
      return;
    }

    if (this.isBlockEmpty(blockEl)) {
      this.positionElement(this.plusButton, blockEl);
      this.plusButton.style.display = '';
    } else {
      this.plusButton.style.display = 'none';
    }
  }

  /**
   * Get the .ce-block element that contains the caret.
   */
  private getFocusedBlock(): HTMLElement | null {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return null;

    const anchor = sel.anchorNode;
    if (!anchor) return null;

    const el = anchor instanceof HTMLElement ? anchor : anchor.parentElement;
    return (el?.closest('.ce-block') as HTMLElement) ?? null;
  }

  /**
   * A block is "empty" only when it is a blank paragraph — the default
   * state before the user picks a block type.
   */
  private isBlockEmpty(blockEl: Element): boolean {
    const p = blockEl.querySelector('.ce-paragraph');
    return !!p && !p.textContent?.trim();
  }
}
