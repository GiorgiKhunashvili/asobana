import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Platform } from 'react-native';
import { reportAdFailure } from '../services/errorReporting';
import { gatherAdsConsent, showAdsPrivacyOptions } from './consent';
import { AdsNotAllowedError, AdsUnavailableError } from './createRewardedAds';

type AdsSdk = typeof import('react-native-google-mobile-ads');
let initialization: Promise<AdsSdk> | undefined;

/** Never import native code in Expo Go or on the web. */
function importNativeAdsSdk(): Promise<AdsSdk> {
  if (
    Constants.executionEnvironment === ExecutionEnvironment.StoreClient ||
    !['ios', 'android'].includes(Platform.OS)
  )
    return Promise.reject(
      new AdsUnavailableError('A native build is required'),
    );
  return import('react-native-google-mobile-ads');
}

/** Consent comes first: the SDK starts, and ads load, only once Google's
 * consent flow allows ad requests. */
export async function startAdsSdk(sdk: AdsSdk): Promise<AdsSdk> {
  if (!(await gatherAdsConsent(sdk)))
    throw new AdsNotAllowedError('Ad consent has not been given yet');
  await sdk.default().setRequestConfiguration({
    maxAdContentRating: sdk.MaxAdContentRating.G,
  });
  await sdk.default().initialize();
  return sdk;
}

/** Shared by banners and rewarded ads. A failure is not cached, so the next ad
 * tries again. */
export function loadNativeAdsSdk(): Promise<AdsSdk> {
  initialization ??= importNativeAdsSdk()
    .then(startAdsSdk)
    .catch((error: unknown) => {
      initialization = undefined;
      reportAdFailure('sdk', error);
      throw error;
    });
  return initialization;
}

/** The settings entry for changing ad consent; works even if ads never loaded. */
export async function openAdsPrivacyOptions(): Promise<void> {
  await showAdsPrivacyOptions(await importNativeAdsSdk());
}
