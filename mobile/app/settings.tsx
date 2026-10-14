import { StyleSheet, Switch, View } from 'react-native';
import { Card, CardRow } from '../src/components/Card';
import { Icon, type IconName } from '../src/components/Icon';
import { Screen, TopBar } from '../src/components/Screen';
import { Txt } from '../src/components/Text';
import type { Settings as GameSettings } from '../src/models/types';
import { gameStore, useGameStore } from '../src/state/gameStore';
import { levelTone, palette, space } from '../src/theme';

const OPTIONS: readonly {
  key: keyof GameSettings;
  icon: IconName;
  label: string;
  detail: string;
}[] = [
  {
    key: 'sound',
    icon: 'sound',
    label: 'ხმა',
    detail: 'ხმოვანი სიგნალი სიტყვის პოვნისას',
  },
  {
    key: 'haptics',
    icon: 'haptics',
    label: 'ვიბრაცია',
    detail: 'მსუბუქი ბიძგი ასოების შეერთებისას',
  },
];

export default function Settings() {
  const game = useGameStore((state) => state.game);
  const busy = useGameStore((state) => state.busy);
  const error = useGameStore((state) => state.error);
  if (!game) return null;
  return (
    <Screen
      tone={levelTone(game.currentLevelId)}
      header={<TopBar title="პარამეტრები" />}
      contentStyle={styles.content}
    >
      <Card>
        {OPTIONS.map((option, index) => (
          <View key={option.key}>
            {index > 0 && <View style={styles.divider} />}
            <CardRow>
              <Icon name={option.icon} size={24} color={palette.gold} />
              <View style={styles.text}>
                <Txt variant="bodyStrong">{option.label}</Txt>
                <Txt variant="caption" color={palette.textMuted}>
                  {option.detail}
                </Txt>
              </View>
              <Switch
                accessibilityLabel={option.label}
                testID={`setting-${option.key}`}
                disabled={busy}
                value={game.settings[option.key]}
                trackColor={{
                  false: 'rgba(248, 240, 222, 0.22)',
                  true: palette.turquoise,
                }}
                thumbColor={palette.ivory}
                ios_backgroundColor="rgba(248, 240, 222, 0.22)"
                onValueChange={(value) => {
                  void gameStore
                    .getState()
                    .dispatch({
                      type: 'settings',
                      settings: { ...game.settings, [option.key]: value },
                    })
                    .catch(() => undefined);
                }}
              />
            </CardRow>
          </View>
        ))}
      </Card>
      {error && (
        <Txt accessibilityRole="alert" color={palette.pomegranateLight}>
          პარამეტრი ვერ შეინახა: {error}. წინა მნიშვნელობა დარჩა — სცადე
          ხელახლა.
        </Txt>
      )}
      <Txt variant="caption" color={palette.textMuted} style={styles.note}>
        პარამეტრები და პროგრესი ინახება ამ მოწყობილობაზე. ინტერნეტი საჭირო არ
        არის.
      </Txt>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { gap: space.lg, paddingTop: space.sm },
  text: { flex: 1 },
  divider: {
    height: 1,
    backgroundColor: palette.hairline,
    marginVertical: space.sm,
  },
  note: { textAlign: 'center', paddingHorizontal: space.lg },
});
