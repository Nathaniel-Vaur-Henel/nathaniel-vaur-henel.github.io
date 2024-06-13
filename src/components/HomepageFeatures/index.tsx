import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import MeComponent from "@site/src/components/MeComponent";
import ReferencesComponent from "@site/src/components/ReferencesComponent";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  to: string;
  toLabel: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Devento, le memento du Dév",
    Svg: require("@site/static/img/brain-server.svg").default,
    description: (
      <>
        Tu as besoin d'un concentré d'infos sur un sujet dév pour doper ta
        productivité ? Tu as donc besoin d'un devento. Un devento ? Késako ?
        C'est comme un mémento, mais pour le dev... Je t'ai donc préparé des
        descriptifs techniques courts assortis de leurs fiches aide-mémoire.
      </>
    ),
    to: "/devento",
    toLabel: "Je veux trouver un Devento",
  },
  {
    title: "Dev Workout",
    Svg: require("@site/static/img/brain-training.svg").default,
    description: (
      <>
        Tu veux progresser ? Même en dev, la clé, c'est la régularité. Rejoins
        ma salle d'entrainement sur Discord et fait avancer tes projets grâce à
        la communauté. Pas de projet ? Pas de problème. Je t'en ai préparé des
        sympas pour que toi aussi tu puisses faire transpirer ton cerveau.
      </>
    ),
    to: "/dev-workout",
    toLabel: "C'est parti pour mon Dév Workout",
  },
  {
    title: "Blog",
    Svg: require("@site/static/img/blog_warm_water.svg").default,
    description: (
      <>
        Envie d'une pause café ? Thé ? Eau chaude ? Froide !?! Bref... Viens par
        ici, j'ai des choses à raconter. En vingt ans de dev, j'en ai vu des
        vertes, des pas mures, et des intéressantes aussi. Comme la fois où...
      </>
    ),
    to: "/blog",
    toLabel: "J'aimerai bien que tu me racontes...",
  },
];

function Feature({
  title,
  Svg,
  description,
  to,
  toLabel,
}: Readonly<FeatureItem>) {
  return (
    <div className={clsx("col col--4", styles.featureCard)}>
      <div className="">
        <Link className="button button--lg" to={useBaseUrl(to)}>
          <Svg className={styles.featureSvg} role="img" alt={title} />
        </Link>
        <h3>{title}</h3>
      </div>
      <div className="padding-horiz--md">
        
        <p>{description}</p>
      </div>
      <div>
        <Link
          className="wrapWords button button--secondary button--lg"
          to={useBaseUrl(to)}
        >
          {toLabel}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <ReferencesComponent />
        <MeComponent />
      </div>
    </section>
  );
}
