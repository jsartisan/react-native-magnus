import React from "react";

const features2 = [
  {
    title: "Atomic",
    icon: `/images/atomic.svg`,
    description: "Based on Atomic Design Methodology.",
  },
  {
    title: "Theme Setup",
    icon: "/images/typography.svg",
    description: "Customize colors, border radius, etc with your own theme.",
  },
  {
    title: "Components",
    icon: "/images/components.svg",
    description: "25+ well polished react native components",
  },
  {
    title: "Spacing",
    icon: "/images/spacing.svg",
    description: "Consistent spacing throughout the app.",
  },
  {
    title: "Icon System",
    icon: "/images/icon-system.svg",
    description: "Thousands of icons available.",
  },
  {
    title: "Customization",
    icon: "/images/customization.svg",
    description: "Easy customization of default theme.",
  },
];

export default function Features() {
  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto px-5 mt-20 flex flex-grow w-100 pr-4 items-center border-t border-b border-b-gray-300 pt-16 pb-12">
        <div className="flex-grow md:w-7/12">
          <div className>
            <h4 className="font-bold text-3xl md:text-4xl font-nunito md:w-1/2 text-center md:text-left">
              Beautiful & consistant UI powered with{" "}
              <span className="text-social-react">React</span>.
            </h4>
            <p className="mt-2 text-gray-600 md:text-left text-center">
              Magnus UI comes with a set of polished React Native components
              that just works out of the box.
            </p>
            <div className="mt-12 md:w-10/12 md:flex flex-wrap">
              {features2.map((feature) => (
                <div className="md:w-1/3 md:pr-10 pb-6 md:pb-12">
                  <div className="flex flex-col items-center md:block text-center md:text-left ">
                    <img src={feature.icon} className="h-12" />
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block w-3/12">
          <img src="/images/react.svg" style={{ width: "250px" }} />
        </div>
      </div>
    </>
  );
}
