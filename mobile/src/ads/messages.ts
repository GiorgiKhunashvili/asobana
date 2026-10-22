import type { RewardedStatus } from './createRewardedAds';
import { LEVEL_DOUBLE_COINS, REWARDED_AD_COINS } from '../engine/adRewards';

export const rewardedAdMessages: Record<RewardedStatus, string> = {
  idle: 'რეკლამის ნახვით მიიღებ დამატებით მონეტებს.',
  loading: 'რეკლამა იტვირთება…',
  ready: 'სურვილისამებრ ნახე რეკლამა და მიიღე მონეტები.',
  showing: 'რეკლამის დასრულებას ველოდებით…',
  saving: 'ჯილდო ინახება…',
  rewarded: `შენახულია: +${REWARDED_AD_COINS} მონეტა`,
  closed: 'რეკლამა ჯილდოს მიღებამდე დაიხურა. მონეტები არ დამატებულა.',
  error: 'რეკლამა ახლა ვერ ჩაიტვირთა. სცადე მოგვიანებით.',
  'save-error':
    'ჯილდო ვერ შეინახა. სცადე შენახვა ხელახლა — რეკლამის გამეორება საჭირო არ არის.',
  unavailable: 'რეკლამა ამ ვერსიაში მიუწვდომელია.',
};

/** The victory screen's optional "×2": same states, a doubling instead of coins. */
export const levelDoubleMessages: Record<RewardedStatus, string> = {
  ...rewardedAdMessages,
  idle: 'რეკლამის ნახვით გააორმაგებ დონის ჯილდოს.',
  ready: 'სურვილისამებრ ნახე რეკლამა და გააორმაგე ჯილდო.',
  rewarded: `ჯილდო გაორმაგდა: +${LEVEL_DOUBLE_COINS} მონეტა`,
};
