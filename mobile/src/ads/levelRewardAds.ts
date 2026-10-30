import { randomUUID } from 'expo-crypto';
import { useSyncExternalStore } from 'react';
import { reportAdFailure } from '../services/errorReporting';
import { gameStore } from '../state/gameStore';
import { createRewardedAds } from './createRewardedAds';
import { createNativeRewardedAd } from './nativeRewardedAd';

/** The victory screen's "×2" ad. Kept apart from the coin ads so neither
 * placement shows (or retries) the other's reward. The target is a level ID. */
export const levelRewardAds = createRewardedAds<string>({
  createAd: createNativeRewardedAd,
  createClaimId: randomUUID,
  claimReward: (id, levelId) =>
    gameStore.getState().claimLevelDouble(levelId, id),
  reportFailure: (error) => reportAdFailure('rewarded', error),
});
export function useLevelRewardAdSnapshot() {
  return useSyncExternalStore(
    levelRewardAds.subscribe,
    levelRewardAds.getSnapshot,
    levelRewardAds.getSnapshot,
  );
}
