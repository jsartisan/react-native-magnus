import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <Header />
      <div className="text-center pt-40" style={{ minHeight: '500px' }}>
        <h1 className="text-gray-900 font-bold text-3xl">404</h1>
        <p className="text-gray-600">The page you are looking does not exist.</p>
      </div>
    </Layout>
  );
}
