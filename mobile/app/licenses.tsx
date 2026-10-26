import { Linking, Pressable, StyleSheet, View } from 'react-native';
import { Card } from '../src/components/Card';
import { Screen, TopBar } from '../src/components/Screen';
import { Display, Txt } from '../src/components/Text';
import { CREDITS } from '../src/legal';
import { useGameStore } from '../src/state/gameStore';
import { progressTone } from '../src/screens/nextLevel';
import { levelTone, palette, radius, space, touch } from '../src/theme';

/** Sources and licences of the word list and fonts, opened from Settings. */
export default function Licenses() {
  const game = useGameStore((state) => state.game);
  return (
    <Screen
      veil={0.55}
      tone={game ? progressTone(game) : levelTone(null)}
      header={<TopBar title="ლიცენზიები" />}
      contentStyle={styles.content}
    >
      {CREDITS.map((credit) => (
        <Card key={credit.title}>
          <Display variant="eyebrow" color={palette.gold}>
            {credit.title}
          </Display>
          {credit.lines.map((line) => (
            <Txt key={line}>{line}</Txt>
          ))}
          <View style={styles.links}>
            {credit.links.map((link) => (
              <Pressable
                key={link.url}
                accessibilityRole="link"
                accessibilityLabel={link.label}
                accessibilityHint="იხსნება ბრაუზერში"
                onPress={() => {
                  void Linking.openURL(link.url).catch(() => undefined);
                }}
                style={({ pressed }) => [
                  styles.link,
                  pressed && styles.pressed,
                ]}
              >
                <Txt variant="label" color={palette.goldLight}>
                  {link.label}
                </Txt>
              </Pressable>
            ))}
          </View>
        </Card>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: { gap: space.lg, paddingTop: space.sm },
  links: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  link: {
    minHeight: touch,
    justifyContent: 'center',
    paddingHorizontal: space.lg,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: palette.hairline,
  },
  pressed: { opacity: 0.7 },
});
