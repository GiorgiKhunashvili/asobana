import { fireEvent, render } from '@testing-library/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Action, Label, Page } from '../src/components/PrototypePrimitives';
import { CrosswordBoard } from '../src/components/CrosswordBoard';
import { selectGameplay } from '../src/engine/selectors';
import { initialState } from '../src/engine/game';
import { catalog } from '../src/content/catalog';
import { submit } from './helpers';
// Only the visual animation is stubbed; native animations are checked in the simulator.
jest.mock('react-native-reanimated', () => ({
  __esModule: true,
  default: { View: require('react-native').View },
  FadeIn: { duration: () => undefined },
}));
jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);
test('hidden cells do not expose answers; committed words render in Georgian', async () => {
  const view = selectGameplay(initialState(catalog), catalog);
  const screen = await render(
    <CrosswordBoard cells={view.cells} grid={view.grid} />,
  );
  expect(screen.queryByText('მ')).toBeNull();
  expect(screen.getByLabelText('Row 1, column 1, hidden')).toBeTruthy();
  const found = selectGameplay(
    submit(initialState(catalog), catalog.levels[0]!, 'მზე').state,
    catalog,
  );
  await screen.rerender(
    <CrosswordBoard cells={found.cells} grid={found.grid} />,
  );
  expect(screen.getByText('მ')).toBeTruthy();
  expect(screen.getByText('ზ')).toBeTruthy();
  expect(screen.getByText('ე')).toBeTruthy();
});
test('prototype action and page expose an accessible disabled state', async () => {
  const onPress = jest.fn();
  const screen = await render(
    <SafeAreaProvider>
      <Page>
        <Label>ქართული</Label>
        <Action label="Hint" disabled onPress={onPress} />
      </Page>
    </SafeAreaProvider>,
  );
  await fireEvent.press(screen.getByRole('button', { name: 'Hint' }));
  expect(onPress).not.toHaveBeenCalled();
  expect(screen.getByText('ქართული')).toBeTruthy();
});
