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
    cells = [cell for p in best for cell in p.cells()]
    minimum_row = min(r for r, _, _ in cells)
    minimum_column = min(c for _, c, _ in cells)
    normalized = [
        Placement(p.word, p.row - minimum_row, p.column - minimum_column, p.direction)
        for p in best
    ]
    letters = derive_letters([p.word for p in best])
    rng.shuffle(letters)
    targets = {p.word for p in best}
    bonuses = sorted(
        word for word in words if word not in targets and can_form_word(word, letters)
    )
    score = min(
        100, len(letters) * 6 + len(best) * 4 + (len(letters) - len(set(letters))) * 2
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
        for index, p in enumerate(normalized)
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
            "rows": max(r for p in normalized for r, _, _ in p.cells()) + 1,
            "columns": max(c for p in normalized for _, c, _ in p.cells()) + 1,
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
