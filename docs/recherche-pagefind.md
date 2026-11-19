# Remplacer Algolia DocSearch par Pagefind

Statut : implémenté. Validé en local avec `pnpm build && pnpm serve` (voir la section « Réalisation » en fin de document pour les écarts avec le plan initial).

## Contexte

- La recherche du site repose sur Algolia DocSearch (`themeConfig.algolia` dans `docusaurus.config.js`, item `{ type: "search" }` dans la navbar).
- Le bump Docusaurus 3.7 vers 3.10 a fait planter le widget Algolia au build. La cause était des instances dupliquées de `@docusaurus/theme-common` (variations peer pnpm), corrigée par `pnpm dedupe`. Cela montre la fragilité d'un composant dépendant d'un service et d'un thème externes.
- Pagefind est une recherche 100 % statique : l'index est généré au build, sans compte, sans clé API, sans service externe.

### Pourquoi une intégration maison

Les deux wrappers Docusaurus existants sont abandonnés :

| Paquet | État |
|---|---|
| `docusaurus-pagefind-search` | marqué `DEPRECATED` sur npm, dépôt GitLab archivé |
| `@getcanary/docusaurus-theme-search-pagefind` | dernier commit en novembre 2024, 2 ans d'inactivité |

Aucun des deux ne documente le support de plusieurs instances du plugin docs, ce qui est le cas de ce site. On utilise donc Pagefind directement (CLI et Component UI officiels), sans paquet tiers.

## Objectifs

- Recherche plein texte sur tout le site : `devento`, `dev-workout`, `crafters`, `blog`, `src/pages`.
- Zéro dépendance à un service externe.
- Interface de recherche en modale, ouverte par un bouton dans la navbar et par Ctrl/Cmd+K.
- Cohérence visuelle avec le thème clair et sombre du site.
- Aucun changement du workflow de CI : `pnpm build` reste la commande unique.

## Non-objectifs (v1)

- Filtres par section (nécessiterait des `data-pagefind-filter` dans le contenu indexé).
- Recherche en mode dev (`pnpm start`) : l'index n'existe qu'après un build.
- Réécriture du rendu des résultats pour retirer l'extension `.html` des URLs (voir les points à vérifier).

## Spécification

### Indexation

- Outil : `pagefind` (v1.6.0 au moment de l'écriture), en devDependency.
- Lancé après `docusaurus build` sur le dossier `build`. La sortie est `build/pagefind/`.
- Script : `"build": "docusaurus build && node .build/index-search.mjs"`. La CI appelle déjà `pnpm build` et n'a rien à changer.
- `.build/index-search.mjs` utilise l'API Node de Pagefind (`createIndex`, `addHTMLFile`, `writeFiles`) plutôt que la CLI, ce qui permet de choisir page par page ce qui est indexé :
  - `rootSelector: "main"` : n'indexe que le contenu de `<main>`, ce qui exclut la navbar, le footer et la sidebar (`<aside>`, hors `<main>`). Évite d'ajouter `data-pagefind-body` à chaque type de page, qui exclurait les pages non marquées.
  - `excludeSelectors` : tables des matières (`.theme-doc-toc-desktop`, `.theme-doc-toc-mobile`), fil d'Ariane et pagination. `nav` et `footer` sont exclus automatiquement par Pagefind.
  - `forceLanguage: "fr"`.
  - Pages ignorées : repérées par les classes que Docusaurus pose sur `<html>` (404, liste du blog, tags, auteurs, tags de docs) et par le chemin `blog/archive.html`.
  - URL de chaque page fournie explicitement (`url`), sans extension `.html` et sans `index`, comme les URLs canoniques du site.

### Interface

- Fichier `src/theme/SearchBar/index.tsx` : remplace le composant de recherche utilisé par l'item `{ type: "search" }` de la navbar.
- Utilise le Component UI de Pagefind :
  - `<pagefind-modal-trigger>` : bouton de déclenchement, raccourci `mod+k` par défaut.
  - `<pagefind-modal>` : la modale (Échap ferme).
- Chargement de `/pagefind/pagefind-component-ui.js` (module) et `/pagefind/pagefind-component-ui.css` depuis le build. La version de l'UI reste ainsi alignée sur celle de l'index.
- Chargement côté client uniquement (`BrowserOnly` ou `useEffect`), car `customElements` et `window` n'existent pas au rendu serveur.
- Chemins construits avec `useBaseUrl('/pagefind/')` pour rester corrects si `baseUrl` change.
- Les éléments custom sont typés via `React.ElementType` (pas d'augmentation de `JSX.IntrinsicElements`, les types React n'étant pas résolus à la racine du projet).
- Sous le seuil mobile de Docusaurus (`useWindowSize() === "mobile"`), le bouton passe en `compact` et masque le raccourci clavier (`hide-shortcut`), sinon il écrase le titre dans la navbar.

### Thème

- Le composant ne reconnaît que `data-pf-theme="dark"` et ignore le `data-theme` de Docusaurus. `SearchBar` recopie donc le mode de couleur (`useColorMode`) dans `data-pf-theme` sur `<html>`, ce qui active la palette sombre native du composant (icônes comprises).
- Les styles du site ne traversent pas les composants (`all: initial`). `src/css/custom.css` mappe seulement la police et la couleur de focus (`--pf-font`, `--pf-outline-focus`) sur Infima, avec le sélecteur `html:root` pour passer devant le `:root` du CSS injecté au runtime.

### Suppression d'Algolia

- Retirer le bloc `themeConfig.algolia` de `docusaurus.config.js`. Le preset classic ne charge `@docusaurus/theme-search-algolia` que si ce bloc existe.
- La clé API reste dans l'historique git. Ce n'est a priori pas sensible (clé de recherche publique), mais à noter.

## Plan

1. **Dépendance.** `pnpm add -D pagefind`. Vérifier que pnpm n'exige pas d'entrée dans `allowBuilds` et que les binaires de plateforme (Windows en local, Linux en CI) sont bien résolus via le lockfile.
2. **Indexation.** Créer `.build/index-search.mjs`, modifier le script `build`, lancer `pnpm build`, vérifier `build/pagefind/` et le nombre de pages indexées. Inspecter l'index pour confirmer que `devento`, `dev-workout`, `crafters`, `blog` et `src/pages` sont couverts.
3. **Pages parasites.** Exclure archive, tags, auteurs et 404, puis vérifier qu'ils ont disparu de l'index.
4. **Composant.** Créer `src/theme/SearchBar/index.tsx` et les déclarations de types.
5. **Thème.** Ajouter le mapping `--pf-*` dans `src/css/custom.css`, tester en clair et en sombre.
6. **Retrait d'Algolia.** Supprimer `themeConfig.algolia`.
7. **Validation.** `pnpm build && pnpm serve`, puis test dans le navigateur : ouverture par le bouton et par Ctrl/Cmd+K, recherche sur un terme présent dans chaque section, clic sur un résultat, thème clair et sombre, rendu mobile.
8. **Documentation.** Mettre à jour `CLAUDE.md` (section sur la recherche Algolia, si présente) et `write_info.md` si la recherche y est mentionnée.

## Points à vérifier pendant l'implémentation

Tous levés, voir « Réalisation ».

- **Format des URLs.** Les pages sont générées en `kafka.html` (`trailingSlash: false`) et Pagefind aurait renvoyé des URLs en `.html`.
- **Exclusion des pages tags et archive.** Mécanisme à trouver.
- **Mapping Infima.** Hypothèse que les variables `--pf-*` acceptent `var(--ifm-…)`.
- **Langue.** Le français n'est pas nommé explicitement dans la doc du Component UI.
- **Statut du Component UI.** Non précisé dans la documentation.

## Critères d'acceptation

- `pnpm build` passe, sans warning nouveau, et produit `build/pagefind/`.
- Une recherche renvoie des résultats issus de chacune des cinq sections.
- Aucun résultat ne provient de la navbar, du footer, de la sidebar, des pages tags ou de l'archive du blog.
- La modale s'ouvre par le bouton et par Ctrl/Cmd+K, et se ferme avec Échap.
- Le rendu est lisible en thème clair et sombre, et utilisable sur mobile.
- Plus aucune référence à Algolia dans `docusaurus.config.js`, et plus aucune requête vers Algolia.

## Réalisation

Écarts avec le plan initial et résultats de la validation (`pnpm build && pnpm serve`, Chrome) :

- **Pas de `pagefind.yml`.** Les `exclude_selectors` de Pagefind n'agissent que sur le contenu du `<body>` : un sélecteur ne peut pas conditionner sur les classes de `<html>`, et la `glob` n'accepte pas de motifs négatifs. L'exclusion des pages de navigation passe donc par l'API Node (`addHTMLFile`), dans `.build/index-search.mjs`.
- **URLs sans `.html`.** Réglé à l'indexation grâce à l'option `url` de `addHTMLFile`, sans réécriture du rendu des résultats (`resultTemplate` non nécessaire).
- **Contenu indexé.** 26 pages sur 65 fichiers HTML : docs (devento, dev-workout, crafters), articles du blog, page d'accueil, `contributing`, pages `glance-runs`. Les 38 autres (tags, auteurs, archive, liste du blog, 404) sont ignorées. `search.html` n'existe plus avec Algolia retiré.
- **Interface.** Modale ouverte par le bouton et Ctrl+K, résultats en français avec sous-résultats par section, liens vers `/devento/transverse/kafka#producers-producteurs`. Thème clair et sombre corrects, aucune erreur dans la console.
- **Mobile.** Vérifié avec une iframe de 390 px (le redimensionnement de fenêtre de l'outil n'avait pas d'effet) : bouton icône seule, modale plein écran.
- **Algolia.** Bloc `themeConfig.algolia` supprimé. `@docusaurus/theme-search-algolia` reste dans le lockfile (dépendance du preset classic) mais n'est plus chargé.
- **Garde-fous.** À la fin de l'indexation, `.build/index-search.mjs` échoue (code 1, donc `pnpm build` et la CI aussi) si : moins de 20 pages sont indexées, une section (`/devento/`, `/dev-workout/`, `/crafters/`, `/blog/`) n'a aucune page, une page de navigation (tags, archive, auteurs, 404) s'est glissée dans l'index, ou si `pagefind-component-ui.js` est absent du bundle. Cela couvre le risque principal : un changement de classes CSS ou de routes dans une future version de Docusaurus. Chaque contrôle a été vérifié en le provoquant sur une copie du script. Les seuils sont des constantes en tête du script, à relever si le site grossit.
- **Limites.** Pas de recherche avec `pnpm start`. Les pages anglaises de `glance-runs` sont indexées avec le français forcé. Les `typecheck` et diagnostics TypeScript de l'éditeur restent ceux d'avant (types React non résolus).

## Références

- Documentation Pagefind : https://pagefind.app/docs/
- Component UI : https://pagefind.app/docs/search-ui/
