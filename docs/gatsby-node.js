const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

const categories = [
  { label: 'Buttons', value: 'buttons' },
  { label: 'Forms', value: 'forms' },
  { label: 'Navigations', value: 'navigations' },
];

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

  // constructing paginated pages for snippets
  const snippetEdges = result.data.allSnippet.edges;
  const snippetsPerPage = 9;
  const numPages = Math.ceil(snippetEdges.length / snippetsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/snippets' : `/snippets/${i + 1}`,
      component: path.resolve('./src/templates/snippets-list.js'),
      context: {
        limit: snippetsPerPage,
        skip: i * snippetsPerPage,
        numPages,
        category: '//',
        currentPage: i + 1,
      },
    });
  });

  // constructing pages by category
  categories.map((category) => {
    const filteredSnippetEdges = result.data.allSnippet.edges.filter(
      (edge) => edge.node.category === category.value
    );

    const numPages = Math.ceil(filteredSnippetEdges.length / snippetsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/snippets/${category.value}`
            : `/snippets/${category.value}/${i + 1}`,
        component: path.resolve('./src/templates/snippets-list.js'),
        context: {
          limit: snippetsPerPage,
          skip: i * snippetsPerPage,
          numPages,
          currentPage: i + 1,
          category: `/${category.value}/`,
        },
      });
    });
  });

  // constructing single pages for snippets
  snippetEdges.forEach((edge, index) => {
    const previous =
      index === snippetEdges.length - 1 ? null : snippetEdges[index + 1].node;
    const next = index === 0 ? null : snippetEdges[index - 1].node;

    createPage({
      path: `/snippets/${edge.node.slug}`,
      component: path.resolve('./src/templates/snippets.js'),
      context: {
        slug: edge.node.slug,
        category: `/${edge.node.category}/`,
        previous,
        next,
      },
    });
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
