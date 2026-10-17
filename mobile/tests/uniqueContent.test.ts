import manifest from '../../content/levels/discovery.v13.recipes.json';
import { catalog, previousCatalogs, vocabulary } from '../src/content/catalog';
import { validateWide } from '../src/content/wide';
import { canFormWord } from '../src/engine/georgian';
import { transition } from '../src/engine/game';
import { restoreContent } from '../src/storage/contentMigration';
import { parseSnapshot } from '../src/storage/snapshot';
import { reachLevel, submit } from './helpers';

test('conjugated verbs cannot be answers, variants or bonuses, even when formable', () => {
  const verbs = ['არის', 'აქვს', 'იდო', 'იყო', 'მინდა', 'მოდი', 'მშია'];
  for (const verb of verbs) {
    expect(vocabulary.has(verb)).toBe(false);
    for (const level of catalog.levels) {
      expect(level.words.flatMap((word) => word.acceptedAnswers)).not.toContain(
        verb,
      );
      expect(level.bonusWords).not.toContain(verb);
    }
  }
  // Released wheels exercise formable rejection even if the new campaign
  // happens not to contain the same letter combination.
  const fixture = previousCatalogs[9]!;
  for (const verb of ['იდო', 'არის']) {
    const index = fixture.levels.findIndex((level) =>
      canFormWord(
        verb,
        level.tiles.map((tile) => tile.letter),
      ),
    );
    expect(index).toBeGreaterThanOrEqual(0);
    const state = reachLevel(index, fixture);
    const result = submit(state, fixture.levels[index]!, verb, fixture);
    expect(result.state).toBe(state);
    expect(result.events).toContainEqual({
      type: 'word-rejected',
      reason: 'invalid-word',
      word: verb,
    });
  }
});

test('required spellings only recur after the global 75-level gap', () => {
  const last = new Map<string, number>();
  for (const [index, level] of catalog.levels.entries())
    for (const word of level.words)
      for (const answer of word.acceptedAnswers) {
        if (last.has(answer))
          expect(index - last.get(answer)!).toBeGreaterThanOrEqual(75);
        last.set(answer, index);
      }
  expect(last.size).toBeGreaterThanOrEqual(375);
  expect(last.size).toBeLessThan(1200);
  const first = catalog.levels[0]!;
  const second = catalog.levels[1]!;
  expect(() =>
    validateWide(
      {
        ...catalog,
        levels: [
          first,
          {
            ...second,
            words: second.words.map((word, i) =>
              i === 0
                ? {
                    ...word,
                    acceptedAnswers: [
                      ...word.acceptedAnswers,
                      first.words[0]!.answer,
                    ],
                  }
                : word,
            ),
          },
          ...catalog.levels.slice(2),
        ],
      },
      vocabulary,
      manifest.familiarity,
    ),
  ).toThrow('75-level gap');
});

test('revision 7 progress and paid hints survive removal of verb answers and bonuses', () => {
  const previous = previousCatalogs[6]!;
  expect(previous.revision).toBe(7);
  const index = previous.levels.findIndex((level) =>
    level.words.some((word) => word.answer === 'იდო'),
  );
  expect(index).toBeGreaterThanOrEqual(0);
  const oldLevel = previous.levels[index]!;
  let old = submit(
    reachLevel(index, previous),
    oldLevel,
    'იდო',
    previous,
  ).state;
  if (oldLevel.bonusWords.includes('არის'))
    old = submit(old, oldLevel, 'არის', previous).state;
  old = transition(
    old,
    { type: 'hint', levelId: oldLevel.id, kind: 'cell' },
    previous,
  ).state;
  old = parseSnapshot(
    {
      ...old,
      progress: {
        ...old.progress,
        [oldLevel.id]: { ...old.progress[oldLevel.id]!, hintsUsed: 998 },
      },
    },
    previous,
  );
  const { state, migrated } = restoreContent(old, catalog, previousCatalogs);
  expect(migrated).toBe(true);
  expect(state.currentLevelId).toBe(old.currentLevelId);
  expect(state.coins).toBe(old.coins);
  for (const [id, progress] of Object.entries(old.progress)) {
    const next = state.progress[id]!;
    if (progress.completed) expect(next.completed).toBe(true);
    expect(next.solvedWordIds.length).toBeGreaterThanOrEqual(
      Math.min(
        progress.solvedWordIds.length,
        catalog.levels.find((level) => level.id === id)!.words.length,
      ),
    );
    expect(next.hintsUsed).toBe(progress.hintsUsed);
    expect(next.bonusWords).not.toContain('არის');
    expect(next.bonusWords).not.toContain('იდო');
  }
  expect(
    state.progress[oldLevel.id]!.revealedCellIds.length,
  ).toBeGreaterThanOrEqual(old.progress[oldLevel.id]!.revealedCellIds.length);
  expect(restoreContent(state, catalog, previousCatalogs)).toEqual({
    state,
    migrated: false,
  });
});
