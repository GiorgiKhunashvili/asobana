import { catalog, topics } from '../src/content/catalog';
import { validateTopics } from '../src/content/topics';
import { initialState, isUnlocked, transition } from '../src/engine/game';
import { selectGameplay } from '../src/engine/selectors';
import { parseSnapshot } from '../src/storage/snapshot';
import { submit } from './helpers';

test('all 50 distinct puzzles and their bonuses fit the topic displayed above the board', () => {
  expect(catalog.levels).toHaveLength(50);
  expect(catalog.chapters).toHaveLength(10);
  expect(() => validateTopics(catalog, topics)).not.toThrow();
  const signatures = new Set<string>();
  for (const level of catalog.levels) {
    expect(level.words.length).toBeGreaterThanOrEqual(3);
    expect(level.words.length).toBeLessThanOrEqual(5);
    expect(Math.max(level.grid.rows, level.grid.columns)).toBeLessThanOrEqual(
      7,
    );
    expect(level.tiles.length).toBeLessThanOrEqual(8);
    expect(level.reviewStatus).toBe('prototype-reference-checked');
    signatures.add(
      level.words
        .map((word) => word.answer)
        .sort()
        .join(','),
    );
  }
  expect(signatures.size).toBe(50);
  expect(selectGameplay(initialState(catalog), catalog).title).toBe('ამინდი');
});

test('valid dictionary words cannot leak into unrelated topics as targets or bonuses', () => {
  const weather = catalog.levels[0]!;
  for (const changed of [
    {
      ...weather,
      words: [
        { ...weather.words[0]!, answer: 'ლომი' },
        ...weather.words.slice(1),
      ],
    },
    { ...weather, bonusWords: ['ლომი'] },
  ]) {
    expect(() =>
      validateTopics({ ...catalog, levels: [changed] }, topics),
    ).toThrow('Off-topic');
  }
  expect(() =>
    validateTopics(
      {
        ...catalog,
        levels: [{ ...weather, title: 'ცხოველები' }],
      },
      topics,
    ),
  ).toThrow('heading');
});

test('the full themed campaign solves, rewards once, and restores valid snapshots', () => {
  let state = initialState(catalog);
  let bonusCount = 0;
  for (const [index, level] of catalog.levels.entries()) {
    expect(isUnlocked(state, catalog, level.id)).toBe(true);
    state = transition(
      state,
      { type: 'open-level', levelId: level.id },
      catalog,
    ).state;
    for (const bonus of level.bonusWords) {
      const before = state.coins;
      state = submit(state, level, bonus).state;
      bonusCount++;
      expect(state.coins).toBe(before + 3);
      expect(selectGameplay(state, catalog).foundWords).toBe(0);
      expect(submit(state, level, bonus).state).toBe(state);
    }
    let completions = 0;
    for (const word of level.words) {
      const result = submit(state, level, word.answer);
      completions += result.events.filter(
        (event) => event.type === 'level-completed',
      ).length;
      state = parseSnapshot(result.state, catalog);
    }
    expect(completions).toBe(1);
    expect(state.progress[level.id]?.completed).toBe(true);
    expect(state.coins).toBe(100 + (index + 1) * 25 + bonusCount * 3);
    expect(submit(state, level, level.words[0]!.answer).state).toBe(state);
  }
  expect(bonusCount).toBeGreaterThan(0);
  expect(selectGameplay(state, catalog).nextLevelId).toBeNull();
});
