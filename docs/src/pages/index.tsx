import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={siteConfig.title}
      description="Code Less, Make More"
    >
      <main>
        <div>
          <h1>{siteConfig.title}</h1>
          <p>{siteConfig.tagline}</p>
          <p>Welcome to OpenHands! This is a simple text content that we can expand later.</p>
        </div>
      </main>
    </Layout>
  );
}
