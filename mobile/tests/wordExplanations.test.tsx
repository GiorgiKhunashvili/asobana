import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { ReactNode } from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';
import type { GameStoreState } from '../src/state/createGameStore';
import { catalog } from '../src/content/catalog';
import data from '../../content/word-explanations.json';
import { hasExplanation } from '../src/content/wordExplanations';
import { CrosswordBoard, explainSpot } from '../src/components/CrosswordBoard';
import { GameBannerAd } from '../src/components/GameBannerAd';
import { WordMeanings } from '../src/components/WordExplanation';
import { WordStrip } from '../src/components/WordStrip';
import { selectGameplay } from '../src/engine/selectors';
import { GameplayScreen } from '../src/screens/GameplayScreen';
import { gameStore } from '../src/state/gameStore';
import { reachLevel, submit } from './helpers';

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
  GameBannerAd: jest.fn(() => null),
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
      overlay,
    }: {
      children: ReactNode;
      header: ReactNode;
      footer: ReactNode;
      overlay: ReactNode;
    }) => React.createElement(View, null, header, children, overlay, footer),
    TopBar: () => null,
  };
});
jest.mock('../src/components/LetterWheel', () => {
  const React = require('react');
  const { Pressable, View } = require('react-native');
  return {
    wheelSize: () => 260,
    LetterWheel: jest.fn(({ onExplain }: { onExplain: (() => void) | null }) =>
      React.createElement(
        View,
        null,
        onExplain &&
          React.createElement(Pressable, {
            testID: 'strip-explain',
            onPress: onExplain,
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
    pending: false,
    watch: jest.fn(),
    cancel: jest.fn(),
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

const explanations = data.explanations as Record<string, string>;
const words = Object.keys(explanations);
const answers = new Set(
  catalog.levels.flatMap((level) => level.words.map((word) => word.answer)),
);
// Level 22 has ბიტი and ბოტი, explained, and ჰობი, which needs no explanation.
const level = catalog.levels[21]!;

describe('explanation content', () => {
  test('explains exactly the 389 owner-selected active answers', () => {
    expect(words).toHaveLength(389);
    expect(words.filter((word) => !answers.has(word))).toEqual([]);
    const reviewed = ['01', '02', '03'].flatMap((batch) => {
      const { entries } = JSON.parse(
        readFileSync(
          join(__dirname, `../../docs/WORD_EXPLANATIONS_BATCH_${batch}.json`),
          'utf8',
        ),
      ) as { entries: { word: string; explanationKa: string }[] };
      return entries.map((entry) => [entry.word, entry.explanationKa]);
    });
    expect(Object.fromEntries(reviewed)).toEqual(explanations);
  });

  test('every explanation is one short line that does not repeat its word', () => {
    for (const [word, text] of Object.entries(explanations)) {
      expect(text.length).toBeLessThanOrEqual(90);
      expect(text.endsWith('.')).toBe(true);
      expect(text.split(/[^ა-ჿ]+/)).not.toContain(word);
    }
  });

  test('explained words sharing a first cell always cross, so each ? has its own spot', () => {
    const shared = catalog.levels.flatMap(({ words: levelWords }) =>
      levelWords
        .filter((word) => hasExplanation(word.answer))
        .flatMap((word, index, all) =>
          all
            .slice(index + 1)
            .filter(
              (other) => other.row === word.row && other.column === word.column,
            )
            .map((other) => [word.direction, other.direction].sort()),
        ),
    );
    expect(shared).toEqual(new Array(4).fill(['across', 'down']));
  });
});

test('the view lists solved words only, so answers stay hidden', () => {
  const opened = reachLevel(21);
  expect(selectGameplay(opened, catalog).solvedWords).toEqual([]);
  const solved = submit(opened, level, 'ბიტი').state;
  expect(selectGameplay(solved, catalog).solvedWords).toEqual([
    expect.objectContaining({ word: 'ბიტი', row: 0, column: 6 }),
  ]);
});

describe('word strip', () => {
  const feedback = { key: 1, kind: 'found', word: 'ბიტი' } as const;
  const strip = {
    idleHint: null,
    width: 358,
    onExplain: jest.fn(),
  };

  test('offers the ? beside a found word', async () => {
    const screen = await render(
      <WordStrip {...strip} letters={[]} feedback={feedback} />,
    );
    await fireEvent.press(screen.getByTestId('strip-explain'));
    expect(strip.onExplain).toHaveBeenCalledTimes(1);
  });

  test('drops the ? when the next word is traced or another outcome arrives', async () => {
    const screen = await render(
      <WordStrip {...strip} letters={['ბ']} feedback={feedback} />,
    );
    expect(screen.queryByTestId('strip-explain')).toBeNull();
    await screen.rerender(
      <WordStrip
        {...strip}
        letters={[]}
        feedback={{ ...feedback, kind: 'invalid' }}
      />,
    );
    expect(screen.queryByTestId('strip-explain')).toBeNull();
  });
});

describe('board', () => {
  const grid = { rows: 5, columns: 7 };

  test('keeps a ? on each explained word and reports which was pressed', async () => {
    const onExplain = jest.fn();
    const screen = await render(
      <CrosswordBoard
        cells={[]}
        grid={grid}
        explained={[
          { id: 'word-1', word: 'ბიტი', row: 0, column: 6, direction: 'down' },
        ]}
        onExplain={onExplain}
      />,
    );
    await fireEvent.press(screen.getByTestId('board-explain-word-1'));
    expect(onExplain).toHaveBeenCalledWith('ბიტი');
  });

  test('two words on one cell keep their ? marks apart, wherever they are found', () => {
    const across = {
      id: 'a',
      word: 'ძუა',
      row: 1,
      column: 2,
      direction: 'across',
    } as const;
    const down = {
      ...across,
      id: 'd',
      word: 'ძიუდო',
      direction: 'down',
    } as const;
    const both = [across, down];
    const left = explainSpot(down, both, 26, 16);
    const right = explainSpot(across, both, 26, 16);
    expect(left.position.left).toBeLessThan(right.position.left);
    // Each tap area stops before the other mark's, so neither can steal a tap.
    const leftEdge = left.position.left + 16 + left.hitSlop.right;
    const rightEdge = right.position.left - right.hitSlop.left;
    expect(leftEdge).toBeLessThanOrEqual(rightEdge);
    // Alone, a down word keeps the usual corner and a full tap area.
    expect(explainSpot(down, [down], 26, 16)).toEqual({
      ...right,
      hitSlop: { top: 16, bottom: 16, left: 16, right: 16 },
    });
  });

  test('shows no ? unless asked to', async () => {
    const screen = await render(<CrosswordBoard cells={[]} grid={grid} />);
    expect(screen.queryByTestId('board-explain-word-1')).toBeNull();
  });
});

test('the victory box opens each listed word', async () => {
  const onOpen = jest.fn();
  const screen = await render(
    <WordMeanings words={['ბიტი', 'ბოტი']} onOpen={onOpen} />,
  );
  await fireEvent.press(screen.getByTestId('word-meaning-ბოტი'));
  expect(onOpen).toHaveBeenCalledWith('ბოტი');
});

describe('gameplay', () => {
  const dispatch = () => gameStore.getState().dispatch;

  async function open(state: ReturnType<typeof reachLevel>) {
    await act(async () =>
      gameStore.setState({
        game: state,
        busy: false,
        error: null,
        eventBatch: { sequence: 0, events: [] },
      }),
    );
    return render(<GameplayScreen levelId={level.id} />);
  }

  beforeEach(() => jest.clearAllMocks());

  test('the board ? opens a card, tapping closes it, and nothing is spent', async () => {
    const state = submit(reachLevel(21), level, 'ბიტი').state;
    const word = level.words.find((entry) => entry.answer === 'ბიტი')!;
    const screen = await open(state);
    const banner = jest.mocked(GameBannerAd);
    const shownBefore = banner.mock.lastCall?.[0];
    expect(screen.queryByTestId('word-explanation')).toBeNull();

    await fireEvent.press(screen.getByTestId(`board-explain-${word.id}`));
    expect(
      screen.getByTestId('word-explanation').props.accessibilityLabel,
    ).toBe(`ბიტი. ${explanations['ბიტი']}`);
    expect(banner.mock.lastCall?.[0]).toEqual(shownBefore);

    await fireEvent.press(screen.getByTestId('word-explanation-close'));
    expect(screen.queryByTestId('word-explanation')).toBeNull();
    expect(dispatch()).not.toHaveBeenCalled();
    expect(gameStore.getState().game?.coins).toBe(state.coins);
  });

  test('the strip ? follows the word just found, only when it has an explanation', async () => {
    const opened = reachLevel(21);
    const explained = submit(opened, level, 'ბიტი');
    const plain = submit(opened, level, 'ჰობი');
    const screen = await open(opened);
    await act(async () =>
      gameStore.setState({
        game: plain.state,
        eventBatch: { sequence: 1, events: plain.events },
      }),
    );
    expect(screen.queryByTestId('strip-explain')).toBeNull();
    await act(async () =>
      gameStore.setState({
        game: explained.state,
        eventBatch: { sequence: 2, events: explained.events },
      }),
    );
    await fireEvent.press(screen.getByTestId('strip-explain'));
    expect(screen.getByTestId('word-explanation')).toBeTruthy();
  });
});
