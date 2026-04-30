/**
 * Helpers to capture and restore a text selection across DOM rebuilds
 * (e.g. when a block is converted from one tool to another).
 *
 * The standard Range-based approach (Selection.save/restore in selection.ts)
 * fails when the underlying text nodes are replaced — the range references
 * detached nodes. Instead we record character offsets relative to the block's
 * editable root, then walk text nodes again after the rebuild to find the
 * matching position.
 *
 * Some blocks expose a single contenteditable (paragraph, header, quote);
 * others have one per item (list). We therefore also remember which editable
 * the selection lived in, indexed by its position in document order, and use
 * the same index when restoring on the rebuilt DOM.
 */

export interface BlockSelectionOffsets {
  /** Index of the contenteditable inside the block holder (0 for single-editable blocks). */
  editableIndex: number;
  start: number;
  end: number;
}

/**
 * Get all contenteditable roots inside a block holder, in document order.
 * If the holder itself is contenteditable, it's returned as the only root.
 */
function getEditableRoots(holder: HTMLElement): HTMLElement[] {
  if (holder.isContentEditable) return [holder];
  return Array.from(holder.querySelectorAll<HTMLElement>('[contenteditable="true"]'));
}

/**
 * Convert a (node, offsetInNode) pair to a flat character offset within `root`.
 */
function nodeOffsetToTextOffset(root: HTMLElement, node: Node, offsetInNode: number): number {
  if (node === root) {
    let count = 0;
    for (let i = 0; i < offsetInNode && i < root.childNodes.length; i++) {
      count += root.childNodes[i].textContent?.length ?? 0;
    }
    return count;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let total = 0;

  for (let n = walker.nextNode(); n !== null; n = walker.nextNode()) {
    if (n === node) {
      return total + offsetInNode;
    }
    total += (n as Text).length;
  }

  if (node.nodeType === Node.ELEMENT_NODE && root.contains(node)) {
    let count = 0;
    for (let i = 0; i < offsetInNode && i < node.childNodes.length; i++) {
      count += node.childNodes[i].textContent?.length ?? 0;
    }
    return total + count;
  }

  return total;
}

/**
 * Capture the current selection's start/end offsets relative to the block's
 * editable text. Returns null if there's no selection inside the block.
 */
export function captureBlockSelectionOffsets(holder: HTMLElement): BlockSelectionOffsets | null {
  const editables = getEditableRoots(holder);
  if (editables.length === 0) return null;

  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0) return null;

  const range = sel.getRangeAt(0);

  /** Find the editable that contains BOTH endpoints — selection across editables is unsupported. */
  const editableIndex = editables.findIndex(
    (ed) => ed.contains(range.startContainer) && ed.contains(range.endContainer)
  );
  if (editableIndex === -1) return null;

  const editable = editables[editableIndex];

  return {
    editableIndex,
    start: nodeOffsetToTextOffset(editable, range.startContainer, range.startOffset),
    end: nodeOffsetToTextOffset(editable, range.endContainer, range.endOffset),
  };
}

/**
 * Apply previously-captured text offsets to the (possibly new) block holder.
 * Walks text nodes in document order and stops at the matching positions.
 */
export function applyBlockSelectionOffsets(holder: HTMLElement, offsets: BlockSelectionOffsets): void {
  const editables = getEditableRoots(holder);
  if (editables.length === 0) return;

  /** Fall back to the last editable if structure shrank (item removed). */
  const editable = editables[Math.min(offsets.editableIndex, editables.length - 1)];

  const walker = document.createTreeWalker(editable, NodeFilter.SHOW_TEXT);
  const totalLen = editable.textContent?.length ?? 0;
  const start = Math.min(offsets.start, totalLen);
  const end = Math.min(offsets.end, totalLen);

  let pos = 0;
  let startNode: Text | null = null;
  let startOff = 0;
  let endNode: Text | null = null;
  let endOff = 0;

  for (let n = walker.nextNode() as Text | null; n !== null; n = walker.nextNode() as Text | null) {
    const len = n.length;

    if (startNode === null && start >= pos && start <= pos + len) {
      startNode = n;
      startOff = start - pos;
    }
    if (endNode === null && end >= pos && end <= pos + len) {
      endNode = n;
      endOff = end - pos;
    }

    pos += len;

    if (startNode !== null && endNode !== null) break;
  }

  /** Block has no text node yet — place caret at the editable root */
  if (startNode === null || endNode === null) {
    const range = document.createRange();

    range.selectNodeContents(editable);
    range.collapse(false);

    const sel = window.getSelection();

    if (!sel) return;

    sel.removeAllRanges();
    sel.addRange(range);

    return;
  }

  const range = document.createRange();

  range.setStart(startNode, startOff);
  range.setEnd(endNode, endOff);

  const sel = window.getSelection();

  if (!sel) return;

  sel.removeAllRanges();
  sel.addRange(range);
}
