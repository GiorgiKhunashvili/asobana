import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import {
  advanceSelection,
  EMPTY_SELECTION,
  layoutWheel,
  hitTest,
  selectionWord,
  shuffleTiles,
  type WheelSelection,
} from '../engine/wheel';
import type { LetterTile } from '../models/types';
import { GestureScrollContext } from './GestureScrollContext';
export interface LetterWheelProps {
  readonly tiles: readonly LetterTile[];
  readonly size: number;
  readonly disabled?: boolean;
  readonly onSubmit: (tileIds: readonly string[]) => void;
  readonly onTileEntered?: (tileId: string) => void;
}
/** Codex-owned gesture adapter. Claude may replace every visual around it. */
export function useLetterWheel({
  tiles,
  size,
  disabled = false,
  onSubmit,
  onTileEntered,
}: LetterWheelProps) {
  const scrollGesture = useContext(GestureScrollContext);
  const [seed, setSeed] = useState<number | null>(null);
  const order = useMemo(
    () => (seed === null ? tiles : shuffleTiles(tiles, seed)),
    [tiles, seed],
  );
  const [preview, setPreview] = useState('');
  const selection = useSharedValue<WheelSelection>(EMPTY_SELECTION);
  const pointer = useSharedValue({ x: 0, y: 0 });
  const layout = useMemo(() => layoutWheel(order, size), [order, size]);
  const cancel = useCallback(() => {
    selection.set(EMPTY_SELECTION);
    setPreview('');
  }, [selection]);
  useEffect(() => {
    selection.set(EMPTY_SELECTION);
  }, [tiles, selection]);
  useEffect(() => {
    if (disabled) selection.set(EMPTY_SELECTION);
  }, [disabled, selection]);
  const entered = useCallback(
    (ids: readonly string[]) => {
      setPreview(selectionWord(ids, tiles));
      const id = ids[ids.length - 1];
      if (id) onTileEntered?.(id);
    },
    [tiles, onTileEntered],
  );
  const clearPreview = useCallback(() => setPreview(''), []);
  const gesture = useMemo(() => {
    const pan = Gesture.Pan();
    if (scrollGesture) pan.blocksExternalGesture(scrollGesture);
    return pan
      .enabled(!disabled)
      .minDistance(0)
      .manualActivation(true)
      .maxPointers(1)
      .shouldCancelWhenOutside(false)
      .onTouchesDown((event, manager) => {
        'worklet';
        const touch = event.allTouches[0];
        if (
          event.numberOfTouches !== 1 ||
          !touch ||
          hitTest(touch, layout) === null
        ) {
          manager.fail();
        } else {
          manager.activate();
        }
      })
      .onBegin((event) => {
        'worklet';
        pointer.set({ x: event.x, y: event.y });
        selection.set(
          advanceSelection(
            EMPTY_SELECTION,
            { type: 'begin', point: pointer.get() },
            layout,
          ),
        );
        if (selection.get().active)
          scheduleOnRN(entered, selection.get().tileIds);
      })
      .onUpdate((event) => {
        'worklet';
        pointer.set({ x: event.x, y: event.y });
        const next = advanceSelection(
          selection.get(),
          { type: 'move', point: pointer.get() },
          layout,
        );
        if (next.tileIds.length !== selection.get().tileIds.length)
          scheduleOnRN(entered, next.tileIds);
        selection.set(next);
      })
      .onEnd((event, success) => {
        'worklet';
        if (success)
          selection.set(
            advanceSelection(
              selection.get(),
              { type: 'move', point: { x: event.x, y: event.y } },
              layout,
            ),
          );
        if (
          success &&
          selection.get().active &&
          selection.get().tileIds.length >= 2
        )
          scheduleOnRN(onSubmit, [...selection.get().tileIds]);
        selection.set(EMPTY_SELECTION);
        scheduleOnRN(clearPreview);
      })
      .onFinalize(() => {
        'worklet';
        selection.set(EMPTY_SELECTION);
        scheduleOnRN(clearPreview);
      });
  }, [
    disabled,
    pointer,
    selection,
    layout,
    entered,
    onSubmit,
    clearPreview,
    scrollGesture,
  ]);
  const shuffle = useCallback(() => {
    cancel();
    setSeed(Math.floor(Math.random() * 0x100000000));
  }, [cancel]);
  return {
    layout,
    selection,
    pointer,
    preview: disabled ? '' : preview,
    gesture,
    shuffle,
    cancel,
  };
}
