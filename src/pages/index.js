import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
    <header className={clsx('hero hero--primary hero-bg', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          1Block.AI <br/>
          An Open Source Cloud-Native LLMOps Platform
        </Heading>
        <p className="hero-subtitle ob-subtitle">
            1Block.AI is an open source, cloud-native LLMOps platform that empowers LLM & generative AI applications innovation. It was built on the
            top of cutting-edge technologies like Kubernetes, Ray.io, LangChain, etc., and designed to be cloud and ML framework agnostic.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg button-primary-hold"
            to="/docs/intro">
            Stay Tuned
          </Link>
        </div>
      </div>
    </header>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - An Cloud-Native LLMOps Platform`}
      description="An Unified Open Source Cloud-Native LLMOps Platform">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
