import { useMemo, type PropsWithChildren } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { GestureScrollContext } from './GestureScrollContext';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type TextProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export function Label({ style, ...props }: TextProps) {
  return <Text {...props} style={[styles.text, style]} />;
}
export function Page({ children }: PropsWithChildren) {
  const scrollGesture = useMemo(() => Gesture.Native(), []);
  return (
    <SafeAreaView style={styles.safe} edges={['bottom', 'left', 'right']}>
      <GestureScrollContext.Provider value={scrollGesture}>
        <GestureDetector gesture={scrollGesture}>
          <ScrollView contentContainerStyle={styles.page}>
            {children}
          </ScrollView>
        </GestureDetector>
      </GestureScrollContext.Provider>
    </SafeAreaView>
  );
}
export function Card({ children }: PropsWithChildren) {
  return <View style={styles.card}>{children}</View>;
}
export function Action({
  label,
  onPress,
  disabled = false,
  testID,
}: {
  label: string;
  onPress(): void;
  disabled?: boolean;
  testID?: string;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      testID={testID}
      style={({ pressed }) => [
        styles.button,
        (disabled || pressed) && styles.dim,
      ]}
    >
      <Label style={styles.buttonLabel}>{label}</Label>
    </Pressable>
  );
}
export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f4f3ee' },
  page: { padding: 20, gap: 16, alignItems: 'stretch' },
  text: {
    fontFamily: 'NotoGeorgian',
    color: '#193e3c',
    fontSize: 16,
    lineHeight: 25,
  },
  heading: { fontSize: 27, lineHeight: 38 },
  muted: { color: '#5a706d', fontSize: 14 },
  card: { backgroundColor: '#ffffff', borderRadius: 12, padding: 16, gap: 12 },
  button: {
    backgroundColor: '#236c62',
    minHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 12,
  },
  buttonLabel: { color: '#ffffff', textAlign: 'center' },
  dim: { opacity: 0.45 },
  error: { color: '#a23434' },
  row: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});
