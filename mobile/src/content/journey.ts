import centralEuropeJourney from '../../../content/journey-v29.json';
import portugalMoroccoJourney from '../../../content/journey-v28.json';
import originalJourney from '../../../content/journey-v13.json';
import spainJourney from '../../../content/journey-v23.json';
import tunisiaJourney from '../../../content/journey-v22.json';
import maltaJourney from '../../../content/journey-v21.json';

/** Historical saves and packs retain their original journey size and identity. */
export function journeyForRevision(revision: number) {
  if (revision >= 29) return centralEuropeJourney;
  if (revision >= 28) return portugalMoroccoJourney;
  if (revision >= 23) return spainJourney;
  if (revision >= 22) return tunisiaJourney;
  return revision >= 21 ? maltaJourney : originalJourney;
}

export const MIN_REQUIRED_GAP = originalJourney.minRequiredGap;
