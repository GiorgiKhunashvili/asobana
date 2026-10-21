"""Exact batch-five approval scope, exclusions and reproducible campaign."""

import copy
import hashlib
import json
from pathlib import Path
from typing import cast

import pytest

from asobana_generator.models import PackJSON
from asobana_generator.vocabulary import can_form_word, load_vocabulary
from asobana_generator.wide import WideManifest, rebuild_wide, validate_wide
from asobana_generator.word_policy import playable_vocabulary, required_vocabulary

ROOT = Path(__file__).resolve().parents[2]
REJECTED = set(
    (
        "აქტი ბაგა დომენი დუღაბი ეჟვანი ლაქი პწკარი სამთო ტირიფი ფლანგი ყანჩა ყულფი"
    ).split()
)


def load(path: str):
    return json.loads((ROOT / path).read_text())


def test_exact_88_additions_and_twelve_exclusions():
    batch = load("docs/VOCABULARY_EXPANSION_BATCH_05.json")
    old = load("content/dictionaries/discovery-v19-ka.json")
    current = load("content/dictionaries/discovery-v20-ka.json")
    by_word = {e["word"]: e for e in current["entries"]}
    main = {
        e["word"]: e
        for e in load("content/dictionaries/everyday-targets-v20.json")["entries"]
    }
    old_main = load("content/dictionaries/everyday-targets-v19.json")["entries"]
    for entry in old_main:
        assert main[entry["word"]] == entry
    approved = {
        e["word"] for e in batch["entries"] if e["ownerDecision"] == "required-eligible"
    }
    rejected = {e["word"] for e in batch["entries"] if e["ownerDecision"] == "excluded"}
    assert rejected == REJECTED
    assert len(approved) == 88 and len(batch["entries"]) == 100
    assert len(by_word) == 1790
    assert not (approved | rejected) & {e["word"] for e in old["entries"]}
    assert not rejected & by_word.keys()
    for entry in old["entries"]:
        assert by_word[entry["word"]] == entry
    for entry in batch["entries"]:
        if entry["word"] not in approved:
            continue
        assert entry["partOfSpeech"] in {"noun", "adjective"}
        assert 3 <= len(entry["word"]) <= 6
        assert by_word[entry["word"]]["sourceUrl"] == entry["sourceUrl"]
        assert by_word[entry["word"]]["gloss"] == entry["proposedMeaning"]
        assert main[entry["word"]]["gloss"] == entry["proposedMeaning"]
        for key in (
            "sourceChecked",
            "sourceUrl",
            "sourceRevision",
            "sourceContentSha256",
            "supplementalSourceUrl",
            "partOfSpeech",
            "senseNote",
        ):
            if entry.get(key) is not None:
                assert by_word[entry["word"]][key] == entry[key]
                assert main[entry["word"]][key] == entry[key]
    vocabulary = {
        e.word
        for e in load_vocabulary(
            ROOT / "content/dictionaries/discovery-v20-ka.json", allow_prototype=True
        )
    }
    required = required_vocabulary(vocabulary, revision=20)
    assert required == required_vocabulary(vocabulary, revision=19) | approved
    assert len(required) == 1569
    assert len(playable_vocabulary(vocabulary, revision=20)) == 1687
    assert playable_vocabulary(rejected, revision=19) == rejected
    assert not playable_vocabulary(vocabulary | rejected, revision=20) & rejected
    assert not {"ფეხები", "ქვები", "თელა", "რაზა", "ურცი"} & required


def test_reproducible_v20_improves_coverage_and_preserves_all_bonus_words():
    vocabulary = {
        e["word"] for e in load("content/dictionaries/discovery-v20-ka.json")["entries"]
    }
    manifest = cast(WideManifest, load("content/levels/discovery.v20.recipes.json"))
    draft = rebuild_wide(manifest, vocabulary)
    prior = cast(PackJSON, load("content/levels/discovery.v19.json"))
    words = {w["answer"] for level in draft["levels"] for w in level["words"]}
    old_words = {w["answer"] for level in prior["levels"] for w in level["words"]}
    assert len(draft["levels"]) == 240
    assert len(words) > len(old_words)
    assert not words & REJECTED
    eligible = playable_vocabulary(vocabulary, revision=20)
    for level in draft["levels"]:
        accepted = {a for w in level["words"] for a in w["acceptedAnswers"]}
        assert set(level["bonusWords"]) == {
            w
            for w in eligible - accepted
            if can_form_word(w, [tile["letter"] for tile in level["tiles"]])
        }
    raw = (json.dumps(draft, ensure_ascii=False, indent=2) + "\n").encode()
    assert (
        hashlib.sha256(raw).hexdigest()
        == load("content/levels/discovery.v20.review.json")["draftSha256"]
    )
    for level in draft["levels"]:
        level["reviewStatus"] = "prototype-reference-checked"
    assert draft == load("content/levels/discovery.v20.json")
    for rejected in REJECTED:
        for role in ("answer", "variant", "bonus"):
            poisoned = copy.deepcopy(draft)
            target = poisoned["levels"][0]["words"][0]
            if role == "answer":
                target["answer"] = rejected
            elif role == "variant":
                target["acceptedAnswers"].append(rejected)
            else:
                poisoned["levels"][0]["bonusWords"].append(rejected)
            with pytest.raises(ValueError):
                validate_wide(poisoned, vocabulary | REJECTED, manifest["familiarity"])
