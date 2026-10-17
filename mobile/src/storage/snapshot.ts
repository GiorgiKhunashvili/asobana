import type { GameState, LevelPack, LevelProgress } from '../models/types';
import { emptyProgress, isUnlocked, revealedCells } from '../engine/game';
import { solutionCells, wordCells } from '../engine/grid';
import { BONUS_GOAL } from '../engine/bonusRewards';
import journey from '../../../content/journey-v13.json';
import {
  array,
  boolean,
  ContentError,
  integer,
  object,
  string,
  unique,
} from '../engine/validation';
export function parseSnapshot(value: unknown, pack: LevelPack): GameState {
  const raw = object(value, 'save');
  if (raw.schemaVersion !== 1)
    throw new ContentError('Unsupported save version; migration required');
  if (raw.packId !== pack.id || raw.contentRevision !== pack.revision)
    throw new ContentError(
      'Save content revision mismatch; migration required',
    );
  const progressRaw = object(raw.progress, 'progress');
  const progress: Record<string, LevelProgress> = {};
  for (const [id, value] of Object.entries(progressRaw)) {
    const level = pack.levels.find((level) => level.id === id);
    if (!level) throw new ContentError('Unknown saved level');
    const saved = object(value, 'level progress');
    const solvedWordIds = array(saved.solvedWordIds, 'solvedWordIds').map(
      (id) => string(id, 'word ID'),
    );
    const revealedCellIds = array(saved.revealedCellIds, 'revealedCellIds').map(
      (id) => string(id, 'cell ID'),
    );
    const bonusWords = array(saved.bonusWords, 'bonusWords').map((word) =>
      string(word, 'bonus word'),
    );
    unique(solvedWordIds, 'saved words');
    unique(revealedCellIds, 'saved cells');
    unique(bonusWords, 'saved bonuses');
    if (solvedWordIds.some((id) => !level.words.some((word) => word.id === id)))
      throw new ContentError('Unknown saved word');
    const cells = new Set(solutionCells(level).map((cell) => cell.id));
    if (revealedCellIds.some((id) => !cells.has(id)))
      throw new ContentError('Unknown saved cell');
    if (bonusWords.some((word) => !level.bonusWords.includes(word)))
      throw new ContentError('Unknown saved bonus');
    const restored: LevelProgress = {
      solvedWordIds,
      revealedCellIds,
      bonusWords,
      hintsUsed: integer(
        saved.hintsUsed,
        'hintsUsed',
        0,
        // Reauthored boards may be smaller than the board these hints were used on.
        pack.revision === 13
          ? 1250 // Preserve prior hint credits plus a full replacement board.
          : pack.revision === 12
            ? 1208 // Preserve revision 11 credits plus one board of new hints.
            : pack.revision === 11
              ? 1166 // Revision 10 allowance plus at most 7×5 cells and seven words.
              : pack.revision === 10
                ? 1124
                : pack.revision === 9
                  ? 1082 // Revision 8 allowance plus at most 7×5 cells and seven words.
                  : pack.revision === 8
                    ? 1040 // Revision 7 allowance plus at most 7×5 cells and seven words.
                    : pack.revision === 7
                      ? 998 // Revision 6 allowance plus at most 7×5 cells and seven words.
                      : pack.revision === 6
                        ? 956 // Revision 5 allowance plus at most 7×5 cells and seven words.
                        : pack.revision === 5
                          ? 914 // Revision 4 allowance plus at most 49 cells and five words.
                          : pack.revision === 4
                            ? 860
                            : pack.revision === 3
                              ? 430
                              : cells.size + level.words.length,
      ),
      completed: boolean(saved.completed, 'completed'),
    };
    const visible = revealedCells(level, restored);
    for (const word of level.words)
      if (
        wordCells(word).every((cell) => visible.has(cell.id)) !==
        solvedWordIds.includes(word.id)
      )
        throw new ContentError('Inconsistent saved word completion');
    if (restored.completed !== (solvedWordIds.length === level.words.length))
      throw new ContentError('Inconsistent level completion');
    progress[id] = restored;
  }
  const settings = object(raw.settings, 'settings');
  const recordedBonuses = Object.values(progress).reduce(
    (sum, level) => sum + level.bonusWords.length,
    0,
  );
  // Old snapshots receive credit once, before content migration retires any words.
  const rewards =
    raw.bonusRewards === undefined
      ? { totalFound: recordedBonuses, hintsSpent: 0 }
      : object(raw.bonusRewards, 'bonus rewards');
  const totalFound = integer(
    rewards.totalFound,
    'total bonus finds',
    recordedBonuses,
  );
  const hintsSpent = integer(
    rewards.hintsSpent,
    'spent bonus hints',
    0,
    Math.floor(totalFound / BONUS_GOAL),
  );
  const legacyPostcardChapterIds =
    raw.legacyPostcardChapterIds === undefined
      ? undefined
      : array(raw.legacyPostcardChapterIds, 'legacy postcards').map((id) =>
          string(id, 'legacy postcard ID'),
        );
  if (legacyPostcardChapterIds !== undefined) {
    unique(legacyPostcardChapterIds, 'legacy postcards');
    if (
      pack.revision < 13 ||
      legacyPostcardChapterIds.some(
        (id) => !journey.legacyChapterIds.includes(id),
      )
    )
      throw new ContentError('Unknown legacy postcard');
  }
  const state: GameState = {
    schemaVersion: 1,
    packId: pack.id,
    contentRevision: pack.revision,
    currentLevelId: string(raw.currentLevelId, 'currentLevelId'),
    coins: integer(raw.coins, 'coins'),
    bonusRewards: { totalFound, hintsSpent },
    ...(legacyPostcardChapterIds === undefined
      ? {}
      : { legacyPostcardChapterIds }),
    progress,
    settings: {
      sound: boolean(settings.sound, 'sound'),
      haptics: boolean(settings.haptics, 'haptics'),
    },
  };
  if (!isUnlocked(state, pack, state.currentLevelId))
    throw new ContentError('Saved current level is locked');
  for (const level of pack.levels) {
    const saved = progress[level.id] ?? emptyProgress();
    if (
      (saved.completed ||
        saved.solvedWordIds.length ||
        saved.revealedCellIds.length ||
        saved.bonusWords.length ||
        saved.hintsUsed) &&
      !isUnlocked(state, pack, level.id)
    )
      throw new ContentError('Progress exists for locked level');
  }
  return state;
}
