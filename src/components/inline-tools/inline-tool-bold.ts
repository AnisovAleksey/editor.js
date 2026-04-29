import type { InlineTool, SanitizerConfig } from '../../../types';
import type { MenuConfig } from '../../../types/tools';

const IconBold = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.246 12.66c.482.33.872.746 1.173 1.246.3.5.451 1.088.451 1.764 0 .812-.17 1.498-.513 2.058-.342.56-.832 1.002-1.471 1.325-.677.346-1.457.59-2.34.733-.883.143-1.923.214-3.118.214H4.5a.5.5 0 1 1 0-1H5c1 0 1-1 1-3V8c0-2 0-3-1-3h-.5a.5.5 0 0 1 0-1h8.312c2.187 0 3.766.3 4.735.902.97.601 1.455 1.488 1.455 2.661 0 .541-.11 1.017-.327 1.426-.218.41-.53.765-.936 1.066a5.618 5.618 0 0 1-1.32.722c-.51.203-1.06.372-1.645.507v.214a9.13 9.13 0 0 1 1.826.39c.632.198 1.18.456 1.646.772zM15 7.83c0-.89-.301-1.585-.904-2.083C13.494 5.25 12.591 5 11.386 5c-.172 0-.396.006-.673.017l-.425.017a.3.3 0 0 0-.288.3V10.7a.3.3 0 0 0 .3.3h.407c1.467 0 2.55-.285 3.247-.855C14.65 9.575 15 8.804 15 7.83zm1 7.676c0-1.13-.402-1.998-1.205-2.6-.804-.604-1.96-.906-3.466-.906-.174 0-.404.006-.692.017a60.6 60.6 0 0 0-.35.015.3.3 0 0 0-.287.3v5.66c.082.282.338.521.767.716.43.195.95.292 1.562.292 1.087 0 1.97-.306 2.65-.917.68-.61 1.021-1.47 1.021-2.577z"/></svg>`;

/**
 * Bold Tool
 *
 * Inline Toolbar Tool
 *
 * Makes selected text bolder
 */
export default class BoldInlineTool implements InlineTool {
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @returns {boolean}
   */
  public static isInline = true;

  /**
   * Title for hover-tooltip
   */
  public static title = 'Bold';

  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  public static get sanitize(): SanitizerConfig {
    return {
      b: {},
    } as SanitizerConfig;
  }

  /**
   * Native Document's command that uses for Bold
   */
  private readonly commandName: string = 'bold';

  /**
   * Create button for Inline Toolbar
   */
  public render(): MenuConfig {
    return {
      icon: IconBold,
      name: 'bold',
      onActivate: () => {
        document.execCommand(this.commandName);
      },
      isActive: () => document.queryCommandState(this.commandName),
    };
  }

  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  public get shortcut(): string {
    return 'CMD+B';
  }
}
