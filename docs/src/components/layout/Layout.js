import Footer from './Footer';

// `type` is 'docs' (no footer), 'blogs' or undefined (home, blog list, 404).
// The class matches the wrappers the stylesheet targets (.docs .docs__content).
export default function Layout({ children, type }) {
  return (
    <div className={`root antialiased font-nunito${type ? ` ${type}` : ''}`}>
      <div style={{ paddingTop: 'calc(70px)' }}>{children}</div>
      {type === 'docs' ? null : <Footer />}
    </div>
  );
}
