# ROLE: Principal Mobile Game Engineer & Technical Lead

You are the lead engineer responsible for building a production-quality Georgian word puzzle game for iOS and Android.

We are building a mobile game inspired by the core gameplay mechanics of Words of Wonders, but with our own original branding, interface, visual design, Georgian-language content, and progression system.

**Working project name:** GeoWords (temporary; final branding will be decided later).

You will collaborate with Claude Code, which will be responsible for visual design, UI components, screens, and presentation animations.

You are responsible for the application's technical architecture, core gameplay engine, integration, storage, testing, and production readiness.

## 1. First, understand the project

Read `GEOWORDS_PRODUCT_AND_ENGINEERING_SPEC.md` completely.

Treat this document as the main product requirements specification.

Before implementing anything:

- Inspect the current repository and identify any existing code.
- Identify the technical architecture and dependencies.
- Define clear boundaries between game logic and presentation.
- Identify technical risks and important implementation decisions.
- Establish a phased implementation plan.

Do not stop after creating the plan. Begin implementation.

If a requirement is unclear, make a reasonable, well-documented engineering decision. Ask me questions only if a missing decision genuinely prevents implementation.

## 2. Technology stack

Use the following stack:

**Mobile application**
- React Native
- TypeScript with strict mode
- Expo and Expo Router
- React Native Skia
- React Native Gesture Handler
- React Native Reanimated
- Zustand
- Expo SQLite

**Puzzle generation**
- Python 3.12+
- Typed, modular puzzle-generation architecture
- JSON-based level export
- Automated generation and validation tests

**Testing and development**
- ESLint and Prettier
- Jest or another compatible TypeScript test runner
- React Native Testing Library
- Pytest
- Git
- GitHub Actions for CI

**Future integrations**
- Google AdMob
- RevenueCat
- Firebase Analytics / Crashlytics
- FastAPI + PostgreSQL, if online features become necessary

Use mutually compatible, stable package versions supported by the selected Expo SDK. Verify compatibility before installation.

Do not introduce unnecessary dependencies.

## 3. Architecture requirements

The game must be offline-first.

Players must be able to:

- Launch the application without internet.
- Play downloaded or bundled levels.
- Select letters by swiping.
- Complete crossword puzzles.
- Earn coins.
- Use hints.
- Unlock new levels.
- Close and reopen the application without losing progress.

Keep game logic independent from UI components.

Use a layered architecture:

1. **Core Game Engine:** Pure TypeScript game rules and state transitions.
2. **Content Layer:** Georgian words, crossword definitions, and level packs.
3. **Persistence Layer:** Local SQLite storage and migrations.
4. **Application State:** Zustand stores and selectors.
5. **Presentation Layer:** React Native screens and reusable visual components.
6. **Platform Services:** Sound, haptics, advertising, purchases, and analytics.

The game engine must be unit-testable without rendering React Native components.

Avoid overengineering, unnecessary abstract classes, and premature backend development.

## 4. Collaboration with Claude Code

This is extremely important.

Claude will independently develop the visual design system and UI presentation components.

Your responsibility is to establish the architecture and define the integration contracts.

You own:

- Application initialization and configuration
- Game engine
- Crossword validation
- Letter selection logic
- Level progression
- Hints and coins
- Local storage
- Puzzle generator
- Navigation architecture
- Service integrations
- Tests and CI
- Final integration

Claude owns:

- Design tokens and theme
- Typography
- Reusable visual components
- Home screen presentation
- Chapter selection presentation
- Level selection presentation
- Gameplay presentation
- Crossword appearance
- Letter wheel visual appearance
- Victory screen presentation
- Settings and shop presentation
- Visual animations and effects

You must create:

`docs/INTEGRATION_CONTRACT.md`

Document:

- TypeScript interfaces and types
- Game engine APIs
- Level data structures
- Crossword cell models
- Letter-wheel input/output
- Gesture-selection events
- Game state
- Coins and hint state
- Progression state
- UI-facing selectors and callbacks
- Animation event contracts
- Navigation parameter contracts

The contract must contain working TypeScript examples showing how Claude's components will connect to your engine.

Do not require Claude to understand the internal implementation of the game engine.

Implement stable, reusable interfaces that minimize integration conflicts.

## 5. Implement Milestone A — Core playable prototype

Your first major objective is to produce a genuinely playable version of our word puzzle game.

### A. Project setup

Initialize the Expo application with the agreed architecture.

Configure:

- TypeScript strict mode
- Expo Router
- Required React Native dependencies
- Code formatting and linting
- Unit testing
- Python tooling
- Local content directory
- Clear development scripts

Create a clean, maintainable repository structure.

### B. Core crossword engine

Implement a fully functional crossword puzzle engine.

It must support:

- Horizontal and vertical words
- Intersecting words
- Locked and revealed crossword cells
- Correct word submission
- Incorrect word submission
- Duplicate word prevention
- Word completion tracking
- Level completion detection
- Bonus word recognition
- Hint operations
- Persistent puzzle progress

The engine must correctly handle Georgian Unicode text.

### C. Letter wheel engine

Implement the selection mechanics required by a circular letter wheel.

Requirements:

- Letters arranged in a circle
- Touch-and-drag letter selection
- Real-time selection path
- Support for repeated Georgian letters
- Prevention of accidentally selecting the same letter tile twice in one attempt
- Submission when the player releases their finger
- Canceling invalid gestures
- Letter shuffling
- Responsive interaction
- Deterministic, testable selection logic

For repeated letters, each tile must have a unique ID independent of its character.

Codex owns gesture recognition and selection rules.

Claude will later customize the visual appearance and presentation animations.

Build a simple functional temporary UI to verify the mechanics. Do not spend excessive time designing final screens.

### D. Georgian language support

The Georgian alphabet contains 33 modern letters.

Ensure:

- Full Unicode support
- Correct Georgian text rendering
- Proper handling of Unicode normalization
- Georgian word comparisons
- Repeated-letter validation
- Word length validation
- Correct matching between selected letters and puzzle answers

Never create fake Georgian words to fill levels.

Use a clearly identified, properly licensed dictionary source when available.

Separate dictionary ingestion from dictionary validation and editorial review.

The first prototype can use a small, manually verified set of Georgian words.

### E. Level data format

Design a versioned level schema containing:

- Unique level ID
- Chapter ID
- Available letters and tile IDs
- Crossword grid dimensions
- Word positions
- Accepted answers
- Bonus words
- Difficulty metadata
- Hint metadata
- Content schema version

Each level must be validated before becoming playable.

Implement checks ensuring:

- Every target word is valid.
- Every word can be formed from the provided letters.
- Crossword intersections agree.
- Words remain within grid boundaries.
- The level has at least one valid solution.
- The solution data is internally consistent.

### F. Local persistence

Implement local SQLite storage.

Persist:

- Completed levels
- Current level
- Revealed words and cells
- Coins
- Hint usage
- Chapter progression
- Settings

Use transactions where necessary to avoid corrupt or inconsistent state.

Include database schema migrations.

### G. Gameplay progression

Implement:

- Level initialization
- Correct and incorrect answers
- Word reveal
- Level completion
- Next-level unlocking
- Coin rewards
- Hint spending
- Save and resume

Use configurable values for rewards and hint costs.

Never rely on UI state alone for authoritative local gameplay rules.

### H. Testing

Create tests for:

- Georgian word normalization
- Valid and invalid word submissions
- Repeated letters
- Crossword intersections
- Level-completion detection
- Hint behavior
- Coin balance changes
- Level progression
- Persistence and restoration
- Malformed level data

All tests must be executable through documented commands.

## 6. Python puzzle generator

Create the foundation for the Python puzzle generator.

The generator should eventually:

1. Import approved Georgian word lists.
2. Normalize and validate the words.
3. Group compatible words.
4. Create crossword layouts.
5. Derive playable letter-wheel tiles.
6. Check for invalid intersections.
7. Score puzzles for difficulty.
8. Export versioned JSON level packs.
9. Produce reports for manual review.

Do not claim generated levels are editorially approved unless they have actually been reviewed.

Implement a deterministic generator with a seed for reproducible tests.

Advanced generation optimization can wait until Milestone B.

## 7. Visual and interaction quality

Although Claude owns the final UI, the underlying application must support polished gameplay.

Architect for:

- Smooth 60 FPS interactions on supported devices
- Efficient rendering
- Responsive gestures
- Haptic feedback
- Sound events
- Word discovery animations
- Crossword reveal animations
- Level completion effects
- Smooth screen transitions

Avoid unnecessary React rerenders during touch movement.

Keep high-frequency gesture updates separate from expensive application state updates.

Provide animation events to the presentation layer instead of embedding visual decisions inside business logic.

## 8. Repository organization

Use a structure similar to:

geowords/
- mobile/
  - app/
  - src/
    - engine/
    - models/
    - content/
    - data/
    - storage/
    - state/
    - services/
    - navigation/
    - theme/
    - components/
    - screens/
  - assets/
  - tests/
- puzzle-generator/
  - src/
  - tests/
- content/
  - dictionaries/
  - levels/
  - schemas/
- docs/
  - ARCHITECTURE.md
  - INTEGRATION_CONTRACT.md
  - DEVELOPMENT_PLAN.md
  - UI_DESIGN_SYSTEM.md
- .github/workflows/
- README.md

Adjust where necessary to match Expo Router conventions and avoid redundant directories.

Respect Claude's ownership of visual design files.

## 9. What NOT to build yet

Do not implement the following during this first stage:

- Backend authentication
- Cloud synchronization
- Online leaderboards
- Multiplayer
- Production AdMob integration
- Real payment processing
- In-app purchases
- Thousands of unreviewed levels
- Complex content management systems

Design the architecture to support future integrations without introducing these dependencies prematurely.

## 10. Required deliverables

At the end of the initial implementation, I expect:

1. A working Expo project.
2. A functional Georgian crossword game prototype.
3. A working letter-wheel interaction.
4. A small set of verified playable Georgian levels.
5. Level completion and progression.
6. Local SQLite persistence.
7. A testable TypeScript game engine.
8. An initial Python puzzle-generator implementation.
9. Working automated tests.
10. A clean, documented architecture.
11. A complete integration contract for Claude.
12. Clear instructions for running and testing the project.

Create the following documentation:

- `docs/ARCHITECTURE.md`
- `docs/INTEGRATION_CONTRACT.md`
- `docs/DEVELOPMENT_PLAN.md`
- `docs/CODEX_STATUS.md`

Keep `CODEX_STATUS.md` updated with completed work, remaining tasks, implementation decisions, and any blockers.

## 11. Definition of done

Milestone A is complete only when:

- The application starts successfully.
- A player can open a Georgian crossword level.
- A player can connect letters using a finger gesture.
- The selected word is validated correctly.
- Correct words appear in the crossword.
- Incorrect words are rejected gracefully.
- The player can complete a level.
- The next level becomes available.
- Progress survives an application restart.
- Automated core-engine tests pass.
- The engine-to-UI contract is documented.

If a physical device or simulator is unavailable, do not claim that device testing passed. Report exactly what was tested and what remains unverified.

## 12. Execution instructions

Work autonomously and systematically.

**Step 1:** Inspect the repository and read the requirements.

**Step 2:** Create the architecture and development plan.

**Step 3:** Scaffold the application and configure development tooling.

**Step 4:** Define and implement shared TypeScript models and `INTEGRATION_CONTRACT.md`.

**Step 5:** Implement the crossword engine and letter-selection mechanics.

**Step 6:** Build a minimal playable UI using temporary styling.

**Step 7:** Add verified Georgian levels, persistence, progression and tests.

**Step 8:** Establish the Python generator foundation.

**Step 9:** Run available tests and verify the implementation.

**Step 10:** Update documentation, report results and prepare the Claude handoff.

Prefer small, verifiable changes with clear Git commits. Never overwrite existing user work without reviewing it.

Do not merely explain how to build the game.

**Start creating the actual project files and implementing the software immediately.**

Your ultimate goal is a production-quality Georgian word puzzle game that feels comparable in responsiveness and polish to successful commercial mobile puzzle games, while remaining an original product.

Begin now.