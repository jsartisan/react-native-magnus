'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { menu } from '@/constants/sidebar';
import SidebarFilter from '../common/SidebarFilter';

const normalize = (p) => (p || '').replace(/\/?$/, '/');

export default function Sidebar({ active }) {
  const [filteredMenu, setFilteredMenu] = useState(menu);
  const pathname = normalize(usePathname());

  /**
   * filter menu by text
   */
  const filterMenu = (e) => {
    const value = e.target.value.toLowerCase();
    const next = [];

    menu.forEach((menuitem) => {
      const links = menuitem.links.filter(
        (link) => link.text.toLowerCase().indexOf(value) > -1
      );
      if (links.length > 0) next.push({ ...menuitem, links });
    });

    setFilteredMenu(next);
  };

  return (
    <div
      className={`bg-white sidebar px-5 pl-0 fixed z-10 overflow-y-scroll pb-20 ${
        active ? 'block ' : 'hidden md:block'
      }`}
      style={{
        height: 'calc(100vh - 70px)',
        top: '70px',
      }}
    >
      <SidebarFilter onChange={filterMenu} />

      {filteredMenu.map((menuitem, i) => (
        <section key={`${menuitem.text || 'root'}-${i}`}>
          {menuitem.text && (
            <p
              className="mt-8 text-gray-500 uppercase"
              style={{ fontSize: 12 }}
            >
              {menuitem.text}
            </p>
          )}
          <div className="mt-2">
            {menuitem.links.map((link) => (
              <Link
                key={link.url}
                className="mt-2 block"
                aria-current={pathname === normalize(link.url) ? 'page' : undefined}
                style={{ fontWeight: 600, fontSize: 14 }}
                href={link.url}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
