/**
 * Context passed to toolbar plugin's render() method.
 * Provides access to the container and core toolbar actions.
 */
export interface ToolbarPluginContext {
  /** Container element where plugin should append its UI elements */
  actionsContainer: HTMLElement;
  /** Toolbox element (can be reparented by plugin for custom positioning) */
  toolboxElement: HTMLElement;
  /** Block settings element (can be reparented by plugin for custom positioning) */
  blockSettingsElement: HTMLElement;
  /**
   * Toggle the toolbox (add block menu).
   * @param useHoveredBlock - if true (default), sets currentBlock to hoveredBlock before toggling.
   *                          Set to false when the caret already points to the correct block.
   */
  toggleToolbox(useHoveredBlock?: boolean): void;
  /**
   * Toggle block settings (move/delete menu).
   * @param useHoveredBlock - if true (default), uses hoveredBlock for settings.
   *                          Set to false to use the current caret block.
   */
  toggleBlockSettings(useHoveredBlock?: boolean): void;
  /** Check if toolbox is currently open */
  isToolboxOpen(): boolean;
  /** Check if block settings are currently open */
  isBlockSettingsOpen(): boolean;
}

/**
 * Information about the block that the toolbar is hovering over.
 */
export interface ToolbarBlockInfo {
  /** Block id */
  id: string;
  /** Block tool name */
  name: string;
  /** Whether the block is empty */
  isEmpty: boolean;
  /** Block holder DOM element */
  holder: HTMLElement;
  /** Total number of blocks in the editor */
  blockCount: number;
  /** Whether the editor is in mobile mode */
  isMobile: boolean;
}

/**
 * Interface for toolbar plugins that customize the toolbar UI.
 * A toolbar plugin controls what buttons/elements appear in the toolbar actions zone.
 */
export interface ToolbarPlugin {
  /** Create UI elements and append them to ctx.actionsContainer */
  render(ctx: ToolbarPluginContext): void;
  /** Called when toolbar moves to a new block */
  onBlockHover(block: ToolbarBlockInfo): void;
  /** Cleanup when toolbar is destroyed */
  destroy(): void;
}
