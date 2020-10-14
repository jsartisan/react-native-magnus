import React from "react";

import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Preview from "../components/home/Preview";
import Customizations from "../components/home/Customizations";
import Composable from "../components/home/Composable";
import Example from "../components/home/Example";

import Seo from "../components/common/Seo";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";

const seo = {
  title: "A Utility-First React Native UI Framework",
  description:
    "Magnus is the ultimate UI framework that helps you in building consistent user interfaces effortlessly in react native.",
  url: "https://magnus-ui.com",
};

const IndexPage = () => (
  <Layout>
    <Seo seo={seo} />
    <div className="">
      <Header />
      <Hero />
      <Features />
      <Preview />
      <Example />
    </div>
  </Layout>
);

export default IndexPage;
