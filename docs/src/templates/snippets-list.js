import '@firebase/auth';
import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { navigate } from 'gatsby';
import { firebase } from '@firebase/app';

import Seo from '../components/common/Seo';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import firebaseConfig from '../constants/firebase';
import { setUser, isLoggedIn } from '../utilities/auth';
import { categories } from '../constants/categories';

const seo = {
  title: 'A Utility-First React Native UI Framework',
  description:
    'Magnus is the ultimate UI framework that helps you in building consistent user interfaces effortlessly in react native.',
  url: 'https://magnus-ui.com',
};

const LoginPage = (props) => {
  const { data, pageContext } = props;

  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1
      ? '/snippets'
      : `/snippets/${(currentPage - 1).toString()}`;
  const nextPage = `/snippets/${(currentPage + 1).toString()}`;

  return (
    <Layout>
      <Seo seo={seo} />
      <div className="">
        <Header />

        <div className="px-5">
          <div class=" flex flex-col md:flex-row md:items-center mb-8 max-w-screen-xl mx-auto mt-10">
            <h2 class="text-2xl text-secondary font-bold flex-1">
              All components
            </h2>
            <nav class="flex text-sm mt-3 md:ml-4 md:mt-0 whitespace-nowrap overflow-x-auto py-3 lg:py-0">
              <Link
                to={'/snippets/'}
                className={`
                px-4 py-2 rounded-full ${
                  pageContext.category === '//'
                    ? ' text-white bg-primary-500 font-semibold'
                    : ' text-gray-600 hover:text-gray-800'
                }`}
              >
                All
              </Link>
              {categories
                .filter((category) => {
                  return (
                    data.allSnippet.edges.findIndex(
                      (edge) => edge.node.category === category.value
                    ) > -1
                  );
                })
                .map((category) => (
                  <Link
                    to={`/snippets/${category.value}`}
                    className={`
                px-4 py-2 rounded-full ${
                  pageContext.category === `/${category.value}/`
                    ? ' text-white bg-primary-500 font-semibold'
                    : ' text-gray-600 hover:text-gray-800'
                }`}
                  >
                    {category.label}
                  </Link>
                ))}
            </nav>
          </div>

          <div className="grid max-w-screen-xl  mx-auto gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.allSnippetByCategory.edges.map((edge) => (
              <Link
                to={`/snippets/${edge.node.slug}`}
                title={edge.node.title}
                href="/component/div-bot"
                className="flex flex-col rounded overflow-hidden"
              >
                <div className="h-48 xl:h-64 bg-blue-100 overflow-hidden rounded-lg relative border border-gray-200">
                  <img
                    loading="lazy"
                    alt={edge.node.title}
                    src={edge.node.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3">
                  <div className="flex">
                    <div className="flex-1 leading-snug w-0">
                      <h4 className="whitespace-nowrap text-secondary font-bold truncate hover:text-primary">
                        {edge.node.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-2 pr-5">
                        {edge.node.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            {!isFirst && (
              <Link
                to={prevPage}
                className="border border-gray-300 hover:border-none hover:text-white hover:bg-primary-500 text-gray-700 block rounded-lg font-bold py-4 px-10 ml-2 flex items-center"
              >
                <svg
                  className="h-5 w-5 mr-2 fill-current"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="-49 141 512 512"
                  style={{ enableBackground: 'new -49 141 512 512' }}
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_10_"
                    d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"
                  />
                </svg>
                Previous page
              </Link>
            )}
            {!isLast && (
              <Link
                to={nextPage}
                className="border border-gray-300 hover:border-none hover:text-white hover:bg-primary-500 text-gray-700 block rounded-lg font-bold py-4 px-10 ml-2 flex items-center"
              >
                Next page
                <svg
                  className="h-5 w-5 ml-2 fill-current"
                  clasversion="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="-49 141 512 512"
                  style={{ enableBackground: 'new -49 141 512 512' }}
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_11_"
                    d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
            l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
            c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;

export const pageQuery = graphql`
  query snippetsPageQuery($skip: Int!, $limit: Int!, $category: String!) {
    allSnippetByCategory: allSnippet(
      limit: $limit
      skip: $skip
      filter: { category: { regex: $category }, published: { eq: true } }
    ) {
      edges {
        node {
          title
          id
          slug
          category
          image
          description
        }
      }
    }

    allSnippet(limit: 1000, filter: { published: { eq: true } }) {
      edges {
        node {
          title
          id
          slug
          category
          image
          description
        }
      }
    }
  }
`;
