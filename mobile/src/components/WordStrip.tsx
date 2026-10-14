import { useEffect, useState } from 'react';
import { AccessibilityInfo, StyleSheet, View } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
  ZoomIn,
} from 'react-native-reanimated';
import { fonts, letterLift, motion, palette } from '../theme';
import { RoundButton } from './Buttons';
import { Txt } from './Text';

export type StripFeedback =
  | {
      readonly key: number;
      readonly kind: 'found' | 'bonus' | 'duplicate' | 'invalid';
      readonly word: string;
      readonly caption?: string;
    }
  | { readonly key: number; readonly kind: 'notice'; readonly caption: string };

/** How long an outcome stays bright before it settles into a quiet record. */
const BRIGHT_MS = 1600;
const CHIP = {
  found: palette.turquoise,
  bonus: palette.gold,
  duplicate: palette.ivory,
  invalid: palette.pomegranate,
};
const CHIP_TEXT = {
  found: palette.ivory,
  bonus: palette.ink,
  duplicate: palette.ink,
  invalid: palette.ivory,
};

function describe(feedback: StripFeedback): string {
  if (feedback.kind === 'notice') return feedback.caption;
  return [feedback.word, feedback.caption ?? 'ნაპოვნია'].join(', ');
}

/**
 * Shows the letters being traced. Between attempts it shows how the last
 * committed attempt landed: bright at first, then dimmed, until the next trace.
 * Keeping the record (rather than clearing it) lets screen-reader users re-read it.
 */
export function WordStrip({
  letters,
  feedback,
  idleHint,
  width,
  onClear,
}: {
  readonly letters: readonly string[];
  readonly feedback: StripFeedback | null;
  readonly idleHint: string | null;
  readonly width: number;
  readonly onClear?: () => void;
}) {
  const [settledKey, setSettledKey] = useState<number | null>(null);
  useEffect(() => {
    if (!feedback) return;
    AccessibilityInfo.announceForAccessibility(describe(feedback));
    const timer = setTimeout(() => setSettledKey(feedback.key), BRIGHT_MS);
    return () => clearTimeout(timer);
  }, [feedback]);

  const tracing = letters.length > 0;
  const label = tracing
    ? letters.join('')
    : feedback
      ? describe(feedback)
      : (idleHint ?? '');
  return (
    <View style={[styles.strip, { width }]}>
      {/* The clear button stays a sibling so assistive tech can reach it. */}
      <View
        testID="selection-preview"
        accessible
        accessibilityLabel={label}
        accessibilityLiveRegion="polite"
        style={styles.content}
      >
        {tracing ? (
          <Chips
            letters={letters}
            kind="tracing"
            width={width - (onClear ? 64 : 0)}
          />
        ) : feedback ? (
          <Outcome
            key={feedback.key}
            feedback={feedback}
            settled={feedback.key === settledKey}
            width={width}
          />
        ) : idleHint ? (
          <Animated.View entering={FadeIn.duration(motion.base)}>
            <Txt variant="label" color={palette.textMuted}>
              {idleHint}
            </Txt>
          </Animated.View>
        ) : null}
      </View>
      {tracing && onClear && (
        <View style={styles.clear}>
          <RoundButton
            label="გასუფთავება"
            icon="close"
            size={40}
            onPress={onClear}
            testID="tap-clear"
          />
        </View>
      )}
    </View>
  );
}

function Outcome({
  feedback,
  settled,
  width,
}: {
  feedback: StripFeedback;
  settled: boolean;
  width: number;
}) {
  const shake = useSharedValue(0);
  const dim = useSharedValue(1);
  useEffect(() => {
    if (settled) dim.set(withTiming(0.45, { duration: motion.slow }));
  }, [settled, dim]);
  useEffect(() => {
    if (feedback.kind !== 'invalid') return;
    shake.set(
      withSequence(
        ...[-9, 8, -6, 4, -2, 0].map((x) => withTiming(x, { duration: 55 })),
      ),
    );
  }, [feedback.kind, shake]);
  const style = useAnimatedStyle(() => ({
    opacity: dim.get(),
    transform: [{ translateX: shake.get() }],
  }));
  return (
    <Animated.View
      style={[styles.outcome, style]}
      exiting={FadeOut.duration(motion.base)}
    >
      {feedback.kind !== 'notice' && (
        <Chips
          letters={Array.from(feedback.word)}
          kind={feedback.kind}
          width={width}
        />
      )}
      {feedback.caption && (
        <Animated.View entering={FadeIn.delay(120).duration(motion.base)}>
          <Txt
            variant={feedback.kind === 'notice' ? 'label' : 'caption'}
            color={feedback.kind === 'bonus' ? palette.goldLight : palette.text}
          >
            {feedback.caption}
          </Txt>
        </Animated.View>
      )}
    </Animated.View>
  );
}

function Chips({
  letters,
  kind,
  width,
}: {
  letters: readonly string[];
  kind: 'tracing' | 'found' | 'bonus' | 'duplicate' | 'invalid';
  width: number;
}) {
  const size = Math.max(
    22,
    Math.min(36, Math.floor((width - 4 * letters.length) / letters.length)),
  );
  const fill = kind === 'tracing' ? palette.ivory : CHIP[kind];
  const color = kind === 'tracing' ? palette.ink : CHIP_TEXT[kind];
  return (
    <View style={styles.chips}>
      {letters.map((letter, index) => (
        <Animated.View
          // Index keys: tracing only appends, so each new letter animates in once.
          key={`${index}:${letter}`}
          entering={ZoomIn.delay(kind === 'tracing' ? 0 : index * 55)
            .springify()
            .damping(18)
            .stiffness(260)}
          style={[
            styles.chip,
            { width: size, height: size + 4, backgroundColor: fill },
            kind === 'duplicate' && styles.chipMuted,
          ]}
        >
          <Animated.Text
            maxFontSizeMultiplier={1}
            style={[
              styles.chipLetter,
              {
                color,
                fontSize: Math.round(size * 0.58),
                lineHeight: size + 1,
              },
              letterLift(Math.round(size * 0.58)),
            ]}
          >
            {letter}
          </Animated.Text>
        </Animated.View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  strip: {
    height: 72,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: { alignSelf: 'stretch', alignItems: 'center' },
  outcome: { alignItems: 'center', gap: 4 },
  chips: { flexDirection: 'row', gap: 4 },
  chip: {
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: palette.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipMuted: { opacity: 0.6 },
  chipLetter: {
    fontFamily: fonts.textBold,
    textAlign: 'center',
    includeFontPadding: false,
  },
  clear: { position: 'absolute', right: 0, top: 16 },
});
