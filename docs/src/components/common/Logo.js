import Link from 'next/link';

const Logo = ({ hasText = false, hasImage = true }) => (
  <h1 className="c-logo">
    <Link href="/" className="flex items-center">
      {hasImage && <img style={{ height: 25 }} src="/images/logo.svg" alt="Magnus" />}
      {hasText && (
        <div className=" font-nunito text-2xl font-semibold ml-3 hidden md:block">
          magnus
        </div>
      )}
    </Link>
  </h1>
);

export default Logo;
