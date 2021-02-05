import React, { useState } from 'react';
import { Link } from 'gatsby';

import Logo from '../common/Logo';
import Search from '../common/Search';
import LoginModal from '../common/LoginModal';
import SubmitModal from '../common/SubmitModal';
import UserDropdown from '../common/UserDropdown';
import packageJSON from '../../../../package.json';
import { isLoggedIn, getUser } from '../../utilities/auth';

export default function Header({
  location,
  sidebarOpen,
  setSidebarOpen,
  showSidebarMenu,
}) {
  const user = getUser();
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [submitModalVisible, setSubmitModalVisible] = useState(false);

  return (
    <div
      className="px-5 flex fixed top-0 left-0 w-full border-b z-20 w-full"
      style={{
        height: '70px',
        backdropFilter: 'blur(32px)',
        backgroundColor: 'rgba(241, 242, 244, 0.46)',
        borderColor: '#dcdcdc91',
      }}
    >
      <div className="flex items-center max-w-screen-xl w-full mx-auto">
        <div className="flex items-center relative">
          <Logo hasText />
          <div className="text-gray-700 text-xs bg-gray-200 px-1 ml-3 md:ml-3 rounded-sm">
            v{packageJSON.version}
          </div>
        </div>
        <Search />
        <div className="">
          <ul className="flex items-center ml-3 d-none d-sm-none d-md-flex list-none">
            <li className="ml-3 hidden md:block">
              <Link
                to="/snippets"
                className="rounded block px-3 py-2 text-gray-900 hover:bg-gray-200"
              >
                Snippets
              </Link>
            </li>
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
            {!isLoggedIn() && (
              <li className="ml-3 hidden md:block">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setLoginModalVisible(true);
                  }}
                  className="rounded block px-3 py-2 text-gray-900 hover:bg-gray-200"
                >
                  Login
                </a>
                <LoginModal
                  open={loginModalVisible}
                  toggle={setLoginModalVisible}
                />
              </li>
            )}
            {isLoggedIn() && (
              <>
                <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row items-center sm:border-l sm:border-gray-300">
                  <button
                    title="Submit component"
                    className="sm:ml-4 py-2 px-5 md:px-6 rounded-lg bg-primary-500 text-white font-bold hidden md:block"
                    onClick={() => setSubmitModalVisible(true)}
                  >
                    Submit your own
                  </button>
                </div>

                <UserDropdown user={user} />
                <SubmitModal
                  open={submitModalVisible}
                  toggle={setSubmitModalVisible}
                />
              </>
            )}
            {showSidebarMenu && (
              <li>
                <button
                  className="block md:hidden ml-3 flex"
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
