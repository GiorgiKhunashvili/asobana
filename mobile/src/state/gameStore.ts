import { useStore } from 'zustand';
import { catalog } from '../content/catalog';
import { openGameRepository } from '../storage/native';
import { createGameStore, type GameStoreState } from './createGameStore';
export const gameStore = createGameStore(catalog, openGameRepository);
export function useGameStore<T>(selector: (state: GameStoreState) => T): T {
  return useStore(gameStore, selector);
}
