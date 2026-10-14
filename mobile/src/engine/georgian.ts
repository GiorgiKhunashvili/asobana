/** 33 modern Mkhedruli letters: U+10D0 through U+10F0 inclusive. */
export const GEORGIAN_ALPHABET = 'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ';
export function normalizeWord(input: string): string {
  return input.normalize('NFC').trim().toLowerCase();
}
export function isGeorgianWord(
  input: string,
  minimum = 2,
  maximum = 16,
): boolean {
  const word = normalizeWord(input);
  const length = Array.from(word).length;
  return (
    length >= minimum && length <= maximum && /^[\u10D0-\u10F0]+$/u.test(word)
  );
}
export function canFormWord(word: string, letters: readonly string[]): boolean {
  const counts = new Map<string, number>();
  for (const letter of letters)
    counts.set(letter, (counts.get(letter) ?? 0) + 1);
  for (const letter of Array.from(normalizeWord(word))) {
    const remaining = counts.get(letter) ?? 0;
    if (remaining === 0) return false;
    counts.set(letter, remaining - 1);
  }
  return true;
}
