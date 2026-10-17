"""Revision 6: reproducible wide crosswords, independent of the UI renderer."""

import math
from typing import NotRequired, TypedDict

from .discovery import JOURNEY, discovery_difficulty, validate_discovery
from .generator import generate_level
from .models import ChapterJSON, GridJSON, PackJSON, Placement
from .validation import validate_pack
from .vocabulary import can_form_word
from .word_policy import playable_vocabulary, required_vocabulary

BOARD_AREAS = {
    "iPhone SE": (351, 224),
    "iPhone 17": (378, 335),
    "iPhone 17 Pro Max": (416, 392),
    "iPad Pro 11": (520, 672),
}
CHAPTER_IDS = (
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
)


class WideRecipe(TypedDict):
    id: str
    sourceWords: list[str]
    targets: list[str]
    wheel: str
    seed: int
    transpose: bool
    wordIds: NotRequired[dict[str, str]]


class WideManifest(TypedDict):
    schemaVersion: int
    id: str
    revision: int
    chapters: list[ChapterJSON]
    familiarity: dict[str, int]
    levels: list[WideRecipe]


class Projection(TypedDict):
    cell: float
    widthPercent: float
    renderedCell: int
    renderedWidthPercent: float


def project_board(grid: GridJSON, device: str) -> Projection:
    width, height = BOARD_AREAS[device]
    rows, columns = grid["rows"], grid["columns"]
    cell = min(
        84, (width - 4 * (columns - 1)) / columns, (height - 4 * (rows - 1)) / rows
    )
    # Report the requested continuous model and the existing renderer's rounding.
    rendered = max(26, math.floor(cell))
    return {
        "cell": cell,
        "widthPercent": 100 * (columns * cell + 4 * (columns - 1)) / width,
        "renderedCell": rendered,
        "renderedWidthPercent": 100 * (columns * rendered + 4 * (columns - 1)) / width,
    }


def validate_wide(
    pack: PackJSON, vocabulary: set[str], familiarity: dict[str, int]
) -> None:
    if pack["id"] != "geowords-prototype" or pack["revision"] not in (
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
    ):
        raise ValueError(
            "Wide campaign requires stable pack identity "
            "and revision 6, 7, 8, 9, 10, 11, 12 or 13"
        )
    if pack["revision"] >= 7:
        vocabulary = playable_vocabulary(vocabulary, revision=pack["revision"])
    expected = (
        tuple(c["id"] for c in JOURNEY["chapters"])
        if pack["revision"] >= 13
        else CHAPTER_IDS
    )
    if tuple(chapter["id"] for chapter in pack["chapters"]) != expected:
        raise ValueError("Chapter IDs/order changed")
    if pack["revision"] >= 13 and pack["chapters"] != JOURNEY["chapters"]:
        raise ValueError("Journey chapter titles changed")
    validate_discovery(pack, vocabulary, familiarity)
    if pack["revision"] >= 10:
        for start in range(0, len(pack["levels"]), 5):
            scores = [
                level["difficulty"]["score"]
                for level in pack["levels"][start : start + 5]
            ]
            if scores[2] != max(scores) or scores[2] - scores[3] < 2:
                raise ValueError("Each chapter needs a challenge followed by recovery")
        scores = [level["difficulty"]["score"] for level in pack["levels"]]
        if any(b - a > 10 for a, b in zip(scores, scores[1:], strict=False)):
            raise ValueError("Pacing jump exceeds ten points")
    for index, level in enumerate(pack["levels"]):
        grid = level["grid"]
        rows, columns = grid["rows"], grid["columns"]
        if not 5 <= columns <= 7 or rows > math.floor(columns / 1.15):
            raise ValueError(f"{level['id']}: board must be wide")
        if index >= 5 and columns < 6:
            raise ValueError(
                "Five-column introduction boards only belong in levels 1–5"
            )
        if project_board(grid, "iPhone SE")["cell"] < 36:
            raise ValueError(f"{level['id']}: SE cells below 36 pt")
        # No connector exceptions are needed in this release. Keep all 2-letter
        # dictionary words available as bonuses, never as required answers.
        if any(not 3 <= len(word["answer"]) <= 6 for word in level["words"]):
            raise ValueError("Wide targets must be 3–6 letters; no two-letter targets")
        cells = {
            (r, c)
            for word in level["words"]
            for r, c, _ in Placement(
                word["answer"], word["row"], word["column"], word["direction"]
            ).cells()
        }
        if (
            min(r for r, _ in cells) != 0
            or max(r for r, _ in cells) != rows - 1
            or min(c for _, c in cells) != 0
            or max(c for _, c in cells) != columns - 1
        ):
            raise ValueError("Wide bounding box must be tight")
        if not 0.35 <= len(cells) / (rows * columns) <= 0.65:
            raise ValueError("Wide crossword density must be 35–65%")
    first_six = next(
        i for i, level in enumerate(pack["levels"]) if len(level["tiles"]) == 6
    )
    if pack["revision"] < 11 and (
        first_six != 21 or pack["levels"][first_six]["difficulty"]["score"] >= 65
    ):
        raise ValueError("Introduce six tiles at level 22 below hard difficulty")
    answers = [word["answer"] for level in pack["levels"] for word in level["words"]]
    if sum(4 <= len(word) <= 5 for word in answers) <= len(answers) / 2:
        raise ValueError("Most targets must be four or five letters")
    if pack["revision"] >= 11:
        validate_word_lengths(pack)
    if pack["revision"] >= 12:
        required = required_vocabulary(vocabulary, revision=pack["revision"])
        if any(
            answer not in required
            for level in pack["levels"]
            for word in level["words"]
            for answer in word["acceptedAnswers"]
        ):
            raise ValueError("Required answers must use the everyday-word allowlist")
    # Independently enforce connected crossing graphs and reject accidental runs,
    # conflicts and out-of-bounds words, including when called without the loader.
    validate_pack(pack, vocabulary)


def print_projections(pack: PackJSON) -> None:
    for level in pack["levels"]:
        sizes = []
        for device in ("iPhone 17", "iPhone SE"):
            p = project_board(level["grid"], device)
            sizes.append(
                f"{device}: {p['cell']:.2f} pt / {p['widthPercent']:.2f}% "
                f"(rounded {p['renderedCell']} pt / {p['renderedWidthPercent']:.2f}%)"
            )
        print(
            f"{level['id']} {level['grid']['columns']}×{level['grid']['rows']} | "
            + " | ".join(sizes)
        )


def rebuild_wide(manifest: WideManifest, vocabulary: set[str]) -> PackJSON:
    if manifest["revision"] >= 7:
        vocabulary = playable_vocabulary(vocabulary, revision=manifest["revision"])
    pack: PackJSON = {
        "schemaVersion": 1,
        "id": manifest["id"],
        "revision": manifest["revision"],
        "chapters": manifest["chapters"],
        "levels": [],
    }
    required = required_vocabulary(vocabulary, revision=manifest["revision"])
    for index, recipe in enumerate(manifest["levels"]):
        source = recipe["sourceWords"]
        if not set(source) <= required or not 5 <= len(recipe["targets"]) <= 7:
            raise ValueError("Unverified wide recipe")
        level = generate_level(
            source,
            seed=recipe["seed"],
            level_id=recipe["id"],
            chapter_id=manifest["chapters"][index // 5]["id"],
            max_words=len(recipe["targets"]),
            max_tiles=len(recipe["wheel"]),
        ).level
        answers = [word["answer"] for word in level["words"]]
        if sorted(answers) != sorted(recipe["targets"]):
            raise ValueError("Recipe did not reproduce its reviewed targets")
        if (
            "".join(sorted(tile["letter"] for tile in level["tiles"]))
            != recipe["wheel"]
        ):
            raise ValueError("Recipe wheel changed")
        if recipe["transpose"]:
            level["grid"] = {
                "rows": level["grid"]["columns"],
                "columns": level["grid"]["rows"],
            }
            for word in level["words"]:
                word["row"], word["column"] = word["column"], word["row"]
                word["direction"] = (
                    "down" if word["direction"] == "across" else "across"
                )
        if manifest["revision"] >= 13 and "wordIds" in recipe:
            if set(recipe["wordIds"]) != set(answers):
                raise ValueError("Journey word ID mapping must cover every target")
            for word in level["words"]:
                word["id"] = recipe["wordIds"][word["answer"]]
        level["title"] = "დასაწყისი" if index == 0 else f"აღმოჩენა {index + 1}"
        level["bonusWords"] = sorted(
            word
            for word in vocabulary
            if word not in answers and can_form_word(word, list(recipe["wheel"]))
        )
        level["difficulty"] = discovery_difficulty(
            level, manifest["familiarity"], revision=manifest["revision"]
        )
        pack["levels"].append(level)
    validate_wide(pack, vocabulary, manifest["familiarity"])
    return pack


def validate_word_lengths(pack: PackJSON) -> None:
    """Require actual long answers, independently of physical wheel size."""
    lengths = [
        [len(word["answer"]) for word in level["words"]] for level in pack["levels"]
    ]
    if any(6 in sizes for sizes in lengths[:15]):
        raise ValueError("Six-letter answers begin in levels 16–25")
    if not any(5 in sizes for sizes in lengths[:5]):
        raise ValueError("Introduce a five-letter answer in the first chapter")
    for index, sizes in enumerate(lengths):
        minimum = 0 if index < 5 else 1 if index < 25 else 2
        if sum(size >= 5 for size in sizes) < minimum:
            raise ValueError(
                f"{pack['levels'][index]['id']}: missing longer answers for its stage"
            )
    for start, end, minimum in ((15, 25, 4), (25, 40, 8), (40, 50, 7)):
        if sum(6 in sizes for sizes in lengths[start:end]) < minimum:
            raise ValueError("Stage needs more six-letter answers")

    if pack["revision"] >= 13:
        for start in range(50, len(lengths), 5):
            if sum(6 in sizes for sizes in lengths[start : start + 5]) < 1:
                raise ValueError("Journey stops need at least one six-letter board")
