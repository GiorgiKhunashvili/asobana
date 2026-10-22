import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

/** React Native on Android throws at launch on a role it does not know (a
 * "tabbar" role once crashed every Android start), so check every literal role
 * against the list in React Native's own Android source. */
function androidRoles(): Set<string> {
  const source = readFileSync(
    join(
      dirname(require.resolve('react-native/package.json')),
      'ReactAndroid/src/main/java/com/facebook/react/uimanager/ReactAccessibilityDelegate.kt',
    ),
    'utf8',
  );
  const body = source.slice(
    source.indexOf('enum class AccessibilityRole'),
    source.indexOf(
      'companion object',
      source.indexOf('enum class AccessibilityRole'),
    ),
  );
  return new Set(
    [...body.matchAll(/^\s+([A-Z_]+)[,(;]/gm)].map((m) => m[1]!.toLowerCase()),
  );
}

function sourceFiles(folder: string): string[] {
  return readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    const path = join(folder, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return /\.tsx?$/.test(entry.name) ? [path] : [];
  });
}

test('every accessibility role in the app exists on Android', () => {
  const roles = androidRoles();
  expect(roles.has('button')).toBe(true);
  expect(roles.has('tabbar')).toBe(false);
  const used = sourceFiles(join(__dirname, '..', 'app'))
    .concat(sourceFiles(join(__dirname, '..', 'src')))
    .flatMap((file) =>
      [
        ...readFileSync(file, 'utf8').matchAll(
          /accessibilityRole(?:=\{?|:\s*)["']([a-z]+)["']/g,
        ),
      ].map((m) => `${m[1]} (${file.split('/mobile/')[1]})`),
    );
  expect(used.length).toBeGreaterThan(20);
  expect(used.filter((entry) => !roles.has(entry.split(' ')[0]!))).toEqual([]);
});
