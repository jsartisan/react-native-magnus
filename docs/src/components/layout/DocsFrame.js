'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import Header from './Header';
import Sidebar from './Sidebar';

// Header + sticky sidebar menu shared by every /docs/ page. Owns the mobile
// menu toggle; the page supplies the content and "On this page" columns.
export default function DocsFrame({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu after navigating (each page used to remount it).
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <>
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        showSidebarMenu={true}
      />
      <div className="px-5 ">
        <div className="flex max-w-screen-xl mx-auto relative">
          <Sidebar active={sidebarOpen} />
          <div className="hidden md:block w-2/12" />
          {children}
        </div>
      </div>
    </>
  );
}
