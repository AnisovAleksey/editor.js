import type { InlineTool, API } from '../../../types';
import type { MenuConfig } from '../../../types/tools';
import type { Blocks, Selection, Caret } from '../../../types/api';
import SelectionUtils from '../selection';

/**
 * SVG icons for headings
 */
const ICON_H2 = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><text x="4" y="20" font-family="Georgia, 'Times New Roman', serif" font-size="20" font-weight="700" fill="currentColor">H</text></svg>`;
const ICON_H3 = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><text x="6" y="19" font-family="Georgia, 'Times New Roman', serif" font-size="15" font-weight="400" fill="currentColor">н</text></svg>`;

/**
 * Creates a heading conversion inline tool for a specific level.
 *
 * When the current block is a paragraph (or other convertible block),
 * clicking this tool converts it to a heading of the given level.
 * If the block is already a heading of that level, it converts back to paragraph.
 */
export function createHeadingConvertTool(level: 2 | 3): new (config: { api: API }) => InlineTool {
  const icon = level === 2 ? ICON_H2 : ICON_H3;
  const name = `convert-heading-${level}`;
  const title = level === 2 ? 'Heading' : 'Subheading';

  return class HeadingConvertInlineTool implements InlineTool {
    public static isInline = true;
    public static title = title;

    private readonly blocksAPI: Blocks;
    private readonly selectionAPI: Selection;
    private readonly caretAPI: Caret;

    constructor({ api }: { api: API }) {
      this.blocksAPI = api.blocks;
      this.selectionAPI = api.selection;
      this.caretAPI = api.caret;
    }

    public render(): MenuConfig {
      return {
        icon,
        name,
        onActivate: async () => {
          const currentSelection = SelectionUtils.get();
          const currentBlock = this.blocksAPI.getBlockByElement(
            currentSelection.anchorNode as HTMLElement
          );

          if (!currentBlock) return;

          this.selectionAPI.setFakeBackground();
          this.selectionAPI.save();

          const isAlreadyHeading =
            currentBlock.name === 'header' &&
            (currentBlock as any).call?.('getter', 'currentLevel') === level;

          let targetTool: string;
          let targetData: Record<string, unknown> | undefined;

          if (isAlreadyHeading) {
            targetTool = 'paragraph';
            targetData = undefined;
          } else {
            targetTool = 'header';
            targetData = { level };
          }

          const newBlock = await this.blocksAPI.convert(
            currentBlock.id,
            targetTool,
            targetData
          );

          this.caretAPI.setToBlock(newBlock, 'end');

          this.selectionAPI.restore();
          this.selectionAPI.removeFakeBackground();
        },
        isActive: () => {
          const currentSelection = SelectionUtils.get();

          if (!currentSelection.anchorNode) return false;

          const currentBlock = this.blocksAPI.getBlockByElement(
            currentSelection.anchorNode as HTMLElement
          );

          if (!currentBlock) return false;

          return currentBlock.name === 'header';
        },
      };
    }
  };
}

export const HeadingH2ConvertTool = createHeadingConvertTool(2);
export const HeadingH3ConvertTool = createHeadingConvertTool(3);
