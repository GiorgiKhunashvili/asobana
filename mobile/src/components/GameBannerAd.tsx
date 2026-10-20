import { useIsFocused } from 'expo-router';
import { useEffect, useState } from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import { loadNativeAdsSdk } from '../ads/nativeAdsSdk';
import { palette } from '../theme';
import { Txt } from './Text';

/** Fixed 50pt creative plus a 17pt separation, 8pt bottom padding and divider.
 * Reserve this before loading so controls never jump when an ad arrives. */
export const GAME_BANNER_HEIGHT = 76;
const requestOptions = { requestNonPersonalizedAdsOnly: true };
type AdsSdk = Awaited<ReturnType<typeof loadNativeAdsSdk>>;

/** Demo only. No collapsing/expanding creative or publisher ad unit is used. */
export function GameBannerAd({ visible = true }: { visible?: boolean }) {
  const focused = useIsFocused();
  const [foreground, setForeground] = useState(
    AppState.currentState === 'active',
  );
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) =>
      setForeground(state === 'active'),
    );
    return () => subscription.remove();
  }, []);
  return (
    <View testID="game-banner-slot" style={styles.footer}>
      {focused && foreground && visible ? <Banner /> : null}
    </View>
  );
}

function Banner() {
  const [sdk, setSdk] = useState<AdsSdk | null>(null);
  const [status, setStatus] = useState<'loading' | 'loaded' | 'failed'>(
    'loading',
  );
  useEffect(() => {
    let active = true;
    void loadNativeAdsSdk().then(
      (value) => {
        if (active) setSdk(value);
      },
      () => {
        if (active) setStatus('failed');
      },
    );
    return () => {
      active = false;
    };
  }, []);
  return (
    <View style={styles.banner}>
      {status !== 'loaded' && (
        <View pointerEvents="none" style={styles.placeholder}>
          <Txt variant="caption" color={palette.textMuted}>
            {status === 'failed'
              ? 'რეკლამა ვერ ჩაიტვირთა'
              : 'რეკლამა იტვირთება…'}
          </Txt>
        </View>
      )}
      {sdk && (
        <sdk.BannerAd
          unitId={sdk.TestIds.BANNER}
          size={sdk.BannerAdSize.BANNER}
          requestOptions={requestOptions}
          onAdLoaded={() => setStatus('loaded')}
          onAdFailedToLoad={() => setStatus('failed')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: GAME_BANNER_HEIGHT,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: palette.hairline,
    backgroundColor: palette.ink,
  },
  banner: { width: 320, height: 50 },
  placeholder: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
