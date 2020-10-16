import React from "react";
import { Link } from "gatsby";

import Logo from "../common/Logo";
import Truesight from "../common/Truesight";

export default function Footer() {
  return (
    <div className="max-w-screen-xl mx-auto mt-16 py-10 md:pt-10 md:py-10 px-5 md:px-0">
      <div className="flex items-start flex-col md:flex-row border-t border-b border-b-gray-300 border-t-gray-300">
        <div className="flex-grow flex items-center w-1/2 py-16">
          <Logo hasText />
          <p className="text-gray-600 text-lg text-sm flex-grow px-12">
            UI framework for developing modular and consistent apps in React
            Native
          </p>
          {/* <p className="flex items-center mt-3">
            Made with <i className="icon-heart mx-2 text-red-500" /> at
            <a href="https://truesight.one" target="_blank" className="ml-2">
              <Truesight fill="#1a71fd" size={20} />
            </a>
          </p> */}
        </div>
        <div className="flex-grow w-1/2  px-12 py-16  border-l border-l-gray-300">
          <div className="pt-3 md:pt-0 pb-3 flex">
            <div className="flex-grow">
              <h3 className="font-bold pb-3 text-md  mt-0">Product</h3>
              <Link
                to="/docs/getting-started"
                className="block text-gray-500 hover:text-gray-700"
              >
                Need Help?
              </Link>
              <Link
                to="/docs"
                className="block text-gray-500 hover:text-gray-700 mt-3"
              >
                Give Feedback
              </Link>
            </div>
            <div className="flex-grow">
              <h3 className="font-bold pb-3 text-md  mt-0">Extras</h3>
              <Link
                to="/blog"
                className="block text-gray-500 hover:text-gray-700"
              >
                Blog
              </Link>
              <Link
                to="/docs"
                className="block text-gray-500 hover:text-gray-700 mt-3"
              >
                Github
              </Link>
            </div>
            <div className="">
              <h3 className="font-bold pb-3 text-md text-right mt-0">
                Follow us
              </h3>
              <div className="flex justify-end">
                <a
                  target="_blank"
                  href="https://github.com/jsartisan/react-native-magnus"
                  className="d-block flex text-gray-500 hover:text-gray-600"
                >
                  <i className="icon-github text-xl " />
                </a>
                <a
                  href="https://twitter.com/magnusui"
                  target="_blank"
                  className="block pl-5 flex text-gray-500 hover:text-gray-600"
                >
                  <i className="icon-twitter text-xl " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-10 text-sm text-center text-gray-500">
        Copyright © Magnus UI 2020
      </p>
    </div>
  );
}
