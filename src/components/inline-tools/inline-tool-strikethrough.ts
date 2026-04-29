import type { InlineTool, SanitizerConfig } from '../../../types';
import type { MenuConfig } from '../../../types/tools';

/**
 * SVG icon for strikethrough
 */
const IconStrikethrough = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12.056 20c-.875 0-1.691-.114-2.448-.342-.757-.229-1.398-.5-1.923-.814l-.696.75h-.858l-.131-5.492h.868c.195.52.444 1.07.747 1.648a8.039 8.039 0 0 0 1.05 1.552c.41.478.87.867 1.377 1.167.508.3 1.102.45 1.781.45.915 0 1.617-.238 2.105-.713.487-.474.731-1.072.731-1.792 0-.592-.207-1.09-.62-1.493-.414-.403-1.055-.751-1.923-1.044-.565-.192-1.085-.37-1.56-.535-.474-.164-.92-.332-1.336-.503-.963-.407-1.678-.988-2.145-1.744-.468-.757-.702-1.602-.702-2.537 0-.592.122-1.161.364-1.707a4.522 4.522 0 0 1 1.06-1.471c.444-.407 1.012-.739 1.705-.996a6.456 6.456 0 0 1 2.26-.384c.795 0 1.538.116 2.231.348s1.238.465 1.635.7l.616-.641h.878l.08 5.18h-.867a20.506 20.506 0 0 0-.712-1.707 7.501 7.501 0 0 0-.863-1.45 3.979 3.979 0 0 0-1.14-.99c-.43-.247-.935-.37-1.514-.37-.727 0-1.32.218-1.781.653s-.692.974-.692 1.616c0 .607.2 1.102.6 1.488.401.385 1.025.724 1.873 1.016.498.179 1.006.357 1.524.536.518.178.979.35 1.383.513.975.4 1.717.951 2.225 1.654s.762 1.574.762 2.617c0 .656-.145 1.291-.434 1.905a4.38 4.38 0 0 1-1.17 1.53c-.539.45-1.161.796-1.868 1.038-.706.243-1.53.364-2.472.364z"/><path fill="currentColor" d="m2 11h20v2h-20z"/></svg>`;

/**
 * Strikethrough Tool
 *
 * Inline Toolbar Tool — applies <s> tag to selected text
 */
export default class StrikethroughInlineTool implements InlineTool {
  public static isInline = true;

  public static title = 'Strikethrough';

  public static get sanitize(): SanitizerConfig {
    return {
      s: {},
      strike: {},
    } as SanitizerConfig;
  }

  private readonly commandName: string = 'strikeThrough';

  public render(): MenuConfig {
    return {
      icon: IconStrikethrough,
      name: 'strikethrough',
      onActivate: () => {
        document.execCommand(this.commandName);
      },
      isActive: () => document.queryCommandState(this.commandName),
    };
  }

  public get shortcut(): string {
    return 'CMD+SHIFT+S';
  }
}
