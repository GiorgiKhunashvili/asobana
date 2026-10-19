import { randomUUID } from 'expo-crypto';
import { useSyncExternalStore } from 'react';
import { gameStore } from '../state/gameStore';
import { createRewardedAds } from './createRewardedAds';
import { createNativeRewardedAd } from './nativeRewardedAd';

export const rewardedAds = createRewardedAds({
  createAd: createNativeRewardedAd,
  createClaimId: randomUUID,
  claimReward: (id) => gameStore.getState().claimAdReward(id),
});
export function useRewardedAd() {
  return useSyncExternalStore(
    rewardedAds.subscribe,
    rewardedAds.getSnapshot,
    rewardedAds.getSnapshot,
  );
}
