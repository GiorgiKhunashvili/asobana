import { catalog } from '../content/catalog';
import { selectLevels } from '../engine/selectors';
import type { GameState } from '../models/types';
import { levelTone } from '../theme';

/**
 * The level the player continues with. Opening a finished level to look back
 * moves the engine's current level there, so "continue" cannot simply follow
 * it: it stays where the player is only while that level is unfinished, and
 * otherwise falls back to the first open unfinished level. Null when all done.
 */
export function nextUnfinished(game: GameState) {
  const levels = selectLevels(game, catalog);
  return (
    levels.find(
      (level) =>
        level.id === game.currentLevelId && level.unlocked && !level.completed,
    ) ??
    levels.find((level) => level.unlocked && !level.completed) ??
    null
  );
}

/** Background for screens that are about the player's progress, not one level. */
export function progressTone(game: GameState) {
  return levelTone(nextUnfinished(game)?.id ?? game.currentLevelId);
}
