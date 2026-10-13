import DocsArticle from '@/components/layout/DocsArticle';
import { getEntry } from '@/lib/content.mjs';
import { renderMarkdown } from '@/lib/markdown.mjs';
import { buildMetadata } from '@/lib/metadata';
import { SITE_URL } from '@/lib/site';

const entry = () => getEntry('docs', '');

export function generateMetadata() {
  const doc = entry();
  return buildMetadata({ title: doc.title, url: `${SITE_URL}${doc.slug}` });
}

export default async function DocsIndexPage() {
  const doc = entry();
  const { html, toc } = await renderMarkdown(doc.body);
  return <DocsArticle entry={doc} html={html} toc={toc} />;
}
