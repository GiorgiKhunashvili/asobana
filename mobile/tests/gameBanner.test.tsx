import { act, fireEvent, render } from '@testing-library/react-native';
import { useIsFocused } from 'expo-router';
import { AppState, View, type AppStateStatus } from 'react-native';
import { loadNativeAdsSdk } from '../src/ads/nativeAdsSdk';
import { GameBannerAd } from '../src/components/GameBannerAd';

jest.mock('expo-router', () => ({ useIsFocused: jest.fn(() => true) }));
jest.mock('../src/ads/nativeAdsSdk', () => ({ loadNativeAdsSdk: jest.fn() }));

const sdk = {
  BannerAd: (props: object) => <View testID="native-banner" {...props} />,
  TestIds: { BANNER: 'google-demo-banner' },
  BannerAdSize: { BANNER: 'BANNER' },
} as unknown as Awaited<ReturnType<typeof loadNativeAdsSdk>>;
let changeState: (state: AppStateStatus) => void;

beforeEach(() => {
  jest.mocked(useIsFocused).mockReturnValue(true);
  jest.mocked(loadNativeAdsSdk).mockResolvedValue(sdk);
  AppState.currentState = 'active';
  jest.spyOn(AppState, 'addEventListener').mockImplementation((_, handler) => {
    changeState = handler;
    return { remove: jest.fn() };
  });
});
afterEach(() => jest.restoreAllMocks());

test('reserves the same footer through loading, success and failure; uses only demo ads', async () => {
  const screen = render(<GameBannerAd />);
  const footerStyle = screen.getByTestId('game-banner-slot').props.style;
  await act(async () => {});
  const banner = screen.getByTestId('native-banner');
  expect(banner.props.unitId).toBe('google-demo-banner');
  expect(banner.props.size).toBe('BANNER');
  expect(banner.props.requestOptions.requestNonPersonalizedAdsOnly).toBe(true);
  fireEvent(banner, 'adLoaded', { width: 320, height: 50 });
  expect(screen.queryByText('რეკლამა იტვირთება…')).toBeNull();
  expect(screen.getByTestId('game-banner-slot').props.style).toEqual(
    footerStyle,
  );
  fireEvent(banner, 'adFailedToLoad', new Error('offline'));
  expect(screen.getByText('რეკლამა ვერ ჩაიტვირთა')).toBeTruthy();
  expect(screen.getByTestId('game-banner-slot').props.style).toEqual(
    footerStyle,
  );
});

test('unmounts ads behind other screens, coach marks and the app background', async () => {
  const screen = render(<GameBannerAd />);
  await act(async () => {});
  expect(screen.getByTestId('native-banner')).toBeTruthy();
  act(() => changeState('background'));
  expect(screen.queryByTestId('native-banner')).toBeNull();
  await act(async () => changeState('active'));
  expect(screen.getByTestId('native-banner')).toBeTruthy();
  jest.mocked(useIsFocused).mockReturnValue(false);
  screen.rerender(<GameBannerAd />);
  expect(screen.queryByTestId('native-banner')).toBeNull();
  jest.mocked(useIsFocused).mockReturnValue(true);
  screen.rerender(<GameBannerAd visible={false} />);
  expect(screen.queryByTestId('native-banner')).toBeNull();
  expect(screen.getByTestId('game-banner-slot')).toBeTruthy();
});

test('unsupported builds and SDK failures keep a noninteractive fallback', async () => {
  jest.mocked(loadNativeAdsSdk).mockRejectedValue(new Error('unavailable'));
  const screen = render(<GameBannerAd />);
  await act(async () => {});
  expect(screen.getByText('რეკლამა ვერ ჩაიტვირთა')).toBeTruthy();
  expect(screen.queryByTestId('native-banner')).toBeNull();
});
