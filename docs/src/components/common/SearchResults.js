import Link from 'next/link';

const TypeBadge = ({ type }) =>
  type === 'docs' ? (
    <span className="px-2 text-sm text-white bg-purple-700 rounded-md">docs</span>
  ) : (
    <span className="px-2 text-sm text-yellow-800 bg-yellow-500 rounded-md">blog</span>
  );

const SearchResults = ({ hit }) => (
  <Link
    href={hit.slug}
    className="block px-5 py-3 text-gray-700 border-b border-gray-200 hover:bg-gray-200"
  >
    <h3>{hit.title}</h3>
    <div>
      <TypeBadge type={hit.type} />
      <span className="inline-block ml-3 text-sm text-gray-600">{hit.slug}</span>
    </div>
    <p className="mt-3 text-sm">{hit.description}</p>
  </Link>
);

export default SearchResults;
