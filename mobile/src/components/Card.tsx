import type { PropsWithChildren } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { palette, radius, space } from '../theme';

/** Enamel plate edged with gold wire. */
export function Card({
  children,
  style,
}: PropsWithChildren<{ readonly style?: ViewStyle | readonly ViewStyle[] }>) {
  return <View style={[styles.card, style]}>{children}</View>;
}

/** One labelled line inside a card: text on the left, a value or control on the right. */
export function CardRow({ children }: PropsWithChildren) {
  return <View style={styles.row}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.card,
    borderWidth: 1.5,
    borderColor: palette.hairline,
    backgroundColor: 'rgba(5, 10, 30, 0.35)',
    padding: space.lg,
    gap: space.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.md,
    minHeight: 48,
  },
});
