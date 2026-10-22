import { act, renderHook } from '@testing-library/react-native';
import { useIsFocused, useNavigation } from 'expo-router';
import { AppState, type AppStateStatus } from 'react-native';
import { levelRewardAds } from '../src/ads/levelRewardAds';
import { rewardedAds } from '../src/ads/rewardedAds';
import { useHintRewardedAd } from '../src/ads/useHintRewardedAd';
import { useLevelRewardAd } from '../src/ads/useLevelRewardAd';

jest.mock('expo-router', () => ({
  useIsFocused: jest.fn(() => true),
  useNavigation: jest.fn(),
}));
jest.mock('../src/ads/rewardedAds', () => ({
  rewardedAds: {
    load: jest.fn().mockResolvedValue(undefined),
    watch: jest.fn().mockResolvedValue(undefined),
  },
  useRewardedAd: () => ({ status: 'idle' }),
}));
jest.mock('../src/ads/levelRewardAds', () => ({
  levelRewardAds: {
    load: jest.fn().mockResolvedValue(undefined),
    watch: jest.fn().mockResolvedValue(undefined),
  },
  useLevelRewardAdSnapshot: () => ({ status: 'idle' }),
}));

type Transition = { data: { closing: boolean } };
let events: Map<string, Set<(event: Transition) => void>>;
let appListeners: Set<(state: AppStateStatus) => void>;
const emit = (name: string, closing = false) =>
  act(() => events.get(name)?.forEach((fn) => fn({ data: { closing } })));
const advance = (ms: number) => act(() => jest.advanceTimersByTime(ms));
const appState = (state: AppStateStatus) =>
  act(() => {
    AppState.currentState = state;
    appListeners.forEach((fn) => fn(state));
  });
const originalAppState = AppState.currentState;

beforeEach(() => {
  jest.useFakeTimers();
  AppState.currentState = 'active';
  jest.mocked(useIsFocused).mockReturnValue(true);
  events = new Map();
  appListeners = new Set();
  jest.mocked(useNavigation).mockReturnValue({
    addListener: (name: string, fn: (event: Transition) => void) => {
      const listeners = events.get(name) ?? new Set();
      events.set(name, listeners);
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  } as unknown as ReturnType<typeof useNavigation>);
  jest.spyOn(AppState, 'addEventListener').mockImplementation((_, fn) => {
    appListeners.add(fn);
    return { remove: () => appListeners.delete(fn) };
  });
});
afterEach(() => {
  jest.useRealTimers();
  jest.restoreAllMocks();
  AppState.currentState = originalAppState;
});

// Exercise both actual hooks, including their explicit-watch/cancellation paths.
describe.each([
  ['hint', useHintRewardedAd, rewardedAds, 600],
  ['victory', useLevelRewardAd, levelRewardAds, 2200],
] as const)('%s preload', (_, useAd, ads, delay) => {
  test('waits for entry, including a long transition, and never presents', () => {
    renderHook(() => useAd(true, 'ka-002'));
    expect(ads.load).not.toHaveBeenCalled();
    emit('transitionStart');
    advance(5000);
    expect(ads.load).not.toHaveBeenCalled();
    emit('transitionEnd');
    advance(delay - 1);
    expect(ads.load).not.toHaveBeenCalled();
    advance(1);
    expect(ads.load).toHaveBeenCalledTimes(1);
    appState('background');
    appState('active');
    advance(5000);
    expect(ads.load).toHaveBeenCalledTimes(1);
    expect(ads.watch).not.toHaveBeenCalled();
  });

  test('also loads on an initial route with no transition event', () => {
    renderHook(() => useAd(true, 'ka-002'));
    advance(delay);
    expect(ads.load).toHaveBeenCalledTimes(1);
  });

  test('cancels on blur, level change, loss of eligibility and unmount', () => {
    const { rerender, unmount } = renderHook(
      ({ eligible, id }: { eligible: boolean; id: string }) =>
        useAd(eligible, id),
      { initialProps: { eligible: true, id: 'ka-002' } },
    );
    advance(delay - 1);
    jest.mocked(useIsFocused).mockReturnValue(false);
    rerender({ eligible: true, id: 'ka-002' });
    advance(5000);
    expect(ads.load).not.toHaveBeenCalled();
    jest.mocked(useIsFocused).mockReturnValue(true);
    rerender({ eligible: true, id: 'ka-002' });
    advance(delay - 1);
    rerender({ eligible: true, id: 'ka-003' });
    advance(delay - 1);
    expect(ads.load).not.toHaveBeenCalled();
    rerender({ eligible: false, id: 'ka-003' });
    advance(5000);
    expect(ads.load).not.toHaveBeenCalled();
    rerender({ eligible: true, id: 'ka-003' });
    unmount();
    advance(5000);
    expect(ads.load).not.toHaveBeenCalled();
    expect(appListeners.size).toBe(0);
    expect([...events.values()].every((set) => set.size === 0)).toBe(true);
  });

  test('waits again after foregrounding and does not load while closing', () => {
    renderHook(() => useAd(true, 'ka-002'));
    advance(delay - 1);
    appState('background');
    advance(5000);
    expect(ads.load).not.toHaveBeenCalled();
    appState('active');
    advance(delay - 1);
    expect(ads.load).not.toHaveBeenCalled();
    emit('transitionStart', true);
    emit('transitionEnd', true);
    advance(5000);
    expect(ads.load).not.toHaveBeenCalled();
  });

  test('can preload after resuming an initially inactive screen', () => {
    AppState.currentState = 'background';
    renderHook(() => useAd(true, 'ka-002'));
    advance(5000);
    expect(ads.load).not.toHaveBeenCalled();
    appState('active');
    advance(delay - 1);
    expect(ads.load).not.toHaveBeenCalled();
    advance(1);
    expect(ads.load).toHaveBeenCalledTimes(1);
  });

  test('a cancelled back gesture permits preload after settling again', () => {
    renderHook(() => useAd(true, 'ka-002'));
    emit('transitionStart', true);
    advance(5000);
    expect(ads.load).not.toHaveBeenCalled();
    emit('transitionEnd', false);
    advance(delay);
    expect(ads.load).toHaveBeenCalledTimes(1);
  });

  test('an early watch press is immediate and suppresses the queued preload', async () => {
    const { result } = renderHook(() => useAd(true, 'ka-002'));
    await act(() => result.current.watch());
    expect(ads.watch).toHaveBeenCalledTimes(1);
    emit('transitionEnd');
    appState('background');
    appState('active');
    advance(5000);
    expect(ads.load).not.toHaveBeenCalled();
  });
});
