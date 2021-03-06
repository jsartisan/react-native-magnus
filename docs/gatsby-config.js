require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const ALGOLIA_QUERY = `{
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 1000
  ) {
    edges {
      node {
        excerpt(pruneLength: 160)
        fields {
          slug
          type
        }
        frontmatter {
          title
          description
        }
      }
    }
  }

  allSnippet(filter: { published: { eq: true } }) {
    edges {
      node {
        id
        title
        slug
        category
        published
      }
    }
  }

}`;

const queries = [
  {
    query: ALGOLIA_QUERY,
    transformer: ({ data }) => {
      let items = [];

      items = items.concat(
        data.allMarkdownRemark.edges.map(({ node }) => {
          return {
            objectID: node.fields.slug,
            title: node.frontmatter.title,
            slug: node.fields.slug,
            type: node.fields.type,
            description: node.frontmatter.description,
          };
        })
      );

      items = items.concat(
        data.allSnippet.edges.map(({ node }) => {
          return {
            objectID: node.slug,
            title: node.title,
            slug: `/snippets/${node.slug}`,
            type: 'snippets',
            description: node.description,
          };
        })
      );

      return items;
    },
    settings: {},
    matchFields: ['slug', 'title', 'description', 'type'],
  },
];

module.exports = {
  siteMetadata: {
    title: 'Magnus UI',
    description: 'A Utility-First React Native UI Framework',
    author: '@jsartisan',
    siteUrl: 'https://magnus-ui.com',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Magnus UI',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'static/images/favicon/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/docs`,
        name: 'docs',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blogs`,
        name: 'blogs',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-code-buttons',
            options: {
              // Optional button container class name. Defaults
              // to 'gatsby-code-button-container'.
              buttonContainerClass: 'copy-snippet-button',
              // Optional button class name. Defaults to 'gatsby-code-button'.
              buttonClass: 'group relative',
              // Optional button text. Defaults to ''.
              buttonText: '<div class="group-hover:block">Copy</div>',
              // Optional svg icon class name. Defaults to 'gatsby-code-button-icon'.
              svgIconClass: 'copy-snippet-svg',
              tooltipText: '',
              toasterClass: 'copy-snippet-toaster',
              // Optional toaster text class name. Defaults to ''.
              toasterTextClass: 'copy-snippet-toaster-text',
              // Optional toaster text. Defaults to ''.
              toasterText: 'Copied to clipboard!',
              // Optional toaster duration. Defaults to 3500.
              toasterDuration: 100000,
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',

          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                danger: {
                  classes: 'danger',
                },
                info: {
                  classes: 'info',
                  title: 'optional',
                },
                warning: {
                  classes: 'warning',
                  title: 'optional',
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-149664330-1',
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: '1Q4SUO0GGL',
        apiKey: '6c2f5811885b393ebf3a9d4d671da2ae',
        indexName: 'documentation',
        queries,
        chunkSize: 10000, // default: 1000
        settings: {},
        enablePartialUpdates: true,
        matchFields: ['slug', 'title', 'type', 'description'],
      },
    },
    {
      resolve: 'gatsby-source-firebase',
      options: {
        // point to the firebase private key downloaded
        credential: {
          type: 'service_account',
          project_id: 'magnus-ui-cbee6',
          private_key_id: 'f40d7f4e5f3cfa8220be20927c32607d615d55fc',
          private_key:
            '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCrzeBU2tTgh9JW\n4IYhSiw++s0LPFflx7MZpCozyuXA+W+dYXUEAp57jq4iSCr1ED7NZkmydeOqaKlG\nrs9jEwhyhbHoP993QIh94tqDEB+Jq13xGH2TZyu3nSSOywjYKrWVrjlLyeRh5twv\nPSHh1ErvrFZMaJBrvC7SjU2gHavq+9NxCJiQ7VelvoeA6QUwxO967R6cvwmzrOSh\ntDVBXYy0kxgn1oP5rzJC3gCD1fy9KHkyyuAjPrjn9BBgOfBab8L4o5tOPsM39tka\ntJ/AvQKyn5rBr2ajhzk4gWKF+rme2ztvetqgUGKT9WeQiUKLqslDme401OKaSVdN\neOBhkD1fAgMBAAECggEAAry9fGyeI/5V/hdcBmTBpAvn6ha/NG8u7dN9Q/pRbcvW\nQ5TSwfUZZFDnellZrIeNO0WMGrahIXfDFq1gqtdEn6/R9VLV3cxela7gb2J5i356\nToXm3kswWZ+8fjVC7KVwON8f6j1gZk+WJincWSuXjrkECPnzhHE+R7wuRppNFmnV\nCOPFE9kah8gH/MtkFGTclNdC/Z/a8IXHJ7HGIxvjG66WxOB16RWPKmK1gkk1PLcr\n+MFbKJk3wtwDjHLzY8p8B2D5wpZqPAkHtak5Esemp+fPiIyA77LXdzbcB4MrPduz\nY56f1ki7CSxHeKxOwkjzfCIE+vxCS36tcgdY74D+vQKBgQDd8BH4C+RAassBlq2H\nhDq5I4brHoKlkx+U9jn72RuTn3GKo0SDUQ1kJ6JPm76/7OplUPr4c0Z4wi42yjoy\nMTX2KkBGfdKY0pU2V4tjF3mpdRH1RlQVu24UuLDtJOksYjuLz9jJQtWpOc5zsDeY\nijEOIB0zD+j7QwvGefN3bfkUIwKBgQDGLA8xbZPD2/kYnHYJOraDPBnfGavtssjN\nsd6KbJ+9HwMfZ0HC0tmPrtD8TFASIalqu0fbHPAc0utNUObQ0QkjBHz1YtQpd+if\n2uscN1NsTyHTpkCtfbUSgZ09WRe9xi3doyTWLbxu7ORP8ytvGdwE/xQD1h8yypm5\nWgH3ROw3lQKBgFqyJsW1JlvkyH0ntFZzBQRvrk0bNMyxKPDZBq0S9iAHwoCjY/Y+\nAzjwsXXS8crA6LDqvQUXJq9muzgMwGeOkLy+W3HzLULim7OPZxjhmQhVHTecu/P9\nmmjBaRwgP2Gx6x+hmrf0phf31ZSVaMLfhlh9azFYyR8VMRS09XfS6zz9AoGAWm1m\nbWaUA86PpvRWRDXfbJjzMUOUmX14dawRYVbZuUG6egzzDASMtCzQPiBQdUWY+hQF\nYO2ef3ibWIdvG6AXLDxzDMIRD+8gXjlWCWURkx200NBPORtgkdZFOuY5mCYjbbxx\nJa5vCqrcL8NFcYf6RuliZ7HAQLwEU3jH5t4zb9UCgYAkJU2k9g0W6y3Wa3pCzcuV\nwu+v4WkNjAdJR9W7K5mGF5BGvoghJHQ2EKzNylmCujw+bL2weKVLaWhZq6p4e6sz\niZy6QRWG3BP9xaQyRuY32OXOi1d9/e7DXYin2iVSSHf4qSMv7Sq1tcAlK6C68YzU\npXMOFzL0NlBupi4Z6hTo3Q==\n-----END PRIVATE KEY-----\n',
          client_email:
            'firebase-adminsdk-gvwh2@magnus-ui-cbee6.iam.gserviceaccount.com',
          client_id: '104921365325893891786',
          auth_uri: 'https://accounts.google.com/o/oauth2/auth',
          token_uri: 'https://oauth2.googleapis.com/token',
          auth_provider_x509_cert_url:
            'https://www.googleapis.com/oauth2/v1/certs',
          client_x509_cert_url:
            'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-gvwh2%40magnus-ui-cbee6.iam.gserviceaccount.com',
        },
        databaseURL: 'https://magnus-ui-cbee6-default-rtdb.firebaseio.com',

        // you can have multiple "types" that point to different paths
        types: [
          {
            type: 'Snippet',
            path: 'snippets',
            query: (ref) => ref.limitToLast(10),
            map: (node) => {
              return node;
            },
          },
        ],
      },
    },
  ],
};
