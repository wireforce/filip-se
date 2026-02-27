# Security rules — OWASP Top 10 (Next.js + React + Tailwind)

## Injection (A03:2021)
- Always use parameterized queries via your ORM — never string-concatenate user input into SQL.
- In Server Actions and Route Handlers, validate all input with Zod before any database or external call.
- Never interpolate user input into `fetch()` URLs, headers, or body strings on the server side.
- Never pass unsanitized input to shell commands, file paths, or template engines.

## Broken Authentication (A07:2021)
- Re-authorize the user in every Server Action and Route Handler — do not trust that "only logged-in users can reach this UI".
- Use Next.js middleware for auth redirects, but always verify auth server-side in the action/handler itself.
- Use constant-time comparison (`crypto.timingSafeEqual`) when verifying tokens or hashes.
- Never store plaintext passwords — use bcrypt or argon2 with appropriate cost factors.
- Set secure cookie flags: `httpOnly`, `secure`, `sameSite: "strict"`.

## Sensitive Data Exposure (A02:2021)
- Use `import "server-only"` to prevent server modules (containing secrets, DB access) from leaking into client bundles.
- Never expose API keys, database URLs, or tokens in Client Components — only access secrets in Server Components, Server Actions, or Route Handlers.
- Use `.env.local` for secrets; never commit `.env` files with real credentials.
- Strip sensitive fields from API responses and Server Action return values before they reach the client.

## XSS (A03:2021)
- Never use `dangerouslySetInnerHTML` with unsanitized data — sanitize with DOMPurify if rendering user-provided HTML is unavoidable.
- Rely on React's built-in JSX escaping for all dynamic content.
- Configure `Content-Security-Policy` headers in `next.config.js` via the `headers()` function.
- Never construct HTML strings from user input in Route Handlers — use `c.json()` or a templating engine with auto-escaping.

## CSRF (A01:2021)
- Next.js Server Actions have built-in CSRF protection (origin validation) — do not disable it.
- For custom Route Handlers that accept form POSTs from browsers, validate the `Origin` header manually.
- Set `SameSite=Strict` (or `Lax` with justification) on all cookies.
- API-only endpoints using `Authorization` header tokens are inherently CSRF-safe.

## Security Misconfiguration (A05:2021)
- Configure security headers in `next.config.js` using `headers()`: `X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security`, `Content-Security-Policy`.
- Disable `x-powered-by` in `next.config.js`: `poweredByHeader: false`.
- Never expose stack traces or internal error details in production responses — use `error.tsx` boundaries with safe messages.
- Remove or gate debug/development endpoints before deploy.

## Insecure Dependencies (A06:2021)
- Run `bun audit` (or `npm audit`) regularly and before releases.
- Pin dependency versions via lockfile — commit the lockfile.
- Review new dependencies before adding: check maintenance status, download count, and known vulnerabilities.
- Prefer well-maintained packages with active security response over abandoned alternatives.

## Logging & Monitoring (A09:2021)
- Log authentication failures, access control denials, and input validation failures in Route Handlers and Server Actions.
- Never log secrets, tokens, passwords, or PII — redact before logging.
- Never send stack traces to the client in production — log server-side, return safe error messages.
- Use structured logging (JSON) with a request ID for traceability.
