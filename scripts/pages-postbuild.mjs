// GitHub Pages has no SPA rewrite rule: a request for a deep link such as
// /ttourism/itinerary/3 hits a path with no file behind it and Pages serves
// 404.html. Shipping a copy of index.html as 404.html makes Pages hand back
// the app, which then routes the URL client-side.
//
// .nojekyll stops Pages running the output through Jekyll, which would
// otherwise drop the Vite asset directories whose names begin with an
// underscore.
import { copyFileSync, writeFileSync } from "node:fs"

const dir = "build/client"

copyFileSync(`${dir}/index.html`, `${dir}/404.html`)
writeFileSync(`${dir}/.nojekyll`, "")

console.log("pages: wrote 404.html fallback and .nojekyll")
