import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { SecondaryButton } from '../../src/components/Buttons';
import { Icon } from '../../src/components/Icon';
import { Screen, TopBar } from '../../src/components/Screen';
import { Txt } from '../../src/components/Text';
import { catalog } from '../../src/content/catalog';
import { selectLevels } from '../../src/engine/selectors';
import { routes, singleParam } from '../../src/navigation/routes';
import { useGameStore } from '../../src/state/gameStore';
import { chapterTone, onScene, palette, space } from '../../src/theme';

const MEDALLION = 76;

export default function Levels() {
  const params = useLocalSearchParams<{ chapterId: string }>();
  const chapterId = singleParam(params.chapterId);
  const game = useGameStore((state) => state.game);
  const tone = chapterTone(chapterId);
  if (!game) return null;
  const chapterIndex = catalog.chapters.findIndex(
    (chapter) => chapter.id === chapterId,
  );
  const chapter = catalog.chapters[chapterIndex];
  if (!chapter)
    return (
      <Screen tone={tone} header={<TopBar />}>
        <View style={styles.missing}>
          <Txt>ასეთი ადგილი არ არსებობს.</Txt>
          <SecondaryButton
            label="მოგზაურობა"
            icon="route"
            onPress={() => router.replace('/chapters')}
          />
        </View>
      </Screen>
    );
  const levels = selectLevels(game, catalog).filter(
    (level) => level.chapterId === chapter.id,
  );
  return (
    <Screen
      tone={tone}
      veil={0.2}
      header={
        <TopBar eyebrow={`ადგილი ${chapterIndex + 1}`} title={chapter.title} />
      }
      contentStyle={styles.content}
    >
      <View style={styles.grid}>
        {levels.map((level, index) => {
          const current = level.id === game.currentLevelId && !level.completed;
          // Titles of locked levels stay hidden: a title can name an answer.
          const title = level.unlocked ? level.title : 'ჩაკეტილია';
          return (
            <Animated.View
              key={level.id}
              entering={ZoomIn.delay(index * 70)
                .springify()
                .damping(16)}
              style={styles.cell}
            >
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`დონე ${level.number}, ${title}${level.completed ? ', გავლილია' : ''}`}
                accessibilityState={{
                  disabled: !level.unlocked,
                  selected: current,
                }}
                disabled={!level.unlocked}
                testID={`level-${level.id}`}
                onPress={() => router.push(routes.game(level.id))}
                style={({ pressed }) => [
                  styles.medallion,
                  level.completed && [
                    styles.completed,
                    { backgroundColor: tone.scene.accent },
                  ],
                  current && styles.current,
                  !level.unlocked && styles.locked,
                  pressed && styles.pressed,
                ]}
              >
                {level.unlocked ? (
                  <Txt
                    variant="title"
                    color={level.completed ? palette.ivory : palette.ink}
                    style={styles.number}
                  >
                    {level.number}
                  </Txt>
                ) : (
                  <Icon name="lock" size={26} color={palette.gold} />
                )}
                {level.completed && (
                  <View style={styles.check}>
                    <Icon
                      name="check"
                      size={14}
                      color={palette.ink}
                      strokeWidth={3}
                    />
                  </View>
                )}
              </Pressable>
              <Txt
                variant="caption"
                color={level.unlocked ? palette.text : palette.textMuted}
                style={onScene}
                numberOfLines={1}
              >
                {title}
              </Txt>
            </Animated.View>
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { paddingTop: space.lg },
  missing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: space.lg,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    columnGap: space.xl,
    rowGap: space.xl,
  },
  cell: { width: MEDALLION + space.md, alignItems: 'center', gap: space.sm },
  medallion: {
    width: MEDALLION,
    height: MEDALLION,
    borderRadius: MEDALLION / 2,
    backgroundColor: palette.ivory,
    borderWidth: 2.5,
    borderColor: palette.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completed: { borderColor: palette.goldLight },
  current: { borderColor: palette.goldLight, borderWidth: 4 },
  locked: {
    backgroundColor: 'rgba(5, 10, 30, 0.45)',
    borderColor: palette.hairline,
  },
  pressed: { transform: [{ scale: 0.94 }] },
  number: { lineHeight: 36 },
  check: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: palette.gold,
    borderWidth: 2,
    borderColor: palette.goldLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
