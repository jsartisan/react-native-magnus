// Publishes the docs + blog records to the Algolia "documentation" index.
// Replaces gatsby-plugin-algolia, which ran during `gatsby build` with the
// admin key hard-coded in gatsby-config.js. Credentials now come from the
// environment only:
//   ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY   (optional: ALGOLIA_INDEX_NAME)
// Runs automatically after `npm run build` (postbuild) and exits quietly when
// the variables are not set, so builds without the key still succeed.
import { getAllEntries } from '../src/lib/content.mjs';

const appId = process.env.ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_ADMIN_API_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME || 'documentation';

if (!appId || !apiKey) {
  console.log('[algolia-index] ALGOLIA_APP_ID / ALGOLIA_ADMIN_API_KEY not set; skipping index update.');
  process.exit(0);
}

const base = `https://${appId}.algolia.net/1/indexes/${encodeURIComponent(indexName)}`;
const headers = {
  'X-Algolia-Application-Id': appId,
  'X-Algolia-API-Key': apiKey,
  'Content-Type': 'application/json',
};

async function call(url, body) {
  const response = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
  if (!response.ok) {
    throw new Error(`Algolia ${response.status}: ${await response.text()}`);
  }
  return response.json();
}

// Same record shape as before: objectID/slug are the page URL.
const records = getAllEntries().map((entry) => ({
  objectID: entry.slug,
  title: entry.title,
  slug: entry.slug,
  type: entry.type,
  description: entry.description || undefined,
}));

// Upsert everything, then drop records whose page no longer exists
// (what `enablePartialUpdates` did).
await call(`${base}/batch`, {
  requests: records.map((body) => ({ action: 'updateObject', body })),
});

const keep = new Set(records.map((record) => record.objectID));
const stale = [];
let cursor;
do {
  const page = await call(`${base}/browse`, cursor ? { cursor } : { attributesToRetrieve: [] });
  page.hits.forEach((hit) => {
    if (!keep.has(hit.objectID)) stale.push(hit.objectID);
  });
  cursor = page.cursor;
} while (cursor);

if (stale.length) {
  await call(`${base}/batch`, {
    requests: stale.map((objectID) => ({ action: 'deleteObject', body: { objectID } })),
  });
}

console.log(`[algolia-index] indexed ${records.length} records, removed ${stale.length} stale.`);
