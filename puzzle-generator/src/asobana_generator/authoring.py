"""Rebuild selected layouts from recipes; generation never grants approval."""

import copy
from collections import Counter
from typing import NotRequired, TypedDict

from .generator import generate_level
from .models import ChapterJSON, LevelJSON, PackJSON, TileJSON, WordJSON
from .validation import validate_pack


class Recipe(TypedDict):
    id: str
    chapterId: str
    title: str
    authoring: str
    maxWords: int
    seed: NotRequired[int]
    sourceWords: NotRequired[list[str]]
    manualLevel: NotRequired[LevelJSON]


class Manifest(TypedDict):
    schemaVersion: int
    id: str
    revision: int
    chapters: list[ChapterJSON]
    levels: list[Recipe]


def rebuild_beta(
    legacy: PackJSON, manifest: Manifest, vocabulary: set[str]
) -> PackJSON:
    levels: list[LevelJSON] = []
    for recipe in manifest["levels"]:
        if recipe["authoring"] == "manual-extension":
            level = copy.deepcopy(recipe["manualLevel"])
        else:
            source = recipe["sourceWords"]
            if not set(source) <= vocabulary:
                raise ValueError("Recipe contains unverified source words")
            level = generate_level(
                source,
                seed=recipe["seed"],
                level_id=recipe["id"],
                chapter_id=recipe["chapterId"],
                max_words=recipe["maxWords"],
            ).level
            old = next(
                (item for item in legacy["levels"] if item["id"] == recipe["id"]),
                None,
            )
            if old is not None:
                order = [word["answer"] for word in old["words"]]
                order += sorted(
                    {word["answer"] for word in level["words"]} - set(order)
                )
                by_answer = {word["answer"]: word for word in level["words"]}
                ordered: list[WordJSON] = []
                for index, answer in enumerate(order):
                    word = copy.deepcopy(by_answer[answer])
                    word["id"] = f"word-{index + 1}"
                    ordered.append(word)
                level["words"] = ordered
                needed = Counter(tile["letter"] for tile in level["tiles"])
                needed.subtract(tile["letter"] for tile in old["tiles"])
                extra: list[TileJSON] = [
                    {"id": f"tile-{len(old['tiles']) + i + 1}", "letter": letter}
                    for i, letter in enumerate(sorted(needed.elements()))
                ]
                level["tiles"] = copy.deepcopy(old["tiles"]) + extra
                level["bonusWords"] = old["bonusWords"][:]
        level["id"] = recipe["id"]
        level["chapterId"] = recipe["chapterId"]
        level["title"] = recipe["title"]
        level["reviewStatus"] = "generated-draft"
        if (
            len(level["words"]) != recipe["maxWords"]
            or not 4 <= len(level["words"]) <= 5
        ):
            raise ValueError("Beta recipe must produce four or five targets")
        if max(level["grid"]["rows"], level["grid"]["columns"]) > 7:
            raise ValueError("Beta grid exceeds seven rows or columns")
        levels.append(level)
    pack: PackJSON = {
        "schemaVersion": 1,
        "id": manifest["id"],
        "revision": manifest["revision"],
        "chapters": copy.deepcopy(manifest["chapters"]),
        "levels": levels,
    }
    validate_pack(pack, vocabulary)
    return pack
