import React, { useEffect } from "react";
import luxy from "luxy.js";

export default function Preview() {
  useEffect(() => {
    luxy.init({
      wrapperSpeed: 0,
    });
  });

  return (
    <div
      className="py-20 mb-10 px-16 mt-20 max-w-screen-xl w-full mx-auto bg-white rounded-2xl"
      style={{ boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="w-6/12">
            <h3 className="font-bold text-4xl text-gray-600">
              <span className="font-bold text-gray-900">Accelerate</span> your
              design workflow with ready to use interface elements and file
              setup.
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
                style={{ top: "15%" }}
              >
                <img src="/images/sketch.svg" />
              </div>
              <div
                data-speed-y="-8"
                data-offset="130"
                className="absolute right-0 luxy-el"
                style={{ bottom: "5%" }}
              >
                <img src="/images/point-up-left.svg" />
              </div>
              <div className="luxy-el " data-speed-y="-10" data-offset="250">
                <img src="/images/switch-on.svg" className="absolute right-0" />
              </div>
              <div
                data-speed-y="-6"
                data-offset="120"
                style={{ bottom: "2%" }}
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
