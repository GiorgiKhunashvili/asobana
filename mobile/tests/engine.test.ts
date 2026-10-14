import {
  catalog,
  vocabulary,
  reachLevel,
  submit,
  tilesFor,
} from './legacyHelpers';
import {
  canFormWord,
  GEORGIAN_ALPHABET,
  isGeorgianWord,
  normalizeWord,
} from '../src/engine/georgian';
import { initialState, isUnlocked, transition } from '../src/engine/game';
import { parseLevel, parsePack } from '../src/engine/validation';
import { selectChapters, selectGameplay } from '../src/engine/selectors';
import { parseSnapshot } from '../src/storage/snapshot';
const first = catalog.levels[0]!;
const family = catalog.levels[1]!;
const home = catalog.levels[2]!;
describe('Georgian Unicode', () => {
  test('33 unique modern letters and Mtavruli casing', () => {
    expect(new Set(Array.from(GEORGIAN_ALPHABET)).size).toBe(33);
    expect(normalizeWord('  ᲛᲖᲔ  ')).toBe('მზე');
    expect(normalizeWord('მზე')).toBe('მზე');
  });
  test.each(['mze', 'მ ზ ე', 'მზე!', 'მზ\u200bე', 'მზé', 'ჱ', '😀'])(
    'rejects %s',
    (word) => expect(isGeorgianWord(word)).toBe(false),
  );
  test('codepoint length and repeated-letter multiplicity', () => {
    expect(isGeorgianWord('მე')).toBe(true);
    expect(isGeorgianWord('მ')).toBe(false);
    expect(isGeorgianWord('მზე', 2, 2)).toBe(false);
    expect(canFormWord('დედა', ['დ', 'ე', 'ა'])).toBe(false);
    expect(canFormWord('დედა', ['დ', 'ე', 'დ', 'ა'])).toBe(true);
  });
});
describe('rules', () => {
  test('correct submission reveals shared cells, leaves input immutable', () => {
    const state = initialState(catalog);
    const before = JSON.stringify(state);
    const result = submit(state, first, 'მზე');
    expect(JSON.stringify(state)).toBe(before);
    const view = selectGameplay(result.state, catalog);
    expect(view.foundWords).toBe(1);
    expect(view.completed).toBe(false);
    expect(view.cells.find((cell) => cell.id === '0:0')?.letter).toBe('მ');
    expect(view.cells.find((cell) => cell.id === '1:0')?.letter).toBeNull();
    expect(result.events).toContainEqual({
      type: 'word-found',
      levelId: first.id,
      wordId: 'word-1',
      word: 'მზე',
    });
  });
  test('invalid and duplicate words never change coins/state', () => {
    const state = initialState(catalog);
    const invalid = submit(state, first, 'ზმე');
    expect(invalid.state).toBe(state);
    expect(invalid.events[0]).toMatchObject({ reason: 'invalid-word' });
    const found = submit(state, first, 'მზე').state;
    expect(submit(found, first, 'მზე').events[0]).toMatchObject({
      reason: 'duplicate-word',
    });
  });
  test('IDs prevent tile reuse but permit repeated characters', () => {
    const state = reachLevel(1);
    const valid = submit(state, family, 'დედა');
    expect(valid.state.progress[family.id]?.solvedWordIds).toContain('word-1');
    expect(
      transition(
        state,
        {
          type: 'submit',
          levelId: family.id,
          tileIds: ['tile-1', 'tile-2', 'tile-1', 'tile-4'],
        },
        catalog,
      ).events[0],
    ).toMatchObject({ reason: 'invalid-selection' });
    expect(
      transition(
        state,
        { type: 'submit', levelId: family.id, tileIds: ['missing', 'tile-2'] },
        catalog,
      ).state,
    ).toBe(state);
  });
  test('completion rewards exactly once, unlocks sequentially and permits replay', () => {
    let state = initialState(catalog);
    expect(isUnlocked(state, catalog, family.id)).toBe(false);
    expect(
      transition(state, { type: 'open-level', levelId: family.id }, catalog)
        .state,
    ).toBe(state);
    state = submit(state, first, 'მზე').state;
    const completed = submit(state, first, 'მე');
    state = completed.state;
    expect(state.coins).toBe(125);
    expect(state.progress[first.id]?.completed).toBe(true);
    expect(isUnlocked(state, catalog, family.id)).toBe(true);
    expect(isUnlocked(state, catalog, home.id)).toBe(false);
    expect(completed.events).toContainEqual({
      type: 'level-completed',
      levelId: first.id,
      reward: 25,
      nextLevelId: family.id,
    });
    expect(submit(state, first, 'მე').state.coins).toBe(125);
    const opened = transition(
      state,
      { type: 'open-level', levelId: family.id },
      catalog,
    ).state;
    expect(submit(opened, first, 'მზე').events[0]).toMatchObject({
      reason: 'wrong-level',
    });
  });
  test('bonus recognition and no repeated reward', () => {
    const state = reachLevel(1);
    const result = submit(state, family, 'მადა');
    expect(result.state.coins).toBe(state.coins + 3);
    expect(result.state.progress[family.id]?.bonusWords).toEqual(['მადა']);
    expect(submit(result.state, family, 'მადა').state.coins).toBe(
      result.state.coins,
    );
  });
  test('cell and word hints spend coins, persist reveals, and can complete', () => {
    let state = initialState(catalog);
    state = transition(
      state,
      { type: 'hint', levelId: first.id, kind: 'cell' },
      catalog,
    ).state;
    expect(state.coins).toBe(85);
    expect(state.progress[first.id]?.revealedCellIds).toEqual(['0:0']);
    expect(state.progress[first.id]?.hintsUsed).toBe(1);
    state = transition(
      state,
      { type: 'hint', levelId: first.id, kind: 'word' },
      catalog,
    ).state;
    expect(state.coins).toBe(45);
    state = transition(
      state,
      { type: 'hint', levelId: first.id, kind: 'cell' },
      catalog,
    ).state;
    expect(state.coins).toBe(55);
    expect(state.progress[first.id]?.completed).toBe(true);
    expect(state.progress[first.id]?.hintsUsed).toBe(3);
    expect(
      transition(
        state,
        { type: 'hint', levelId: first.id, kind: 'cell' },
        catalog,
      ).state,
    ).toBe(state);
  });
  test('hint cannot spend below zero or bypass content restrictions', () => {
    const state = { ...initialState(catalog), coins: 14 };
    expect(selectGameplay(state, catalog).canUseCellHint).toBe(false);
    expect(
      transition(
        state,
        { type: 'hint', levelId: first.id, kind: 'cell' },
        catalog,
      ).events[0],
    ).toMatchObject({ reason: 'insufficient-coins' });
    const pack = {
      ...catalog,
      levels: [
        { ...first, hints: { allowCell: false, allowWord: false } },
        ...catalog.levels.slice(1),
      ],
    };
    expect(
      transition(
        initialState(pack),
        { type: 'hint', levelId: first.id, kind: 'word' },
        pack,
      ).events[0],
    ).toMatchObject({ reason: 'hint-unavailable' });
  });
  test('all bundled levels solve, chapter progression and final level', () => {
    let state = reachLevel(3);
    const last = catalog.levels[3]!;
    for (const word of last.words)
      state = submit(state, last, word.answer).state;
    expect(selectGameplay(state, catalog).nextLevelId).toBeNull();
    expect(
      selectChapters(state, catalog).every(
        (chapter) => chapter.completedLevels === chapter.totalLevels,
      ),
    ).toBe(true);
  });
});
describe('content and snapshot boundaries', () => {
  test.each([
    { ...first, schemaVersion: 2 },
    { ...first, tiles: [first.tiles[0], first.tiles[0]] },
    { ...first, words: [] },
    { ...first, words: [{ ...first.words[0], row: 19 }, first.words[1]] },
    {
      ...first,
      words: [{ ...first.words[0], answer: 'ყალბი' }, first.words[1]],
    },
    {
      ...first,
      words: [
        first.words[0],
        { ...first.words[1], answer: 'მე', acceptedAnswers: ['მე'], column: 1 },
      ],
    },
    {
      ...first,
      words: [first.words[0], { ...first.words[1], row: 1, column: 2 }],
    },
    { ...first, bonusWords: ['მზე'] },
    { ...first, grid: null },
    {
      ...first,
      words: [{ ...first.words[0], acceptedAnswers: ['მე'] }, first.words[1]],
    },
  ])('rejects malformed level %#', (level) =>
    expect(() => parseLevel(level, vocabulary)).toThrow(),
  );
  test('repeated letter counts enforced independently of spelling verification', () => {
    expect(() =>
      parseLevel(
        {
          ...family,
          tiles: family.tiles.filter((tile) => tile.id !== 'tile-3'),
        },
        vocabulary,
      ),
    ).toThrow('Unplayable word');
  });
  test('parallel overlaps and unlisted side contacts rejected', () => {
    expect(() =>
      parseLevel(
        {
          ...first,
          words: [first.words[0], { ...first.words[1], direction: 'across' }],
        },
        vocabulary,
      ),
    ).toThrow('Overlapping parallel');
  });
  test('draft and duplicate pack IDs cannot play', () => {
    expect(() =>
      parsePack(
        { ...catalog, levels: [{ ...first, reviewStatus: 'generated-draft' }] },
        vocabulary,
      ),
    ).toThrow();
    expect(() =>
      parsePack({ ...catalog, levels: [first, first] }, vocabulary),
    ).toThrow();
  });
  test('restores hints, coins, settings and completion exactly', () => {
    let state = reachLevel(1);
    state = submit(state, family, 'მადა').state;
    state = transition(
      state,
      { type: 'hint', levelId: family.id, kind: 'cell' },
      catalog,
    ).state;
    state = transition(
      state,
      { type: 'settings', settings: { sound: false, haptics: false } },
      catalog,
    ).state;
    expect(parseSnapshot(JSON.parse(JSON.stringify(state)), catalog)).toEqual(
      state,
    );
  });
  test.each([
    { ...initialState(catalog), coins: -1 },
    { ...initialState(catalog), coins: NaN },
    { ...initialState(catalog), schemaVersion: 99 },
    { ...initialState(catalog), contentRevision: 999 },
    { ...initialState(catalog), currentLevelId: family.id },
    {
      ...initialState(catalog),
      progress: {
        [first.id]: {
          solvedWordIds: [],
          revealedCellIds: ['99:99'],
          bonusWords: [],
          hintsUsed: 1,
          completed: false,
        },
      },
    },
    {
      ...initialState(catalog),
      progress: {
        [first.id]: {
          solvedWordIds: [],
          revealedCellIds: [],
          bonusWords: [],
          hintsUsed: 0,
          completed: true,
        },
      },
    },
  ])('rejects corrupt save %#', (state) =>
    expect(() => parseSnapshot(state, catalog)).toThrow(),
  );
  test('selections with one tile cannot submit', () =>
    expect(
      transition(
        initialState(catalog),
        {
          type: 'submit',
          levelId: first.id,
          tileIds: tilesFor(first, 'მე').slice(0, 1),
        },
        catalog,
      ).events[0],
    ).toMatchObject({ reason: 'invalid-selection' }));
});
