import { act, fireEvent, render } from '@testing-library/react-native';
import { useLayoutEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { catalog } from '../src/content/catalog';
import { initialState } from '../src/engine/game';
import { gameStore } from '../src/state/gameStore';
import { useFocusedGame } from '../src/state/useFocusedGame';

jest.mock('../src/state/gameStore', () => {
  const { createStore } = require('zustand/vanilla');
  return { gameStore: createStore(() => ({ game: null, busy: false })) };
});
let renders = 0;
function Screen({ focused }: { focused: boolean }) {
  const game = useFocusedGame(focused);
  const [position, setPosition] = useState(0);
  renders++;
  return (
    <View>
      <Text testID="balance">{game?.coins ?? 'loading'}</Text>
      <Text testID="level">{game?.currentLevelId ?? 'loading'}</Text>
      <Pressable testID="move" onPress={() => setPosition(position + 1)}>
        <Text testID="position">{position}</Text>
      </Pressable>
    </View>
  );
}
beforeEach(() => {
  gameStore.setState({ game: initialState(catalog), busy: false });
  renders = 0;
});
afterEach(() => jest.restoreAllMocks());

test('hidden game updates cause no renders; focus catches up without remounting local UI state', async () => {
  const screen = render(<Screen focused />);
  fireEvent.press(screen.getByTestId('move'));
  screen.rerender(<Screen focused={false} />);
  const hiddenRenders = renders;
  for (let i = 0; i < 12; i++) {
    await act(async () => {
      gameStore.setState({
        game: { ...gameStore.getState().game!, coins: 201 + i },
      });
    });
  }
  expect(renders).toBe(hiddenRenders);
  expect(screen.getByTestId('balance').props.children).toBe(200);
  screen.rerender(<Screen focused />);
  expect(screen.getByTestId('balance').props.children).toBe(212);
  expect(screen.getByTestId('position').props.children).toBe(1);
});

test('visible progress updates render immediately and unrelated busy flags do not', async () => {
  const screen = render(<Screen focused />);
  const before = renders;
  await act(async () => {
    gameStore.setState({ busy: true });
  });
  expect(renders).toBe(before);
  await act(async () => {
    gameStore.setState({ game: { ...initialState(catalog), coins: 180 } });
  });
  expect(screen.getByTestId('balance').props.children).toBe(180);
});

test('a screen mounted hidden picks up initialization and a new current level on focus', async () => {
  gameStore.setState({ game: null });
  const screen = render(<Screen focused={false} />);
  const before = renders;
  const latest = {
    ...initialState(catalog),
    currentLevelId: catalog.levels[5]!.id,
    coins: 86,
  };
  await act(async () => {
    gameStore.setState({ game: latest });
  });
  expect(renders).toBe(before);
  screen.rerender(<Screen focused />);
  expect(screen.getByTestId('balance').props.children).toBe(86);
  expect(screen.getByTestId('level').props.children).toBe(
    latest.currentLevelId,
  );
});

test('a store update between focus render and subscription is not missed', () => {
  function Race({ focused }: { focused: boolean }) {
    useLayoutEffect(() => {
      if (focused)
        gameStore.setState({ game: { ...initialState(catalog), coins: 123 } });
    }, [focused]);
    return <Screen focused={focused} />;
  }
  const screen = render(<Race focused={false} />);
  screen.rerender(<Race focused />);
  expect(screen.getByTestId('balance').props.children).toBe(123);
});

test('blur and unmount remove subscriptions, and repeated focus does not accumulate listeners', () => {
  const original = gameStore.subscribe;
  let active = 0;
  jest.spyOn(gameStore, 'subscribe').mockImplementation((listener) => {
    active++;
    const unsubscribe = original(listener);
    return () => {
      active--;
      unsubscribe();
    };
  });
  const screen = render(<Screen focused />);
  expect(active).toBe(1);
  screen.rerender(<Screen focused={false} />);
  expect(active).toBe(0);
  screen.rerender(<Screen focused />);
  expect(active).toBe(1);
  screen.unmount();
  expect(active).toBe(0);
});
