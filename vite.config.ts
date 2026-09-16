import { reactRouter } from "@react-router/dev/vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

export default defineConfig({
  // Served from https://mzak-dev.github.io/ttourism/ — keep in sync with
  // `basename` in react-router.config.ts. Dev runs on the same path so that
  // local and deployed URLs match.
  base: "/ttourism/",
  resolve: { tsconfigPaths: true },
  plugins: [tailwindcss(), reactRouter()],
})
