# Project defaults (always follow)

This repo uses:
- Language: TypeScript
- Web: Next.js (App Router) + Tailwind CSS
- Unit tests: Vitest
- E2E tests: Playwright
- Package manager: Bun

## Required behavior
- Before finishing: run `next lint`, typecheck (`tsc --noEmit`), and unit tests. Run Playwright if UI flows changed. Run `next build` if route handlers, Server Actions, or layouts changed.
- Prefer small, reviewable diffs. Avoid unrelated refactors.
- Do not change lockfiles (`bun.lockb`, `pnpm-lock.yaml`, etc.) unless dependencies changed intentionally.

## Rules
- Stack & decisions: .claude/rules/STACK.md
- Coding style & comments: .claude/rules/STYLE.md
- Next.js server patterns: .claude/rules/SERVER.md
- React/Tailwind patterns: .claude/rules/WEB.md
- Testing rules: .claude/rules/TESTING.md
- Playwright rules: .claude/rules/PLAYWRIGHT.md