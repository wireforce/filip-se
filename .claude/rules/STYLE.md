# Style & comments

## Comments
- Always use english (regardles of prompting language)
- Comment the "why", not the "what".
- Prefer self-explanatory naming over comments.
- For non-obvious business rules, add a short comment and (if relevant) link to the rule source in the repo.

## Code style
- Always use english for variables/function names (regardles of prompting language)
- Keep functions small and single-purpose.
- Prefer early returns over deep nesting.
- Always implement SEO/AI SEO friendly code; in Next.js this means using the Metadata API (not manual `<head>` tags) and semantic HTML in Server Components.
- Avoid cleverness; optimize for readability and maintenance.

## Refactors
- Avoid drive-by refactors.
- If you touch formatting, keep it limited to the files you changed for a reason.

## Next.js file naming
- Follow Next.js App Router file conventions exactly: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`.
- Co-locate Server Actions in an `actions.ts` (or `actions/` folder) next to the feature; mark the file or function with `"use server"`.
- Prefer named exports for all route files; default exports only where Next.js requires them (`page.tsx`, `layout.tsx`, `error.tsx`).