import React from 'react';
import { Link } from 'gatsby';

export default function C() {
  return (
    <div
      className="py-10 pb-16 bg-gray-100 px-5"
      style={{ borderBottom: '1px solid #efefef' }}
    >
      <div className="max-w-screen-xl mx-auto ">
        <div className="flex-grow block md:flex">
          <div className="flex-grow pr-5">
            <img
              className="mt-4"
              style={{ height: 20 }}
              src="/images/section-composable-header.svg"
              alt="Magnus Composable"
            />
            <h4 className="mt-5 font-bold text-2xl font-nunito">
              Easily Composable
            </h4>
            <p className="mt-2 text-gray-600">
              You can easily compose complex yet beautiful interfaces.
            </p>
            <a
              href="https://snack.expo.io/@pawankumar2901/dribble-login-page"
              target="_blank"
              className="block py-3 text-primary font-bold text-sm text-blue-600 hover:text-blue-700"
              style={{ minWidth: 200 }}
            >
              Check out an example →
            </a>
          </div>
          <div className="flex-grow mt-3 md:mt-0">
            <img
              src="/images/composable-2.png"
              className="max-w-full md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
