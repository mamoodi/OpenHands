import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import { Demo } from '../components/Demo/Demo';

function ProjectBadges() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '680px', margin: '0 auto' }}>
      <a href="https://github.com/All-Hands-AI/OpenHands/graphs/contributors"><img src="https://img.shields.io/github/contributors/All-Hands-AI/OpenHands?style=for-the-badge&color=blue" alt="Contributors" /></a>
      <a href="https://github.com/All-Hands-AI/OpenHands/stargazers"><img src="https://img.shields.io/github/stars/All-Hands-AI/OpenHands?style=for-the-badge&color=blue" alt="Stargazers" /></a>
      <a href="https://codecov.io/github/All-Hands-AI/OpenHands?branch=main"><img alt="CodeCov" src="https://img.shields.io/codecov/c/github/All-Hands-AI/OpenHands?style=for-the-badge&color=blue" /></a>
      <a href="https://github.com/All-Hands-AI/OpenHands/blob/main/LICENSE"><img src="https://img.shields.io/github/license/All-Hands-AI/OpenHands?style=for-the-badge&color=blue" alt="MIT License" /></a>
      <br/>
      <a href="https://join.slack.com/t/openhands-ai/shared_invite/zt-2ypg5jweb-d~6hObZDbXi_HEL8PDrbHg"><img src="https://img.shields.io/badge/Slack-Join%20Us-red?logo=slack&logoColor=white&style=for-the-badge" alt="Join our Slack community" /></a>
      <a href="https://discord.gg/ESHStjSjD4"><img src="https://img.shields.io/badge/Discord-Join%20Us-purple?logo=discord&logoColor=white&style=for-the-badge" alt="Join our Discord community" /></a>
      <a href="https://github.com/All-Hands-AI/OpenHands/blob/main/CREDITS.md"><img src="https://img.shields.io/badge/Project-Credits-blue?style=for-the-badge&color=FFE165&logo=github&logoColor=white" alt="Credits" /></a>
      <br/>
      <a href="https://docs.all-hands.dev/modules/usage/getting-started"><img src="https://img.shields.io/badge/Documentation-000?logo=googledocs&logoColor=FFE165&style=for-the-badge" alt="Check out the documentation" /></a>
      <a href="https://arxiv.org/abs/2407.16741"><img src="https://img.shields.io/badge/Paper%20on%20Arxiv-000?logoColor=FFE165&logo=arxiv&style=for-the-badge" alt="Paper on Arxiv" /></a>
      <a href="https://huggingface.co/spaces/OpenHands/evaluation"><img src="https://img.shields.io/badge/Benchmark%20score-000?logoColor=FFE165&logo=huggingface&style=for-the-badge" alt="Evaluation Benchmark Score" /></a>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={siteConfig.title}
      description={translate({
        id: 'homepage.description',
        message: 'Code Less, Make More',
      })}
    >
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <ProjectBadges />
        </div>

        <div className="margin-vert--lg">
          <Demo />
        </div>

        <div className="text--center margin-vert--lg">
          <Heading as="h2">
            <Translate>Most Popular Links</Translate>
          </Heading>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link to="/modules/usage/getting-started">
                How to run OpenHands
              </Link>
            </li>
            <li>
              <Link to="/modules/usage/best-practices">
                Best practices guide
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
