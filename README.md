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
$ yarn run start
```

Lance un serveur local et ouvre la page dans le navigateur par défaut.

### Build

```shell
$ yarn run build
```

Génère le contenu static dans le répertoire `build`.

### Lancement du site en local 

```shell
$ yarn run serve
```

Génère le contenu static dans le répertoire `build`.

### Déploiement

Utilisations des actions GitHub

### Utilisation de Slidev

Création de slides avec [Slidev](https://sli.dev/)

> Dû à des façons différentes de gérer les arguments, les commandes sont différentes selon le système d'exploitation :
> - Sous Windows, utiliser les commandes se finissant par `:w`.
> - Sous Unix, utiliser les commandes se finissant par `:l` (à tester).
- [How to use parameters in NPM Scripts at package.json?](https://medium.com/@devsuresh2005/how-to-use-parameters-in-npm-scripts-at-package-json-2b6441750858)

### Tester des slides

Pour **tester** une série de slides, il faut : 

- créer le fichier `.md` contenant les slides dans le répertoire `slidev`. 
- lancer la commande `npm run slidev --name=nom_du_fichier_md_sans_extension` pour générer les slides.
- le navigateur s'ouvrira à l'adresse `http://localhost:3030/` pour visualiser les slides.

### Build des slides

- Pour **build** une série de slides, il faut : 
- 
- créer le fichier `.md` contenant les slides dans le répertoire `slidev`. 
- lancer la commande `npm run slidev:build --name=nom_du_fichier_md_sans_extension` pour générer les slides.

> Le nom du fichier sera utilisé pour le slug de la page.  
> Exemple : si name=slides : 
> - le fichier lu sera ${roo.project}/slidev/_slides_.md
> - la série de slides sera générée dans ${roo.project}/static/slidev/_slides_
> - la page sera accessible à l'adresse `http://mon.site/slidev/slides`

### Encore à faire

- [ ] tester de faire mes slides
- [ ] tester les thèmes 
- [ ] tester si on peut lancer le deploy directement dans les GitHub Actions

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
