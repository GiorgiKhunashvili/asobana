import type { GameState, LevelPack, LevelProgress } from '../models/types';
import { wordCells } from '../engine/grid';
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
  // Scoped to this parse: every save is still fully validated, including old
  // levels. No validation result survives a call or a content revision.
  const levelsById = new Map(pack.levels.map((level) => [level.id, level]));
  const progress: Record<string, LevelProgress> = {};
  for (const [id, value] of Object.entries(progressRaw)) {
    const level = levelsById.get(id);
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
    // The validator only needs cell IDs, not a sorted renderable grid. Reuse
    // each word's geometry for membership, visibility and completion checks.
    const words = level.words.map((word) => ({
      id: word.id,
      cells: wordCells(word).map((cell) => cell.id),
    }));
    const cells = new Set(words.flatMap((word) => word.cells));
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
        pack.revision >= 27
          ? 1712 // Preserve revision 26 credits plus a full replacement board.
          : pack.revision >= 26
            ? 1670 // Preserve revision 25 credits plus a full replacement board.
            : pack.revision >= 25
              ? 1628 // Preserve revision 24 credits plus a full replacement board.
              : pack.revision >= 24
                ? 1586 // Preserve revision 23 credits plus a full replacement board.
                : pack.revision >= 20
                  ? 1544 // Preserve revision 19 credits plus a full replacement board.
                  : pack.revision === 19
                    ? 1502 // Preserve revision 18 credits plus a full replacement board.
                    : pack.revision === 18
                      ? 1460 // Preserve revision 17 credits plus a full replacement board.
                      : pack.revision === 17
                        ? 1418 // Preserve revision 16 credits plus a full replacement board.
                        : pack.revision === 16
                          ? 1376 // Preserve revision 15 credits plus a full replacement board.
                          : pack.revision === 15
                            ? 1334 // Preserve revision 14 credits plus a full replacement board.
                            : pack.revision === 14
                              ? 1292 // Preserve revision 13 credits plus a full replacement board.
                              : pack.revision === 13
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
                                                    : cells.size +
                                                      level.words.length,
      ),
      completed: boolean(saved.completed, 'completed'),
    };
    const visible = new Set(revealedCellIds);
    for (const word of words)
      if (solvedWordIds.includes(word.id))
        for (const cell of word.cells) visible.add(cell);
    for (const word of words)
      if (
        word.cells.every((cell) => visible.has(cell)) !==
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
  const doubledRewardLevelIds =
    raw.doubledRewardLevelIds === undefined
      ? undefined
      : array(raw.doubledRewardLevelIds, 'doubled rewards').map((id) =>
          string(id, 'doubled reward level ID'),
        );
  if (doubledRewardLevelIds !== undefined) {
    unique(doubledRewardLevelIds, 'doubled rewards');
    // Only a finished level's completion reward can have been doubled.
    if (doubledRewardLevelIds.some((id) => !progress[id]?.completed))
      throw new ContentError('Doubled reward for an unfinished level');
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
    // Saves from before the tutorial: anyone who has found a word knows the wheel.
    tutorialSeen:
      raw.tutorialSeen === undefined
        ? Object.values(progress).some(
            (level) =>
              level.completed ||
              level.solvedWordIds.length > 0 ||
              level.bonusWords.length > 0,
          )
        : boolean(raw.tutorialSeen, 'tutorialSeen'),
    ...(doubledRewardLevelIds === undefined ? {} : { doubledRewardLevelIds }),
  };
  // Walk the completed prefix once. Keep the original error precedence:
  // an unknown/locked current level is reported before any locked progress.
  let unlocked = true;
  let currentUnlocked = false;
  let lockedProgress = false;
  for (const level of pack.levels) {
    const saved = progress[level.id];
    if (level.id === state.currentLevelId) currentUnlocked = unlocked;
    if (
      !unlocked &&
      saved &&
      (saved.completed ||
        saved.solvedWordIds.length ||
        saved.revealedCellIds.length ||
        saved.bonusWords.length ||
        saved.hintsUsed)
    )
      lockedProgress = true;
    unlocked = unlocked && (saved?.completed ?? false);
  }
  if (!currentUnlocked) throw new ContentError('Saved current level is locked');
  if (lockedProgress)
    throw new ContentError('Progress exists for locked level');
  return state;
}
