"""Shared editorial exclusions for current puzzles, not historical save catalogs."""

import json
from pathlib import Path

POLICY = Path(__file__).resolve().parents[3] / "content/dictionaries/word-policy.json"


def playable_vocabulary(vocabulary: set[str], *, revision: int = 9) -> set[str]:
    policy = json.loads(POLICY.read_text(encoding="utf-8"))
    excluded = {
        word
        for category in policy["excludedCategories"]
        if category["sinceRevision"] <= revision
        for word in category["words"]
    }
    return vocabulary - excluded


def required_vocabulary(vocabulary: set[str], *, revision: int) -> set[str]:
    """Rare valid words remain playable as bonuses, never required by new boards."""
    allowed = playable_vocabulary(vocabulary, revision=revision)
    if revision < 12:
        return allowed
    review = json.loads(
        (
            POLICY.parent / f"everyday-targets-v{13 if revision >= 13 else 12}.json"
        ).read_text(encoding="utf-8")
    )
    return allowed.intersection(entry["word"] for entry in review["entries"])
