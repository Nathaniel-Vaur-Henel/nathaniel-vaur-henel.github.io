---
last_update:
  date: 05/12/2025
tags:
  - Markdown
  - documentation 
  - développement
# pour ajouter des tags à la page
keywords:
  - devento
  - documentation
  - aide-mémoire
  - fiche technique
# pour ajouter meta description à la page
description: Fiche technique et aide-mémoire à propos de Markdown
---

# Markdown, l'ami invisible des développeurs

> _Tu as déjà vu ces **`.md`** qui traînent dans chaque repo ? Probablement Markdown. Et bonne nouvelle : ce langage de balisage reste l'un des plus simples (et des plus pratiques) au quotidien._

## Un langage pensé pour rester lisible

Markdown, ça vient de l'anglais **“mark down”** — comme dans “prendre des notes”. Le nom est aussi un jeu de mots avec **markup language** (langage de balisage, comme HTML). Sauf que Markdown, justement, est tout sauf du HTML à rallonge. Il a été conçu pour être **simple, lisible, rapide**.

Il a été inventé en **2004** par **John Gruber** avec l'aide d'Aaron Swartz (cofondateur de Reddit, militant du Web ouvert, et légende du libre). Leur but ?  
*Créer une syntaxe de formatage aussi lisible que possible en brut, même sans mise en forme.*

Pari réussi :

* Un titre : `# Mon titre`
* Un lien : `[texte](https://lien)`
* Une liste : `- élément`

Pas de `<h1>` ou de `<div class="truc">`, juste du texte propre.

### Une syntaxe devenue standard dans les outils modernes

Tu trouveras du Markdown un peu partout. Il est devenu **le standard non officiel** de la doc technique et de la rédaction légère.

- Dans tous les projets Git : `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md`…
- Dans les **pull requests sur GitHub** ou les **merge requests sur GitLab**
- Dans les outils comme **Notion**, **Obsidian**, **Joplin**, **Logseq**, **Zettlr**
- Dans les wikis internes d'entreprise (GitHub Wiki, GitLab Wiki…)
- Dans **Google Docs**, via l'option “activer Markdown” (oui, ça existe)
- La plupart des IA (toutes ?), reconnaissent et écrivent nativement en Markdown.
- Et bien sûr, dans **Docusaurus**, comme ce site 😉

:::info L'astuce de ton Dev Sensei
Certains langages comme **Go** ou **Swift**, acceptent **Markdown** nativement dans leur documentation intégrée au code.  
D'autres, comme **Python**, **TypeScript**, **Rust** peuvent l'utiliser grâce à des outils externes.  
Depuis **Java 23**, la Javadoc l'accepte nativement !

Tu connais mon amour pour IntelliJ ? Non, tu peux alors lire [mon article sur sa mise à jour 2025](/blog/intellij-2025). Et bien, JetBrains nous permet d'exporter directement un fichier Markdown en **HTML**, **PDF** et même **Microsoft Word** pour faire plaisir aux non-techs.
:::

### Un socle parfait pour construire un site web statique

Rédiger un site entier en Markdown ? Tout à fait possible.  
Tu veux un exemple ? Facile ! Tu en lis un actuellement, [Dev Sensei](https://dev-sensei.digicrafters.fr) est entièrement rédigé en Markdown.  

Il existe aujourd'hui plusieurs générateurs de sites statiques qui te permettent de **créer un site complet** simplement en écrivant des fichiers Markdown. Pas besoin de CMS compliqué, ni de front-end lourd.

Parmi les plus pratiques et populaires :

* **Docusaurus** : idéal pour la documentation technique. Il est développé par Meta, repose sur React, et propose une structure pensée pour les docs (versioning, recherche intégrée, sidebar auto-générée…).
* **Astro** : ultra moderne et flexible. Il te laisse écrire en Markdown, MDX, ou n'importe quel framework JS (React, Vue, Svelte…). Il est parfait pour des blogs, des portfolios ou de la doc plus personnalisée.
* **Hugo** : très rapide, écrit en Go, largement utilisé pour des sites perso, blogs techniques ou docs. Configuration un peu plus rustique, mais très puissant.
* **Eleventy (11ty)** : simple, minimaliste, très apprécié pour des sites rapides à générer, avec un gros contrôle sur le rendu HTML final.

:::info L'astuce de ton Dev Sensei 
Tu veux un site statique, versionnable avec Git, écrit en Markdown, hébergé chez un hébergeur léger comme sur GitHub Pages, et déployé en continu ? Ces générateurs sont faits pour toi.

Le site Dév Senseï, fonctionne ainsi : écrit en **Markdown**, motorisé par **Docusaurus** et hébergé via **GitHub Pages** et mis en litgne automatiquement grâce à des **GitHub Actions** pour la CI.
:::


### Quelques bonnes pratiques à garder en tête

* ✍️ **Écris pour les humains** : Markdown est lisible en brut, profite-en pour soigner la clarté.
* 🧱 **Structure ton contenu** : titres hiérarchisés, paragraphes courts, listes nettes.
* 🔗 **Utilise des liens de référence** quand le texte devient dense, pour garder la lisibilité.
* 📄 **Prévisualise ton rendu** : la syntaxe peut varier légèrement selon les plateformes.
* ♻️ **Réutilise des snippets** (titres types, tableaux, checklist) pour aller plus vite.
* 🚫 **Évite les abus** : trop de gras, d'italique ou de listes imbriquées nuit à la lisibilité.

En appliquant ces principes simples, tu feras du Markdown un vrai outil de communication technique. Clair, net, lisible.

Voici une mini-section que tu peux insérer vers la fin du document, par exemple juste avant la conclusion ou les ressources :

### Une alternative plus robuste pour les documents complexes

Si Markdown séduit par sa légèreté, **AsciiDoc** se distingue par sa richesse fonctionnelle. Pensé pour des documents longs, structurés et techniques, il permet de faire bien plus — mais au prix d'une syntaxe un peu plus dense.

* 🧱 **Sections hiérarchisées**, numérotation automatique
* 📝 **Notes, encarts, glossaires, bibliographies, variables**
* 📂 **Modularité** : inclusion de fichiers, attributs globaux
* 🛠️ **Sortie multiformat native** : HTML, PDF, ePub… avec Asciidoctor

Un petit exemple :

```asciidoc
= Titre principal
== Sous-section

NOTE: Ceci est une note informative.
```

AsciiDoc s'utilise beaucoup dans les grandes documentations (Red Hat, Antora, Spring) ou pour des manuels techniques où Markdown montre ses limites.

:::info
Mais ceci est un autre Devento...
:::


### Un outil simple, puissant, et toujours prêt à l'emploi

Parce que Markdown est à la fois :

* ✅ **Lisible à l'œil nu**, même sans rendu
* ⚙️ **Facile à convertir** en HTML, PDF, ePub, ou site web
* 🧠 **Intuitif** : tu comprends ce que tu écris
* ✍️ **Portable** : tu peux l'utiliser partout
* 🔧 **Rapide et efficace** : tu écris du contenu, pas du code

:::info Hajime!
Tu veux faire une doc propre, rapide à lire, facile à versionner, lisible partout et prête à imprimer ?  

**Apprends Markdown. Tu te serviras tout le temps de ce langage simple et efficace.**

Moi, je m'en sers pour écrire des sites web, écrire de la doc, prendre des notes, lister mes tâches à faire, et même... écrire des chansons.
:::

## La fiche technique

### Syntaxe de base du Markdown

#### Titres

Markdown permet de structurer un texte avec des titres allant du niveau 1 au niveau 6.

```markdown
# Titre principal
## Sous-titre
### Niveau 3
#### Niveau 4
##### Niveau 5
###### Niveau 6
```

#### Texte enrichi

```markdown
**Texte en gras**
*Texte en italique*
~~Texte barré~~

Voici du `code en ligne`
```

#### Citations

```markdown
> Ceci est une citation. 
> Elle peut s'étendre sur plusieurs lignes.
```

:::info L'astuce de ton Dev Sensei
Dans une citation, tu peux utiliser du **gras**, de l'_italique_, du ~~barré~~, des listes, etc.
:::

#### Listes

**Liste non ordonnée :**

```markdown
- Un élément
- Un autre
  - Un sous-élément
    - Un sous-sous-élément
```

**Liste ordonnée :**

```markdown
1. Premier
2. Deuxième
3. Troisième
```

#### Liens et images

```markdown
[Un lien](https://www.markdownguide.org)

![Texte alternatif](https://via.placeholder.com/150)
```

#### Blocs de code

Pour insérer un bloc de code :

````markdown
```
ligne 1
ligne 2
```
````

Tu peux aussi préciser un langage pour la coloration syntaxique (si supporté) :

````markdown
```js
console.log('Hello Markdown');
```
````

#### Lignes horizontales

Trois tirets (ou astérisques ou underscores) permettent de tracer une séparation :

```markdown
---
```

#### Sauts de ligne et paragraphes

Un paragraphe = une ligne vide.
Un saut de ligne forcé = deux espaces en fin de ligne.

#### Échappement

Pour afficher un caractère spécial, précède-le d'un antislash :

```markdown
\*ce texte ne sera pas en italique\*
```

### Syntaxe étendue du Markdown

#### Cases à cocher

Pratique pour faire des listes de tâches dans une doc ou un projet.

```markdown
- [x] Tâche terminée
- [ ] Tâche à faire
```

#### Liens de référence

Permet de séparer le lien de sa déclaration, pour une lecture plus propre :

```markdown
Voici [la documentation officielle][doc].

[doc]: https://www.markdownguide.org
```

#### Tableaux

Utile pour structurer des données dans une doc technique :

```markdown
| Nom     | Âge |
|--------|-----|
| Alice  | 30  |
| Bob    | 25  |
```

Et si tu veux aligner tes colonnes : 

```markdown
| Aligné à gauche | Aligné au centre | Aligné à droite |
|:----------------|:----------------:|----------------:|
| Gauche          |      Centre      |          Droite |
```


#### Notes de bas de page

Idéal pour les précisions ou sources secondaires :

```markdown
Voici une info importante[^1].

[^1]: Et voici la note de bas de page.
```

#### Surlignage (si supporté)

Certaines implémentations acceptent la syntaxe suivante :

```markdown
==texte surligné==
```

Mais attention, ce n'est pas standard et non reconnu partout.

### Des syntaxes non standards mais très utilisées

#### Ancres internes

Certaines plateformes permettent de créer des liens vers un autre titre de la page :

```markdown
[Aller à la section “Blocs de code”](#blocs-de-code)
```

Cela fonctionne si le moteur de rendu transforme les titres en ID. Très utile pour la navigation interne.

#### Mentions

Dans des contextes collaboratifs (GitHub, GitLab…), tu peux mentionner des utilisateurs ou équipes :

```markdown
@ton-collegue
@frontend-team
@dev-sensei
```

#### Références à des issues ou commits

Toujours dans un contexte Git :

```markdown
Corrigé dans la PR #42
Voir le commit 1a2b3c4
```

#### Badges (via image + lien)

Très courants dans les README :

```markdown
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://example.com)
```

## Ressources

Ces ressources te permettront d'explorer toutes les dimensions du Markdown, du plus simple au plus avancé, selon les contextes dans lesquels tu l'utilises.

### Comprendre Markdown dans son contexte

* [Article Wikipédia sur Markdown](https://fr.wikipedia.org/wiki/Markdown)
* [Présentation de John Gruber, créateur du format](https://daringfireball.net/projects/markdown/)

### Références officielles et guides généraux

* [Markdown Guide (site de référence)](https://www.markdownguide.org/)
* [CommonMark - spécification standardisée](https://commonmark.org/)

### Cas d'usage spécifiques et plateformes

* [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/)
* [Documentation GitLab sur Markdown](https://docs.gitlab.com/ee/user/markdown.html)
* [Syntaxe Markdown supportée par Bitbucket](https://bitbucket.org/tutorials/markdowndemo)

### Générateurs de sites et frameworks associés

* [Docusaurus](https://docusaurus.io/) : documentation technique en Markdown
* [Astro](https://astro.build/) : framework moderne supportant Markdown et MDX
* [Hugo](https://gohugo.io/) : générateur de site ultra-rapide basé sur Markdown
* [Eleventy (11ty)](https://www.11ty.dev/) : générateur de site simple et personnalisable

### Extensions avancées

* [MDX (Markdown + JSX)](https://mdxjs.com/) : si tu veux aller au-delà du Markdown pour créer des composants interactifs
* [ASCIIDOC](https://asciidoc.org/)

### Fiches à télécharger

Tu peux télécharger ce devento en plusieurs formats :
- [pdf](markdown_aide-mémoire.pdf)
- [md](markdown_aide-mémoire.markdown)

---

_Cette fiche a été publiée en premier sur [https://dev-sensei.digicrafters.fr](https://dev-sensei.digicrafters.fr) par [Nathaniel Vaur Henel](https://dev-sensei.digicrafters.fr/crafters/nathaniel-vaur-henel) sous licence [Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)_
