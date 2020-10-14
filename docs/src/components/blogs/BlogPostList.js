import React from "react";
import { Link } from "gatsby";

const BlogPostList = (props) => {
  const { blogs } = props;

  return (
    <div className="flex flex-wrap max-w-screen-lg mx-auto">
      {blogs.edges.map((post) => (
        <div className="flex mb-12 md:w-1/2 px-6 w-full">
          <div className="flex flex-1">
            <Link
              to={post.node.fields.slug}
              className="flex flex-1 flex-col group text-gray-900"
            >
              <div className="mb-2">
                <div className="flex flex-wrap">
                  <div className="">
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
                          paddingBottom: "56.25%",
                          backgroundColor: "#e1e1e1",
                        }}
                      >
                        <img
                          alt=""
                          title
                          src={post.node.frontmatter.featuredImg}
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
                    <h4 className="font-black text-lg md:text-xl lg:text-2xl leading-snug mt-5">
                      {post.node.frontmatter.title}
                    </h4>
                  </div>
                </div>
                <p className="leading-loose flex-grow mt-5 text-gray-700">
                  {post.node.frontmatter.description}
                </p>
                <div className="flex items-center justify-between mt-5">
                  <span className="font-bold text-rose group-hover:text-cornflower text-sm py-2 px-4 border border-rose group-hover:border-cornflower rounded">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
