import copy
import json
from pathlib import Path
from typing import cast

import pytest
from jsonschema import Draft202012Validator

from asobana_generator.models import PackJSON
from asobana_generator.topics import TopicManifest, rebuild_topics
from asobana_generator.validation import validate_pack
from asobana_generator.vocabulary import load_vocabulary

ROOT = Path(__file__).resolve().parents[2]
MANIFEST = cast(
    TopicManifest,
    json.loads((ROOT / "content/levels/themed.v3.recipes.json").read_text()),
)
PACK = cast(PackJSON, json.loads((ROOT / "content/levels/themed.v3.json").read_text()))
WORDS = {
    entry.word
    for entry in load_vocabulary(
        ROOT / "content/dictionaries/beta-ka.json", allow_prototype=True
    )
}


def test_themed_pack_schema_semantics_and_reproduction():
    validate_pack(PACK, WORDS, playable=True)
    schema = json.loads(
        (ROOT / "content/schemas/level-pack.v1.schema.json").read_text()
    )
    Draft202012Validator(schema).validate(PACK)
    before = copy.deepcopy(MANIFEST)
    draft = rebuild_topics(MANIFEST, WORDS)
    expected = copy.deepcopy(PACK)
    for level in expected["levels"]:
        level["reviewStatus"] = "generated-draft"
    assert draft == expected
    assert MANIFEST == before
    assert len(draft["levels"]) == 50
    with pytest.raises(ValueError, match="Draft"):
        validate_pack(draft, WORDS, playable=True)


def test_unrelated_verified_word_is_rejected_before_generation():
    manifest = copy.deepcopy(MANIFEST)
    manifest["levels"][0]["sourceWords"][0] = "ლომი"
    with pytest.raises(ValueError, match="belong to its topic"):
        rebuild_topics(manifest, WORDS)


def test_all_targets_and_bonuses_belong_to_the_displayed_topic():
    topics = {topic["id"]: topic for topic in MANIFEST["topics"]}
    for level in PACK["levels"]:
        topic = topics[level["chapterId"]]
        assert level["title"] == topic["title"]
        assert {word["answer"] for word in level["words"]} <= set(topic["words"])
        assert set(level["bonusWords"]) <= set(topic["words"])
