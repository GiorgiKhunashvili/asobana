export interface LetterTile {
  readonly id: string;
  readonly letter: string;
}
export interface CrosswordWord {
  readonly id: string;
  readonly answer: string;
  readonly acceptedAnswers: readonly string[];
  readonly row: number;
  readonly column: number;
  readonly direction: 'across' | 'down';
}
export interface Level {
  readonly schemaVersion: 1;
  readonly id: string;
  readonly chapterId: string;
  readonly title: string;
  readonly tiles: readonly LetterTile[];
  readonly grid: { readonly rows: number; readonly columns: number };
  readonly words: readonly CrosswordWord[];
  readonly bonusWords: readonly string[];
  readonly difficulty: {
    readonly tier: 'easy' | 'medium' | 'hard';
    readonly score: number;
  };
  readonly hints: { readonly allowCell: boolean; readonly allowWord: boolean };
  readonly reviewStatus: 'prototype-reference-checked' | 'generated-draft';
}
export interface Chapter {
  readonly id: string;
  readonly title: string;
}
export interface LevelPack {
  readonly schemaVersion: 1;
  readonly id: string;
  readonly revision: number;
  readonly chapters: readonly Chapter[];
  readonly levels: readonly Level[];
}
export interface LevelProgress {
  readonly solvedWordIds: readonly string[];
  readonly revealedCellIds: readonly string[];
  readonly bonusWords: readonly string[];
  readonly hintsUsed: number;
  readonly completed: boolean;
}
export interface Settings {
  readonly sound: boolean;
  readonly haptics: boolean;
}
export interface GameState {
  readonly schemaVersion: 1;
  readonly packId: string;
  readonly contentRevision: number;
  readonly currentLevelId: string;
  readonly coins: number;
  readonly progress: Readonly<Record<string, LevelProgress>>;
  readonly settings: Settings;
}
export interface Economy {
  readonly initialCoins: number;
  readonly completionReward: number;
  readonly bonusReward: number;
  readonly cellHintCost: number;
  readonly wordHintCost: number;
}
export type GameCommand =
  | { readonly type: 'open-level'; readonly levelId: string }
  | {
      readonly type: 'submit';
      readonly levelId: string;
      readonly tileIds: readonly string[];
    }
  | {
      readonly type: 'hint';
      readonly levelId: string;
      readonly kind: 'cell' | 'word';
    }
  | { readonly type: 'settings'; readonly settings: Settings };
export type RejectionReason =
  | 'invalid-word'
  | 'duplicate-word'
  | 'invalid-selection'
  | 'level-locked'
  | 'level-complete'
  | 'wrong-level'
  | 'insufficient-coins'
  | 'hint-unavailable';
export type GameEvent =
  | {
      readonly type: 'word-found';
      readonly levelId: string;
      readonly wordId: string;
      readonly word: string;
    }
  | {
      readonly type: 'word-rejected';
      readonly reason: RejectionReason;
      readonly word: string;
    }
  | {
      readonly type: 'cells-revealed';
      readonly levelId: string;
      readonly cellIds: readonly string[];
      readonly source: 'word' | 'hint';
    }
  | {
      readonly type: 'bonus-found';
      readonly word: string;
      readonly reward: number;
    }
  | {
      readonly type: 'hint-used';
      readonly kind: 'cell' | 'word';
      readonly cost: number;
    }
  | {
      readonly type: 'level-completed';
      readonly levelId: string;
      readonly reward: number;
      readonly nextLevelId: string | null;
    }
  | { readonly type: 'level-opened'; readonly levelId: string }
  | { readonly type: 'settings-changed' };
export interface Transition {
  readonly state: GameState;
  readonly events: readonly GameEvent[];
}
/** Hidden answers are deliberately absent from UI-facing cells. */
export interface CrosswordCell {
  readonly id: string;
  readonly row: number;
  readonly column: number;
  readonly wordIds: readonly string[];
  readonly status: 'locked' | 'revealed';
  readonly letter: string | null;
}
export interface GameplayView {
  readonly levelId: string;
  readonly title: string;
  readonly grid: Level['grid'];
  readonly cells: readonly CrosswordCell[];
  readonly tiles: readonly LetterTile[];
  readonly coins: number;
  readonly foundWords: number;
  readonly totalWords: number;
  readonly bonusCount: number;
  readonly hintsUsed: number;
  readonly completed: boolean;
  readonly nextLevelId: string | null;
  readonly canUseCellHint: boolean;
  readonly canUseWordHint: boolean;
  readonly cellHintCost: number;
  readonly wordHintCost: number;
}
