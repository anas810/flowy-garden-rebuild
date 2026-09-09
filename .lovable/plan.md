# Rebuild "flowy-garden-gems" exactly as it is on GitHub

The GitHub project is an interactive one-page explainer of "The Central Bank — Standard Reserve", with a switch between expansion and contraction states and three visual panels (bank canvas, issuance rate, fee routing).

Good news: it is built on the exact same setup as this project, so it can be copied over faithfully with no rewriting or adaptation.

## What will happen

1. Copy the full source of the GitHub project into this project, replacing the current blank starter page.
2. Bring over the three interactive panels, the styling/theme, and the page's title and description text — unchanged.
3. Install the handful of extra packages the project uses.
4. Check the page loads with no errors, and view it to confirm it matches the original.

## Notes

- Nothing will be redesigned, renamed, or "improved" — this is a one-to-one copy.
- The project has no login, no database, and no external services, so nothing extra needs setting up.

## Technical detail

- Source: `https://github.com/anas810/flowy-garden-gems` (public, cloned to a temp dir). Same stack: TanStack Start v1 + Vite + Tailwind v4 + shadcn.
- Copy `src/` (routes, `components/`, `components/ui/`, `hooks/`, `lib/`, `styles.css`, `router.tsx`, `start.ts`, `server.ts`), `public/`, `components.json`, `tsconfig.json`, `vite.config.ts` where they differ. Skip `routeTree.gen.ts` (regenerated).
- Align `package.json` dependencies with the source list and install with bun.
- Keep Lovable-managed files (`src/lib/lovable-error-reporting.ts`, error capture) intact if the source versions differ.
- Verify with a typecheck plus a Playwright screenshot of `/`.
