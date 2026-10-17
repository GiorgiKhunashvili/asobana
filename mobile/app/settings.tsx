import {
  AccessibilityInfo,
  Alert,
  StyleSheet,
  Switch,
  View,
} from 'react-native';
import Constants from 'expo-constants';
import { SecondaryButton } from '../src/components/Buttons';
import { Card, CardRow } from '../src/components/Card';
import { Icon, type IconName } from '../src/components/Icon';
import { goBack, Screen, TopBar } from '../src/components/Screen';
import { StudioCredit } from '../src/components/StudioCredit';
import { Txt } from '../src/components/Text';
import { DEFAULT_ECONOMY } from '../src/engine/game';
import type { Settings as GameSettings } from '../src/models/types';
import { gameStore, useGameStore } from '../src/state/gameStore';
import { progressTone } from '../src/screens/nextLevel';
import { palette, space } from '../src/theme';

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

/** Ask first; a reset cannot be undone. Preferences (sound, haptics) stay. */
function confirmReset() {
  Alert.alert(
    'დავიწყოთ თავიდან?',
    'გავლილი დონეები, მონეტები და მინიშნებები წაიშლება. ამის დაბრუნება შეუძლებელია.',
    [
      { text: 'გაუქმება', style: 'cancel' },
      {
        text: 'განულება',
        style: 'destructive',
        onPress: () => {
          gameStore
            .getState()
            .reset()
            .then(() => {
              AccessibilityInfo.announceForAccessibility('პროგრესი განულდა');
              goBack();
            })
            // A failed save keeps the old progress; the screen shows `error`.
            .catch(() => undefined);
        },
      },
    ],
  );
}

export default function Settings() {
  const game = useGameStore((state) => state.game);
  const busy = useGameStore((state) => state.busy);
  const error = useGameStore((state) => state.error);
  if (!game) return null;
  return (
    <Screen
      veil={0.55}
      tone={progressTone(game)}
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
      <Card>
        <CardRow>
          <Icon name="restart" size={24} color={palette.gold} />
          <View style={styles.text}>
            <Txt variant="bodyStrong">თავიდან დაწყება</Txt>
            <Txt variant="caption" color={palette.textMuted}>
              {`დაიწყებ პირველი დონიდან, ${DEFAULT_ECONOMY.initialCoins} მონეტით. ხმისა და ვიბრაციის პარამეტრები დარჩება.`}
            </Txt>
          </View>
        </CardRow>
        <SecondaryButton
          label="პროგრესის განულება"
          icon="restart"
          danger
          disabled={busy}
          testID="reset-progress"
          onPress={confirmReset}
        />
      </Card>
      {error && (
        <Txt accessibilityRole="alert" color={palette.pomegranateLight}>
          ცვლილება ვერ შეინახა: {error}. წინა მდგომარეობა უცვლელია — სცადე
          ხელახლა.
        </Txt>
      )}
      <Txt variant="caption" color={palette.textMuted} style={styles.note}>
        პარამეტრები და პროგრესი ინახება ამ მოწყობილობაზე. ინტერნეტი საჭირო არ
        არის.
      </Txt>
      <View style={styles.about} testID="about-studio">
        <StudioCredit width={132} />
        <Txt variant="caption" color={palette.textMuted}>
          {`ასობანა · ვერსია ${Constants.expoConfig?.version ?? ''}`}
        </Txt>
      </View>
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
  about: { alignItems: 'center', gap: space.sm, paddingVertical: space.md },
});
