import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { liveAdsEnabled } from '../ads/adUnits';
import { rewardedAds, useRewardedAd } from '../ads/rewardedAds';
import { rewardedAdMessages } from '../ads/messages';
import { REWARDED_AD_COINS } from '../engine/adRewards';
import { useGameStore } from '../state/gameStore';
import { Card } from './Card';
import { PrimaryButton } from './Buttons';
import { Display, Txt } from './Text';
import { palette } from '../theme';

export function RewardedAdCard() {
  const { status } = useRewardedAd();
  const ready = useGameStore((state) => state.status === 'ready');
  const busy = useGameStore((state) => state.busy);
  const request = useRef<AbortController | null>(null);
  useEffect(() => {
    if (ready) void rewardedAds.load();
  }, [ready]);
  useEffect(() => {
    // An ad still refreshing must never appear after the player has left.
    const cancel = () => request.current?.abort();
    const subscription = AppState.addEventListener('change', (state) => {
      if (state !== 'active') cancel();
    });
    return () => {
      subscription.remove();
      cancel();
    };
  }, []);
  const blocked =
    !ready ||
    busy ||
    ['loading', 'showing', 'saving', 'unavailable'].includes(status);
  const label =
    status === 'ready'
      ? `ნახე რეკლამა · +${REWARDED_AD_COINS} მონეტა`
      : status === 'save-error'
        ? 'ჯილდოს შენახვა ხელახლა'
        : status === 'rewarded'
          ? 'კიდევ ერთი რეკლამა'
          : status === 'loading'
            ? 'იტვირთება…'
            : status === 'showing' || status === 'saving'
              ? 'გთხოვ, დაელოდე…'
              : status === 'unavailable'
                ? 'რეკლამა მიუწვდომელია'
                : 'რეკლამის ჩატვირთვა';
  return (
    <Card>
      <Display variant="eyebrow" color={palette.gold}>
        {`${liveAdsEnabled() ? 'რეკლამა' : 'სატესტო რეკლამა'} · +${REWARDED_AD_COINS}`}
      </Display>
      <Txt accessibilityLiveRegion="polite">{rewardedAdMessages[status]}</Txt>
      <PrimaryButton
        label={label}
        testID="rewarded-ad"
        disabled={blocked}
        onPress={() => {
          if (blocked) return;
          if (status === 'ready') {
            // Watching replaces an ad that expired on screen, in this one press.
            request.current = new AbortController();
            void rewardedAds.watch(request.current.signal);
          } else if (status === 'save-error') void rewardedAds.retryReward();
          else void rewardedAds.load();
        }}
      />
    </Card>
  );
}
