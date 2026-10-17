import copy
import hashlib
import json
from pathlib import Path
from typing import cast

import pytest

from geowords_generator.models import PackJSON
from geowords_generator.vocabulary import load_vocabulary
from geowords_generator.wide import WideManifest, rebuild_wide, validate_wide
from geowords_generator.word_policy import playable_vocabulary

ROOT = Path(__file__).resolve().parents[2]
DICTIONARY = ROOT / "content/dictionaries/discovery-v8-ka.json"
MANIFEST = cast(
    WideManifest,
    json.loads((ROOT / "content/levels/discovery.v8.recipes.json").read_text()),
)
PACK = cast(
    PackJSON, json.loads((ROOT / "content/levels/discovery.v8.json").read_text())
)
WORDS = {entry.word for entry in load_vocabulary(DICTIONARY, allow_prototype=True)}


def test_expanded_vocabulary_preserves_history_and_excludes_conjugated_verbs():
    old = json.loads((ROOT / "content/dictionaries/discovery-ka.json").read_text())
    new = json.loads(DICTIONARY.read_text())
    entries = {entry["word"]: entry for entry in new["entries"]}
    assert len(entries) > 421
    for entry in old["entries"]:
        assert entries[entry["word"]] == entry
    allowed = playable_vocabulary(WORDS, revision=8)
    assert not allowed.intersection("არის აქვს იდო იყო მინდა მოდი მშია".split())
    for entry in new["entries"]:
        assert f"oldid={entry['sourceRevision']}" in entry["sourceUrl"]
        assert entry["gloss"].strip()
    for entry in new["entries"]:
        if entry["word"] not in {item["word"] for item in old["entries"]}:
            assert entry["partOfSpeech"] in ("noun", "adjective", "adverb")


def test_unique_campaign_is_reproducible_and_digest_bound():
    draft = rebuild_wide(MANIFEST, WORDS)
    answers = [word["answer"] for level in draft["levels"] for word in level["words"]]
    assert len(answers) == len(set(answers)) == 250
    allowed = playable_vocabulary(WORDS, revision=8)
    for level in draft["levels"]:
        assert set(level["bonusWords"]) <= allowed
        assert all(set(word["acceptedAnswers"]) <= allowed for word in level["words"])
    encoded = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    review = json.loads((ROOT / "content/levels/discovery.v8.review.json").read_text())
    assert hashlib.sha256(encoded).hexdigest() == review["draftSha256"]
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert draft == PACK


def test_release_gate_rejects_repeated_required_variants_and_verb_sources():
    pack = copy.deepcopy(PACK)
    pack["levels"][1]["words"][0]["acceptedAnswers"].append(
        pack["levels"][0]["words"][0]["answer"]
    )
    with pytest.raises(ValueError, match="Repeated required answer"):
        validate_wide(pack, WORDS, MANIFEST["familiarity"])
    manifest = copy.deepcopy(MANIFEST)
    manifest["levels"][0]["sourceWords"].append("იდო")
    with pytest.raises(ValueError, match="Unverified"):
        rebuild_wide(manifest, WORDS)
