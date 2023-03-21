# Information à propos de l'écriture

## Globale

### Entête / navbar

Tout est dans [docusaurus.config.js](docusaurus.config.js) `createConfig()` -> `themeConfig` -> `navbar` :

- Le titre est dans `title`.
- Le logo est dans `logo` -> `src`.
- Chaque élément suivant est défini par un élément de `items`.
  - _type : défini le type et ne devrait pas être modifié s'il est présent._
  - position : défini si l'élément est à droite avec `right` ou à gauche avec `left`.
  - label : le texte afficher
  - to : définit l'URL _relative_.
  - href : une URL externe. Ne doit donc pas être utilisé en même temps que `to`.

### Pied de page

Tout est dans [docusaurus.config.js](docusaurus.config.js) `createConfig()` -> `themeConfig` -> `footer` :

- _theme : ne devrait pas être changé_.
- Chaque élément de `links` est une colonne :
  - title : est le titre de la colonne
  - items : les liens, chaque ligne est un objet :
    - label : pour le texte affiché
    - href : pour l'URL
- copyright : affiche la dernière ligne, celle où l'on trouve généralement le copyright.

## Page d'accueil

### Bloc de titre

- Titre : dans [docusaurus.config.js](docusaurus.config.js) -> `createConfig()` -> `title`.
- Sous-titre : dans [docusaurus.config.js](docusaurus.config.js) -> `createConfig()` -> `tagline`.
- Le texte du bouton de Newsletters : dans [docusaurus.config.js](docusaurus.config.js) -> `createConfig()` -> `customFields` -> `callToArms`.
  - la fenêtre de la newsletter est géré sur le site [Brevo](https://www.brevo.com/fr/)

### Description des sections

La description des différentes sections : dans [HomepageFeatures/index.tsx](src/components/HomepageFeatures/index.tsx) -> `const FeatureList: FeatureItem[] = [...]`. Chaque objet ajoute un élément à la page. Chaque objet est décrit par :

- title : le titre de l'élément.
- Svg : contient le chemin vers le fichier SVG.
- description: un texte descriptif qui accepte les balises HTML.
- to: url relative vers la section.
- toLabel: label du bouton.

### Description de l'auteur du site

- Le titre : dans [docusaurus.config.js](docusaurus.config.js) -> `createConfig()` -> `customFields` -> `me` -> `title`.
- La description : dans [docusaurus.config.js](docusaurus.config.js) -> `createConfig()` -> `customFields` -> `me` -> `description`. Le texte accepte les balises HTML.

### Témoignages

Les différents témoignages : dans [ReferencesComponent/index.tsx](src/components/ReferencesComponent/index.tsx) -> `const ReferencesList: ReferenceItem[] = [...]`. Chaque objet ajoute un témoignage à la page. Chaque témoignage est décrit par :

- name : le nom du témoin.
- url : une url pour trouver le témoin qui peut être `null` s'il n'y a pas de lien.
- urlLabel : un texte à afficher sur le bouton du lien le cas échéant. Si `null` alors ce sera l'adresse du lien qui s'affichera.
- recommandation: contient le texte du témoignage, accepte les balises HTML.

## Sections

### Devento

### Dév Workout
