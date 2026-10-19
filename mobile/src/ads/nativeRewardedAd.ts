import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Platform } from 'react-native';
import {
  AdsUnavailableError,
  type AdCallbacks,
  type RewardedAdHandle,
} from './createRewardedAds';

let initialization: Promise<unknown> | undefined;

/** Demo-only adapter. No production ad unit, targeting data, tracking prompt or
 * mediation is configured. Live ads require a separate consent/account setup. */
export async function createNativeRewardedAd(
  callbacks: AdCallbacks,
): Promise<RewardedAdHandle> {
  if (
    Constants.executionEnvironment === ExecutionEnvironment.StoreClient ||
    !['ios', 'android'].includes(Platform.OS)
  )
    throw new AdsUnavailableError('A native development build is required');
  // Do not evaluate a native-module import in Expo Go (it would crash at startup).
  const sdk = await import('react-native-google-mobile-ads');
  initialization ??= (async () => {
    await sdk.default().setRequestConfiguration({
      maxAdContentRating: sdk.MaxAdContentRating.G,
    });
    return sdk.default().initialize();
  })().catch((error: unknown) => {
    initialization = undefined;
    throw error;
  });
  await initialization;
  const ad = sdk.RewardedAd.createForAdRequest(sdk.TestIds.REWARDED, {
    requestNonPersonalizedAdsOnly: true,
  });
  const off = [
    ad.addAdEventListener(sdk.RewardedAdEventType.LOADED, callbacks.loaded),
    ad.addAdEventListener(
      sdk.RewardedAdEventType.EARNED_REWARD,
      callbacks.earned,
    ),
    ad.addAdEventListener(sdk.AdEventType.CLOSED, callbacks.closed),
    ad.addAdEventListener(sdk.AdEventType.ERROR, callbacks.failed),
  ];
  return {
    load: () => ad.load(),
    show: () => ad.show(),
    dispose: () => {
      off.forEach((unsubscribe) => unsubscribe());
      ad.destroy();
    },
  };
}
