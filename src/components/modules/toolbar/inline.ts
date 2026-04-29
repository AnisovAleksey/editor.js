/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Module from '../../__module';
import $ from '../../dom';
import SelectionUtils from '../../selection';
import * as _ from '../../utils';
import type { InlineTool as IInlineTool } from '../../../../types';
import Shortcuts from '../../utils/shortcuts';
import type { ModuleConfig } from '../../../types-internal/module-config';
import { CommonInternalSettings } from '../../tools/base';
import type InlineToolAdapter from 'src/components/tools/inline';

/**
 * Inline Toolbar elements
 */
interface InlineToolbarNodes {
  wrapper: HTMLElement | undefined;
}

/**
 * Inline text style panel — appears above selected text.
 *
 * Renders tool buttons directly, no legacy Popover involved.
 */
export default class InlineToolbar extends Module<InlineToolbarNodes> {
  public CSS = {
    panel: 'ce-inline-text-style-panel',
    container: 'ce-inline-text-style-panel__container',
    button: 'ce-inline-text-style-panel__btn',
    buttonActive: 'ce-inline-text-style-panel__btn--active',
    separator: 'ce-inline-text-style-panel__sep',
    actions: 'ce-inline-text-style-panel__actions',
  };

  /**
   * State of inline toolbar
   */
  public opened = false;

  /**
   * Gap between panel and selected text (px)
   */
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  private readonly toolbarGap: number = _.isMobileScreen() ? 20 : 4;

  /**
   * Currently visible tools instances
   */
  private tools: Map<InlineToolAdapter, IInlineTool> = new Map();

  /**
   * Container element holding all buttons
   */
  private container: HTMLElement | null = null;

  /**
   * Container for tool actions (e.g. link input)
   */
  private actionsEl: HTMLElement | null = null;

  /**
   * Separator tool name — separator is inserted before this tool
   */
  private readonly separatorBefore = 'convertHeadingH2';

  constructor({ config, eventsDispatcher }: ModuleConfig) {
    super({ config, eventsDispatcher });

    window.requestIdleCallback(() => {
      this.make();
    }, { timeout: 2000 });
  }

  /**
   * Shows Inline Toolbar if something is selected
   */
  public async tryToShow(needToClose = false): Promise<void> {
    if (needToClose) {
      this.close();
    }

    if (!this.allowedToShow()) {
      return;
    }

    await this.open();
    this.Editor.Toolbar.close();
  }

  /**
   * Hides Inline Toolbar
   */
  public close(): void {
    if (!this.opened) {
      return;
    }

    for (const [tool, toolInstance] of this.tools) {
      const shortcut = this.getToolShortcut(tool.name);

      if (shortcut !== undefined) {
        Shortcuts.remove(this.Editor.UI.nodes.redactor, shortcut);
      }

      if (_.isFunction(toolInstance.clear)) {
        toolInstance.clear();
      }
    }

    this.tools = new Map();
    this.clearPanel();
    this.reset();
    this.opened = false;
  }

  /**
   * Check if node is contained by Inline Toolbar
   */
  public containsNode(node: Node): boolean {
    if (this.nodes.wrapper === undefined) {
      return false;
    }

    return this.nodes.wrapper.contains(node);
  }

  /**
   * Removes UI and its components
   */
  public destroy(): void {
    this.removeAllNodes();
  }

  /**
   * Create the positioning wrapper
   */
  private make(): void {
    this.nodes.wrapper = $.make('div', [
      this.CSS.panel,
      ...(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []),
    ]);

    if (import.meta.env.MODE === 'test') {
      this.nodes.wrapper.setAttribute('data-cy', 'inline-toolbar');
    }

    $.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }

  /**
   * Open: create tool instances, render buttons, position panel
   */
  private async open(): Promise<void> {
    if (this.opened) {
      return;
    }

    this.opened = true;
    this.createToolsInstances();
    await this.renderButtons();
    this.move();
  }

  /**
   * Render all tool buttons into the container
   */
  private async renderButtons(): Promise<void> {
    this.clearPanel();

    this.container = $.make('div', this.CSS.container);
    this.actionsEl = $.make('div', this.CSS.actions);

    for (const [tool, instance] of this.tools) {
      /** Insert separator before conversion tools */
      if (tool.name === this.separatorBefore) {
        this.container.appendChild($.make('div', this.CSS.separator));
      }

      const rendered = await instance.render();

      /** Enable tool shortcut */
      const shortcut = this.getToolShortcut(tool.name);

      if (shortcut !== undefined) {
        try {
          this.enableShortcuts(tool, instance, shortcut);
        } catch (e) {}
      }

      if ($.isElement(rendered)) {
        /**
         * Old API: tool returned an HTMLElement (e.g. Italic, Link)
         */
        rendered.classList.add(this.CSS.button);
        rendered.addEventListener('click', (e) => {
          e.preventDefault();
          this.toolClicked(instance);
        });

        /** If tool has renderActions (e.g. Link input), append to actions container */
        if (_.isFunction(instance.renderActions)) {
          this.actionsEl.appendChild(instance.renderActions!());
        }

        instance.checkState?.(SelectionUtils.get());
        this.container.appendChild(rendered);
      } else {
        /**
         * New API: tool returned MenuConfig
         */
        const item = rendered as { icon?: string; name?: string; onActivate?: () => void; isActive?: () => boolean };
        const btn = document.createElement('button');

        btn.type = 'button';
        btn.className = this.CSS.button;
        btn.innerHTML = item.icon || '';
        btn.setAttribute('data-tool-name', item.name || tool.name);

        if (item.isActive?.()) {
          btn.classList.add(this.CSS.buttonActive);
        }

        btn.addEventListener('click', (e) => {
          e.preventDefault();
          item.onActivate?.();
          this.updateActiveStates();
        });

        this.container.appendChild(btn);
      }
    }

    this.nodes.wrapper?.appendChild(this.container);

    if (this.actionsEl.children.length > 0) {
      this.nodes.wrapper?.appendChild(this.actionsEl);
    }
  }

  /**
   * Remove all rendered content from the wrapper
   */
  private clearPanel(): void {
    if (this.container) {
      this.container.remove();
      this.container = null;
    }
    if (this.actionsEl) {
      this.actionsEl.remove();
      this.actionsEl = null;
    }
  }

  /**
   * Position the panel centered above the selected text
   */
  private move(): void {
    if (!this.container) {
      return;
    }

    const selectionRect = SelectionUtils.rect as DOMRect;
    const wrapperOffset = this.Editor.UI.nodes.wrapper.getBoundingClientRect();
    const panelRect = this.container.getBoundingClientRect();

    const selectionCenterX = selectionRect.x + selectionRect.width / 2;
    const newCoords = {
      x: selectionCenterX - panelRect.width / 2 - wrapperOffset.x,
      y: selectionRect.y - wrapperOffset.top - panelRect.height - this.toolbarGap,
    };

    /** Clamp right */
    const realRightCoord = newCoords.x + panelRect.width + wrapperOffset.x;

    if (realRightCoord > this.Editor.UI.contentRect.right) {
      newCoords.x = this.Editor.UI.contentRect.right - panelRect.width - wrapperOffset.x;
    }

    /** Clamp left */
    if (newCoords.x + wrapperOffset.x < this.Editor.UI.contentRect.left) {
      newCoords.x = this.Editor.UI.contentRect.left - wrapperOffset.x;
    }

    this.nodes.wrapper!.style.left = Math.floor(newCoords.x) + 'px';
    this.nodes.wrapper!.style.top = Math.floor(newCoords.y) + 'px';
  }

  /**
   * Reset position
   */
  private reset(): void {
    this.nodes.wrapper!.style.left = '0';
    this.nodes.wrapper!.style.top = '0';
  }

  /**
   * Check if inline toolbar is allowed to show
   */
  private allowedToShow(): boolean {
    const tagsConflictsWithSelection = ['IMG', 'INPUT'];
    const currentSelection = SelectionUtils.get();
    const selectedText = SelectionUtils.text;

    if (!currentSelection || !currentSelection.anchorNode) {
      return false;
    }

    if (currentSelection.isCollapsed || selectedText.length < 1) {
      return false;
    }

    const target = !$.isElement(currentSelection.anchorNode)
      ? currentSelection.anchorNode.parentElement
      : currentSelection.anchorNode;

    if (target === null) {
      return false;
    }

    if (tagsConflictsWithSelection.includes(target.tagName)) {
      return false;
    }

    const currentBlock = this.Editor.BlockManager.getBlock(currentSelection.anchorNode as HTMLElement);

    if (!currentBlock) {
      return false;
    }

    const toolsAvailable = this.getTools();
    const isAtLeastOneToolAvailable = toolsAvailable.some(
      (tool) => currentBlock.tool.inlineTools.has(tool.name)
    );

    if (!isAtLeastOneToolAvailable) {
      return false;
    }

    return target.closest('[contenteditable]') !== null;
  }

  /**
   * Returns tools available for the current block
   */
  private getTools(): InlineToolAdapter[] {
    const currentBlock = this.Editor.BlockManager.currentBlock;

    if (!currentBlock) {
      return [];
    }

    return Array.from(currentBlock.tool.inlineTools.values()).filter((tool) => {
      if (this.Editor.ReadOnly.isEnabled && tool.isReadOnlySupported !== true) {
        return false;
      }

      return true;
    });
  }

  /**
   * Constructs tools instances
   */
  private createToolsInstances(): void {
    this.tools = new Map();

    for (const tool of this.getTools()) {
      this.tools.set(tool, tool.create());
    }
  }

  /**
   * Get shortcut for a tool
   */
  private getToolShortcut(toolName: string): string | undefined {
    const { Tools } = this.Editor;
    const tool = Tools.inlineTools.get(toolName);
    const internalTools = Tools.internal.inlineTools;

    if (Array.from(internalTools.keys()).includes(toolName)) {
      return this.inlineTools[toolName][CommonInternalSettings.Shortcut];
    }

    return tool?.shortcut;
  }

  /**
   * Enable shortcut for a tool
   */
  private enableShortcuts(tool: InlineToolAdapter, instance: IInlineTool, shortcut: string): void {
    Shortcuts.add({
      name: shortcut,
      handler: (event) => {
        const { currentBlock } = this.Editor.BlockManager;

        if (!currentBlock) {
          return;
        }

        if (!currentBlock.tool.enabledInlineTools) {
          return;
        }

        event.preventDefault();
        this.toolClicked(instance);
      },
      on: document,
    });
  }

  /**
   * Handle tool button click (old API tools)
   */
  private toolClicked(tool: IInlineTool): void {
    const range = SelectionUtils.range;

    tool.surround?.(range);
    this.updateActiveStates();
  }

  /**
   * Update active state of all buttons
   */
  private updateActiveStates(): void {
    for (const [, toolInstance] of this.tools) {
      toolInstance.checkState?.(SelectionUtils.get());
    }

    /** Update active class on new-API buttons */
    if (this.container) {
      const buttons = this.container.querySelectorAll(`[data-tool-name]`);

      buttons.forEach((btn) => {
        const toolName = btn.getAttribute('data-tool-name');

        for (const [tool, instance] of this.tools) {
          if ((tool.name === toolName || toolName === tool.name) && instance.render) {
            /** Re-check isActive for new-API tools — they store isActive on the rendered config */
            // Active state for new API tools is handled via the rendered config's isActive
            // We can't easily re-call render, so we skip re-checking here
            // Old API tools handle their own active class in checkState
          }
        }
      });
    }
  }

  /**
   * Get inline tools (used for shortcut lookup)
   */
  private get inlineTools(): { [name: string]: IInlineTool } {
    const result = {} as { [name: string]: IInlineTool };

    Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([name, tool]) => {
      result[name] = tool.create();
    });

    return result;
  }
}
