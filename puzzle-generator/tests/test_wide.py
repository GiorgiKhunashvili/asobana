import copy
import hashlib
import json
from pathlib import Path
from typing import cast

import pytest

from geowords_generator.discovery import discovery_difficulty
from geowords_generator.models import PackJSON
from geowords_generator.validation import validate_pack
from geowords_generator.wide import (
    WideManifest,
    project_board,
    rebuild_wide,
    validate_wide,
)

ROOT = Path(__file__).resolve().parents[2]
PACK = cast(
    PackJSON, json.loads((ROOT / "content/levels/discovery.v6.json").read_text())
)
MANIFEST = cast(
    WideManifest,
    json.loads((ROOT / "content/levels/discovery.v6.recipes.json").read_text()),
)
WORDS = {
    entry["word"]
    for entry in json.loads(
        (ROOT / "content/dictionaries/discovery-ka.json").read_text()
    )["entries"]
}


def encode(pack: PackJSON) -> bytes:
    return (json.dumps(pack, ensure_ascii=False, indent=2) + "\n").encode()


def test_byte_identical_generation_and_separate_digest_bound_promotion():
    first = rebuild_wide(MANIFEST, WORDS)
    second = rebuild_wide(MANIFEST, WORDS)
    assert encode(first) == encode(second)
    review = json.loads((ROOT / "content/levels/discovery.v6.review.json").read_text())
    assert hashlib.sha256(encode(first)).hexdigest() == review["draftSha256"]
    with pytest.raises(ValueError, match="Draft"):
        validate_pack(first, WORDS, playable=True)
    for level in first["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert encode(first) == (ROOT / "content/levels/discovery.v6.json").read_bytes()
    validate_pack(first, WORDS, playable=True)


def test_all_boards_fit_phone_width_and_se_with_no_short_targets():
    validate_wide(PACK, WORDS, MANIFEST["familiarity"])
    for level in PACK["levels"]:
        for device in ("iPhone 17", "iPhone 17 Pro Max"):
            assert project_board(level["grid"], device)[
                "widthPercent"
            ] == pytest.approx(100)
        assert project_board(level["grid"], "iPhone SE")["renderedCell"] >= 36
        assert all(3 <= len(word["answer"]) <= 6 for word in level["words"])
    assert project_board({"columns": 7, "rows": 6}, "iPhone SE")["renderedCell"] == 34


@pytest.mark.parametrize(
    ("columns", "rows", "message"), [(4, 7, "wide"), (7, 6, "36 pt")]
)
def test_shape_and_se_regressions_fail(columns: int, rows: int, message: str):
    pack = copy.deepcopy(PACK)
    pack["levels"][0]["grid"] = {"columns": columns, "rows": rows}
    with pytest.raises(ValueError, match=message):
        validate_wide(pack, WORDS, MANIFEST["familiarity"])


def test_empty_border_and_disconnected_crossings_fail():
    pack = copy.deepcopy(PACK)
    pack["levels"][0]["grid"]["rows"] += 1
    for word in pack["levels"][0]["words"]:
        word["row"] += 1
    with pytest.raises(ValueError, match="tight"):
        validate_wide(pack, WORDS, MANIFEST["familiarity"])
    pack = copy.deepcopy(PACK)
    for word in pack["levels"][21]["words"]:
        if word["direction"] == "across" and word["row"] == 4:
            word["row"] = 0
    with pytest.raises(ValueError):
        validate_wide(pack, WORDS, MANIFEST["familiarity"])


def test_changed_recipes_cannot_silently_replace_reviewed_targets():
    manifest = copy.deepcopy(MANIFEST)
    manifest["levels"][0]["targets"][0] = "ია"
    with pytest.raises(ValueError, match="reviewed targets"):
        rebuild_wide(manifest, WORDS)


def test_short_target_fails_even_with_correct_wheel_bonuses_and_score():
    pack = copy.deepcopy(PACK)
    level = pack["levels"][0]
    familiarity = {**MANIFEST["familiarity"], "ია": 1}
    retired = level["words"][0]["answer"]
    level["words"][0]["answer"] = "ია"
    level["words"][0]["acceptedAnswers"] = ["ია"]
    level["bonusWords"] = sorted(
        [word for word in level["bonusWords"] if word != "ია"] + [retired]
    )
    level["difficulty"] = discovery_difficulty(level, familiarity)
    with pytest.raises(ValueError, match="no two-letter targets"):
        validate_wide(pack, WORDS, familiarity)
