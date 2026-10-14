import type { GameEvent } from '../models/types';
export function eventMessage(events: readonly GameEvent[]): string {
  const completed = events.find((event) => event.type === 'level-completed');
  if (completed?.type === 'level-completed')
    return `გილოცავ! +${completed.reward} მონეტა`;
  const rejected = events.find((event) => event.type === 'word-rejected');
  if (rejected?.type === 'word-rejected') {
    switch (rejected.reason) {
      case 'duplicate-word':
        return 'ეს სიტყვა უკვე ნაპოვნია · Already found';
      case 'insufficient-coins':
        return 'მონეტები არ გყოფნის · Not enough coins';
      case 'level-locked':
        return 'ეს დონე ჩაკეტილია · Level locked';
      default:
        return 'სცადე კიდევ · Try again';
    }
  }
  const bonus = events.find((event) => event.type === 'bonus-found');
  if (bonus?.type === 'bonus-found')
    return `${bonus.word} · ბონუსი +${bonus.reward}`;
  const found = events.find((event) => event.type === 'word-found');
  if (found?.type === 'word-found') return `${found.word} ✓`;
  return '';
}
