import re
from collections import defaultdict
from typing import cast

from .models import LevelJSON, PackJSON, Placement
from .vocabulary import can_form_word, is_valid_word, normalize_word

IDENTIFIER = re.compile(r"[a-z0-9][a-z0-9-]{0,63}\Z")


def valid_layout(placements: list[Placement]) -> bool:
    if not placements or len({p.word for p in placements}) != len(placements):
        return False
    cells: dict[tuple[int, int], list[tuple[str, str, int]]] = defaultdict(list)
    neighbors: dict[int, set[int]] = defaultdict(set)
    for index, placement in enumerate(placements):
        for row, column, letter in placement.cells():
            for old_letter, old_direction, old_index in cells[(row, column)]:
                if old_letter != letter or old_direction == placement.direction:
                    return False
                neighbors[index].add(old_index)
                neighbors[old_index].add(index)
            cells[(row, column)].append((letter, placement.direction, index))
    seen: set[int] = set()
    stack = [0]
    while stack:
        index = stack.pop()
        if index not in seen:
            seen.add(index)
            stack.extend(neighbors[index] - seen)
    if len(seen) != len(placements):
        return False
    for direction in ("across", "down"):
        dr, dc = (1, 0) if direction == "down" else (0, 1)
        for row, column in cells:
            if (row - dr, column - dc) in cells:
                continue
            length = 0
            while (row + dr * length, column + dc * length) in cells:
                length += 1
            if length > 1 and not any(
                p.direction == direction
                and p.row == row
                and p.column == column
                and len(p.word) == length
                for p in placements
            ):
                return False
    return True


def _object(value: object, name: str) -> dict[str, object]:
    if not isinstance(value, dict):
        raise ValueError(f"{name}: expected object")
    return cast(dict[str, object], value)


def _array(value: object, name: str) -> list[object]:
    if not isinstance(value, list):
        raise ValueError(f"{name}: expected array")
    return cast(list[object], value)


def _integer(value: object, low: int, high: int, name: str) -> int:
    if type(value) is not int or not low <= value <= high:
        raise ValueError(f"{name}: invalid integer")
    return value


def _string(value: object, name: str) -> str:
    if not isinstance(value, str) or not value.strip():
        raise ValueError(f"{name}: expected string")
    return value


def _id(value: object, name: str) -> str:
    identifier = _string(value, name)
    if not IDENTIFIER.fullmatch(identifier):
        raise ValueError(f"{name}: invalid ID")
    return identifier


def validate_level(
    value: object, vocabulary: set[str], *, playable: bool = False
) -> LevelJSON:
    raw = _object(value, "level")
    if type(raw.get("schemaVersion")) is not int or raw["schemaVersion"] != 1:
        raise ValueError("Unsupported level schema")
    _id(raw.get("id"), "level ID")
    _id(raw.get("chapterId"), "chapter ID")
    _string(raw.get("title"), "title")
    grid = _object(raw.get("grid"), "grid")
    rows = _integer(grid.get("rows"), 1, 20, "rows")
    columns = _integer(grid.get("columns"), 1, 20, "columns")
    tiles = [_object(tile, "tile") for tile in _array(raw.get("tiles"), "tiles")]
    if not 2 <= len(tiles) <= 8:
        raise ValueError("Wheel requires 2–8 tiles")
    tile_ids = [_id(tile.get("id"), "tile ID") for tile in tiles]
    if len(set(tile_ids)) != len(tiles):
        raise ValueError("Duplicate tile IDs")
    letters = [_string(tile.get("letter"), "letter") for tile in tiles]
    if any(len(letter) != 1 or not "ა" <= letter <= "ჰ" for letter in letters):
        raise ValueError("Invalid tile letter")
    words = [_object(word, "word") for word in _array(raw.get("words"), "words")]
    if not 1 <= len(words) <= 30:
        raise ValueError("Level requires 1–30 words")
    word_ids = [_id(word.get("id"), "word ID") for word in words]
    if len(set(word_ids)) != len(word_ids):
        raise ValueError("Duplicate word IDs")
    placements: list[Placement] = []
    for word in words:
        answer = _string(word.get("answer"), "answer")
        if word.get("acceptedAnswers") != [answer]:
            raise ValueError("Accepted answer must equal grid spelling")
        direction = word.get("direction")
        if direction not in ("across", "down"):
            raise ValueError("Invalid direction")
        placement = Placement(
            answer,
            _integer(word.get("row"), 0, 19, "row"),
            _integer(word.get("column"), 0, 19, "column"),
            direction,
        )
        if any(r >= rows or c >= columns for r, c, _ in placement.cells()):
            raise ValueError("Word outside grid")
        placements.append(placement)
    bonuses = [
        _string(word, "bonus") for word in _array(raw.get("bonusWords"), "bonusWords")
    ]
    answers = [p.word for p in placements]
    if len(set(bonuses)) != len(bonuses) or set(bonuses) & set(answers):
        raise ValueError("Duplicate bonus or target/bonus collision")
    for candidate_word in answers + bonuses:
        if (
            not is_valid_word(candidate_word)
            or normalize_word(candidate_word) != candidate_word
            or candidate_word not in vocabulary
            or not can_form_word(candidate_word, letters)
        ):
            raise ValueError(f"Unplayable or unverified word: {candidate_word}")
    if not valid_layout(placements):
        raise ValueError(
            "Conflicting, disconnected, overlapping or unlisted crossword run"
        )
    difficulty = _object(raw.get("difficulty"), "difficulty")
    if difficulty.get("tier") not in ("easy", "medium", "hard"):
        raise ValueError("Invalid difficulty tier")
    _integer(difficulty.get("score"), 0, 100, "score")
    hints = _object(raw.get("hints"), "hints")
    if any(type(hints.get(key)) is not bool for key in ("allowCell", "allowWord")):
        raise ValueError("Invalid hints")
    status = raw.get("reviewStatus")
    if status not in ("prototype-reference-checked", "generated-draft"):
        raise ValueError("Invalid review status")
    if playable and status == "generated-draft":
        raise ValueError("Draft cannot be played")
    return cast(LevelJSON, raw)


def validate_pack(
    value: object, vocabulary: set[str], *, playable: bool = False
) -> PackJSON:
    raw = _object(value, "pack")
    if type(raw.get("schemaVersion")) is not int or raw["schemaVersion"] != 1:
        raise ValueError("Unsupported pack schema")
    _id(raw.get("id"), "pack ID")
    _integer(raw.get("revision"), 1, 1_000_000_000, "revision")
    chapters = [
        _object(chapter, "chapter")
        for chapter in _array(raw.get("chapters"), "chapters")
    ]
    chapter_ids = [_id(chapter.get("id"), "chapter ID") for chapter in chapters]
    for chapter in chapters:
        _string(chapter.get("title"), "chapter title")
    if len(set(chapter_ids)) != len(chapter_ids):
        raise ValueError("Duplicate chapter IDs")
    levels = [
        validate_level(level, vocabulary, playable=playable)
        for level in _array(raw.get("levels"), "levels")
    ]
    if not levels or len({level["id"] for level in levels}) != len(levels):
        raise ValueError("Empty pack or duplicate level IDs")
    if any(level["chapterId"] not in chapter_ids for level in levels):
        raise ValueError("Unknown chapter")
    if any(
        not any(level["chapterId"] == chapter for level in levels)
        for chapter in chapter_ids
    ):
        raise ValueError("Empty chapter")
    return cast(PackJSON, raw)
