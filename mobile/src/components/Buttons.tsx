import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View, type ViewStyle } from 'react-native';
import { palette, radius, touch } from '../theme';
import { Icon, type IconName } from './Icon';
import { Txt } from './Text';

interface BaseProps {
  readonly label: string;
  readonly onPress: () => void;
  readonly disabled?: boolean;
  readonly testID?: string;
  readonly accessibilityHint?: string;
}

/** Gold plaque: the one primary action on a screen. */
export function PrimaryButton({
  label,
  detail,
  icon,
  onPress,
  disabled = false,
  testID,
  accessibilityHint,
  style,
}: BaseProps & {
  readonly detail?: string;
  readonly icon?: IconName;
  readonly style?: ViewStyle;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={detail ? `${label}, ${detail}` : label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      testID={testID}
      style={({ pressed }) => [
        styles.primary,
        pressed && styles.primaryPressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <View style={styles.primaryContent}>
        {icon && <Icon name={icon} size={22} color={palette.ink} />}
        <View style={styles.primaryText}>
          <Txt variant="label" color={palette.ink} style={styles.primaryLabel}>
            {label}
          </Txt>
          {detail && (
            <Txt variant="caption" color="rgba(27, 24, 56, 0.72)">
              {detail}
            </Txt>
          )}
        </View>
      </View>
    </Pressable>
  );
}

/** Enamel plate with a gold wire edge, for secondary choices. */
export function SecondaryButton({
  label,
  icon,
  onPress,
  disabled = false,
  testID,
  accessibilityHint,
  style,
}: BaseProps & { readonly icon?: IconName; readonly style?: ViewStyle }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      testID={testID}
      style={({ pressed }) => [
        styles.secondary,
        pressed && styles.secondaryPressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      {icon && <Icon name={icon} size={20} color={palette.gold} />}
      <Txt variant="label">{label}</Txt>
    </Pressable>
  );
}

/** Round enamel control. `badge` sits on the lower rim (e.g. a hint price). */
export function RoundButton({
  label,
  icon,
  onPress,
  disabled = false,
  testID,
  accessibilityHint,
  size = 54,
  badge,
  active = false,
}: BaseProps & {
  readonly icon: IconName;
  readonly size?: number;
  readonly badge?: ReactNode;
  readonly active?: boolean;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled, selected: active }}
      disabled={disabled}
      onPress={onPress}
      testID={testID}
      hitSlop={Math.max(0, (touch - size) / 2)}
      style={({ pressed }) => [
        styles.round,
        { width: size, height: size, borderRadius: size / 2 },
        active && styles.roundActive,
        pressed && styles.roundPressed,
        disabled && styles.disabled,
      ]}
    >
      <Icon
        name={icon}
        size={Math.round(size * 0.48)}
        color={active ? palette.ink : palette.ivory}
      />
      {badge && <View style={styles.badge}>{badge}</View>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primary: {
    minHeight: 58,
    borderRadius: radius.card,
    backgroundColor: palette.gold,
    borderBottomWidth: 4,
    borderBottomColor: palette.goldDeep,
    borderTopWidth: 1.5,
    borderTopColor: palette.goldLight,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    overflow: 'hidden',
  },
  primaryPressed: {
    borderBottomWidth: 1,
    marginTop: 3,
    backgroundColor: '#D9A94B',
  },
  primaryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  primaryText: { alignItems: 'center' },
  primaryLabel: { fontSize: 17 },
  secondary: {
    minHeight: touch + 4,
    borderRadius: radius.card,
    borderWidth: 1.5,
    borderColor: palette.hairline,
    backgroundColor: 'rgba(248, 240, 222, 0.06)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 16,
  },
  secondaryPressed: { backgroundColor: 'rgba(248, 240, 222, 0.14)' },
  round: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: palette.gold,
    backgroundColor: 'rgba(10, 16, 40, 0.55)',
  },
  roundActive: { backgroundColor: palette.gold },
  roundPressed: { transform: [{ scale: 0.92 }] },
  badge: { position: 'absolute', bottom: -10, alignSelf: 'center' },
  disabled: { opacity: 0.42 },
});
