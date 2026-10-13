import DocsFrame from '@/components/layout/DocsFrame';
import Layout from '@/components/layout/Layout';

export default function DocsLayout({ children }) {
  return (
    <Layout type="docs">
      <DocsFrame>{children}</DocsFrame>
    </Layout>
  );
}
