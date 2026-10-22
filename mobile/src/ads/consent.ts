import { useSyncExternalStore } from 'react';

type AdsSdk = typeof import('react-native-google-mobile-ads');
type ConsentSdk = Pick<
  AdsSdk,
  'AdsConsent' | 'AdsConsentPrivacyOptionsRequirementStatus'
>;
type ConsentInfo = Awaited<ReturnType<AdsSdk['AdsConsent']['getConsentInfo']>>;

let privacyOptionsRequired = false;
const listeners = new Set<() => void>();

function record(sdk: ConsentSdk, info: ConsentInfo) {
  const required =
    info.privacyOptionsRequirementStatus ===
    sdk.AdsConsentPrivacyOptionsRequirementStatus.REQUIRED;
  if (required !== privacyOptionsRequired) {
    privacyOptionsRequired = required;
    listeners.forEach((listener) => listener());
  }
}

/** Google's consent flow (UMP): refresh the user's status and show Google's
 * consent form where the region requires one (EEA, UK, Switzerland). Offline,
 * fall back to the choice stored by an earlier session. Resolves whether ads
 * may be requested. */
export async function gatherAdsConsent(sdk: ConsentSdk): Promise<boolean> {
  let info: ConsentInfo;
  try {
    info = await sdk.AdsConsent.gatherConsent();
  } catch {
    info = await sdk.AdsConsent.getConsentInfo();
  }
  record(sdk, info);
  return info.canRequestAds;
}

/** Reopens Google's form so a player can change or withdraw their choice. */
export async function showAdsPrivacyOptions(sdk: ConsentSdk): Promise<void> {
  record(sdk, await sdk.AdsConsent.showPrivacyOptionsForm());
}

/** True only where the law requires a way back to the consent form. */
export function usePrivacyOptionsRequired(): boolean {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    () => privacyOptionsRequired,
  );
}
