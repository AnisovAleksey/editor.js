import type { InlineTool, API } from '../../../types';
import type { MenuConfig } from '../../../types/tools';
import type { Blocks } from '../../../types/api';
import SelectionUtils from '../selection';
import {
  captureBlockSelectionOffsets,
  applyBlockSelectionOffsets,
} from '../utils/selection-offsets';

/**
 * SVG icon for quote (double opening quotation marks, VK style)
 */
const ICON_QUOTE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.972 10l.01.14a3.54 3.54 0 0 1 .017.453l.001.157c0 4.28-2.686 7.75-6 7.75a.127.127 0 0 1-.063-.238c1.279-.73 2.132-1.464 2.558-2.203a5.474 5.474 0 0 0 .707-2.13A3.5 3.5 0 1 1 7.5 7a3.515 3.515 0 0 1 3.472 3.001zm9 0l.01.14a3.54 3.54 0 0 1 .017.453l.001.157c0 4.28-2.686 7.75-6 7.75a.127.127 0 0 1-.063-.238c1.279-.73 2.132-1.464 2.558-2.203a5.474 5.474 0 0 0 .707-2.13A3.5 3.5 0 1 1 16.5 7a3.515 3.515 0 0 1 3.472 3.001z"/></svg>`;

/**
 * Quote conversion inline tool.
 *
 * Converts the current block to a quote.
 * If the block is already a quote, converts back to paragraph.
 */
export default class QuoteConvertInlineTool implements InlineTool {
  public static isInline = true;
  public static title = 'Quote';

  private readonly blocksAPI: Blocks;

  constructor({ api }: { api: API }) {
    this.blocksAPI = api.blocks;
  }

  public render(): MenuConfig {
    return {
      icon: ICON_QUOTE,
      name: 'convert-quote',
      onActivate: async () => {
        const currentSelection = SelectionUtils.get();
        const currentBlock = this.blocksAPI.getBlockByElement(
          currentSelection.anchorNode as HTMLElement
        );

        if (!currentBlock) return;

        const offsets = captureBlockSelectionOffsets(currentBlock.holder);

        const isAlreadyQuote = currentBlock.name === 'quote';
        const targetTool = isAlreadyQuote ? 'paragraph' : 'quote';

        const newBlock = await this.blocksAPI.convert(
          currentBlock.id,
          targetTool
        );

        const newBlockHolder = this.blocksAPI.getById(newBlock.id)?.holder ?? null;

        if (newBlockHolder && offsets) {
          applyBlockSelectionOffsets(newBlockHolder, offsets);
        }
      },
      isActive: () => {
        const currentSelection = SelectionUtils.get();

        if (!currentSelection.anchorNode) return false;

        const currentBlock = this.blocksAPI.getBlockByElement(
          currentSelection.anchorNode as HTMLElement
        );

        if (!currentBlock) return false;

        return currentBlock.name === 'quote';
      },
    };
  }
}
