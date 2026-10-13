// Markdown -> HTML (+ "On this page" table of contents) for docs and blog
// posts. Replaces gatsby-transformer-remark and its sub-plugins:
//   gatsby-remark-prismjs        -> rehype-prism-plus (prism.css theme)
//   gatsby-remark-autolink-headers -> rehype-slug + rehype-autolink-headings
//   gatsby-remark-code-buttons   -> copy button added below, handled by CopyCode.js
//   gatsby-remark-custom-blocks  -> remarkCustomBlocks below
//   gatsby-remark-smartypants    -> remark-smartypants
import { toString } from 'hast-util-to-string';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkSmartypants from 'remark-smartypants';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

const CUSTOM_BLOCK = /^\[\[(info|warning|danger)(?:\s*\|\s*([^\]\n]*))?\]\]\s*\n\|\s?/;

/**
 * `[[warning]]` / `[[info | Title]]` followed by `| text` lines becomes
 * <div class="custom-block warning"> ... </div> (same markup and classes
 * gatsby-remark-custom-blocks produced; styled in globals.css).
 */
function remarkCustomBlocks() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      const first = node.children[0];
      if (!parent || !first || first.type !== 'text') return;
      const match = first.value.match(CUSTOM_BLOCK);
      if (!match) return;

      const [prefix, kind, title] = match;
      first.value = first.value.slice(prefix.length);
      node.children.forEach((child) => {
        if (child.type === 'text') child.value = child.value.replace(/\n\| ?/g, '\n');
      });

      const children = [];
      if (title && title.trim()) {
        children.push({
          type: 'paragraph',
          data: { hName: 'div', hProperties: { className: ['custom-block-heading'] } },
          children: [{ type: 'text', value: title.trim() }],
        });
      }
      children.push({
        type: 'paragraph',
        data: { hName: 'div', hProperties: { className: ['custom-block-body'] } },
        children: [{ type: 'paragraph', children: node.children }],
      });

      parent.children[index] = {
        type: 'customBlock',
        data: { hName: 'div', hProperties: { className: ['custom-block', kind] } },
        children,
      };
    });
  };
}

const HIGHLIGHT_DIRECTIVE = /^\s*(?:\/\/|#)\s*highlight-(start|end|next-line)\s*$/;
const HIGHLIGHT_TRAILING = /\s*(?:\/\/|#)\s*highlight-line\s*$/;

/**
 * gatsby-remark-prismjs line directives: `// highlight-start` ... `// highlight-end`,
 * `// highlight-next-line` and a trailing `// highlight-line`. The comment lines
 * are removed from the code and the lines they cover are returned (1-based) so
 * rehype-prism-plus can mark them with `highlight-line`.
 */
function extractHighlights(value) {
  const kept = [];
  const highlighted = [];
  let inRange = false;
  let nextLine = false;
  value.split('\n').forEach((line) => {
    const directive = line.match(HIGHLIGHT_DIRECTIVE);
    if (directive) {
      if (directive[1] === 'start') inRange = true;
      else if (directive[1] === 'end') inRange = false;
      else nextLine = true;
      return;
    }
    let text = line;
    let mark = inRange || nextLine;
    nextLine = false;
    if (HIGHLIGHT_TRAILING.test(text)) {
      text = text.replace(HIGHLIGHT_TRAILING, '');
      mark = true;
    }
    kept.push(text);
    if (mark) highlighted.push(kept.length);
  });
  return { value: kept.join('\n'), highlighted };
}

const toRanges = (lines) => {
  const ranges = [];
  lines.forEach((line) => {
    const last = ranges[ranges.length - 1];
    if (last && last[1] === line - 1) last[1] = line;
    else ranges.push([line, line]);
  });
  return ranges.map(([from, to]) => (from === to ? `${from}` : `${from}-${to}`)).join(',');
};

/**
 * Gatsby fence options such as ```jsx{numberLines: true} are parsed by remark
 * as lang "jsx{numberLines:" + meta "true}". Normalize them to a plain
 * language and rehype-prism-plus' `showLineNumbers` meta, and translate the
 * highlight directives above into its `{1,3-4}` line ranges.
 */
function remarkCodeMeta() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      const flags = [];
      if (node.lang && node.lang.includes('{')) {
        const raw = [node.lang, node.meta].filter(Boolean).join(' ');
        const match = raw.match(/^([^{\s]*)\{([^}]*)\}\s*(.*)$/);
        if (match) {
          const [, lang, options, rest] = match;
          node.lang = lang || null;
          node.meta = rest || null;
          if (/numberLines\s*:\s*true/.test(options)) flags.push('showLineNumbers');
        }
      }
      if (/highlight-(start|end|next-line|line)/.test(node.value)) {
        const { value, highlighted } = extractHighlights(node.value);
        node.value = value;
        if (highlighted.length) flags.push(`{${toRanges(highlighted)}}`);
      }
      if (flags.length) node.meta = [...flags, node.meta].filter(Boolean).join(' ');
    });
  };
}

const COPY_BUTTON = {
  type: 'element',
  tagName: 'button',
  properties: { type: 'button', className: ['code-copy-button'], dataCopyCode: '' },
  children: [{ type: 'text', value: 'Copy' }],
};

/** Wraps every code block in .code-block and adds the Copy button. */
function rehypeCodeBlocks() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre' || !parent) return;
      if (parent.type === 'element' && parent.properties?.className?.includes('code-block')) return;
      parent.children[index] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['code-block'] },
        children: [structuredClone(COPY_BUTTON), node],
      };
      return 'skip';
    });
  };
}

/** Inline code gets Gatsby's `language-text` class (used by the custom-block styles). */
function rehypeInlineCode() {
  return (tree) => {
    visit(tree, 'element', (node, _index, parent) => {
      if (node.tagName !== 'code' || parent?.tagName === 'pre') return;
      node.properties = { ...node.properties, className: ['language-text'] };
    });
  };
}

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function renderToc(headings) {
  if (!headings.length) return '';
  const root = { depth: 0, children: [] };
  const stack = [root];
  headings.forEach((heading) => {
    const item = { ...heading, children: [] };
    while (stack[stack.length - 1].depth >= heading.depth) stack.pop();
    stack[stack.length - 1].children.push(item);
    stack.push(item);
  });
  const list = (items) =>
    `<ul>${items
      .map(
        (item) =>
          `<li><a href="#${escapeHtml(item.id)}">${escapeHtml(item.text)}</a>${
            item.children.length ? list(item.children) : ''
          }</li>`
      )
      .join('')}</ul>`;
  return list(root.children);
}

/** Collects the headings (after ids are assigned) for the "On this page" list. */
function rehypeCollectToc(headings) {
  return () => (tree) => {
    visit(tree, 'element', (node) => {
      if (!/^h[1-6]$/.test(node.tagName) || !node.properties?.id) return;
      headings.push({
        depth: Number(node.tagName.slice(1)),
        id: String(node.properties.id),
        text: toString(node),
      });
    });
  };
}

const anchorIcon = {
  type: 'element',
  tagName: 'svg',
  properties: { ariaHidden: 'true', height: 16, width: 16, viewBox: '0 0 16 16', version: '1.1' },
  children: [
    {
      type: 'element',
      tagName: 'path',
      properties: {
        fillRule: 'evenodd',
        d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.45 6 13 6z',
      },
      children: [],
    },
  ],
};

export async function renderMarkdown(markdown) {
  const headings = [];
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkCustomBlocks)
    .use(remarkSmartypants)
    .use(remarkCodeMeta)
    .use(remarkRehype, { allowDangerousHtml: true })
    // Highlight before rehype-raw: it re-parses the tree and drops the fence
    // meta (`showLineNumbers`) that rehype-prism-plus reads.
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeCollectToc(headings))
    .use(rehypeAutolinkHeadings, {
      behavior: 'prepend',
      properties: { className: ['anchor', 'before'], ariaLabel: 'Permalink' },
      content: anchorIcon,
    })
    .use(rehypeCodeBlocks)
    .use(rehypeInlineCode)
    .use(rehypeStringify)
    .process(markdown);

  return { html: String(file), toc: renderToc(headings) };
}
