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
    title: "Icon Sytem",
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
      <div className="max-w-screen-xl w-full mx-auto px-5 mt-20 flex flex-grow w-100 pr-4 items-center">
        <div className="flex-grow w-7/12">
          <div className>
            <h4 className="font-bold text-4xl font-nunito w-1/2">
              Beautiful & consistant UI powered with{" "}
              <span className="text-social-react">React</span>.
            </h4>
            <p className="mt-2 text-gray-600">
              Magnus UI comes with a set of polished React Native components
              that just works out of the box.
            </p>
            <div className="mt-12 w-10/12 flex flex-wrap">
              {features2.map((feature) => (
                <div className="w-1/3 pr-10 pb-12">
                  <div className="ae fv qe ">
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
