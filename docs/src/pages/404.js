import React from 'react';

import Seo from '../components/common/Seo';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';

const seo = {
  title: 'A Utility-First React Native UI Framework',
  description:
    'Magnus is the ultimate UI framework that helps you in building consistent user interfaces effortlessly in react native.',
  url: 'https://magnus-ui.com',
};

const IndexPage = () => (
  <Layout>
    <Seo seo={seo} />
    <Header />
    <div className="text-center pt-40" style={{ minHeight: '500px' }}>
      <h1 className="text-gray-900 font-bold text-3xl">404</h1>
      <p className="text-gray-600">The page you are looking does not exist.</p>
    </div>
  </Layout>
);

export default IndexPage;
