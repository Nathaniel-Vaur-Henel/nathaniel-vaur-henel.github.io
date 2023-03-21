import React from "react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import NewsletterComponent from "@site/src/components/NewsletterComponent";

import styles from "./styles.module.css";

function StringToHtml({ text }) {
  const [html, setHtml] = useState<string>("");
  useEffect(() => {
    setHtml(text);
  }, [html]);
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

export default function MeComponent() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={clsx("container", styles.border)}>
      <div className="container">
        <h1 className="text--center padding-horiz--md ">
          {siteConfig.customFields.me.title}
        </h1>

        <div className={clsx(styles.me)}>
        <p>
          <StringToHtml text={siteConfig.customFields.me.description} />
        </p>
          <NewsletterComponent />
        </div>
      </div>
    </div>
  );
}
