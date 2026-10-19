import fs from 'node:fs';
import path from 'node:path';
import journey from '../../content/journey-v23.json';
import manifest from '../../content/levels/discovery.v23.recipes.json';
import {
  previousCatalogs,
  vocabularyForRevision,
} from '../src/content/catalog';
import { validateWide } from '../src/content/wide';
import { requiredWordsForRevision } from '../src/content/wordPolicy';
import { isUnlocked, nextLevelId, transition } from '../src/engine/game';
import { selectPostcards } from '../src/engine/postcards';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { COUNTRIES, sceneFor } from '../src/theme';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';

const catalog = previousCatalogs.find((pack) => pack.revision === 23)!;
const vocabulary = vocabularyForRevision(23);

const previous = previousCatalogs.find((pack) => pack.revision === 22)!;

test('Spain appends exactly six painted five-level stops using the existing approvals', () => {
  expect(catalog.revision).toBe(23);
  expect(catalog.levels).toHaveLength(295);
  expect(catalog.chapters).toEqual(journey.chapters);
  expect(catalog.levels.slice(0, 265)).toEqual(previous.levels);
  expect(catalog.chapters.slice(0, 53)).toEqual(previous.chapters);
  expect(catalog.chapters.slice(53).map((chapter) => chapter.id)).toEqual([
    'barcelona',
    'valencia',
    'madrid',
    'granada',
    'cordoba',
    'seville',
  ]);
  expect(COUNTRIES.at(-1)?.chapterIds).toEqual([
    'barcelona',
    'valencia',
    'madrid',
    'granada',
    'cordoba',
    'seville',
  ]);
  expect(requiredWordsForRevision(23)).toEqual(requiredWordsForRevision(22));
  const oldWords = new Set(
    previous.levels.flatMap((level) => level.words.map((word) => word.answer)),
  );
  const added = catalog.levels
    .slice(265)
    .flatMap((level) => level.words.map((word) => word.answer));
  expect(new Set(added).size).toBe(150);
  expect(added.filter((word) => !oldWords.has(word)).length).toBe(61);
  for (const id of [
    'barcelona',
    'valencia',
    'madrid',
    'granada',
    'cordoba',
    'seville',
  ]) {
    const scene = sceneFor(id);
    expect(scene.country).toBe('spain');
    expect(scene.image).toBeDefined();
    expect(scene.band).toBeDefined();
    for (const suffix of ['', '-band']) {
      const bytes = fs.readFileSync(
        path.join(__dirname, `../assets/scenes/${id}${suffix}.jpg`),
      );
      expect(bytes.subarray(0, 2)).toEqual(Buffer.from([0xff, 0xd8]));
      expect(bytes.length).toBeGreaterThan(10000);
    }
  }
  expect(() =>
    validateWide(catalog, vocabulary, manifest.familiarity),
  ).not.toThrow();
  expect(() =>
    validateWide(
      { ...catalog, levels: catalog.levels.slice(0, 265) },
      vocabulary,
      manifest.familiarity,
    ),
  ).toThrow('295 levels');
});

test.each(['partial', 'complete'] as const)(
  'revision 22 %s saves survive append migration and restart without losing credits',
  async (scenario) => {
    const level = previous.levels[264]!;
    let old = reachLevel(264, previous);
    old = submit(old, level, level.words[0]!.answer, previous).state;
    old = transition(
      old,
      { type: 'hint', levelId: level.id, kind: 'cell' },
      previous,
    ).state;
    old = submit(old, level, level.bonusWords[0]!, previous).state;
    if (scenario === 'complete') {
      for (const word of level.words)
        old = submit(old, level, word.answer, previous).state;
    }
    const cards = selectPostcards(old, previous)
      .filter((card) => card.collected)
      .map((card) => card.chapterId);
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      await createSqliteRepository(db, previous).save(old, 0);
      const repo = createSqliteRepository(db, catalog, previousCatalogs);
      const upgraded = (await repo.load())!;
      expect(upgraded.state).toEqual({
        ...old,
        contentRevision: 23,
        legacyPostcardChapterIds: old.legacyPostcardChapterIds ?? [],
      });
      expect(
        await createSqliteRepository(db, catalog, previousCatalogs).load(),
      ).toEqual(upgraded);
      expect(
        selectPostcards(upgraded.state, catalog)
          .filter((card) => card.collected)
          .map((card) => card.chapterId),
      ).toEqual(cards);
      expect(isUnlocked(upgraded.state, catalog, 'ka-266')).toBe(
        scenario === 'complete',
      );
      expect(isUnlocked(upgraded.state, catalog, 'ka-267')).toBe(false);
      expect(nextLevelId(catalog, 'ka-265')).toBe('ka-266');
      if (scenario === 'complete') {
        let state = upgraded.state;
        for (const added of catalog.levels.slice(265)) {
          expect(isUnlocked(state, catalog, added.id)).toBe(true);
          state = transition(
            state,
            { type: 'open-level', levelId: added.id },
            catalog,
          ).state;
          for (const word of added.words)
            state = submit(state, added, word.answer, catalog).state;
        }
        expect(
          selectPostcards(state, catalog).filter((card) => card.collected),
        ).toHaveLength(59);
        expect(nextLevelId(catalog, 'ka-295')).toBeNull();
        await repo.save(state, upgraded.revision);
        expect(
          (await createSqliteRepository(db, catalog, previousCatalogs).load())!
            .state,
        ).toEqual(state);
      }
    } finally {
      db.close();
    }
  },
);
