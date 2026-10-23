import { render } from '@testing-library/react-native';
import Animated, { withDelay, withTiming } from 'react-native-reanimated';
import {
  CrosswordBoard,
  type BoardMoment,
} from '../src/components/CrosswordBoard';
import type { CrosswordCell } from '../src/models/types';
import { motion } from '../src/theme';

jest.mock('react-native-worklets', () =>
  require('react-native-worklets/lib/module/mock'),
);
jest.mock('react-native-reanimated', () => {
  const mock = require('react-native-reanimated/mock');
  const React = require('react');
  const { View } = require('react-native');
  return {
    ...mock,
    default: {
      ...mock.default,
      View: jest.fn((props) => React.createElement(View, props)),
    },
    // Real shared values retain identity across renders. Keep that property so
    // these tests detect animation restarts, rather than mock-only effect runs.
    useSharedValue: (initial: number) => {
      const ref = React.useRef(null);
      if (!ref.current) ref.current = mock.useSharedValue(initial);
      return ref.current;
    },
    withDelay: jest.fn(mock.withDelay),
    withTiming: jest.fn(mock.withTiming),
  };
});

const grid = { rows: 2, columns: 3 };
const initial: readonly CrosswordCell[] = [
  {
    id: '0,0',
    row: 0,
    column: 0,
    wordIds: ['across', 'down'],
    status: 'locked',
    letter: null,
  },
  {
    id: '0,1',
    row: 0,
    column: 1,
    wordIds: ['across'],
    status: 'locked',
    letter: null,
  },
  {
    id: '0,2',
    row: 0,
    column: 2,
    wordIds: ['across'],
    status: 'locked',
    letter: null,
  },
  {
    id: '1,0',
    row: 1,
    column: 0,
    wordIds: ['down'],
    status: 'locked',
    letter: null,
  },
];
const copy = (cells: readonly CrosswordCell[]) =>
  cells.map((cell) => ({ ...cell, wordIds: [...cell.wordIds] }));
const reveal = (cells: readonly CrosswordCell[], ids: string[]) =>
  copy(cells).map((cell): CrosswordCell =>
    ids.includes(cell.id) ? { ...cell, status: 'revealed', letter: 'ა' } : cell,
  );
const event = (
  sequence: number,
  patch: Partial<BoardMoment> = {},
): BoardMoment => ({
  sequence,
  revealed: [],
  source: 'word',
  remind: [],
  celebrate: false,
  ...patch,
});
const rendered = () =>
  jest
    .mocked(Animated.View)
    .mock.calls.map(([props]) => props.testID)
    .filter(
      (id): id is string => typeof id === 'string' && id.startsWith('cell-'),
    );
const clear = () => jest.clearAllMocks();

test('fresh selector objects do not rerender unchanged cells or restart animations', async () => {
  const screen = await render(<CrosswordBoard cells={initial} grid={grid} />);
  clear();
  await screen.rerender(
    <CrosswordBoard
      cells={copy(initial)}
      grid={{ ...grid }}
      moment={event(1)}
    />,
  );
  expect(rendered()).toEqual([]);
  expect(withTiming).not.toHaveBeenCalled();
  expect(screen.getAllByLabelText(/ცარიელი/)).toHaveLength(4);
});

test('a word updates only its cells, preserves stagger and leaves a crossing visible', async () => {
  const screen = await render(<CrosswordBoard cells={initial} grid={grid} />);
  const ids = ['0,0', '0,1', '0,2'];
  const found = reveal(initial, ids);
  const moment = event(1, { revealed: ids });
  clear();
  await screen.rerender(
    <CrosswordBoard cells={found} grid={grid} moment={moment} />,
  );
  expect(rendered()).toEqual(ids.map((id) => `cell-${id}`));
  expect(jest.mocked(withDelay).mock.calls.map(([delay]) => delay)).toEqual([
    0,
    motion.cellStagger,
    2 * motion.cellStagger,
  ]);
  expect(screen.getByLabelText('რიგი 1, სვეტი 1, ა')).toBeTruthy();
  clear();
  await screen.rerender(
    <CrosswordBoard cells={copy(found)} grid={grid} moment={{ ...moment }} />,
  );
  expect(rendered()).toEqual([]);
  expect(withTiming).not.toHaveBeenCalled();
  await screen.rerender(
    <CrosswordBoard
      cells={reveal(found, ['1,0'])}
      grid={grid}
      moment={event(2, { revealed: ['1,0'] })}
    />,
  );
  expect(screen.getByLabelText('რიგი 1, სვეტი 1, ა')).toBeTruthy();
  expect(screen.getByLabelText('რიგი 2, სვეტი 1, ა')).toBeTruthy();
});

test('hint gilding and repeated reminders still fire with their original timing', async () => {
  const screen = await render(<CrosswordBoard cells={initial} grid={grid} />);
  const found = reveal(initial, ['0,0']);
  clear();
  await screen.rerender(
    <CrosswordBoard
      cells={found}
      grid={grid}
      moment={event(1, { revealed: ['0,0'], source: 'hint' })}
    />,
  );
  expect(withDelay).toHaveBeenCalledWith(650, expect.anything());
  expect(withTiming).toHaveBeenCalledWith(1, { duration: 0 });
  await screen.rerender(
    <CrosswordBoard
      cells={copy(found)}
      grid={grid}
      moment={event(2, { remind: ['0,0'] })}
    />,
  );
  clear();
  await screen.rerender(
    <CrosswordBoard
      cells={copy(found)}
      grid={grid}
      moment={event(3, { remind: ['0,0'] })}
    />,
  );
  expect(rendered()).toEqual(['cell-0,0']);
  expect(withTiming).toHaveBeenCalledWith(1.12, { duration: 110 });
  clear();
  await screen.rerender(
    <CrosswordBoard
      cells={copy(found)}
      grid={grid}
      moment={event(3, { remind: ['0,0'] })}
    />,
  );
  expect(rendered()).toEqual([]);
  expect(withTiming).not.toHaveBeenCalled();
});

test('completion animates every cell with the existing reveal and diagonal wave delays', async () => {
  const screen = await render(<CrosswordBoard cells={initial} grid={grid} />);
  const ids = initial.map((cell) => cell.id);
  clear();
  await screen.rerender(
    <CrosswordBoard
      cells={reveal(initial, ids)}
      grid={grid}
      moment={event(4, { revealed: ids, celebrate: true })}
    />,
  );
  expect(rendered()).toHaveLength(initial.length);
  for (const cell of initial) {
    const delay =
      3 * motion.cellStagger +
      motion.revealSettle +
      (cell.row + cell.column) * motion.waveStagger;
    expect(withDelay).toHaveBeenCalledWith(delay, expect.anything());
  }
  expect(
    jest.mocked(withTiming).mock.calls.filter(([value]) => value === 1.16),
  ).toHaveLength(4);
});

test('size, accent, position and letter changes still reach the native cell', async () => {
  const found = reveal(initial, ['0,0']);
  const screen = await render(
    <CrosswordBoard cells={found} grid={grid} maxWidth={200} />,
  );
  clear();
  await screen.rerender(
    <CrosswordBoard
      cells={copy(found)}
      grid={grid}
      maxWidth={140}
      accent="#123456"
    />,
  );
  expect(rendered()).toHaveLength(4);
  expect(screen.getByTestId('cell-0,0')).toHaveStyle({ width: 44, height: 44 });
  expect(
    jest
      .mocked(Animated.View)
      .mock.calls.some(([props]) =>
        JSON.stringify(props.style).includes('#123456'),
      ),
  ).toBe(true);
  const moved = copy(found).map((cell) =>
    cell.id === '0,0' ? { ...cell, row: 1, column: 2, letter: 'ბ' } : cell,
  );
  clear();
  await screen.rerender(
    <CrosswordBoard
      cells={moved}
      grid={grid}
      maxWidth={140}
      accent="#123456"
    />,
  );
  expect(rendered()).toEqual(['cell-0,0']);
  expect(screen.getByLabelText('რიგი 2, სვეტი 3, ბ')).toHaveStyle({
    left: 96,
    top: 48,
  });
  expect(withTiming).not.toHaveBeenCalled();
});
