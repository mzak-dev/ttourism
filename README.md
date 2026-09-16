# ttourism

A tour planner — build a trip as an ordered itinerary of places, days and travel legs.

> **Status: early.** The application is scaffolded and builds, but no tour-planning
> features exist yet — what you get today is the stock React Router starter route.

## Stack

| Concern         | Choice                                                            |
| --------------- | ----------------------------------------------------------------- |
| Framework       | [React Router](https://reactrouter.com) 7 (framework mode, SPA — no SSR) |
| UI              | [shadcn/ui](https://ui.shadcn.com) — `base-rhea` style on [Base UI](https://base-ui.com) |
| Theme           | olive base colour, CSS variables, `subtle` menu accent            |
| Styling         | Tailwind CSS 4 (via `@tailwindcss/vite`)                          |
| Icons           | [lucide](https://lucide.dev)                                      |
| Font            | Inter (`@fontsource-variable/inter`)                              |
| Language        | TypeScript, React 19                                              |
| Build           | Vite                                                              |
| Package manager | pnpm                                                              |

## Getting started

```bash
pnpm install
pnpm dev        # dev server at http://localhost:5173/ttourism/
```

The `/ttourism/` path is not a quirk of dev — the site is served from that path
in production too (see [Deployment](#deployment)), and dev matches it so URLs
behave the same in both.

Other scripts:

```bash
pnpm typecheck   # react-router typegen && tsc
pnpm build       # production build into build/client/
pnpm build:pages # same, plus the 404.html fallback and .nojekyll that Pages needs
pnpm format      # prettier --write
```

## Adding UI components

```bash
pnpm dlx shadcn@latest add card calendar dialog
```

Components land in `app/components/ui/` and are imported through the `~` alias:

```tsx
import { Button } from "~/components/ui/button"
```

The style, base colour and icon library are pinned in `components.json`; changing
them there keeps future `add` commands consistent with what is already generated.

## Repository layout

```
.
├── app/
│   ├── components/ui/     # shadcn components
│   ├── lib/utils.ts       # cn() helper
│   ├── routes/            # route modules
│   ├── routes.ts          # route config
│   ├── root.tsx           # document shell
│   └── app.css            # Tailwind + theme variables
├── public/
├── docs/
│   ├── adr/               # architecture decision records
│   └── agents/            # how coding agents should work in this repo
├── .github/workflows/     # CI — builds and deploys to GitHub Pages
├── scripts/               # build helpers
├── components.json        # shadcn config
├── react-router.config.ts
├── vite.config.ts
├── CLAUDE.md              # project brief + agent skill configuration
├── CONTRIBUTING.md
└── LICENSE
```

`CONTEXT.md` (the domain glossary) is created lazily, once there is real domain
language worth pinning down.

## Deployment

Every push to `main` builds and publishes to GitHub Pages via
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). The
live site is **https://mzak-dev.github.io/ttourism/**. You can also trigger a
deploy by hand from the Actions tab.

This requires **Settings → Pages → Source = GitHub Actions** on the repository;
with the default "Deploy from a branch" the workflow fails at the deploy step.

Because Pages is a static host, the app renders entirely in the browser
(`ssr: false`) — so **server `loader` and `action` functions are unavailable**;
use `clientLoader`/`clientAction`. The reasoning, and what it would take to
reverse it, is in
[ADR 0001](docs/adr/0001-static-spa-on-github-pages.md).

Two details make a single-page app work on Pages, both handled by
`pnpm build:pages`: `index.html` is copied to `404.html` so deep links reach the
router instead of Pages' own 404, and an empty `.nojekyll` stops Jekyll
discarding Vite's underscore-prefixed asset directories.

## Working with agents

This repo is set up for the [Matt Pocock engineering skills](https://github.com/mattpocock/skills).
Issues live in [GitHub Issues](https://github.com/mzak-dev/ttourism/issues), triage
uses the default label vocabulary, and domain docs are single-context. The details
are in `docs/agents/`.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE) © Mateusz Żak
