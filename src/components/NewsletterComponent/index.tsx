import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Link from "@docusaurus/Link";
import Popup from "reactjs-popup";
import "./popup.css";

export default function NewsletterComponent() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Popup
      trigger={
        <Link className="button button--secondary button--lg wrap-words">
          {siteConfig.customFields.callToArms}
        </Link>
      }
      position="center center"
      className="my-popup"
    >
      <iframe
        width="100%"
        height="100%"
        src="https://de5bf6c2.sibforms.com/serve/MUIFANhBhihdr81i0BpyvhZSryiFXQLU7J2o8Ra1YuZbzjBuwl54vd9NdCmr8m2qz5l1_ZLLvN_ZWv91dkpaGwusDwrPTTV0BlQEM_ZU9VYoLp-zsfOq1YgQqJxXkKuT3OnUa7izBVg8NyElw5csF6aUQ37DS3dlSvfALQ3UxjyiGw1OZB4sJNjyLd_cZBQY98LdIQVfr1nGZcZo"
        frameBorder="0"
        scrolling="auto"
        allowfullscreen
      ></iframe>
    </Popup>
  );
}
