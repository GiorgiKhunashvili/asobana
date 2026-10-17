import type { GameState } from '../models/types';

export const BONUS_GOAL = 10;

export function freeCellHints(state: GameState): number {
  return (
    Math.floor(state.bonusRewards.totalFound / BONUS_GOAL) -
    state.bonusRewards.hintsSpent
  );
}
