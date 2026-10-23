/** Rebuild concept 01 as vector masters and PNG exports. Requires sharp. */
const { mkdirSync, writeFileSync } = require('node:fs');
const { resolve, join } = require('node:path');
const sharp = require('sharp');

const root = resolve(__dirname, '..');
const assets = join(root, 'mobile/assets');
const out = join(assets, 'branding');
const previews = join(root, 'artifacts/branding');
const NAVY = '#0B294B';
const GOLD = '#E3B65A';
const IVORY = '#F8F0DE';
// The launch splash's ground (palette.night), so its swipe reads as a cut-out.
const NIGHT = '#120C24';

// A rounded A, open below the crossbar. The swipe joins all three terminals.
const body =
  'M105 438C70 438 49 402 67 370L213 92C233 54 279 54 299 92L445 370C463 402 442 438 407 438C386 438 371 426 362 407L329 342C301 310 211 310 183 342L150 407C141 426 126 438 105 438Z' +
  'M206 258L256 160L306 258Q256 250 206 258Z';
const swipe = 'M105 394C140 315 180 282 232 282H347M256 112L407 394';
const dots = [
  [105, 394],
  [256, 112],
  [407, 394],
];

function trace(color) {
  return `<path d="${swipe}" fill="none" stroke="${color}" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>${dots.map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="32" fill="${color}"/>`).join('')}`;
}

function mark(fill, pathColor) {
  return `<path d="${body}" fill="${fill}" fill-rule="evenodd"/>${trace(pathColor)}`;
}

function mono(fill) {
  return `<defs><mask id="cutout" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512"><rect width="512" height="512" fill="white"/>${trace('black')}</mask></defs><path d="${body}" fill="${fill}" fill-rule="evenodd" mask="url(#cutout)"/>`;
}

function svg(width, height, contents, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${label}"><title>${label}</title>${contents}</svg>\n`;
}

// Original letter paths, so wordmarks need no installed or embedded font.
const letters = [
  ['M10 98L40 22Q44 12 48 22L78 98M25 65H63', 92],
  ['M64 42C52 24 18 28 16 47C14 64 66 54 64 78C62 100 26 105 12 88', 80],
  ['M40 34C4 34 4 100 40 100C76 100 76 34 40 34Z', 82],
  ['M12 10V98M12 67C12 22 72 22 72 67C72 112 12 110 12 67Z', 86],
  ['M68 68C68 23 10 23 10 68C10 112 68 112 68 68ZM68 36V98', 82],
  ['M12 98V36M12 65C12 23 70 23 70 65V98', 86],
  ['M68 68C68 23 10 23 10 68C10 112 68 112 68 68ZM68 36V98', 82],
];

function wordmark(color) {
  let x = 0;
  return `<g fill="none" stroke="${color}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round">${letters
    .map(([d, advance]) => {
      const p = `<path transform="translate(${x} 0)" d="${d}"/>`;
      x += advance;
      return p;
    })
    .join('')}</g>`;
}

async function main() {
  mkdirSync(out, { recursive: true });
  mkdirSync(previews, { recursive: true });
  const icon = svg(
    1024,
    1024,
    `<rect width="1024" height="1024" fill="${NAVY}"/><g transform="translate(51.2 51.2) scale(1.8)">${mark(GOLD, NAVY)}</g>`,
    'Asobana connected A app icon',
  );
  writeFileSync(join(assets, 'icon.svg'), icon);
  // RGB, no alpha, no pre-rounded outer corners: the platform applies its mask.
  await sharp(Buffer.from(icon))
    .flatten({ background: NAVY })
    .removeAlpha()
    .png()
    .toFile(join(assets, 'icon.png'));

  const variants = {
    'mark-light': mark(NAVY, GOLD),
    'mark-dark': mark(GOLD, NAVY),
    'mark-splash': mark(GOLD, NIGHT),
    'mark-mono': mono(NAVY),
    'mark-white': mono(IVORY),
  };
  for (const [name, content] of Object.entries(variants)) {
    const source = svg(512, 512, content, 'Asobana connected A mark');
    writeFileSync(join(out, `${name}.svg`), source);
    await sharp(Buffer.from(source))
      .png()
      .toFile(join(out, `${name}.png`));
  }
  for (const [name, fill, pathColor, textColor] of [
    ['logo-light', NAVY, GOLD, NAVY],
    ['logo-dark', GOLD, NAVY, IVORY],
  ]) {
    const source = svg(
      840,
      210,
      `<g transform="scale(.4)">${mark(fill, pathColor)}</g><g transform="translate(214 56)">${wordmark(textColor)}</g>`,
      'Asobana',
    );
    writeFileSync(join(out, `${name}.svg`), source);
    await sharp(Buffer.from(source))
      .resize(1680, 420)
      .png()
      .toFile(join(out, `${name}.png`));
  }

  const iconBuffer = Buffer.from(icon);
  const montage = [
    {
      input: await sharp(iconBuffer).resize(288).png().toBuffer(),
      left: 72,
      top: 74,
    },
    {
      input: await sharp(join(out, 'logo-light.svg'))
        .resize(756, 189)
        .png()
        .toBuffer(),
      left: 420,
      top: 74,
    },
    {
      input: await sharp(join(out, 'mark-mono.svg'))
        .resize(112)
        .png()
        .toBuffer(),
      left: 460,
      top: 300,
    },
  ];
  for (const [i, size] of [96, 64, 48, 32].entries()) {
    montage.push({
      input: await sharp(iconBuffer).resize(size).png().toBuffer(),
      left: 72 + i * 130,
      top: 440,
    });
  }
  const panel = svg(
    520,
    190,
    `<rect width="520" height="190" rx="24" fill="${NAVY}"/><g transform="translate(18 25) scale(.57)"><g transform="scale(.4)">${mark(GOLD, NAVY)}</g><g transform="translate(214 56)">${wordmark(IVORY)}</g></g>`,
    'Asobana on navy',
  );
  montage.push({
    input: await sharp(Buffer.from(panel)).png().toBuffer(),
    left: 670,
    top: 330,
  });
  await sharp({
    create: { width: 1260, height: 610, channels: 3, background: IVORY },
  })
    .composite(montage)
    .png()
    .toFile(join(previews, 'asobana-01-production-preview.png'));
  console.log(
    'Built app icon, seven SVG/PNG brand variants and production preview.',
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
