import type { BottomTabBarProps } from 'expo-router/js-tabs';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { palette, space } from '../theme';
import { Icon, type IconName } from './Icon';
import { Txt } from './Text';

/** The main screens, keyed by their route file in app/(tabs), in bar order. */
const TABS: Readonly<
  Record<string, { label: string; icon: IconName; testID: string }>
> = {
  index: { label: 'მოგზაურობა', icon: 'route', testID: 'tab-journey' },
  album: { label: 'ალბომი', icon: 'card', testID: 'tab-album' },
  settings: { label: 'პარამეტრები', icon: 'sliders', testID: 'tab-settings' },
};

/** Android has no "tabbar" role and throws on it at launch; "tablist" is its
 * equivalent. */
export function tabBarRole(os: string = Platform.OS) {
  return os === 'ios' ? 'tabbar' : 'tablist';
}

/** Enamel bottom bar shared by the journey path, the album and settings. */
export function TabBar({ state, navigation, insets }: BottomTabBarProps) {
  return (
    <View
      accessibilityRole={tabBarRole()}
      style={[
        styles.tabs,
        { paddingBottom: Math.max(insets.bottom, space.sm) },
      ]}
    >
      {state.routes.map((route, index) => {
        const tab = TABS[route.name];
        if (!tab) return null;
        const active = index === state.index;
        return (
          <Pressable
            key={route.key}
            accessibilityRole="tab"
            accessibilityLabel={tab.label}
            accessibilityState={{ selected: active }}
            testID={tab.testID}
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!active && !event.defaultPrevented)
                navigation.navigate(route.name, route.params);
            }}
            style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
          >
            <View style={[styles.icon, active && styles.iconActive]}>
              <Icon
                name={tab.icon}
                size={22}
                color={active ? palette.goldLight : palette.textMuted}
              />
            </View>
            <Txt
              variant="caption"
              numberOfLines={1}
              color={active ? palette.goldLight : palette.textMuted}
              style={styles.label}
            >
              {tab.label}
            </Txt>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: space.sm,
    backgroundColor: '#120C24',
    borderTopWidth: 1,
    borderTopColor: 'rgba(227, 182, 90, 0.25)',
  },
  tab: { alignItems: 'center', gap: 3, minWidth: 88, minHeight: 48 },
  pressed: { opacity: 0.8 },
  icon: {
    width: 48,
    height: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconActive: {
    backgroundColor: 'rgba(227, 182, 90, 0.18)',
    borderWidth: 1.5,
    borderColor: 'rgba(227, 182, 90, 0.6)',
  },
  label: { fontSize: 11, lineHeight: 15 },
});
