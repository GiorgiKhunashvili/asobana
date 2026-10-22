import { adUnitId } from './adUnits';
import { type AdCallbacks, type RewardedAdHandle } from './createRewardedAds';
import { loadNativeAdsSdk } from './nativeAdsSdk';

/** Non-personalized rewarded ads: no targeting data, tracking prompt or
 * mediation. Live units only in opted-in store builds (see adUnits). */
export async function createNativeRewardedAd(
  callbacks: AdCallbacks,
): Promise<RewardedAdHandle> {
  const sdk = await loadNativeAdsSdk();
  const ad = sdk.RewardedAd.createForAdRequest(adUnitId(sdk, 'rewarded'), {
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
