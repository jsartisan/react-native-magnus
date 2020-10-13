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
  );
}
