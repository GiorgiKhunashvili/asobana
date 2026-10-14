import * as Haptics from 'expo-haptics';
import { useAudioPlayer } from 'expo-audio';
import { useEffect, useRef } from 'react';
import { gameStore, useGameStore } from '../state/gameStore';
export function tileHaptic(): void {
  if (gameStore.getState().game?.settings.haptics)
    void Haptics.selectionAsync().catch(() => undefined);
}
/** Effects are optional; failures never roll back a committed game transition. */
export function useGameFeedback(): void {
  const batch = useGameStore((state) => state.eventBatch);
  const last = useRef(0);
  const success = useAudioPlayer(require('../../assets/audio/success.wav'));
  const reject = useAudioPlayer(require('../../assets/audio/reject.wav'));
  const complete = useAudioPlayer(require('../../assets/audio/complete.wav'));
  useEffect(() => {
    if (batch.sequence <= last.current) return;
    last.current = batch.sequence;
    const settings = gameStore.getState().game?.settings;
    const completion = batch.events.some(
      (event) => event.type === 'level-completed',
    );
    const rejection = batch.events.some(
      (event) => event.type === 'word-rejected',
    );
    const discovery = batch.events.some(
      (event) => event.type === 'word-found' || event.type === 'bonus-found',
    );
    if (!completion && !rejection && !discovery) return;
    if (settings?.haptics)
      void Haptics.notificationAsync(
        rejection
          ? Haptics.NotificationFeedbackType.Warning
          : Haptics.NotificationFeedbackType.Success,
      ).catch(() => undefined);
    if (settings?.sound) {
      const player = completion ? complete : rejection ? reject : success;
      void player
        .seekTo(0)
        .then(() => player.play())
        .catch(() => undefined);
    }
  }, [batch, success, reject, complete]);
}
