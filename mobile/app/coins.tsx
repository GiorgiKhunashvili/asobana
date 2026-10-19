import { StyleSheet, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Card, CardRow } from '../src/components/Card';
import { BonusMeter } from '../src/components/BonusMeter';
import { RewardedAdCard } from '../src/components/RewardedAdCard';
import { CoinGlyph } from '../src/components/CoinBadge';
import { Icon, type IconName } from '../src/components/Icon';
import { Screen, TopBar } from '../src/components/Screen';
import { Display, Txt } from '../src/components/Text';
import { DEFAULT_ECONOMY } from '../src/engine/game';
import { BONUS_GOAL, freeCellHints } from '../src/engine/bonusRewards';
import { useGameStore } from '../src/state/gameStore';
import { progressTone } from '../src/screens/nextLevel';
import { levelTone, palette, space } from '../src/theme';

function Line({
  icon,
  label,
  amount,
}: {
  icon: IconName;
  label: string;
  amount: string;
}) {
  return (
    <CardRow>
      <Icon name={icon} size={22} color={palette.gold} />
      <Txt style={styles.grow}>{label}</Txt>
      <View style={styles.amount}>
        <CoinGlyph size={16} />
        <Txt variant="number">{amount}</Txt>
      </View>
    </CardRow>
  );
}

/** Earn optional test-ad coins and review the game's rewards and hint prices. */
export default function Coins() {
  const { reason, hint } = useLocalSearchParams<{
    reason?: string;
    hint?: string;
  }>();
  const game = useGameStore((state) => state.game);
  const coins = useGameStore((state) => state.game?.coins ?? 0);
  const hintCost =
    hint === 'cell'
      ? game && freeCellHints(game) > 0
        ? 0
        : DEFAULT_ECONOMY.cellHintCost
      : DEFAULT_ECONOMY.wordHintCost;
  return (
    <Screen
      veil={0.55}
      tone={game ? progressTone(game) : levelTone(null)}
      header={<TopBar title="მონეტები" />}
      contentStyle={styles.content}
    >
      <View
        style={styles.balance}
        accessible
        accessibilityLabel={`ბალანსი: ${coins} მონეტა`}
      >
        <CoinGlyph size={64} />
        <Txt variant="hero" color={palette.goldLight}>
          {coins}
        </Txt>
      </View>
      {reason === 'hint' && coins < hintCost && (
        <Txt accessibilityRole="alert" style={styles.note}>
          მინიშნებისთვის მონეტები არ გყოფნის. შეგიძლია ნახო რეკლამა ან გააგრძელო
          თამაში.
        </Txt>
      )}
      <RewardedAdCard />
      <Card>
        <Display variant="eyebrow" color={palette.gold}>
          ჯილდოები
        </Display>
        <Line
          icon="check"
          label="დონის გავლა"
          amount={`+${DEFAULT_ECONOMY.completionReward}`}
        />
        <Line
          icon="star"
          label="ბონუს სიტყვა"
          amount={`+${DEFAULT_ECONOMY.bonusReward}`}
        />
      </Card>
      {game && (
        <Card>
          <BonusMeter
            progress={game.bonusRewards.totalFound % BONUS_GOAL}
            freeHints={freeCellHints(game)}
          />
        </Card>
      )}
      <Card>
        <Display variant="eyebrow" color={palette.gold}>
          მინიშნებები
        </Display>
        <Line
          icon="hintLetter"
          label="ერთი ასო"
          amount={`${DEFAULT_ECONOMY.cellHintCost}`}
        />
        <Line
          icon="hintWord"
          label="მთელი სიტყვა"
          amount={`${DEFAULT_ECONOMY.wordHintCost}`}
        />
      </Card>
      <Txt variant="caption" color={palette.textMuted} style={styles.note}>
        მონეტები თამაშით და სურვილისამებრ რეკლამის ნახვით გროვდება. შესყიდვები
        ამ ვერსიაში არ არის.
      </Txt>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { gap: space.lg, paddingTop: space.sm },
  balance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.md,
    paddingVertical: space.lg,
  },
  grow: { flex: 1 },
  amount: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  note: { textAlign: 'center', paddingHorizontal: space.lg },
});
