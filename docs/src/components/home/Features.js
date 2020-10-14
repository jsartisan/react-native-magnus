import React from "react";
import { Link } from "gatsby";

const features = [
  {
    icon: "/images/section-components-header.svg",
    title: "Modular",
    description: "Combine symbols to create multiple UI components",
    iconHeight: 15,
  },
  {
    icon: "/images/section-theme-header.svg",
    title: "Modular",
    description: "Combine symbols to create multiple UI components",
    iconHeight: 15,
  },
  {
    icon: "/images/section-composable-header.svg",
    title: "Modular",
    description: "Combine symbols to create multiple UI components",
    iconHeight: 20,
  },
];

export default function Features() {
  return (
    <>
      <div className="py-10 px-10 mt-10 max-w-screen-xl w-full mx-auto border-t-gray100 border-t border-b-gray100 border-b">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-grow w-100 pr-4">
            {features.map((feature) => (
              <div className="flex-grow">
                <div className="flex items-start">
                  <img
                    style={{ height: feature.iconHeight }}
                    src={feature.icon}
                    alt="Modular Magnus"
                    className="mt-2"
                  />
                  <p className="ml-5 text-gray-700">
                    <span className="font-bold text-gray-900">
                      {feature.title}
                    </span>{" "}
                    - {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl w-full mx-auto  mt-20 flex flex-grow w-100 pr-4">
        <div className="flex-grow">
          <div className>
            <h4 className="mt-5 font-bold text-4xl font-nunito">
              Why use Magnus?
            </h4>
            <p className="mt-2 text-gray-600">
              Magnus UI comes with a set of polished React Native components
              that just works out of the box.
            </p>
            <a
              className="block py-3 text-primary font-bold text-sm text-blue-600 hover:text-blue-700"
              href="/docs/text"
            >
              Check out full list of components →
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <img src="/images/react.svg" style={{ width: "200px" }} />
        </div>
      </div>
    </>
  );
}
