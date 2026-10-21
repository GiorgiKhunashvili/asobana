import batch from '../../docs/VOCABULARY_EXPANSION_BATCH_07.json';
import manifest from '../../content/levels/discovery.v28.recipes.json';
import {
  catalog,
  previousCatalogs,
  vocabulary,
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
const rejected =
  'ალტი ბრგე ბურჯი გეკონი ელიფსი ემალი მრუდე ნარევი პრასი რელე რუპორი რუსი რუსული ტორსი ტრეკი უთავო უკბილო უქარო უცოლო უხმო ღიობი ჩეხი ჩეხური ჩინური ხლართი'.split(
    ' ',
  );

test('batch seven adds exactly the 75 approved senses and preserves the 118 bonus-only words', () => {
  const approved = batch.entries
    .filter((e) => e.ownerDecision === 'required-eligible')
    .map((e) => e.word);
  expect(approved).toHaveLength(75);
  expect(
    new Set(
      batch.entries
        .filter((e) => e.ownerDecision === 'excluded')
        .map((e) => e.word),
    ),
  ).toEqual(new Set(rejected));
  expect(requiredWordsForRevision(26)).toEqual(
    new Set([...requiredWordsForRevision(25), ...approved]),
  );
  expect(requiredWordsForRevision(26).size).toBe(1720);
  expect(vocabularyForRevision(26).size).toBe(1838);
  expect(
    new Set(
      [...vocabularyForRevision(26)].filter(
        (w) => !requiredWordsForRevision(26).has(w),
      ),
    ),
  ).toEqual(
    new Set(
      [...vocabularyForRevision(25)].filter(
        (w) => !requiredWordsForRevision(25).has(w),
      ),
    ),
  );
  const old = previousCatalogs.find((p) => p.revision === 25)!;
  const before = new Set(
    old.levels.flatMap((l) => l.words.map((w) => w.answer)),
  );
  const after = new Set(
    catalog.levels.flatMap((l) => l.words.map((w) => w.answer)),
  );
  expect(catalog.levels).toHaveLength(345);
  expect(catalog.chapters.slice(0, old.chapters.length)).toEqual(old.chapters);
  expect(after.size).toBeGreaterThan(before.size);
});

test('the 25 rejected proposals fail every gameplay role even with a permissive vocabulary', () => {
  for (const spelling of rejected) {
    expect(vocabulary.has(spelling)).toBe(false);
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
          new Set([...vocabulary, spelling]),
          manifest.familiarity,
        ),
      ).toThrow();
    }
  }
});

test.each(['partial', 'complete'] as const)(
  'v25 %s progress and journey postcards survive current migration and restart',
  async (scenario) => {
    const previous = previousCatalogs.find((pack) => pack.revision === 25)!;
    const index = previous.levels.findIndex(
      (level, i) =>
        i >= 10 &&
        level.words.some(
          (word) =>
            !catalog.levels[i]!.words.some(
              (current) => current.answer === word.answer,
            ),
        ),
    );
    expect(index).toBeGreaterThanOrEqual(10);
    const removed = new Set(
      previous.levels[index]!.words.map((w) => w.answer).filter(
        (w) =>
          !catalog.levels[index]!.words.some((current) => current.answer === w),
      ),
    );
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
        'ka-001': { ...old.progress['ka-001']!, hintsUsed: 1628 },
        ...(scenario === 'partial'
          ? { [level.id]: { ...old.progress[level.id]!, hintsUsed: 1628 } }
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
      const repo = createSqliteRepository(db, catalog, previousCatalogs);
      const upgraded = (await repo.load())!;
      expect(upgraded.state.contentRevision).toBe(28);
      expect(upgraded.state.progress['ka-001']!.hintsUsed).toBe(1628);
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
        await createSqliteRepository(db, catalog, previousCatalogs).load(),
      ).toEqual(upgraded);
      if (scenario === 'partial') {
        const hinted = transition(
          upgraded.state,
          { type: 'hint', levelId: level.id, kind: 'cell' },
          catalog,
        ).state;
        expect(hinted.progress[level.id]!.hintsUsed).toBe(1629);
        await repo.save(hinted, upgraded.revision);
        const restarted = await createSqliteRepository(
          db,
          catalog,
          previousCatalogs,
        ).load();
        expect(restarted!.state).toEqual(hinted);
      }
    } finally {
      db.close();
    }
  },
);
