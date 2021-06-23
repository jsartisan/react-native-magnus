import React from 'react';
import { Link } from 'gatsby';

import CircleOut from './CircleOut';

export default function Preview() {
  return (
    <div
      className="py-10 mx-5 md:mx-auto md:py-20 mb-10 px-8 md:px-16 mt-16 max-w-screen-xl md:w-full bg-white rounded-2xl"
      style={{ boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex md:flex-row flex-col flex-col-reverse">
          <div className="md:w-6/12">
            <h3 className="font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
              Start{' '}
              <span className="inline-block mr-2 font-bold relative">
                saving time
                <CircleOut />
              </span>
              on your next react native project
            </h3>
            <p className="mt-5 break-words">
              With the help of our utility first approach, you can rapidly
              convert your designs to react native apps and you can save a lot
              of time. Almost all Magnus components have support for utilities
              like spacing, border-radius, font sizes, shadows, etc
            </p>

            <Link
              to="/docs/examples"
              className="w-full md:w-px bg-primary-500 text-white block py-3
              min-w-200 text-center rounded-lg mt-10"
            >
              {' '}
              Check out examples
            </Link>
          </div>
          <div className="hidden md:block md:w-2/12" />
          <div className="md:w-4/12 mb-10 md:mb-0">
            <div
              className="bg-center bg-cover relative"
              style={{
                backgroundImage: 'url(/images/ellipse.png)',
                paddingBottom: '100%',
              }}
            >
              <div className="absolute" style={{ top: '15%' }}>
                <img src="/images/preview.png" className="w-full md:w-120" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
