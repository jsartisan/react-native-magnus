import 'prismjs/themes/prism.css';
import './fonts/icomoon.css';
import './globals.css';

import CopyCode from '@/components/common/CopyCode';
import RouteAnalytics from '@/components/common/RouteAnalytics';
import Scripts from '@/components/common/Scripts';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `A Utility-First React Native UI Framework | ${SITE_TITLE}`,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: '@jsartisan' }],
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/images/favicon/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      { rel: 'mask-icon', url: '/images/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  other: { 'msapplication-TileColor': '#da532c' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,800|Nunito+Sans:400,700,900"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript>This app works best with JavaScript enabled.</noscript>
        {children}
        <CopyCode />
        <RouteAnalytics />
        <Scripts />
      </body>
    </html>
  );
}
