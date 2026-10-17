"""Build the launch lockup: the A mark with the game's name beneath it.

The native splash (expo-splash-screen) can show only one centred image, so the
name is drawn into it. The loading view then shows the same pixels: it lays
`splash-name.png` (the name alone, on the same canvas) over the live mark, so
the hand-off from the native splash is seamless.

Writes to `mobile/assets/branding/`:

- `splash-lockup.png`  mark + name, the native splash image
- `splash-name.png`    the name only, same canvas, for the loading view

The canvas size in points is printed; it must match `SPLASH` in
`mobile/app/_layout.tsx` and `imageWidth` in `mobile/app.json`.

Run from the repository root:

    uv run --with pillow python -I scripts/build-splash.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
BRANDING = ROOT / "mobile" / "assets" / "branding"
FONT = ROOT / "mobile" / "assets" / "fonts" / "GeoDisplay-Black.ttf"
SCALE = 3  # pixels per point
WIDTH = 260  # pt
MARK = 160  # pt, the 512-unit mark square
NAME_TOP = 140  # pt, under the mark (its legs end at 137 pt)
NAME_SIZE = 40  # pt
TRACKING = 1.5  # pt between letters, as the home title
HEIGHT = 200  # pt
GOLD_LIGHT = (255, 230, 166, 255)
NAME = "ასობანა"


def mtavruli(text: str) -> str:
    return "".join(
        chr(ord(c) + 0xBC0) if 0x10D0 <= ord(c) <= 0x10FA else c for c in text
    )


def name_layer() -> Image.Image:
    layer = Image.new("RGBA", (WIDTH * SCALE, HEIGHT * SCALE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    font = ImageFont.truetype(str(FONT), NAME_SIZE * SCALE)
    letters = mtavruli(NAME)
    advances = [font.getlength(ch) for ch in letters]
    total = sum(advances) + TRACKING * SCALE * (len(letters) - 1)
    x = (WIDTH * SCALE - total) / 2
    for ch, advance in zip(letters, advances):
        draw.text((x, NAME_TOP * SCALE), ch, font=font, fill=GOLD_LIGHT)
        x += advance + TRACKING * SCALE
    return layer


def main() -> None:
    name = name_layer()
    lockup = Image.new("RGBA", name.size, (0, 0, 0, 0))
    mark = Image.open(BRANDING / "mark-dark.png").convert("RGBA")
    mark = mark.resize((MARK * SCALE, MARK * SCALE), Image.Resampling.LANCZOS)
    lockup.alpha_composite(mark, ((WIDTH - MARK) * SCALE // 2, 0))
    lockup.alpha_composite(name)
    lockup.save(BRANDING / "splash-lockup.png", optimize=True)
    name.save(BRANDING / "splash-name.png", optimize=True)
    box = lockup.getbbox()
    print(f"canvas {WIDTH}x{HEIGHT} pt; content box {box} px at {SCALE}x")


if __name__ == "__main__":
    main()
