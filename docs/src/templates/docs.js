import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Sidebar from '../components/layout/Sidebar';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Seo from '../components/common/Seo';

const DocsTemplate = (props) => {
  const { data } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (shouldShow) => {
    setSidebarOpen(shouldShow);
  };

  const post = data.markdownRemark;

  const seo = {
    title: post.frontmatter.title,
    description:
      'Magnus is the ultimate UI framework that helps you in building consistent user interfaces effortlessly in react native.',
    url: `https://magnus-ui.com${post.fields.slug}`,
  };

  return (
    <Layout type="docs">
      <Seo seo={seo} />
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={toggleSidebar}
        showSidebarMenu={true}
      />
      <div className="px-5 ">
        <div className="flex max-w-screen-xl mx-auto relative">
          <Sidebar active={sidebarOpen} />
          <div className="hidden md:block w-2/12" />
          <div className="py-4 my-3 w-full md:w-8/12 md:pl-10 docs__content">
            <h1 className="text-2xl font-bold md:mx-0 md:px-0">
              {post.frontmatter.title}
            </h1>
            <div
              dangerouslySetInnerHTML={{ __html: post.html }}
              className="mt-4 c-docs"
            />
            <div className="c-docs__toc" />
          </div>
          <div className="md:w-2/12 relative text-right">
            <div className="absolute text-right top-0">
              <div
                className="table-of-contents  min-w-200 fixed mt-5 hidden md:block"
                style={{
                  height: 'calc(100vh - 70px)',
                  top: '70px',
                }}
              >
                <div className="mt-3 mb-5">
                  <a
                    target="_blank"
                    href={`https://github.com/jsartisan/react-native-magnus/blob/master/docs/content${post.fileAbsolutePath
                      .split('/content')
                      .pop()}`}
                    className="text-gray-700 text-sm flex justify-end items-center"
                  >
                    <i className="icon-github text-md text-gray-600" />
                    <span className="inline-block ml-3">Edit on Github</span>
                  </a>
                </div>

                {post.tableOfContents.length > 0 && (
                  <>
                    <h3 className="text-gray-800 font-bold uppercase text-sm mt-5">
                      On this page
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.tableOfContents,
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DocsTemplate;

export const pageQuery = graphql`
  query DocsPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      fields {
        slug
      }
      fileAbsolutePath
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
