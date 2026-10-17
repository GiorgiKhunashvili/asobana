import { Canvas, Circle, Group, Path } from '@shopify/react-native-skia';
import { useEffect, useRef } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { motion, palette } from '../theme';
import { STAR8 } from './Icon';
import { Txt } from './Text';

/** In-game coin: struck gold with the eight-pointed star. Not a real currency. */
export function CoinGlyph({ size = 20 }: { readonly size?: number }) {
  const r = size / 2;
  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={{ width: size, height: size }}
    >
      <Canvas style={{ width: size, height: size }}>
        <Circle cx={r} cy={r} r={r} color={palette.goldDeep} />
        <Circle cx={r} cy={r - size * 0.04} r={r * 0.9} color={palette.gold} />
        <Circle
          cx={r}
          cy={r - size * 0.04}
          r={r * 0.68}
          color={palette.goldDeep}
          style="stroke"
          strokeWidth={Math.max(1, size * 0.05)}
        />
        <Group
          transform={[
            { translateX: r - size * 0.27 },
            { translateY: r - size * 0.31 },
            { scale: (size * 0.54) / 24 },
          ]}
        >
          <Path path={STAR8} color={palette.goldDeep} />
        </Group>
      </Canvas>
    </View>
  );
}

/**
 * Committed balance only: the number shown is always the saved model value.
 * A change pulses the badge; it never counts through intermediate amounts.
 */
export function CoinBadge({
  coins,
  onPress,
}: {
  readonly coins: number;
  readonly onPress?: () => void;
}) {
  const previous = useRef(coins);
  const pulse = useSharedValue(1);
  const glow = useSharedValue(0);
  useEffect(() => {
    if (coins === previous.current) return;
    const gained = coins > previous.current;
    previous.current = coins;
    pulse.set(
      withSequence(
        withTiming(gained ? 1.16 : 0.9, { duration: motion.fast }),
        withSpring(1, motion.spring),
      ),
    );
    glow.set(
      withSequence(
        withTiming(gained ? 1 : 0.5, { duration: motion.fast }),
        withTiming(0, { duration: motion.slow * 2 }),
      ),
    );
  }, [coins, pulse, glow]);
  const animated = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.get() }],
    backgroundColor: interpolateColor(
      glow.get(),
      [0, 1],
      ['rgba(18, 12, 36, 0.5)', 'rgba(227, 182, 90, 0.6)'],
    ),
  }));
  const content = (
    <Animated.View style={[styles.badge, animated]}>
      <CoinGlyph size={20} />
      <Txt variant="number">{coins}</Txt>
    </Animated.View>
  );
  return onPress ? (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${coins} მონეტა`}
      accessibilityHint="მონეტების გვერდი"
      testID="coin-balance"
      onPress={onPress}
      hitSlop={8}
    >
      {content}
    </Pressable>
  ) : (
    <View
      accessible
      accessibilityLabel={`${coins} მონეტა`}
      testID="coin-balance"
    >
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    minHeight: 38,
    paddingLeft: 9,
    paddingRight: 14,
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: palette.gold,
  },
});
