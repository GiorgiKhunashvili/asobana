import math
import random
from collections import Counter
from typing import Literal

from .models import GenerationResult, LevelJSON, Placement, WordJSON
from .validation import valid_layout, validate_level
from .vocabulary import can_form_word, is_valid_word, normalize_word


class GenerationError(ValueError):
    pass


def derive_letters(words: list[str]) -> list[str]:
    counts: Counter[str] = Counter()
    for word in words:
        counts |= Counter(word)
    return [letter for letter in sorted(counts) for _ in range(counts[letter])]


def _candidates(word: str, placed: list[Placement]) -> list[Placement]:
    candidates: set[Placement] = set()
    for existing in placed:
        direction: Literal["across", "down"] = (
            "down" if existing.direction == "across" else "across"
        )
        for row, column, letter in existing.cells():
            for index, candidate_letter in enumerate(word):
                if letter == candidate_letter:
                    candidates.add(
                        Placement(
                            word,
                            row - (index if direction == "down" else 0),
                            column - (index if direction == "across" else 0),
                            direction,
                        )
                    )
    return sorted(candidates, key=lambda p: (p.row, p.column, p.direction, p.word))


def _within_bounds(placements: list[Placement]) -> bool:
    cells = [cell for p in placements for cell in p.cells()]
    rows = [r for r, _, _ in cells]
    columns = [c for _, c, _ in cells]
    return max(rows) - min(rows) < 20 and max(columns) - min(columns) < 20


def generate_level(
    words: list[str],
    *,
    seed: int,
    level_id: str = "draft-001",
    chapter_id: str = "draft",
    max_words: int = 5,
    max_tiles: int = 8,
) -> GenerationResult:
    """Bounded seeded greedy search over verified words; exports remain drafts."""
    if not 2 <= max_tiles <= 8 or not 2 <= max_words <= 30:
        raise GenerationError("Invalid generation limits")
    if any(not is_valid_word(word) or normalize_word(word) != word for word in words):
        raise GenerationError("Input must be canonical verified Georgian vocabulary")
    if len(set(words)) != len(words):
        raise GenerationError("Duplicate generator input")
    pool = sorted(word for word in words if len(word) <= max_tiles)
    if len(pool) < 2:
        raise GenerationError("Need at least two compatible words")
    rng = random.Random(seed)
    # Reproducibility is independent of input ordering and hash randomization.
    rng.shuffle(pool)
    best: list[Placement] = []
    for first in pool:
        placed = [Placement(first, 0, 0, "across")]
        remaining = [word for word in pool if word != first]
        for _ in range(max_words - 1):
            found = False
            for word in remaining:
                if len(derive_letters([p.word for p in placed] + [word])) > max_tiles:
                    continue
                candidates = _candidates(word, placed)
                rng.shuffle(candidates)
                for candidate in candidates:
                    proposed = placed + [candidate]
                    if _within_bounds(proposed) and valid_layout(proposed):
                        placed.append(candidate)
                        remaining.remove(word)
                        found = True
                        break
                if found:
                    break
            if not found:
                break
        if len(placed) > len(best):
            best = placed
        if len(best) == max_words:
            break
    if len(best) < 2:
        raise GenerationError("No connected two-word crossword within wheel limits")
    return _level_from_layout(
        _normalized(best),
        words,
        rng=rng,
        seed=seed,
        level_id=level_id,
        chapter_id=chapter_id,
    )


def _normalized(placements: list[Placement]) -> list[Placement]:
    cells = [cell for p in placements for cell in p.cells()]
    minimum_row = min(r for r, _, _ in cells)
    minimum_column = min(c for _, c, _ in cells)
    return [
        Placement(p.word, p.row - minimum_row, p.column - minimum_column, p.direction)
        for p in placements
    ]


def _level_from_layout(
    placements: list[Placement],
    words: list[str],
    *,
    rng: random.Random,
    seed: int,
    level_id: str,
    chapter_id: str,
) -> GenerationResult:
    """Draft level for an already normalized layout; word IDs follow its order."""
    letters = derive_letters([p.word for p in placements])
    rng.shuffle(letters)
    targets = {p.word for p in placements}
    bonuses = sorted(
        word for word in words if word not in targets and can_form_word(word, letters)
    )
    score = min(
        100,
        len(letters) * 6 + len(placements) * 4 + (len(letters) - len(set(letters))) * 2,
    )
    tier: Literal["easy", "medium", "hard"] = (
        "easy" if score < 45 else "medium" if score < 70 else "hard"
    )
    word_json: list[WordJSON] = [
        {
            "id": f"word-{index + 1}",
            "answer": p.word,
            "acceptedAnswers": [p.word],
            "row": p.row,
            "column": p.column,
            "direction": p.direction,
        }
        for index, p in enumerate(placements)
    ]
    level: LevelJSON = {
        "schemaVersion": 1,
        "id": level_id,
        "chapterId": chapter_id,
        "title": "სარედაქციო მონახაზი",
        "tiles": [
            {"id": f"tile-{index + 1}", "letter": letter}
            for index, letter in enumerate(letters)
        ],
        "grid": {
            "rows": max(r for p in placements for r, _, _ in p.cells()) + 1,
            "columns": max(c for p in placements for _, c, _ in p.cells()) + 1,
        },
        "words": word_json,
        "bonusWords": bonuses,
        "difficulty": {"tier": tier, "score": score},
        "hints": {"allowCell": True, "allowWord": True},
        "reviewStatus": "generated-draft",
    }
    validate_level(level, set(words))
    return GenerationResult(
        level, tuple(sorted(set(words) - targets - set(bonuses))), seed
    )


BOUNDED_LAYOUT = "bounded-v1"
BOUNDED_NODE_BUDGET = 20_000


def _box(cells: dict[tuple[int, int], str]) -> tuple[int, int, int, int]:
    rows = [r for r, _ in cells]
    columns = [c for _, c in cells]
    return min(rows), max(rows), min(columns), max(columns)


def bounded_layout(
    words: list[str],
    *,
    seed: int,
    max_rows: int,
    max_columns: int,
    min_columns: int,
    min_density: float = 0.35,
    max_density: float = 0.65,
    node_budget: int = BOUNDED_NODE_BUDGET,
) -> list[Placement] | None:
    """Place every word inside the board limits, or return None.

    Unlike the greedy search, a partial layout that leaves the row/column box or
    fails ``valid_layout`` is pruned and the search backtracks to the next
    crossing instead of discarding the board. Visited partial layouts are
    memoized, so within ``node_budget`` the search is complete for layouts built
    one crossing word at a time. A finished layout must also be wide
    (rows <= floor(columns / 1.15)) and within the density limits. The result
    depends only on the set of words, the seed and the limits.
    """
    rng = random.Random(seed)
    order = sorted(words)
    rng.shuffle(order)
    # Long words are the hardest to fit, so they go first; ties keep seeded order.
    order.sort(key=len, reverse=True)
    rank = {word: index for index, word in enumerate(order)}
    max_cells = math.floor(max_density * max_rows * max_columns)
    seen: set[frozenset[Placement]] = set()
    stack: list[tuple[tuple[Placement, ...], dict[tuple[int, int], str]]] = []
    for direction in ("down", "across"):
        first = Placement(order[0], 0, 0, direction)
        stack.append(((first,), {(r, c): letter for r, c, letter in first.cells()}))
    nodes = 0
    while stack:
        state, cells = stack.pop()
        key = frozenset(state)
        if key in seen:
            continue
        seen.add(key)
        nodes += 1
        if nodes > node_budget:
            return None
        if len(state) == len(order):
            top, bottom, left, right = _box(cells)
            rows, columns = bottom - top + 1, right - left + 1
            if (
                min_columns <= columns <= max_columns
                and rows <= max_rows
                and rows <= math.floor(columns / 1.15)
                and min_density <= len(cells) / (rows * columns) <= max_density
            ):
                return list(state)
            continue
        placed = {p.word for p in state}
        children: list[tuple[tuple[Placement, ...], dict[tuple[int, int], str]]] = []
        for word in sorted(set(order) - placed, key=rank.__getitem__):
            for candidate in _candidates(word, list(state)):
                merged = dict(cells)
                conflict = False
                for r, c, letter in candidate.cells():
                    old = merged.get((r, c))
                    if old is not None and old != letter:
                        conflict = True
                        break
                    merged[(r, c)] = letter
                if conflict or len(merged) > max_cells:
                    continue
                top, bottom, left, right = _box(merged)
                if bottom - top + 1 > max_rows or right - left + 1 > max_columns:
                    continue
                proposed = (*state, candidate)
                if frozenset(proposed) in seen or not valid_layout(list(proposed)):
                    continue
                children.append((proposed, merged))
        stack.extend(reversed(children))
    return None


def generate_bounded_level(
    words: list[str],
    *,
    seed: int,
    max_rows: int,
    max_columns: int,
    min_columns: int,
    level_id: str = "draft-001",
    chapter_id: str = "draft",
    max_tiles: int = 8,
) -> GenerationResult:
    """Like ``generate_level``, but places every word inside the board limits."""
    if not 2 <= max_tiles <= 8 or not 2 <= len(words) <= 30:
        raise GenerationError("Invalid generation limits")
    if any(not is_valid_word(word) or normalize_word(word) != word for word in words):
        raise GenerationError("Input must be canonical verified Georgian vocabulary")
    if len(set(words)) != len(words):
        raise GenerationError("Duplicate generator input")
    if len(derive_letters(words)) > max_tiles:
        raise GenerationError("Words need more tiles than the wheel allows")
    layout = bounded_layout(
        words,
        seed=seed,
        max_rows=max_rows,
        max_columns=max_columns,
        min_columns=min_columns,
    )
    if layout is None:
        raise GenerationError("No connected crossword within the board limits")
    # Reading order keeps word IDs independent of the search path.
    placements = sorted(
        _normalized(layout), key=lambda p: (p.row, p.column, p.direction, p.word)
    )
    return _level_from_layout(
        placements,
        words,
        rng=random.Random(seed),
        seed=seed,
        level_id=level_id,
        chapter_id=chapter_id,
    )
