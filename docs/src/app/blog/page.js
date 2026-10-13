import Canonical from '@/components/common/Canonical';
import BlogPostList from '@/components/blogs/BlogPostList';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import { getEntries } from '@/lib/content.mjs';
import { buildMetadata } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Blog',
  image: `${SITE_URL}/images/hero.png`,
  url: `${SITE_URL}/blog`,
});

export default function BlogPage() {
  const blogs = getEntries('blogs');

  return (
    <Layout>
      <Canonical slug="/blog/" />
      <div className="">
        <Header />
        <div className="text-center max-w-4xl mx-auto text-center">
          <h1 className="font-bold text-2xl lg:text-4xl leading-snug mt-12">
            Magnus Blog
          </h1>
          <div className="max-w-3xl mx-auto mt-6">
            <p className="leading-loose text-sm md:text-md my-3 md:my-4 lg:my-6 text-gray-600 px-10">
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
}
