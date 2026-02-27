# Next.js server-side rules

## Structure
- Keep domain logic separate from transport (Route Handlers and Server Actions are the transport layer).
- Put validation/parsing at the boundary — validate the incoming `Request` or action arguments first, then pass typed data into domain functions.
- Route Handlers live at `app/api/.../route.ts` and export named HTTP method functions (`GET`, `POST`, etc.) using the Web Fetch API: accept `Request`, return `Response` (or `NextResponse`).
- Server Actions are async functions marked `"use server"`. Use them for form submissions and mutations; do not use them as a general-purpose RPC layer.
- Import server-only modules with `import "server-only"` to prevent accidental client bundling.

## Error handling
- Use typed errors or error codes for expected failures.
- Do not swallow errors; add context and rethrow or propagate.

## Performance
- Avoid unnecessary allocations in hot paths.
- Prefer streaming responses (`new Response(stream)`) for large payloads.
- Leverage Next.js fetch caching (`cache: "force-cache"`, `revalidate`, tags) instead of building a custom cache layer.
