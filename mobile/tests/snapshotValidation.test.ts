import { catalog } from '../src/content/catalog';
import { emptyProgress, initialState, transition } from '../src/engine/game';
import { solutionCells, wordCells } from '../src/engine/grid';
import { parseSnapshot } from '../src/storage/snapshot';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import type { GameState, LevelProgress } from '../src/models/types';
import { submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';
import journey from '../../content/journey-v13.json';

function prefix(count: number): GameState {
  return {
    ...initialState(catalog),
    currentLevelId: catalog.levels[Math.min(count, 499)]!.id,
    progress: Object.fromEntries(
      catalog.levels.slice(0, count).map((level) => [
        level.id,
        {
          ...emptyProgress(),
          solvedWordIds: level.words.map((word) => word.id),
          completed: true,
        },
      ]),
    ),
  };
}
const first = catalog.levels[0]!;
const third = catalog.levels[2]!;
function savedAtFirst(progress: Partial<LevelProgress>): GameState {
  return {
    ...initialState(catalog),
    bonusRewards: { totalFound: 10, hintsSpent: 0 },
    progress: { [first.id]: { ...emptyProgress(), ...progress } },
  };
}

test('a long save retains paid hints, balances, bonus credits, postcards, settings and doubled rewards', () => {
  const level = catalog.levels[499]!;
  let state = submit(prefix(499), level, level.words[0]!.answer).state;
  state = transition(
    state,
    { type: 'hint', levelId: level.id, kind: 'cell' },
    catalog,
  ).state;
  state = {
    ...state,
    coins: 137,
    settings: { sound: false, haptics: false },
    tutorialSeen: true,
    bonusRewards: { totalFound: 10, hintsSpent: 1 },
    legacyPostcardChapterIds: [journey.legacyChapterIds[0]!],
    doubledRewardLevelIds: [first.id],
    progress: {
      ...state.progress,
      [first.id]: {
        ...state.progress[first.id]!,
        hintsUsed: 2,
        revealedCellIds: [solutionCells(first)[0]!.id],
        bonusWords: [first.bonusWords[0]!],
      },
    },
  };
  const shuffled = {
    ...state,
    progress: Object.fromEntries(Object.entries(state.progress).reverse()),
  };
  const restored = parseSnapshot(JSON.parse(JSON.stringify(shuffled)), catalog);
  expect(restored).toEqual(state);
  expect(restored).not.toBe(state);
  expect(restored.progress[first.id]).not.toBe(state.progress[first.id]);
});

test('validation never reuses a result after a nested progress array changes', () => {
  const revealedCellIds: string[] = [];
  const state = savedAtFirst({ revealedCellIds });
  const validated = parseSnapshot(state, catalog);
  revealedCellIds.push('99:99');
  expect(validated.progress[first.id]!.revealedCellIds).toEqual([]);
  expect(() => parseSnapshot(state, catalog)).toThrow('Unknown saved cell');
});

test.each([
  ['unknown word', { solvedWordIds: ['missing'] }, 'Unknown saved word'],
  [
    'duplicate word',
    { solvedWordIds: [first.words[0]!.id, first.words[0]!.id] },
    'duplicate values',
  ],
  ['unknown cell', { revealedCellIds: ['99:99'] }, 'Unknown saved cell'],
  [
    'duplicate cell',
    {
      revealedCellIds: [
        solutionCells(first)[0]!.id,
        solutionCells(first)[0]!.id,
      ],
    },
    'duplicate values',
  ],
  ['unknown bonus', { bonusWords: ['unknown'] }, 'Unknown saved bonus'],
  [
    'duplicate bonus',
    { bonusWords: [first.bonusWords[0]!, first.bonusWords[0]!] },
    'duplicate values',
  ],
  ['false completion', { completed: true }, 'Inconsistent level completion'],
  [
    'missing completed flag',
    { solvedWordIds: first.words.map((word) => word.id) },
    'Inconsistent level completion',
  ],
  [
    'uncredited visible word',
    { revealedCellIds: wordCells(first.words[0]!).map((cell) => cell.id) },
    'Inconsistent saved word completion',
  ],
  ['negative hint count', { hintsUsed: -1 }, 'hintsUsed'],
  ['excessive hint count', { hintsUsed: 1713 }, 'hintsUsed'],
] as const)('rejects %s', (_name, patch, error) => {
  expect(() => parseSnapshot(savedAtFirst(patch), catalog)).toThrow(error);
});

const oneWord = submit(prefix(2), third, third.words[0]!.answer).state.progress[
  third.id
]!;
test.each([
  ['solved word', oneWord],
  [
    'paid cell',
    { ...emptyProgress(), revealedCellIds: [solutionCells(third)[0]!.id] },
  ],
  ['bonus', { ...emptyProgress(), bonusWords: [third.bonusWords[0]!] }],
  ['historical hint count', { ...emptyProgress(), hintsUsed: 1 }],
  [
    'completed board',
    {
      ...emptyProgress(),
      solvedWordIds: third.words.map((word) => word.id),
      completed: true,
    },
  ],
] as const)('rejects locked progress containing %s', (_name, progress) => {
  const state = {
    ...initialState(catalog),
    bonusRewards: { totalFound: 10, hintsSpent: 0 },
    progress: { [third.id]: progress },
  };
  expect(() => parseSnapshot(state, catalog)).toThrow(
    'Progress exists for locked level',
  );
  expect(() =>
    parseSnapshot({ ...state, currentLevelId: third.id }, catalog),
  ).toThrow('Saved current level is locked');
});

test('empty locked entries are allowed, but an unknown level or current ID is rejected', () => {
  const state = {
    ...initialState(catalog),
    progress: { [third.id]: emptyProgress() },
  };
  expect(parseSnapshot(state, catalog)).toEqual(state);
  expect(() =>
    parseSnapshot(
      { ...state, progress: { missing: emptyProgress() } },
      catalog,
    ),
  ).toThrow('Unknown saved level');
  expect(() =>
    parseSnapshot({ ...state, currentLevelId: 'missing' }, catalog),
  ).toThrow('Saved current level is locked');
});

test('replaying an earlier board after full completion stays valid', () => {
  const state = { ...prefix(500), currentLevelId: first.id };
  expect(parseSnapshot(state, catalog)).toEqual(state);
});

test('all saved levels are still checked after the first unfinished board', () => {
  const state = prefix(499);
  const damaged = {
    ...state,
    progress: { ...state.progress, [catalog.levels[250]!.id]: emptyProgress() },
  };
  expect(() =>
    parseSnapshot({ ...damaged, currentLevelId: first.id }, catalog),
  ).toThrow('Progress exists for locked level');
});

test('level lookup work remains linear in a long save', () => {
  const state = prefix(499);
  let reads = 0;
  const pack = {
    ...catalog,
    levels: catalog.levels.map(
      (level) =>
        new Proxy(level, {
          get(target, key: keyof typeof level) {
            if (key === 'id') reads++;
            return target[key];
          },
        }),
    ),
  };
  expect(parseSnapshot(state, pack)).toEqual(state);
  expect(reads).toBeLessThanOrEqual(catalog.levels.length * 6);
});

test('a rejected long-save write leaves the durable snapshot and revision intact', async () => {
  const db = new TestSqlite();
  try {
    await migrateDatabase(db);
    const repo = createSqliteRepository(db, catalog);
    const state = prefix(499);
    const revision = await repo.save(state, 0);
    const damaged = {
      ...state,
      progress: {
        ...state.progress,
        [first.id]: {
          ...state.progress[first.id]!,
          revealedCellIds: ['99:99'],
        },
      },
    };
    await expect(repo.save(damaged, revision)).rejects.toThrow(
      'Unknown saved cell',
    );
    expect(await repo.load()).toEqual({ state, revision });
  } finally {
    db.close();
  }
});
