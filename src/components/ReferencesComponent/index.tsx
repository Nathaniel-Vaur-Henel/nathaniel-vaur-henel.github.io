import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";
import referencesData from "../../data/references.json";

type ReferenceItem = {
  name: string;
  url: string | null;
  urlLabel: string | null;
  iconifyName: string | null;
  recommandation: string[];
};

function Url({ url, urlLabel, iconifyName }: ReferenceItem) {
  if (url !== null) {
    let icon = null;
    if (iconifyName !== null) {
      icon = <Icon inline icon={iconifyName} height="1.5rem" />;
    }

    return (
      <div>
        <Link className={clsx("Link")} to={url}>
          {icon}
          {urlLabel === null && iconifyName === null ? url : urlLabel}
        </Link>
      </div>
    );
  }
  return null;
}

function Reference({
                     name,
                     url,
                     urlLabel,
                     iconifyName,
                     recommandation,
                   }: Readonly<ReferenceItem>) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--left padding-horiz--md">
        <h3 className={clsx(styles.name)}>{name}</h3>
        <div className={clsx(styles.recommandation)}>
          {recommandation.map((text, index) => (
            <div key={index}>{text}</div>
          ))}
        </div>
        <Url url={url} urlLabel={urlLabel} iconifyName={iconifyName} />
      </div>
    </div>
  );
}

export default function ReferencesComponent(): JSX.Element {
  return (
    <section>
      <div className={clsx("container", styles.border)}>
        <h1 className="text--center padding-horiz--md">Témoignages</h1>
        <div className={clsx("row", styles.references)}>
          {referencesData.map((props, idx) => (
            <Reference key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
