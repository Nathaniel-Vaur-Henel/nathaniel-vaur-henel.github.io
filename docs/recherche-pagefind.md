# Remplacer Algolia DocSearch par Pagefind

Statut : spec et plan, rien n'est implémenté.

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
- Script : `"build": "docusaurus build && pagefind --site build"`. La CI appelle déjà `pnpm build` et n'a rien à changer.
- Configuration dans un fichier `pagefind.yml` à la racine :
  - `site: build`
  - `root_selector: main` : n'indexe que le contenu de `<main>`, ce qui exclut la navbar, le footer et la sidebar (`<aside>`, hors `<main>`). Évite d'ajouter `data-pagefind-body` à chaque type de page, qui exclurait les pages non marquées.
  - `exclude_selectors` : `.theme-doc-toc-desktop` (table des matières, dans `<main>`). `nav` et `footer` sont exclus automatiquement par Pagefind.
  - `force_language: fr` si nécessaire (le HTML porte déjà `<html lang="fr">`).
- Pages à exclure de l'index (bruit) : `blog/archive.html`, `blog/tags/**`, `devento/tags/**`. À réaliser via `glob` ou un autre mécanisme (à vérifier).

### Interface

- Fichier `src/theme/SearchBar/index.tsx` : remplace le composant de recherche utilisé par l'item `{ type: "search" }` de la navbar.
- Utilise le Component UI de Pagefind :
  - `<pagefind-modal-trigger>` : bouton de déclenchement, raccourci `mod+k` par défaut.
  - `<pagefind-modal>` : la modale (Échap ferme).
- Chargement de `/pagefind/pagefind-component-ui.js` (module) et `/pagefind/pagefind-component-ui.css` depuis le build. La version de l'UI reste ainsi alignée sur celle de l'index.
- Chargement côté client uniquement (`BrowserOnly` ou `useEffect`), car `customElements` et `window` n'existent pas au rendu serveur.
- Chemins construits avec `useBaseUrl('/pagefind/')` pour rester corrects si `baseUrl` change (`bundle-path` sur `<pagefind-config>`).
- Déclarations TypeScript des éléments custom dans un fichier `.d.ts` (`JSX.IntrinsicElements`).

### Thème

- Le composant reconnaît uniquement `data-pf-theme="dark"` et ignore le `data-theme` de Docusaurus. Les styles du site ne traversent pas les composants (`all: initial`).
- Les variables `--pf-*` sont mappées sur les variables Infima dans `src/css/custom.css` (par exemple `--pf-background: var(--ifm-background-color)`, `--pf-text: var(--ifm-font-color-base)`). Infima change déjà ses valeurs selon le thème : aucune synchronisation JS n'est nécessaire.

### Suppression d'Algolia

- Retirer le bloc `themeConfig.algolia` de `docusaurus.config.js`. Le preset classic ne charge `@docusaurus/theme-search-algolia` que si ce bloc existe.
- La clé API reste dans l'historique git. Ce n'est a priori pas sensible (clé de recherche publique), mais à noter.

## Plan

1. **Dépendance.** `pnpm add -D pagefind`. Vérifier que pnpm n'exige pas d'entrée dans `onlyBuiltDependencies` et que les binaires de plateforme (Windows en local, Linux en CI) sont bien résolus via le lockfile.
2. **Indexation.** Créer `pagefind.yml`, modifier le script `build`, lancer `pnpm build`, vérifier `build/pagefind/` et le nombre de pages indexées. Inspecter l'index pour confirmer que `devento`, `dev-workout`, `crafters`, `blog` et `src/pages` sont couverts.
3. **Pages parasites.** Exclure archive et tags, puis vérifier qu'ils ont disparu des résultats.
4. **Composant.** Créer `src/theme/SearchBar/index.tsx` et les déclarations de types.
5. **Thème.** Ajouter le mapping `--pf-*` dans `src/css/custom.css`, tester en clair et en sombre.
6. **Retrait d'Algolia.** Supprimer `themeConfig.algolia`.
7. **Validation.** `pnpm build && pnpm serve`, puis test dans le navigateur : ouverture par le bouton et par Ctrl/Cmd+K, recherche sur un terme présent dans chaque section, clic sur un résultat, thème clair et sombre, rendu mobile.
8. **Documentation.** Mettre à jour `CLAUDE.md` (section sur la recherche Algolia, si présente) et `write_info.md` si la recherche y est mentionnée.

## Points à vérifier pendant l'implémentation

- **Format des URLs.** Les pages sont générées en `kafka.html` (`trailingSlash: false`). Pagefind risque de renvoyer des URLs en `.html`. GitHub Pages sert ces fichiers tels quels, donc les liens devraient fonctionner. Si l'URL affichée gêne, la seule voie documentée est la propriété JS `resultTemplate` sur `<pagefind-results>`.
- **Exclusion des pages tags et archive.** Le mécanisme exact (`glob` ou autre) est à confirmer.
- **Mapping Infima.** L'hypothèse que les variables `--pf-*` acceptent `var(--ifm-…)` est une inférence à tester.
- **Langue.** Le français n'est pas nommé explicitement dans la doc du Component UI (« 40+ langues », détection automatique). Forcer `lang="fr"` sur `<pagefind-config>` si le rendu n'est pas en français.
- **Statut du Component UI.** La documentation ne précise pas s'il est stable ou en beta (introduit dans Pagefind 1.5).

## Critères d'acceptation

- `pnpm build` passe, sans warning nouveau, et produit `build/pagefind/`.
- Une recherche renvoie des résultats issus de chacune des cinq sections.
- Aucun résultat ne provient de la navbar, du footer, de la sidebar, des pages tags ou de l'archive du blog.
- La modale s'ouvre par le bouton et par Ctrl/Cmd+K, et se ferme avec Échap.
- Le rendu est lisible en thème clair et sombre, et utilisable sur mobile.
- Plus aucune référence à Algolia dans `docusaurus.config.js`, et plus aucune requête vers Algolia.

## Références

- Documentation Pagefind : https://pagefind.app/docs/
- Component UI : https://pagefind.app/docs/search-ui/
