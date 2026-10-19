import {
  AdsUnavailableError,
  createRewardedAds,
  type AdCallbacks,
} from '../src/ads/createRewardedAds';

function setup(
  claimReward = jest.fn<Promise<void>, [string]>().mockResolvedValue(undefined),
) {
  const callbacks: AdCallbacks[] = [];
  const handles: { load: jest.Mock; show: jest.Mock; dispose: jest.Mock }[] =
    [];
  const createAd = jest.fn(async (events: AdCallbacks) => {
    callbacks.push(events);
    const handle = {
      load: jest.fn(),
      show: jest.fn().mockResolvedValue(undefined),
      dispose: jest.fn(),
    };
    handles.push(handle);
    return handle;
  });
  let id = 0;
  const ads = createRewardedAds({
    createAd,
    createClaimId: () => `claim-${++id}`,
    claimReward,
  });
  return { ads, callbacks, handles, createAd, claimReward };
}
const flush = async () => {
  await Promise.resolve();
  await Promise.resolve();
};

beforeEach(() => jest.useFakeTimers());
afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});

test('loading never shows an ad; repeated presses and callbacks earn only one saved reward', async () => {
  let resolve!: () => void;
  const claim = jest.fn<Promise<void>, [string]>(
    () =>
      new Promise<void>((done) => {
        resolve = done;
      }),
  );
  const { ads, callbacks, handles, createAd } = setup(claim);
  await Promise.all([ads.load(), ads.load()]);
  expect(createAd).toHaveBeenCalledTimes(1);
  expect(handles[0]!.show).not.toHaveBeenCalled();
  callbacks[0]!.earned(); // An event before presenting cannot grant coins.
  expect(claim).not.toHaveBeenCalled();
  callbacks[0]!.loaded();
  await Promise.all([ads.show(), ads.show()]);
  expect(handles[0]!.show).toHaveBeenCalledTimes(1);
  callbacks[0]!.earned();
  callbacks[0]!.earned();
  callbacks[0]!.closed();
  expect(ads.getSnapshot().status).toBe('saving');
  expect(claim).toHaveBeenCalledTimes(1);
  expect(claim).toHaveBeenCalledWith('claim-1', undefined); // Coins: no target.
  await ads.load();
  expect(createAd).toHaveBeenCalledTimes(1);
  resolve();
  await flush();
  expect(ads.getSnapshot().status).toBe('rewarded');
  await ads.load();
  callbacks[1]!.loaded();
  await ads.show();
  callbacks[0]!.earned(); // Late event from the retired ad cannot fund the new ad.
  expect(claim).toHaveBeenCalledTimes(1);
  callbacks[1]!.closed();
  expect(ads.getSnapshot().status).toBe('closed');
});

test('closing early, failed loading, and failed showing never reward', async () => {
  const { ads, callbacks, handles, claimReward } = setup();
  await ads.load();
  callbacks[0]!.loaded();
  await ads.show();
  callbacks[0]!.closed();
  expect(ads.getSnapshot().status).toBe('closed');
  await ads.load();
  callbacks[1]!.failed();
  expect(ads.getSnapshot().status).toBe('error');
  await ads.load();
  callbacks[2]!.loaded();
  handles[2]!.show.mockRejectedValueOnce(new Error('Not in foreground'));
  await ads.show();
  expect(ads.getSnapshot().status).toBe('error');
  expect(claimReward).not.toHaveBeenCalled();
});

test('a failed save retries the same earned claim without another ad, including after unsubscribe', async () => {
  const claim = jest
    .fn<Promise<void>, [string]>()
    .mockRejectedValueOnce(new Error('Disk full'))
    .mockResolvedValue(undefined);
  const { ads, callbacks, handles, createAd } = setup(claim);
  const unsubscribe = ads.subscribe(jest.fn());
  await ads.load();
  callbacks[0]!.loaded();
  await ads.show();
  unsubscribe(); // Navigating away does not destroy the reward callback.
  callbacks[0]!.earned();
  callbacks[0]!.closed();
  await flush();
  expect(ads.getSnapshot().status).toBe('save-error');
  await ads.load();
  expect(createAd).toHaveBeenCalledTimes(1);
  await ads.retryReward();
  expect(claim.mock.calls).toEqual([['claim-1'], ['claim-1']]);
  expect(handles[0]!.show).toHaveBeenCalledTimes(1);
  expect(ads.getSnapshot().status).toBe('rewarded');
  await ads.retryReward();
  expect(claim).toHaveBeenCalledTimes(2);
});

test('an SDK error after earning does not discard the pending reward', async () => {
  const { ads, callbacks, claimReward } = setup();
  await ads.load();
  callbacks[0]!.loaded();
  await ads.show();
  callbacks[0]!.earned();
  callbacks[0]!.failed();
  await flush();
  expect(claimReward).toHaveBeenCalledTimes(1);
  expect(ads.getSnapshot().status).toBe('rewarded');
});

test('load timeout and unsupported builds do not block the game or grant coins', async () => {
  const { ads, callbacks, handles, claimReward } = setup();
  await ads.load();
  jest.advanceTimersByTime(45_000);
  expect(ads.getSnapshot().status).toBe('error');
  expect(handles[0]!.dispose).toHaveBeenCalledTimes(1);
  callbacks[0]!.loaded();
  expect(ads.getSnapshot().status).toBe('error');
  const unsupported = createRewardedAds({
    createAd: async () => {
      throw new AdsUnavailableError('Expo Go');
    },
    createClaimId: () => 'unsupported',
    claimReward,
  });
  await unsupported.load();
  expect(unsupported.getSnapshot().status).toBe('unavailable');
  expect(claimReward).not.toHaveBeenCalled();
});

test('an expired loaded ad is discarded before showing', async () => {
  const { ads, callbacks, handles, claimReward } = setup();
  await ads.load();
  callbacks[0]!.loaded();
  jest.advanceTimersByTime(55 * 60_000);
  await ads.show();
  expect(handles[0]!.show).not.toHaveBeenCalled();
  expect(ads.getSnapshot().status).toBe('error');
  expect(claimReward).not.toHaveBeenCalled();
});

test('one watch press waits for a preload and repeated presses present only once', async () => {
  const { ads, callbacks, handles } = setup();
  await ads.load();
  const first = ads.watch(new AbortController().signal);
  const second = ads.watch(new AbortController().signal);
  expect(handles[0]!.show).not.toHaveBeenCalled();
  callbacks[0]!.loaded();
  await Promise.all([first, second]);
  expect(handles[0]!.show).toHaveBeenCalledTimes(1);
  callbacks[0]!.closed();
});

test('cancelling a pending watch never presents later and keeps the preload reusable', async () => {
  const { ads, callbacks, handles } = setup();
  const controller = new AbortController();
  const watching = ads.watch(controller.signal);
  await flush();
  controller.abort();
  await watching;
  callbacks[0]!.loaded();
  await flush();
  expect(handles[0]!.show).not.toHaveBeenCalled();
  expect(ads.getSnapshot().status).toBe('ready');
  await ads.watch(new AbortController().signal);
  expect(handles[0]!.show).toHaveBeenCalledTimes(1);
  callbacks[0]!.closed();
});

test('a failed or timed-out watch requires a new press and never grants a reward', async () => {
  const { ads, callbacks, handles, claimReward } = setup();
  const watching = ads.watch(new AbortController().signal);
  await flush();
  callbacks[0]!.failed();
  await watching;
  expect(handles[0]!.show).not.toHaveBeenCalled();
  const retry = ads.watch(new AbortController().signal);
  await flush();
  jest.advanceTimersByTime(45_000);
  await retry;
  callbacks[1]!.loaded();
  expect(handles[1]!.show).not.toHaveBeenCalled();
  expect(claimReward).not.toHaveBeenCalled();
});

test('watch refreshes an expired ad and presents its replacement after the same press', async () => {
  const { ads, callbacks, handles } = setup();
  await ads.load();
  callbacks[0]!.loaded();
  jest.advanceTimersByTime(55 * 60_000);
  const watching = ads.watch(new AbortController().signal);
  await flush();
  callbacks[1]!.loaded();
  await watching;
  expect(handles[0]!.show).not.toHaveBeenCalled();
  expect(handles[1]!.show).toHaveBeenCalledTimes(1);
  callbacks[1]!.closed();
});

test('a level-doubling ad binds its level at the press and never pays without the earned event', async () => {
  const callbacks: AdCallbacks[] = [];
  const handles: { load: jest.Mock; show: jest.Mock; dispose: jest.Mock }[] =
    [];
  const claim = jest
    .fn<Promise<void>, [string, string]>()
    .mockRejectedValueOnce(new Error('Disk full'))
    .mockResolvedValue(undefined);
  let id = 0;
  const ads = createRewardedAds<string>({
    createAd: async (events) => {
      callbacks.push(events);
      const handle = {
        load: jest.fn(),
        show: jest.fn().mockResolvedValue(undefined),
        dispose: jest.fn(),
      };
      handles.push(handle);
      return handle;
    },
    createClaimId: () => `claim-${++id}`,
    claimReward: claim,
  });
  // A preload belongs to no level until a press presents it.
  await ads.load();
  callbacks[0]!.loaded();
  expect(ads.getSnapshot()).toEqual({ status: 'ready' });
  await ads.watch(new AbortController().signal, 'ka-007');
  expect(ads.getSnapshot()).toEqual({ status: 'showing', target: 'ka-007' });
  callbacks[0]!.closed(); // Closed before the reward: nothing is owed.
  expect(ads.getSnapshot()).toEqual({ status: 'closed', target: 'ka-007' });
  await ads.load();
  callbacks[1]!.loaded();
  await ads.watch(new AbortController().signal, 'ka-008');
  callbacks[1]!.earned();
  callbacks[1]!.earned();
  callbacks[1]!.closed();
  await flush();
  expect(ads.getSnapshot()).toEqual({ status: 'save-error', target: 'ka-008' });
  // A later press elsewhere cannot redirect the earned reward to another level.
  await ads.watch(new AbortController().signal, 'ka-009');
  await ads.retryReward();
  expect(claim.mock.calls).toEqual([
    ['claim-2', 'ka-008'],
    ['claim-2', 'ka-008'],
  ]);
  expect(handles[1]!.show).toHaveBeenCalledTimes(1);
  expect(ads.getSnapshot()).toEqual({ status: 'rewarded', target: 'ka-008' });
  await ads.load();
  expect(ads.getSnapshot()).toEqual({ status: 'loading' });
});
