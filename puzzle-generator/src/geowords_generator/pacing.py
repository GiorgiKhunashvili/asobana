"""Transparent puzzle-difficulty heuristic; familiarity is an editorial estimate."""

import copy
from collections import Counter
from collections.abc import Mapping

from .models import LevelJSON, PackJSON


def apply_difficulty(level: LevelJSON, familiarity: Mapping[str, int]) -> None:
    words = [word["answer"] for word in level["words"]]
    if any(familiarity.get(word) not in (1, 2, 3) for word in words):
        raise ValueError("Every answer needs a familiarity estimate from 1 to 3")
    score = min(
        100,
        4 * len(level["tiles"])
        + 3 * len(words)
        + 2 * max(map(len, words))
        + sum(len(word) - 2 for word in words)
        + sum(5 * (familiarity[word] - 1) for word in words),
    )
    level["difficulty"] = {
        "score": score,
        "tier": "easy" if score < 45 else "medium" if score < 65 else "hard",
    }


def validate_pacing(pack: PackJSON, familiarity: Mapping[str, int]) -> None:
    """Reject regressions in progression and repeated answers, not just layout."""
    last_target = {
        word["answer"]: index
        for index, level in enumerate(pack["levels"])
        for word in level["words"]
    }
    indices = {level["id"]: index for index, level in enumerate(pack["levels"])}
    bonuses: set[str] = set()
    for chapter in pack["chapters"]:
        levels = [
            level for level in pack["levels"] if level["chapterId"] == chapter["id"]
        ]
        if len(levels) != 5:
            raise ValueError("Each expanded topic requires five levels")
        uses: Counter[str] = Counter()
        previous: LevelJSON | None = None
        for level in levels:
            expected = copy.deepcopy(level)
            apply_difficulty(expected, familiarity)
            if expected["difficulty"] != level["difficulty"]:
                raise ValueError("Difficulty does not match puzzle and familiarity")
            words = {word["answer"] for word in level["words"]}
            uses.update(words)
            if max(uses.values()) > 2:
                raise ValueError("A topic target repeats more than twice")
            if previous:
                delta = level["difficulty"]["score"] - previous["difficulty"]["score"]
                if not 1 <= delta <= 15:
                    raise ValueError("Topic difficulty must rise gradually")
                if len(level["words"]) < len(previous["words"]):
                    raise ValueError("Target count must not decrease within a topic")
                if len(words & {word["answer"] for word in previous["words"]}) > 1:
                    raise ValueError("Adjacent levels repeat too many answers")
            elif any(familiarity[word] > 2 for word in words):
                raise ValueError("Topic opener contains advanced vocabulary")
            for bonus in level["bonusWords"]:
                if (
                    last_target.get(bonus, -2) >= indices[level["id"]] - 1
                    or bonus in bonuses
                ):
                    raise ValueError(
                        "Bonus repeats a recent answer or reveals a future target"
                    )
                bonuses.add(bonus)
            previous = level
