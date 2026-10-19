import { createStore } from 'zustand/vanilla';
import type {
  GameCommand,
  GameEvent,
  GameState,
  LevelPack,
  Transition,
} from '../models/types';
import { initialState, transition } from '../engine/game';
import type { GameRepository } from '../storage/repository';
export interface EventBatch {
  readonly sequence: number;
  readonly events: readonly GameEvent[];
}
export interface GameStoreState {
  readonly status: 'loading' | 'ready' | 'error';
  readonly game: GameState | null;
  readonly busy: boolean;
  readonly error: string | null;
  readonly eventBatch: EventBatch;
  initialize(): Promise<void>;
  dispatch(command: GameCommand): Promise<void>;
  /** Called only for the ad SDK's earned-reward callback; SQLite deduplicates it. */
  claimAdReward(claimId: string): Promise<void>;
  /** The victory screen's ad: pays a finished level's reward once more, once. */
  claimLevelDouble(levelId: string, claimId: string): Promise<void>;
  /** Start over at the first level with starting coins; sound/haptics settings stay. */
  reset(): Promise<void>;
  clearError(): void;
}
export function createGameStore(
  pack: LevelPack,
  getRepository: () => Promise<GameRepository>,
) {
  let repository: GameRepository | null = null;
  let revision = 0;
  let sequence = 0;
  let initialization: Promise<void> | null = null;
  let queue: Promise<void> = Promise.resolve();
  let pending = 0;
  const store = createStore<GameStoreState>((set, get) => {
    /** Every write is queued, committed to SQLite, and only then published. */
    function enqueue(action: () => Promise<void>): Promise<void> {
      if (get().status !== 'ready')
        return Promise.reject(new Error('Game is not ready'));
      pending++;
      set({ busy: true });
      const work = queue.then(async () => {
        try {
          await action();
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : String(error),
          });
          throw error;
        } finally {
          pending--;
          set({ busy: pending > 0 });
        }
      });
      // Rejections reach the caller but never poison the queue for later commands.
      queue = work.catch(() => undefined);
      return work;
    }
    function commit(apply: (game: GameState) => Transition): Promise<void> {
      return enqueue(async () => {
        const game = get().game;
        if (!repository || !game) throw new Error('Game is not ready');
        const result = apply(game);
        if (result.state !== game)
          revision = await repository.save(result.state, revision);
        sequence++;
        set({
          game: result.state,
          error: null,
          eventBatch: { sequence, events: result.events },
        });
      });
    }
    return {
      status: 'loading',
      game: null,
      busy: false,
      error: null,
      eventBatch: { sequence: 0, events: [] },
      initialize() {
        if (get().status === 'ready') return Promise.resolve();
        if (initialization) return initialization;
        set({ status: 'loading', error: null });
        initialization = (async () => {
          try {
            repository = await getRepository();
            const saved = await repository.load();
            const game = saved?.state ?? initialState(pack);
            revision = saved?.revision ?? (await repository.save(game, 0));
            set({ game, status: 'ready' });
          } catch (error) {
            repository = null;
            set({
              status: 'error',
              error: error instanceof Error ? error.message : String(error),
            });
          } finally {
            initialization = null;
          }
        })();
        return initialization;
      },
      dispatch(command) {
        return commit((game) => transition(game, command, pack));
      },
      claimAdReward(claimId) {
        return enqueue(async () => {
          if (!repository) throw new Error('Game is not ready');
          const saved = await repository.claimAdReward(claimId);
          revision = saved.revision;
          // No success UI or balance is published before the transaction commits.
          set({ game: saved.state, error: null });
        });
      },
      claimLevelDouble(levelId, claimId) {
        return enqueue(async () => {
          if (!repository) throw new Error('Game is not ready');
          const saved = await repository.claimLevelDouble(levelId, claimId);
          revision = saved.revision;
          set({ game: saved.state, error: null });
        });
      },
      reset() {
        return commit((game) => ({
          state: { ...initialState(pack), settings: game.settings },
          events: [],
        }));
      },
      clearError() {
        set({ error: null });
      },
    };
  });
  return store;
}
