# Gatsby → Next.js migration of the Magnus docs (work in progress)

**Status: incomplete until `docs/package.json` and the lockfile are updated by a person.**
`docs/package.json` and `docs/yarn.lock` were not writable in the tool that prepared
this branch, so no `next build` has been run against this code. See "Finish the
migration" below.

## Finish the migration (one manual action)

From the repository root, on this branch:

```sh
cd docs
cp package.proposed.json package.json     # full replacement for the Gatsby manifest
rm yarn.lock                              # Gatsby-era lockfile; regenerate below
yarn install                              # (or npm install) writes the new lockfile
yarn build                                # next build; runs scripts/algolia-index.mjs after
rm package.proposed.json                  # no longer needed
git add package.json yarn.lock && git commit -m "Docs: switch dependencies to Next.js"
```

Then run `yarn dev`, open http://localhost:4000 and walk through the checklist below.

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

## Review checklist (not yet run by the author)

- [ ] `yarn build` succeeds; 36 content pages + `/`, `/blog/`, `/sitemap.xml`, `/manifest.webmanifest`
- [ ] Compare a few `/docs/…/` pages with https://magnus-ui.com (code blocks, tables, images, TOC, "Edit on Github")
- [ ] Copy button copies code and shows the toast; line numbers show on the 3 `numberLines` blocks
- [ ] Sidebar filter, active link highlight, mobile menu toggle
- [ ] Search returns results once the search key is set
- [ ] `<link rel="canonical">`, og/twitter tags, blog JSON-LD in page source
- [ ] Header shows the library version (needs `../package.json` present at build time)

## Open questions

- Where is https://magnus-ui.com hosted? Nothing in the repository deploys `docs/`.
  Next.js needs a Node-capable host (e.g. Vercel) or `output: 'export'` in
  `next.config.mjs` for a static host (redirects then must be set at the host).
