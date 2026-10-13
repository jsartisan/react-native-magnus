import { getAllEntries } from '@/lib/content.mjs';
import { SITE_URL } from '@/lib/site';

// Same URL set gatsby-plugin-sitemap produced: every page except the 404,
// with trailing slashes.
export default function sitemap() {
  const pages = ['/', '/blog/', ...getAllEntries().map((entry) => entry.slug)];
  return pages.map((page) => ({
    url: `${SITE_URL}${page}`,
    changeFrequency: 'daily',
    priority: 0.7,
  }));
}
