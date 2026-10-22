import fs from 'node:fs';
import path from 'node:path';
import journey from '../../content/journey-v29.json';
import manifest from '../../content/levels/discovery.v29.recipes.json';
import policy from '../../content/dictionaries/word-policy.json';
import { catalog, vocabulary, previousCatalogs } from '../src/content/catalog';
import { destinationCaptions, placeFacts } from '../src/content/destinations';
import { projectBoard, validateWide } from '../src/content/wide';
import { requiredWordsForRevision } from '../src/content/wordPolicy';
import {
  DEFAULT_ECONOMY,
  isUnlocked,
  nextLevelId,
  transition,
} from '../src/engine/game';
import { selectPostcards } from '../src/engine/postcards';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { COUNTRIES, sceneFor } from '../src/theme';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';

const previous = previousCatalogs().find((pack) => pack.revision === 28)!;
const NEW_STOPS: Record<string, string[]> = {
  france: [
    'carcassonne',
    'avignon',
    'marseille',
    'provence',
    'nice',
    'mont-blanc',
    'lyon',
    'chambord',
    'mont-saint-michel',
    'etretat',
    'versailles',
    'paris',
  ],
  switzerland: ['geneva', 'montreux', 'matterhorn', 'lucerne'],
  germany: [
    'black-forest',
    'heidelberg',
    'rhine-valley',
    'cologne',
    'hamburg',
    'berlin',
    'dresden',
    'rothenburg',
    'munich',
    'neuschwanstein',
  ],
  austria: ['innsbruck', 'salzburg', 'hallstatt', 'melk', 'vienna'],
};

test('revision 29 rebuilds 500 levels with today’s rules and 31 painted stops', () => {
  expect(catalog.revision).toBe(29);
  expect(catalog.levels).toHaveLength(500);
  expect(catalog.chapters).toEqual(journey.chapters);
  expect(catalog.chapters.slice(0, 69)).toEqual(previous.chapters);
  const newIds = Object.values(NEW_STOPS).flat();
  expect(catalog.chapters.slice(69).map((chapter) => chapter.id)).toEqual(
    newIds,
  );
  // Existing levels keep their IDs and stops, so saves migrate by level.
  catalog.levels.slice(0, 345).forEach((level, index) => {
    expect(level.id).toBe(previous.levels[index]!.id);
    expect(level.chapterId).toBe(previous.levels[index]!.chapterId);
  });
  expect(
    COUNTRIES.slice(-4).map((country) => [country.id, country.chapterIds]),
  ).toEqual(Object.entries(NEW_STOPS));
  for (const id of newIds) {
    const scene = sceneFor(id);
    expect(scene.image).toBeDefined();
    expect(scene.band).toBeDefined();
    expect(destinationCaptions[id]).toBeTruthy();
    expect(placeFacts[id]).toBeTruthy();
    expect(placeFacts[id]).not.toBe(destinationCaptions[id]);
    for (const suffix of ['', '-band']) {
      const bytes = fs.readFileSync(
        path.join(__dirname, `../assets/scenes/${id}${suffix}.jpg`),
      );
      expect(bytes.subarray(0, 2)).toEqual(Buffer.from([0xff, 0xd8]));
      expect(bytes.length).toBeGreaterThan(10000);
    }
  }
  // Today's board limits: at most five rows and 36 pt iPhone SE cells.
  for (const level of catalog.levels) {
    expect(level.grid.rows).toBeLessThanOrEqual(5);
    expect(projectBoard(level.grid, 'iPhone SE').cell).toBeGreaterThanOrEqual(
      36,
    );
  }
  expect(() =>
    validateWide(catalog, vocabulary, manifest.familiarity),
  ).not.toThrow();
  expect(() =>
    validateWide(
      { ...catalog, levels: catalog.levels.slice(0, 345) },
      vocabulary,
      manifest.familiarity,
    ),
  ).toThrow('500 levels');
});

test('revision 29 uses the 2,318 approvals and excludes every rejected spelling', () => {
  expect(requiredWordsForRevision(29).size).toBe(2318);
  expect(requiredWordsForRevision(28).size).toBe(2075);
  expect(vocabulary.size).toBe(2436);
  const rejected = policy.excludedCategories
    .filter((category) => category.id.startsWith('owner-targeted-batch-'))
    .flatMap((category) => category.words);
  expect(rejected).toHaveLength(99);
  for (const word of rejected) {
    expect(vocabulary.has(word)).toBe(false);
    expect(requiredWordsForRevision(29).has(word)).toBe(false);
  }
  const answers = catalog.levels.flatMap((level) =>
    level.words.map((word) => word.answer),
  );
  expect(answers).toHaveLength(2500);
  expect(new Set(answers).size).toBe(1954);
  expect(
    answers.every((answer) => requiredWordsForRevision(29).has(answer)),
  ).toBe(true);
  const bonuses = catalog.levels.flatMap((level) => level.bonusWords);
  expect(bonuses.every((word) => !rejected.includes(word))).toBe(true);
});

test.each(['partial', 'complete'] as const)(
  'revision 28 %s saves keep progress, credits and postcards on rebuilt boards',
  async (scenario) => {
    const level = previous.levels[344]!;
    let old = reachLevel(344, previous);
    old = submit(old, level, level.words[0]!.answer, previous).state;
    old = transition(
      old,
      { type: 'hint', levelId: level.id, kind: 'cell' },
      previous,
    ).state;
    if (level.bonusWords[0])
      old = submit(old, level, level.bonusWords[0], previous).state;
    if (scenario === 'complete') {
      for (const word of level.words)
        if (!old.progress[level.id]?.solvedWordIds.includes(word.id))
          old = submit(old, level, word.answer, previous).state;
    }
    const cards = selectPostcards(old, previous)
      .filter((card) => card.collected)
      .map((card) => card.chapterId);
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      await createSqliteRepository(db, previous).save(old, 0);
      const repo = createSqliteRepository(db, catalog, previousCatalogs());
      const upgraded = (await repo.load())!;
      const state = upgraded.state;
      expect(state.contentRevision).toBe(29);
      expect(state.bonusRewards).toEqual(old.bonusRewards);
      expect(state.currentLevelId).toBe(old.currentLevelId);
      for (const done of catalog.levels.slice(0, 344))
        expect(state.progress[done.id]?.completed).toBe(true);
      const before = old.progress[level.id]!;
      const after = state.progress[level.id]!;
      expect(after.solvedWordIds.length).toBeGreaterThanOrEqual(
        before.solvedWordIds.length,
      );
      // Paid letters move to the rebuilt board while it is unfinished.
      if (!after.completed)
        expect(after.revealedCellIds.length).toBeGreaterThanOrEqual(
          before.revealedCellIds.length,
        );
      expect(after.hintsUsed).toBe(before.hintsUsed);
      // Coins stay; a rebuilt partial board that happens to finish pays once.
      expect(state.coins).toBe(
        old.coins +
          (after.completed && !before.completed
            ? DEFAULT_ECONOMY.completionReward
            : 0),
      );
      if (scenario === 'complete') expect(after.completed).toBe(true);
      expect(
        selectPostcards(state, catalog)
          .filter((card) => card.collected)
          .map((card) => card.chapterId),
      ).toEqual(
        scenario === 'complete' ? cards : expect.arrayContaining(cards),
      );
      expect(
        await createSqliteRepository(db, catalog, previousCatalogs()).load(),
      ).toEqual(upgraded);
      expect(isUnlocked(state, catalog, 'ka-346')).toBe(after.completed);
      expect(isUnlocked(state, catalog, 'ka-347')).toBe(false);
      if (scenario === 'complete') {
        let next = state;
        for (const added of catalog.levels.slice(345)) {
          expect(isUnlocked(next, catalog, added.id)).toBe(true);
          next = transition(
            next,
            { type: 'open-level', levelId: added.id },
            catalog,
          ).state;
          for (const word of added.words)
            next = submit(next, added, word.answer, catalog).state;
        }
        expect(
          selectPostcards(next, catalog).filter((card) => card.collected),
        ).toHaveLength(100);
        expect(nextLevelId(catalog, 'ka-500')).toBeNull();
        await repo.save(next, upgraded.revision);
        expect(
          (await createSqliteRepository(
            db,
            catalog,
            previousCatalogs(),
          ).load())!.state,
        ).toEqual(next);
      }
    } finally {
      db.close();
    }
  },
);
