import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

/**
 * The header shows the library version, which lives in the repository's root
 * package.json (one level above docs/). Read it at build time so nothing
 * outside docs/ has to be imported by the bundler.
 */
function readLibraryVersion() {
  try {
    const raw = fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8');
    return JSON.parse(raw).version || '';
  } catch {
    return '';
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['*.sandbox.kite.ai'],
  // Gatsby emitted every page with a trailing slash (/docs/button/). Keep that.
  trailingSlash: true,
  reactStrictMode: true,
  // docs/ lives inside the library repo, which has its own yarn.lock at the root;
  // pin the bundler root to docs/ so it does not pick that lockfile.
  turbopack: {
    root: fileURLToPath(new URL('.', import.meta.url)),
  },
  env: {
    NEXT_PUBLIC_MAGNUS_VERSION: readLibraryVersion(),
  },
  async redirects() {
    return [
      // The blog breadcrumb used to link to /blogs, which never had a page.
      { source: '/blogs', destination: '/blog/', permanent: true },
    ];
  },
};

export default nextConfig;
