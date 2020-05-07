const React = require("react");
const config = require("./gatsby-config");

exports.onRenderBody = ({ pathname, setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="canonical"
      href={`${config.siteMetadata.siteUrl}${pathname.replace(/\/$/, "")}`}
    />,
  ]);
};
