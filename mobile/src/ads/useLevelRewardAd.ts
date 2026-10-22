import { useIsFocused } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { levelRewardAds, useLevelRewardAdSnapshot } from './levelRewardAds';
import { useDeferredAdPreload } from './useDeferredAdPreload';

/** Preload while the "×2" offer is on screen. Only an explicit press presents. */
export function useLevelRewardAd(offered: boolean, levelId: string) {
  const focused = useIsFocused();
  const { status, target } = useLevelRewardAdSnapshot();
  const request = useRef<AbortController | null>(null);
  const [pending, setPending] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const cancel = useCallback(() => {
    request.current?.abort();
    request.current = null;
    setPending(false);
    setEngaged(false);
  }, []);

  // The victory logo takes 2.1 s; allow its entrance to finish before ad work.
  const cancelPreload = useDeferredAdPreload(
    focused && offered,
    levelId,
    levelRewardAds.load,
    2200,
  );
  useEffect(() => {
    // A waiting ad must never appear after leaving the victory screen.
    return cancel;
  }, [focused, offered, levelId, cancel]);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      if (state !== 'active' && request.current && status === 'loading')
        cancel();
    });
    return () => subscription.remove();
  }, [cancel, status]);
  useEffect(() => {
    if (!engaged || !['rewarded', 'closed'].includes(status)) return;
    const timer = setTimeout(() => setEngaged(false), 3500);
    return () => clearTimeout(timer);
  }, [engaged, status]);

  const watch = async () => {
    if (!focused || !offered || request.current) return;
    cancelPreload();
    setEngaged(true);
    // An earned reward whose save failed is retried without another ad.
    if (status === 'save-error') {
      await levelRewardAds.retryReward();
      return;
    }
    const controller = new AbortController();
    request.current = controller;
    setPending(true);
    try {
      await levelRewardAds.watch(controller.signal, levelId);
    } finally {
      if (request.current === controller) {
        request.current = null;
        setPending(false);
      }
    }
  };
  return {
    status,
    /** The latest result belongs to this level, not one doubled earlier. */
    mine: target === undefined || target === levelId,
    pending,
    engaged,
    blocked: pending || ['showing', 'saving'].includes(status),
    watch,
    cancel,
  };
}
