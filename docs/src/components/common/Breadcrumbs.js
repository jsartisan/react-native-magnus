import Link from 'next/link';

export default function Breadcrumbs({ breadcrumbs = [] }) {
  return (
    <div className="pb-5 flex items-center">
      <Link href="/">
        <i className="opacity-25 hover:opacity-50 icon-home" />
      </Link>
      {breadcrumbs.map((breadcrumb) => (
        <div
          key={breadcrumb.text}
          className="flex items-center"
          style={{ height: 15 }}
        >
          <span className="inline ml-3 mr-2 text-gray-400">/</span>
          {breadcrumb.link ? (
            <Link href={breadcrumb.link}>
              <span className="text-gray-800">{breadcrumb.text}</span>
            </Link>
          ) : (
            <span className="text-gray-800">{breadcrumb.text}</span>
          )}
        </div>
      ))}
    </div>
  );
}
