import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import { logout } from '../../utilities/auth';

const UserDropdown = (props) => {
  const { user } = props;
  const [open, setOpen] = useState(false);

  const hideDropdown = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', hideDropdown);
  });

  return (
    <div className="relative pl-4">
      <button
        className="block h-12 w-12 rounded-full overflow-hidden focus:outline-none"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <img
          className="h-full w-full object-cover"
          src={user.photoURL}
          alt="avatar"
        />
      </button>

      <div
        className={`absolute right-0 w-56 mt-2 py-2 px-2 bg-white border rounded-lg ${
          open ? '' : 'hidden'
        }`}
      >
        <a
          href="#"
          className="transition-colors duration-200 rounded-lg block px-4 py-2 text-normal text-gray-900 hover:bg-blue-100"
          onClick={(e) => {
            e.stopPropagation();
            logout().then(() => {
              window.location = '/';
            });
          }}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default UserDropdown;
