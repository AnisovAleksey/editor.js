import type { InlineTool, SanitizerConfig } from '../../../types';

const IconItalic = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m6 20 .192-.823c.218-.008.515-.032.89-.073a4.42 4.42 0 0 0 .869-.164c.293-.098.516-.246.67-.445.155-.2.262-.43.322-.694l2.582-11.185a4.53 4.53 0 0 0 .079-.395c.015-.105.022-.184.022-.237 0-.315-.174-.561-.524-.738s-.885-.318-1.607-.423l.192-.823h8.874l-.192.823c-.24.015-.548.05-.924.107a5.816 5.816 0 0 0-.846.175c-.308.098-.536.25-.682.457-.147.206-.25.438-.31.693l-2.582 11.197c-.03.128-.055.248-.074.36-.018.113-.028.2-.028.26 0 .376.175.637.524.784.35.146.89.253 1.619.32l-.192.824z"/></svg>`;

/**
 * Italic Tool
 *
 * Inline Toolbar Tool
 *
 * Style selected text with italic
 */
export default class ItalicInlineTool implements InlineTool {
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @returns {boolean}
   */
  public static isInline = true;

  /**
   * Title for hover-tooltip
   */
  public static title = 'Italic';

  /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */
  public static get sanitize(): SanitizerConfig {
    return {
      i: {},
    } as SanitizerConfig;
  }

  /**
   * Native Document's command that uses for Italic
   */
  private readonly commandName: string = 'italic';

  /**
   * Styles
   */
  private readonly CSS = {
    button: 'ce-inline-tool',
    buttonActive: 'ce-inline-tool--active',
    buttonModifier: 'ce-inline-tool--italic',
  };

  /**
   * Elements
   */
  private nodes: {button: HTMLButtonElement} = {
    button: null,
  };

  /**
   * Create button for Inline Toolbar
   */
  public render(): HTMLElement {
    this.nodes.button = document.createElement('button') as HTMLButtonElement;
    this.nodes.button.type = 'button';
    this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier);
    this.nodes.button.innerHTML = IconItalic;

    return this.nodes.button;
  }

  /**
   * Wrap range with <i> tag
   */
  public surround(): void {
    document.execCommand(this.commandName);
  }

  /**
   * Check selection and set activated state to button if there are <i> tag
   */
  public checkState(): boolean {
    const isActive = document.queryCommandState(this.commandName);

    this.nodes.button.classList.toggle(this.CSS.buttonActive, isActive);

    return isActive;
  }

  /**
   * Set a shortcut
   */
  public get shortcut(): string {
    return 'CMD+I';
  }
}
