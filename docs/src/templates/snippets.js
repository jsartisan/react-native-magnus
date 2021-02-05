import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import InnerHTML from 'dangerously-set-html-content';

import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Seo from '../components/common/Seo';

const SnippetsTemplate = (props) => {
  const { data } = props;
  const snippet = data.snippet;

  const seo = {
    title: snippet.title,
    description:
      'Magnus is the ultimate UI framework that helps you in building consistent user interfaces effortlessly in react native.',
    url: `https://magnus-ui.com${snippet.slug}`,
  };

  return (
    <Layout type="snippets">
      <Seo seo={seo} />
      <Header />
      <div class="px-5">
        <div className="mt-12 max-w-screen-xl mx-auto">
          <div className="flex items-center lg:h-32 my-4">
            <div className="flex sm:w-2/3">
              <div className="flex flex-col leading-tight">
                <h1 className="text-2xl text-secondary font-bold mb-1">
                  {snippet.title}
                </h1>
                <p className="text-gray-700 mt-3 leading-snug description-link">
                  {snippet.description}
                </p>
              </div>
            </div>
            <div className="sm:w-1/3" />
          </div>

          <InnerHTML html={snippet.embed} />
        </div>

        <div className="max-w-screen-xl mx-auto mt-10">
          <h3 className="text-xl font-bold">Related snippets</h3>
          <div className="grid max-w-screen-xl  mt-5 mx-auto gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.allSnippet.edges.map((edge) => (
              <Link
                to={`/snippets/${edge.node.slug}`}
                title="TailwindCSS div bot"
                href="/component/div-bot"
                className="flex flex-col rounded overflow-hidden"
              >
                <div className="h-48 xl:h-64 bg-blue-100 overflow-hidden rounded-lg relative">
                  <img
                    loading="lazy"
                    alt="tailwind div bot"
                    src={edge.node.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3">
                  <div className="flex">
                    <div className="flex-1 leading-snug w-0">
                      <h4 className="whitespace-nowrap text-secondary font-bold truncate hover:text-primary">
                        {edge.node.title}
                      </h4>{' '}
                      {/* <p className="text-sm text-gray-600">
                      {edge.node.category}
                    </p> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SnippetsTemplate;

export const pageQuery = graphql`
  query SnippetPostBySlug($slug: String!, $category: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    snippet(slug: { eq: $slug }) {
      id
      title
      slug
      embed
      description
    }

    allSnippet(
      limit: 6
      filter: {
        category: { regex: $category }
        published: { eq: true }
        slug: { ne: $slug }
      }
    ) {
      edges {
        node {
          title
          id
          slug
          category
          image
        }
      }
    }
  }
`;
