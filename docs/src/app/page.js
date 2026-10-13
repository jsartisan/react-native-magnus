import Canonical from '@/components/common/Canonical';
import Components from '@/components/home/Components';
import Composable from '@/components/home/Composable';
import Customizations from '@/components/home/Customizations';
import Example from '@/components/home/Example';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Preview from '@/components/home/Preview';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import { buildMetadata } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'A Utility-First React Native UI Framework',
  url: SITE_URL,
});

export default function HomePage() {
  return (
    <Layout>
      <Canonical slug="/" />
      <div className="">
        <Header />
        <Hero />
        <Features />
        <Components />
        <Customizations />
        <Composable />
        <Preview />
        <Example />
      </div>
    </Layout>
  );
}
