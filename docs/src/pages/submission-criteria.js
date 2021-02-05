import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Seo from '../components/common/Seo';
import BlogPostList from '../components/blogs/BlogPostList';

const SubmissionCriteria = ({ data }) => {
  const seo = {
    title: 'Blog',
    description:
      'Magnus is the ultimate UI framework that helps you in building consistent user interfaces effortlessly in react native.',
    image: 'https://magnus-ui.com/images/hero.png',
    url: 'https://magnus-ui.com/blog',
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <div className="">
        <Header />
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold text-2xl lg:text-2xl leading-snug mt-12 text-center">
            Submission Criteria
          </h1>
          <div className="max-w-3xl mx-auto mt-3 mb-3">
            <p className="leading-loose text-sm md:text-md my-3 md:my-4 lg:my-3 text-gray-600 px-10 text-center">
              Read the latest news, tutorials, snippet and stories from the
              Magnus team
            </p>
          </div>
          <div className="mt-8">
            <div className="text-xl">
              Are there any submission guidelines I should know about?
            </div>
            <p>
              Submitted tutorials are evaluated by the community moderators.
            </p>
            <p class="mt-2">
              It can take up to 7 days to vet the submitted tutorial. You will
              be informed of approval or rejection via email notification.
            </p>
            <p class="mt-2">
              In rare cases, when community moderators could not reach a
              consensus about the quality of submitted tutorial, it might be
              kept in a queue and would be revalidated after a few weeks. It
              will happen when your tutorial is recently launched, and no
              course/tutorial preview is available without signing up or paying.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubmissionCriteria;
