import { act, renderHook } from '@testing-library/react-native';
import { adUnitId, LIVE_AD_UNITS, liveAdsEnabled } from '../src/ads/adUnits';
import {
  gatherAdsConsent,
  showAdsPrivacyOptions,
  usePrivacyOptionsRequired,
} from '../src/ads/consent';
import { AdsUnavailableError } from '../src/ads/createRewardedAds';
import { startAdsSdk } from '../src/ads/nativeAdsSdk';

const fakeSdk = {
  default: jest.fn(),
  AdsConsent: {
    gatherConsent: jest.fn(),
    getConsentInfo: jest.fn(),
    showPrivacyOptionsForm: jest.fn(),
  },
  AdsConsentPrivacyOptionsRequirementStatus: {
    UNKNOWN: 'UNKNOWN',
    REQUIRED: 'REQUIRED',
    NOT_REQUIRED: 'NOT_REQUIRED',
  },
  MaxAdContentRating: { G: 'G' },
  TestIds: { BANNER: 'demo-banner', REWARDED: 'demo-rewarded' },
};
const sdk = fakeSdk as unknown as Parameters<typeof startAdsSdk>[0];
const info = (canRequestAds: boolean, required: boolean) => ({
  canRequestAds,
  privacyOptionsRequirementStatus: required ? 'REQUIRED' : 'NOT_REQUIRED',
});

beforeEach(() => jest.resetAllMocks());

test('only opted-in store builds use the live units', () => {
  expect(liveAdsEnabled()).toBe(false); // Tests run as a development build.
  expect(liveAdsEnabled(true, true)).toBe(false);
  expect(liveAdsEnabled(false, undefined)).toBe(false);
  expect(liveAdsEnabled(false, '1')).toBe(false);
  expect(liveAdsEnabled(false, true)).toBe(true);
  expect(adUnitId(fakeSdk, 'banner', true, 'ios')).toBe(
    'ca-app-pub-8935292332039677/8167152594',
  );
  expect(adUnitId(fakeSdk, 'rewarded', true, 'ios')).toBe(
    'ca-app-pub-8935292332039677/8819345552',
  );
  expect(adUnitId(fakeSdk, 'banner', false, 'ios')).toBe('demo-banner');
  expect(adUnitId(fakeSdk, 'banner', true, 'android')).toBe(
    'ca-app-pub-8935292332039677/6993138895',
  );
  expect(adUnitId(fakeSdk, 'rewarded', true, 'android')).toBe(
    'ca-app-pub-8935292332039677/4063723227',
  );
  expect(adUnitId(fakeSdk, 'rewarded', false, 'android')).toBe('demo-rewarded');
  expect(adUnitId(fakeSdk, 'banner', true, 'web')).toBe('demo-banner');
});

test('the app ID and the production build flag match the live units', () => {
  const app = require('../app.json');
  const eas = require('../eas.json');
  const appConfig = require('../app.config.js');
  const before = process.env.ASOBANA_LIVE_ADS;
  try {
    delete process.env.ASOBANA_LIVE_ADS;
    expect(appConfig({ config: app.expo }).extra.liveAds).toBe(false);
    process.env.ASOBANA_LIVE_ADS = eas.build.production.env.ASOBANA_LIVE_ADS;
    const built = appConfig({ config: app.expo });
    expect(built.extra.liveAds).toBe(true);
    expect(built.extra.eas).toEqual(app.expo.extra.eas);
  } finally {
    if (before === undefined) delete process.env.ASOBANA_LIVE_ADS;
    else process.env.ASOBANA_LIVE_ADS = before;
  }
  const [, ads] = app.expo.plugins.find(
    (plugin: unknown) =>
      Array.isArray(plugin) && plugin[0] === 'react-native-google-mobile-ads',
  );
  const publisher = LIVE_AD_UNITS.ios!.banner.split('/')[0];
  expect(ads.iosAppId).toBe('ca-app-pub-8935292332039677~8334673550');
  expect(ads.iosAppId.split('~')[0]).toBe(publisher);
  expect(ads.androidAppId).toBe('ca-app-pub-8935292332039677~9321375605');
  expect(ads.androidAppId.split('~')[0]).toBe(publisher);
  for (const units of Object.values(LIVE_AD_UNITS))
    for (const unit of Object.values(units))
      expect(unit.split('/')[0]).toBe(publisher);
  expect(eas.build.production.env.ASOBANA_LIVE_ADS).toBe('1');
  expect(eas.build.development.env?.ASOBANA_LIVE_ADS).toBeUndefined();
  // TestFlight and Play testing builds: same as production, but demo ads only.
  expect(eas.build.beta.extends).toBe('production');
  expect(eas.build.beta.env.ASOBANA_LIVE_ADS).toBe('0');
});

test('the SDK starts only after consent allows ads', async () => {
  const ads = {
    setRequestConfiguration: jest.fn().mockResolvedValue(undefined),
    initialize: jest.fn().mockResolvedValue([]),
  };
  fakeSdk.default.mockReturnValue(ads);
  fakeSdk.AdsConsent.gatherConsent
    .mockResolvedValueOnce(info(false, true))
    .mockResolvedValueOnce(info(true, false));
  await expect(startAdsSdk(sdk)).rejects.toBeInstanceOf(AdsUnavailableError);
  expect(ads.setRequestConfiguration).not.toHaveBeenCalled();
  expect(ads.initialize).not.toHaveBeenCalled();
  await expect(startAdsSdk(sdk)).resolves.toBe(sdk);
  expect(fakeSdk.AdsConsent.gatherConsent).toHaveBeenCalledTimes(2);
  expect(ads.setRequestConfiguration).toHaveBeenCalledWith({
    maxAdContentRating: 'G',
  });
  expect(ads.initialize).toHaveBeenCalledTimes(1);
  expect(
    fakeSdk.AdsConsent.gatherConsent.mock.invocationCallOrder[1],
  ).toBeLessThan(ads.initialize.mock.invocationCallOrder[0]!);
});

test('offline, the stored choice decides; the privacy entry follows the legal requirement', async () => {
  const { result } = renderHook(() => usePrivacyOptionsRequired());
  expect(result.current).toBe(false);
  fakeSdk.AdsConsent.gatherConsent.mockRejectedValueOnce(new Error('offline'));
  fakeSdk.AdsConsent.getConsentInfo.mockResolvedValueOnce(info(true, true));
  let allowed = false;
  await act(async () => {
    allowed = await gatherAdsConsent(sdk);
  });
  expect(allowed).toBe(true);
  expect(result.current).toBe(true);
  fakeSdk.AdsConsent.showPrivacyOptionsForm.mockResolvedValueOnce(
    info(true, false),
  );
  await act(() => showAdsPrivacyOptions(sdk));
  expect(fakeSdk.AdsConsent.showPrivacyOptionsForm).toHaveBeenCalledTimes(1);
  expect(result.current).toBe(false);
});
