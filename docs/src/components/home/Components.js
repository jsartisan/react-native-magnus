import React from 'react';
import { Link } from 'gatsby';

export default function Features() {
  return (
    <div
      className="py-10 pt-16 px-5"
      style={{ background: '#fafafa', borderTop: '1px solid #efefef' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-grow w-100 pr-4">
          <div className="flex-grow">
            <div className="">
              <img
                className="mt-4"
                style={{ height: 20 }}
                src="/images/section-components-header.svg"
                alt="Magnus Components"
              />
              <h4 className="mt-5 font-bold text-2xl font-nunito">
                Consistent and Modular Components
              </h4>
              <p className="mt-2 text-gray-600">
                Magnus UI comes with a set of polished React Native components
                that just works out of the box.
              </p>
              <Link
                to="/docs/text"
                className="block py-3 text-primary font-bold text-sm text-blue-600 hover:text-blue-700"
              >
                Check out full list of components →
              </Link>
            </div>
          </div>
          {/* <div className="hidden md:block">
            <img src="/images/react.svg" style={{ width: 200 }} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
