"""Build the enamel backdrop's faint gold-wire lattice as a repeating tile.

The journey, album and settings screens used to draw this lattice as one
full-screen vector picture. On Android that is rasterized in software on the
main thread whenever such a screen appears (about 15 MB per screen), so the
pattern is now a small tile that `<Image resizeMode="repeat">` lets the GPU
repeat for free.

Pattern (in points): diagonal wires in both directions every 68 pt, and an
eight-pointed star (square plus diamond, half-size 2.6 pt) at every 68 pt along
rows that are 68 pt apart, alternate rows shifted by 34 pt. It repeats every
68 x 136 pt, which is the tile.

Writes `mobile/assets/branding/lattice.png` with `@2x` and `@3x` variants.

Run from the repository root:

    uv run --with pillow python -I scripts/build-lattice.py
"""

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "mobile" / "assets" / "branding"
CELL = 34
TILE = (CELL * 2, CELL * 4)  # pt
GOLD = (227, 182, 90)
WIRE_ALPHA = 0.045
STAR_ALPHA = 0.11
STAR = 2.6  # pt, half-size of the star's square
SUPERSAMPLE = 8


def layer(scale: int, draw_part) -> Image.Image:
    """Draw on a 3 x 3 block of tiles and keep the centre one, so shapes that
    cross an edge continue seamlessly into the neighbouring tile."""
    k = scale * SUPERSAMPLE
    w, h = TILE[0] * k, TILE[1] * k
    big = Image.new("L", (w * 3, h * 3), 0)
    draw_part(ImageDraw.Draw(big), k, w, h)
    tile = big.crop((w, h, w * 2, h * 2))
    return tile.resize((TILE[0] * scale, TILE[1] * scale), Image.Resampling.LANCZOS)


def wires(draw: ImageDraw.ImageDraw, k: int, w: int, h: int) -> None:
    step = CELL * 2 * k
    for offset in range(-3 * h, 6 * w, step):
        draw.line([(offset, 0), (offset + 3 * h, 3 * h)], fill=255, width=k)
        draw.line([(offset, 3 * h), (offset + 3 * h, 0)], fill=255, width=k)


def stars(draw: ImageDraw.ImageDraw, k: int, w: int, h: int) -> None:
    s, d = STAR * k, STAR * 1.42 * k
    for y in range(0, 3 * TILE[1] + 1, CELL * 2):
        start = 0 if (y // CELL) % 4 == 0 else CELL
        for x in range(start, 3 * TILE[0] + 1, CELL * 2):
            cx, cy = x * k, y * k
            draw.rectangle([cx - s, cy - s, cx + s, cy + s], fill=255)
            draw.polygon([(cx, cy - d), (cx + d, cy), (cx, cy + d), (cx - d, cy)], fill=255)


def main() -> None:
    for scale in (1, 2, 3):
        wire = layer(scale, wires)
        star = layer(scale, stars)
        alpha = Image.new("L", wire.size)
        alpha.putdata(
            [
                round(255 * (1 - (1 - WIRE_ALPHA * a / 255) * (1 - STAR_ALPHA * b / 255)))
                for a, b in zip(wire.tobytes(), star.tobytes(), strict=True)
            ]
        )
        tile = Image.new("RGBA", wire.size, (*GOLD, 0))
        tile.putalpha(alpha)
        suffix = "" if scale == 1 else f"@{scale}x"
        tile.save(OUT / f"lattice{suffix}.png", optimize=True)
        print(f"lattice{suffix}.png {tile.size[0]}x{tile.size[1]} px")


if __name__ == "__main__":
    main()
