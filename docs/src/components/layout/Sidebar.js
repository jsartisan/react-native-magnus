import React, { useState } from 'react';

import { Link } from 'gatsby';
import { menu } from '../../constants/sidebar';
import Logo from '../common/Logo';
import SidebarFilter from '../common/SidebarFilter';

export default function Sidebar({ active, close }) {
  const [filteredMenu, setFilteredMenu] = useState(menu);

  /**
   * filter menu by text
   */
  const filterMenu = (e) => {
    const value = e.target.value;
    const filteredMenu = [];

    menu.forEach((menuitem) => {
      const filterdLinks = menuitem.links.filter((link) => {
        return link.text.toLowerCase().indexOf(value.toLowerCase()) > -1;
      });

      if (filterdLinks.length > 0) {
        filteredMenu.push({
          ...menuitem,
          links: filterdLinks,
        });
      }
    });

    setFilteredMenu(filteredMenu);
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
      {filteredMenu.map((menuitem) => (
        <section>
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
                className="mt-2 block"
                activeClassName="text-primary"
                style={{ fontWeight: 600, fontSize: 14 }}
                to={link.url}
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
