import { Switch, View } from 'react-native';
import { Page, Label, styles } from '../src/components/PrototypePrimitives';
import { gameStore, useGameStore } from '../src/state/gameStore';
export default function Settings() {
  const game = useGameStore((state) => state.game);
  const busy = useGameStore((state) => state.busy);
  const error = useGameStore((state) => state.error);
  if (!game) return null;
  return (
    <Page>
      {(['sound', 'haptics'] as const).map((key) => (
        <View key={key} style={styles.row}>
          <Label>
            {key === 'sound' ? 'ხმა · Sound' : 'ვიბრაცია · Haptics'}
          </Label>
          <Switch
            accessibilityLabel={key}
            disabled={busy}
            value={game.settings[key]}
            onValueChange={(value) => {
              void gameStore
                .getState()
                .dispatch({
                  type: 'settings',
                  settings: { ...game.settings, [key]: value },
                })
                .catch(() => undefined);
            }}
          />
        </View>
      ))}
      {error && <Label style={styles.error}>{error}</Label>}
      <Label>Settings are saved offline.</Label>
    </Page>
  );
}
