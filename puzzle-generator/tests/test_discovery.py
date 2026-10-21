import copy
import json
from pathlib import Path
from typing import cast

import pytest
from jsonschema import Draft202012Validator

from asobana_generator.discovery import (
    DiscoveryManifest,
    rebuild_discovery,
    validate_discovery,
)
from asobana_generator.models import PackJSON
from asobana_generator.validation import validate_pack
from asobana_generator.vocabulary import load_vocabulary

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = cast(
    DiscoveryManifest,
    json.loads((ROOT / "content/levels/discovery.v5.recipes.json").read_text()),
)
PACK = cast(
    PackJSON, json.loads((ROOT / "content/levels/discovery.v5.json").read_text())
)
WORDS = {
    entry.word
    for entry in load_vocabulary(
        ROOT / "content/dictionaries/discovery-ka.json", allow_prototype=True
    )
}


def test_exact_reproduction_remains_draft_until_separate_review():
    before = copy.deepcopy(MANIFEST)
    rebuilt = rebuild_discovery(MANIFEST, WORDS)
    expected = copy.deepcopy(PACK)
    for level in expected["levels"]:
        level["reviewStatus"] = "generated-draft"
    assert rebuilt == expected
    assert MANIFEST == before
    validate_pack(PACK, WORDS, playable=True)
    schema = json.loads(
        (ROOT / "content/schemas/level-pack.v1.schema.json").read_text()
    )
    Draft202012Validator(schema).validate(PACK)
    with pytest.raises(ValueError, match="Draft"):
        validate_pack(rebuilt, WORDS, playable=True)


def test_all_stages_have_small_wheels_five_targets_and_bonus_discoveries():
    validate_discovery(PACK, WORDS, MANIFEST["familiarity"])
    assert all(len(level["tiles"]) == 5 for level in PACK["levels"][:20])
    assert all(len(level["words"]) == 5 for level in PACK["levels"][10:])
    assert all(level["bonusWords"] for level in PACK["levels"])
    # Bonus recognition deliberately includes a target from a later board.
    assert "თემა" in PACK["levels"][1]["bonusWords"]
    assert any(
        word["answer"] == "თემა"
        for level in PACK["levels"][2:]
        for word in level["words"]
    )


def test_invalid_recipes_and_missing_or_filtered_bonus_words_are_rejected():
    manifest = copy.deepcopy(MANIFEST)
    manifest["levels"][0]["wheel"] += "ა"
    with pytest.raises(ValueError, match="multiplicities"):
        rebuild_discovery(manifest, WORDS)
    pack = copy.deepcopy(PACK)
    pack["levels"][0]["bonusWords"] = []
    with pytest.raises(ValueError, match="Bonus"):
        validate_discovery(pack, WORDS, MANIFEST["familiarity"])
    with pytest.raises(ValueError, match="familiar"):
        validate_discovery(PACK, WORDS, {})


def test_extra_tiles_wrong_stage_and_duplicate_content_are_rejected():
    pack = copy.deepcopy(PACK)
    pack["levels"][0]["tiles"].append({"id": "extra", "letter": "ა"})
    with pytest.raises(ValueError, match="stage"):
        validate_discovery(pack, WORDS, MANIFEST["familiarity"])
    pack = copy.deepcopy(PACK)
    pack["levels"][1] = copy.deepcopy(pack["levels"][0])
    pack["levels"][1]["id"] = "ka-002"
    pack["levels"][1]["title"] = "აღმოჩენა 2"
    with pytest.raises(ValueError, match="Repeated"):
        validate_discovery(pack, WORDS, MANIFEST["familiarity"])
    pack = copy.deepcopy(PACK)
    pack["levels"][10]["words"].pop()
    with pytest.raises(ValueError, match="targets"):
        validate_discovery(pack, WORDS, MANIFEST["familiarity"])
