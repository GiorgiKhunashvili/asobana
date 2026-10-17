import { StyleSheet, View, type ViewStyle } from 'react-native';
import { placeFacts } from '../content/destinations';
import { palette, space } from '../theme';
import { Display, Txt } from './Text';

/**
 * A stop's "იცოდი?" fact on a dusk panel over a painting (place sheet,
 * victory). Renders nothing for stops without one (pre-journey cards).
 */
export function PlaceFact({
  chapterId,
  style,
}: {
  readonly chapterId: string | null | undefined;
  readonly style?: ViewStyle;
}) {
  const fact = chapterId ? placeFacts[chapterId] : undefined;
  if (!fact) return null;
  return (
    <View
      accessible
      accessibilityLabel={`იცოდი? ${fact}`}
      testID="place-fact"
      style={[styles.box, style]}
    >
      <Display variant="eyebrow" color={palette.goldLight}>
        იცოდი?
      </Display>
      <Txt variant="body" color={palette.text}>
        {fact}
      </Txt>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    gap: space.xs,
    paddingHorizontal: space.lg,
    paddingVertical: space.md,
    borderRadius: 18,
    backgroundColor: 'rgba(18, 12, 36, 0.62)',
    borderWidth: 1,
    borderColor: 'rgba(227, 182, 90, 0.4)',
  },
});
