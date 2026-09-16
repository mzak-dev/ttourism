# ttourism

A tour planner — build a trip as an ordered itinerary of places, days and travel legs.

> **Status: pre-alpha.** The repository is configured but the application has not been
> scaffolded yet. See [Getting started](#getting-started).

## Planned stack

| Concern    | Choice                                   |
| ---------- | ---------------------------------------- |
| Framework  | [React Router](https://reactrouter.com) (framework mode) |
| UI         | [shadcn/ui](https://ui.shadcn.com) — `rhea` style, olive base, teal theme |
| Styling    | Tailwind CSS, CSS variables for theming  |
| Icons      | [lucide](https://lucide.dev)             |
| Language   | TypeScript                               |
| Package manager | pnpm                                |

## Getting started

Scaffold the application into this repository:

```bash
pnpm dlx shadcn@latest init --preset b2DdygS7E --template react-router --name ttourism
```

Then:

```bash
pnpm install
pnpm dev      # start the dev server
pnpm build    # production build
```

Add shadcn components as you need them:

```bash
pnpm dlx shadcn@latest add button card calendar
```

## Repository layout

```
.
├── CLAUDE.md              # project brief + agent skill configuration
├── docs/
│   ├── adr/               # architecture decision records
│   └── agents/            # how coding agents should work in this repo
│       ├── issue-tracker.md
│       ├── triage-labels.md
│       └── domain.md
├── CONTRIBUTING.md
└── LICENSE
```

`CONTEXT.md` (the domain glossary) is created lazily, once there is real domain
language worth pinning down.

## Working with agents

This repo is set up for the [Matt Pocock engineering skills](https://github.com/mattpocock/skills).
Issues live in [GitHub Issues](https://github.com/mzak-dev/ttourism/issues), triage
uses the default label vocabulary, and domain docs are single-context. The details
are in `docs/agents/`.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE) © Mateusz Żak
