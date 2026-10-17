import { useLocalSearchParams } from 'expo-router';
import { Postcard } from '../../src/components/Postcard';
import { Screen, TopBar } from '../../src/components/Screen';
import { Txt } from '../../src/components/Text';
import { catalog } from '../../src/content/catalog';
import { selectPostcards } from '../../src/engine/postcards';
import { singleParam } from '../../src/navigation/routes';
import { useGameStore } from '../../src/state/gameStore';
import { chapterTone, space } from '../../src/theme';

export default function Destination() {
  const params = useLocalSearchParams<{ chapterId: string }>();
  const id = singleParam(params.chapterId);
  const game = useGameStore((state) => state.game);
  if (!game) return null;
  const card = selectPostcards(game, catalog).find(
    (item) => item.chapterId === id,
  );
  return (
    <Screen
      tone={chapterTone(id)}
      veil={0.65}
      header={<TopBar title="ბარათი" />}
      contentStyle={{
        gap: space.md,
        width: '100%',
        maxWidth: 500,
        alignSelf: 'center',
      }}
    >
      {card?.collected ? (
        <Postcard chapterId={card.chapterId} number={card.number} />
      ) : (
        <Txt>
          {card
            ? `ბარათის გასახსნელად გაიარე ადგილი ${card.number}.`
            : 'ბარათი ვერ მოიძებნა.'}
        </Txt>
      )}
    </Screen>
  );
}
