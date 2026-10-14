import { router } from 'expo-router';
import { useMemo, type PropsWithChildren, type ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { palette, space, type Tone } from '../theme';
import { Backdrop } from './Backdrop';
import { RoundButton } from './Buttons';
import { GestureScrollContext } from './GestureScrollContext';
import { Display } from './Text';

/**
 * Screen frame. The scroll view is wrapped in a native gesture that the letter
 * wheel blocks while a word is traced (see INTEGRATION_CONTRACT.md); keep it.
 */
export function Screen({
  tone,
  header,
  children,
  contentStyle,
  glowY,
}: PropsWithChildren<{
  readonly tone: Tone;
  readonly header?: ReactNode;
  readonly contentStyle?: ViewStyle;
  readonly glowY?: number;
}>) {
  const scrollGesture = useMemo(() => Gesture.Native(), []);
  return (
    <View style={[styles.root, { backgroundColor: tone.ground[1] }]}>
      <Backdrop tone={tone} {...(glowY === undefined ? {} : { glowY })} />
      <SafeAreaView
        style={styles.root}
        edges={['top', 'left', 'right', 'bottom']}
      >
        {header}
        <GestureScrollContext.Provider value={scrollGesture}>
          <GestureDetector gesture={scrollGesture}>
            <ScrollView
              contentContainerStyle={[styles.content, contentStyle]}
              showsVerticalScrollIndicator={false}
            >
              {children}
            </ScrollView>
          </GestureDetector>
        </GestureScrollContext.Provider>
      </SafeAreaView>
    </View>
  );
}

export function goBack(): void {
  if (router.canGoBack()) router.back();
  else router.replace('/');
}

/** Back control, centered Mtavruli title with an optional eyebrow, and a trailing slot. */
export function TopBar({
  title,
  eyebrow,
  trailing,
  onBack = goBack,
}: {
  readonly title?: string;
  readonly eyebrow?: string;
  readonly trailing?: ReactNode;
  readonly onBack?: (() => void) | null;
}) {
  return (
    <View style={styles.bar}>
      <View style={styles.side}>
        {onBack && (
          <RoundButton
            label="უკან"
            icon="back"
            size={44}
            onPress={onBack}
            testID="back"
          />
        )}
      </View>
      <View style={styles.center} accessibilityRole="header">
        {eyebrow && (
          <Display variant="eyebrow" color={palette.gold} numberOfLines={1}>
            {eyebrow}
          </Display>
        )}
        {title && (
          <Display variant="heading" numberOfLines={1}>
            {title}
          </Display>
        )}
      </View>
      <View style={[styles.side, styles.trailing]}>{trailing}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: {
    flexGrow: 1,
    paddingHorizontal: space.lg,
    paddingBottom: space.lg,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: space.lg,
    paddingTop: space.xs,
    paddingBottom: space.sm,
    minHeight: 60,
  },
  side: { width: 96, flexDirection: 'row', alignItems: 'center' },
  trailing: { justifyContent: 'flex-end' },
  center: { flex: 1, alignItems: 'center' },
});
