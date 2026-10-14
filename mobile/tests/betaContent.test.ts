import { previousCatalogs, vocabulary } from '../src/content/catalog';
import { initialState, isUnlocked, transition } from '../src/engine/game';
import { selectChapters, selectGameplay } from '../src/engine/selectors';
import { parseSnapshot } from '../src/storage/snapshot';
import { tilesFor, submit as send } from './helpers';
import type { GameState, Level } from '../src/models/types';

const catalog = previousCatalogs[1]!;
const submit = (state: GameState, level: Level, word: string) =>
  send(state, level, word, catalog);

test('beta contains 50 distinct connected levels, each with four or five targets', () => {
  expect(catalog.levels).toHaveLength(50);
  expect(
    catalog.levels.filter((level) => level.words.length === 4),
  ).toHaveLength(15);
  expect(
    catalog.levels.filter((level) => level.words.length === 5),
  ).toHaveLength(35);
  const signatures = catalog.levels.map((level) => {
    expect([4, 5]).toContain(level.words.length);
    expect(level.grid.rows).toBeLessThanOrEqual(7);
    expect(level.grid.columns).toBeLessThanOrEqual(7);
    expect(level.tiles.length).toBeLessThanOrEqual(8);
    expect(level.reviewStatus).toBe('prototype-reference-checked');
    for (const word of level.words) {
      expect(vocabulary.has(word.answer)).toBe(true);
      expect(tilesFor(level, word.answer)).toHaveLength(
        Array.from(word.answer).length,
      );
      expect(level.bonusWords).not.toContain(word.answer);
    }
    return level.words
      .map((word) => word.answer)
      .sort()
      .join(',');
  });
  expect(new Set(signatures).size).toBe(50);
  expect(catalog.levels.slice(0, 4).map((level) => level.id)).toEqual(
    previousCatalogs[0]!.levels.map((level) => level.id),
  );
});

test('new players solve all 50 levels with one reward per completion and valid saves', () => {
  let state = initialState(catalog);
  for (const [index, level] of catalog.levels.entries()) {
    expect(isUnlocked(state, catalog, level.id)).toBe(true);
    state = transition(
      state,
      { type: 'open-level', levelId: level.id },
      catalog,
    ).state;
    let rewards = 0;
    for (const word of level.words) {
      const result = submit(state, level, word.answer);
      rewards += result.events.filter(
        (event) => event.type === 'level-completed',
      ).length;
      state = parseSnapshot(result.state, catalog);
    }
    expect(rewards).toBe(1);
    expect(state.progress[level.id]?.completed).toBe(true);
    expect(state.coins).toBe(100 + 25 * (index + 1));
    expect(submit(state, level, level.words[0]!.answer).state).toBe(state);
  }
  expect(selectGameplay(state, catalog).nextLevelId).toBeNull();
  expect(
    selectChapters(state, catalog).every(
      (chapter) => chapter.completedLevels === chapter.totalLevels,
    ),
  ).toBe(true);
});

test('every bonus is separately rewarded once and never advances target count', () => {
  let state = initialState(catalog);
  for (const level of catalog.levels) {
    state = transition(
      state,
      { type: 'open-level', levelId: level.id },
      catalog,
    ).state;
    for (const word of level.bonusWords) {
      const before = state.coins;
      state = submit(state, level, word).state;
      expect(state.coins).toBe(before + 3);
      expect(selectGameplay(state, catalog).foundWords).toBe(0);
      expect(submit(state, level, word).state).toBe(state);
      parseSnapshot(state, catalog);
    }
    for (const word of level.words)
      state = submit(state, level, word.answer).state;
  }
});
