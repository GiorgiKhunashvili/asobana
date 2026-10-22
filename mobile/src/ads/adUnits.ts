import Constants from 'expo-constants';
import { Platform } from 'react-native';

export type AdKind = 'banner' | 'rewarded';
type TestIdSource = {
  readonly TestIds: { readonly BANNER: string; readonly REWARDED: string };
};

/** The owner's live AdMob units (account ca-app-pub-8935292332039677). */
export const LIVE_AD_UNITS: Partial<
  Record<'ios' | 'android', Record<AdKind, string>>
> = {
  ios: {
    banner: 'ca-app-pub-8935292332039677/8167152594',
    rewarded: 'ca-app-pub-8935292332039677/8819345552',
  },
  android: {
    banner: 'ca-app-pub-8935292332039677/6993138895',
    rewarded: 'ca-app-pub-8935292332039677/4063723227',
  },
};

/** Live ads only in release builds that opt in (the eas.json production profile
 * sets ASOBANA_LIVE_ADS, which app.config.js embeds as `extra.liveAds`).
 * Development builds, other Release builds and tests use Google's demo units, so
 * nobody taps a live ad while testing. */
export function liveAdsEnabled(
  dev: boolean = __DEV__,
  flag: unknown = Constants.expoConfig?.extra?.liveAds,
): boolean {
  return !dev && flag === true;
}

export function adUnitId(
  sdk: TestIdSource,
  kind: AdKind,
  live: boolean = liveAdsEnabled(),
  platform: string = Platform.OS,
): string {
  const unit = live
    ? LIVE_AD_UNITS[platform as 'ios' | 'android']?.[kind]
    : undefined;
  return (
    unit ?? (kind === 'banner' ? sdk.TestIds.BANNER : sdk.TestIds.REWARDED)
  );
}
