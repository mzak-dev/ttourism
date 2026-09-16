# ttourism

A tour planner. Plan a trip as an ordered itinerary of places, days and travel legs.

## Stack

React Router 7 (framework mode, **SPA — `ssr: false`**) · React 19 · TypeScript ·
Tailwind CSS 4 · shadcn/ui (`base-rhea` style on Base UI, olive base colour, lucide
icons) · Vite · pnpm. Deployed as static files to GitHub Pages under `/ttourism/`.

## Commands

```bash
pnpm dev         # dev server, at http://localhost:5173/ttourism/
pnpm typecheck   # react-router typegen && tsc — run this before committing
pnpm build       # production build
pnpm build:pages # production build + the GitHub Pages fallback files
pnpm format      # prettier --write
```

## Conventions

- Import through the `~` alias (`~/components/ui/button`, `~/lib/utils`), never
  relative paths out of `app/`.
- UI components come from `pnpm dlx shadcn@latest add <name>` and land in
  `app/components/ui/`. Don't hand-write a component that shadcn already ships;
  edit the generated file instead.
- `components.json` pins the style, base colour and icon library. Leave it alone
  unless the whole theme is changing.
- Prettier is configured without semicolons (`.prettierrc`). Run `pnpm format`
  rather than reformatting by hand.
- Route modules live in `app/routes/` and must be registered in `app/routes.ts`.
- **There is no server.** Never write a server `loader` or `action` — the build
  has `ssr: false` and they will not run. Use `clientLoader` and `clientAction`.
  Anything needing a secret needs a backend this project does not have; say so
  rather than inventing one. See `docs/adr/0001-static-spa-on-github-pages.md`.
- The app is served from `/ttourism/`, not the domain root. That path is set in
  both `vite.config.ts` (`base`) and `react-router.config.ts` (`basename`) —
  change one and you must change the other. Never hardcode a root-absolute URL
  like `/favicon.ico`; it will 404 in production.

## Agent skills

### Issue tracker

Issues and PRDs live as GitHub issues on `mzak-dev/ttourism`, driven with the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

The five canonical triage roles use their default label strings (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
