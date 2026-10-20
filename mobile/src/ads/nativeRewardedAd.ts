import { type AdCallbacks, type RewardedAdHandle } from './createRewardedAds';
import { loadNativeAdsSdk } from './nativeAdsSdk';

/** Demo-only adapter. No production ad unit, targeting data, tracking prompt or
 * mediation is configured. Live ads require a separate consent/account setup. */
export async function createNativeRewardedAd(
  callbacks: AdCallbacks,
): Promise<RewardedAdHandle> {
  const sdk = await loadNativeAdsSdk();
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
