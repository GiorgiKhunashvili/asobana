"""Cut static, renamed instances from the bundled Noto Sans Georgian variable font.

React Native cannot reliably select variable-font axes on Android, and iOS
registers fonts by PostScript name, so each style ships as its own file with a
unique name. Run from the repository root:

    uv run --with fonttools python -I scripts/instance-fonts.py

Glyph coverage is unchanged: every instance keeps all Mkhedruli and Mtavruli
code points of the source font. The OFL 1.1 source carries no Reserved Font Name.
"""

from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

FONTS = Path(__file__).resolve().parent.parent / "mobile" / "assets" / "fonts"
SOURCE = FONTS / "NotoSansGeorgian.ttf"

# (file stem, family, style, wght, wdth)
INSTANCES = [
    ("GeoText-Regular", "GeoText", "Regular", 400, 100),
    ("GeoText-SemiBold", "GeoText", "SemiBold", 600, 100),
    ("GeoText-Bold", "GeoText", "Bold", 700, 100),
    ("GeoDisplay-Black", "GeoDisplay", "Condensed Black", 900, 75),
]


def rename(font: TTFont, family: str, style: str) -> None:
    postscript = f"{family}-{style.replace(' ', '')}"
    # Legacy family (ID 1) is unique per file; typographic family (ID 16) is shared.
    names = {
        1: family if style == "Regular" else f"{family} {style}",
        2: "Regular",
        3: f"{postscript};derived from Noto Sans Georgian 2.005",
        4: f"{family} {style}",
        6: postscript,
        16: family,
        17: style,
    }
    table = font["name"]
    for name_id in (16, 17, 21, 22, 25):
        table.removeNames(nameID=name_id)
    for name_id, value in names.items():
        table.setName(value, name_id, 3, 1, 0x409)
        table.setName(value, name_id, 1, 0, 0)


def main() -> None:
    for stem, family, style, weight, width in INSTANCES:
        font = TTFont(SOURCE)
        static = instancer.instantiateVariableFont(
            font, {"wght": weight, "wdth": width}
        )
        rename(static, family, style)
        static["OS/2"].usWeightClass = weight
        # Every file is its own single-style family; never let platforms synthesize.
        static["OS/2"].fsSelection = (static["OS/2"].fsSelection & ~0b1100001) | 0b1000000
        static["head"].macStyle = 0
        static.save(FONTS / f"{stem}.ttf")
        print(f"{stem}.ttf")


if __name__ == "__main__":
    main()
