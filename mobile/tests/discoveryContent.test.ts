import dictionary from '../../content/dictionaries/discovery-v9-ka.json';
import oldDictionary from '../../content/dictionaries/discovery-v8-ka.json';
import manifest from '../../content/levels/discovery.v29.recipes.json';
import { catalog, vocabulary } from '../src/content/catalog';
import { validateWide as validateDiscovery } from '../src/content/wide';
import { canFormWord } from '../src/engine/georgian';
import { initialState, isUnlocked, transition } from '../src/engine/game';
import { selectGameplay } from '../src/engine/selectors';
import { parseSnapshot } from '../src/storage/snapshot';
import { reachLevel, submit } from './helpers';

test('all 500 reviewed boards follow the small-wheel progression and contain useful extras', () => {
  expect(catalog.revision).toBe(29);
  expect(() =>
    validateDiscovery(catalog, vocabulary, manifest.familiarity),
  ).not.toThrow();
  const targets = new Map<string, number>();
  for (const [index, level] of catalog.levels.entries()) {
    expect(level.reviewStatus).toBe('prototype-reference-checked');
    expect(level.tiles.length).toBeLessThanOrEqual(index < 25 ? 6 : 7);
    if (index < 5) expect(level.tiles).toHaveLength(5);
    expect(level.words).toHaveLength(5);
    const answers = level.words.map((word) => word.answer);
    answers.forEach((answer) => {
      if (targets.has(answer))
        expect(index - targets.get(answer)!).toBeGreaterThanOrEqual(75);
      targets.set(answer, index);
    });
    const available = level.tiles.map((tile) => tile.letter);
    expect(level.bonusWords).toEqual(
      [...vocabulary]
        .filter(
          (word) => !answers.includes(word) && canFormWord(word, available),
        )
        .sort(),
    );
  }
  expect(targets.size).toBeGreaterThanOrEqual(375);
  // The first six-letter board introduces wheel size with familiar words.
  expect(
    catalog.levels.find((level) => level.tiles.length === 6)!.difficulty.tier,
  ).toBe('medium');
});

test('all targets and bonuses work through the engine, reward once, unlock and restore', () => {
  let state = initialState(catalog);
  let bonuses = 0;
  for (const [index, level] of catalog.levels.entries()) {
    expect(isUnlocked(state, catalog, level.id)).toBe(true);
    state = transition(
      state,
      { type: 'open-level', levelId: level.id },
      catalog,
    ).state;
    for (const word of level.bonusWords) {
      const result = submit(state, level, word);
      expect(result.events.some((event) => event.type === 'bonus-found')).toBe(
        true,
      );
      state = parseSnapshot(result.state, catalog);
      bonuses++;
      expect(selectGameplay(state, catalog).foundWords).toBe(0);
      expect(submit(state, level, word).state).toBe(state);
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
    expect(state.coins).toBe(200 + (index + 1) * 20 + bonuses * 3);
    expect(submit(state, level, level.words[0]!.answer).state).toBe(state);
  }
  expect(selectGameplay(state, catalog).nextLevelId).toBeNull();
});

test('a future target is accepted now as a bonus without solving the crossword', () => {
  const index = catalog.levels.findIndex((level, i) =>
    level.bonusWords.some((bonus) =>
      catalog.levels
        .slice(i + 1)
        .some((next) => next.words.some((word) => word.answer === bonus)),
    ),
  );
  expect(index).toBeGreaterThanOrEqual(0);
  const level = catalog.levels[index]!;
  const bonus = level.bonusWords.find((candidate) =>
    catalog.levels
      .slice(index + 1)
      .some((next) => next.words.some((word) => word.answer === candidate)),
  )!;
  const state = reachLevel(index);
  const result = submit(state, level, bonus);
  expect(result.state.coins).toBe(state.coins + 3);
  expect(result.state.progress[level.id]?.solvedWordIds).toEqual([]);
  expect(submit(result.state, level, bonus).state).toBe(result.state);
});

test('stage regressions, missing bonus recognition and duplicate wheels fail release validation', () => {
  const first = catalog.levels[0]!;
  expect(() =>
    validateDiscovery(
      {
        ...catalog,
        levels: [
          { ...first, tiles: [...first.tiles, { id: 'extra', letter: 'ა' }] },
          ...catalog.levels.slice(1),
        ],
      },
      vocabulary,
      manifest.familiarity,
    ),
  ).toThrow('stage');
  const withBonus = catalog.levels.find(
    (level) => level.bonusWords.length > 0,
  )!;
  expect(() =>
    validateDiscovery(
      {
        ...catalog,
        levels: catalog.levels.map((level) =>
          level.id === withBonus.id ? { ...level, bonusWords: [] } : level,
        ),
      },
      vocabulary,
      manifest.familiarity,
    ),
  ).toThrow('Bonus');
  expect(() =>
    validateDiscovery(
      {
        ...catalog,
        levels: [
          first,
          { ...first, id: 'ka-002', title: 'აღმოჩენა 2' },
          ...catalog.levels.slice(2),
        ],
      },
      vocabulary,
      manifest.familiarity,
    ),
  ).toThrow('75-level gap');
  expect(() => validateDiscovery(catalog, vocabulary, {})).toThrow('familiar');
});

test('reference expansion preserves all historical entries and exact source attribution', () => {
  const entries = new Map(
    dictionary.entries.map((entry) => [entry.word, entry]),
  );
  for (const entry of oldDictionary.entries)
    expect(entries.get(entry.word)).toEqual(entry);
  expect(dictionary.entries.length).toBeGreaterThan(547);
  for (const entry of dictionary.entries) {
    expect(entry.sourceUrl).toContain(`oldid=${entry.sourceRevision}`);
    expect(entry.sourceRevision).toBeGreaterThan(0);
    expect(entry.gloss.trim()).not.toBe('');
    expect(entry.reviewStatus).toBe('prototype-reference-checked');
  }
});
