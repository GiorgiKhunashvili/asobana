import { useIsFocused } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { rewardedAds, useRewardedAd } from './rewardedAds';

/** Preload without presenting. Only an explicit hint/ad press starts watching. */
export function useHintRewardedAd(eligible: boolean, levelId: string) {
  const focused = useIsFocused();
  const { status } = useRewardedAd();
  const request = useRef<AbortController | null>(null);
  const [pending, setPending] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const cancel = useCallback(() => {
    request.current?.abort();
    request.current = null;
    setPending(false);
    setEngaged(false);
  }, []);

  useEffect(() => {
    if (focused && eligible) void rewardedAds.load();
  }, [focused, eligible, levelId]);
  useEffect(() => {
    // A waiting ad must never appear after leaving the board or changing levels.
    return cancel;
  }, [focused, eligible, levelId, cancel]);
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
    if (!focused || request.current) return;
    setEngaged(true);
    if (status === 'save-error') {
      await rewardedAds.retryReward();
      return;
    }
    const controller = new AbortController();
    request.current = controller;
    setPending(true);
    try {
      await rewardedAds.watch(controller.signal);
    } finally {
      if (request.current === controller) {
        request.current = null;
        setPending(false);
      }
    }
  };
  return {
    status,
    pending,
    engaged,
    blocked: pending || ['showing', 'saving'].includes(status),
    watch,
    cancel,
  };
}
