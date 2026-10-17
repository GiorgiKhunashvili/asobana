import { useMemo, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  type ImageSourcePropType,
  type LayoutChangeEvent,
} from 'react-native';

/**
 * Fills its box with an image, cropping to keep the aspect ratio (like CSS
 * `object-fit: cover`). The frame is computed explicitly: React Native's own
 * `cover` mode mis-crops these large bundled paintings on iOS, showing only a
 * zoomed corner. Decorative only; hidden from assistive technology.
 */
export function CoverImage({
  source,
  size,
}: {
  readonly source: ImageSourcePropType;
  /** Known box size (e.g. the window); measured from layout when omitted. */
  readonly size?: { readonly width: number; readonly height: number };
}) {
  const [measured, setMeasured] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const box = size ?? measured;
  const frame = useMemo(() => {
    if (!box) return null;
    const asset = Image.resolveAssetSource(source);
    const aspect = asset ? asset.width / asset.height : 1;
    const width = Math.max(box.width, box.height * aspect);
    const height = width / aspect;
    return {
      width,
      height,
      left: (box.width - width) / 2,
      top: (box.height - height) / 2,
    };
  }, [box, source]);
  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    if (width !== measured?.width || height !== measured?.height)
      setMeasured({ width, height });
  };
  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      onLayout={size ? undefined : onLayout}
      style={styles.box}
    >
      {frame && (
        <Image
          source={source}
          resizeMode="stretch"
          fadeDuration={0}
          style={[styles.image, frame]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { ...StyleSheet.absoluteFill, overflow: 'hidden' },
  image: { position: 'absolute' },
});
