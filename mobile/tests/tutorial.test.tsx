import { act, fireEvent, render } from '@testing-library/react-native';
import { router } from 'expo-router';
import { AccessibilityInfo } from 'react-native';
import Settings from '../app/(tabs)/settings';
import { gatherAdsConsent } from '../src/ads/consent';
import { cardPlacement } from '../src/components/CoachMarks';
import { catalog, previousCatalogs } from '../src/content/catalog';
import { DEFAULT_ECONOMY, initialState, transition } from '../src/engine/game';
import { ContentError } from '../src/engine/validation';
import type { GameState } from '../src/models/types';
import { GameplayScreen } from '../src/screens/GameplayScreen';
import { tutorialSteps } from '../src/screens/tutorial';
import { createGameStore } from '../src/state/createGameStore';
import { gameStore } from '../src/state/gameStore';
import { restoreContent } from '../src/storage/contentMigration';
import {
  createSqliteRepository,
  migrateDatabase,
} from '../src/storage/repository';
import { parseSnapshot } from '../src/storage/snapshot';
import { reachLevel, submit } from './helpers';
import { TestSqlite } from './sqliteAdapter';

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
  useNavigation: jest.fn().mockReturnValue({ addListener: () => () => {} }),
  useIsFocused: () => true,
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
jest.mock('../src/state/gameStore', () => {
  const { initialState } = require('../src/engine/game');
  const { catalog } = require('../src/content/catalog');
  const state = {
    game: initialState(catalog),
    busy: false,
    error: null,
    eventBatch: { sequence: 0, events: [] },
    dispatch: jest.fn(() => Promise.resolve()),
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
    addRRect: () => builder,
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
      XYWHRect: () => ({}),
      RRectXY: () => ({}),
    },
    vec: (x: number, y: number) => ({ x, y }),
  };
});

const dispatch = gameStore.getState().dispatch as jest.Mock;
const fresh = initialState(catalog);

/** Mount level 1 and let the screen settle long enough for the steps to start. */
async function openLevelOne(game: GameState) {
  gameStore.setState({ game });
  const screen = await render(<GameplayScreen levelId="ka-001" />);
  await act(() => jest.advanceTimersByTime(1000));
  return screen;
}

describe('tutorial on the board', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => {
    jest.useRealTimers();
    gameStore.setState({ game: fresh });
  });

  test('a first run walks through four steps over level 1 and is saved as seen', async () => {
    gameStore.setState({ game: fresh });
    // Host views report a laid-out box, as on a device, so rings and focus run.
    const screen = await render(<GameplayScreen levelId="ka-001" />, {
      createNodeMock: () => ({
        measureInWindow: (
          done: (x: number, y: number, w: number, h: number) => void,
        ) => done(51, 560, 300, 300),
      }),
    });
    // The board shows first; the steps wait for the screen to settle.
    expect(screen.queryByTestId('tutorial')).toBeNull();
    await act(() => jest.advanceTimersByTime(1000));

    const titles = tutorialSteps().map((step) => step.title);
    for (const [index, title] of titles.entries()) {
      // Focus moves once the step has drawn.
      await act(() => jest.advanceTimersByTime(300));
      expect(screen.getByTestId('tutorial-title')).toHaveTextContent(title);
      // VoiceOver reads the counter with the heading and lands on it.
      expect(
        screen.getByRole('header', {
          name: `ნაბიჯი ${index + 1} / 4. ${title}`,
        }),
      ).toBeTruthy();
      expect(AccessibilityInfo.sendAccessibilityEvent).toHaveBeenLastCalledWith(
        expect.anything(),
        'focus',
      );
      const next = screen.getByTestId('tutorial-next');
      expect(next).toHaveAccessibleName(
        index === titles.length - 1 ? 'დავიწყოთ' : 'შემდეგი',
      );
      await fireEvent.press(next);
    }
    expect(screen.queryByTestId('tutorial')).toBeNull();
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({ type: 'tutorial', seen: true });
  });

  test('skip ends the tutorial at once and saves it as seen', async () => {
    const screen = await openLevelOne(fresh);
    expect(screen.getByTestId('tutorial-title')).toHaveTextContent(
      'შეაერთე ასოები',
    );
    expect(screen.getByTestId('tutorial-skip')).toHaveAccessibleName(
      'გამოტოვება',
    );
    await fireEvent.press(screen.getByTestId('tutorial-skip'));
    expect(screen.queryByTestId('tutorial')).toBeNull();
    expect(dispatch).toHaveBeenCalledWith({ type: 'tutorial', seen: true });
    await act(() => jest.advanceTimersByTime(1000));
    expect(screen.queryByTestId('tutorial')).toBeNull();
  });

  test('a save that has seen it does not show it again', async () => {
    const screen = await openLevelOne({ ...fresh, tutorialSeen: true });
    expect(screen.getByTestId('letter-wheel')).toBeTruthy();
    expect(screen.queryByTestId('tutorial')).toBeNull();
    expect(dispatch).not.toHaveBeenCalled();
  });

  test('a solved board has no wheel to explain, so it waits', async () => {
    const solved = transition(
      reachLevel(1),
      { type: 'open-level', levelId: 'ka-001' },
      catalog,
    ).state;
    const screen = await openLevelOne({ ...solved, tutorialSeen: false });
    expect(screen.getByText('ეს დონე უკვე გავლილია')).toBeTruthy();
    expect(screen.queryByTestId('tutorial')).toBeNull();
  });

  test('the card sits beside the ringed control and keeps it visible', () => {
    const insets = { top: 59, bottom: 34 };
    const wheel = { x: 51, y: 560, width: 300, height: 300 };
    expect(cardPlacement(wheel, 874, insets)).toEqual({
      bottom: 874 - (560 - 10) + 14,
    });
    const meter = { x: 220, y: 150, width: 120, height: 18 };
    expect(cardPlacement(meter, 874, insets)).toEqual({
      // An 18 pt meter gets a 6 pt ring, clear of the topic line above it.
      top: 150 + 18 + 6 + 14,
    });
    expect(cardPlacement(null, 874, insets)).toBeNull();
  });
});

test('the copy names the hint prices and bonus reward from the economy', () => {
  const [, hints, , bonus] = tutorialSteps();
  expect(hints?.body).toContain('ერთ ასოს გახსნის — 20 მონეტა');
  expect(hints?.body).toContain('მთელ სიტყვას გახსნის — 50 მონეტა');
  expect(bonus?.body).toContain('თითო ბონუს სიტყვა 3 მონეტაა, ყოველი 10 კი');
  const dearer = tutorialSteps({
    ...DEFAULT_ECONOMY,
    cellHintCost: 30,
    wordHintCost: 55,
  });
  expect(dearer[1]?.body).toContain('30 მონეტა');
  expect(dearer[1]?.body).toContain('55 მონეტა');
  expect(tutorialSteps().map((step) => step.anchor)).toEqual([
    'wheel',
    'hints',
    'inputMode',
    'bonus',
  ]);
});

describe('settings', () => {
  afterEach(() => gameStore.setState({ game: fresh }));

  test('"how to play" clears the flag and opens the current level', async () => {
    gameStore.setState({ game: { ...reachLevel(7), tutorialSeen: true } });
    const screen = await render(<Settings />);
    expect(screen.getByText('როგორ ვითამაშოთ')).toBeTruthy();
    await fireEvent.press(screen.getByTestId('show-tutorial'));
    expect(dispatch).toHaveBeenCalledWith({ type: 'tutorial', seen: false });
    await act(() => Promise.resolve());
    expect(router.push).toHaveBeenCalledWith({
      pathname: '/game/[levelId]',
      params: { levelId: 'ka-008' },
    });
  });

  test('with every level finished there is no board to show it on', async () => {
    const done = reachLevel(catalog.levels.length - 1);
    const last = catalog.levels[catalog.levels.length - 1]!;
    let state = done;
    for (const word of last.words)
      state = submit(state, last, word.answer).state;
    gameStore.setState({ game: { ...state, tutorialSeen: true } });
    const screen = await render(<Settings />);
    expect(screen.getByText('ყველა დონე გავლილია.')).toBeTruthy();
    expect(screen.getByTestId('show-tutorial')).toBeDisabled();
  });
});

describe('ad privacy', () => {
  const consent = (required: boolean) =>
    ({
      AdsConsent: {
        gatherConsent: async () => ({
          canRequestAds: true,
          privacyOptionsRequirementStatus: required
            ? 'REQUIRED'
            : 'NOT_REQUIRED',
        }),
      },
      AdsConsentPrivacyOptionsRequirementStatus: { REQUIRED: 'REQUIRED' },
    }) as unknown as Parameters<typeof gatherAdsConsent>[0];

  test('settings offer the consent form only where the law requires it', async () => {
    gameStore.setState({ game: { ...reachLevel(7), tutorialSeen: true } });
    const screen = await render(<Settings />);
    expect(screen.queryByTestId('ad-privacy-options')).toBeNull();
    await act(async () => {
      await gatherAdsConsent(consent(true));
    });
    expect(screen.getByText('რეკლამის კონფიდენციალურობა')).toBeTruthy();
    expect(screen.getByTestId('ad-privacy-options')).toBeTruthy();
    await act(async () => {
      await gatherAdsConsent(consent(false));
    });
    expect(screen.queryByTestId('ad-privacy-options')).toBeNull();
  });
});

describe('save', () => {
  test('new games start unseen; the command sets and clears the flag', () => {
    expect(fresh.tutorialSeen).toBe(false);
    const seen = transition(fresh, { type: 'tutorial', seen: true }, catalog);
    expect(seen.state.tutorialSeen).toBe(true);
    expect(seen.state.coins).toBe(fresh.coins);
    expect(seen.events).toEqual([]);
    // Repeating it changes nothing, so the store writes nothing.
    expect(
      transition(seen.state, { type: 'tutorial', seen: true }, catalog).state,
    ).toBe(seen.state);
    expect(
      transition(seen.state, { type: 'tutorial', seen: false }, catalog).state
        .tutorialSeen,
    ).toBe(false);
  });

  test('saves from before the tutorial count as seen once a word was found', () => {
    const strip = ({ tutorialSeen: _, ...old }: GameState) => old;
    expect(parseSnapshot(strip(fresh), catalog).tutorialSeen).toBe(false);
    const level = catalog.levels[0]!;
    const oneWord = submit(fresh, level, level.words[0]!.answer).state;
    expect(parseSnapshot(strip(oneWord), catalog).tutorialSeen).toBe(true);
    // A real bonus-bearing board placed first isolates bonus discovery from
    // the progress required to unlock that board in the current campaign.
    const bonusTemplate = catalog.levels.find(
      (entry) => entry.bonusWords.length,
    )!;
    const bonusLevel = {
      ...bonusTemplate,
      id: level.id,
      chapterId: level.chapterId,
    };
    const bonusPack = {
      ...catalog,
      levels: [bonusLevel, ...catalog.levels.slice(1)],
    };
    const bonusOnly = submit(
      initialState(bonusPack),
      bonusLevel,
      bonusLevel.bonusWords[0]!,
      bonusPack,
    ).state;
    expect(parseSnapshot(strip(bonusOnly), bonusPack).tutorialSeen).toBe(true);
    expect(parseSnapshot(strip(reachLevel(12)), catalog).tutorialSeen).toBe(
      true,
    );
    // An explicit answer always wins over the guess.
    expect(parseSnapshot(oneWord, catalog).tutorialSeen).toBe(false);
    expect(() =>
      parseSnapshot({ ...fresh, tutorialSeen: 'yes' }, catalog),
    ).toThrow(ContentError);
  });

  test('a missing flag is written back once; a present one is left alone', () => {
    const { tutorialSeen: _, ...old } = reachLevel(3);
    const restored = restoreContent(old, catalog, previousCatalogs());
    expect(restored.migrated).toBe(true);
    expect(restored.state.tutorialSeen).toBe(true);
    expect(restoreContent(restored.state, catalog, previousCatalogs())).toEqual(
      {
        state: restored.state,
        migrated: false,
      },
    );
  });

  test('content upgrades keep coins and progress and carry the flag across', () => {
    const v12 = previousCatalogs().find((pack) => pack.revision === 12)!;
    expect(v12.revision).toBe(12);
    const played = reachLevel(3, v12);
    const { tutorialSeen: _, ...old } = played;
    const upgraded = restoreContent(old, catalog, previousCatalogs()).state;
    expect(upgraded.tutorialSeen).toBe(true);
    expect(upgraded.coins).toBe(played.coins);
    expect(upgraded.currentLevelId).toBe(played.currentLevelId);
    for (const level of catalog.levels.slice(0, 3))
      expect(upgraded.progress[level.id]?.completed).toBe(true);
    // A player who saw the tutorial on revision 12 stays done after the upgrade.
    const untouched = { ...initialState(v12), tutorialSeen: true };
    expect(
      restoreContent(untouched, catalog, previousCatalogs()).state.tutorialSeen,
    ).toBe(true);
  });

  test('SQLite keeps the answer across restarts; reset starts over', async () => {
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      const repository = createSqliteRepository(db, catalog);
      const store = createGameStore(catalog, async () => repository);
      await store.getState().initialize();
      expect(store.getState().game?.tutorialSeen).toBe(false);
      await store.getState().dispatch({ type: 'tutorial', seen: true });

      const restarted = createGameStore(catalog, async () => repository);
      await restarted.getState().initialize();
      expect(restarted.getState().game?.tutorialSeen).toBe(true);

      await restarted.getState().reset();
      expect(restarted.getState().game?.tutorialSeen).toBe(false);
      const again = createGameStore(catalog, async () => repository);
      await again.getState().initialize();
      expect(again.getState().game?.tutorialSeen).toBe(false);
    } finally {
      db.close();
    }
  });

  test('loading a pre-tutorial SQLite save fills in the flag without touching progress', async () => {
    const db = new TestSqlite();
    try {
      await migrateDatabase(db);
      const played = reachLevel(4);
      const { tutorialSeen: _, ...old } = played;
      await db.runAsync(
        'INSERT INTO game_snapshot VALUES(1, 7, ?, 1)',
        JSON.stringify(old),
      );
      const loaded = await createSqliteRepository(db, catalog).load();
      expect(loaded?.state).toEqual({ ...played, tutorialSeen: true });
      expect(loaded?.revision).toBe(8);
      const row = await db.getFirstAsync<{ payload: string }>(
        'SELECT payload FROM game_snapshot WHERE id = 1',
      );
      expect(JSON.parse(row!.payload)).toEqual({
        ...played,
        tutorialSeen: true,
      });
    } finally {
      db.close();
    }
  });
});
