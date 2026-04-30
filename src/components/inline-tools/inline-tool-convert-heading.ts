import type { InlineTool, API } from '../../../types';
import type { MenuConfig } from '../../../types/tools';
import type { Blocks } from '../../../types/api';
import SelectionUtils from '../selection';
import {
  captureBlockSelectionOffsets,
  applyBlockSelectionOffsets,
} from '../utils/selection-offsets';

/**
 * SVG icons for headings — capital "H" + subscript level number.
 */
function makeIcon(level: 2 | 3 | 4): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><text x="3" y="17" font-family="Georgia, 'Times New Roman', serif" font-size="15" font-weight="700" fill="currentColor">H</text><text x="13" y="20" font-family="Georgia, 'Times New Roman', serif" font-size="11" font-weight="700" fill="currentColor">${level}</text></svg>`;
}

const ICONS: Record<2 | 3 | 4, string> = {
  2: makeIcon(2),
  3: makeIcon(3),
  4: makeIcon(4),
};

const TITLES: Record<2 | 3 | 4, string> = {
  2: 'Heading',
  3: 'Subheading',
  4: 'Sub-subheading',
};

/**
 * Creates a heading conversion inline tool for a specific level.
 *
 * When the current block is a paragraph (or other convertible block),
 * clicking this tool converts it to a heading of the given level.
 * If the block is already a heading of that level, it converts back to paragraph.
 */
export function createHeadingConvertTool(level: 2 | 3 | 4): new (config: { api: API }) => InlineTool {
  const icon = ICONS[level];
  const name = `convert-heading-${level}`;
  const title = TITLES[level];

  return class HeadingConvertInlineTool implements InlineTool {
    public static isInline = true;
    public static title = title;

    private readonly blocksAPI: Blocks;

    constructor({ api }: { api: API }) {
      this.blocksAPI = api.blocks;
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

          const offsets = captureBlockSelectionOffsets(currentBlock.holder);

          const isAlreadyHeading =
            currentBlock.name === 'header' &&
            getHeadingLevel(currentBlock.holder) === level;

          const targetTool = isAlreadyHeading ? 'paragraph' : 'header';
          const targetData = isAlreadyHeading ? undefined : { level };

          const newBlock = await this.blocksAPI.convert(
            currentBlock.id,
            targetTool,
            targetData
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

          if (!currentBlock || currentBlock.name !== 'header') return false;

          return getHeadingLevel(currentBlock.holder) === level;
        },
      };
    }
  };
}

/**
 * Read the heading level (2/3/4) directly from the rendered tag.
 * @editorjs/header keeps level in its internal data, but exposes no public
 * sync getter; reading the DOM is the simplest reliable path.
 */
function getHeadingLevel(holder: HTMLElement): 2 | 3 | 4 | null {
  const headerEl = holder.querySelector('h1, h2, h3, h4, h5, h6');
  if (!headerEl) return null;
  const n = parseInt(headerEl.tagName.slice(1), 10);
  return n === 2 || n === 3 || n === 4 ? n : null;
}

export const HeadingH2ConvertTool = createHeadingConvertTool(2);
export const HeadingH3ConvertTool = createHeadingConvertTool(3);
export const HeadingH4ConvertTool = createHeadingConvertTool(4);
