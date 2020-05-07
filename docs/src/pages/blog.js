import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Seo from "../components/common/Seo";
import BlogPostList from "../components/blogs/BlogPostList";

const BlogPage = ({ data }) => {
  const blogs = data.allMarkdownRemark;

  const seo = {
    title: "Blog",
    description:
      "Magnus is the ultimate UI framework that helps you in building consistent user interfaces effortlessly in react native.",
    image: "https://magnus-ui.com/images/hero.png",
    url: `https://magnus-ui.com/blog`,
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <div className="">
        <Header />
        <div className="text-center max-w-4xl mx-auto text-center">
          <h1 className="font-bold text-2xl lg:text-4xl leading-snug mt-12">
            Magnus Blog
          </h1>
          <div class="max-w-3xl mx-auto mt-6">
            <p class="leading-loose text-sm md:text-md my-3 md:my-4 lg:my-6 text-gray-600 px-10">
              Read the latest news, tutorials, snippet and stories from the
              Magnus team
            </p>
          </div>
        </div>
        <div className="pt-5">
          <BlogPostList blogs={blogs} />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(filter: { fields: { type: { eq: "blogs" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImg
            description
          }
        }
      }
    }
  }
`;

export default BlogPage;
