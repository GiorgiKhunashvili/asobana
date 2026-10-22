import { useIsFocused } from 'expo-router';
import { memo, useEffect, useId, useState, useSyncExternalStore } from 'react';
import { AppState, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { adUnitId } from '../ads/adUnits';
import { loadNativeAdsSdk } from '../ads/nativeAdsSdk';
import { palette } from '../theme';
import { Txt } from './Text';

/** Fixed 50pt creative plus a 17pt separation, 8pt bottom padding and divider.
 * Reserve this before loading so controls never jump when an ad arrives. */
export const GAME_BANNER_HEIGHT = 76;
/** The first banner waits for its screen's transition to finish: on a low-end
 * Android phone creating the ad's web view cost >100 ms of rendering. */
export const FIRST_BANNER_DELAY_MS = 800;
/** One banner outlives screens: through the victory screen and into the next
 * level it is reused, not rebuilt with a new web view and ad request. */
export const BANNER_KEEP_ALIVE_MS = 30_000;
const requestOptions = { requestNonPersonalizedAdsOnly: true };
type AdsSdk = Awaited<ReturnType<typeof loadNativeAdsSdk>>;

/** Footers that currently want the banner shown. */
const requests = new Set<string>();
const listeners = new Set<() => void>();
let wanted = false;
function publish() {
  if (wanted === requests.size > 0) return;
  wanted = requests.size > 0;
  listeners.forEach((listener) => listener());
}
function useBannerWanted(): boolean {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    () => wanted,
  );
}

/**
 * The gameplay screen's footer. It reserves the banner's space and, while its
 * screen is focused and `visible`, asks `SharedGameBanner` to show over it.
 */
export function GameBannerAd({ visible = true }: { visible?: boolean }) {
  const focused = useIsFocused();
  const id = useId();
  const on = focused && visible;
  useEffect(() => {
    if (!on) return;
    requests.add(id);
    publish();
    return () => {
      requests.delete(id);
      publish();
    };
  }, [on, id]);
  return <View testID="game-banner-slot" style={styles.footer} />;
}

/**
 * The app's one banner, rendered once in the root layout over the gameplay
 * footer. Non-personalized, no collapsing/expanding creative; live units only
 * in opted-in store builds (see adUnits). Hidden without a request, unmounted
 * after `BANNER_KEEP_ALIVE_MS` without one and while the app is backgrounded.
 */
export function SharedGameBanner() {
  const show = useBannerWanted();
  const insets = useSafeAreaInsets();
  const [foreground, setForeground] = useState(
    AppState.currentState === 'active',
  );
  const [alive, setAlive] = useState(false);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) =>
      setForeground(state === 'active'),
    );
    return () => subscription.remove();
  }, []);
  useEffect(() => {
    const timer = show
      ? alive
        ? undefined
        : setTimeout(() => setAlive(true), FIRST_BANNER_DELAY_MS)
      : alive
        ? setTimeout(() => setAlive(false), BANNER_KEEP_ALIVE_MS)
        : undefined;
    return () => clearTimeout(timer);
  }, [show, alive]);
  if (!alive || !foreground) return null;
  return (
    <View
      testID="shared-game-banner"
      pointerEvents={show ? 'box-none' : 'none'}
      style={[
        styles.footer,
        styles.overlay,
        { bottom: insets.bottom, opacity: show ? 1 : 0 },
      ]}
    >
      <Banner />
    </View>
  );
}

// Footer visibility belongs to the parent. Its changes must not re-render the
// SDK subtree with identical ad props; native refresh and SDK events still run.
const Banner = memo(function Banner() {
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
          unitId={adUnitId(sdk, 'banner')}
          size={sdk.BannerAdSize.BANNER}
          requestOptions={requestOptions}
          onAdLoaded={() => setStatus('loaded')}
          onAdFailedToLoad={() => setStatus('failed')}
        />
      )}
    </View>
  );
});

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
  overlay: { position: 'absolute', left: 0, right: 0 },
  banner: { width: 320, height: 50 },
  placeholder: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
