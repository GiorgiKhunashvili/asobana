"""Opt-in bound-aware layout mode ("bounded-v1") for wide recipes."""

import copy
import hashlib
import json
import math
import random
from pathlib import Path
from typing import Any, cast

import pytest

from asobana_generator.generator import (
    BOUNDED_LAYOUT,
    GenerationError,
    bounded_layout,
    generate_bounded_level,
    generate_level,
)
from asobana_generator.models import LevelJSON, PackJSON, Placement
from asobana_generator.validation import valid_layout
from asobana_generator.wide import (
    WideManifest,
    WideRecipe,
    generate_recipe_level,
    rebuild_wide,
)

ROOT = Path(__file__).resolve().parents[2]
# Two six-letter answers that the greedy generator cannot fit into 5 × 7.
TWO_SIX = ["გოგო", "გოგონა", "გოგრა", "გორა", "ორგანო"]
LIMITS = {"max_rows": 5, "max_columns": 7, "min_columns": 6}


def load(path: str) -> Any:
    return json.loads((ROOT / path).read_text())


V28 = cast(WideManifest, load("content/levels/discovery.v28.recipes.json"))
V28_WORDS = {
    entry["word"]
    for entry in load("content/dictionaries/discovery-v28-ka.json")["entries"]
}


def encode(pack: PackJSON) -> bytes:
    return (json.dumps(pack, ensure_ascii=False, indent=2) + "\n").encode()


def cells_of(placements: list[Placement]) -> set[tuple[int, int]]:
    return {(r, c) for p in placements for r, c, _ in p.cells()}


def fits_five_by_seven(level: LevelJSON) -> bool:
    rows, columns = level["grid"]["rows"], level["grid"]["columns"]
    rows, columns = min(rows, columns), max(rows, columns)  # transposing is allowed
    cells = {
        (
            w["row"] + (k if w["direction"] == "down" else 0),
            w["column"] + (k if w["direction"] == "across" else 0),
        )
        for w in level["words"]
        for k in range(len(w["answer"]))
    }
    return (
        len(level["words"]) == 5
        and rows <= 5
        and 6 <= columns <= 7
        and 0.35 <= len(cells) / (rows * columns) <= 0.65
    )


def test_bounded_level_is_deterministic_and_ignores_input_order() -> None:
    first = generate_bounded_level(TWO_SIX, seed=3, max_tiles=7, **LIMITS).level
    for shuffle_seed in range(5):
        words = TWO_SIX[:]
        random.Random(shuffle_seed).shuffle(words)
        assert (
            generate_bounded_level(words, seed=3, max_tiles=7, **LIMITS).level == first
        )
    other_seed = generate_bounded_level(TWO_SIX, seed=4, max_tiles=7, **LIMITS).level
    assert sorted(w["answer"] for w in other_seed["words"]) == sorted(TWO_SIX)


def test_bounded_layout_fits_two_six_letter_answers_that_greedy_misses() -> None:
    for seed in range(1, 41):
        try:
            greedy = generate_level(TWO_SIX, seed=seed, max_words=5, max_tiles=7).level
        except GenerationError:
            continue
        assert not fits_five_by_seven(greedy), seed
    level = generate_bounded_level(TWO_SIX, seed=1, max_tiles=7, **LIMITS).level
    assert fits_five_by_seven(level)
    assert level["grid"]["rows"] <= 5 and level["grid"]["columns"] <= 7
    assert sorted(w["answer"] for w in level["words"]) == sorted(TWO_SIX)
    assert all(
        w["direction"] == "across" for w in level["words"] if len(w["answer"]) == 6
    )


@pytest.mark.parametrize(
    ("max_rows", "min_columns", "max_columns"),
    [(4, 6, 7), (5, 6, 7), (5, 6, 6), (6, 6, 7), (5, 5, 7)],
)
def test_bounded_layout_never_leaves_its_limits(
    max_rows: int, min_columns: int, max_columns: int
) -> None:
    found = 0
    for recipe in V28["levels"][::5]:
        layout = bounded_layout(
            recipe["sourceWords"],
            seed=recipe["seed"],
            max_rows=max_rows,
            max_columns=max_columns,
            min_columns=min_columns,
        )
        if layout is None:
            continue
        found += 1
        cells = cells_of(layout)
        rows = max(r for r, _ in cells) - min(r for r, _ in cells) + 1
        columns = max(c for _, c in cells) - min(c for _, c in cells) + 1
        assert rows <= max_rows and min_columns <= columns <= max_columns
        assert rows <= math.floor(columns / 1.15)
        assert 0.35 <= len(cells) / (rows * columns) <= 0.65
        assert valid_layout(layout)
        assert sorted(p.word for p in layout) == sorted(recipe["sourceWords"])
    assert found > 0


def test_impossible_limits_fail_instead_of_overflowing() -> None:
    assert (
        bounded_layout(TWO_SIX, seed=1, max_rows=5, max_columns=5, min_columns=5)
        is None
    )
    with pytest.raises(GenerationError, match="board limits"):
        generate_bounded_level(
            TWO_SIX, seed=1, max_rows=5, max_columns=5, min_columns=5, max_tiles=7
        )


def plain_recipe() -> WideRecipe:
    recipe = next(
        r
        for r in V28["levels"][100:]
        if not r["transpose"] and sorted(r["sourceWords"]) == sorted(r["targets"])
    )
    assert "layout" not in recipe
    return copy.deepcopy(recipe)


def test_recipe_without_layout_uses_the_unchanged_greedy_generator() -> None:
    recipe = plain_recipe()
    assert (
        generate_recipe_level(recipe, chapter_id="stop")
        == generate_level(
            recipe["sourceWords"],
            seed=recipe["seed"],
            level_id=recipe["id"],
            chapter_id="stop",
            max_words=len(recipe["targets"]),
            max_tiles=len(recipe["wheel"]),
        ).level
    )
    bounded = cast(
        WideRecipe,
        {
            **recipe,
            "layout": BOUNDED_LAYOUT,
            "maxRows": 5,
            "maxColumns": 7,
            "minColumns": 6,
        },
    )
    assert (
        generate_recipe_level(bounded, chapter_id="stop")
        == generate_bounded_level(
            recipe["sourceWords"],
            seed=recipe["seed"],
            level_id=recipe["id"],
            chapter_id="stop",
            max_tiles=len(recipe["wheel"]),
            **LIMITS,
        ).level
    )


@pytest.mark.parametrize(
    ("changes", "message"),
    [
        (
            {"layout": "bounded-v2", "maxRows": 5, "maxColumns": 7, "minColumns": 6},
            "Unknown",
        ),
        ({"maxRows": 5}, "explicit layout mode"),
        ({"layout": BOUNDED_LAYOUT, "maxRows": 5}, "needs maxRows"),
        (
            {
                "layout": BOUNDED_LAYOUT,
                "maxRows": 5,
                "maxColumns": 7,
                "minColumns": 6,
                "targets": TWO_SIX,
            },
            "exactly its target words",
        ),
    ],
)
def test_invalid_layout_recipes_fail(changes: dict[str, object], message: str) -> None:
    recipe = cast(WideRecipe, {**plain_recipe(), **changes})
    with pytest.raises(ValueError, match=message):
        generate_recipe_level(recipe, chapter_id="stop")


def test_revision_28_is_unchanged_and_a_bounded_recipe_passes_production_gates() -> (
    None
):
    pack = rebuild_wide(V28, V28_WORDS)
    digest = hashlib.sha256(encode(pack)).hexdigest()
    assert digest == load("content/levels/discovery.v28.review.json")["draftSha256"]
    assert not any("layout" in recipe for recipe in V28["levels"])

    manifest = copy.deepcopy(V28)
    recipe = plain_recipe()
    index = next(i for i, r in enumerate(manifest["levels"]) if r["id"] == recipe["id"])
    manifest["levels"][index].update(
        layout=BOUNDED_LAYOUT, maxRows=5, maxColumns=7, minColumns=6
    )
    bounded = rebuild_wide(manifest, V28_WORDS)  # every production gate still runs
    for i, (old, new) in enumerate(zip(pack["levels"], bounded["levels"], strict=True)):
        if i != index:
            assert old == new
    level = bounded["levels"][index]
    expected = generate_bounded_level(
        recipe["sourceWords"],
        seed=recipe["seed"],
        level_id=recipe["id"],
        chapter_id=level["chapterId"],
        max_tiles=len(recipe["wheel"]),
        **LIMITS,
    ).level
    assert level["grid"] == expected["grid"]
    assert sorted(
        (w["answer"], w["row"], w["column"], w["direction"]) for w in level["words"]
    ) == sorted(
        (w["answer"], w["row"], w["column"], w["direction"]) for w in expected["words"]
    )
