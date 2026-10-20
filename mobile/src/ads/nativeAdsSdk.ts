import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Platform } from 'react-native';
import { AdsUnavailableError } from './createRewardedAds';

type AdsSdk = typeof import('react-native-google-mobile-ads');
let initialization: Promise<AdsSdk> | undefined;

/** Shared by demo banners and rewarded ads; never import native code in Expo Go. */
export function loadNativeAdsSdk(): Promise<AdsSdk> {
  if (
    Constants.executionEnvironment === ExecutionEnvironment.StoreClient ||
    !['ios', 'android'].includes(Platform.OS)
  )
    return Promise.reject(
      new AdsUnavailableError('A native build is required'),
    );
  initialization ??= (async () => {
    const sdk = await import('react-native-google-mobile-ads');
    await sdk.default().setRequestConfiguration({
      maxAdContentRating: sdk.MaxAdContentRating.G,
    });
    await sdk.default().initialize();
    return sdk;
  })().catch((error: unknown) => {
    initialization = undefined;
    throw error;
  });
  return initialization;
}
