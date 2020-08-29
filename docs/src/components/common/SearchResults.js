import React from "react";
import { Link } from "gatsby";

const SearchResults = ({ hit }) => {
  return (
    <Link
      to={hit.slug}
      className="px-5 py-3 border-b border-gray-200 block text-gray-700 hover:bg-gray-200"
    >
      <h3>{hit.title}</h3>
      <div>
        {hit.type === "docs" ? (
          <span className="rounded-md text-sm bg-purple-700 text-white px-2">
            docs
          </span>
        ) : (
          <span className="rounded-md text-sm bg-yellow-500 text-yellow-800 px-2">
            blog
          </span>
        )}
        <span className="inline-block ml-3 text-gray-600 text-sm">
          {hit.slug}
        </span>
      </div>
      <p className="text-sm mt-3">{hit.description}</p>
    </Link>
  );
};

export default SearchResults;
