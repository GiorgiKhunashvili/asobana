import { Tabs } from 'expo-router/js-tabs';
import { TabBar } from '../../src/components/TabBar';
import { palette } from '../../src/theme';

/**
 * The app's main screens share one bottom bar; the board, victory, a single
 * postcard and the coins page open over it, full screen.
 */
export default function MainTabs() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: palette.night },
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="album" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
