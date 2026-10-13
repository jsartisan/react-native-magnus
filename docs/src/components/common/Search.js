'use client';

import { useEffect, useRef, useState } from 'react';

import SearchResults from './SearchResults';

// Algolia search over the "documentation" index, queried through Algolia's
// REST API (replaces react-instantsearch + algoliasearch/lite). Needs
// NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY (a search-only key); without it the box
// renders but returns no results.
const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '1Q4SUO0GGL';
const SEARCH_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '';
const INDEX_NAME = 'documentation';
const HITS_PER_PAGE = 8;

async function queryAlgolia(query, signal) {
  const response = await fetch(
    `https://${APP_ID}-dsn.algolia.net/1/indexes/${INDEX_NAME}/query`,
    {
      method: 'POST',
      signal,
      headers: {
        'X-Algolia-Application-Id': APP_ID,
        'X-Algolia-API-Key': SEARCH_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, hitsPerPage: HITS_PER_PAGE }),
    }
  );
  if (!response.ok) throw new Error(`Algolia responded ${response.status}`);
  return response.json();
}

export default function Search() {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState(null);
  const [active, setActive] = useState(true);
  const boxRef = useRef(null);

  // Close the results when clicking anywhere else on the page.
  useEffect(() => {
    const close = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setActive(false);
      }
    };
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);

  // Close the results after navigating to a hit.
  const onResultsClick = () => setActive(false);

  useEffect(() => {
    if (!query.trim()) {
      setHits(null);
      return undefined;
    }
    const controller = new AbortController();
    const timer = setTimeout(() => {
      queryAlgolia(query, controller.signal)
        .then((result) => setHits(result.hits || []))
        .catch((error) => {
          if (error.name !== 'AbortError') setHits([]);
        });
    }, 150);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="flex-grow search-box" ref={boxRef}>
      <div className="relative hidden md:block">
        <div className="ais-SearchBox">
          <form role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search the documentation"
              autoComplete="off"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(true);
              }}
            />
            <button type="submit" className="ais-SearchBox-submit" title="Submit the search query">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 40 40"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
        {active && query.trim() && hits && (
          <div
            className="search-results w-full absolute top-0 mt-12 mx-5 border border-gray-300 overflow-y-scroll bg-white"
            style={{ height: '30rem' }}
            onClick={onResultsClick}
          >
            {hits.length > 0 ? (
              hits.map((hit) => <SearchResults key={hit.objectID} hit={hit} />)
            ) : (
              <div className="text-center mt-20 text-gray-600">
                No results have been found for {query}.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
