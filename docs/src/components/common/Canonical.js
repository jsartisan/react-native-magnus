import { canonicalFor } from '@/lib/metadata';

// Rendered as a plain <link>; React 19 hoists it into <head>. (Next's
// `alternates.canonical` would re-add the trailing slash because of
// `trailingSlash: true`, which would change the existing canonical URLs.)
export default function Canonical({ slug }) {
  return <link rel="canonical" href={canonicalFor(slug)} />;
}
