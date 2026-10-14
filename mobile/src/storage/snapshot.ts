import type { GameState, LevelPack, LevelProgress } from '../models/types';
import { emptyProgress, isUnlocked, revealedCells } from '../engine/game';
import { solutionCells, wordCells } from '../engine/grid';
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
        pack.revision === 4
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
  const state: GameState = {
    schemaVersion: 1,
    packId: pack.id,
    contentRevision: pack.revision,
    currentLevelId: string(raw.currentLevelId, 'currentLevelId'),
    coins: integer(raw.coins, 'coins'),
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
