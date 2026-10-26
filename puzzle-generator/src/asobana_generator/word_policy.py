"""Shared editorial exclusions for current puzzles, not historical save catalogs."""

import json
from pathlib import Path

POLICY = Path(__file__).resolve().parents[3] / "content/dictionaries/word-policy.json"


def excluded_required_words(*, revision: int) -> set[str]:
    """Plural and owner bonus-only decisions never remove bonus recognition."""
    policy = json.loads(POLICY.read_text(encoding="utf-8"))
    return {
        word
        for category in policy.get("requiredExcludedCategories", [])
        if category["sinceRevision"] <= revision
        for word in category["words"]
    }


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
    review_revision = (
        31
        if revision >= 31
        else 30
        if revision >= 30
        else 29
        if revision >= 29
        else 28
        if revision >= 28
        else 27
        if revision >= 27
        else 26
        if revision >= 26
        else 25
        if revision >= 25
        else 24
        if revision >= 24
        else min(revision, 20)
    )
    review = json.loads(
        (POLICY.parent / f"everyday-targets-v{review_revision}.json").read_text(
            encoding="utf-8"
        )
    )
    excluded = excluded_required_words(revision=revision)
    return allowed.intersection(entry["word"] for entry in review["entries"]) - excluded
