"""Small-wheel mixed vocabulary campaign; generation never grants approval."""

import json
from collections import Counter
from pathlib import Path
from typing import TypedDict

from .generator import derive_letters, generate_level
from .models import ChapterJSON, DifficultyJSON, LevelJSON, PackJSON, WordJSON
from .validation import validate_pack
from .vocabulary import can_form_word


class JourneyManifest(TypedDict):
    revision: int
    levelCount: int
    answersPerLevel: int
    minRequiredGap: int
    chapters: list[ChapterJSON]
    legacyChapterIds: list[str]


JOURNEY: JourneyManifest = json.loads(
    (Path(__file__).resolve().parents[3] / "content/journey-v13.json").read_text()
)


MALTA_JOURNEY: JourneyManifest = json.loads(
    (Path(__file__).resolve().parents[3] / "content/journey-v21.json").read_text()
)


TUNISIA_JOURNEY: JourneyManifest = json.loads(
    (Path(__file__).resolve().parents[3] / "content/journey-v22.json").read_text()
)


SPAIN_JOURNEY: JourneyManifest = json.loads(
    (Path(__file__).resolve().parents[3] / "content/journey-v23.json").read_text()
)


PORTUGAL_MOROCCO_JOURNEY: JourneyManifest = json.loads(
    (Path(__file__).resolve().parents[3] / "content/journey-v28.json").read_text()
)


def journey_for_revision(revision: int) -> JourneyManifest:
    if revision >= 28:
        return PORTUGAL_MOROCCO_JOURNEY
    if revision >= 23:
        return SPAIN_JOURNEY
    if revision >= 22:
        return TUNISIA_JOURNEY
    return MALTA_JOURNEY if revision >= 21 else JOURNEY


class DiscoveryRecipe(TypedDict):
    id: str
    sourceWords: list[str]
    wheel: str
    seed: int


class DiscoveryManifest(TypedDict):
    schemaVersion: int
    id: str
    revision: int
    chapters: list[ChapterJSON]
    familiarity: dict[str, int]
    levels: list[DiscoveryRecipe]


def discovery_difficulty(
    level: LevelJSON, familiarity: dict[str, int], *, revision: int = 10
) -> DifficultyJSON:
    words = [word["answer"] for word in level["words"]]
    if any(familiarity.get(word) not in (1, 2) for word in words):
        raise ValueError("Missing familiar-word estimate")
    score = min(
        100,
        (len(level["tiles"]) - 4) * (8 if revision >= 11 else 15)
        + (len(words) - 4) * 8
        + 2 * max(map(len, words))
        + sum(
            2 * (len(word) - 2) + (3 if revision >= 11 else 5) * (familiarity[word] - 1)
            for word in words
        ),
    )
    return {
        "score": score,
        "tier": "easy" if score < 45 else "medium" if score < 65 else "hard",
    }


def validate_discovery(
    pack: PackJSON, vocabulary: set[str], familiarity: dict[str, int]
) -> None:
    journey = pack["revision"] >= 13
    count = journey_for_revision(pack["revision"])["levelCount"] if journey else 50
    if len(pack["levels"]) != count or len(pack["chapters"]) != count // 5:
        raise ValueError(f"Discovery requires {count} levels in {count // 5} chapters")
    wheels: set[str] = set()
    signatures: set[tuple[str, ...]] = set()
    uses: Counter[str] = Counter()
    accepted_uses: set[str] = set()
    last_required: dict[str, int] = {}
    chapter_uses: Counter[str] = Counter()
    previous: set[str] = set()
    for index, level in enumerate(pack["levels"]):
        chapter = pack["chapters"][index // 5]
        if index % 5 == 0:
            chapter_uses.clear()
        if (
            level["id"] != f"ka-{index + 1:03}"
            or level["chapterId"] != chapter["id"]
            or level["title"]
            != ("დასაწყისი" if index == 0 else f"აღმოჩენა {index + 1}")
        ):
            raise ValueError("Discovery identities or chapter order changed")
        words = [word["answer"] for word in level["words"]]
        if journey:
            validate_required_gap(level["words"], index, last_required)
        elif pack["revision"] >= 8:
            accepted = {
                answer for word in level["words"] for answer in word["acceptedAnswers"]
            }
            if accepted_uses.intersection(accepted):
                raise ValueError("Repeated required answer")
            accepted_uses.update(accepted)
        if len(words) not in (
            (5,)
            if journey
            else (5, 6, 7)
            if pack["revision"] >= 6
            else (4, 5)
            if index < 10
            else (5,)
        ):
            raise ValueError("Discovery targets violate campaign progression")
        wheel = "".join(sorted(tile["letter"] for tile in level["tiles"]))
        allowed_tiles = (
            ((5,) if index < 5 else (6,) if index < 25 else (7,))
            if journey
            else ((5,) if index < 5 else (5, 6) if index < 25 else (5, 6, 7))
            if pack["revision"] >= 12
            else ((5,) if index < 5 else (5, 6))
            if pack["revision"] >= 11
            else (5,)
            if index < 20
            else (6,)
            if 30 <= index < 40
            else (5, 6)
        )
        if len(wheel) not in allowed_tiles:
            raise ValueError("Wheel exceeds its progression stage")
        if "".join(derive_letters(words)) != wheel:
            raise ValueError("Wheel must match target multiplicities without padding")
        if max(level["grid"]["rows"], level["grid"]["columns"]) > 7:
            raise ValueError("Discovery grid exceeds seven rows or columns")
        if sum(len(word) == 2 for word in words) > 1 or "აი" in words:
            raise ValueError("Too many short or particle targets")
        if wheel in wheels or tuple(sorted(words)) in signatures:
            raise ValueError("Repeated discovery wheel or answer set")
        wheels.add(wheel)
        signatures.add(tuple(sorted(words)))
        if len(previous.intersection(words)) > 1:
            raise ValueError("Adjacent boards repeat too many answers")
        previous = set(words)
        uses.update(words)
        chapter_uses.update(words)
        if (
            not journey and max(uses.values()) > (1 if pack["revision"] >= 8 else 7)
        ) or max(chapter_uses.values()) > 2:
            raise ValueError("Discovery answers repeat too often")
        bonuses = sorted(
            word
            for word in vocabulary
            if word not in words and can_form_word(word, list(wheel))
        )
        if (not bonuses and pack["revision"] < 7) or level["bonusWords"] != bonuses:
            raise ValueError("Bonus list must include every verified formable extra")
        if level["difficulty"] != discovery_difficulty(
            level, familiarity, revision=pack["revision"]
        ):
            raise ValueError("Difficulty does not match discovery puzzle")
    stages = (
        ()
        if pack["revision"] >= 11
        else ((20, 30),)
        if pack["revision"] >= 10
        else ((20, 30), (40, 50))
    )
    for start, end in stages:
        if {len(level["tiles"]) for level in pack["levels"][start:end]} != {5, 6}:
            raise ValueError("Mixed stages require both five and six tiles")


def rebuild_discovery(manifest: DiscoveryManifest, vocabulary: set[str]) -> PackJSON:
    pack: PackJSON = {
        "schemaVersion": 1,
        "id": manifest["id"],
        "revision": manifest["revision"],
        "chapters": manifest["chapters"],
        "levels": [],
    }
    for index, recipe in enumerate(manifest["levels"]):
        source = recipe["sourceWords"]
        if not set(source) <= vocabulary or not 4 <= len(source) <= 5:
            raise ValueError("Unverified discovery recipe")
        if "".join(derive_letters(source)) != recipe["wheel"]:
            raise ValueError("Recipe wheel must match target multiplicities")
        chapter = manifest["chapters"][index // 5]
        level = generate_level(
            source,
            seed=recipe["seed"],
            level_id=recipe["id"],
            chapter_id=chapter["id"],
            max_words=len(source),
            max_tiles=len(recipe["wheel"]),
        ).level
        if len(level["words"]) != len(source):
            raise ValueError("Recipe could not place every discovery answer")
        level["title"] = "დასაწყისი" if index == 0 else f"აღმოჩენა {index + 1}"
        level["bonusWords"] = sorted(
            word
            for word in vocabulary
            if word not in source and can_form_word(word, list(recipe["wheel"]))
        )
        level["difficulty"] = discovery_difficulty(level, manifest["familiarity"])
        pack["levels"].append(level)
    validate_pack(pack, vocabulary)
    validate_discovery(pack, vocabulary, manifest["familiarity"])
    return pack


def validate_required_gap(
    words: list[WordJSON], index: int, last_required: dict[str, int]
) -> None:
    """Accepted spellings share the global cooldown; bonuses never enter it."""
    board: set[str] = set()
    for word in words:
        accepted = set(word["acceptedAnswers"]) | {word["answer"]}
        if board.intersection(accepted):
            raise ValueError("Repeated required answer within a board")
        board.update(accepted)
    for answer in board:
        if (
            index - last_required.get(answer, -JOURNEY["minRequiredGap"])
            < JOURNEY["minRequiredGap"]
        ):
            raise ValueError("Required answer repeats inside the 75-level gap")
    last_required.update(dict.fromkeys(board, index))
