import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { HomepageHeader } from '../components/HomepageHeader/HomepageHeader';
import { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export function Header({ title, summary }): JSX.Element {
  return (
    <div>
      <h1>{title}</h1>
      <h2 style={{ fontSize: '3rem' }}>{summary}</h2>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={translate({
        id: 'homepage.description',
        message: 'Code Less, Make More',
      })}
    >
      <HomepageHeader />
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Most Popular Links</p>
        <Link to="/modules/usage/getting-started">Running OpenHands</Link>
      </div>
    </Layout>
  );
}
