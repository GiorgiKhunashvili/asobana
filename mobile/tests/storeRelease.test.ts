import { CREDITS, PRIVACY_POLICY_URL } from '../src/legal';

/** Store-release decisions (docs/store/STORE_LISTING.md, owner blockers 1–4). */
test('iPad stays off: Apple never lets a released app drop it, and it is untested', () => {
  const app = require('../app.json');
  expect(app.expo.ios.supportsTablet).toBe(false);
});

test('the bundled word list and fonts carry their licence credits', () => {
  const urls = CREDITS.flatMap((credit) =>
    credit.links.map((link) => link.url),
  );
  for (const url of urls) expect(url).toMatch(/^https:\/\//);
  // CC BY-SA 4.0 asks for the authors, the licence and a note of the changes.
  const words = CREDITS.find((credit) =>
    credit.lines.some((line) => line.includes('Wiktionary contributors')),
  );
  expect(words?.links.map((link) => link.url)).toContain(
    'https://creativecommons.org/licenses/by-sa/4.0/',
  );
  expect(words?.lines.some((line) => line.startsWith('ცვლილებები:'))).toBe(
    true,
  );
  const fonts = CREDITS.find((credit) =>
    credit.links.some((link) => link.label === 'SIL OFL 1.1'),
  );
  expect(fonts?.lines).toContain('Copyright 2022 The Noto Project Authors.');
});

test('the privacy policy link, once set, is a secure web page', () => {
  if (PRIVACY_POLICY_URL !== null)
    expect(PRIVACY_POLICY_URL).toMatch(/^https:\/\//);
});
