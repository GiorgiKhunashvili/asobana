import { catalog } from '../src/content/catalog';
import { emptyProgress, initialState, isUnlocked } from '../src/engine/game';
import { selectChapters, selectLevels } from '../src/engine/selectors';
import { selectPostcards } from '../src/engine/postcards';
import type { GameState } from '../src/models/types';

function completedPrefix(count: number): GameState {
  return {
    ...initialState(catalog),
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

test.each([0, 1, 4, 5, 249, 499, 500])(
  'campaign rows preserve unlocks, chapter totals and postcards after %i completions',
  (count) => {
    const state = completedPrefix(count);
    const levels = selectLevels(state, catalog);
    expect(levels).toEqual(
      catalog.levels.map((level, index) => ({
        id: level.id,
        chapterId: level.chapterId,
        title: level.title,
        number: index + 1,
        unlocked: isUnlocked(state, catalog, level.id),
        completed: index < count,
      })),
    );
    const chapters = selectChapters(state, catalog);
    for (const chapter of chapters) {
      const members = levels.filter((level) => level.chapterId === chapter.id);
      expect(chapter.unlocked).toBe(members.some((level) => level.unlocked));
      expect(chapter.totalLevels).toBe(members.length);
      expect(chapter.completedLevels).toBe(
        members.filter((level) => level.completed).length,
      );
    }
    expect(
      selectPostcards(state, catalog).filter((card) => card.collected),
    ).toHaveLength(Math.floor(count / 5));
  },
);

test('a completion after a gap cannot unlock subsequent levels, even when replaying an earlier board', () => {
  const complete = completedPrefix(10);
  const gap = catalog.levels[3]!;
  const state = {
    ...complete,
    currentLevelId: catalog.levels[0]!.id,
    progress: { ...complete.progress, [gap.id]: emptyProgress() },
  };
  const levels = selectLevels(state, catalog);
  expect(
    levels.filter((level) => level.unlocked).map((level) => level.number),
  ).toEqual([1, 2, 3, 4]);
  expect(levels[4]!.completed).toBe(true);
  expect(selectChapters(state, catalog)[1]!.unlocked).toBe(false);
});

test('chapter aggregation follows IDs and retains empty chapters', () => {
  const state = completedPrefix(5);
  const pack = {
    ...catalog,
    chapters: [
      ...catalog.chapters.toReversed(),
      { ...catalog.chapters[0]!, id: 'empty' },
    ],
  };
  const chapters = selectChapters(state, pack);
  expect(chapters.slice(0, -1)).toEqual(
    selectChapters(state, catalog).toReversed(),
  );
  expect(chapters.at(-1)).toMatchObject({
    id: 'empty',
    unlocked: false,
    completedLevels: 0,
    totalLevels: 0,
  });
});

test('campaign selectors keep progress lookups linear as the save approaches 500 levels', () => {
  const state = completedPrefix(499);
  let reads = 0;
  const measured = {
    ...state,
    progress: new Proxy(state.progress, {
      get(target, key: string) {
        reads++;
        return target[key];
      },
    }),
  };
  selectLevels(measured, catalog);
  selectChapters(measured, catalog);
  // Deterministic work bound, independent of machine speed. Repeated scans of
  // each completed prefix exceed this budget by two orders of magnitude.
  expect(reads).toBeLessThanOrEqual(catalog.levels.length * 4);
});
