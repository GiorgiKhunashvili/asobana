import { useEffect } from 'react';
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
  useEffect(() => {
    if (ready) void rewardedAds.load();
  }, [ready]);
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
        {`სატესტო რეკლამა · +${REWARDED_AD_COINS}`}
      </Display>
      <Txt accessibilityLiveRegion="polite">{rewardedAdMessages[status]}</Txt>
      <PrimaryButton
        label={label}
        testID="rewarded-ad"
        disabled={blocked}
        onPress={() => {
          if (blocked) return;
          if (status === 'ready') void rewardedAds.show();
          else if (status === 'save-error') void rewardedAds.retryReward();
          else void rewardedAds.load();
        }}
      />
    </Card>
  );
}
