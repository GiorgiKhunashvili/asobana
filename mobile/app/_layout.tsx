import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { gameStore, useGameStore } from '../src/state/gameStore';
import { useGameFeedback } from '../src/services/feedback';
import { Backdrop } from '../src/components/Backdrop';
import { PrimaryButton } from '../src/components/Buttons';
import { Display, Txt } from '../src/components/Text';
import { chapterTone, fontAssets, palette, space } from '../src/theme';

function Feedback() {
  useGameFeedback();
  return null;
}

const tone = chapterTone(null);

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts(fontAssets);
  const status = useGameStore((state) => state.status);
  const error = useGameStore((state) => state.error);
  useEffect(() => {
    void gameStore.getState().initialize();
  }, []);
  const failed = status === 'error' || fontError;
  return (
    <GestureHandlerRootView
      style={[styles.root, { backgroundColor: tone.ground[1] }]}
    >
      <SafeAreaProvider>
        <StatusBar style="light" />
        {failed || status !== 'ready' || !fontsLoaded ? (
          <View style={styles.center}>
            <Backdrop tone={tone} glowY={0.45} />
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
              <ActivityIndicator color={palette.gold} size="large" />
            )}
          </View>
        ) : (
          <>
            <Feedback />
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: tone.ground[1] },
                animation: 'slide_from_right',
              }}
            >
              <Stack.Screen name="index" options={{ animation: 'fade' }} />
              <Stack.Screen
                name="victory/[levelId]"
                options={{ animation: 'fade' }}
              />
            </Stack>
          </>
        )}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  failure: { padding: space.xl, gap: space.lg, alignSelf: 'stretch' },
});
