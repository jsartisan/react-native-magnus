const React = require('react');
const config = require('./gatsby-config');

exports.onRenderBody = ({ pathname, setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="canonical"
      href={`${config.siteMetadata.siteUrl}${pathname.replace(/\/$/, '')}`}
    />,
  ]);
};

exports.onPreRenderHTML = function onPreRenderHTML({
  getHeadComponents,
  replaceHeadComponents,
}) {
  const headComponents = getHeadComponents();
  headComponents.sort((a, b) => {
    if (a.type === b.type || (a.type !== 'style' && b.type !== 'style')) {
      return 0;
    }

    if (a.type === 'style') {
      return 1;
    } else if (b.type === 'style') {
      return -1;
    }

    return 0;
  });

  replaceHeadComponents(headComponents);
};
