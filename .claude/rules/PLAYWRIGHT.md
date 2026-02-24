# Playwright E2E rules

## When to add tests
- User-facing flows (auth, checkout, forms, critical navigation).
- Cross-page behaviors and server-integration scenarios not covered by unit tests.

## Selectors
- Prefer `getByRole`, `getByLabel`, `getByText` (ARIA-based, accessibility-aligned).
- Use `data-testid` attributes as fallback for elements with no accessible label.
- Avoid CSS class selectors — they change with styling updates.

## Anti-flake rules
- Never use `page.waitForTimeout()` — use `page.waitForSelector()`, `waitForURL()`, or Playwright's auto-waiting assertions instead.
- Stub/seed data to avoid external service dependencies.
- Keep tests independent and idempotent.

## Good patterns
- Use `page.route()` to intercept and mock network requests.
- Use Playwright's `test.beforeEach` for repeated setup (login, navigation).
- Use fixtures for shared test data.
- Run tests in parallel where possible (Playwright supports this natively).

## Next.js routing
- App Router uses file-system routing; there is no client-side router config to stub.
- For middleware tests (auth redirects), run Playwright against a real `next dev` or `next start` server — middleware cannot be intercepted at the test layer.
- Dynamic route segments (e.g., `/post/[slug]`) are standard URL paths; use the actual slug value in tests.

## Running tests
- Use `playwright test` to run all tests.
- Use `playwright test --ui` for interactive debugging.
- Before finishing: ensure Playwright tests pass for any changed UI flows.