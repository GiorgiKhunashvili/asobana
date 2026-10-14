import { catalog } from '../src/content/catalog';
import { initialState, transition } from '../src/engine/game';
import type { GameState, Level } from '../src/models/types';
export function tilesFor(level: Level, word: string): string[] {
  const available = [...level.tiles];
  return Array.from(word).map((letter) => {
    const index = available.findIndex((tile) => tile.letter === letter);
    if (index < 0) throw new Error(`Missing ${letter}`);
    const tile = available.splice(index, 1)[0];
    if (!tile) throw new Error('Missing tile');
    return tile.id;
  });
}
export function submit(state: GameState, level: Level, word: string) {
  return transition(
    state,
    { type: 'submit', levelId: level.id, tileIds: tilesFor(level, word) },
    catalog,
  );
}
export function reachLevel(index: number): GameState {
  let state = initialState(catalog);
  for (const level of catalog.levels.slice(0, index)) {
    state = transition(
      state,
      { type: 'open-level', levelId: level.id },
      catalog,
    ).state;
    for (const word of level.words)
      state = submit(state, level, word.answer).state;
  }
  const level = catalog.levels[index];
  if (!level) throw new Error('Unknown level');
  return transition(state, { type: 'open-level', levelId: level.id }, catalog)
    .state;
}
