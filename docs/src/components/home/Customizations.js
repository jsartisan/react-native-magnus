import React from "react";
import { Link } from "gatsby";

export default function Features() {
  return (
    <div className="py-4 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-5 md:px-0">
        <div className="flex-grow w-100 flex flex-col md:flex-row">
          <div className="flex-grow order-2 md:order-1 mt-3 md:mt-0">
            <img
              src="/images/theme-customization-2.png"
              className="max-w-full md:max-w-lg"
            />
          </div>
          <div className="flex-grow pl-0 md:pl-5 order-1 md:order-2">
            <img
              className="mt-4"
              style={{ height: 20 }}
              src="/images/section-theme-header.svg"
              alt="Magnus Customizations"
            />
            <h4 className="mt-5 font-bold text-2xl font-nunito">
              Theme Customizations
            </h4>
            <p className="mt-2 text-gray-600">
              You can easily add or customize the theme for your entire app.
            </p>
            <Link
              to="/docs/customization"
              className="block py-3 text-primary font-bold text-sm text-blue-600 hover:text-blue-700"
            >
              Check out about theme customizations →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
