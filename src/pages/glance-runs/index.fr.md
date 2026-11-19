---
title: GlanceRuns
description: Un gestionnaire de runs en mosaïque pour les IDE IntelliJ Platform — surveillez visuellement vos commandes longues sans garder une console grand format en permanence sous les yeux.
---

import MarketplaceWidgetComponent from "@site/src/components/MarketplaceWidgetComponent";

🇬🇧 [Read in English](/glance-runs)

# GlanceRuns

### Un gestionnaire de runs en mosaïque pour les IDE IntelliJ Platform

[![Version](https://img.shields.io/jetbrains/plugin/v/36221.svg)](https://plugins.jetbrains.com/plugin/36221-glanceruns/) [![Téléchargements](https://img.shields.io/jetbrains/plugin/d/36221.svg)](https://plugins.jetbrains.com/plugin/36221-glanceruns/)

GlanceRuns transforme vos Run/Debug Configurations longues à exécuter en
une mosaïque de cards de statut, pour toutes les surveiller d'un coup
d'œil au lieu de garder une console grand format ouverte pour chacune.

:::note Ce que GlanceRuns n'est pas
GlanceRuns ne remplace pas le Run Manager natif, et ne copie jamais une
Run Configuration. Chaque card **référence** une Run Configuration
existante, résolue en direct à chaque lancement. Éditer ou renommer la
configuration d'origine dans le dialog natif "Run/Debug Configurations"
se répercute toujours sur sa card.
:::

## Pourquoi GlanceRuns

Un `Run`/`Debug` qui dure plus de quelques secondes finit toujours par
sortir du champ de vision : une console plein écran qui mange l'espace
d'édition "juste au cas où", plusieurs tâches longues (tests, build,
déploiement local...) qu'on ne distingue plus les unes des autres, ou un
aller-retour vers le Run Manager juste pour savoir si quelque chose
tourne encore.

GlanceRuns ajoute une surveillance permanente et visuelle par-dessus vos
Run/Debug Configurations existantes — rien de plus, rien de moins.

## Fonctionnalités clés

- **Promouvoir** une Run/Debug Configuration existante, ou en créer une
  nouvelle à la volée — déjà promue.
- **Réutiliser plusieurs fois la même configuration** côte à côte, chaque
  instance gardant son propre nom et ses propres valeurs de paramètres
  mémorisées.
- **Paramétrer** le champ `Program arguments` avec des placeholders
  `{{NOM}}` : GlanceRuns demande leurs valeurs avant chaque lancement et
  exécute un clone en mémoire — la configuration d'origine n'est jamais
  modifiée.
- Un **aperçu live des logs** sur chaque card (vraies couleurs ANSI), à un
  clic de la console native complète, du code de sortie, de la durée et
  de l'heure de fin.
- Un **statut toujours déduit du vrai code de sortie**, jamais deviné à
  partir du texte affiché dans les logs.
- **Glisser-déposer** pour réorganiser les cards, ou des boutons
  utilisables au clavier.
- Des dispositions **liste, 2 colonnes ou 3 colonnes**, mémorisées par
  projet.
- **Tout lancer d'un coup** — avec ou sans relancer ce qui tourne déjà.
- Une gestion sûre d'une Run Configuration **manquante ou renommée**, avec
  des garde-fous avant de fermer l'IDE tant que des runs sont actifs.

Le [guide d'utilisation](/glance-runs/user-guide.fr) complet détaille chaque
fonctionnalité.

## Compatibilité

GlanceRuns fonctionne avec l'IntelliJ Platform 2025.3.5 et les versions
compatibles — IntelliJ IDEA, et tout autre IDE construit sur la même
plateforme.

## Tarif et vie privée

GlanceRuns est actuellement **gratuit**. Il ne collecte aucune donnée
personnelle, n'envoie aucune télémétrie et ne fait aucun appel réseau de
son propre fait — il ne fait que lire et référencer des données déjà
présentes dans votre projet. Les conditions complètes, y compris la
possibilité d'introduire de futures fonctionnalités payantes (avec
préavis aux utilisateurs déjà actifs à ce moment-là), sont dans l'
[End User License Agreement](EULA).

## Le récupérer

<MarketplaceWidgetComponent pluginId={36221} />

Installez-le directement depuis votre IDE — **Settings \| Plugins \|
Marketplace**, en recherchant "GlanceRuns" — ou consultez sa fiche sur le
[JetBrains Marketplace](https://plugins.jetbrains.com/plugin/36221-glanceruns/).

[//]: # (Envie de connaître l'histoire derrière le plugin ? Lisez)

[//]: # ([l'article de lancement]&#40;/blog/glanceruns&#41; sur le blog, ou allez)

[//]: # (directement au [guide d'utilisation]&#40;/glance-runs/user-guide.fr&#41;.)
