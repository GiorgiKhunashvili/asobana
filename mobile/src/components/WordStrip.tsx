import { useEffect, useState } from 'react';
import { AccessibilityInfo, Pressable, StyleSheet, View } from 'react-native';
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
import { Icon } from './Icon';
import { Txt } from './Text';
import { ExplainButton } from './WordExplanation';

export type StripFeedback =
  | {
      readonly key: number;
      readonly kind: 'found' | 'bonus' | 'duplicate' | 'invalid';
      readonly word: string;
      readonly caption?: string;
    }
  | { readonly key: number; readonly kind: 'notice'; readonly caption: string };

/** Fixed height, so the wheel below never shifts while words come and go. */
export const STRIP_HEIGHT = 52;

/** How long an outcome stays bright before it settles into a quiet record. */
const BRIGHT_MS = 1600;
const CHIP_GAP = 4;
const EXPLAIN_SIZE = 40;
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

function chipSize(width: number, letters: number, max: number): number {
  return Math.max(
    20,
    Math.min(max, Math.floor((width - CHIP_GAP * letters) / letters)),
  );
}

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
  onSubmit,
  onExplain = null,
  accent = palette.turquoise,
}: {
  readonly letters: readonly string[];
  readonly feedback: StripFeedback | null;
  readonly idleHint: string | null;
  readonly width: number;
  /** Tap mode: clear and submit buttons flank the letters while some are chosen. */
  readonly onClear?: () => void;
  readonly onSubmit?: () => void;
  /** The found word has an explanation: a ? waits beside it until the next trace. */
  readonly onExplain?: (() => void) | null;
  /** Found-word chips use the board's found-cell colour. */
  readonly accent?: string;
}) {
  const [settledKey, setSettledKey] = useState<number | null>(null);
  useEffect(() => {
    if (!feedback) return;
    AccessibilityInfo.announceForAccessibility(describe(feedback));
    const timer = setTimeout(() => setSettledKey(feedback.key), BRIGHT_MS);
    return () => clearTimeout(timer);
  }, [feedback]);

  const tracing = letters.length > 0;
  const explaining = !tracing && feedback?.kind === 'found' ? onExplain : null;
  const label = tracing
    ? letters.join('')
    : feedback
      ? describe(feedback)
      : (idleHint ?? '');
  return (
    <View style={[styles.strip, { width }]}>
      {/* Buttons stay siblings of the labelled preview so assistive tech can reach them. */}
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
            width={width - (onClear ? 104 : 0)}
            max={30}
          />
        ) : feedback ? (
          <Outcome
            key={feedback.key}
            feedback={feedback}
            settled={feedback.key === settledKey}
            width={width}
            accent={accent}
          />
        ) : idleHint ? (
          <Animated.View
            entering={FadeIn.duration(motion.base)}
            style={styles.pill}
          >
            <Txt variant="label">{idleHint}</Txt>
          </Animated.View>
        ) : null}
      </View>
      {explaining && feedback?.kind === 'found' && (
        <Animated.View
          entering={ZoomIn.delay(
            Array.from(feedback.word).length * 55 + motion.base,
          )
            .springify()
            .damping(14)}
          style={[
            styles.side,
            { left: explainLeft(feedback.word, feedback.caption, width) },
            styles.explain,
          ]}
        >
          <ExplainButton
            word={feedback.word}
            size={EXPLAIN_SIZE}
            onPress={explaining}
            testID="strip-explain"
          />
        </Animated.View>
      )}
      {tracing && onClear && (
        <View style={[styles.side, styles.left]}>
          <RoundButton
            label="გასუფთავება"
            icon="close"
            size={40}
            onPress={onClear}
            testID="tap-clear"
          />
        </View>
      )}
      {tracing && onSubmit && (
        <View style={[styles.side, styles.right]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="შემოწმება"
            accessibilityState={{ disabled: letters.length < 2 }}
            disabled={letters.length < 2}
            hitSlop={4}
            onPress={onSubmit}
            testID="tap-submit"
            style={({ pressed }) => [
              styles.submit,
              { backgroundColor: accent },
              letters.length < 2 && styles.submitIdle,
              pressed && styles.pressed,
            ]}
          >
            <Icon
              name="check"
              size={22}
              color={letters.length < 2 ? palette.textMuted : palette.ivory}
              strokeWidth={2.6}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
}

/** Just past the last chip, staying inside the strip for long words. */
function explainLeft(
  word: string,
  caption: string | undefined,
  width: number,
): number {
  const count = Array.from(word).length;
  const size = chipSize(width, count, caption ? 26 : 30);
  const chips = count * size + CHIP_GAP * (count - 1);
  return Math.min(width / 2 + chips / 2 + 10, width - EXPLAIN_SIZE);
}

function Outcome({
  feedback,
  settled,
  width,
  accent,
}: {
  feedback: StripFeedback;
  settled: boolean;
  width: number;
  accent: string;
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
          max={feedback.caption ? 26 : 30}
          accent={accent}
        />
      )}
      {feedback.caption && (
        <Animated.View
          entering={FadeIn.delay(120).duration(motion.base)}
          style={styles.pill}
        >
          <Txt
            variant={feedback.kind === 'notice' ? 'label' : 'caption'}
            color={feedback.kind === 'bonus' ? palette.goldLight : palette.text}
            style={feedback.kind === 'notice' ? undefined : styles.caption}
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
  max,
  accent = palette.turquoise,
}: {
  letters: readonly string[];
  kind: 'tracing' | 'found' | 'bonus' | 'duplicate' | 'invalid';
  width: number;
  max: number;
  accent?: string;
}) {
  const size = chipSize(width, letters.length, max);
  const fill =
    kind === 'tracing' ? palette.ivory : kind === 'found' ? accent : CHIP[kind];
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
                lineHeight: size + 4,
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
    height: STRIP_HEIGHT,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: { alignSelf: 'stretch', alignItems: 'center' },
  outcome: { alignItems: 'center', gap: 2 },
  caption: { fontSize: 12, lineHeight: 16 },
  // Soft dusk backing so short text reads over any part of a painting.
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: 'rgba(18, 12, 36, 0.42)',
  },
  chips: { flexDirection: 'row', gap: CHIP_GAP },
  // Flat, like the crossword tiles.
  chip: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipMuted: { opacity: 0.6 },
  chipLetter: {
    fontFamily: fonts.textBold,
    textAlign: 'center',
    includeFontPadding: false,
  },
  side: { position: 'absolute', top: (STRIP_HEIGHT - 40) / 2 },
  left: { left: 0 },
  right: { right: 0 },
  explain: { top: (STRIP_HEIGHT - EXPLAIN_SIZE) / 2 },
  submit: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.pomegranate,
    borderWidth: 1.5,
    borderColor: palette.goldLight,
  },
  submitIdle: { backgroundColor: palette.ink, borderColor: palette.hairline },
  pressed: { transform: [{ scale: 0.92 }] },
});
