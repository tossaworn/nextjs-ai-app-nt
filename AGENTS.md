<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# nextjs-ai-app-starter

## Stack

- **Next.js 16.2.7** — read `node_modules/next/dist/docs/` before coding (breaking changes).
- **Tailwind v4** — no `tailwind.config.*`; configure via `@theme inline` in CSS. PostCSS plugin: `@tailwindcss/postcss`.
- **Prisma v7** — Rust-based engine (`provider = "prisma-client"`), MariaDB adapter (`@prisma/adapter-mariadb`). Config in `prisma.config.ts` (uses `defineConfig`). Generated client: `generated/prisma/client` (outside `node_modules`). After schema changes: `npx prisma generate`.
- **Auth** — [`better-auth`](https://www.better-auth.com/) (not NextAuth.js). Catch-all API route at `app/api/auth/[...all]/route.ts`. Server session: `auth.api.getSession({ headers })`. Client: `authClient` from `better-auth/react`. Config: `autoSignIn: false`, `minPasswordLength: 8`.
- **State** — Zustand + persist middleware (cart store, localStorage key `"skill-cart"`). Hydrate in `useEffect` to avoid SSR mismatch.
- **UI** — shadcn/ui (Radix style `"radix-luma"`), icon library `remixicon`. Components in `src/components/ui/`. `cn()` utility in `src/lib/utils.ts`.
- **No test framework** configured. No CI workflows.

## Routes

| Group | URL | Notes |
|-------|-----|-------|
| `(auth)/` | `/login`, `/signup` | Separate root layout with own `<html>` |
| `(front)/` | `/`, `/about`, `/course`, `/cart`, `/product` | Separate root layout with shared `<Navbar />` |
| `api/auth/[...all]` | `/api/auth/*` | Proxies all better-auth endpoints |

Two route groups = two root layouts. Auth and front layouts each render their own `<html>` + `<body>`.

## Commands

```
npm run dev       # next dev
npm run build     # next build
npm run start     # next start
npm run lint      # eslint
npx prisma generate  # after schema changes
```

## Quirks

- Dynamic routes must call `await connection()` from `next/server` (e.g., `product/page.tsx`) to mark as dynamic.
- `next.config.ts` uses `cacheComponents: true` (Next.js 16+ specific).
- Prisma client is generated to `../../generated/prisma/client`. Import path: `../../generated/prisma/client`.
- No middleware file — all pages public. Auth guard is UI-level (conditional rendering in Navbar).
- Docker build: multi-stage `node:24-alpine`, runs `npx prisma generate` before `npm run build`, uses `.next/standalone` output.
- DB setup docs in `docs/` (MariaDB Docker install + SQL scripts for schema/seed data).
- Cart Zustand persist can cause SSR hydration mismatches — components that read store mount with `null` until client hydration completes.
