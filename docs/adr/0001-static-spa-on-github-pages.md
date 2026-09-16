# 1. Ship as a static SPA on GitHub Pages

Date: 2026-09-16

## Status

Accepted

## Context

The app was scaffolded from the shadcn `react-router` template, which enables
server-side rendering (`ssr: true`) and ships a `Dockerfile` that serves the
build with `react-router-serve`. That assumes somewhere to run Node.

We want deploys to be free, automatic on push, and require no infrastructure to
own. GitHub Pages fits, but it is a static file host: it runs no server-side
code, and it has no rewrite rules, so any URL without a file behind it returns
`404.html`.

Those two facts are incompatible with the template's defaults. Either the
hosting changes or the rendering model does.

## Decision

Render entirely on the client: `ssr: false`.

The site is served from `https://mzak-dev.github.io/ttourism/`, a project page,
so the app lives under a path rather than at a domain root. That path is
configured twice and the two must agree — Vite's `base` (which rewrites asset
URLs) and React Router's `basename` (which strips the prefix before matching
routes).

To survive Pages' lack of rewrites, the build copies `index.html` to
`404.html`. A deep link is served the app by the 404 handler, and the router
then resolves the URL client-side. A `.nojekyll` marker stops Pages running the
output through Jekyll, which discards directories whose names begin with an
underscore.

The `Dockerfile` and the `@react-router/serve` dependency are removed rather
than left to rot, since nothing builds or tests them any more.

## Consequences

Deployment is a push to `main` and costs nothing to run.

The cost is that **there is no server**. Server `loader` and `action` functions
cannot be used — data loading is `clientLoader`/`clientAction` and calls to
third-party APIs happen from the browser, so anything requiring a secret needs
a separate backend. There is no server to hold one.

Search engines and link unfurlers get an empty shell, because the HTML contains
no content until JavaScript runs. For a tour planner behind an interaction this
matters little; if public, shareable itinerary pages become a goal, revisit it.

The `404.html` trick means a genuinely missing URL returns HTTP 404 with the
app's own not-found UI rendered inside it. That is correct for users, and
slightly odd for anything reading the status code alongside the body.

Reversing this means restoring `ssr: true` and moving to a host that runs Node;
the route modules themselves largely survive such a move, since the split is
between `loader` and `clientLoader`, not in the components.
