'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Sends a pageview on client-side navigation (the initial pageview is sent by
// the GA snippet itself), like gatsby-plugin-google-analytics did.
export default function RouteAnalytics() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (typeof window.ga === 'function') {
      window.ga('set', 'page', pathname);
      window.ga('send', 'pageview');
    } else if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pathname });
    }
  }, [pathname]);

  return null;
}
