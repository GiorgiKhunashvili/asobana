import { useNavigation } from 'expo-router';
import type { NativeStackNavigationProp } from 'expo-router/native-stack';
import { useCallback, useEffect, useRef } from 'react';
import { AppState } from 'react-native';

/** Keep SDK/WebView creation away from screen entry. Explicit watch presses
 * cancel this optional preload and let the ad controller load immediately. */
export function useDeferredAdPreload(
  enabled: boolean,
  levelId: string,
  load: () => Promise<void>,
  settleMs: number,
) {
  const navigation =
    useNavigation<NativeStackNavigationProp<Record<string, undefined>>>();
  const cancel = useRef(() => {});

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let stopped = false;
    let transitioning = false;
    let active = AppState.currentState === 'active';
    const clear = () => clearTimeout(timer);
    const stop = () => {
      stopped = true;
      clear();
    };
    cancel.current = stop;
    if (!enabled) return stop;

    const schedule = () => {
      clear();
      if (stopped || transitioning || !active) return;
      timer = setTimeout(() => {
        stop();
        void load();
      }, settleMs);
    };
    const offStart = navigation.addListener('transitionStart', () => {
      transitioning = true;
      clear();
    });
    const offEnd = navigation.addListener('transitionEnd', ({ data }) => {
      transitioning = false;
      if (data.closing) stop();
      else schedule();
    });
    const subscription = AppState.addEventListener('change', (state) => {
      active = state === 'active';
      schedule();
    });
    // Initial routes may have no transition event. The same grace period also
    // covers their first draw; subsequent transitions restart it on completion.
    schedule();
    return () => {
      stop();
      offStart();
      offEnd();
      subscription.remove();
    };
  }, [enabled, levelId, load, navigation, settleMs]);

  return useCallback(() => cancel.current(), []);
}
