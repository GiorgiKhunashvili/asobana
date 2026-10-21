"""Revision 29: 500 rebuilt boards, 31 new stops and the 243 targeted approvals."""

import copy
import hashlib
import json
from pathlib import Path
from typing import Any, cast

import pytest

from asobana_generator.generator import BOUNDED_LAYOUT
from asobana_generator.wide import (
    WideManifest,
    project_board,
    rebuild_wide,
    validate_wide,
)
from asobana_generator.word_policy import playable_vocabulary, required_vocabulary

ROOT = Path(__file__).resolve().parents[2]
BATCHES = (3, 4, 5, 6, 8, 9, 10, 11)


def load(path: str) -> Any:
    return json.loads((ROOT / path).read_text())


def words(path: str) -> set[str]:
    return {e["word"] for e in load(path)["entries"]}


def test_targeted_approvals_and_rejections_are_integrated() -> None:
    reference = words("content/dictionaries/discovery-v29-ka.json")
    required = required_vocabulary(reference, revision=29)
    eligible = playable_vocabulary(reference, revision=29)
    entries = [
        e
        for n in BATCHES
        for e in load(f"docs/VOCABULARY_TARGETED_BATCH_{n:02}.json")["entries"]
    ]
    approved = {e["word"] for e in entries if e.get("ownerDecision") == "approved"}
    rejected = {e["word"] for e in entries if e.get("ownerDecision") == "rejected"}
    rejected |= {"უტყუო", "უფარო"}  # explicit extra owner exclusions
    assert len(approved) == 243 and len(rejected) == 99
    previous = required_vocabulary(
        words("content/dictionaries/discovery-v28-ka.json"), revision=28
    )
    assert len(previous) == 2075
    assert required == previous | approved
    assert len(required) == 2318 and len(eligible) == 2436
    assert not rejected & eligible
    targets = {
        e["word"]: e
        for e in load("content/dictionaries/everyday-targets-v29.json")["entries"]
    }
    for word in approved:
        assert targets[word]["sourceUrl"].startswith("https://")
        assert targets[word]["ownerDecision"] == "required-eligible"


def test_rebuild_digest_board_limits_and_route_gates() -> None:
    reference = words("content/dictionaries/discovery-v29-ka.json")
    manifest = cast(WideManifest, load("content/levels/discovery.v29.recipes.json"))
    assert all(
        recipe.get("layout") == BOUNDED_LAYOUT
        and recipe.get("maxRows") == 5
        and recipe.get("maxColumns") == 7
        for recipe in manifest["levels"]
    )
    draft = rebuild_wide(manifest, reference)
    raw = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    assert (
        hashlib.sha256(raw).hexdigest()
        == load("content/levels/discovery.v29.review.json")["draftSha256"]
    )
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert draft == load("content/levels/discovery.v29.json")
    assert draft["chapters"] == load("content/journey-v29.json")["chapters"]
    previous = load("content/levels/discovery.v28.json")
    assert draft["chapters"][:69] == previous["chapters"]
    for old, new in zip(previous["levels"], draft["levels"][:345], strict=True):
        assert (old["id"], old["chapterId"]) == (new["id"], new["chapterId"])
    for level in draft["levels"]:
        assert level["grid"]["rows"] <= 5
        assert project_board(level["grid"], "iPhone SE")["cell"] >= 36
    answers = [w["answer"] for level in draft["levels"] for w in level["words"]]
    assert len(answers) == 2500 and len(set(answers)) == 1954
    truncated = copy.deepcopy(draft)
    truncated["levels"] = truncated["levels"][:345]
    with pytest.raises(ValueError, match="500 levels"):
        validate_wide(truncated, reference, manifest["familiarity"])
    reordered = copy.deepcopy(draft)
    reordered["chapters"][-31:] = reversed(reordered["chapters"][-31:])
    with pytest.raises(ValueError, match="order"):
        validate_wide(reordered, reference, manifest["familiarity"])
