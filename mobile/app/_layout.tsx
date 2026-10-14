import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { gameStore, useGameStore } from '../src/state/gameStore';
import { useGameFeedback } from '../src/services/feedback';
import { Action, Label, styles } from '../src/components/PrototypePrimitives';
function Feedback() {
  useGameFeedback();
  return null;
}
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    NotoGeorgian: require('../assets/fonts/NotoSansGeorgian.ttf'),
  });
  const status = useGameStore((state) => state.status);
  const error = useGameStore((state) => state.error);
  useEffect(() => {
    void gameStore.getState().initialize();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        {status === 'error' || fontError ? (
          <View style={[styles.page, { flex: 1, justifyContent: 'center' }]}>
            <Label style={styles.heading}>Unable to load GeoWords</Label>
            <Label style={styles.error}>{error ?? fontError?.message}</Label>
            <Label>Your saved data has been preserved.</Label>
            <Action
              label="Retry loading"
              onPress={() => {
                void gameStore.getState().initialize();
              }}
            />
          </View>
        ) : status !== 'ready' || !fontsLoaded ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ActivityIndicator />
            <Label>იტვირთება…</Label>
          </View>
        ) : (
          <>
            <Feedback />
            <Stack
              screenOptions={{
                headerStyle: { backgroundColor: '#f4f3ee' },
                headerTintColor: '#193e3c',
                contentStyle: { backgroundColor: '#f4f3ee' },
                headerTitleStyle: { fontFamily: 'NotoGeorgian' },
              }}
            >
              <Stack.Screen name="index" options={{ title: 'GeoWords' }} />
              <Stack.Screen
                name="chapters/index"
                options={{ title: 'თავები · Chapters' }}
              />
              <Stack.Screen
                name="chapters/[chapterId]"
                options={{ title: 'დონეები · Levels' }}
              />
              <Stack.Screen
                name="game/[levelId]"
                options={{ title: 'ითამაშე · Play' }}
              />
              <Stack.Screen
                name="victory/[levelId]"
                options={{ title: 'გილოცავ! · Victory' }}
              />
              <Stack.Screen
                name="settings"
                options={{ title: 'პარამეტრები · Settings' }}
              />
              <Stack.Screen
                name="shop"
                options={{ title: 'მონეტები · Coins' }}
              />
            </Stack>
          </>
        )}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
