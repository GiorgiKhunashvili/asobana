import type { GameState, LevelPack } from '../models/types';
import { selectChapters } from './selectors';
import journey from '../../../content/journey-v13.json';

/** Derived from durable completion, so existing players receive earned cards. */
export function selectPostcards(state: GameState, pack: LevelPack) {
  const chapters = selectChapters(state, pack);
  const next = chapters.find(
    (chapter) => chapter.completedLevels < chapter.totalLevels,
  );
  const current = chapters.map((chapter, index) => ({
    legacy: false,
    chapterId: chapter.id,
    number: index + 1,
    collected:
      chapter.totalLevels > 0 &&
      chapter.completedLevels === chapter.totalLevels,
    next: chapter.id === next?.id,
    remaining: chapter.totalLevels - chapter.completedLevels,
  }));
  const legacy = (state.legacyPostcardChapterIds ?? []).map((chapterId) => ({
    legacy: true,
    chapterId,
    number: journey.legacyChapterIds.indexOf(chapterId) + 1,
    collected: true,
    next: false,
    remaining: 0,
  }));
  return [...current, ...legacy];
}
