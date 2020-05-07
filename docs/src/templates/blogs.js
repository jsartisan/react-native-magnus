import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Seo from "../components/common/Seo";

class BlogTemplate extends React.Component {
  generateJsonLD = () => {
    const post = this.props.data.markdownRemark;

    const json = {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": "https://magnus-ui.com",
            name: "Home",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": "https://magnus-ui.com/blogs",
            name: "Blogs",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@id": `https://magnus-ui.com${post.fields.slug}`,
            name: "Blogs",
          },
        },
      ],
    };

    return json;
  };

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const jsonLD = this.generateJsonLD();

    const seo = {
      title: post.frontmatter.title,
      description:
        "Magnus is the ultimate UI framework that helps you in building consistent user interfaces effortlessly in react native.",
      image: post.frontmatter.featuredImg,
      url: `https://magnus-ui.com${post.fields.slug}`,
    };

    return (
      <Layout type="blogs">
        <Seo seo={seo} />
        <Header />
        <div className="py-4 my-3 blogs__content">
          <div className="mx-auto max-w-screen-xl">
            <div className="py-3 my-3 w-full md:w-8/12">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(jsonLD),
                }}
              ></script>
              <Breadcrumbs
                breadcrumbs={[
                  {
                    text: "Blog",
                    link: "/blogs",
                  },
                  {
                    text: post.frontmatter.title,
                  },
                ]}
              />
              <div
                className="rounded-md"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    paddingBottom: "15.25%",
                  }}
                >
                  <img
                    alt=""
                    title
                    src={post.frontmatter.featuredImg}
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      transition: "opacity 0.5s ease 0.25s",
                      opacity: 1,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />
                </div>
              </div>
              <h1 className="text-2xl mt-5 font-bold md:px-0 md:mx-0 md:px-0">
                {post.frontmatter.title}
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: post.html }}
                className="mt-4 c-docs"
              />
              <div className="c-docs__toc"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImg
      }
    }
  }
`;
