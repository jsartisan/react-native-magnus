import { notFound } from 'next/navigation';

import Canonical from '@/components/common/Canonical';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import { getEntries, getEntry } from '@/lib/content.mjs';
import { renderMarkdown } from '@/lib/markdown.mjs';
import { buildMetadata } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return getEntries('blogs').map((post) => ({ slug: post.name }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getEntry('blogs', slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    image: post.featuredImg,
    url: `${SITE_URL}${post.slug}`,
  });
}

const breadcrumbJsonLd = (post) => ({
  '@context': 'http://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, item: { '@id': SITE_URL, name: 'Home' } },
    // Was https://magnus-ui.com/blogs, which never had a page (now /blog).
    { '@type': 'ListItem', position: 2, item: { '@id': `${SITE_URL}/blog`, name: 'Blogs' } },
    { '@type': 'ListItem', position: 3, item: { '@id': `${SITE_URL}${post.slug}`, name: 'Blogs' } },
  ],
});

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getEntry('blogs', slug);
  if (!post) notFound();
  const { html } = await renderMarkdown(post.body);

  return (
    <Layout type="blogs">
      <Canonical slug={post.slug} />
      <Header />
      <div className="py-4 my-3 blogs__content">
        <div className="mx-auto max-w-screen-xl">
          <div className="py-3 my-3 w-full md:w-8/12">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(post)) }}
            />
            <Breadcrumbs
              breadcrumbs={[
                { text: 'Blog', link: '/blog/' },
                { text: post.title },
              ]}
            />
            <div
              className="rounded-md"
              style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}
            >
              <div style={{ width: '100%', paddingBottom: '15.25%' }}>
                <img
                  alt=""
                  src={post.featuredImg}
                  style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    transition: 'opacity 0.5s ease 0.25s',
                    opacity: 1,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                  }}
                />
              </div>
            </div>
            <h1 className="text-2xl mt-5 font-bold md:px-0 md:mx-0 md:px-0">
              {post.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: html }} className="mt-4 c-docs" />
            <div className="c-docs__toc" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
