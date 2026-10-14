import { DEFAULT_ECONOMY } from '../src/engine/game';
import { Page, Label } from '../src/components/PrototypePrimitives';
import { useGameStore } from '../src/state/gameStore';
export default function Coins() {
  const coins = useGameStore((state) => state.game?.coins ?? 0);
  return (
    <Page>
      <Label>{coins} მონეტა · Coins</Label>
      <Label>Finish a level: +{DEFAULT_ECONOMY.completionReward}</Label>
      <Label>Find a bonus word: +{DEFAULT_ECONOMY.bonusReward}</Label>
      <Label>
        Letter hint: {DEFAULT_ECONOMY.cellHintCost} · Word hint:{' '}
        {DEFAULT_ECONOMY.wordHintCost}
      </Label>
      <Label>Purchases are not available in this prototype.</Label>
    </Page>
  );
}
