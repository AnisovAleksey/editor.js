import $  from '../../dom';
import I18n from '../../i18n';
import { I18nInternalNS } from '../../i18n/namespace-internal';
import * as tooltip from '../../utils/tooltip';
import { IconMenu, IconPlus } from '@codexteam/icons';
import { beautifyShortcut } from '../../utils';
import { getKeyboardKeyForCode } from '../../utils/keyboard';
import type { ToolbarPlugin, ToolbarPluginContext, ToolbarBlockInfo } from '../../../../types/configs/toolbar-plugin';

/**
 * CSS classes used by the default toolbar plugin
 */
const CSS = {
  plusButton: 'ce-toolbar__plus',
  plusButtonShortcut: 'ce-toolbar__plus-shortcut',
  settingsToggler: 'ce-toolbar__settings-btn',
  settingsTogglerHidden: 'ce-toolbar__settings-btn--hidden',
};

/**
 * Default toolbar plugin — ships with Editor.js.
 * Creates the "+" (plus) button and settings toggler (⋮ menu icon).
 */
export default class DefaultToolbarPlugin implements ToolbarPlugin {
  private plusButton: HTMLElement | null = null;
  private settingsToggler: HTMLElement | null = null;
  private ctx: ToolbarPluginContext | null = null;

  /**
   * Create UI elements and append them to the actions container
   */
  public render(ctx: ToolbarPluginContext): void {
    this.ctx = ctx;

    /**
     * Plus button
     */
    this.plusButton = $.make('div', CSS.plusButton, {
      innerHTML: IconPlus,
    });
    ctx.actionsContainer.appendChild(this.plusButton);

    this.plusButton.addEventListener('click', () => {
      tooltip.hide(true);
      ctx.toggleToolbox();
    });

    /**
     * Tooltip for the plus button
     */
    const tooltipContent = $.make('div');

    tooltipContent.appendChild(document.createTextNode(I18n.ui(I18nInternalNS.ui.toolbar.toolbox, 'Add')));
    tooltipContent.appendChild($.make('div', CSS.plusButtonShortcut, {
      textContent: '/',
    }));

    tooltip.onHover(this.plusButton, tooltipContent, {
      hidingDelay: 400,
    });

    /**
     * Settings toggler (⋮ menu icon)
     */
    this.settingsToggler = $.make('span', CSS.settingsToggler, {
      innerHTML: IconMenu,
    });
    ctx.actionsContainer.appendChild(this.settingsToggler);

    /**
     * Tooltip for the settings toggler
     */
    void this.addSettingsTooltip();

    /**
     * Settings toggler click handler
     * Uses mousedown instead of click for Safari/FF selection preservation
     */
    this.settingsToggler.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      ctx.toggleBlockSettings();
      tooltip.hide(true);
    }, true);
  }

  /**
   * Called when toolbar moves to a new block.
   * Hides settings toggler when there's only one empty block.
   */
  public onBlockHover(block: ToolbarBlockInfo): void {
    if (!this.settingsToggler) {
      return;
    }

    if (block.blockCount === 1 && block.isEmpty) {
      this.settingsToggler.classList.add(CSS.settingsTogglerHidden);
    } else {
      this.settingsToggler.classList.remove(CSS.settingsTogglerHidden);
    }
  }

  /**
   * Cleanup
   */
  public destroy(): void {
    this.plusButton?.remove();
    this.settingsToggler?.remove();
    this.plusButton = null;
    this.settingsToggler = null;
    this.ctx = null;
  }

  /**
   * Creates and attaches the tooltip for the settings toggler
   */
  private async addSettingsTooltip(): Promise<void> {
    if (!this.settingsToggler) {
      return;
    }

    const blockTunesTooltip = $.make('div');
    const blockTunesTooltipEl = $.text(I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune'));
    const slashRealKey = await getKeyboardKeyForCode('Slash', '/');

    blockTunesTooltip.appendChild(blockTunesTooltipEl);
    blockTunesTooltip.appendChild($.make('div', CSS.plusButtonShortcut, {
      textContent: beautifyShortcut(`CMD + ${slashRealKey}`),
    }));

    tooltip.onHover(this.settingsToggler, blockTunesTooltip, {
      hidingDelay: 400,
    });
  }
}
