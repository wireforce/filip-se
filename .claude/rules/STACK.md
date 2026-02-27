# Stack decisions (do not deviate unless asked)

## Language
- Use TypeScript for all new code.
- Prefer strict typing; avoid `any`. If you must, add a TODO and a narrow type.

## Web
- Use Next.js App Router for all routing (`app/` directory).
- Default to Server Components; add `"use client"` only when the component needs browser APIs, event handlers, or React state/hooks.
- Use React function components with TypeScript.
- Use Tailwind utility classes; extract components when patterns repeat.

## Next.js conventions
- Route files: `page.tsx` (route UI), `layout.tsx` (shared shell), `loading.tsx` (Suspense fallback), `error.tsx` (error boundary), `not-found.tsx`.
- API routes: `app/api/.../route.ts` using Web API `Request`/`Response` (not Express).
- Server Actions: co-locate with the component or put in a dedicated `actions/` file; mark with `"use server"`.
- Data fetching: `fetch()` with Next.js cache options in Server Components; use `server-only` for modules that must never run on the client.

## Tests
- Unit/integration: Vitest.
- E2E: Playwright.

## Package manager
- Use the repo's existing package manager and scripts.
- If unclear, prefer `bun` but do not change tooling unless requested.
- For new projects started from scratch, always initialize with `bun`.
- When adding a new dependency, always install the latest stable version (`bun add package@latest`). Do not guess or default to an outdated version.
- Do not manually pin versions unless the user explicitly requests it or a known incompatibility requires it.