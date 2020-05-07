import React from "react";
import { Link } from "gatsby";

const Logo = ({
  hasText = false,
  hasImage = true,
  center = false,
  centerMobile = false,
}) => (
  <h1 className="c-logo">
    <Link to="/" className="flex items-center">
      {hasImage && <img style={{ height: 25 }} src="/images/logo.svg" />}
      {hasText && (
        <div className=" font-nunito text-2xl font-semibold ml-3 hidden md:block">
          magnus
        </div>
      )}
    </Link>
  </h1>
);

export default Logo;
