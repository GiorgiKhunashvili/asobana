import { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { loadNativeAdsSdk } from '../src/ads/nativeAdsSdk';
import { SharedGameBanner } from '../src/components/GameBannerAd';
import { gameStore, useGameStore } from '../src/state/gameStore';
import { startErrorReporting } from '../src/services/errorReporting';
import { useGameFeedback } from '../src/services/feedback';
import { Backdrop } from '../src/components/Backdrop';
import { PrimaryButton } from '../src/components/Buttons';
import { LoadingLogo } from '../src/components/Logo';
import { StudioCredit } from '../src/components/StudioCredit';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Display, Txt } from '../src/components/Text';
import { chapterTone, fontAssets, palette, space } from '../src/theme';

// Before the first render, so a crash while launching is reported too.
startErrorReporting();

function Feedback() {
  useGameFeedback();
  return null;
}

/** Ask for ad consent once the first screen is up, where the law requires it,
 * rather than when the first ad loads in the middle of a level. */
function AdsConsentOnStart() {
  useEffect(() => {
    void loadNativeAdsSdk().catch(() => undefined);
  }, []);
  return null;
}

const tone = chapterTone(null);

/*
 * The native splash (night violet with the mark, see app.json) stays up until
 * this layout's first frame, then fades into the loading view below, which
 * draws the mark at the same size and position and sets its spark running.
 */
void SplashScreen.preventAutoHideAsync().catch(() => undefined);
SplashScreen.setOptions({ duration: 250, fade: true });
/**
 * The native splash lockup (scripts/build-splash.py): a 260 x 200 pt image,
 * `imageWidth` in app.json, with the 160 pt mark at its top centre. The loading
 * view rebuilds it in place, live mark plus the same name pixels.
 */
const SPLASH = { width: 260, height: 200 } as const;
const SPLASH_MARK = 160;
/**
 * Android 12+ shows its splash icon inside a centred circle that would cut the
 * name, so Android's native splash is the mark alone (app.json `android`), at
 * SPLASH_MARK and centred. Moving the lockup down keeps the mark in that spot
 * while the name appears beneath it.
 */
const LOCKUP_SHIFT =
  Platform.OS === 'android' ? SPLASH.height / 2 - SPLASH_MARK / 2 : 0;
const MARK_PAD = SPLASH_MARK * 0.08;
const SPLASH_NAME = require('../assets/branding/splash-name.png');
/** Long enough to read the studio credit, short enough to stay out of the way. */
const MIN_LOADING_MS = 800;

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts(fontAssets);
  const status = useGameStore((state) => state.status);
  const [shown, setShown] = useState(false);
  const error = useGameStore((state) => state.error);
  useEffect(() => {
    void gameStore.getState().initialize();
    void SplashScreen.hideAsync().catch(() => undefined);
    const timer = setTimeout(() => setShown(true), MIN_LOADING_MS);
    return () => clearTimeout(timer);
  }, []);
  const failed = status === 'error' || fontError;
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        {failed || status !== 'ready' || !fontsLoaded || !shown ? (
          <View style={styles.center}>
            {failed && <Backdrop tone={tone} glowY={0.45} />}
            {failed ? (
              <View style={styles.failure}>
                <Display variant="heading">თამაში ვერ ჩაიტვირთა</Display>
                <Txt accessibilityRole="alert" color={palette.pomegranateLight}>
                  {error ?? fontError?.message}
                </Txt>
                <Txt color={palette.textMuted}>
                  შენახული პროგრესი ხელუხლებელია. სცადე ხელახლა.
                </Txt>
                <PrimaryButton
                  label="ხელახლა ჩატვირთვა"
                  onPress={() => {
                    void gameStore.getState().initialize();
                  }}
                />
              </View>
            ) : (
              <>
                <View style={styles.lockup}>
                  <Image
                    source={SPLASH_NAME}
                    style={styles.lockupName}
                    accessibilityElementsHidden
                    importantForAccessibility="no-hide-descendants"
                  />
                  <View style={styles.lockupMark}>
                    <LoadingLogo size={SPLASH_MARK} />
                  </View>
                </View>
                <Animated.View
                  entering={FadeIn.delay(150).duration(400)}
                  style={styles.studio}
                >
                  <StudioCredit width={124} />
                </Animated.View>
              </>
            )}
          </View>
        ) : (
          <>
            <Feedback />
            <AdsConsentOnStart />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: palette.night },
                animation: 'slide_from_right',
              }}
            >
              <Stack.Screen name="(tabs)" options={{ animation: 'fade' }} />
              <Stack.Screen
                name="victory/[levelId]"
                options={{ animation: 'fade' }}
              />
            </Stack>
            {/* One banner over the gameplay footer, reused across levels. */}
            <SharedGameBanner />
          </>
        )}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  // Shows wherever no screen paints yet: transitions, and behind the splash.
  root: { flex: 1, backgroundColor: palette.night },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  studio: { position: 'absolute', bottom: 64, opacity: 0.85 },
  lockup: {
    width: SPLASH.width,
    height: SPLASH.height,
    transform: [{ translateY: LOCKUP_SHIFT }],
  },
  lockupName: { position: 'absolute', ...SPLASH },
  lockupMark: {
    position: 'absolute',
    left: (SPLASH.width - SPLASH_MARK) / 2 - MARK_PAD,
    top: -MARK_PAD,
  },
  failure: { padding: space.xl, gap: space.lg, alignSelf: 'stretch' },
});
