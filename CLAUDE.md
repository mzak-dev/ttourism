# ttourism

A tour planner. Plan a trip as an ordered itinerary of places, days and travel legs.

## Stack

React Router 7 (framework mode, SSR on) · React 19 · TypeScript · Tailwind CSS 4 ·
shadcn/ui (`base-rhea` style on Base UI, olive base colour, lucide icons) · Vite · pnpm.

## Commands

```bash
pnpm dev        # dev server
pnpm typecheck  # react-router typegen && tsc — run this before committing
pnpm build      # production build
pnpm format     # prettier --write
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

## Agent skills

### Issue tracker

Issues and PRDs live as GitHub issues on `mzak-dev/ttourism`, driven with the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

The five canonical triage roles use their default label strings (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
