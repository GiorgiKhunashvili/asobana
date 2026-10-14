"""Explicit semantic pools for themed puzzles; never pad with unrelated words."""

from typing import NotRequired, TypedDict

from .generator import generate_level
from .models import PackJSON
from .pacing import apply_difficulty, validate_pacing
from .validation import validate_pack
from .vocabulary import can_form_word


class Topic(TypedDict):
    id: str
    title: str
    words: list[str]


class TopicRecipe(TypedDict):
    id: str
    topicId: str
    sourceWords: list[str]
    seed: int


class TopicManifest(TypedDict):
    schemaVersion: int
    id: str
    revision: int
    topics: list[Topic]
    levels: list[TopicRecipe]
    familiarity: NotRequired[dict[str, int]]


def rebuild_topics(manifest: TopicManifest, vocabulary: set[str]) -> PackJSON:
    topics = {topic["id"]: topic for topic in manifest["topics"]}
    if len(topics) != len(manifest["topics"]):
        raise ValueError("Duplicate topic")
    for topic in topics.values():
        if not topic["words"] or not set(topic["words"]) <= vocabulary:
            raise ValueError("Topic contains unverified words")
    pack: PackJSON = {
        "schemaVersion": 1,
        "id": manifest["id"],
        "revision": manifest["revision"],
        "chapters": [
            {"id": topic["id"], "title": topic["title"]} for topic in manifest["topics"]
        ],
        "levels": [],
    }
    signatures: set[tuple[str, ...]] = set()
    for recipe in manifest["levels"]:
        topic = topics[recipe["topicId"]]
        source = recipe["sourceWords"]
        if not 3 <= len(source) <= 5 or not set(source) <= set(topic["words"]):
            raise ValueError("Every target must belong to its topic")
        level = generate_level(
            source,
            seed=recipe["seed"],
            level_id=recipe["id"],
            chapter_id=topic["id"],
            max_words=len(source),
        ).level
        if len(level["words"]) != len(source):
            raise ValueError("Recipe did not place every themed answer")
        if max(level["grid"]["rows"], level["grid"]["columns"]) > 7:
            raise ValueError("Themed grid exceeds seven rows or columns")
        signature = tuple(sorted(source))
        if signature in signatures:
            raise ValueError("Duplicate themed answer set")
        signatures.add(signature)
        level["title"] = topic["title"]
        if manifest["revision"] >= 4:
            apply_difficulty(level, manifest["familiarity"])
        letters = [tile["letter"] for tile in level["tiles"]]
        level["bonusWords"] = sorted(
            word
            for word in topic["words"]
            if word not in source and can_form_word(word, letters)
        )
        pack["levels"].append(level)
    if manifest["revision"] >= 4:
        last_target = {
            word["answer"]: index
            for index, level in enumerate(pack["levels"])
            for word in level["words"]
        }
        used_bonus: set[str] = set()
        for index, level in enumerate(pack["levels"]):
            level["bonusWords"] = [
                word
                for word in level["bonusWords"]
                if last_target.get(word, -2) < index - 1 and word not in used_bonus
            ]
            used_bonus.update(level["bonusWords"])
        validate_pacing(pack, manifest["familiarity"])
    validate_pack(pack, vocabulary)
    return pack
