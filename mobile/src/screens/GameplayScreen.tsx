import { useCallback, useEffect, useMemo } from 'react';
import { ActivityIndicator, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import { catalog } from '../content/catalog';
import { isUnlocked } from '../engine/game';
import { selectGameplay } from '../engine/selectors';
import { gameStore, useGameStore } from '../state/gameStore';
import { CrosswordBoard } from '../components/CrosswordBoard';
import { LetterWheel } from '../components/LetterWheel';
import {
  Action,
  Card,
  Label,
  Page,
  styles,
} from '../components/PrototypePrimitives';
import { eventMessage } from '../services/messages';
import { tileHaptic } from '../services/feedback';
import { routes } from '../navigation/routes';
export function GameplayScreen({ levelId }: { levelId: string | null }) {
  const game = useGameStore((state) => state.game);
  const busy = useGameStore((state) => state.busy);
  const error = useGameStore((state) => state.error);
  const batch = useGameStore((state) => state.eventBatch);
  const { width } = useWindowDimensions();
  const unlocked = Boolean(
    game && levelId && isUnlocked(game, catalog, levelId),
  );
  useEffect(() => {
    if (unlocked && levelId && game?.currentLevelId !== levelId)
      void gameStore
        .getState()
        .dispatch({ type: 'open-level', levelId })
        .catch(() => undefined);
  }, [unlocked, levelId, game?.currentLevelId]);
  const model = useMemo(
    () =>
      game && game.currentLevelId === levelId
        ? selectGameplay(game, catalog)
        : null,
    [game, levelId],
  );
  const submit = useCallback(
    (tileIds: readonly string[]) => {
      if (levelId)
        void gameStore
          .getState()
          .dispatch({ type: 'submit', levelId, tileIds })
          .catch(() => undefined);
    },
    [levelId],
  );
  if (!unlocked)
    return (
      <Page>
        <Label>Unknown or locked level</Label>
        <Action label="Home" onPress={() => router.replace('/')} />
      </Page>
    );
  if (!model)
    return (
      <Page>
        {error ? (
          <>
            <Label style={styles.error}>{error}</Label>
            <Action
              label="Retry"
              onPress={() => {
                if (levelId)
                  void gameStore
                    .getState()
                    .dispatch({ type: 'open-level', levelId })
                    .catch(() => undefined);
              }}
            />
          </>
        ) : (
          <ActivityIndicator />
        )}
      </Page>
    );
  return (
    <Page>
      <Label style={styles.heading}>{model.title}</Label>
      <Label>
        {model.coins} მონეტა · {model.foundWords}/{model.totalWords} სიტყვა ·
        Bonus {model.bonusCount}
      </Label>
      <CrosswordBoard cells={model.cells} grid={model.grid} />
      <Label accessibilityLiveRegion="polite" style={{ minHeight: 25 }}>
        {eventMessage(batch.events)}
      </Label>
      {error && (
        <Label accessibilityRole="alert" style={styles.error}>
          Save failed: {error}. Your previous progress is intact; retry the
          action.
        </Label>
      )}
      {model.completed ? (
        <Card>
          <Label>დონე დასრულებულია · Level completed</Label>
          <Action
            label="გილოცავ! · Victory"
            onPress={() => router.replace(routes.victory(model.levelId))}
          />
        </Card>
      ) : (
        <>
          <LetterWheel
            key={model.levelId}
            tiles={model.tiles}
            size={Math.min(280, width - 48)}
            disabled={busy}
            onSubmit={submit}
            onTileEntered={tileHaptic}
          />
          <Action
            label={`ასოს მინიშნება · Letter hint (${model.cellHintCost})`}
            disabled={busy || !model.canUseCellHint}
            onPress={() => {
              void gameStore
                .getState()
                .dispatch({
                  type: 'hint',
                  levelId: model.levelId,
                  kind: 'cell',
                })
                .catch(() => undefined);
            }}
          />
          <Action
            label={`სიტყვის მინიშნება · Word hint (${model.wordHintCost})`}
            disabled={busy || !model.canUseWordHint}
            onPress={() => {
              void gameStore
                .getState()
                .dispatch({
                  type: 'hint',
                  levelId: model.levelId,
                  kind: 'word',
                })
                .catch(() => undefined);
            }}
          />
        </>
      )}
    </Page>
  );
}
