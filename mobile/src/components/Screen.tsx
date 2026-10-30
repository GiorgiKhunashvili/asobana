import { router } from 'expo-router';
import { useMemo, type PropsWithChildren, type ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { onScene, palette, space, type Tone } from '../theme';
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
  footer,
  overlay,
  children,
  contentStyle,
  glowY,
  veil = 0,
  tabbed = false,
}: PropsWithChildren<{
  readonly tone: Tone;
  readonly header?: ReactNode;
  /** Fixed safe-area footer, outside the scrolling/gesture content. */
  readonly footer?: ReactNode;
  /** Drawn over the content only, so it can never cover the header or footer. */
  readonly overlay?: ReactNode;
  readonly contentStyle?: ViewStyle;
  readonly glowY?: number;
  /** Darkens the painting for screens that are mostly text and cards (0–1). */
  readonly veil?: number;
  /** Above the bottom tab bar, which already keeps clear of the home indicator. */
  readonly tabbed?: boolean;
}>) {
  const scrollGesture = useMemo(() => Gesture.Native(), []);
  return (
    <View style={[styles.root, { backgroundColor: tone.scene.sky }]}>
      <Backdrop
        tone={tone}
        veil={veil}
        {...(glowY === undefined ? {} : { glowY })}
      />
      <SafeAreaView
        style={styles.root}
        edges={
          tabbed ? ['top', 'left', 'right'] : ['top', 'left', 'right', 'bottom']
        }
      >
        {header}
        <View style={styles.root}>
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
          {overlay}
        </View>
        {footer}
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
          <Display
            variant="eyebrow"
            color={palette.goldLight}
            numberOfLines={1}
            style={onScene}
          >
            {eyebrow}
          </Display>
        )}
        {title && (
          <Display variant="heading" numberOfLines={1} style={onScene}>
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
