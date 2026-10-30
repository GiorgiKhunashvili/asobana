export type RewardedStatus =
  | 'idle'
  | 'loading'
  | 'ready'
  | 'showing'
  | 'saving'
  | 'rewarded'
  | 'closed'
  | 'error'
  | 'save-error'
  | 'unavailable';
export interface RewardedSnapshot<Target = void> {
  readonly status: RewardedStatus;
  /** What the presented ad pays for (e.g. a level to double); unset before a press. */
  readonly target?: Target;
}
export interface AdCallbacks {
  loaded(): void;
  earned(): void;
  closed(): void;
  failed(error?: unknown): void;
}
export interface RewardedAdHandle {
  load(): void;
  show(): Promise<void>;
  dispose(): void;
}
/** This build cannot show ads (Expo Go, web), so retrying cannot help. */
export class AdsUnavailableError extends Error {}
/** Consent does not allow ad requests right now, which can change: unlike
 * AdsUnavailableError, this leaves the ad free to try again. */
export class AdsNotAllowedError extends Error {
  readonly code = 'consent-blocked';
}
/** Google's loaded ads expire after an hour; refresh before reaching that limit. */
const MAX_AD_AGE_MS = 55 * 60_000;
interface Dependencies<Target> {
  createAd(callbacks: AdCallbacks): Promise<RewardedAdHandle>;
  createClaimId(): string;
  claimReward(id: string, target: Target): Promise<void>;
  reportFailure?(error: unknown): void;
  now?: () => number;
}
interface Session<Target> {
  id: string;
  /** Bound when the ad is presented, so a retried save pays for the same thing. */
  target?: Target;
  ad?: RewardedAdHandle;
  presented: boolean;
  earned: boolean;
  saved: boolean;
  closed: boolean;
  saving: boolean;
  loadedAt: number;
}

/** One controller per reward kind (coins, level doubling). It outlives screen
 * unmounts and keeps a failed earned claim available for retry with the SAME id
 * and target, without another ad. */
export function createRewardedAds<Target = void>(deps: Dependencies<Target>) {
  let snapshot: RewardedSnapshot<Target> = { status: 'idle' };
  let session: Session<Target> | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const listeners = new Set<() => void>();
  let watchRequest: object | undefined;
  const now = deps.now ?? Date.now;
  const update = (status: RewardedStatus) => {
    snapshot =
      session?.presented && session.target !== undefined
        ? { status, target: session.target }
        : { status };
    listeners.forEach((listener) => listener());
  };
  const clearTimer = () => {
    clearTimeout(timer);
    timer = undefined;
  };
  const disposeAd = (s: Session<Target>) => {
    s.ad?.dispose();
    delete s.ad;
  };
  const finish = (s: Session<Target>) => {
    if (session !== s || !s.closed) return;
    disposeAd(s);
    if (s.earned)
      update(s.saved ? 'rewarded' : s.saving ? 'saving' : 'save-error');
    else update('closed');
  };
  const save = async (s: Session<Target>) => {
    if (session !== s || !s.earned || s.saved || s.saving) return;
    s.saving = true;
    update('saving');
    try {
      await deps.claimReward(s.id, s.target as Target);
      s.saved = true;
    } catch {
      // SQLite rolls back both the balance and the receipt on failure.
    } finally {
      s.saving = false;
      if (session === s) {
        if (s.closed) finish(s);
        else update(s.saved ? 'showing' : 'save-error');
      }
    }
  };
  const expired = (s: Session<Target>) => now() - s.loadedAt >= MAX_AD_AGE_MS;
  /** `reason` marks a real failure to report; retiring an old ad has none. */
  const fail = (s: Session<Target>, reason?: unknown) => {
    if (session !== s) return;
    if (reason !== undefined && !s.closed) deps.reportFailure?.(reason);
    clearTimer();
    s.closed = true;
    disposeAd(s);
    if (s.earned) finish(s);
    else update('error');
  };
  const load = async () => {
    if (snapshot.status === 'ready' && session && expired(session))
      fail(session);
    if (
      [
        'loading',
        'ready',
        'showing',
        'saving',
        'save-error',
        'unavailable',
      ].includes(snapshot.status)
    )
      return;
    if (session) disposeAd(session);
    clearTimer();
    const s: Session<Target> = {
      id: '',
      presented: false,
      earned: false,
      saved: false,
      closed: false,
      saving: false,
      loadedAt: 0,
    };
    session = s;
    update('loading');
    try {
      s.id = deps.createClaimId();
      const ad = await deps.createAd({
        loaded() {
          if (session !== s || s.closed || snapshot.status !== 'loading')
            return;
          clearTimer();
          s.loadedAt = now();
          update('ready');
        },
        earned() {
          if (session !== s || !s.presented || s.closed || s.earned) return;
          s.earned = true;
          void save(s);
        },
        closed() {
          if (session !== s || !s.presented) return;
          s.closed = true;
          finish(s);
        },
        failed(error) {
          fail(s, error ?? 'unknown');
        },
      });
      if (session !== s || s.closed) {
        ad.dispose();
        return;
      }
      s.ad = ad;
      // Only the request is timed: consent takes as long as the player needs.
      timer = setTimeout(() => fail(s, 'timeout'), 45_000);
      ad.load();
    } catch (error) {
      if (session !== s || s.closed) return;
      fail(s);
      if (error instanceof AdsUnavailableError) update('unavailable');
    }
  };
  const show = async (target: Target) => {
    const s = session;
    if (!s?.ad || snapshot.status !== 'ready') return;
    if (expired(s)) {
      fail(s);
      return;
    }
    s.target = target;
    s.presented = true;
    update('showing'); // Synchronous guard against repeated presses.
    try {
      await s.ad.show();
    } catch (error) {
      fail(s, error);
    }
  };
  /** One explicit press may wait for a preload, then present on this screen.
   * Cancelling/navigation cancels the intent, not an already-earned reward. */
  const watch = async (signal: AbortSignal, target: Target) => {
    if (
      signal.aborted ||
      watchRequest ||
      ['showing', 'saving', 'save-error', 'unavailable'].includes(
        snapshot.status,
      )
    )
      return;
    const request = {};
    watchRequest = request;
    try {
      if (snapshot.status === 'ready' && session && expired(session))
        fail(session);
      if (!['ready', 'loading'].includes(snapshot.status)) void load();
      if (snapshot.status === 'loading') {
        await new Promise<void>((resolve) => {
          const done = () => {
            listeners.delete(changed);
            signal.removeEventListener('abort', done);
            resolve();
          };
          const changed = () => {
            if (snapshot.status !== 'loading') done();
          };
          listeners.add(changed);
          signal.addEventListener('abort', done, { once: true });
          if (signal.aborted) done();
          else changed();
        });
      }
      if (!signal.aborted) await show(target);
    } finally {
      if (watchRequest === request) watchRequest = undefined;
    }
  };
  return {
    getSnapshot: () => snapshot,
    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    load,
    show,
    watch,
    retryReward: async () => {
      if (session) await save(session);
    },
  };
}
