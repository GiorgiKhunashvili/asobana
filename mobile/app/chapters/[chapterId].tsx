import { router, useLocalSearchParams } from 'expo-router';
import { Page, Label, Action } from '../../src/components/PrototypePrimitives';
import { useGameStore } from '../../src/state/gameStore';
import { selectLevels } from '../../src/engine/selectors';
import { catalog } from '../../src/content/catalog';
import { routes, singleParam } from '../../src/navigation/routes';
export default function Levels() {
  const params = useLocalSearchParams<{ chapterId: string }>();
  const chapterId = singleParam(params.chapterId);
  const game = useGameStore((state) => state.game);
  if (!game) return null;
  if (!catalog.chapters.some((chapter) => chapter.id === chapterId))
    return (
      <Page>
        <Label>Unknown chapter</Label>
      </Page>
    );
  return (
    <Page>
      {selectLevels(game, catalog)
        .filter((level) => level.chapterId === chapterId)
        .map((level) => (
          <Action
            key={level.id}
            label={`${level.number} · ${level.title}${level.completed ? ' ✓' : ''}${!level.unlocked ? ' · Locked' : ''}`}
            disabled={!level.unlocked}
            onPress={() => router.push(routes.game(level.id))}
          />
        ))}
    </Page>
  );
}
