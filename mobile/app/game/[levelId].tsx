import { useLocalSearchParams } from 'expo-router';
import { GameplayScreen } from '../../src/screens/GameplayScreen';
import { singleParam } from '../../src/navigation/routes';
export default function Game() {
  const params = useLocalSearchParams<{ levelId: string }>();
  return <GameplayScreen levelId={singleParam(params.levelId)} />;
}
