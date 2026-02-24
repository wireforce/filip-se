# Web rules (Next.js + React + Tailwind)

## Components
- Use function components + TypeScript props.
- Keep components small; split when a component has multiple responsibilities.
- Prefer composition over giant prop bags.

## Next.js component model
- Server Components are the default. They run only on the server: no `useState`, no `useEffect`, no browser APIs.
- Add `"use client"` at the top of a file only when the component needs interactivity, browser APIs, or client-side React hooks.
- Keep `"use client"` boundaries as deep in the tree as possible (leaf components, not layout shells).
- Use `next/image` (`<Image>`) for all images — it handles lazy loading, sizing, and format optimization.
- Use `next/link` (`<Link>`) for all internal navigation — never bare `<a>` tags for internal links.
- Use `next/font` to load fonts at build time; do not import fonts via CSS `@import` at runtime.

## App Router layouts
- `layout.tsx` wraps a route segment and its children; do not put frequently re-rendered UI here.
- `page.tsx` is the leaf UI for a route; it is a Server Component by default.
- `loading.tsx` wraps the page in a Suspense boundary automatically — use it for skeleton/loading states.
- `error.tsx` must be a Client Component (`"use client"`); it is the error boundary for a segment.
- `not-found.tsx` renders when `notFound()` is called from a route.

## SEO and Metadata
- Use the Metadata API instead of manually writing `<head>` tags.
- For static metadata: export a `metadata` object from `page.tsx` or `layout.tsx`.
- For dynamic metadata: export an async `generateMetadata` function that receives route params.
- Never use `<title>` or `<meta>` directly in JSX when the Metadata API covers the use case.

## Tailwind
- Use Tailwind utility classes directly.
- Extract repeated patterns into components or small class helpers.
- Keep class lists readable (wrap lines if needed).

## Accessibility
- All interactive elements must be keyboard accessible.
- Provide labels for inputs; use aria attributes when needed.

## Motion
- Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML.
- Use Motion library for React when available.
- Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.
- Use scroll-triggering and hover states that surprise.

Remember: You are capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.