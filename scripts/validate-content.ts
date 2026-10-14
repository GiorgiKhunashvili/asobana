import { catalog, vocabulary } from '../mobile/src/content/catalog';
import { initialState, transition } from '../mobile/src/engine/game';
let state = initialState(catalog);
for (const level of catalog.levels) {
  state = transition(
    state,
    { type: 'open-level', levelId: level.id },
    catalog,
  ).state;
  for (const word of level.words) {
    const available = [...level.tiles];
    const tileIds = Array.from(word.answer).map((letter) => {
      const index = available.findIndex((tile) => tile.letter === letter);
      const tile = available.splice(index, 1)[0];
      if (!tile) throw new Error(`Missing letter ${letter}`);
      return tile.id;
    });
    state = transition(
      state,
      { type: 'submit', levelId: level.id, tileIds },
      catalog,
    ).state;
  }
  if (!state.progress[level.id]?.completed)
    throw new Error(`Cannot solve ${level.id}`);
}
console.log(
  `Validated and solved ${catalog.levels.length} levels using ${vocabulary.size} reference-checked words.`,
);
