import type { Config } from "@react-router/dev/config"

// The app is deployed as a static bundle to GitHub Pages, which cannot run a
// server — so SSR is off and everything renders client-side. See
// docs/adr/0001-static-spa-on-github-pages.md.
//
// `basename` must match the Vite `base` in vite.config.ts: the site is served
// from https://mzak-dev.github.io/ttourism/, not from the domain root.
export default {
  ssr: false,
  basename: "/ttourism/",
} satisfies Config
