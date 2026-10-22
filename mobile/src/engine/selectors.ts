import type {
  Economy,
  GameState,
  GameplayView,
  LevelPack,
} from '../models/types';
import {
  DEFAULT_ECONOMY,
  emptyProgress,
  nextLevelId,
  revealedCells,
} from './game';
import { solutionCells } from './grid';
import { BONUS_GOAL, freeCellHints } from './bonusRewards';
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
    bonusMeter: state.bonusRewards.totalFound % BONUS_GOAL,
    freeCellHints: freeCellHints(state),
    hintsUsed: progress.hintsUsed,
    completed: progress.completed,
    nextLevelId: progress.completed ? nextLevelId(pack, level.id) : null,
    canUseCellHint:
      !progress.completed &&
      level.hints.allowCell &&
      (freeCellHints(state) > 0 || state.coins >= economy.cellHintCost),
    canUseWordHint:
      !progress.completed &&
      level.hints.allowWord &&
      state.coins >= economy.wordHintCost,
    canGetCoinsForCellHint:
      !progress.completed &&
      level.hints.allowCell &&
      freeCellHints(state) === 0 &&
      state.coins < economy.cellHintCost,
    canGetCoinsForWordHint:
      !progress.completed &&
      level.hints.allowWord &&
      state.coins < economy.wordHintCost,
    cellHintCost: freeCellHints(state) > 0 ? 0 : economy.cellHintCost,
    wordHintCost: economy.wordHintCost,
  };
}
export function selectLevels(state: GameState, pack: LevelPack) {
  // Unlocking depends on the completed prefix, not a fresh scan for every row.
  let unlocked = true;
  return pack.levels.map((level, index) => {
    const completed = state.progress[level.id]?.completed ?? false;
    const row = {
      id: level.id,
      chapterId: level.chapterId,
      title: level.title,
      number: index + 1,
      unlocked,
      completed,
    };
    unlocked = unlocked && completed;
    return row;
  });
}
export function selectChapters(state: GameState, pack: LevelPack) {
  const totals = new Map<
    string,
    { unlocked: boolean; completedLevels: number; totalLevels: number }
  >();
  for (const level of selectLevels(state, pack)) {
    const total = totals.get(level.chapterId) ?? {
      unlocked: false,
      completedLevels: 0,
      totalLevels: 0,
    };
    total.unlocked ||= level.unlocked;
    total.completedLevels += Number(level.completed);
    total.totalLevels++;
    totals.set(level.chapterId, total);
  }
  return pack.chapters.map((chapter) => ({
    ...chapter,
    ...(totals.get(chapter.id) ?? {
      unlocked: false,
      completedLevels: 0,
      totalLevels: 0,
    }),
  }));
}
