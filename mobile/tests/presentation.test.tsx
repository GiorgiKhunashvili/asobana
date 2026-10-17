import { fireEvent, render } from '@testing-library/react-native';
import { View } from 'react-native';
import { PrimaryButton, RoundButton } from '../src/components/Buttons';
import { CrosswordBoard } from '../src/components/CrosswordBoard';
import { LetterWheel } from '../src/components/LetterWheel';
import { Display } from '../src/components/Text';
import { BonusMeter } from '../src/components/BonusMeter';
import Postcards from '../app/postcards';
import { gameStore } from '../src/state/gameStore';
import { reachLevel as reachCurrentLevel } from './helpers';
import { router, useLocalSearchParams } from 'expo-router';
import Victory from '../app/victory/[levelId]';
import Home from '../app/index';
import { GameplayScreen } from '../src/screens/GameplayScreen';
import { initialState, transition } from '../src/engine/game';
import { selectGameplay } from '../src/engine/selectors';
import {
  boardMoment,
  cellsSpelling,
  stripFeedback,
} from '../src/screens/presentEvents';
import {
  COUNTRIES,
  SCENES,
  chapterTone,
  sceneFor,
  toMtavruli,
} from '../src/theme';
import { catalog as journeyCatalog } from '../src/content/catalog';
import { JourneyScreen } from '../src/screens/JourneyScreen';
import { catalog, reachLevel, submit, tilesFor } from './legacyHelpers';

// Animation and drawing are verified on the simulator; here they are inert.
jest.mock('react-native-worklets', () =>
  require('react-native-worklets/lib/module/mock'),
);
jest.mock('react-native-reanimated', () => ({
  ...require('react-native-reanimated/mock'),
  useReducedMotion: () => false,
}));
jest.mock('expo-router', () => ({
  router: { canGoBack: () => false, replace: jest.fn(), push: jest.fn() },
  useFocusEffect: jest.fn(),
  useIsFocused: () => true,
  useLocalSearchParams: jest.fn(() => ({})),
}));
jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);
jest.mock('../src/services/feedback', () => ({ tileHaptic: jest.fn() }));
jest.mock('../src/state/gameStore', () => {
  const { initialState } = require('../src/engine/game');
  const { catalog } = require('../src/content/catalog');
  const state = {
    game: initialState(catalog),
    busy: false,
    error: null,
    eventBatch: { sequence: 0, events: [] },
    dispatch: jest.fn(),
  };
  return {
    gameStore: {
      getState: () => state,
      setState: (next: object) => Object.assign(state, next),
    },
    useGameStore: (selector: (state: unknown) => unknown) => selector(state),
  };
});
jest.mock('@shopify/react-native-skia', () => {
  const builder = {
    moveTo: () => builder,
    lineTo: () => builder,
    setFillType: () => builder,
    detach: () => ({}),
  };
  const Nothing = () => null;
  return {
    BlurMask: Nothing,
    Canvas: Nothing,
    Circle: Nothing,
    FillType: { EvenOdd: 1 },
    Group: Nothing,
    LinearGradient: Nothing,
    Path: Nothing,
    RadialGradient: Nothing,
    Rect: Nothing,
    RoundedRect: Nothing,
    Skia: {
      PathBuilder: { Make: () => builder, MakeFromPath: () => builder },
      Path: { MakeFromSVGString: () => ({}) },
    },
    vec: (x: number, y: number) => ({ x, y }),
  };
});

const level = catalog.levels[0]!;

test('bonus progress exposes its goal and earned free hints accessibly', async () => {
  const screen = await render(<BonusMeter progress={9} freeHints={2} />);
  expect(screen.getByRole('progressbar')).toHaveAccessibilityValue({
    min: 0,
    max: 10,
    now: 9,
  });
  expect(screen.getByText('უფასო მინიშნებები: 2')).toBeTruthy();
  await screen.rerender(<BonusMeter progress={0} freeHints={3} compact />);
  expect(screen.getByRole('progressbar')).toHaveAccessibilityValue({ now: 0 });
});

test('album previews the next place and opens only earned postcards', async () => {
  const before = gameStore.getState().game;
  try {
    gameStore.setState({ game: reachCurrentLevel(5) });
    const screen = await render(<Postcards />);
    expect(screen.getByText('1/48 ბარათი შეგროვებულია')).toBeTruthy();
    expect(screen.getByText('შემდეგი: მცხეთა')).toBeTruthy();
    expect(screen.queryByTestId('open-postcard-mtskheta')).toBeNull();
    await fireEvent.press(screen.getByTestId('open-postcard-tbilisi'));
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/postcards/[chapterId]',
      params: { chapterId: 'tbilisi' },
    });
  } finally {
    gameStore.setState({ game: before });
  }
});

test('gameplay shows the Georgian topic heading above the hidden board', async () => {
  const screen = await render(<GameplayScreen levelId="ka-001" />);
  // Levels are named by place and step, not by their placeholder content title.
  expect(screen.getByTestId('level-topic')).toHaveTextContent('თბილისი · 1/5');
  expect(screen.getByLabelText('დონე 1')).toBeTruthy();
  expect(screen.queryByText('მზე')).toBeNull();
  expect(screen.getByLabelText('0/5 სიტყვა · ბონუსი 0')).toBeTruthy();
});

test('hidden cells expose no answers; committed words render in Georgian', async () => {
  const view = selectGameplay(initialState(catalog), catalog);
  const screen = await render(
    <CrosswordBoard cells={view.cells} grid={view.grid} />,
  );
  expect(screen.queryByText('მ')).toBeNull();
  expect(screen.getByLabelText('რიგი 1, სვეტი 1, ცარიელი')).toBeTruthy();
  const found = selectGameplay(
    submit(initialState(catalog), level, 'მზე').state,
    catalog,
  );
  await screen.rerender(
    <CrosswordBoard cells={found.cells} grid={found.grid} />,
  );
  for (const letter of ['მ', 'ზ', 'ე'])
    expect(screen.getByText(letter)).toBeTruthy();
  expect(screen.getByLabelText('რიგი 1, სვეტი 3, ე')).toBeTruthy();
});

test('display text is set in Mtavruli but read as Mkhedruli', async () => {
  expect(toMtavruli('გილოცავ! 1')).toBe('ᲒᲘᲚᲝᲪᲐᲕ! 1');
  expect(toMtavruli('ᲛᲖᲔ abc')).toBe('ᲛᲖᲔ abc');
  const screen = await render(<Display>მზე</Display>);
  expect(screen.getByText('ᲛᲖᲔ')).toBeTruthy();
  expect(screen.getByLabelText('მზე')).toBeTruthy();
});

test('a found word fires its cells in reading order', () => {
  const result = submit(initialState(catalog), level, 'მზე');
  const view = selectGameplay(result.state, catalog);
  const moment = boardMoment(
    { sequence: 4, events: result.events },
    view.cells,
  );
  expect(moment).toMatchObject({
    sequence: 4,
    revealed: ['0:0', '0:1', '0:2'],
    source: 'word',
    celebrate: false,
  });
  expect(stripFeedback({ sequence: 4, events: result.events })).toEqual({
    key: 4,
    kind: 'found',
    word: 'მზე',
  });
});

test('a repeated word reminds the player where it already is', () => {
  const once = submit(initialState(catalog), level, 'მზე').state;
  const again = submit(once, level, 'მზე');
  const view = selectGameplay(again.state, catalog);
  expect(cellsSpelling(view.cells, 'მზე')).toEqual(['0:0', '0:1', '0:2']);
  expect(
    boardMoment({ sequence: 5, events: again.events }, view.cells)?.remind,
  ).toEqual(['0:0', '0:1', '0:2']);
  expect(stripFeedback({ sequence: 5, events: again.events })).toMatchObject({
    kind: 'duplicate',
    caption: 'უკვე ნაპოვნია',
  });
});

test('completion celebrates; bonus and coin shortfalls get their own feedback', () => {
  let done = submit(initialState(catalog), level, level.words[0]!.answer);
  for (const word of level.words.slice(1))
    done = submit(done.state, level, word.answer);
  const view = selectGameplay(done.state, catalog);
  expect(
    boardMoment({ sequence: 6, events: done.events }, view.cells)?.celebrate,
  ).toBe(true);
  const family = catalog.levels[1]!;
  const bonus = submit(reachLevel(1), family, 'მადა');
  expect(stripFeedback({ sequence: 7, events: bonus.events })).toMatchObject({
    kind: 'bonus',
    word: 'მადა',
  });
  const broke = transition(
    { ...reachLevel(1), coins: 0 },
    { type: 'hint', levelId: family.id, kind: 'word' },
    catalog,
  );
  expect(stripFeedback({ sequence: 8, events: broke.events })).toEqual({
    key: 8,
    kind: 'notice',
    caption: 'მონეტები არ გყოფნის',
  });
});

test('buttons expose accessible names and disabled state', async () => {
  const onPress = jest.fn();
  const screen = await render(
    <View>
      <PrimaryButton
        label="შემდეგი დონე"
        detail="დონე 2"
        disabled
        onPress={onPress}
      />
      <RoundButton label="ასოების არევა" icon="shuffle" onPress={onPress} />
    </View>,
  );
  await fireEvent.press(
    screen.getByRole('button', { name: 'შემდეგი დონე, დონე 2' }),
  );
  expect(onPress).not.toHaveBeenCalled();
  await fireEvent.press(screen.getByRole('button', { name: 'ასოების არევა' }));
  expect(onPress).toHaveBeenCalledTimes(1);
});

test('tap mode submits unique tile IDs in the order tapped', async () => {
  const onSubmit = jest.fn();
  const family = catalog.levels[1]!;
  const screen = await render(
    <LetterWheel
      tiles={family.tiles}
      size={280}
      width={360}
      tone={chapterTone(family.chapterId)}
      onSubmit={onSubmit}
    />,
  );
  await fireEvent.press(screen.getByTestId('input-mode'));
  const ids = tilesFor(family, 'დედა');
  for (const id of ids)
    await fireEvent.press(screen.getByTestId(`tap-tile-${id}`));
  // A tile already in the word cannot be tapped twice.
  await fireEvent.press(screen.getByTestId(`tap-tile-${ids[0]}`));
  await fireEvent.press(screen.getByTestId('tap-submit'));
  expect(onSubmit).toHaveBeenCalledWith(ids);
});

test('journey countries cover every stop once, in travel order', () => {
  expect(COUNTRIES.flatMap((country) => country.chapterIds)).toEqual(
    journeyCatalog.chapters.map((chapter) => chapter.id),
  );
});

test('every stop shows its own painting, and no two stops share one', () => {
  const kazbegi = SCENES.find((scene) => scene.id === 'weather')!;
  expect(sceneFor('kazbegi').image).toBe(kazbegi.image);
  expect(sceneFor('kazbegi').place).toBe('ყაზბეგი');
  expect(sceneFor('sighnaghi').place).toBe('სიღნაღი');
  expect(sceneFor('cappadocia')).toMatchObject({
    place: 'კაპადოკია',
    country: 'turkey',
  });
  const images = journeyCatalog.chapters.map((chapter) => {
    const scene = sceneFor(chapter.id);
    expect(scene.image).toBeDefined();
    expect(scene.band).toBeDefined();
    expect(scene.place).toBe(chapter.title);
    return JSON.stringify(scene.image);
  });
  expect(new Set(images).size).toBe(journeyCatalog.chapters.length);
  // Earned legacy postcards keep their original painting and place.
  expect(sceneFor('weather')).toBe(kazbegi);
  // Anything unknown gets a drawn placeholder rather than another place's art.
  expect(sceneFor('nowhere').image).toBeUndefined();
});

test('journey path shows progress, the country pill and the whole route', async () => {
  const before = gameStore.getState().game;
  try {
    gameStore.setState({ game: reachCurrentLevel(17) });
    const screen = await render(<JourneyScreen />);
    expect(
      screen.getByLabelText('საქართველო, 3 / 18 ადგილი. მოგზაურობის ნახვა'),
    ).toBeTruthy();
    expect(screen.getByLabelText('დონე 1, გავლილია')).toBeTruthy();
    expect(screen.getByTestId('country-georgia')).toBeTruthy();
    await fireEvent.press(screen.getByTestId('level-ka-002'));
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/game/[levelId]',
      params: { levelId: 'ka-002' },
    });
    await fireEvent.press(screen.getByTestId('path-postcard-tbilisi'));
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/postcards/[chapterId]',
      params: { chapterId: 'tbilisi' },
    });
    await fireEvent.press(screen.getByTestId('journey-pill'));
    expect(screen.getByTestId('journey-sheet')).toBeTruthy();
    expect(
      screen.getByLabelText('საქართველო, 3 / 18 ადგილი, შენ აქ ხარ'),
    ).toBeTruthy();
    expect(screen.getByTestId('journey-country-turkey')).toBeDisabled();
  } finally {
    gameStore.setState({ game: before });
  }
});

test('finishing the last stop in a country announces the next country', async () => {
  const before = gameStore.getState().game;
  try {
    gameStore.setState({ game: reachCurrentLevel(90) });
    jest.mocked(useLocalSearchParams).mockReturnValue({ levelId: 'ka-090' });
    const screen = await render(<Victory />);
    expect(screen.getByTestId('victory-new-country')).toHaveTextContent(
      'ახალი ქვეყანა: თურქეთი!',
    );
    expect(screen.getByText('ბათუმი · 5/5 გავლილია')).toBeTruthy();
    jest.mocked(useLocalSearchParams).mockReturnValue({ levelId: 'ka-089' });
    await screen.rerender(<Victory />);
    expect(screen.queryByTestId('victory-new-country')).toBeNull();
    // Mid-stop wins show the animated logo; stop ends show the postcard.
    expect(screen.getByTestId('victory-logo')).toBeTruthy();
  } finally {
    gameStore.setState({ game: before });
  }
});

test('home shows the logo and reads the game name once', async () => {
  const screen = await render(<Home />);
  expect(screen.getByTestId('home-logo')).toBeTruthy();
  expect(screen.getByRole('header', { name: 'ასობანა' })).toBeTruthy();
});

test("looking back at a finished level keeps the player's place", async () => {
  const before = gameStore.getState().game;
  try {
    // At level 18, the player opens finished level 2 from the path.
    const back = transition(
      reachCurrentLevel(17),
      { type: 'open-level', levelId: 'ka-002' },
      journeyCatalog,
    ).state;
    expect(back.currentLevelId).toBe('ka-002');
    gameStore.setState({ game: back });

    const level = await render(<GameplayScreen levelId="ka-002" />);
    expect(level.getByText('ეს დონე უკვე გავლილია')).toBeTruthy();
    expect(level.getByTestId('level-topic')).toHaveTextContent('თბილისი · 2/5');
    await fireEvent.press(level.getByTestId('review-continue'));
    expect(router.replace).toHaveBeenCalledWith({
      pathname: '/game/[levelId]',
      params: { levelId: 'ka-018' },
    });

    // Home still continues at level 18, named by its place.
    const home = await render(<Home />);
    expect(
      home.getByRole('button', { name: 'გაგრძელება, დონე 18 · ყაზბეგი · 3/5' }),
    ).toBeTruthy();
    await fireEvent.press(home.getByTestId('home-continue'));
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/game/[levelId]',
      params: { levelId: 'ka-018' },
    });
  } finally {
    gameStore.setState({ game: before });
  }
});
