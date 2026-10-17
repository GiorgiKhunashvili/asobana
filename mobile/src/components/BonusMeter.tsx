import { StyleSheet, View } from 'react-native';
import { BONUS_GOAL } from '../engine/bonusRewards';
import { palette, space } from '../theme';
import { Txt } from './Text';

export function BonusMeter({
  progress,
  freeHints,
  compact = false,
}: {
  readonly progress: number;
  readonly freeHints: number;
  readonly compact?: boolean;
}) {
  return (
    <View style={compact ? styles.compact : styles.full}>
      <View
        accessible
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max: BONUS_GOAL, now: progress }}
        accessibilityLabel={`ბონუს სიტყვები ${progress}/${BONUS_GOAL}. ყოველ ${BONUS_GOAL} სიტყვაზე ასოს უფასო მინიშნება. დარჩენილია ${freeHints} უფასო მინიშნება.`}
        testID="bonus-meter"
        style={styles.row}
      >
        <Txt variant="caption" style={compact && styles.compactText}>
          {`ბონუსი ${progress}/${BONUS_GOAL}`}
        </Txt>
        <View style={styles.track}>
          <View
            style={[
              styles.fill,
              { width: `${(progress * 100) / BONUS_GOAL}%` },
            ]}
          />
        </View>
      </View>
      {!compact && (
        <>
          <Txt variant="caption">
            ყოველი 10 ბონუს სიტყვა — ასოს უფასო მინიშნება.
          </Txt>
          <Txt
            variant="caption"
            color={palette.goldLight}
          >{`უფასო მინიშნებები: ${freeHints}`}</Txt>
          <Txt variant="caption">პროგრესი დონეებს შორის ინახება.</Txt>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Fits the gameplay progress row (18 pt) without clipping descenders.
  compact: {
    height: 18,
    justifyContent: 'center',
    paddingHorizontal: 7,
    borderRadius: 9,
    backgroundColor: palette.scrim,
  },
  compactText: { fontSize: 11.5, lineHeight: 15 },
  full: { gap: space.sm },
  row: { flexDirection: 'row', alignItems: 'center', gap: space.sm },
  track: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: palette.textMuted,
    overflow: 'hidden',
  },
  fill: { height: 4, backgroundColor: palette.goldLight },
});
