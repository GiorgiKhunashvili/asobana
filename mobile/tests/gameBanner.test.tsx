import { act, fireEvent, render } from '@testing-library/react-native';
import { useIsFocused } from 'expo-router';
import { useEffect } from 'react';
import { AppState, View, type AppStateStatus } from 'react-native';
import { loadNativeAdsSdk } from '../src/ads/nativeAdsSdk';
import {
  BANNER_KEEP_ALIVE_MS,
  FIRST_BANNER_DELAY_MS,
  GameBannerAd,
  SharedGameBanner,
} from '../src/components/GameBannerAd';

jest.mock('expo-router', () => ({ useIsFocused: jest.fn(() => true) }));
jest.mock('../src/ads/nativeAdsSdk', () => ({ loadNativeAdsSdk: jest.fn() }));
jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);

/** Each mount stands for a new native ad view: a new web view on Android. */
let bannerMounts = 0;
let bannerRenders = 0;
function NativeBanner(props: object) {
  bannerRenders++;
  useEffect(() => {
    bannerMounts++;
  }, []);
  return <View testID="native-banner" {...props} />;
}
const sdk = {
  BannerAd: NativeBanner,
  TestIds: { BANNER: 'google-demo-banner' },
  BannerAdSize: { BANNER: 'BANNER' },
} as unknown as Awaited<ReturnType<typeof loadNativeAdsSdk>>;
let changeState: (state: AppStateStatus) => void;
const wait = (ms: number) =>
  act(async () => {
    jest.advanceTimersByTime(ms);
  });

beforeEach(() => {
  jest.useFakeTimers();
  bannerMounts = 0;
  bannerRenders = 0;
  jest.mocked(useIsFocused).mockReturnValue(true);
  jest.mocked(loadNativeAdsSdk).mockResolvedValue(sdk);
  AppState.currentState = 'active';
  jest.spyOn(AppState, 'addEventListener').mockImplementation((_, handler) => {
    changeState = handler;
    return { remove: jest.fn() };
  });
});
afterEach(() => {
  jest.useRealTimers();
  jest.restoreAllMocks();
});

/** The root layout's shared banner with one gameplay screen's footer. */
function App({ level = 'ka-001', visible = true }) {
  return (
    <>
      <GameBannerAd key={level} visible={visible} />
      <SharedGameBanner />
    </>
  );
}

test('the footer reserves the same space; the first banner waits for the transition', async () => {
  const screen = await render(<App />);
  const footer = screen.getByTestId('game-banner-slot').props.style;
  expect(screen.queryByTestId('shared-game-banner')).toBeNull();
  await wait(FIRST_BANNER_DELAY_MS);
  const banner = screen.getByTestId('native-banner');
  expect(banner.props.unitId).toBe('google-demo-banner');
  expect(banner.props.size).toBe('BANNER');
  expect(banner.props.requestOptions.requestNonPersonalizedAdsOnly).toBe(true);
  expect(screen.getByText('რეკლამა იტვირთება…')).toBeTruthy();
  fireEvent(banner, 'adLoaded', { width: 320, height: 50 });
  expect(screen.queryByText('რეკლამა იტვირთება…')).toBeNull();
  expect(screen.getByTestId('game-banner-slot').props.style).toEqual(footer);
});

test('moving to the next level reuses the banner instead of building a new one', async () => {
  const screen = await render(<App level="ka-001" />);
  await wait(FIRST_BANNER_DELAY_MS);
  expect(bannerMounts).toBe(1);
  // The victory screen: no footer asks for the banner, so it hides but lives.
  jest.mocked(useIsFocused).mockReturnValue(false);
  await screen.rerender(<App level="ka-001" />);
  const shared = screen.getByTestId('shared-game-banner');
  expect(shared.props.pointerEvents).toBe('none');
  expect(shared.props.style).toEqual(
    expect.arrayContaining([expect.objectContaining({ opacity: 0 })]),
  );
  // The next level's screen replaces the old one; the same banner shows again.
  jest.mocked(useIsFocused).mockReturnValue(true);
  await screen.rerender(<App level="ka-002" />);
  await wait(FIRST_BANNER_DELAY_MS);
  expect(screen.getByTestId('shared-game-banner').props.pointerEvents).toBe(
    'box-none',
  );
  expect(bannerMounts).toBe(1);
});

test('coach marks and ads hide it; it unmounts in the background and after a long absence', async () => {
  const screen = await render(<App />);
  await wait(FIRST_BANNER_DELAY_MS);
  await screen.rerender(<App visible={false} />);
  expect(screen.getByTestId('shared-game-banner').props.pointerEvents).toBe(
    'none',
  );
  await screen.rerender(<App />);
  act(() => changeState('background'));
  expect(screen.queryByTestId('native-banner')).toBeNull();
  await act(async () => changeState('active'));
  expect(screen.getByTestId('native-banner')).toBeTruthy();
  jest.mocked(useIsFocused).mockReturnValue(false);
  await screen.rerender(<App />);
  await wait(BANNER_KEEP_ALIVE_MS);
  expect(screen.queryByTestId('shared-game-banner')).toBeNull();
  expect(screen.getByTestId('game-banner-slot')).toBeTruthy();
});

test('unsupported builds and SDK failures keep a noninteractive fallback', async () => {
  jest.mocked(loadNativeAdsSdk).mockRejectedValue(new Error('unavailable'));
  const screen = await render(<App />);
  await wait(FIRST_BANNER_DELAY_MS);
  expect(screen.getByText('რეკლამა ვერ ჩაიტვირთა')).toBeTruthy();
  expect(screen.queryByTestId('native-banner')).toBeNull();
});

// Ad opportunities must not be removed merely to reduce recreation costs.
test('each short foreground return mounts a fresh banner without another startup delay', async () => {
  const screen = await render(<App />);
  await wait(FIRST_BANNER_DELAY_MS);
  expect(bannerMounts).toBe(1);
  for (let returned = 1; returned <= 2; returned++) {
    act(() => changeState('background'));
    expect(screen.queryByTestId('native-banner')).toBeNull();
    await wait(5000);
    await act(async () => changeState('active'));
    // No foreground timer advance: the original request opportunity is immediate.
    expect(screen.getByTestId('native-banner')).toBeTruthy();
    expect(screen.getByTestId('shared-game-banner').props.pointerEvents).toBe(
      'box-none',
    );
    expect(bannerMounts).toBe(returned + 1);
    expect(loadNativeAdsSdk).toHaveBeenCalledTimes(returned + 1);
  }
});

test('footer visibility and unrelated root renders do not re-render the SDK banner', async () => {
  const screen = await render(<App />);
  await wait(FIRST_BANNER_DELAY_MS);
  fireEvent(screen.getByTestId('native-banner'), 'adLoaded');
  const loadedRenders = bannerRenders;
  const nativeProps = screen.getByTestId('native-banner').props;
  await screen.rerender(<App />);
  expect(bannerRenders).toBe(loadedRenders);
  await screen.rerender(<App visible={false} />);
  expect(screen.getByTestId('shared-game-banner').props.style).toEqual(
    expect.arrayContaining([expect.objectContaining({ opacity: 0 })]),
  );
  expect(bannerRenders).toBe(loadedRenders);
  await wait(BANNER_KEEP_ALIVE_MS - 1);
  await screen.rerender(<App />);
  expect(screen.getByTestId('shared-game-banner').props.style).toEqual(
    expect.arrayContaining([expect.objectContaining({ opacity: 1 })]),
  );
  expect(bannerRenders).toBe(loadedRenders);
  expect(bannerMounts).toBe(1);
  expect(loadNativeAdsSdk).toHaveBeenCalledTimes(1);
  expect(screen.getByTestId('native-banner').props).toEqual(nativeProps);
  // Events still update the wrapper, including a later SDK refresh outcome.
  fireEvent(screen.getByTestId('native-banner'), 'adFailedToLoad');
  expect(screen.getByText('რეკლამა ვერ ჩაიტვირთა')).toBeTruthy();
  fireEvent(screen.getByTestId('native-banner'), 'adLoaded');
  expect(screen.queryByText('რეკლამა ვერ ჩაიტვირთა')).toBeNull();
  expect(bannerMounts).toBe(1);
});
