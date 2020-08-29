require("dotenv").config({
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
}`;

const queries = [
  {
    query: ALGOLIA_QUERY,
    transformer: ({ data }) =>
      data.allMarkdownRemark.edges.map(({ node }) => {
        return {
          objectID: node.fields.slug,
          title: node.frontmatter.title,
          slug: node.fields.slug,
          type: node.fields.type,
          description: node.frontmatter.description,
        };
      }),
    settings: {},
    matchFields: ["slug", "title", "description", "type"],
  },
];

module.exports = {
  siteMetadata: {
    title: `Magnus UI`,
    description: `A Utility-First React Native UI Framework`,
    author: `@jsartisan`,
    siteUrl: "https://magnus-ui.com",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/favicon/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/docs`,
        name: `docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blogs`,
        name: `blogs`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                danger: {
                  classes: "danger",
                },
                info: {
                  classes: "info",
                  title: "optional",
                },
                warning: {
                  classes: "warning",
                  title: "optional",
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149664330-1",
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: "1Q4SUO0GGL",
        apiKey: "6c2f5811885b393ebf3a9d4d671da2ae",
        indexName: "documentation",
        queries,
        chunkSize: 10000, // default: 1000
        settings: {},
        enablePartialUpdates: true,
        matchFields: ["slug", "title", "type", "description"],
      },
    },
  ],
};
