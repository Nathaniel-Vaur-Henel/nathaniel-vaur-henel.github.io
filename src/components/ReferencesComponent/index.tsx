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
    name: "Alban J.",
    url: null,
    urlLabel: null,
    recommandation: (
      <>
        <div>J'ai eu l'occasion de suivre des formations de Nathaniel il y a quelques mois en Java.</div>
        <div>Un formateur à la fois, jovial, à l'écoute, professionnel.</div>
        <div>Les sujets sont abordés avec une marge de progression adaptée.</div>
        <div>Les exercices sont intéressants et vivants.</div>
        <div>Le formateur est pétillant, un puits de science.</div>
        <div>Même en cas de difficultés des apprenants/élèves Il ne laisse pas les personnes sur le côté.</div>
        <div>Si vous avez le choix entre lui et quelqu'un d'autre, foncez ! Nathaniel est l'homme de la situation.</div>
      </>
    ),
  },
];

function Url({ url, urlLabel }) {
  if (url !== null) {
    return (
        <Link className="Link" to={url}>
          {urlLabel === null ? url : urlLabel}
        </Link>
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
      <div className="text--left padding-horiz--md">
        <h3 className={clsx(styles.name)}>{name}</h3>
        <p className={clsx(styles.recommandation)}>{recommandation}</p>
        <Url url={url} urlLabel={urlLabel} />
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
          {ReferencesList.map((props, idx) => (
            <Reference key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
