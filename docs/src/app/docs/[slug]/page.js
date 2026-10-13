import { notFound } from 'next/navigation';

import DocsArticle from '@/components/layout/DocsArticle';
import { getEntries, getEntry } from '@/lib/content.mjs';
import { renderMarkdown } from '@/lib/markdown.mjs';
import { buildMetadata } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return getEntries('docs')
    .filter((doc) => doc.name)
    .map((doc) => ({ slug: doc.name }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doc = getEntry('docs', slug);
  if (!doc) return {};
  return buildMetadata({ title: doc.title, url: `${SITE_URL}${doc.slug}` });
}

export default async function DocsPage({ params }) {
  const { slug } = await params;
  const doc = getEntry('docs', slug);
  if (!doc) notFound();
  const { html, toc } = await renderMarkdown(doc.body);
  return <DocsArticle entry={doc} html={html} toc={toc} />;
}
