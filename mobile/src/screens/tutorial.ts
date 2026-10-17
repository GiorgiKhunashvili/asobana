import { BONUS_GOAL } from '../engine/bonusRewards';
import { DEFAULT_ECONOMY } from '../engine/game';
import type { Economy } from '../models/types';

/** The gameplay controls a tutorial step points at. */
export type TutorialAnchor = 'wheel' | 'hints' | 'inputMode' | 'bonus';

export interface TutorialStep {
  readonly anchor: TutorialAnchor;
  readonly title: string;
  readonly body: string;
}

/** First-time coach marks over the real board, in order. Prices follow the economy. */
export function tutorialSteps(
  economy: Economy = DEFAULT_ECONOMY,
): readonly TutorialStep[] {
  return [
    {
      anchor: 'wheel',
      title: 'შეაერთე ასოები',
      body: 'გაატარე თითი ასოებზე და შეადგინე სიტყვა. თითს რომ აიღებ, სწორი სიტყვა კროსვორდში ჩაიწერება. შუა ღილაკი ასოებს აურევს.',
    },
    {
      anchor: 'hints',
      title: 'მინიშნებები',
      body: `გაგიჭირდა? ქვედა ღილაკი ერთ ასოს გახსნის — ${economy.cellHintCost} მონეტა. ზედა ღილაკი მთელ სიტყვას გახსნის — ${economy.wordHintCost} მონეტა. მონეტებს დონეების გავლით აგროვებ.`,
    },
    {
      anchor: 'inputMode',
      title: 'შეხებით შეყვანა',
      body: 'თუ თითის გატარება გიჭირს, ეს ღილაკი ჩართავს შეხებით შეყვანას: შეეხე ასოებს თანმიმდევრობით და დააჭირე ✓-ს. ხელახლა დაჭერით ბორბალს დაუბრუნდები.',
    },
    {
      anchor: 'bonus',
      title: 'ბონუს სიტყვები',
      body: `ამ ასოებით სხვა სიტყვებიც შეგიძლია შეადგინო. თითო ბონუს სიტყვა ${economy.bonusReward} მონეტაა, ყოველი ${BONUS_GOAL} კი ასოს უფასო მინიშნებას გაძლევს.`,
    },
  ];
}
