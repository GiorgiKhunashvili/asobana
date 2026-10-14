import { router, useLocalSearchParams } from 'expo-router';
import { nextLevelId } from '../../src/engine/game';
import { catalog } from '../../src/content/catalog';
import { routes, singleParam } from '../../src/navigation/routes';
import { useGameStore } from '../../src/state/gameStore';
import {
  Action,
  Label,
  Page,
  styles,
} from '../../src/components/PrototypePrimitives';
export default function Victory() {
  const params = useLocalSearchParams<{ levelId: string }>();
  const id = singleParam(params.levelId);
  const game = useGameStore((state) => state.game);
  if (!game || !id || !game.progress[id]?.completed)
    return (
      <Page>
        <Label>Complete the level first.</Label>
        <Action label="Home" onPress={() => router.replace('/')} />
      </Page>
    );
  const next = nextLevelId(catalog, id);
  return (
    <Page>
      <Label style={styles.heading}>გილოცავ!</Label>
      <Label>დონე დასრულებულია · Level completed</Label>
      <Label>{game.coins} მონეტა · Coins</Label>
      {next ? (
        <Action
          label="შემდეგი დონე · Next level"
          onPress={() => router.replace(routes.game(next))}
        />
      ) : (
        <Label>
          ოთხივე დონე დასრულებულია · All prototype levels completed!
        </Label>
      )}
      <Action label="მთავარი · Home" onPress={() => router.replace('/')} />
    </Page>
  );
}
