import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

type ReferenceItem = {
  name: string;
  url: string;
  urlLabel: string;
  recommandation: JSX.Element;
};

const ReferencesList: ReferenceItem[] = [
  {
    name: "E.",
    url: null,
    urlLabel: null,
    recommandation: (
      <>
        J'ai mieux compris en discutant 10 minutes avec Nathaniel qu'en 1 journée de cours.
      </>
    ),
  },
  {
    name: "Anne Onime",
    url: "https://www.google.com",
    urlLabel: "Google",
    recommandation: (
      <>Je n'étais personne, et grâce à Nathaniel, maintenant, je le sais !</>
    ),
  },
  {
    name: "Terry Diculle",
    url: "https://www.github.com",
    urlLabel: null,
    recommandation: (
      <>
        <b>Avant</b>... <i>après</i> !
      </>
    ),
  },
];

function Url({ url, urlLabel }) {
  console.log(url);
  if (url !== null) {
    return (
      <div className="{styles.buttons}">
        <Link className="button button--secondary button--lg" to={url}>
          {urlLabel === null ? url : urlLabel}
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
  recommandation,
}: Readonly<ReferenceItem>) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Link className="button button--lg" to={url}></Link>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{name}</h3>
        <p>{recommandation}</p>
        <Url url={url} urlLabel={urlLabel} />
      </div>
    </div>
  );
}

export default function ReferencesComponent(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={clsx("container", styles.border)}>
        <h1 className="text--center padding-horiz--md">Témoignages</h1>
        <div>Site en construction = faux témoignages...</div>
        <div className={clsx("row", styles.reference)}>
          {ReferencesList.map((props, idx) => (
            <Reference key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
