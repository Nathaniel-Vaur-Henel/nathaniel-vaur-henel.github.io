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

## Génération des aides-mémoires en PDF

Pour la génération des aide-mémoires en PDF, j'utilise https://md-to-pdf.fly.dev/ en passant la couleur en `darkred` et en conservant le moteur de conversion à weasyprint.

### Automatisation

Pour automatiser la génération des aide-mémoires en PDF, j'utilise un script Python qui utilise `requests` pour appeler l'API de md-to-pdf sur le site https://md-to-pdf.fly.dev :
- le script [md-to-pdf.py](.build/md-to-pdf-1col.py) génère un fichier PDF sur une colonne.
- le script [md-to-pdf-2col.py](.build/md-to-pdf-2col.py) génère un fichier PDF sur deux colonnes en créant un fichier temporaire `.mdtmp` avant de le convertir en PDF.

_Il nécessite d'installer le package **requests** vie `pip install requests`_

_Ce script génère le PDF sur 2 colonnes. S'il y a un tableau ou des images, cela fait n'importe quoi._

```shell
cd .build
python md-to-pdf-1col.py [path vers le fichier markdown]
```

- Le style est défini dans le fichier [md-to-pdf.css](.build/md-to-pdf.css).
- Le script [md-to-pdf-2col.py](.build/md-to-pdf-2col.py) génère un fichier `.mdtmp` qui sera ignoré par Git, mais qui contient les balises HTML pour la mise en page.
- Le fichier `.pdf` est généré dans le même répertoire que le fichier `.markdown`.

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

