import { Image } from 'react-native';

/** Exact cut-out of the approved logo (see scripts/build-studio-logo.py). */
const IVORY = require('../../assets/studio/spilo-games/spilo-games-ivory.png');
const ASPECT = 1256 / 585;

/** The Spilo Games studio logo, in ivory for the game's dark surfaces. */
export function StudioCredit({ width }: { readonly width: number }) {
  return (
    <Image
      source={IVORY}
      accessibilityLabel="Spilo Games"
      accessibilityRole="image"
      resizeMode="contain"
      style={{ width, height: width / ASPECT }}
    />
  );
}
