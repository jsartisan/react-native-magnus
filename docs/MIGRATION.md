# Gatsby → Next.js migration of the Magnus docs

The docs app in this folder is a Next.js 16 (App Router) site managed with pnpm.
`pnpm install && pnpm build` completes and produces 38 static pages
(`/`, `/blog/`, `/docs/` + 33 doc pages, 2 blog posts) plus the sitemap, web
manifest and 404 page.

Code that was missing from the first migration PR and is added now: `src/lib/`
(content loader, Markdown pipeline, metadata, site constants) and `jsconfig.json`
(the `@/` import alias). The repository root `.gitignore` ignores `lib/` and
`jsconfig.json`, so `docs/.gitignore` un-ignores them for this folder.

## What changed (all inside `docs/`)

| Gatsby | Next.js |
| --- | --- |
| `src/pages/index.js`, `404.js`, `blog.js` | `src/app/page.js`, `not-found.js`, `blog/page.js` |
| `src/templates/docs.js`, `blogs.js` + `gatsby-node.js` | `src/app/docs/page.js`, `docs/[slug]/page.js`, `blogs/[slug]/page.js` (static params from `content/`) |
| `gatsby-transformer-remark` + remark plugins | `src/lib/markdown.mjs` (unified: GFM, smartypants, heading anchors, Prism, copy buttons, raw HTML) |
| `static/` | `public/` (same `/images/...` URLs) |
| `gatsby-plugin-sitemap`, `-manifest` | `src/app/sitemap.js`, `manifest.js` |
| `react-helmet` `<Seo>` | `src/lib/metadata.js` + `<Canonical>` (canonical URLs keep the old no-trailing-slash form) |
| `react-instantsearch` | `src/components/common/Search.js` (Algolia REST, same `documentation` index) |
| `gatsby-plugin-algolia` (key in `gatsby-config.js`) | `scripts/algolia-index.mjs` (credentials from environment only) |
| Drift / Inspectlet / Google Analytics in `html.js` + config | `src/components/common/Scripts.js` |
| `gatsby-plugin-offline` service worker | `public/sw.js` self-unregisters it for returning visitors |
| `tailwind.config.js` (v1) | Tailwind 3.4 (same theme; `variants` removed, `content` added) |

URLs are unchanged: `trailingSlash: true`, `/docs/…/`, `/blogs/…/`, `/blog/`.
`/blogs` (the old breadcrumb target, which never had a page) now redirects to `/blog/`.
The `/` home, `/docs/` + 33 pages, `/blog/`, 2 blog posts and the 404 page are covered.

Dead code that no page imported (login/submit modals, snippet service, firebase
constants, validators, `content/snippets`, unused home `Colors`) was removed in a
separate commit so it can be dropped from the PR if you prefer.

## Environment variables

See `.env.example`. Nothing secret is committed.

- `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY` – **required for the search box**; use the search-only key.
- `ALGOLIA_APP_ID`, `ALGOLIA_ADMIN_API_KEY` – used only by `scripts/algolia-index.mjs` (build/CI).
- `NEXT_PUBLIC_GA_TRACKING_ID` – optional; the old `UA-` property no longer collects data.

> **Security:** the previous `gatsby-config.js` contained an Algolia admin/write API
> key in plain text. It is still in this repository's git history. Rotate it in the
> Algolia dashboard and use the new key only through `ALGOLIA_ADMIN_API_KEY`.

## Review checklist

Checked against a production build (`pnpm build && pnpm start`) in headless Chromium:

- [x] `pnpm build` succeeds; 36 content pages + `/`, `/blog/`, `/sitemap.xml`, `/manifest.webmanifest` (all 38 sitemap URLs return 200; `/blogs` redirects to `/blog/`; unknown paths return 404)
- [x] Code blocks, tables, images, TOC and "Edit on Github" render on `/docs/button/`
- [x] Copy button copies the code and shows the toast; line numbers show on the 3 `numberLines` blocks; `// highlight-start` / `// highlight-end` lines are highlighted (and removed from the code)
- [x] Sidebar filter, active link highlight, mobile menu toggle (closes after navigating)
- [x] `<link rel="canonical">`, og/twitter tags, blog JSON-LD in page source
- [x] Header shows the library version (read from `../package.json` at build time)
- [ ] Side-by-side comparison of every page with https://magnus-ui.com (only spot-checked)
- [ ] Search returns results (needs `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY`)

## Open questions

- Where is https://magnus-ui.com hosted? Nothing in the repository deploys `docs/`.
  Next.js needs a Node-capable host (e.g. Vercel) or `output: 'export'` in
  `next.config.mjs` for a static host (redirects then must be set at the host).
