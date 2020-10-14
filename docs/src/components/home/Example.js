import React from "react";

export default function Example() {
  return (
    <div className="max-w-screen-xl mx-auto pt-10">
      <h3 className="text-3xl font-bold text-center w-1/2 mx-auto">
        Code the perfect design for each project using Magnus.
      </h3>
      <a
        target="_blank"
        href="https://snack.expo.io/@pawankumar2901/dribble-login-page"
        className="block mt-5 pt-5 relative max-w-screen-xl mx-auto px-10  md:px-20"
      >
        <div className="flex justify-end">
          <div className="text-blue-500 flex items-center pb-3">
            <p>See demo on Expo</p>
            <svg
              className="ml-2"
              height="16px"
              viewBox="0 0 29 25"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Expo</title>
              <g
                stroke="none"
                strokeWidth="1"
                fill="rgba(0, 0, 32, 1)"
                fillRule="evenodd"
              >
                <g transform="translate(-41.000000, -52.000000)">
                  <path d="M58.7621343,53.7835977 C57.7033988,52.2084242 57.462144,52.0030749 55.3171951,52.0001337 L55.3171951,52 C55.3090975,52 55.3016207,52.0000535 55.2935771,52.0000535 C55.2855335,52.0000535 55.2780567,52 55.2699591,52 L55.2699591,52.0001337 C53.1249832,52.0030749 52.8837284,52.2084242 51.8250199,53.7835977 C50.8346552,55.2570591 41,72.9589169 41,73.4493488 C41,74.1697024 41.1886473,74.8447882 41.867416,75.806347 C42.5569544,76.7829861 43.7434432,77.3194611 44.6087268,76.4585181 C45.1926995,75.8774973 51.5074316,65.2012591 54.5506484,61.1556908 C54.9160935,60.6561947 55.6710337,60.6561947 56.0364788,61.1556908 C59.0796956,65.2012591 65.3944547,75.8774973 65.9784273,76.4585181 C66.8436839,77.3194611 68.0301997,76.7829861 68.7197112,75.806347 C69.3985069,74.8447882 69.5871542,74.1697024 69.5871542,73.4493488 C69.5871542,72.9589169 59.752472,55.2570591 58.7621343,53.7835977"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex-grow">
          <img
            src="/images/carbon.png"
            className="w-100 hidden md:block rounded-2xl p-2"
            style={{ backgroundColor: "#161819" }}
          />
          <img
            src="/images/dribbble-login.png"
            className="w-100 block md:hidden rounded-lg border"
          />
        </div>
        <div
          style={{ position: "absolute", top: "10%", right: -0 }}
          className="hidden md:block"
        >
          <img
            src="/images/dribbble-login.png"
            className="rounded"
            style={{ width: 340 }}
          />
        </div>
      </a>
    </div>
  );
}
