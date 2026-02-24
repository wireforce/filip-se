# Testing rules (Vitest + Next.js)

## Default
- Add/update unit tests with Vitest for new logic and bug fixes.
- Prefer testing public behavior over private implementation details.
- Configure Vitest with `environment: "node"` for Server Component/action tests and `environment: "jsdom"` for Client Component tests.

## What to test
- Happy path + key edge cases.
- Validation and error conditions.
- For regressions: add a test that fails before the fix and passes after.

## Testing Next.js specifics
- Server Components: test the async function directly (they are plain async functions that return JSX or data). Do not render them in a jsdom environment.
- Server Actions: test the exported async action function with typed arguments; assert the return value and any side effects (e.g., database calls via mocks).
- Client Components: test with `@testing-library/react` in a jsdom environment, same as standard React components.
- Route Handlers: test by calling the exported `GET`/`POST` function with a constructed `Request` object and asserting the `Response`.
- Do not mock `fetch` in Server Component unit tests — inject the data-fetching dependency instead so it can be mocked cleanly.

## Running tests
- Run the most targeted test command first (single file or suite), then full `test` if required.
- Before finishing: ensure unit tests pass, types are clean (`tsc --noEmit`), and `next lint` passes.