#!/usr/bin/env node
/**
 * Store screenshots, Play feature graphic and Play icon (docs/store/STORE_LISTING.md).
 *
 * Input: raw iPhone 17 Pro Max captures (1320x2868) in artifacts/store/raw/, named
 * as in SHOTS. Output: artifacts/store/{ios-6.9,ios-6.3,play-phone}/, play-feature-graphic.png
 * and play-icon-512.png. sharp is not a repo dependency:
 *   NODE_PATH=/path/to/node_modules node scripts/build-store-screenshots.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'artifacts/store');
const raw = path.join(out, 'raw');
const font = path.join(root, 'mobile/assets/fonts/GeoDisplay-Black.ttf');
const scenes = path.join(root, 'mobile/assets/scenes');
const color = {
  night: '#120C24',
  violet: '#2B1D5C',
  ivory: '#F8F0DE',
  gold: '#E3B65A',
};

/** Raw captures are 3x; cropBottom (pt) hides the banner footer or the tab bar. */
const SHOTS = [
  {
    file: '01-board-kazbegi.png',
    lines: ['შეაერთე ასოები,', 'ააწყე სიტყვები'],
    cropBottom: 110,
  },
  {
    file: '02-journey.png',
    lines: ['100 ადგილი', 'თბილისიდან ვენამდე'],
    cropBottom: 84,
  },
  {
    file: '03-board-paris.png',
    lines: ['500 დონე', 'ნაცნობი სიტყვებით'],
    cropBottom: 110,
  },
  {
    file: '04-victory.png',
    lines: ['ყოველი ადგილიდან', 'ახალი ბარათი'],
    cropBottom: 110,
  },
  { file: '05-album.png', lines: ['შეაგროვე', '100 ბარათი'], cropBottom: 84 },
];

const TARGETS = [
  {
    dir: 'ios-6.9',
    width: 1320,
    height: 2868,
    screenWidth: 1120,
    fontSize: 104,
  },
  // App Store Connect's "iPhone with Dynamic Island (medium display)" slot
  // takes only 6.1"/6.3" sizes; this is the 6.9" layout scaled to 1206 x 2622.
  {
    dir: 'ios-6.3',
    width: 1206,
    height: 2622,
    screenWidth: 1023,
    fontSize: 95,
  },
  {
    dir: 'play-phone',
    width: 1080,
    height: 1920,
    screenWidth: 760,
    fontSize: 80,
  },
];

function background(width, height) {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${color.violet}"/><stop offset="1" stop-color="${color.night}"/>
      </linearGradient></defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
    </svg>`,
  );
}

/** Two-line caption: first line ivory, second gold. */
async function caption(lines, width, size) {
  const [first, second] = lines;
  const text =
    `<span foreground="${color.ivory}">${first}</span>\n` +
    `<span foreground="${color.gold}">${second}</span>`;
  return sharp({
    text: {
      text,
      // Typographic family GeoDisplay; Pango reads stretch and weight from the end.
      font: `GeoDisplay Condensed Black ${size}px`,
      fontfile: font,
      width,
      align: 'centre',
      rgba: true,
      spacing: Math.round(size * 0.18),
    },
  })
    .png()
    .toBuffer();
}

/** Screen with rounded top corners, flush with the bottom edge of the canvas. */
async function screen(file, cropBottom, width) {
  const image = sharp(path.join(raw, file));
  const meta = await image.metadata();
  const cropped = await image
    .extract({
      left: 0,
      top: 0,
      width: meta.width,
      height: meta.height - cropBottom * 3,
    })
    .resize({ width })
    .png()
    .toBuffer();
  const { height } = await sharp(cropped).metadata();
  const radius = Math.round(width * 0.085);
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="${width}" height="${height + radius}" rx="${radius}" fill="#fff"/>
    </svg>`,
  );
  const rounded = await sharp(cropped)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();
  const border = Math.max(4, Math.round(width / 220));
  const frame = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width + border * 2}" height="${height + border}">
      <rect width="${width + border * 2}" height="${height + border + radius}" rx="${radius + border}"
        fill="${color.gold}" fill-opacity="0.55"/>
    </svg>`,
  );
  return { rounded, frame, width, height, border };
}

/** Stores reject alpha in some images; sharp flattens before compositing, so
 * strip it from the finished image. */
function opaque(buffer, file) {
  return sharp(buffer).removeAlpha().png().toFile(file);
}

async function buildShot(shot, target) {
  const shotScreen = await screen(
    shot.file,
    shot.cropBottom,
    target.screenWidth,
  );
  const top = target.height - shotScreen.height;
  const captionBuffer = await caption(
    shot.lines,
    target.width - 120,
    target.fontSize,
  );
  const { width: captionWidth, height: captionHeight } =
    await sharp(captionBuffer).metadata();
  const frameLeft =
    Math.round((target.width - shotScreen.width) / 2) - shotScreen.border;
  await sharp(background(target.width, target.height))
    .composite([
      {
        input: captionBuffer,
        left: Math.round((target.width - captionWidth) / 2),
        top: Math.max(
          24,
          Math.round((top - shotScreen.border - captionHeight) / 2),
        ),
      },
      {
        input: shotScreen.frame,
        left: frameLeft,
        top: top - shotScreen.border,
      },
      { input: shotScreen.rounded, left: frameLeft + shotScreen.border, top },
    ])
    .png()
    .toBuffer()
    .then((buffer) => opaque(buffer, path.join(out, target.dir, shot.file)));
}

/** 1024x500: logo and tagline on the left, three journey paintings on the right. */
async function featureGraphic() {
  const width = 1024;
  const height = 500;
  const logo = await sharp(
    path.join(root, 'mobile/assets/branding/splash-lockup.png'),
  )
    .resize({ width: 300 })
    .toBuffer();
  const tagline = await caption(['ქართული სიტყვების', 'მოგზაურობა'], 470, 50);
  const strips = await Promise.all(
    ['svaneti.jpg', 'venice.jpg', 'paris.jpg'].map(async (name, index) => {
      const stripWidth = 150;
      const stripHeight = 420;
      const radius = 28;
      const mask = Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${stripWidth}" height="${stripHeight}">
          <rect width="${stripWidth}" height="${stripHeight}" rx="${radius}" fill="#fff"/>
        </svg>`,
      );
      const input = await sharp(path.join(scenes, name))
        .resize({ width: stripWidth, height: stripHeight, fit: 'cover' })
        .composite([{ input: mask, blend: 'dest-in' }])
        .png()
        .toBuffer();
      return { input, left: 530 + index * 162, top: 40 };
    }),
  );
  const { height: logoHeight } = await sharp(logo).metadata();
  const { width: taglineWidth } = await sharp(tagline).metadata();
  await sharp(background(width, height))
    .composite([
      { input: logo, left: 95, top: 40 },
      {
        input: tagline,
        left: Math.round(245 - taglineWidth / 2),
        top: 60 + logoHeight,
      },
      ...strips,
    ])
    .png()
    .toBuffer()
    .then((buffer) =>
      opaque(buffer, path.join(out, 'play-feature-graphic.png')),
    );
}

async function main() {
  for (const target of TARGETS)
    fs.mkdirSync(path.join(out, target.dir), { recursive: true });
  for (const shot of SHOTS) {
    if (!fs.existsSync(path.join(raw, shot.file))) {
      console.warn(`skip ${shot.file}: no raw capture`);
      continue;
    }
    for (const target of TARGETS) await buildShot(shot, target);
  }
  await featureGraphic();
  await sharp(path.join(root, 'mobile/assets/icon.png'))
    .resize(512, 512)
    .png()
    .toFile(path.join(out, 'play-icon-512.png'));
  console.log(`wrote ${out}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
