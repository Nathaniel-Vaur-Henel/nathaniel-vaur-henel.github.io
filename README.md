# Readme

Ce repo contient les sources de mon site https://nathaniel-vaur-henel.github.io/

## Développement du site

## Website

Ce site utilise [Docusaurus 3](https://docusaurus.io/), un générateur de site statique en React et Markdown.

Les commentaires du blog sont propulsés par [Giscus](https://giscus.app/fr).

La publication, le déploiement et l'hébergement sont gérés par [GitHub Pages](https://pages.github.com/).

La publication est planifiée grâce à [merge-schedule-action](https://github.com/gr2m/merge-schedule-action)

### Lancer un server de test en local

```shell
yarn run start
```

Lance un serveur local et ouvre la page dans le navigateur par défaut.

### Build

```shell
yarn run build
```

Génère le contenu static dans le répertoire `build`.

### Lancement du site en local 

```shell
yarn run serve
```

Génère le contenu static dans le répertoire `build`.

### Déploiement

Utilisations des actions GitHub

## Mise à jour des dépendances

- Installe [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) si ce n'est déjà fait.
- Mets à jour le `package.json` avec `ncu --upgrade`.
- Mets à jour les dépendances avec `npm update`.
- Vérifie que tout fonctionne correctement.

## Ressources diverses

- [Building email signup form for Docusaurus with hCaptcha, Cloudflare Pages and Mailgun](https://pglet.io/blog/email-sign-form-for-docusaurus-with-hcaptcha-cloudflare-pages-and-mailgun/)
- [Comments in documents or blogs](https://docusaurus.io/fr/feature-requests/p/comments-in-documents-or-blogs)
  - [giscus](https://giscus.app/fr)
    - https://dev.to/m19v/how-to-add-giscus-comments-to-docusaurus-439h

## Notes

```shell
npm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap --typescript
npm run swizzle @docusaurus/theme-classic DocItem -- --wrap --typescript
```

Pour la génération des exports en PDF, j'utilise https://md-to-pdf.fly.dev/ en passant la couleur en `darkred` et en conservant le moteur de conversion à weasyprint
