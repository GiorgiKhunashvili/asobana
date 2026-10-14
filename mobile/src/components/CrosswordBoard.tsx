import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import type { CrosswordCell, Level } from '../models/types';
import { Label } from './PrototypePrimitives';
export interface CrosswordBoardProps {
  cells: readonly CrosswordCell[];
  grid: Level['grid'];
}
export function CrosswordBoard({ cells, grid }: CrosswordBoardProps) {
  const { width } = useWindowDimensions();
  const size = Math.min(48, Math.floor((width - 48) / grid.columns));
  const byPosition = new Map(cells.map((cell) => [cell.id, cell]));
  return (
    <View accessibilityLabel="Crossword" style={{ alignSelf: 'center' }}>
      {Array.from({ length: grid.rows }, (_, row) => (
        <View key={row} style={boardStyles.row}>
          {Array.from({ length: grid.columns }, (_, column) => {
            const cell = byPosition.get(`${row}:${column}`);
            return cell ? (
              <View
                key={column}
                testID={`cell-${cell.id}`}
                accessibilityLabel={`Row ${row + 1}, column ${column + 1}, ${cell.letter ?? 'hidden'}`}
                style={[
                  boardStyles.cell,
                  { width: size - 4, height: size - 4 },
                  cell.status === 'revealed' && boardStyles.revealed,
                ]}
              >
                {cell.letter && (
                  <Animated.View
                    key={cell.letter}
                    entering={FadeIn.duration(180)}
                  >
                    <Label style={boardStyles.letter}>{cell.letter}</Label>
                  </Animated.View>
                )}
              </View>
            ) : (
              <View
                key={column}
                style={{ width: size - 4, height: size - 4, margin: 2 }}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
}
const boardStyles = StyleSheet.create({
  row: { flexDirection: 'row' },
  cell: {
    margin: 2,
    backgroundColor: '#dce7e1',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#90b5a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  revealed: { backgroundColor: '#236c62' },
  letter: { color: 'white', fontSize: 23, lineHeight: 33 },
});
