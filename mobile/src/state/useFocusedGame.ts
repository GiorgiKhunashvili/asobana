import { useSyncExternalStore } from 'react';
import { gameStore } from './gameStore';

const noSubscription = () => () => {};
const getGame = () => gameStore.getState().game;
const getInitialGame = () => gameStore.getInitialState().game;

/** Keep a covered screen mounted without rendering every committed game update.
 * Refocusing reads the current snapshot during render, before it is displayed.
 * Unrelated parent renders may also read fresh data while covered. */
export function useFocusedGame(focused: boolean) {
  return useSyncExternalStore(
    focused ? gameStore.subscribe : noSubscription,
    getGame,
    getInitialGame,
  );
}
