import copy
import json
from pathlib import Path
from typing import cast

import pytest
from jsonschema import Draft202012Validator

from asobana_generator.models import PackJSON
from asobana_generator.pacing import apply_difficulty, validate_pacing
from asobana_generator.topics import TopicManifest, rebuild_topics
from asobana_generator.validation import validate_pack
from asobana_generator.vocabulary import load_vocabulary

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = cast(
    TopicManifest,
    json.loads(
        (ROOT / "content/levels/themed.v4.recipes.json").read_text(encoding="utf-8")
    ),
)
PACK = cast(
    PackJSON,
    json.loads((ROOT / "content/levels/themed.v4.json").read_text(encoding="utf-8")),
)
WORDS = {
    entry.word
    for entry in load_vocabulary(
        ROOT / "content/dictionaries/expanded-ka.json", allow_prototype=True
    )
}


def test_expanded_pack_reproduces_exactly_without_granting_approval():
    before = copy.deepcopy(MANIFEST)
    rebuilt = rebuild_topics(MANIFEST, WORDS)
    expected = copy.deepcopy(PACK)
    for level in expected["levels"]:
        level["reviewStatus"] = "generated-draft"
    assert rebuilt == expected
    assert before == MANIFEST
    validate_pack(PACK, WORDS, playable=True)
    schema = json.loads(
        (ROOT / "content/schemas/level-pack.v1.schema.json").read_text()
    )
    Draft202012Validator(schema).validate(PACK)
    with pytest.raises(ValueError, match="Draft"):
        validate_pack(rebuilt, WORDS, playable=True)


def test_reordered_recipes_and_invalid_familiarity_fail_before_promotion():
    reordered = copy.deepcopy(MANIFEST)
    reordered["levels"][1], reordered["levels"][2] = (
        reordered["levels"][2],
        reordered["levels"][1],
    )
    with pytest.raises(ValueError, match="gradually"):
        rebuild_topics(reordered, WORDS)
    level = copy.deepcopy(PACK["levels"][0])
    with pytest.raises(ValueError, match="familiarity"):
        apply_difficulty(level, {})


def test_difficulty_uses_puzzle_shape_and_familiarity_not_level_number():
    level = copy.deepcopy(PACK["levels"][-1])
    original = level["difficulty"]["score"]
    easier = {word["answer"]: 1 for word in level["words"]}
    apply_difficulty(level, easier)
    assert level["difficulty"]["score"] < original
    level["id"] = "different-position"
    before = copy.deepcopy(level["difficulty"])
    apply_difficulty(level, easier)
    assert level["difficulty"] == before


def test_future_target_bonus_and_manual_difficulty_override_are_rejected():
    pack = copy.deepcopy(PACK)
    pack["levels"][0]["bonusWords"] = [pack["levels"][1]["words"][0]["answer"]]
    with pytest.raises(ValueError, match="future target"):
        validate_pacing(pack, MANIFEST["familiarity"])
    pack = copy.deepcopy(PACK)
    pack["levels"][0]["difficulty"]["score"] = 1
    with pytest.raises(ValueError, match="Difficulty"):
        validate_pacing(pack, MANIFEST["familiarity"])
