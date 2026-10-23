import type { ReactNode } from 'react';
import type { LetterWheelViewProps } from '../src/components/LetterWheel';
import type { GameStoreState } from '../src/state/createGameStore';
import { act, fireEvent, render } from '@testing-library/react-native';
import { catalog } from '../src/content/catalog';
import { initialState } from '../src/engine/game';
import { GameplayScreen } from '../src/screens/GameplayScreen';
import { gameStore } from '../src/state/gameStore';
import { CrosswordBoard } from '../src/components/CrosswordBoard';
import { LetterWheel } from '../src/components/LetterWheel';
import { useHintRewardedAd } from '../src/ads/useHintRewardedAd';
import { submit } from './helpers';

jest.mock('react-native-worklets', () =>
  require('react-native-worklets/lib/module/mock'),
);
jest.mock('react-native-reanimated', () => ({
  ...require('react-native-reanimated/mock'),
  useReducedMotion: () => false,
}));
jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);
jest.mock('expo-router', () => ({
  router: { replace: jest.fn() },
  useFocusEffect: jest.fn(),
}));
jest.mock('../src/services/feedback', () => ({ tileHaptic: jest.fn() }));
jest.mock('../src/components/CoachMarks', () => ({ CoachMarks: () => null }));
jest.mock('../src/components/GameBannerAd', () => ({
  GameBannerAd: () => null,
  GAME_BANNER_HEIGHT: 74,
}));
jest.mock('../src/components/Screen', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    Screen: ({
      children,
      header,
      footer,
    }: {
      children: ReactNode;
      header: ReactNode;
      footer: ReactNode;
    }) => React.createElement(View, null, header, children, footer),
    TopBar: () => null,
  };
});
jest.mock('../src/components/CrosswordBoard', () => ({
  CrosswordBoard: jest.fn(() => null),
}));
jest.mock('../src/components/LetterWheel', () => {
  const React = require('react');
  const { View, Pressable } = require('react-native');
  return {
    wheelSize: () => 260,
    LetterWheel: jest.fn(({ leading, onSubmit, tiles }: LetterWheelViewProps) =>
      React.createElement(
        View,
        null,
        leading?.top,
        leading?.bottom,
        React.createElement(Pressable, {
          testID: 'submit-word',
          onPress: () => onSubmit(tiles.slice(0, 3).map((tile) => tile.id)),
        }),
      ),
    ),
  };
});
jest.mock('../src/ads/useHintRewardedAd', () => ({
  useHintRewardedAd: jest.fn(() => ({
    status: 'ready',
    blocked: false,
    engaged: false,
    watch: jest.fn(),
  })),
}));
jest.mock('../src/state/gameStore', () => {
  const { createStore } = require('zustand/vanilla');
  const { useStore } = require('zustand');
  const store = createStore(() => ({
    game: null,
    busy: false,
    error: null,
    status: 'ready',
    eventBatch: { sequence: 0, events: [] },
    dispatch: jest.fn().mockResolvedValue(undefined),
  }));
  return {
    gameStore: store,
    useGameStore: (selector: (state: GameStoreState) => unknown) =>
      useStore(store, selector),
  };
});

const watch = jest.fn().mockResolvedValue(undefined);
beforeEach(() => {
  jest.clearAllMocks();
  gameStore.setState({
    game: { ...initialState(catalog), tutorialSeen: true },
    busy: false,
    error: null,
    eventBatch: { sequence: 0, events: [] },
  });
  jest.mocked(useHintRewardedAd).mockReturnValue({
    status: 'ready',
    blocked: false,
    engaged: false,
    pending: false,
    watch,
    cancel: jest.fn(),
  });
});

test('busy-only updates do not rerender gameplay; hint presses read the latest guard', async () => {
  const screen = await render(
    <GameplayScreen levelId={catalog.levels[0]!.id} />,
  );
  const boardRenders = jest.mocked(CrosswordBoard).mock.calls.length;
  const wheelRenders = jest.mocked(LetterWheel).mock.calls.length;
  await act(async () => gameStore.setState({ busy: true }));
  expect(CrosswordBoard).toHaveBeenCalledTimes(boardRenders);
  expect(LetterWheel).toHaveBeenCalledTimes(wheelRenders);
  await fireEvent.press(screen.getByTestId('hint-cell'));
  await fireEvent.press(screen.getByTestId('hint-word'));
  expect(gameStore.getState().dispatch).not.toHaveBeenCalled();
  await act(async () => gameStore.setState({ busy: false }));
  expect(CrosswordBoard).toHaveBeenCalledTimes(boardRenders);
  expect(LetterWheel).toHaveBeenCalledTimes(wheelRenders);
  await fireEvent.press(screen.getByTestId('hint-cell'));
  expect(gameStore.getState().dispatch).toHaveBeenCalledWith({
    type: 'hint',
    levelId: catalog.levels[0]!.id,
    kind: 'cell',
  });
  expect(watch).not.toHaveBeenCalled();
});

test('a hint mounted during a save becomes usable when that save finishes', async () => {
  gameStore.setState({ busy: true });
  const screen = await render(
    <GameplayScreen levelId={catalog.levels[0]!.id} />,
  );
  await act(async () => gameStore.setState({ busy: false }));
  await fireEvent.press(screen.getByTestId('hint-word'));
  expect(gameStore.getState().dispatch).toHaveBeenCalledWith({
    type: 'hint',
    levelId: catalog.levels[0]!.id,
    kind: 'word',
  });
});

test('low-coin hint ad presses keep the busy guard and require an explicit press after saving', async () => {
  gameStore.setState({
    game: { ...initialState(catalog), coins: 0, tutorialSeen: true },
  });
  const screen = await render(
    <GameplayScreen levelId={catalog.levels[0]!.id} />,
  );
  await act(async () => gameStore.setState({ busy: true }));
  await fireEvent.press(screen.getByTestId('hint-cell'));
  await fireEvent.press(screen.getByTestId('hint-word'));
  expect(watch).not.toHaveBeenCalled();
  await act(async () => gameStore.setState({ busy: false }));
  expect(watch).not.toHaveBeenCalled();
  await fireEvent.press(screen.getByTestId('hint-word'));
  expect(watch).toHaveBeenCalledTimes(1);
  expect(gameStore.getState().dispatch).not.toHaveBeenCalled();
});

test('word submissions still reach the queue while busy; committed progress and save errors still render', async () => {
  const level = catalog.levels[0]!;
  const screen = await render(<GameplayScreen levelId={level.id} />);
  await act(async () => gameStore.setState({ busy: true }));
  await fireEvent.press(screen.getByTestId('submit-word'));
  expect(gameStore.getState().dispatch).toHaveBeenCalledWith({
    type: 'submit',
    levelId: level.id,
    tileIds: level.tiles.slice(0, 3).map((tile) => tile.id),
  });
  const next = submit(
    gameStore.getState().game!,
    level,
    level.words[0]!.answer,
  );
  await act(async () =>
    gameStore.setState({
      game: next.state,
      eventBatch: { sequence: 1, events: next.events },
    }),
  );
  const latest = jest.mocked(CrosswordBoard).mock.calls.at(-1)![0];
  expect(latest.cells.some((cell) => cell.status === 'revealed')).toBe(true);
  await act(async () =>
    gameStore.setState({ error: 'disk write failed', busy: false }),
  );
  expect(screen.getByText('disk write failed')).toBeTruthy();
});
