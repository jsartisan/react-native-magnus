import React, { useState } from 'react';
import { Link } from 'gatsby';

import Logo from '../common/Logo';
import Search from '../common/Search';
import packageJSON from '../../../../package.json';

export default function Header({
  location,
  sidebarOpen,
  setSidebarOpen,
  showSidebarMenu,
}) {
  const user = getUser();
  return (
    <div
      className="fixed top-0 left-0 z-20 flex w-full px-5 border-b"
      style={{
        height: '70px',
        backdropFilter: 'blur(32px)',
        backgroundColor: 'rgba(241, 242, 244, 0.46)',
        borderColor: '#dcdcdc91',
      }}
    >
      <div className="flex items-center w-full max-w-screen-xl mx-auto">
        <div className="relative flex items-center">
          <Logo hasText />
          <div className="px-1 ml-3 text-xs text-gray-700 bg-gray-200 rounded-sm md:ml-3">
            v{packageJSON.version}
          </div>
        </div>
        <Search />
        <div className="">
          <ul className="flex items-center ml-3 list-none d-none d-sm-none d-md-flex">
            <li className="hidden md:block">
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-900 rounded btn-light hover:bg-gray-200"
              >
                Blog
              </Link>
            </li>
            <li className="hidden ml-3 md:block">
              <Link
                to="/docs"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-200"
              >
                Documentation
              </Link>
            </li>
            <li className="block ml-2 md:ml-3">
              <a
                href="https://discord.gg/SYnXGEy"
                target="_blank"
                className="flex block p-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-600 "
              >
                <i className="text-xl icon-discord " />
              </a>
            </li>
            <li className="block ml-1 md:ml-3">
              <a
                href="https://github.com/jsartisan/react-native-magnus"
                target="_blank"
                className="flex block p-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-600 "
              >
                <i className="text-xl icon-github " />
              </a>
            </li>
            <li className="block ml-1 md:ml-3">
              <a
                href="https://twitter.com/magnusui"
                target="_blank"
                className="flex block p-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-600"
              >
                <i className="text-xl icon-twitter" />
              </a>
            </li>
            {/* <li className="hidden ml-3 md:block">
              <a
                href="https://truesight.one"
                className="block px-4 py-2 text-gray-900 bg-white border rounded hover:bg-gray-200"
              >
                Hire Us
              </a>
            </li> */}
            {showSidebarMenu && (
              <li>
                <button
                  className="flex block ml-3 md:hidden"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <i
                    className={`${
                      sidebarOpen ? 'icon-close' : 'icon-menu'
                    } text-xl`}
                  />
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
