"""Compress the scene paintings for the app bundle.

Masters (1024 × 1536 PNG, about 2.5 MB each) live in the git-ignored
`artifacts/scenes/`: the ten original paintings as `<chapter id>.png`, and
journey stop paintings as `NN-<stop id>.png` (named as in
`artifacts/journey-paintings-brief.md`). This writes, for each painting:

- `mobile/assets/scenes/<id>.jpg`       full-screen background
- `mobile/assets/scenes/<id>-band.jpg`  horizon strip for path and album cards

For each journey stop it also prints the painting's average `sky` colour.
Register the stop in `SCENES` (mobile/src/theme/scenes.ts) under its stop ID,
with an `accent` picked by eye from the painting (a deep tone that white letters
read well on; the country's accent in `journey.ts` is a safe default).

Existing JPEGs are kept, so bundled images only change on purpose; pass
`--force` to rebuild them all (for example after replacing a master).

Run from the repository root:

    uv run --with pillow python -I scripts/build-scenes.py [--force]
"""

import re
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
MASTERS = ROOT / "artifacts" / "scenes"
OUT = ROOT / "mobile" / "assets" / "scenes"
CHAPTERS = [
    "weather",
    "animals",
    "family",
    "body",
    "plants",
    "landscape",
    "food",
    "home",
    "numbers",
    "music",
]
# The landmark and horizon sit roughly between 38% and 64% of the height.
BAND = (0.38, 0.64)
# Individual landmark crops for the expanded route.
STOP_BANDS = {
    "valletta": (0.42, 0.68),
    "mdina": (0.46, 0.72),
    "carthage": (0.46, 0.72),
    "sidi-bou-said": (0.59, 0.85),
    "el-jem": (0.54, 0.80),
    "barcelona": (0.35, 0.61),
    "valencia": (0.51, 0.77),
    "madrid": (0.45, 0.71),
    "granada": (0.45, 0.71),
    "cordoba": (0.44, 0.70),
    "seville": (0.48, 0.74),
}


def save(image: Image.Image, path: Path, quality: int) -> None:
    image.save(path, "JPEG", quality=quality, optimize=True, progressive=True)
    print(f"{path.relative_to(ROOT)}  {path.stat().st_size // 1024} KB")


STOP = re.compile(r"^\d{2}-(?P<id>[a-z]+(?:-[a-z]+)*)\.png$")


def build(master: Image.Image, name: str, force: bool) -> None:
    if (
        not force
        and (OUT / f"{name}.jpg").exists()
        and (OUT / f"{name}-band.jpg").exists()
    ):
        return
    save(master, OUT / f"{name}.jpg", 80)
    top, bottom = (round(master.height * edge) for edge in STOP_BANDS.get(name, BAND))
    save(master.crop((0, top, master.width, bottom)), OUT / f"{name}-band.jpg", 78)


def sky_colour(master: Image.Image) -> str:
    """Average colour of the sky, shown behind the board while the image decodes."""
    sky = master.crop((0, 0, master.width, master.height * 2 // 5)).resize(
        (1, 1), Image.Resampling.BOX
    )
    return "#{:02X}{:02X}{:02X}".format(*sky.getpixel((0, 0)))


def main() -> None:
    force = "--force" in sys.argv[1:]
    OUT.mkdir(parents=True, exist_ok=True)
    for chapter in CHAPTERS:
        build(Image.open(MASTERS / f"{chapter}.png").convert("RGB"), chapter, force)
    for path in sorted(MASTERS.glob("*.png")):
        match = STOP.match(path.name)
        if not match:
            continue
        master = Image.open(path).convert("RGB")
        build(master, match["id"], force)
        print(f"  {match['id']}: sky {sky_colour(master)}")


if __name__ == "__main__":
    main()
