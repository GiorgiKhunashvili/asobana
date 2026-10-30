import * as Sentry from '@sentry/react-native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { liveAdsEnabled } from '../ads/adUnits';

/** Not a secret: a DSN can only submit reports, and ships inside every app. */
const SENTRY_DSN =
  'https://9cbedf6c7ef3e0760a88bb34c58aa361@o4512344040079360.ingest.de.sentry.io/4512344041717840';
const AD_FAILURE = 'ad_failure';

export type AdFailureSource = 'banner' | 'rewarded' | 'sdk';

/** Crashes and ad failure codes, nothing else: no activity trail, tracing or
 * sessions. Tester builds report as `beta`, so their demo ads never mix with
 * live numbers. */
export function sentryOptions() {
  return {
    dsn: SENTRY_DSN,
    environment: liveAdsEnabled() ? 'production' : 'beta',
    sendDefaultPii: false,
    maxBreadcrumbs: 0,
    enableAutoSessionTracking: false,
    enableAutoPerformanceTracing: false,
    // iOS only, missing from the JS types: leaves the network calls ads make alone.
    enableSwizzling: false,
    enableLogs: true,
    logsOrigin: 'js',
    // Logs would otherwise include every console message.
    beforeSendLog: (log) => (log.message === AD_FAILURE ? log : null),
    // The native SDK adds these device IDs. Native crashes bypass this hook and
    // keep them, so the privacy policy describes that case.
    beforeSend: (event) => {
      delete event.contexts?.device?.id;
      delete event.contexts?.app?.device_app_hash;
      return event;
    },
  } satisfies Sentry.ReactNativeOptions & { enableSwizzling: boolean };
}

/** Release builds only: development errors belong in the dev tools. */
export function startErrorReporting(): void {
  if (__DEV__) return;
  Sentry.init(sentryOptions());
  // Replaces the ID Sentry would otherwise give each install and stops it
  // inferring an IP address, on native crashes too.
  Sentry.setUser({ id: 'anonymous', ip_address: '0.0.0.0' });
}

function failureCode(error: unknown): string {
  if (typeof error === 'string') return error;
  const code = (error as { code?: unknown } | null | undefined)?.code;
  return typeof code === 'string' ? code : 'unknown';
}

/** Only the code leaves the device: an SDK's message is free text. Must stay a
 * plain record of what happened, with no effect on any ad request. */
export function reportAdFailure(source: AdFailureSource, error: unknown): void {
  Sentry.logger.warn(AD_FAILURE, {
    source,
    code: failureCode(error),
    platform: Platform.OS,
    version: Constants.expoConfig?.version ?? 'unknown',
  });
}
