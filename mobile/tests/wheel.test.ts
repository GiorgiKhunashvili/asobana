import {
  advanceSelection,
  EMPTY_SELECTION,
  hitTest,
  layoutWheel,
  selectionWord,
  shuffleTiles,
} from '../src/engine/wheel';
import { catalog } from '../src/content/catalog';
const tiles = catalog.levels[1]!.tiles;
const layout = layoutWheel(tiles, 280);
test('unique IDs, circular bounds and deterministic geometry', () => {
  expect(layout).toEqual(layoutWheel(tiles, 280));
  expect(new Set(layout.map((tile) => tile.id)).size).toBe(tiles.length);
  for (const tile of layout) {
    expect(tile.x - tile.radius).toBeGreaterThanOrEqual(0);
    expect(tile.y + tile.radius).toBeLessThanOrEqual(280);
    expect(hitTest(tile, layout)).toBe(tile.id);
  }
});
test('begin outside, cancel, release and moves when inactive', () => {
  expect(
    advanceSelection(
      EMPTY_SELECTION,
      { type: 'begin', point: { x: 140, y: 140 } },
      layout,
    ),
  ).toEqual(EMPTY_SELECTION);
  expect(
    advanceSelection(
      EMPTY_SELECTION,
      { type: 'move', point: layout[0]! },
      layout,
    ),
  ).toBe(EMPTY_SELECTION);
  const start = advanceSelection(
    EMPTY_SELECTION,
    { type: 'begin', point: layout[0]! },
    layout,
  );
  expect(advanceSelection(start, { type: 'cancel' }, layout)).toEqual(
    EMPTY_SELECTION,
  );
  expect(advanceSelection(start, { type: 'release' }, layout)).toEqual(
    EMPTY_SELECTION,
  );
});
test('revisits do not reuse tiles; repeated characters use different IDs', () => {
  let state = advanceSelection(
    EMPTY_SELECTION,
    { type: 'begin', point: layout[0]! },
    layout,
  );
  const original = state;
  state = advanceSelection(state, { type: 'move', point: layout[0]! }, layout);
  expect(state).toBe(original);
  state = advanceSelection(state, { type: 'move', point: layout[1]! }, layout);
  state = advanceSelection(state, { type: 'move', point: layout[2]! }, layout);
  expect(selectionWord(state.tileIds, tiles)).toBe('დედ');
  expect(state.tileIds).toHaveLength(3);
});
test('shuffle reproducible, preserves ID and letter counts without mutation', () => {
  const original = [...tiles];
  expect(shuffleTiles(tiles, 42)).toEqual(shuffleTiles(tiles, 42));
  expect(
    shuffleTiles(tiles, 42)
      .map((tile) => tile.id)
      .sort(),
  ).toEqual(tiles.map((tile) => tile.id).sort());
  expect(tiles).toEqual(original);
});
