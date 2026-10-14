import { router } from 'expo-router';
import {
  Page,
  Label,
  Card,
  Action,
} from '../../src/components/PrototypePrimitives';
import { useGameStore } from '../../src/state/gameStore';
import { selectChapters } from '../../src/engine/selectors';
import { catalog } from '../../src/content/catalog';
import { routes } from '../../src/navigation/routes';
export default function Chapters() {
  const game = useGameStore((state) => state.game);
  if (!game) return null;
  return (
    <Page>
      {selectChapters(game, catalog).map((chapter) => (
        <Card key={chapter.id}>
          <Label>
            {chapter.title} · {chapter.completedLevels}/{chapter.totalLevels}
          </Label>
          <Action
            label={chapter.unlocked ? 'გახსნა · Open' : 'ჩაკეტილია · Locked'}
            disabled={!chapter.unlocked}
            onPress={() => router.push(routes.chapter(chapter.id))}
          />
        </Card>
      ))}
    </Page>
  );
}
