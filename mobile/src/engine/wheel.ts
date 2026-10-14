import type { LetterTile } from '../models/types';
export interface Point {
  readonly x: number;
  readonly y: number;
}
export interface WheelTile extends LetterTile, Point {
  readonly radius: number;
}
export interface WheelSelection {
  readonly active: boolean;
  readonly tileIds: readonly string[];
}
export type GestureSelectionEvent =
  | { readonly type: 'begin'; readonly point: Point }
  | { readonly type: 'move'; readonly point: Point }
  | { readonly type: 'release' }
  | { readonly type: 'cancel' };
export const EMPTY_SELECTION: WheelSelection = { active: false, tileIds: [] };
export function layoutWheel(
  tiles: readonly LetterTile[],
  size: number,
): WheelTile[] {
  const radius = Math.min(27, size * 0.09);
  const orbit = size / 2 - radius - 10;
  return tiles.map((tile, index) => {
    const angle = -Math.PI / 2 + (index / tiles.length) * Math.PI * 2;
    return {
      ...tile,
      x: size / 2 + Math.cos(angle) * orbit,
      y: size / 2 + Math.sin(angle) * orbit,
      radius,
    };
  });
}
export function hitTest(
  point: Point,
  tiles: readonly WheelTile[],
): string | null {
  'worklet';
  let closest: string | null = null,
    distance = Infinity;
  for (const tile of tiles) {
    const d = (point.x - tile.x) ** 2 + (point.y - tile.y) ** 2;
    if (d <= tile.radius ** 2 && d < distance) {
      closest = tile.id;
      distance = d;
    }
  }
  return closest;
}
export function advanceSelection(
  selection: WheelSelection,
  event: GestureSelectionEvent,
  tiles: readonly WheelTile[],
): WheelSelection {
  'worklet';
  if (event.type === 'cancel' || event.type === 'release')
    return { active: false, tileIds: [] };
  const id = hitTest(event.point, tiles);
  if (event.type === 'begin')
    return { active: id !== null, tileIds: id ? [id] : [] };
  if (!selection.active || !id || selection.tileIds.includes(id))
    return selection;
  return { active: true, tileIds: [...selection.tileIds, id] };
}
export function selectionWord(
  ids: readonly string[],
  tiles: readonly LetterTile[],
): string {
  return ids
    .map((id) => tiles.find((tile) => tile.id === id)?.letter ?? '')
    .join('');
}
/** Seeded Fisher–Yates; preserves unique IDs and multiplicities. */
export function shuffleTiles<T extends LetterTile>(
  tiles: readonly T[],
  seed: number,
): T[] {
  const result = [...tiles];
  let state = seed >>> 0;
  const random = (): number => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    return state / 0x100000000;
  };
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const a = result[i],
      b = result[j];
    if (a && b) {
      result[i] = b;
      result[j] = a;
    }
  }
  return result;
}
