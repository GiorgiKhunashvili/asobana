import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Icon } from '../../src/components/Icon';
import { Screen, TopBar } from '../../src/components/Screen';
import { Display, Txt } from '../../src/components/Text';
import { catalog } from '../../src/content/catalog';
import { selectChapters } from '../../src/engine/selectors';
import { routes } from '../../src/navigation/routes';
import { useGameStore } from '../../src/state/gameStore';
import {
  chapterTone,
  levelTone,
  palette,
  radius,
  space,
} from '../../src/theme';

export default function Chapters() {
  const game = useGameStore((state) => state.game);
  if (!game) return null;
  return (
    <Screen
      tone={levelTone(game.currentLevelId)}
      header={<TopBar title="თავები" />}
      contentStyle={styles.content}
    >
      {selectChapters(game, catalog).map((chapter, index) => {
        const tone = chapterTone(chapter.id);
        const done = chapter.completedLevels === chapter.totalLevels;
        return (
          <Animated.View
            key={chapter.id}
            entering={FadeInDown.delay(index * 90).duration(420)}
          >
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`თავი ${index + 1}, ${chapter.title}, ${chapter.completedLevels} / ${chapter.totalLevels} დონე${chapter.unlocked ? '' : ', ჩაკეტილია'}`}
              accessibilityState={{ disabled: !chapter.unlocked }}
              disabled={!chapter.unlocked}
              testID={`chapter-${chapter.id}`}
              onPress={() => router.push(routes.chapter(chapter.id))}
              style={({ pressed }) => [
                styles.plate,
                { backgroundColor: tone.raised },
                !chapter.unlocked && styles.locked,
                pressed && styles.pressed,
              ]}
            >
              <View
                style={[styles.medallion, { backgroundColor: tone.ground[1] }]}
              >
                {chapter.unlocked ? (
                  <Txt
                    variant="title"
                    color={palette.gold}
                    style={styles.numeral}
                  >
                    {index + 1}
                  </Txt>
                ) : (
                  <Icon name="lock" size={24} color={palette.gold} />
                )}
              </View>
              <View style={styles.body}>
                <Display variant="eyebrow" color={palette.gold}>
                  {`თავი ${index + 1}`}
                </Display>
                <Display variant="heading">{chapter.title}</Display>
                {chapter.unlocked ? (
                  <View style={styles.progress}>
                    {Array.from({ length: chapter.totalLevels }, (_, level) => (
                      <View
                        key={level}
                        style={[
                          styles.segment,
                          level < chapter.completedLevels && styles.segmentDone,
                        ]}
                      />
                    ))}
                    <Txt
                      variant="caption"
                      color={done ? palette.goldLight : palette.textMuted}
                    >
                      {chapter.completedLevels}/{chapter.totalLevels}
                    </Txt>
                  </View>
                ) : (
                  <Txt variant="caption" color={palette.textMuted}>
                    გაიხსნება წინა თავის გავლის შემდეგ
                  </Txt>
                )}
              </View>
              {chapter.unlocked && (
                <View style={styles.chevron}>
                  <Icon name="back" size={20} color={palette.gold} />
                </View>
              )}
            </Pressable>
          </Animated.View>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { gap: space.md, paddingTop: space.sm },
  plate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space.lg,
    padding: space.lg,
    borderRadius: radius.card,
    borderWidth: 1.5,
    borderColor: palette.gold,
  },
  locked: { opacity: 0.55, borderColor: palette.hairline },
  pressed: { transform: [{ scale: 0.98 }] },
  medallion: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 2,
    borderColor: palette.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numeral: { lineHeight: 34 },
  body: { flex: 1, gap: 2 },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: space.xs,
  },
  segment: {
    width: 22,
    height: 6,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: palette.gold,
  },
  segmentDone: {
    backgroundColor: palette.turquoise,
    borderColor: palette.goldLight,
  },
  chevron: { transform: [{ rotate: '180deg' }] },
});
