import { fireEvent, render } from '@testing-library/react-native';
import { View } from 'react-native';
import { PrimaryButton, RoundButton } from '../src/components/Buttons';
import { CrosswordBoard } from '../src/components/CrosswordBoard';
import { LetterWheel } from '../src/components/LetterWheel';
import { Display } from '../src/components/Text';
import { GameplayScreen } from '../src/screens/GameplayScreen';
import { initialState, transition } from '../src/engine/game';
import { selectGameplay } from '../src/engine/selectors';
import {
  boardMoment,
  cellsSpelling,
  stripFeedback,
} from '../src/screens/presentEvents';
import { chapterTone, toMtavruli } from '../src/theme';
import { catalog, reachLevel, submit, tilesFor } from './legacyHelpers';

// Animation and drawing are verified on the simulator; here they are inert.
jest.mock('react-native-worklets', () =>
  require('react-native-worklets/lib/module/mock'),
);
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
jest.mock('expo-router', () => ({
  router: { canGoBack: () => false, replace: jest.fn(), push: jest.fn() },
  useFocusEffect: jest.fn(),
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
    gameStore: { getState: () => state },
    useGameStore: (selector: (state: unknown) => unknown) => selector(state),
  };
});
jest.mock('@shopify/react-native-skia', () => {
  const builder = {
    moveTo: () => builder,
    lineTo: () => builder,
    detach: () => ({}),
  };
  const Nothing = () => null;
  return {
    Canvas: Nothing,
    Circle: Nothing,
    Group: Nothing,
    LinearGradient: Nothing,
    Path: Nothing,
    RadialGradient: Nothing,
    Rect: Nothing,
    Skia: { PathBuilder: { Make: () => builder } },
    vec: (x: number, y: number) => ({ x, y }),
  };
});

const level = catalog.levels[0]!;

test('gameplay shows the Georgian topic heading above the hidden board', async () => {
  const screen = await render(<GameplayScreen levelId="ka-001" />);
  expect(screen.getByTestId('level-topic')).toHaveTextContent('დასაწყისი');
  expect(screen.getByLabelText('დონე 1')).toBeTruthy();
  expect(screen.queryByText('მზე')).toBeNull();
  expect(screen.getByLabelText('0/4 სიტყვა · ბონუსი 0')).toBeTruthy();
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
