import React from 'react';
import { Link } from 'gatsby';

const SearchResults = ({ hit }) => {
  const renderType = (type) => {
    switch (type) {
      case 'docs':
        return (
          <span className="rounded-md text-sm bg-purple-700 text-white px-2">
            docs
          </span>
        );
      case 'snippets':
        return (
          <span className="rounded-md text-sm bg-green-300 text-green-800 px-2">
            snippets
          </span>
        );
      default:
        return (
          <span className="rounded-md text-sm bg-yellow-500 text-yellow-800 px-2">
            blog
          </span>
        );
    }
  };
  return (
    <Link
      to={hit.slug}
      className="px-5 py-3 border-b border-gray-200 block text-gray-700 hover:bg-gray-200"
    >
      <h3>{hit.title}</h3>
      <div>
        {renderType(hit.type)}
        <span className="inline-block ml-3 text-gray-600 text-sm">
          {hit.slug}
        </span>
      </div>
      <p className="text-sm mt-3">{hit.description}</p>
    </Link>
  );
};

export default SearchResults;
