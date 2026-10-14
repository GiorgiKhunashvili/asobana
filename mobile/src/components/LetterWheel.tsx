import { Canvas, Path, Skia } from '@shopify/react-native-skia';
import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  type SharedValue,
} from 'react-native-reanimated';
import type { WheelSelection, WheelTile } from '../engine/wheel';
import { selectionWord } from '../engine/wheel';
import { Action, Label, styles } from './PrototypePrimitives';
import { useLetterWheel, type LetterWheelProps } from './useLetterWheel';
function Tile({
  tile,
  selection,
}: {
  tile: WheelTile;
  selection: SharedValue<WheelSelection>;
}) {
  const animated = useAnimatedStyle(() => ({
    backgroundColor: selection.value.tileIds.includes(tile.id)
      ? '#236c62'
      : '#ffffff',
    transform: [
      { scale: selection.value.tileIds.includes(tile.id) ? 1.08 : 1 },
    ],
  }));
  const letterStyle = useAnimatedStyle(() => ({
    color: selection.value.tileIds.includes(tile.id) ? '#ffffff' : '#193e3c',
  }));
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        wheelStyles.tile,
        {
          left: tile.x - tile.radius,
          top: tile.y - tile.radius,
          width: tile.radius * 2,
          height: tile.radius * 2,
          borderRadius: tile.radius,
        },
        animated,
      ]}
    >
      <Animated.Text style={[wheelStyles.letter, letterStyle]}>
        {tile.letter}
      </Animated.Text>
    </Animated.View>
  );
}
export function LetterWheel(props: LetterWheelProps) {
  const [tapMode, setTapMode] = useState(false);
  const [tapIds, setTapIds] = useState<readonly string[]>([]);
  const wheel = useLetterWheel({
    ...props,
    disabled: Boolean(props.disabled) || tapMode,
  });
  const { selection, pointer, layout } = wheel;
  const path = useDerivedValue(() => {
    const result = Skia.PathBuilder.Make();
    const ids = selection.value.tileIds;
    ids.forEach((id, index) => {
      const tile = layout.find((tile) => tile.id === id);
      if (tile) {
        if (index === 0) result.moveTo(tile.x, tile.y);
        else result.lineTo(tile.x, tile.y);
      }
    });
    if (selection.value.active && ids.length)
      result.lineTo(pointer.value.x, pointer.value.y);
    return result.detach();
  }, [layout]);
  const submitTaps = useCallback(() => {
    props.onSubmit(tapIds);
    setTapIds([]);
  }, [props, tapIds]);
  return (
    <View style={wheelStyles.container}>
      <Label
        accessibilityLiveRegion="polite"
        testID="selection-preview"
        style={wheelStyles.preview}
      >
        {tapMode
          ? selectionWord(tapIds, props.tiles) || 'აირჩიე ასოები'
          : wheel.preview || 'შეაერთე ასოები'}
      </Label>
      <GestureDetector gesture={wheel.gesture}>
        <View
          testID="letter-wheel"
          style={{
            width: props.size,
            height: props.size,
            borderRadius: props.size / 2,
            backgroundColor: '#e4ede7',
          }}
        >
          <Canvas pointerEvents="none" style={StyleSheet.absoluteFill}>
            <Path
              path={path}
              color="#69a88b"
              style="stroke"
              strokeWidth={7}
              strokeCap="round"
              strokeJoin="round"
            />
          </Canvas>
          {wheel.layout.map((tile) => (
            <Tile key={tile.id} tile={tile} selection={wheel.selection} />
          ))}
        </View>
      </GestureDetector>
      <View style={styles.row}>
        <Action
          label="არევა · Shuffle"
          disabled={Boolean(props.disabled)}
          onPress={() => {
            setTapIds([]);
            wheel.shuffle();
          }}
        />
        <Action
          label={tapMode ? 'Swipe mode' : 'Tap mode'}
          disabled={Boolean(props.disabled)}
          onPress={() => {
            setTapMode(!tapMode);
            setTapIds([]);
            wheel.cancel();
          }}
        />
      </View>
      {tapMode && (
        <>
          <View style={styles.row}>
            {props.tiles.map((tile, index) => (
              <Action
                key={tile.id}
                label={`${tile.letter} · ${index + 1}`}
                disabled={props.disabled || tapIds.includes(tile.id)}
                onPress={() => {
                  setTapIds([...tapIds, tile.id]);
                  props.onTileEntered?.(tile.id);
                }}
              />
            ))}
          </View>
          <View style={styles.row}>
            <Action
              label="Submit"
              disabled={props.disabled || tapIds.length < 2}
              onPress={submitTaps}
            />
            <Action
              label="Clear"
              disabled={Boolean(props.disabled)}
              onPress={() => setTapIds([])}
            />
          </View>
        </>
      )}
    </View>
  );
}
const wheelStyles = StyleSheet.create({
  container: { alignItems: 'center', gap: 12 },
  preview: { minHeight: 32, fontSize: 22, lineHeight: 32 },
  tile: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#90b5a6',
  },
  letter: { fontFamily: 'NotoGeorgian', fontSize: 29 },
});
