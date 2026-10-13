import Canonical from '@/components/common/Canonical';
import { GITHUB_REPO } from '@/lib/site';

// Content column + "On this page" column of a docs page (the sidebar and
// header come from DocsFrame in app/docs/layout.js).
export default function DocsArticle({ entry, html, toc }) {
  return (
    <>
      <Canonical slug={entry.slug} />
      <div className="py-4 my-3 w-full md:w-8/12 md:pl-10 docs__content">
        <h1 className="text-2xl font-bold md:mx-0 md:px-0">{entry.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} className="mt-4 c-docs" />
        <div className="c-docs__toc" />
      </div>
      <div className="md:w-2/12 relative text-right">
        <div className="absolute text-right top-0">
          <div
            className="table-of-contents  min-w-200 fixed mt-5 hidden md:block"
            style={{ height: 'calc(100vh - 70px)', top: '70px' }}
          >
            <div className="mt-3 mb-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`${GITHUB_REPO}/blob/master/docs/content/${entry.sourcePath}`}
                className="text-gray-700 text-sm flex justify-end items-center"
              >
                <i className="icon-github text-md text-gray-600" />
                <span className="inline-block ml-3">Edit on Github</span>
              </a>
            </div>

            {toc && (
              <>
                <h3 className="text-gray-800 font-bold uppercase text-sm mt-5">
                  On this page
                </h3>
                <div dangerouslySetInnerHTML={{ __html: toc }} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
