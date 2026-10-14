# Presentation handoff placeholder

Claude owns the final design system, theme, typography, reusable components,
screen appearance and presentation animations. Final branding is undecided.

The current `PrototypePrimitives.tsx`, `CrosswordBoard.tsx` and `LetterWheel.tsx`
are functional temporary views for verification. They do not establish final
product art direction. Keep the Codex-owned `useLetterWheel.ts` input adapter and
use the interfaces in `INTEGRATION_CONTRACT.md` when replacing them.

Noto Sans Georgian is bundled under OFL 1.1 for offline coverage. Future font choices
must preserve all 33 modern Georgian letters and offline rendering. Keep touch
hit geometry independent of tile decoration, minimum touch target size, clear
selected/revealed/locked states, accessible tap mode and save-failure feedback.
