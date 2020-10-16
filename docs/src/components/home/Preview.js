import React, { useEffect } from "react";
import luxy from "luxy.js";

import CircleOut from "./CircleOut";

export default function Preview() {
  return (
    <div
      className="py-20 mb-10 px-16 mt-16 max-w-screen-xl w-full mx-auto bg-white rounded-2xl"
      style={{ boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="w-6/12">
            <h3 className="font-bold text-5xl text-gray-900 leading-tight">
              Start{" "}
              <span className="inline-block mr-2 font-bold relative">
                saving time
                <CircleOut />
              </span>
              on your next react native project
            </h3>
          </div>
          <div className="w-2/12" />
          <div className="w-4/12">
            <div
              className="bg-center bg-cover relative"
              style={{
                backgroundImage: `url(/images/ellipse.png)`,
                paddingBottom: "100%",
              }}
            >
              <div
                data-speed-y="-7"
                data-offset="120"
                className="absolute luxy-el"
                style={{ top: "25%" }}
              >
                <img src="/images/sketch.svg" />
              </div>
              <div
                data-speed-y="-8"
                data-offset="130"
                className="absolute right-0 luxy-el"
                style={{ bottom: "0%" }}
              >
                <img src="/images/point-up-left.svg" />
              </div>
              <div
                data-speed-y="-10"
                data-offset="250"
                className="absolute right-0 luxy-el"
                style={{ top: "20%" }}
              >
                <img src="/images/switch-on.svg" />
              </div>
              <div
                data-speed-y="-6"
                data-offset="120"
                style={{ bottom: "-5%" }}
                className="absolute  right-0 luxy-el"
              >
                <img src="/images/right-icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
