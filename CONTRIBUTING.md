# Contributing to ttourism

## Prerequisites

- Node.js 22+
- pnpm 10+ (`corepack enable pnpm`)


## Setup

```bash
pnpm install
pnpm dev
```

## Workflow

1. Work is tracked in [GitHub Issues](https://github.com/mzak-dev/ttourism/issues).
   Incoming issues start with `needs-triage`; see `docs/agents/triage-labels.md`
   for what each label means.
2. Branch off `main`. Use a short, descriptive branch name (`feat/itinerary-days`,
   `fix/leg-ordering`).
3. Keep commits focused and write messages in the imperative mood
   ("Add day reordering", not "Added day reordering").
4. Open a pull request against `main` and link the issue it closes.

## Before opening a pull request

```bash
pnpm typecheck
pnpm format
pnpm build
```

Add test and lint commands here as they land.

CI runs `pnpm typecheck` and `pnpm build:pages` on every push to `main`, so a
failure in either blocks the deploy.

## Deployment

`main` deploys itself to https://mzak-dev.github.io/ttourism/ on every push.
There is no server in production — see
[ADR 0001](docs/adr/0001-static-spa-on-github-pages.md) before reaching for a
server `loader` or `action`.

## Architecture decisions

Anything that constrains future work — a data model, a rendering strategy, a
dependency that is hard to back out of — gets an ADR in `docs/adr/`, numbered
sequentially (`0001-....md`). Keep them short: context, decision, consequences.

## Domain language

`CONTEXT.md` at the repo root holds the project's glossary. If you introduce a
domain term (or find yourself reaching for a synonym of an existing one), add or
correct the entry in the same pull request.
