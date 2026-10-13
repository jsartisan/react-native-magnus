import { SITE_DESCRIPTION, SITE_OG_IMAGE, SITE_TITLE, SITE_URL } from './site';

/**
 * Per-page metadata in the same shape the Gatsby `<Seo>` component produced:
 * description, Open Graph and Twitter card tags. The title goes through the
 * `%s | Magnus UI` template set in app/layout.js.
 */
export function buildMetadata({ title, description = SITE_DESCRIPTION, image, url }) {
  const images = [{ url: image || SITE_OG_IMAGE, width: 1200, height: 630 }];
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: SITE_TITLE,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map((entry) => entry.url),
    },
  };
}

/**
 * Canonical URL for a site path. The old site published canonicals without a
 * trailing slash (`/docs/button`), so that is kept even though pages are served
 * with one (`trailingSlash: true`).
 */
export function canonicalFor(slug = '/') {
  const path = slug.replace(/\/+$/, '');
  return `${SITE_URL}${path}`;
}
