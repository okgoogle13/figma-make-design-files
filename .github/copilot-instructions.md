# GitHub Copilot Instructions – CareerCopilot

These are global instructions for GitHub Copilot (and any connected agents) when working in this repository.

## 1. Preferred Model

- When a model picker is available (GitHub Copilot / Copilot Chat / Copilot Agent):
  - Prefer **Gemini 3.1 Pro** (or `gemini-3.1-pro-preview`) for:
    - Non‑trivial coding tasks
    - Planning and refactors
    - Documentation and code review
- Use lighter models only for trivial edits (typos, simple renames, comment tweaks).

## 2. Project Context

- Repository: `okgoogle13/careercopilot`
- Language stack:
  - Backend: Python
  - Frontend: React + TypeScript
- Design system:
  - Kerala Rage design system
  - Material Design 3
  - Design tokens should align with DTCG 2025.10 format.

## 3. Safe Git Usage

To avoid index/lock corruption:

- In this primary working copy:
  - You MAY use: `git status`, `git diff`, `git add`, `git commit`, `git pull`, `git push` on a clean repo.
  - Do NOT suggest:
    - Deleting or editing `.git/index` or `.git/index.lock`
    - Running `git fsck`, `git gc`, `git reset --hard`, or manual `.git` surgery here.

- For ANY risky or repair operations, always assume there is a separate scrub directory:
  - Root: `/Users/okgoogle13/Desktop/git_scrub`
  - Pattern for operations:
    ```bash
    mkdir -p /Users/okgoogle13/Desktop/git_scrub
    cd /Users/okgoogle13/Desktop/git_scrub

    git clone git@github.com:okgoogle13/careercopilot.git
    cd careercopilot

    # Only here you may propose:
    # git fsck, git gc, repair/reset commands, etc.
    ```
  - Clearly label such instructions as "scrub / recovery workflow".

## 4. How to Propose Changes

When suggesting non‑trivial changes:

1. **Explain the plan briefly first** (1–3 bullets).
2. Provide concrete code diffs or full file replacements.
3. Include any commands that should be run, for example:
   - `npm test`
   - `npm run lint`
   - `pytest`
4. If a change affects multiple files, list all affected paths at the top.

## 5. Design System & Tokens

- Do NOT hard‑code colors, typography, or spacing where tokens exist.
- Prefer imports from the design‑system/token modules (Kerala Rage / DTCG), for example:
  ```ts
  import { tokens } from '@/design-system/tokens';
  ```
- When adding new visual variants:
  - Propose corresponding token additions.
  - Keep dark‑mode behaviour explicit.

## 6. Accessibility & Quality

- Aim for WCAG 2.1 AA:
  - Sufficient color contrast
  - Keyboard navigable UI
- Before finalising a suggestion, check:
  - The code type‑checks (TypeScript strict where applicable).
  - Tests can be added or updated if behaviour changes.
- When in doubt, favour:
  - Clear, simple code over clever abstractions.
  - Small, composable changes over large, risky refactors.

## 7. Multi‑Agent Collaboration

Assume other tools will be involved:

- **Claude Code (IDE)** for design‑critical reviews and custom skills.
- **Codex CLI** for repetitive / boilerplate work.
- Your role (as Copilot with Gemini 3.1 Pro):
  - Implement issues and PRs using the above constraints.
  - Keep changes well‑scoped and testable.
