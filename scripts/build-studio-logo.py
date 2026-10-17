"""Cut the approved Spilo Games logo out of its reference artwork.

The approved reference (`approved-reference-04D-3A.png`) is one dark plum ink on
a flat pale-lavender ground, so its exact shapes can be recovered by unmixing
each pixel between the two colours: alpha is how far a pixel sits from the
ground towards the ink. This keeps the letterforms and the elephant pixel-exact
and anti-aliased, unlike a regenerated cut-out. The small concept label at the
upper left is outside the crop.

Writes next to the reference:

- `spilo-games-plum.png`   plum ink on transparency, for light surfaces
- `spilo-games-ivory.png`  ivory ink on transparency, for dark surfaces

Run from the repository root:

    uv run --with pillow --with numpy python -I scripts/build-studio-logo.py
"""

from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
DIR = ROOT / "mobile" / "assets" / "studio" / "spilo-games"
REFERENCE = DIR / "approved-reference-04D-3A.png"
# Logo bounds in the 1536 x 1024 reference, with a little margin; the
# "04D-3A" label sits above and left of this box.
CROP = (140, 215, 1396, 800)
IVORY = (248, 240, 222)


def main() -> None:
    image = np.asarray(Image.open(REFERENCE).convert("RGB"), dtype=np.float64)
    corners = np.concatenate(
        [
            image[-60:, :60].reshape(-1, 3),
            image[-60:, -60:].reshape(-1, 3),
            image[60:120, -60:].reshape(-1, 3),
        ]
    )
    ground = np.median(corners, axis=0)
    left, top, right, bottom = CROP
    logo = image[top:bottom, left:right]
    distance = np.linalg.norm(logo - ground, axis=-1)
    ink = logo.reshape(-1, 3)[np.argsort(distance.ravel())[-2000:]].mean(axis=0)
    span = ink - ground
    alpha = np.clip(((logo - ground) @ span) / (span @ span), 0, 1)
    # Snap the flat interiors to solid and the ground to clear; keep the edges.
    alpha = np.where(alpha > 0.96, 1.0, np.where(alpha < 0.04, 0.0, alpha))
    a = (alpha * 255).round().astype(np.uint8)
    for name, colour in (("plum", ink), ("ivory", IVORY)):
        rgba = np.zeros((*a.shape, 4), dtype=np.uint8)
        rgba[..., :3] = np.round(colour).astype(np.uint8)
        rgba[..., 3] = a
        out = DIR / f"spilo-games-{name}.png"
        Image.fromarray(rgba, "RGBA").save(out, optimize=True)
        print(f"{out.relative_to(ROOT)}  {a.shape[1]}x{a.shape[0]}")
    print("ground", np.round(ground).astype(int), "ink", np.round(ink).astype(int))


if __name__ == "__main__":
    main()
