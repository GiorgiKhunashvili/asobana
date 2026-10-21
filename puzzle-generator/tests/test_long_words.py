import copy
import json
from pathlib import Path

import pytest

from asobana_generator.wide import validate_word_lengths

ROOT = Path(__file__).resolve().parents[2]


def test_actual_long_answers_are_required_not_just_six_tile_wheels():
    pack = json.loads((ROOT / "content/levels/discovery.v11.json").read_text())
    validate_word_lengths(pack)
    previous = json.loads((ROOT / "content/levels/discovery.v10.json").read_text())
    with pytest.raises(ValueError):
        validate_word_lengths(previous)
    no_long = copy.deepcopy(pack)
    for word in no_long["levels"][25]["words"]:
        word["answer"] = "სია"
    with pytest.raises(ValueError, match="missing longer answers"):
        validate_word_lengths(no_long)
    no_six = copy.deepcopy(pack)
    for level in no_six["levels"][15:25]:
        for word in level["words"]:
            word["answer"] = word["answer"][:5]
    with pytest.raises(ValueError, match="more six-letter"):
        validate_word_lengths(no_six)
