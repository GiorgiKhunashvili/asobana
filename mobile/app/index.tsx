import { router } from 'expo-router';
import {
  Page,
  Label,
  Card,
  Action,
  styles,
} from '../src/components/PrototypePrimitives';
import { useGameStore } from '../src/state/gameStore';
import { routes } from '../src/navigation/routes';
export default function Home() {
  const game = useGameStore((state) => state.game);
  if (!game) return null;
  return (
    <Page>
      <Label style={styles.heading}>ქართული სიტყვები</Label>
      <Label>შეაერთე ასოები და შეავსე კროსვორდი.</Label>
      <Card>
        <Label>{game.coins} მონეტა · Coins</Label>
        <Action
          label="გაგრძელება · Continue"
          onPress={() => router.push(routes.game(game.currentLevelId))}
        />
      </Card>
      <Action
        label="თავები · Chapters"
        onPress={() => router.push('/chapters')}
      />
      <Action
        label="პარამეტრები · Settings"
        onPress={() => router.push('/settings')}
      />
      <Action label="მონეტები · Coins" onPress={() => router.push('/shop')} />
      <Label style={styles.muted}>
        Offline prototype · 4 levels · Temporary presentation
      </Label>
    </Page>
  );
}
