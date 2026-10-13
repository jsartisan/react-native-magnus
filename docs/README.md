# Magnus UI docs

Next.js (App Router) site for https://magnus-ui.com. Content lives in `content/`
(Markdown with front matter); pages are generated from it at build time.

```sh
yarn install
yarn dev      # http://localhost:4000
yarn build && yarn start
```

Copy `.env.example` to `.env.local` and fill in the Algolia values (see `MIGRATION.md`).

> The Gatsby → Next.js migration is not finished until `package.json` is replaced
> with `package.proposed.json` — follow `MIGRATION.md`.
