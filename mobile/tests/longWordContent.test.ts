import manifest from '../../content/levels/discovery.v26.recipes.json';
import { catalog, previousCatalogs, vocabulary } from '../src/content/catalog';
import { validateWide, validateWordLengths } from '../src/content/wide';
import { transition } from '../src/engine/game';
import { freeCellHints } from '../src/engine/bonusRewards';
import { selectPostcards } from '../src/engine/postcards';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';

test('long answers are required throughout the campaign, independently of wheel size', () => {
  expect(() =>
    validateWide(catalog, vocabulary, manifest.familiarity),
  ).not.toThrow();
  const lengths = catalog.levels.map((level) =>
    level.words.map((word) => word.answer.length),
  );
  expect(lengths.findIndex((words) => words.includes(5))).toBe(2);
  expect(
    lengths.findIndex((words) => words.includes(6)),
  ).toBeGreaterThanOrEqual(15);
  expect(lengths.findIndex((words) => words.includes(6))).toBeLessThan(25);
  expect(
    lengths.slice(5, 25).every((words) => words.some((length) => length >= 5)),
  ).toBe(true);
  expect(
    lengths
      .slice(25)
      .every((words) => words.filter((length) => length >= 5).length >= 2),
  ).toBe(true);
  expect(
    lengths.slice(15, 25).filter((words) => words.includes(6)).length,
  ).toBeGreaterThanOrEqual(4);
  expect(
    lengths.slice(25, 40).filter((words) => words.includes(6)).length,
  ).toBeGreaterThanOrEqual(8);
  expect(
    lengths.slice(40).filter((words) => words.includes(6)).length,
  ).toBeGreaterThanOrEqual(7);
  // The released pack had six-tile wheels but no six-letter answers.
  expect(() => validateWordLengths(previousCatalogs[9]!)).toThrow();
  const missingLong = {
    ...catalog,
    levels: catalog.levels.map((level, index) =>
      index === 25
        ? {
            ...level,
            words: level.words.map((word) => ({ ...word, answer: 'სია' })),
          }
        : level,
    ),
  };
  expect(() => validateWordLengths(missingLong)).toThrow(
    'missing longer answers',
  );
  const noSix = {
    ...catalog,
    levels: catalog.levels.map((level, index) =>
      index >= 15 && index < 25
        ? {
            ...level,
            words: level.words.map((word) => ({
              ...word,
              answer: word.answer.slice(0, 5),
            })),
          }
        : level,
    ),
  };
  expect(() => validateWordLengths(noSix)).toThrow('more six-letter');
});

test('new boards retain chapter recovery waves and bounded difficulty increases', () => {
  const scores = catalog.levels.map((level) => level.difficulty.score);
  for (let i = 0; i < catalog.levels.length; i += 5) {
    expect(scores[i + 2]).toBe(Math.max(...scores.slice(i, i + 5)));
    expect(scores[i + 2]! - scores[i + 3]!).toBeGreaterThanOrEqual(2);
  }
  expect(
    Math.max(...scores.slice(1).map((score, i) => score - scores[i]!)),
  ).toBeLessThanOrEqual(10);
});

test.each([10, 11])(
  'revision %i level-25 save keeps completed levels, partial progress, coins, hints and postcards after restart',
  async (revision) => {
    const previous = previousCatalogs[revision - 1]!;
    const hintLimit = revision === 11 ? 1166 : 1124;
    const level = previous.levels[24]!;
    let old = submit(
      reachLevel(24, previous),
      level,
      level.words[0]!.answer,
      previous,
    ).state;
    old = transition(
      old,
      { type: 'hint', levelId: level.id, kind: 'cell' },
      previous,
    ).state;
    // Persistent lifetime credits may outlive bonus markers from older content.
    old = {
      ...old,
      bonusRewards: { totalFound: 23, hintsSpent: 1 },
      progress: {
        ...old.progress,
        'ka-001': { ...old.progress['ka-001']!, hintsUsed: hintLimit },
      },
    };
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      await createSqliteRepository(db, previous).save(old, 0);
      const repo = createSqliteRepository(db, catalog, previousCatalogs);
      const upgraded = (await repo.load())!;
      const state = upgraded.state;
      expect(state.contentRevision).toBe(catalog.revision);
      expect(state.progress['ka-001']!.hintsUsed).toBe(hintLimit);
      expect(state.currentLevelId).toBe('ka-025');
      expect(state.coins).toBe(old.coins);
      expect(state.bonusRewards).toEqual(old.bonusRewards);
      expect(freeCellHints(state)).toBe(1);
      expect(
        state.progress[level.id]!.solvedWordIds.length,
      ).toBeGreaterThanOrEqual(old.progress[level.id]!.solvedWordIds.length);
      expect(state.progress[level.id]!.hintsUsed).toBe(
        old.progress[level.id]!.hintsUsed,
      );
      expect(
        state.progress[level.id]!.revealedCellIds.length,
      ).toBeGreaterThanOrEqual(old.progress[level.id]!.revealedCellIds.length);
      for (const completed of previous.levels.slice(0, 24))
        expect(state.progress[completed.id]!.completed).toBe(true);
      expect(
        selectPostcards(state, catalog).filter((card) => card.collected),
      ).toHaveLength(8);
      expect(state.legacyPostcardChapterIds).toHaveLength(4);
      expect(
        await createSqliteRepository(db, catalog, previousCatalogs).load(),
      ).toEqual(upgraded);
    } finally {
      db.close();
    }
  },
);
