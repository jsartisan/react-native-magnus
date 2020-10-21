import React from "react";
import { Link } from "gatsby";

import Logo from "../common/Logo";
import Search from "../common/Search";

export default function Header({
  location,
  sidebarOpen,
  setSidebarOpen,
  showSidebarMenu,
}) {
  return (
    <div
      className="px-5 flex fixed top-0 left-0 w-full border-b z-20 w-full"
      style={{
        height: "70px",
        backdropFilter: "blur(32px)",
        backgroundColor: "rgba(241, 242, 244, 0.46)",
      }}
    >
      <div className="flex items-center max-w-screen-xl w-full mx-auto">
        <div className="flex items-center relative">
          <Logo hasText />
          <div className="text-gray-700 text-xs bg-gray-200 px-1 ml-3 md:ml-3 rounded-sm">
            v 1.0.44
          </div>
        </div>
        <Search />
        <div className="">
          <ul className="flex items-center ml-3 d-none d-sm-none d-md-flex list-none">
            <li className="hidden md:block">
              <Link
                to="/blog"
                className="btn-light rounded block px-3 py-2 text-gray-900 hover:bg-gray-200"
              >
                Blog
              </Link>
            </li>
            <li className="ml-3 hidden md:block">
              <Link
                to="/docs"
                className="rounded block px-3 py-2 text-gray-900 hover:bg-gray-200"
              >
                Documentation
              </Link>
            </li>
            <li className="ml-2 md:ml-3 block">
              <a
                href="https://discord.gg/SYnXGEy"
                target="_blank"
                className="p-2 rounded block hover:bg-gray-200 flex text-gray-500 hover:text-gray-600 "
              >
                <i className="icon-discord text-xl " />
              </a>
            </li>
            <li className="ml-1  md:ml-3 block">
              <a
                href="https://github.com/jsartisan/react-native-magnus"
                target="_blank"
                className="p-2 rounded block hover:bg-gray-200 flex text-gray-500 hover:text-gray-600 "
              >
                <i className="icon-github text-xl " />
              </a>
            </li>
            <li className="ml-1 md:ml-3 block">
              <a
                href="https://twitter.com/magnusui"
                target="_blank"
                className="p-2 rounded block hover:bg-gray-200 flex text-gray-500 hover:text-gray-600"
              >
                <i className="icon-twitter text-xl" />
              </a>
            </li>
            {/* <li className="ml-3 hidden md:block">
              <a
                href="https://truesight.one"
                className="bg-white border rounded block px-4 py-2 text-gray-900 hover:bg-gray-200"
              >
                Hire Us
              </a>
            </li> */}
            {showSidebarMenu && (
              <li>
                <button
                  className="block md:hidden ml-3 flex"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <i
                    className={`${
                      sidebarOpen ? "icon-close" : "icon-menu"
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
