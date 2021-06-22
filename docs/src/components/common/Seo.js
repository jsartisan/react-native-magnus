import _ from 'lodash';
import React from 'react';
import Helmet from 'react-helmet';

function Seo({ seo }) {
  const meta = [
    {
      name: 'description',
      content: seo.description,
    },
    {
      property: 'og:title',
      content: seo.title,
    },
    {
      property: 'og:url',
      content: seo.url,
    },
    {
      property: 'og:description',
      content: seo.description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: seo.image || 'https://magnus-ui.com/images/og-image.png',
    },
    {
      property: 'og:image:height',
      content: 630,
    },
    {
      property: 'og:image:width',
      content: 1200,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: seo.title,
    },
    {
      name: 'twitter:description',
      content: seo.description,
    },
    {
      name: 'twitter:image',
      content: seo.image || 'https://magnus-ui.com/images/og-image.png',
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={seo.title}
      titleTemplate={'%s | Magnus UI'}
      meta={meta}
    />
  );
}

export default Seo;
