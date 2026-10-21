import copy
import json
from pathlib import Path

import pytest
from jsonschema import Draft202012Validator

from asobana_generator.export import export_draft
from asobana_generator.generator import GenerationError, derive_letters, generate_level
from asobana_generator.models import Placement
from asobana_generator.validation import valid_layout, validate_level, validate_pack
from asobana_generator.vocabulary import (
    can_form_word,
    ingest_candidates,
    is_valid_word,
    load_vocabulary,
    normalize_word,
)

ROOT = Path(__file__).resolve().parents[2]
DICTIONARY = ROOT / "content/dictionaries/prototype-ka.json"
PACK = json.loads((ROOT / "content/levels/prototype.v1.json").read_text())
WORDS = {entry.word for entry in load_vocabulary(DICTIONARY, allow_prototype=True)}


def test_normalization_and_modern_alphabet():
    assert normalize_word("  ᲛᲖᲔ  ") == "მზე"
    assert is_valid_word("მე")
    for word in ["mze", "მ ზ ე", "მზე!", "მზ\u200bე", "ჱ", "😀", "მ"]:
        assert not is_valid_word(word)
    assert not can_form_word("დედა", list("დეა"))
    assert can_form_word("დედა", list("დედა"))


def test_ingestion_does_not_approve_words():
    report = ingest_candidates(["მზე", " ᲛᲖᲔ ", "not-georgian", "მე"])
    assert set(report.candidates) == {"მზე", "მე"}
    assert report.duplicates == 1
    assert report.rejected == ("not-georgian",)
    assert not hasattr(report, "approved")
    with pytest.raises(ValueError, match="not approved"):
        load_vocabulary(DICTIONARY)


def test_bundled_pack_and_json_schema():
    validate_pack(PACK, WORDS, playable=True)
    schema = json.loads(
        (ROOT / "content/schemas/level-pack.v1.schema.json").read_text()
    )
    Draft202012Validator.check_schema(schema)
    Draft202012Validator(schema).validate(PACK)


@pytest.mark.parametrize("seed", range(25))
def test_seeded_generator_is_valid_reproducible_and_draft(seed):
    result = generate_level(sorted(WORDS), seed=seed)
    assert result == generate_level(sorted(WORDS, reverse=True), seed=seed)
    assert result.level["reviewStatus"] == "generated-draft"
    assert len(result.level["words"]) >= 2
    assert 2 <= len(result.level["tiles"]) <= 8
    validate_level(result.level, WORDS)
    with pytest.raises(ValueError, match="Draft"):
        validate_level(result.level, WORDS, playable=True)
    schema = json.loads(
        (ROOT / "content/schemas/level-pack.v1.schema.json").read_text()
    )
    Draft202012Validator(schema["$defs"]["level"]).validate(result.level)


def test_multiset_letters_and_repeated_letter_crossword():
    assert derive_letters(["დედა", "მამა"]).count("ა") == 2
    assert derive_letters(["დედა", "მამა"]).count("დ") == 2
    result = generate_level(["დედა", "მამა", "მადა"], seed=9)
    validate_level(result.level, {"დედა", "მამა", "მადა"})


def test_export_and_review_report(tmp_path):
    result = generate_level(sorted(WORDS), seed=42)
    target = tmp_path / "draft.v1.json"
    report_path = export_draft(result, target, WORDS)
    validate_pack(json.loads(target.read_text()), WORDS)
    report = json.loads(report_path.read_text())
    assert report["requiresEditorialReview"] is True
    assert report["seed"] == 42
    assert set(report["targets"]) <= WORDS
    assert "Generation grants no approval" in report["instructions"]


@pytest.mark.parametrize(
    "mutate",
    [
        lambda level: level.update(schemaVersion=True),
        lambda level: level.update(tiles=[]),
        lambda level: level.update(words=[]),
        lambda level: level["words"][0].update(row=20),
        lambda level: level["words"][0].update(answer="fake"),
        lambda level: level["words"][1].update(column=1),
        lambda level: level["words"][1].update(direction="across"),
        lambda level: level["tiles"][1].update(id="tile-1"),
        lambda level: level.update(bonusWords=["მზე"]),
        lambda level: level.update(grid=None),
        lambda level: level["words"][0].update(acceptedAnswers=["მე"]),
    ],
)
def test_malformed_levels_rejected(mutate):
    level = copy.deepcopy(PACK["levels"][0])
    mutate(level)
    with pytest.raises(ValueError):
        validate_level(level, WORDS)


def test_conflicting_intersections_and_unlisted_contacts():
    assert not valid_layout(
        [Placement("მზე", 0, 0, "across"), Placement("მე", 0, 1, "down")]
    )
    assert not valid_layout(
        [Placement("მზე", 0, 0, "across"), Placement("მე", 0, 0, "across")]
    )
    assert not valid_layout(
        [Placement("კარი", 0, 0, "across"), Placement("კანი", 0, 1, "across")]
    )
    assert not valid_layout(
        [Placement("მზე", 0, 0, "across"), Placement("მე", 3, 3, "down")]
    )


@pytest.mark.parametrize(
    "words", [["მზე"], ["მზე", "კანი"], ["fake", "მე"], ["მზე", "მზე"]]
)
def test_generation_failures_are_reported(words):
    with pytest.raises(GenerationError):
        generate_level(words, seed=1)
