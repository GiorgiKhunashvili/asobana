import review from '../../docs/VOCABULARY_REPLACEMENTS_APPROVED_01.json';
import manifest from '../../content/levels/discovery.v24.recipes.json';
import {
  previousCatalogs,
  vocabularyForRevision,
} from '../src/content/catalog';
import { requiredWordsForRevision } from '../src/content/wordPolicy';
import { validateWide } from '../src/content/wide';
import { transition } from '../src/engine/game';
import { selectPostcards } from '../src/engine/postcards';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';
const catalog = previousCatalogs().find((pack) => pack.revision === 24)!;
const vocabulary = vocabularyForRevision(24);
const removed = new Set<string>(review.removedWords);

test('the exact 29 replacements preserve the 118 bonus-only approvals', () => {
  const before = requiredWordsForRevision(23);
  const after = requiredWordsForRevision(24);
  expect(after.size).toBe(1569);
  expect(after).toEqual(
    new Set(
      [...before]
        .filter((w) => !removed.has(w))
        .concat(review.entries.map((e) => e.word)),
    ),
  );
  expect(new Set([...vocabulary].filter((w) => !after.has(w)))).toEqual(
    new Set([...vocabularyForRevision(23)].filter((w) => !before.has(w))),
  );
  expect(vocabulary.size).toBe(1687);
  expect(after.has('კოკა')).toBe(true);
  expect(review.entries).toHaveLength(29);
});

test('every newly rejected spelling is blocked in required, variant and bonus roles', () => {
  const banned = [...review.removedWords, ...review.rejectedProposals];
  for (const spelling of banned) {
    expect(vocabulary.has(spelling)).toBe(false);
    const union = new Set([...vocabulary, spelling]);
    for (const role of ['answer', 'variant', 'bonus'] as const) {
      const level = catalog.levels[0]!;
      const poisoned = {
        ...level,
        words: level.words.map((word, index) =>
          index
            ? word
            : {
                ...word,
                answer: role === 'answer' ? spelling : word.answer,
                acceptedAnswers:
                  role === 'variant'
                    ? [...word.acceptedAnswers, spelling]
                    : word.acceptedAnswers,
              },
        ),
        bonusWords:
          role === 'bonus' ? [...level.bonusWords, spelling] : level.bonusWords,
      };
      expect(() =>
        validateWide(
          { ...catalog, levels: [poisoned, ...catalog.levels.slice(1)] },
          union,
          manifest.familiarity,
        ),
      ).toThrow();
    }
  }
});

test.each(['partial', 'complete'] as const)(
  'v23 %s progress and journey postcards survive current migration and restart',
  async (scenario) => {
    const previous = previousCatalogs().find((pack) => pack.revision === 23)!;
    const index = 8;
    const level = previous.levels[index]!;
    let old = reachLevel(index, previous);
    expect(level.words.some((word) => removed.has(word.answer))).toBe(true);
    if (scenario === 'partial') {
      const removedAnswer = level.words.find((word) =>
        removed.has(word.answer),
      )!;
      old = submit(old, level, removedAnswer.answer, previous).state;
      old = transition(
        old,
        { type: 'hint', levelId: level.id, kind: 'cell' },
        previous,
      ).state;
      if (level.bonusWords[0])
        old = submit(old, level, level.bonusWords[0], previous).state;
    } else {
      for (const word of level.words)
        old = submit(old, level, word.answer, previous).state;
    }
    old = {
      ...old,
      progress: {
        ...old.progress,
        'ka-001': { ...old.progress['ka-001']!, hintsUsed: 1544 },
        ...(scenario === 'partial'
          ? { [level.id]: { ...old.progress[level.id]!, hintsUsed: 1544 } }
          : {}),
      },
    };
    const cards = selectPostcards(old, previous)
      .filter((card) => card.collected)
      .map((card) => card.chapterId);
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      await createSqliteRepository(db, previous).save(old, 0);
      const repo = createSqliteRepository(db, catalog, previousCatalogs());
      const upgraded = (await repo.load())!;
      expect(upgraded.state.contentRevision).toBe(24);
      expect(upgraded.state.progress['ka-001']!.hintsUsed).toBe(1544);
      expect(upgraded.state.coins).toBe(old.coins);
      expect(upgraded.state.currentLevelId).toBe(old.currentLevelId);
      expect(upgraded.state.settings).toEqual(old.settings);
      expect(upgraded.state.bonusRewards).toEqual(old.bonusRewards);
      expect(upgraded.state.progress[level.id]!.hintsUsed).toBe(
        old.progress[level.id]!.hintsUsed,
      );
      expect(
        upgraded.state.progress[level.id]!.solvedWordIds.length,
      ).toBeGreaterThanOrEqual(old.progress[level.id]!.solvedWordIds.length);
      expect(
        upgraded.state.progress[level.id]!.revealedCellIds.length,
      ).toBeGreaterThanOrEqual(old.progress[level.id]!.revealedCellIds.length);
      for (const [id, progress] of Object.entries(old.progress))
        if (progress.completed)
          expect(upgraded.state.progress[id]!.completed).toBe(true);
      expect(
        selectPostcards(upgraded.state, catalog)
          .filter((card) => card.collected)
          .map((card) => card.chapterId),
      ).toEqual(expect.arrayContaining(cards));
      expect(
        await createSqliteRepository(db, catalog, previousCatalogs()).load(),
      ).toEqual(upgraded);
      if (scenario === 'partial') {
        const hinted = transition(
          upgraded.state,
          { type: 'hint', levelId: level.id, kind: 'cell' },
          catalog,
        ).state;
        expect(hinted.progress[level.id]!.hintsUsed).toBe(1545);
        await repo.save(hinted, upgraded.revision);
        const restarted = await createSqliteRepository(
          db,
          catalog,
          previousCatalogs(),
        ).load();
        expect(restarted!.state).toEqual(hinted);
      }
    } finally {
      db.close();
    }
  },
);
