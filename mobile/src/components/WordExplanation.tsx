import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { explanationOf } from '../content/wordExplanations';
import { fonts, motion, palette, radius, space, touch } from '../theme';
import { Icon } from './Icon';
import { Display, Txt } from './Text';

const QUESTION = 'რას ნიშნავს?';

function Mark({ size }: { readonly size: number }) {
  const fontSize = Math.round(size * 0.66);
  return (
    <View
      style={[
        styles.mark,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Text
        maxFontSizeMultiplier={1}
        style={[styles.markText, { fontSize, lineHeight: size - 2 }]}
      >
        ?
      </Text>
    </View>
  );
}

/** The gold ? that opens a word's explanation, wherever it sits. */
export function ExplainButton({
  word,
  size,
  onPress,
  testID,
}: {
  readonly word: string;
  readonly size: number;
  readonly onPress: () => void;
  readonly testID: string;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${word}: ${QUESTION}`}
      hitSlop={Math.max(0, (touch - size) / 2)}
      onPress={onPress}
      testID={testID}
    >
      <Mark size={size} />
    </Pressable>
  );
}

/** A finished level's explained words, so the last word's ? is never lost. */
export function WordMeanings({
  words,
  onOpen,
}: {
  readonly words: readonly string[];
  readonly onOpen: (word: string) => void;
}) {
  return (
    <View testID="word-meanings" style={styles.meanings}>
      <Txt variant="label" color={palette.goldLight}>
        {QUESTION}
      </Txt>
      <View style={styles.words}>
        {words.map((word) => (
          <Pressable
            key={word}
            accessibilityRole="button"
            accessibilityLabel={`${word}: ${QUESTION}`}
            onPress={() => onOpen(word)}
            testID={`word-meaning-${word}`}
            style={({ pressed }) => [styles.word, pressed && styles.pressed]}
          >
            <Txt variant="label" color={palette.ink}>
              {word}
            </Txt>
            <Mark size={24} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

/**
 * Explanation card. Taps anywhere close it, so it never stands between a player
 * and the next word. `anchorHeight` is the band it sits in, measured up from the
 * bottom of the overlay; without one it is centred.
 */
export function WordExplanationCard({
  word,
  anchorHeight,
  onClose,
}: {
  readonly word: string;
  readonly anchorHeight?: number;
  readonly onClose: () => void;
}) {
  const explanation = explanationOf(word);
  if (!explanation) return null;
  return (
    <View style={StyleSheet.absoluteFill}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="დახურვა"
        onPress={onClose}
        testID="word-explanation-close"
        style={StyleSheet.absoluteFill}
      />
      <View
        pointerEvents="box-none"
        style={
          anchorHeight === undefined
            ? styles.centered
            : [styles.anchored, { height: anchorHeight }]
        }
      >
        {/* Taps pass through to the backdrop, so the whole screen closes it. */}
        <Animated.View
          pointerEvents="none"
          accessible
          accessibilityLabel={`${word}. ${explanation}`}
          accessibilityLiveRegion="polite"
          entering={FadeInDown.duration(motion.base)}
          testID="word-explanation"
          style={styles.card}
        >
          <View style={styles.close}>
            <Icon name="close" size={20} color={palette.goldLight} />
          </View>
          <Display variant="heading" color={palette.goldLight}>
            {word}
          </Display>
          <Txt variant="body">{explanation}</Txt>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mark: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.gold,
    borderWidth: 1.5,
    borderColor: palette.goldLight,
  },
  markText: {
    fontFamily: fonts.textBold,
    color: palette.ink,
    textAlign: 'center',
    includeFontPadding: false,
  },
  meanings: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    gap: space.sm,
    paddingHorizontal: space.lg,
    paddingVertical: space.md,
    borderRadius: radius.card,
    backgroundColor: 'rgba(18, 12, 36, 0.62)',
    borderWidth: 1,
    borderColor: 'rgba(227, 182, 90, 0.4)',
  },
  words: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: space.sm,
  },
  word: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.sm,
    minHeight: 44,
    paddingLeft: space.lg,
    paddingRight: space.sm,
    borderRadius: radius.pill,
    backgroundColor: palette.ivory,
  },
  pressed: { transform: [{ scale: 0.96 }] },
  centered: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: space.lg,
  },
  anchored: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: space.lg,
  },
  card: {
    width: '100%',
    maxWidth: 520,
    alignSelf: 'center',
    gap: space.xs,
    paddingHorizontal: space.lg,
    paddingVertical: space.md,
    borderRadius: radius.card,
    backgroundColor: 'rgba(18, 12, 36, 0.94)',
    borderWidth: 1,
    borderColor: 'rgba(227, 182, 90, 0.6)',
  },
  close: { position: 'absolute', top: space.md, right: space.md },
});
