import * as Sentry from '@sentry/react-native';
import { AdsNotAllowedError } from '../src/ads/createRewardedAds';
import {
  reportAdFailure,
  sentryOptions,
  startErrorReporting,
} from '../src/services/errorReporting';

const send = sentryOptions().beforeSendLog;
const log = (message: string) => ({ level: 'warn' as const, message });

test('only the source, code, platform and version of an ad failure leave the device', () => {
  const error = Object.assign(new Error('player@example.com had no ad'), {
    code: 'googleMobileAds/no-fill',
    userInfo: { detail: 'private' },
  });
  reportAdFailure('banner', error);
  expect(Sentry.logger.warn).toHaveBeenCalledWith('ad_failure', {
    source: 'banner',
    code: 'googleMobileAds/no-fill',
    platform: 'ios',
    version: expect.any(String),
  });
});

test.each([
  ['timeout', 'timeout'],
  [new AdsNotAllowedError('Not yet'), 'consent-blocked'],
  [new Error('free text'), 'unknown'],
  [{ code: 3 }, 'unknown'],
  [undefined, 'unknown'],
  [null, 'unknown'],
])('failure %# is reduced to a code', (error, code) => {
  reportAdFailure('rewarded', error);
  expect(Sentry.logger.warn).toHaveBeenCalledWith(
    'ad_failure',
    expect.objectContaining({ source: 'rewarded', code }),
  );
});

test('nothing beyond crashes and ad failures is collected', () => {
  expect(sentryOptions()).toMatchObject({
    sendDefaultPii: false,
    maxBreadcrumbs: 0,
    enableAutoSessionTracking: false,
    enableAutoPerformanceTracing: false,
    enableSwizzling: false,
    logsOrigin: 'js',
  });
  expect(sentryOptions()).not.toHaveProperty('tracesSampleRate');
  expect(sentryOptions()).not.toHaveProperty('replaysSessionSampleRate');
  expect(sentryOptions()).not.toHaveProperty('replaysOnErrorSampleRate');
  expect(sentryOptions()).not.toHaveProperty('profilesSampleRate');
  expect(send(log('ad_failure'))).toEqual(log('ad_failure'));
  expect(send(log('console message with player data'))).toBeNull();
});

test('reports go to the EU project, and tester builds never count as production', () => {
  expect(sentryOptions().dsn).toContain('.ingest.de.sentry.io/');
  expect(sentryOptions().environment).toBe('beta'); // Tests run as a dev build.
});

test('development builds send nothing', () => {
  startErrorReporting();
  expect(Sentry.init).not.toHaveBeenCalled();
});

test('release builds start reporting with no per-install ID', () => {
  const scope = globalThis as unknown as { __DEV__: boolean };
  const dev = scope.__DEV__;
  scope.__DEV__ = false;
  try {
    startErrorReporting();
  } finally {
    scope.__DEV__ = dev;
  }
  expect(Sentry.init).toHaveBeenCalledTimes(1);
  expect(Sentry.setUser).toHaveBeenCalledWith({
    id: 'anonymous',
    ip_address: '0.0.0.0',
  });
});

test('the device IDs the native SDK adds are removed from JS errors', () => {
  const event = {
    type: undefined,
    contexts: {
      device: { id: 'install-id', model: 'SM-A075F' },
      app: { device_app_hash: 'device-hash', app_version: '1.0.0' },
    },
  };
  const sent = sentryOptions().beforeSend(event);
  expect(sent.contexts).toEqual({
    device: { model: 'SM-A075F' },
    app: { app_version: '1.0.0' },
  });
});
