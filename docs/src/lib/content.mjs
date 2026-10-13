// Reads the Markdown in docs/content at build time. Replaces
// gatsby-source-filesystem + gatsby-transformer-remark (frontmatter + slugs).
//
//   content/docs/index.md              -> /docs/            (name '')
//   content/docs/button/index.md       -> /docs/button/     (name 'button')
//   content/docs/border-radius.md      -> /docs/border-radius/
//   content/blogs/<post>/index.md      -> /blogs/<post>/
import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

const TYPES = ['docs', 'blogs'];
const contentDir = path.join(process.cwd(), 'content');

let cache;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((dirent) => {
    const full = path.join(dir, dirent.name);
    if (dirent.isDirectory()) return walk(full);
    return dirent.name.endsWith('.md') ? [full] : [];
  });
}

function toEntry(type, file) {
  const relative = path.relative(path.join(contentDir, type), file).split(path.sep);
  const last = relative.pop().replace(/\.md$/, '');
  const segments = last === 'index' ? relative : [...relative, last];
  const { data, content } = matter(fs.readFileSync(file, 'utf8'));
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : data.date;

  return {
    type,
    name: segments.join('/'),
    slug: `/${[type, ...segments].join('/')}/`,
    title: data.title || '',
    description: data.description || '',
    date: date ? String(date) : '',
    featuredImg: data.featuredImg || '',
    // Path of the Markdown file relative to docs/content (for "Edit on Github").
    sourcePath: path.relative(contentDir, file).split(path.sep).join('/'),
    body: content,
  };
}

function load() {
  if (!cache) {
    cache = TYPES.flatMap((type) =>
      walk(path.join(contentDir, type)).map((file) => toEntry(type, file))
    ).sort((a, b) => {
      // Newest first (blog posts); undated pages keep a stable path order.
      if (a.date !== b.date) return a.date < b.date ? 1 : -1;
      return a.slug < b.slug ? -1 : 1;
    });
  }
  return cache;
}

export const getAllEntries = () => load();
export const getEntries = (type) => load().filter((entry) => entry.type === type);
export const getEntry = (type, name) =>
  load().find((entry) => entry.type === type && entry.name === name);
