import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import IconExternalLink from "@docusaurus/claTheme/";
import styles from "./styles.module.css";
import { Icon } from '@iconify/react'; // Import the entire Iconify library.

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
    iconifyName: null,
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
  {
    name: "Raphaël Poiron",
    url: "https://www.linkedin.com/in/raphael-poiron/",
    urlLabel: null,
    iconifyName: "mdi:linkedin",
    recommandation: (
      <>
        <div>J'ai été accompagné par Nathaniel au sein de mon entreprise pendant 9 mois et ce dés mon arrivée dans celle-ci. Je peux dire que mon intégration n'aurait pas été la même et que je n'aurais peut-être même pas continué le métier de développeur sans lui car dans les moments de doutes il a toujours été là pour me remonter le moral, m'expliquer patiemment les choses que je ne comprenais ou tout simplement me redonner un petit coup de boost. J'ai donc pris la décision de signer définitivement un peu grâce à lui.</div>
        <div>Nathaniel est d'une gentillesse incroyable, d'une patience à toute épreuve et il a cette envie de transmettre ses connaissances aux autres qui en font un super formateur. Une vraie mine d'or sur Java ou Spring mais pas que.</div>
      </>
    ),
  },
  {
    name: "Mustapha Dehaimani",
    url: "https://www.linkedin.com/in/mustapha-dehaimani-829a6418b/",
    urlLabel: null,
    iconifyName: "mdi:linkedin",
    recommandation: (
      <>
        <div>J'ai eu la chance de travailler avec Nathaniel à e.SNCF-Solutions.</div>
        <div>Sa compétence technique est inégalée, et il maîtrise parfaitement les subtilités du développement Java. Il transmet ses connaissances et son expérience avec clarté et passion.</div>
        <div>Il a une aptitude remarquable pour expliquer des concepts complexes de manière accessible et engageante.</div>
        <div>Son dévouement et son professionnalisme sont inspirants.</div>
        <div>Collaborer avec Nathaniel a été une expérience extrêmement enrichissante, tant sur le plan professionnel que personnel.</div>
      </>
    ),
  },
];

function Url({ url, urlLabel, iconifyName }) {
  if (url !== null) {
    let icon = null;
    if( iconifyName !== null) {
        icon =  <Icon inline icon={iconifyName} height="1.5rem" />
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
        <p className={clsx(styles.recommandation)}>{recommandation}</p>
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
          {ReferencesList.map((props, idx) => (
            <Reference key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
