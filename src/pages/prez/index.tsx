import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div>
          <div>
            Liste des présentations :
            <p>
              <Link
                className="button button--lg"
                target="_blank"
                to="/prez/prezA.html"
              >
                prezA
              </Link>
            </p>
            <p>
              <Link
                className="button button--lg"
                target="_blank"
                to="/prez/prezB.html"
              >
                prezB
              </Link>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
