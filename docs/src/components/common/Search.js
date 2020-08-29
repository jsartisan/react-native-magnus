import algoliasearch from "algoliasearch/lite";
import React, { useEffect, useState } from "react";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
  Configure,
  connectStateResults,
} from "react-instantsearch-dom";
import PropTypes from "prop-types";

import SearchResults from "./SearchResults";

const searchClient = algoliasearch(
  "1Q4SUO0GGL",
  "d80227190cab4817278183df2ddc51e9"
);

const Results = connectStateResults(
  ({ searchState, searchResults, children }) => {
    const searchInput = document.querySelector(".ais-SearchBox-input");
    if (!searchState?.query?.length) return false;

    return (
      <div
        className="search-results w-full absolute top-0 mt-12 mx-5 border border-gray-300 overflow-y-scroll bg-white"
        style={{ height: "30rem" }}
      >
        {searchResults && searchResults.nbHits !== 0 ? (
          children
        ) : (
          <div className="text-center mt-20 text-gray-600">
            No results have been found for {searchState.query}.
          </div>
        )}
      </div>
    );
  }
);

const Search = () => {
  const [active, setActive] = useState(true);
  const emptySearchBox = () => {
    setActive(false);
  };

  useEffect(() => {
    const searchBox = document.querySelector(".search-box");

    window.addEventListener("click", emptySearchBox);
  }, []);

  return (
    <InstantSearch indexName="documentation" searchClient={searchClient}>
      <div className="flex-grow search-box">
        <div className="relative hidden md:block">
          <SearchBox onChange={() => setActive(true)} />
          <Configure hitsPerPage={8} />
          {active && (
            <Results>
              <Hits hitComponent={SearchResults} />
            </Results>
          )}
        </div>
      </div>
    </InstantSearch>
  );
};

function Hit(props) {
  return (
    <div>
      <img src={props.hit.image} align="left" alt={props.hit.name} />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">${props.hit.price}</div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Search;
