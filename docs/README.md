# Magnus UI docs

Next.js (App Router) site for https://magnus-ui.com. Content lives in `content/`
(Markdown with front matter); pages are generated from it at build time.
Dependencies are managed with [pnpm](https://pnpm.io) (`packageManager` in
`package.json`; enable it with `corepack enable`). Node 20.9 or newer.

```sh
pnpm install
pnpm dev      # http://localhost:4000
pnpm build && pnpm start
```

Copy `.env.example` to `.env.local` and fill in the Algolia values (see `MIGRATION.md`).
