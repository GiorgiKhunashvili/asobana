import { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet, View } from 'react-native';
import { REWARDED_AD_COINS } from '../engine/adRewards';
import { fonts, palette } from '../theme';
import { RoundButton } from './Buttons';
import { CoinGlyph } from './CoinBadge';
import { Icon } from './Icon';
import { Txt } from './Text';

/** A hint control. When the hint is unaffordable it keeps its own icon and only
 * the price pill turns gold ("▶ +75", or "↻ +75" to retry saving a reward), so
 * the two hints stay distinguishable. */
export function HintAdButton({
  kind,
  cost,
  freeHints = 0,
  offerAd,
  retrySave,
  disabled,
  onPress,
}: {
  kind: 'cell' | 'word';
  cost: number;
  freeHints?: number;
  offerAd: boolean;
  retrySave: boolean;
  disabled: boolean;
  onPress(): void;
}) {
  const reducedMotion = useReducedMotion();
  const lift = useSharedValue(0);
  const pop = useSharedValue(1);
  useEffect(() => {
    if (!offerAd || reducedMotion) return;
    lift.set(
      withSequence(
        withTiming(-5, { duration: 180 }),
        withTiming(0, { duration: 220 }),
      ),
    );
    pop.set(
      withSequence(
        withTiming(0.7, { duration: 0 }),
        withTiming(1.1, { duration: 200 }),
        withTiming(1, { duration: 160 }),
      ),
    );
  }, [offerAd, reducedMotion, lift, pop]);
  const lifted = useAnimatedStyle(() => ({
    transform: [{ translateY: lift.get() }],
  }));
  const popped = useAnimatedStyle(() => ({
    transform: [{ scale: pop.get() }],
  }));
  const hint = kind === 'cell' ? 'ასოს მინიშნება' : 'სიტყვის მინიშნება';
  return (
    <Animated.View style={lifted}>
      <RoundButton
        label={
          offerAd
            ? retrySave
              ? 'ჯილდოს შენახვა ხელახლა'
              : `ნახე რეკლამა, მიიღე ${REWARDED_AD_COINS} მონეტა. ${hint}, ${cost} მონეტა`
            : freeHints > 0
              ? `ასოს უფასო მინიშნება, დარჩენილია ${freeHints}`
              : `${hint}, ${cost} მონეტა`
        }
        icon={kind === 'cell' ? 'hintLetter' : 'hintWord'}
        testID={`hint-${kind}`}
        disabled={disabled}
        accessibilityHint={
          offerAd
            ? retrySave
              ? 'რეკლამის გამეორება საჭირო არ არის'
              : 'რეკლამა გაიხსნება აქვე; მინიშნებას შემდეგ ცალკე აირჩევ'
            : kind === 'cell'
              ? 'ერთი ასოს გახსნა'
              : 'ერთი სიტყვის გახსნა'
        }
        onPress={onPress}
        badge={
          offerAd ? (
            <Animated.View style={[styles.price, styles.ad, popped]}>
              <Icon
                name={retrySave ? 'restart' : 'play'}
                size={10}
                color={palette.ink}
              />
              <Txt variant="caption" color={palette.ink} style={styles.adText}>
                {`+${REWARDED_AD_COINS}`}
              </Txt>
              <CoinGlyph size={12} />
            </Animated.View>
          ) : (
            <View style={[styles.price, freeHints > 0 && styles.freePrice]}>
              {freeHints > 0 ? (
                <Txt variant="caption" style={styles.priceText}>
                  უფასო
                </Txt>
              ) : (
                <>
                  <CoinGlyph size={12} />
                  <Txt variant="caption" style={styles.priceText}>
                    {cost}
                  </Txt>
                </>
              )}
            </View>
          )
        }
      />
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 7,
    paddingVertical: 1,
    borderRadius: 999,
    backgroundColor: palette.ink,
    borderWidth: 1,
    borderColor: palette.gold,
  },
  priceText: { fontSize: 11, lineHeight: 15 },
  freePrice: { width: 68, paddingHorizontal: 4, justifyContent: 'center' },
  ad: {
    paddingLeft: 6,
    backgroundColor: palette.gold,
    borderColor: palette.goldLight,
  },
  adText: { fontFamily: fonts.textBold, fontSize: 11, lineHeight: 15 },
});
