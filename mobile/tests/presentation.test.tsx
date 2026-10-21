import { act, fireEvent, render } from '@testing-library/react-native';
import { View } from 'react-native';
import { PrimaryButton, RoundButton } from '../src/components/Buttons';
import { CrosswordBoard } from '../src/components/CrosswordBoard';
import { LetterWheel } from '../src/components/LetterWheel';
import { Display } from '../src/components/Text';
import { BonusMeter } from '../src/components/BonusMeter';
import Coins from '../app/coins';
import { rewardedAds, useRewardedAd } from '../src/ads/rewardedAds';
import {
  levelRewardAds,
  useLevelRewardAdSnapshot,
} from '../src/ads/levelRewardAds';
import Postcards from '../app/(tabs)/album';
import { gameStore } from '../src/state/gameStore';
import { reachLevel as reachCurrentLevel } from './helpers';
import { router, useIsFocused, useLocalSearchParams } from 'expo-router';
import Victory from '../app/victory/[levelId]';
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
import { TabBar } from '../src/components/TabBar';
import { blockedHaptic } from '../src/services/feedback';
import { StampedPostcard } from '../src/components/PostcardStamp';
import { placeFacts } from '../src/content/destinations';
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
  router: {
    canGoBack: () => false,
    replace: jest.fn(),
    push: jest.fn(),
    navigate: jest.fn(),
    dismissTo: jest.fn(),
  },
  useFocusEffect: jest.fn(),
  useIsFocused: jest.fn(() => true),
  useLocalSearchParams: jest.fn(() => ({})),
}));
jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);
jest.mock('../src/services/feedback', () => ({
  tileHaptic: jest.fn(),
  blockedHaptic: jest.fn(),
}));
jest.mock('../src/ads/rewardedAds', () => ({
  rewardedAds: {
    load: jest.fn().mockResolvedValue(undefined),
    show: jest.fn().mockResolvedValue(undefined),
    watch: jest.fn().mockResolvedValue(undefined),
    retryReward: jest.fn().mockResolvedValue(undefined),
  },
  useRewardedAd: jest.fn(() => ({ status: 'ready' })),
}));
jest.mock('../src/ads/levelRewardAds', () => ({
  levelRewardAds: {
    load: jest.fn().mockResolvedValue(undefined),
    show: jest.fn().mockResolvedValue(undefined),
    watch: jest.fn().mockResolvedValue(undefined),
    retryReward: jest.fn().mockResolvedValue(undefined),
  },
  useLevelRewardAdSnapshot: jest.fn(() => ({ status: 'ready' })),
}));
jest.mock('../src/state/gameStore', () => {
  const { initialState } = require('../src/engine/game');
  const { catalog } = require('../src/content/catalog');
  const state = {
    // The first-time tutorial has its own suite (tutorial.test.tsx).
    game: { ...initialState(catalog), tutorialSeen: true },
    busy: false,
    status: 'ready',
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
    addRect: () => builder,
    addCircle: () => builder,
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
    PathOp: { Difference: 0 },
    Skia: {
      PathBuilder: { Make: () => builder, MakeFromPath: () => builder },
      Path: { MakeFromSVGString: () => ({}), MakeFromOp: () => ({}) },
      XYWHRect: () => ({}),
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
    expect(screen.getByText('1/69 ბარათი შეგროვებულია')).toBeTruthy();
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

test('low-balance hints clearly offer an ad and watch directly without navigating or buying a hint', async () => {
  const before = gameStore.getState().game;
  try {
    gameStore.setState({
      game: { ...initialState(journeyCatalog), coins: 0, tutorialSeen: true },
    });
    const screen = await render(<GameplayScreen levelId="ka-001" />);
    expect(screen.getByTestId('hint-word')).not.toBeDisabled();
    expect(screen.getByTestId('hint-cell')).not.toBeDisabled();
    expect(screen.getAllByText('+75')).toHaveLength(2);
    expect(screen.getByTestId('hint-word').props.accessibilityHint).toBe(
      'რეკლამა გაიხსნება აქვე; მინიშნებას შემდეგ ცალკე აირჩევ',
    );
    expect(rewardedAds.load).toHaveBeenCalledTimes(1);
    expect(rewardedAds.watch).not.toHaveBeenCalled();
    await act(async () => {
      fireEvent.press(screen.getByTestId('hint-word'));
    });
    await act(async () => {
      fireEvent.press(screen.getByTestId('hint-cell'));
    });
    expect(router.push).not.toHaveBeenCalled();
    expect(gameStore.getState().dispatch).not.toHaveBeenCalled();
    expect(rewardedAds.watch).toHaveBeenCalledTimes(2);
    gameStore.setState({ game: { ...gameStore.getState().game!, coins: 75 } });
    await screen.rerender(<GameplayScreen levelId="ka-001" />);
    expect(screen.queryByText('+75')).toBeNull();
    expect(gameStore.getState().dispatch).not.toHaveBeenCalled();
  } finally {
    gameStore.setState({ game: before });
  }
});

test('affordable and free hints still perform the hint action without an ad', async () => {
  const before = gameStore.getState().game;
  const dispatch = jest
    .mocked(gameStore.getState().dispatch)
    .mockResolvedValue(undefined);
  try {
    gameStore.setState({
      game: { ...initialState(journeyCatalog), coins: 30, tutorialSeen: true },
    });
    const screen = await render(<GameplayScreen levelId="ka-001" />);
    expect(screen.getAllByText('+75')).toHaveLength(1);
    await fireEvent.press(screen.getByTestId('hint-cell'));
    expect(dispatch).toHaveBeenCalledWith({
      type: 'hint',
      levelId: 'ka-001',
      kind: 'cell',
    });
    gameStore.setState({
      game: {
        ...gameStore.getState().game!,
        coins: 0,
        bonusRewards: { totalFound: 10, hintsSpent: 0 },
      },
    });
    await screen.rerender(<GameplayScreen levelId="ka-001" />);
    await fireEvent.press(screen.getByTestId('hint-cell'));
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(rewardedAds.watch).not.toHaveBeenCalled();
  } finally {
    gameStore.setState({ game: before });
  }
});

test('a pending hint ad cancels on navigation and offers a save-only retry after storage failure', async () => {
  const before = gameStore.getState().game;
  let signal: AbortSignal | undefined;
  jest.mocked(rewardedAds.watch).mockImplementationOnce(
    (next) =>
      new Promise<void>((resolve) => {
        signal = next;
        next.addEventListener('abort', () => resolve());
      }),
  );
  jest.mocked(useRewardedAd).mockReturnValue({ status: 'loading' });
  try {
    gameStore.setState({
      game: { ...initialState(journeyCatalog), coins: 0, tutorialSeen: true },
    });
    const screen = await render(<GameplayScreen levelId="ka-001" />);
    await fireEvent.press(screen.getByTestId('hint-word'));
    expect(screen.getByTestId('hint-word')).toBeDisabled();
    expect(screen.getByTestId('hint-ad-dismiss')).toBeTruthy();
    jest.mocked(useIsFocused).mockReturnValue(false);
    await screen.rerender(<GameplayScreen levelId="ka-001" />);
    expect(signal?.aborted).toBe(true);
    expect(screen.queryByTestId('hint-ad-notice')).toBeNull();
    jest.mocked(useIsFocused).mockReturnValue(true);
    jest.mocked(useRewardedAd).mockReturnValue({ status: 'save-error' });
    await screen.rerender(<GameplayScreen levelId="ka-001" />);
    await fireEvent.press(screen.getByTestId('hint-word'));
    expect(rewardedAds.retryReward).toHaveBeenCalledTimes(1);
    expect(rewardedAds.watch).toHaveBeenCalledTimes(1);
    await act(async () => {});
  } finally {
    gameStore.setState({ game: before });
    jest.mocked(useIsFocused).mockReturnValue(true);
    jest.mocked(useRewardedAd).mockReturnValue({ status: 'ready' });
  }
});

test('coins screen shows the 75-coin offer and requires an explicit watch press', async () => {
  const before = gameStore.getState().game;
  gameStore.setState({ game: { ...initialState(journeyCatalog), coins: 0 } });
  jest.mocked(useLocalSearchParams).mockReturnValue({ reason: 'hint' });
  try {
    const screen = await render(<Coins />);
    expect(screen.getByText(/მინიშნებისთვის მონეტები არ გყოფნის/)).toBeTruthy();
    expect(
      screen.getByRole('button', { name: 'ნახე რეკლამა · +75 მონეტა' }),
    ).toBeTruthy();
    expect(rewardedAds.load).toHaveBeenCalledTimes(1);
    expect(rewardedAds.show).not.toHaveBeenCalled();
    await fireEvent.press(screen.getByTestId('rewarded-ad'));
    expect(rewardedAds.show).toHaveBeenCalledTimes(1);
    gameStore.setState({
      game: { ...initialState(journeyCatalog), coins: 75 },
    });
    await screen.rerender(<Coins />);
    expect(screen.queryByText(/მინიშნებისთვის მონეტები არ გყოფნის/)).toBeNull();
  } finally {
    gameStore.setState({ game: before });
    jest.mocked(useLocalSearchParams).mockReturnValue({});
  }
});

test('the coin offer disables pending ads and retries an earned save without showing another ad', async () => {
  jest.mocked(useRewardedAd).mockReturnValue({ status: 'saving' });
  try {
    const screen = await render(<Coins />);
    expect(screen.getByTestId('rewarded-ad')).toBeDisabled();
    await fireEvent.press(screen.getByTestId('rewarded-ad'));
    expect(rewardedAds.show).not.toHaveBeenCalled();
    jest.mocked(useRewardedAd).mockReturnValue({ status: 'save-error' });
    await screen.rerender(<Coins />);
    await fireEvent.press(screen.getByTestId('rewarded-ad'));
    expect(rewardedAds.retryReward).toHaveBeenCalledTimes(1);
    expect(rewardedAds.show).not.toHaveBeenCalled();
  } finally {
    jest.mocked(useRewardedAd).mockReturnValue({ status: 'ready' });
  }
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
    // The old home and shop links are gone from the path.
    expect(screen.queryByTestId('journey-home')).toBeNull();
    expect(screen.queryByText('მაღაზია')).toBeNull();
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

test('locked levels, postcards and countries say what opens them', async () => {
  const before = gameStore.getState().game;
  try {
    gameStore.setState({ game: reachCurrentLevel(3) });
    const screen = await render(<JourneyScreen />);
    expect(screen.queryByTestId('path-notice')).toBeNull();
    await fireEvent.press(screen.getByTestId('level-ka-005'));
    expect(screen.getByTestId('path-notice')).toHaveTextContent(
      'ჯერ გაიარე დონე 4',
    );
    expect(blockedHaptic).toHaveBeenCalledTimes(1);
    await fireEvent.press(screen.getByTestId('path-postcard-tbilisi'));
    expect(screen.getByTestId('path-notice')).toHaveTextContent(
      'ბარათამდე დარჩა 2 დონე',
    );
    await fireEvent.press(screen.getByTestId('journey-pill'));
    await fireEvent.press(screen.getByTestId('journey-country-turkey'));
    expect(screen.getByTestId('path-notice')).toHaveTextContent(
      'გაიხსნება წინა ქვეყნის შემდეგ',
    );
    expect(router.push).not.toHaveBeenCalled();
  } finally {
    gameStore.setState({ game: before });
  }
});

test('the bottom bar has the journey, album and settings, and no shop', async () => {
  const routeList = ['index', 'album', 'settings'].map((name) => ({
    key: `${name}-key`,
    name,
    params: undefined,
  }));
  const navigation = {
    emit: jest.fn(() => ({ defaultPrevented: false })),
    navigate: jest.fn(),
  };
  const props = {
    state: { index: 0, routes: routeList },
    navigation,
    insets: { top: 0, bottom: 20, left: 0, right: 0 },
  } as unknown as Parameters<typeof TabBar>[0];
  const screen = await render(<TabBar {...props} />);
  expect(
    screen.getAllByRole('tab').map((tab) => tab.props.accessibilityLabel),
  ).toEqual(['მოგზაურობა', 'ალბომი', 'პარამეტრები']);
  expect(screen.getByTestId('tab-journey')).toBeSelected();
  await fireEvent.press(screen.getByTestId('tab-album'));
  expect(navigation.navigate).toHaveBeenCalledWith('album', undefined);
  // The open tab does not stack itself again.
  await fireEvent.press(screen.getByTestId('tab-journey'));
  expect(navigation.navigate).toHaveBeenCalledTimes(1);
});

test('victory returns to the journey path; there is no home button', async () => {
  const before = gameStore.getState().game;
  try {
    gameStore.setState({ game: reachCurrentLevel(3) });
    jest.mocked(useLocalSearchParams).mockReturnValue({ levelId: 'ka-003' });
    const screen = await render(<Victory />);
    expect(screen.queryByText('მთავარი')).toBeNull();
    await fireEvent.press(screen.getByTestId('victory-journey'));
    expect(router.dismissTo).toHaveBeenCalledWith('/');
  } finally {
    gameStore.setState({ game: before });
  }
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

    // The path still marks level 18 as the next one, and once the player
    // scrolls away from it, its continue button names the place.
    const path = await render(<JourneyScreen />);
    expect(path.queryByTestId('path-continue')).toBeNull();
    const list = path.getByTestId('journey-path');
    await fireEvent(list, 'layout', {
      nativeEvent: { layout: { x: 0, y: 0, width: 402, height: 700 } },
    });
    await fireEvent.scroll(list, {
      nativeEvent: {
        contentOffset: { x: 0, y: 0 },
        contentSize: { width: 402, height: 60000 },
        layoutMeasurement: { width: 402, height: 700 },
      },
    });
    expect(
      path.getByRole('button', { name: 'გაგრძელება, დონე 18 · ყაზბეგი · 3/5' }),
    ).toBeTruthy();
    await fireEvent.press(path.getByTestId('path-continue'));
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/game/[levelId]',
      params: { levelId: 'ka-018' },
    });
  } finally {
    gameStore.setState({ game: before });
  }
});

test('a place card opens its sheet; the fact waits until the player arrives', async () => {
  const before = gameStore.getState().game;
  try {
    gameStore.setState({ game: reachCurrentLevel(3) });
    const screen = await render(<JourneyScreen />);
    await fireEvent.press(screen.getByTestId('stop-tbilisi'));
    expect(screen.getByTestId('place-sheet')).toBeTruthy();
    expect(screen.getByTestId('place-fact')).toHaveTextContent(
      placeFacts.tbilisi!,
      { exact: false },
    );
    expect(screen.getByText('დონე 1–5 · 3/5 გავლილია')).toBeTruthy();
    expect(screen.getByText('ბარათამდე დარჩა 2 დონე')).toBeTruthy();
    await fireEvent.press(screen.getByTestId('place-continue'));
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/game/[levelId]',
      params: { levelId: 'ka-004' },
    });
    expect(screen.queryByTestId('place-sheet')).toBeNull();
    // A place not reached yet keeps its fact for the arrival.
    await fireEvent.press(screen.getByTestId('stop-mtskheta'));
    expect(screen.getByText('ჯერ არ ჩასულხარ')).toBeTruthy();
    expect(screen.queryByTestId('place-fact')).toBeNull();
    expect(screen.queryByTestId('place-continue')).toBeNull();
  } finally {
    gameStore.setState({ game: before });
  }
});

test("the fact greets a place's first win and stays on its stamped postcard", async () => {
  const before = gameStore.getState().game;
  try {
    gameStore.setState({ game: reachCurrentLevel(17) });
    jest.mocked(useLocalSearchParams).mockReturnValue({ levelId: 'ka-016' });
    const screen = await render(<Victory />);
    expect(screen.getByTestId('place-fact')).toHaveTextContent(
      placeFacts.kazbegi!,
      { exact: false },
    );
    jest.mocked(useLocalSearchParams).mockReturnValue({ levelId: 'ka-017' });
    await screen.rerender(<Victory />);
    expect(screen.queryByTestId('place-fact')).toBeNull();
  } finally {
    gameStore.setState({ game: before });
  }
  // The full card is a stamp with the fact on a note; earned pre-journey
  // cards have no fact and show the stamp alone.
  const card = await render(<StampedPostcard chapterId="kazbegi" number={4} />);
  expect(card.getByLabelText('ყაზბეგი, ბარათი 4, საქართველო')).toBeTruthy();
  expect(card.getByTestId('place-fact')).toHaveTextContent(
    placeFacts.kazbegi!,
    { exact: false },
  );
  await card.rerender(<StampedPostcard chapterId="weather" number={1} />);
  expect(card.queryByTestId('place-fact')).toBeNull();
});

/** The victory screen as reached straight from finishing `levelId` on the board. */
function justFinished(levelId: string, game = reachCurrentLevel(3)) {
  gameStore.setState({
    game,
    eventBatch: {
      sequence: 1,
      events: [
        { type: 'level-completed', levelId, reward: 20, nextLevelId: null },
      ],
    },
  });
  jest.mocked(useLocalSearchParams).mockReturnValue({ levelId });
}

describe('the optional ×2 ad on the victory screen', () => {
  let before: ReturnType<typeof gameStore.getState>['game'];
  beforeEach(() => {
    before = gameStore.getState().game;
  });
  afterEach(() => {
    gameStore.setState({
      game: before,
      eventBatch: { sequence: 0, events: [] },
    });
    jest.mocked(useLocalSearchParams).mockReturnValue({});
    jest.mocked(useIsFocused).mockReturnValue(true);
    jest.mocked(useLevelRewardAdSnapshot).mockReturnValue({ status: 'ready' });
  });

  test('appears beside a just-earned reward and presents only on its press', async () => {
    justFinished('ka-003');
    const coins = gameStore.getState().game!.coins;
    const screen = await render(<Victory />);
    expect(screen.getByLabelText('ჯილდო 20 მონეტა')).toBeTruthy();
    const offer = screen.getByTestId('victory-double');
    expect(offer.props.accessibilityLabel).toBe(
      'ნახე რეკლამა და გააორმაგე ჯილდო: +20 მონეტა',
    );
    // Moving on stays the primary action; nothing plays by itself.
    expect(screen.getByTestId('victory-next')).toBeTruthy();
    expect(levelRewardAds.load).toHaveBeenCalledTimes(1);
    expect(levelRewardAds.watch).not.toHaveBeenCalled();
    await act(async () => {
      fireEvent.press(offer);
    });
    expect(levelRewardAds.watch).toHaveBeenCalledTimes(1);
    expect(jest.mocked(levelRewardAds.watch).mock.calls[0]![1]).toBe('ka-003');
    // The press itself pays nothing: only the SDK's earned event can.
    expect(gameStore.getState().game!.coins).toBe(coins);
    expect(gameStore.getState().dispatch).not.toHaveBeenCalled();
  });

  test('is absent when reopening a finished level, before finishing, and without ads', async () => {
    gameStore.setState({ game: reachCurrentLevel(3) });
    jest.mocked(useLocalSearchParams).mockReturnValue({ levelId: 'ka-003' });
    const screen = await render(<Victory />);
    expect(screen.queryByTestId('victory-double')).toBeNull();
    jest.mocked(useLocalSearchParams).mockReturnValue({ levelId: 'ka-004' });
    await screen.rerender(<Victory />);
    expect(screen.getByText('ჯერ ეს დონე გაიარე.')).toBeTruthy();
    expect(screen.queryByTestId('victory-double')).toBeNull();
    expect(levelRewardAds.load).not.toHaveBeenCalled();
    await screen.unmount();
    justFinished('ka-003');
    jest
      .mocked(useLevelRewardAdSnapshot)
      .mockReturnValue({ status: 'unavailable' });
    const expoGo = await render(<Victory />);
    expect(expoGo.getByLabelText('ჯილდო 20 მონეტა')).toBeTruthy();
    expect(expoGo.queryByTestId('victory-double')).toBeNull();
  });

  test('a doubled level shows its 40 coins and never offers a second ad', async () => {
    justFinished('ka-003', {
      ...reachCurrentLevel(3),
      doubledRewardLevelIds: ['ka-003'],
    });
    const screen = await render(<Victory />);
    expect(screen.getByLabelText('ჯილდო 40 მონეტა')).toBeTruthy();
    expect(screen.getByTestId('victory-doubled')).toBeTruthy();
    expect(screen.queryByTestId('victory-double')).toBeNull();
    expect(levelRewardAds.load).not.toHaveBeenCalled();
  });

  test('leaving the screen or cancelling drops a waiting ad; a failed save retries without one', async () => {
    const signals: AbortSignal[] = [];
    jest.mocked(levelRewardAds.watch).mockImplementation(
      (signal) =>
        new Promise<void>((resolve) => {
          signals.push(signal);
          signal.addEventListener('abort', () => resolve());
        }),
    );
    jest
      .mocked(useLevelRewardAdSnapshot)
      .mockReturnValue({ status: 'loading' });
    try {
      justFinished('ka-003');
      const screen = await render(<Victory />);
      await fireEvent.press(screen.getByTestId('victory-double'));
      expect(screen.getByTestId('victory-double')).toBeDisabled();
      expect(screen.getByTestId('victory-double-notice')).toHaveTextContent(
        /რეკლამა იტვირთება/,
      );
      await fireEvent.press(screen.getByTestId('victory-double-cancel'));
      expect(signals[0]?.aborted).toBe(true);
      expect(screen.queryByTestId('victory-double-notice')).toBeNull();
      await fireEvent.press(screen.getByTestId('victory-double'));
      // Next level / journey navigation unfocuses the screen.
      jest.mocked(useIsFocused).mockReturnValue(false);
      await screen.rerender(<Victory />);
      expect(signals[1]?.aborted).toBe(true);
      jest.mocked(useIsFocused).mockReturnValue(true);
      jest
        .mocked(useLevelRewardAdSnapshot)
        .mockReturnValue({ status: 'save-error', target: 'ka-003' });
      await screen.rerender(<Victory />);
      await act(async () => {
        fireEvent.press(screen.getByTestId('victory-double'));
      });
      expect(levelRewardAds.retryReward).toHaveBeenCalledTimes(1);
      expect(levelRewardAds.watch).toHaveBeenCalledTimes(2);
    } finally {
      jest.mocked(levelRewardAds.watch).mockResolvedValue(undefined);
    }
  });
});
