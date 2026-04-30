import type { InlineTool, API } from '../../../types';
import type { MenuConfig } from '../../../types/tools';
import type { Blocks } from '../../../types/api';
import SelectionUtils from '../selection';
import {
  captureBlockSelectionOffsets,
  applyBlockSelectionOffsets,
} from '../utils/selection-offsets';

const ICON_UNORDERED = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5.9a.9.9 0 0 1 .9-.9h11.2a.9.9 0 1 1 0 1.8H8.9a.9.9 0 0 1-.9-.9ZM8 12a.9.9 0 0 1 .9-.9h11.2a.9.9 0 1 1 0 1.8H8.9A.9.9 0 0 1 8 12Zm0 6.1a.9.9 0 0 1 .9-.9h11.2a.9.9 0 1 1 0 1.8H8.9a.9.9 0 0 1-.9-.9ZM6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/></svg>`;

const ICON_ORDERED = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5.9a.9.9 0 0 1 .9-.9h11.2a.9.9 0 0 1 0 1.8H8.9a.9.9 0 0 1-.9-.9ZM8 12a.9.9 0 0 1 .9-.9h11.2a.9.9 0 0 1 0 1.8H8.9A.9.9 0 0 1 8 12Zm0 6.1a.9.9 0 0 1 .9-.9h11.2a.9.9 0 0 1 0 1.8H8.9a.9.9 0 0 1-.9-.9ZM3.9 7.36c0 .41.2.64.55.64.35 0 .55-.23.55-.64V4.72C5 4.28 4.75 4 4.35 4a1.3 1.3 0 0 0-.7.23l-.37.24c-.18.13-.28.28-.28.45 0 .24.15.4.37.4.1 0 .2-.03.37-.14l.15-.1v2.28ZM3 13.52c0 .29.22.48.52.48h1.95c.33 0 .53-.17.53-.46 0-.3-.2-.47-.53-.47h-.93v-.05l.66-.6c.44-.41.66-.82.66-1.24 0-.68-.6-1.18-1.42-1.18-.78 0-1.44.5-1.44 1.06 0 .25.19.44.46.44.19 0 .3-.08.48-.3.15-.18.27-.25.44-.25.21 0 .37.14.37.35 0 .2-.13.38-.42.66l-.86.83c-.34.33-.46.52-.46.74Zm0 5.55c0 .52.64.93 1.43.93.92 0 1.57-.49 1.57-1.18 0-.5-.32-.87-.77-.9v-.08c.38-.03.67-.38.67-.8 0-.61-.6-1.04-1.46-1.04-.78 0-1.43.4-1.43.88 0 .25.2.43.45.43a.6.6 0 0 0 .43-.18c.2-.2.35-.27.53-.27.24 0 .42.14.42.33 0 .2-.18.33-.42.33h-.15c-.22 0-.38.2-.38.43 0 .26.16.44.38.44h.15c.3 0 .48.15.48.38 0 .22-.19.37-.48.37-.2 0-.38-.09-.56-.28-.15-.17-.29-.24-.44-.24-.24 0-.42.19-.42.45Z"/></svg>`;

type ListStyle = 'unordered' | 'ordered';

const TITLES: Record<ListStyle, string> = {
  unordered: 'Bulleted list',
  ordered: 'Numbered list',
};

const ICONS: Record<ListStyle, string> = {
  unordered: ICON_UNORDERED,
  ordered: ICON_ORDERED,
};

/**
 * Build an inline tool that switches the current `list` block to the given style.
 *
 * Activation only changes `data.style` via `blocks.update`; the List tool
 * keeps its own items/meta and re-renders with new bullets/numbers.
 * Cursor offsets are captured/restored across the re-render.
 */
function createListConvertTool(targetStyle: ListStyle): new (config: { api: API }) => InlineTool {
  const icon = ICONS[targetStyle];
  const title = TITLES[targetStyle];
  const name = `convert-list-${targetStyle}`;

  return class ListStyleConvertInlineTool implements InlineTool {
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

          if (!currentBlock || currentBlock.name !== 'list') return;

          const offsets = captureBlockSelectionOffsets(currentBlock.holder);

          await this.blocksAPI.update(currentBlock.id, { style: targetStyle });

          const newHolder = this.blocksAPI.getById(currentBlock.id)?.holder ?? null;
          if (newHolder && offsets) {
            applyBlockSelectionOffsets(newHolder, offsets);
          }
        },
        isActive: () => {
          const currentSelection = SelectionUtils.get();
          if (!currentSelection.anchorNode) return false;

          const currentBlock = this.blocksAPI.getBlockByElement(
            currentSelection.anchorNode as HTMLElement
          );
          if (!currentBlock || currentBlock.name !== 'list') return false;

          // The current style is the one rendered as <ol> / <ul> on the list root.
          const ol = currentBlock.holder.querySelector('ol.cdx-list, ul.cdx-list');
          if (!ol) return false;
          const isOrdered = ol.tagName === 'OL';
          return targetStyle === 'ordered' ? isOrdered : !isOrdered;
        },
      };
    }
  };
}

export const ListUnorderedConvertTool = createListConvertTool('unordered');
export const ListOrderedConvertTool = createListConvertTool('ordered');
