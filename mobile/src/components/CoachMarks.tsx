import {
  Canvas,
  FillType,
  Path,
  RoundedRect,
  Skia,
} from '@shopify/react-native-skia';
import { useEffect, useMemo, useRef, useState, type RefObject } from 'react';
import {
  AccessibilityInfo,
  Modal,
  Pressable,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { motion, palette, radius, space } from '../theme';
import { PrimaryButton } from './Buttons';
import { Txt } from './Text';

export interface Rect {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

export interface CoachStep {
  readonly title: string;
  readonly body: string;
  /** Controls ringed together; with none measured the card sits centred. */
  readonly targets: readonly RefObject<View | null>[];
}

/** Room between a control and its gold ring. */
const PAD = 10;
const GAP = 14;
const MAX_CARD = 420;
const DIM = 'rgba(5, 8, 22, 0.74)';
const INK_MUTED = 'rgba(27, 24, 56, 0.66)';

function measure(view: View | null): Promise<Rect | null> {
  return new Promise((resolve) => {
    if (!view) return resolve(null);
    view.measureInWindow((x, y, width, height) =>
      resolve(width > 0 && height > 0 ? { x, y, width, height } : null),
    );
  });
}

/** One box around every target that has laid out. */
async function measureTargets(
  targets: readonly RefObject<View | null>[],
): Promise<Rect | null> {
  const rects = (
    await Promise.all(targets.map((target) => measure(target.current)))
  ).filter((rect): rect is Rect => rect !== null);
  if (!rects.length) return null;
  const x = Math.min(...rects.map((rect) => rect.x));
  const y = Math.min(...rects.map((rect) => rect.y));
  return {
    x,
    y,
    width: Math.max(...rects.map((rect) => rect.x + rect.width)) - x,
    height: Math.max(...rects.map((rect) => rect.y + rect.height)) - y,
  };
}

/** The ring: the target grown into a pill; slim controls get a tighter ring. */
export function ringAround(target: Rect) {
  const pad = Math.min(
    PAD,
    Math.max(6, Math.min(target.width, target.height) / 3),
  );
  const width = target.width + pad * 2;
  const height = target.height + pad * 2;
  return {
    x: target.x - pad,
    y: target.y - pad,
    width,
    height,
    r: Math.min(width, height) / 2,
  };
}

/**
 * Where the card goes: on whichever side of the ring has more room, so the
 * control stays visible. Null centres it (nothing measured).
 */
export function cardPlacement(
  target: Rect | null,
  screenHeight: number,
  insets: { readonly top: number; readonly bottom: number },
): { readonly top: number } | { readonly bottom: number } | null {
  if (!target) return null;
  const ring = ringAround(target);
  const above = ring.y - insets.top;
  const below = screenHeight - insets.bottom - (ring.y + ring.height);
  return above > below
    ? { bottom: screenHeight - ring.y + GAP }
    : { top: ring.y + ring.height + GAP };
}

/**
 * Coach marks: dims the screen except a gold-ringed control and explains it
 * on a card. Runs in a modal so VoiceOver stays on the card; focus moves to
 * each step's heading. Touches outside the card's buttons are ignored.
 */
export function CoachMarks({
  steps,
  onDone,
}: {
  steps: readonly CoachStep[];
  /** Finished or skipped: either way the steps are over. */
  onDone: () => void;
}) {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState(0);
  const [target, setTarget] = useState<Rect | null>(null);
  const heading = useRef<View>(null);
  const step = steps[index];

  useEffect(() => {
    if (!step) return;
    let live = true;
    void measureTargets(step.targets).then((rect) => {
      if (live) setTarget(rect);
    });
    return () => {
      live = false;
    };
  }, [step, width, height]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (heading.current)
        AccessibilityInfo.sendAccessibilityEvent(heading.current, 'focus');
    }, motion.base);
    return () => clearTimeout(timer);
  }, [index]);

  const ring = useMemo(() => target && ringAround(target), [target]);
  const veil = useMemo(() => {
    const path = Skia.PathBuilder.Make().addRect(
      Skia.XYWHRect(0, 0, width, height),
    );
    if (ring)
      path.addRRect(
        Skia.RRectXY(
          Skia.XYWHRect(ring.x, ring.y, ring.width, ring.height),
          ring.r,
          ring.r,
        ),
      );
    return path.setFillType(FillType.EvenOdd).detach();
  }, [width, height, ring]);

  if (!step) return null;
  const last = index === steps.length - 1;
  const cardWidth = Math.min(width - space.lg * 2, MAX_CARD);
  const placement = cardPlacement(target, height, insets);
  return (
    <Modal
      visible
      transparent
      animationType="fade"
      statusBarTranslucent
      navigationBarTranslucent
      onRequestClose={onDone}
    >
      <View style={styles.root} accessibilityViewIsModal testID="tutorial">
        <View
          pointerEvents="none"
          style={StyleSheet.absoluteFill}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        >
          <Canvas style={StyleSheet.absoluteFill}>
            <Path path={veil} color={DIM} />
            {ring && (
              <RoundedRect
                x={ring.x}
                y={ring.y}
                width={ring.width}
                height={ring.height}
                r={ring.r}
                color={palette.gold}
                style="stroke"
                strokeWidth={3}
              />
            )}
          </Canvas>
        </View>
        <View
          pointerEvents="box-none"
          style={[
            styles.slot,
            placement ?? [
              styles.centred,
              { top: insets.top, bottom: insets.bottom },
            ],
          ]}
        >
          <Animated.View
            key={index}
            entering={FadeIn.duration(motion.base)}
            style={[styles.card, { width: cardWidth }]}
            testID="tutorial-card"
          >
            <View
              ref={heading}
              accessible
              accessibilityRole="header"
              accessibilityLabel={`ნაბიჯი ${index + 1} / ${steps.length}. ${step.title}`}
              style={styles.heading}
            >
              <Txt variant="caption" color={INK_MUTED}>
                {`${index + 1} / ${steps.length}`}
              </Txt>
              <Txt
                variant="heading"
                color={palette.ink}
                maxFontSizeMultiplier={1.3}
                testID="tutorial-title"
              >
                {step.title}
              </Txt>
            </View>
            <Txt
              color={palette.ink}
              maxFontSizeMultiplier={1.4}
              testID="tutorial-body"
            >
              {step.body}
            </Txt>
            <View style={styles.actions}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="გამოტოვება"
                accessibilityHint="სწავლების ხელახლა ნახვა პარამეტრებიდან შეიძლება"
                hitSlop={space.md}
                onPress={onDone}
                testID="tutorial-skip"
                style={({ pressed }) => [styles.skip, pressed && styles.dim]}
              >
                <Txt variant="label" color={INK_MUTED}>
                  გამოტოვება
                </Txt>
              </Pressable>
              <PrimaryButton
                label={last ? 'დავიწყოთ' : 'შემდეგი'}
                testID="tutorial-next"
                onPress={() => (last ? onDone() : setIndex(index + 1))}
                style={styles.next}
              />
            </View>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  slot: { position: 'absolute', left: 0, right: 0, alignItems: 'center' },
  centred: { justifyContent: 'center' },
  card: {
    backgroundColor: palette.ivory,
    borderRadius: radius.card,
    borderWidth: 1.5,
    borderColor: palette.gold,
    padding: space.lg,
    gap: space.sm,
  },
  heading: { gap: 2 },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: space.xs,
  },
  skip: { paddingVertical: space.sm, paddingRight: space.md },
  dim: { opacity: 0.6 },
  next: { minHeight: 48, paddingVertical: 6, minWidth: 132 },
});
