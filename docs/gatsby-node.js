const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                type
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // blog posts
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    if (post.node.fields.type === 'docs') {
      createPage({
        path: `${post.node.fields.slug}`,
        component: path.resolve('./src/templates/docs.js'),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    }

    if (post.node.fields.type === 'blogs') {
      createPage({
        path: `${post.node.fields.slug}`,
        component: path.resolve('./src/templates/blogs.js'),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    const parent = getNode(_.get(node, 'parent'));

    createNodeField({
      name: 'slug',
      node,
      value: `/${_.get(parent, 'sourceInstanceName')}${value}`,
    });

    createNodeField({
      name: 'type',
      node,
      value: _.get(parent, 'sourceInstanceName'),
    });
  }
};
