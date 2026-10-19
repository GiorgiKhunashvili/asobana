import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import { LEVEL_DOUBLE_COINS } from '../engine/adRewards';
import { palette, touch } from '../theme';
import { Icon } from './Icon';
import { Txt } from './Text';

/** The victory screen's optional ad, beside the level reward: a gold pill like
 * the hint ad pill ("▶ ×2", or "↻ ×2" to retry saving an earned reward). */
export function DoubleRewardButton({
  retrySave,
  waiting,
  disabled,
  onPress,
}: {
  retrySave: boolean;
  /** The press is waiting for the ad to load. */
  waiting: boolean;
  disabled: boolean;
  onPress(): void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={
        retrySave
          ? 'ჯილდოს შენახვა ხელახლა'
          : `ნახე რეკლამა და გააორმაგე ჯილდო: +${LEVEL_DOUBLE_COINS} მონეტა`
      }
      accessibilityHint={
        retrySave
          ? 'რეკლამის გამეორება საჭირო არ არის'
          : 'სურვილისამებრ; რეკლამა გაიხსნება აქვე'
      }
      accessibilityState={{ disabled, busy: waiting }}
      disabled={disabled}
      onPress={onPress}
      testID="victory-double"
      style={({ pressed }) => [
        styles.pill,
        pressed && styles.pressed,
        disabled && !waiting && styles.disabled,
      ]}
    >
      <View style={styles.icon}>
        {waiting ? (
          <ActivityIndicator size="small" color={palette.ink} />
        ) : (
          <Icon
            name={retrySave ? 'restart' : 'play'}
            size={16}
            color={palette.ink}
          />
        )}
      </View>
      <Txt variant="number" color={palette.ink} style={styles.label}>
        ×2
      </Txt>
    </Pressable>
  );
}

/** Shown in place of the offer once this level's reward was doubled. */
export function DoubledRewardTag() {
  return (
    <View
      accessible
      accessibilityLabel="ჯილდო გაორმაგებულია"
      testID="victory-doubled"
      style={styles.tag}
    >
      <Icon name="check" size={16} color={palette.gold} />
      <Txt variant="number" color={palette.goldLight} style={styles.label}>
        ×2
      </Txt>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    minHeight: touch,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingLeft: 12,
    paddingRight: 16,
    borderRadius: 999,
    backgroundColor: palette.gold,
    borderTopWidth: 1.5,
    borderTopColor: palette.goldLight,
    borderBottomWidth: 3,
    borderBottomColor: palette.goldDeep,
  },
  pressed: {
    borderBottomWidth: 1,
    marginTop: 2,
    backgroundColor: '#D9A94B',
  },
  disabled: { opacity: 0.42 },
  icon: { width: 20, alignItems: 'center' },
  label: { fontSize: 20, lineHeight: 26 },
  tag: {
    minHeight: touch,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingLeft: 12,
    paddingRight: 16,
    borderRadius: 999,
    backgroundColor: palette.ink,
    borderWidth: 1.5,
    borderColor: palette.gold,
  },
});
