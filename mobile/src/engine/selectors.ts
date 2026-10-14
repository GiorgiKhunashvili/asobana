import type {
  Economy,
  GameState,
  GameplayView,
  LevelPack,
} from '../models/types';
import {
  DEFAULT_ECONOMY,
  emptyProgress,
  isUnlocked,
  nextLevelId,
  revealedCells,
} from './game';
import { solutionCells } from './grid';
export function selectGameplay(
  state: GameState,
  pack: LevelPack,
  economy: Economy = DEFAULT_ECONOMY,
): GameplayView {
  const level = pack.levels.find((level) => level.id === state.currentLevelId);
  if (!level) throw new Error('Unknown current level');
  const progress = state.progress[level.id] ?? emptyProgress();
  const visible = revealedCells(level, progress);
  return {
    levelId: level.id,
    title: level.title,
    grid: level.grid,
    tiles: level.tiles,
    cells: solutionCells(level).map((cell) => ({
      id: cell.id,
      row: cell.row,
      column: cell.column,
      wordIds: cell.wordIds,
      status: visible.has(cell.id) ? 'revealed' : 'locked',
      letter: visible.has(cell.id) ? cell.letter : null,
    })),
    coins: state.coins,
    foundWords: progress.solvedWordIds.length,
    totalWords: level.words.length,
    bonusCount: progress.bonusWords.length,
    hintsUsed: progress.hintsUsed,
    completed: progress.completed,
    nextLevelId: progress.completed ? nextLevelId(pack, level.id) : null,
    canUseCellHint:
      !progress.completed &&
      level.hints.allowCell &&
      state.coins >= economy.cellHintCost,
    canUseWordHint:
      !progress.completed &&
      level.hints.allowWord &&
      state.coins >= economy.wordHintCost,
    cellHintCost: economy.cellHintCost,
    wordHintCost: economy.wordHintCost,
  };
}
export function selectLevels(state: GameState, pack: LevelPack) {
  return pack.levels.map((level, index) => ({
    id: level.id,
    chapterId: level.chapterId,
    title: level.title,
    number: index + 1,
    unlocked: isUnlocked(state, pack, level.id),
    completed: state.progress[level.id]?.completed ?? false,
  }));
}
export function selectChapters(state: GameState, pack: LevelPack) {
  const levels = selectLevels(state, pack);
  return pack.chapters.map((chapter) => ({
    ...chapter,
    unlocked: levels.some(
      (level) => level.chapterId === chapter.id && level.unlocked,
    ),
    completedLevels: levels.filter(
      (level) => level.chapterId === chapter.id && level.completed,
    ).length,
    totalLevels: levels.filter((level) => level.chapterId === chapter.id)
      .length,
  }));
}
