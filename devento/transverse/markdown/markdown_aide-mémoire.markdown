# Aide-mémoire Markdown

| Markdown                         | HTML équivalent                                    | Rendu                                   |
|----------------------------------|----------------------------------------------------|-----------------------------------------|
| `# Titre`                        | `<h1>Titre</h1>`                                   | Titre niveau 1                          |
| `## Titre`                       | `<h2>Titre</h2>`                                   | Titre niveau 2                          |
| `### Titre`                      | `<h3>Titre</h3>`                                   | Titre niveau 3                          |
| `**gras**`                       | `<strong>gras</strong>`                            | **gras**                                |
| `*italique*`                     | `<em>italique</em>`                                | *italique*                              |
| `~~barré~~`                      | `<del>barré</del>`                                 | ~~barré~~                               |
| `` `code` ``                     | `<code>code</code>`                                | `code`                                  |
| `> citation`                     | `<blockquote>`                                     | <blockquote> citation</blockquote>      |
| `- Élément`                      | `<ul><li>Élément</li></ul>`                        | • Élément                               |
| `1. Élément`                     | `<ol><li>Élément</li></ol>`                        | 1. Élément                              |
| `[Texte](https://exemple.com)`   | `<a href="https://exemple.com">`                   | [Texte](https://exemple.com)            |
| `![Texte alternatif](image.jpg)` | `<img src="image.jpg" alt="...">`                  | _Affichage de l’image_                  |
| `---`                            | `<hr>`                                             | Ligne horizontale                       |
| Deux espaces en fin de ligne     | `<br>`                                             | Saut de ligne                           |
| Ligne vide                       | `<p>`                                              | Nouveau paragraphe                      |
| `\*échappé*`                     | Affiche `*` sans formatage                         | \*échappé\*                             |
| ` ``` `                          | `<pre><code>`                                      | Bloc de code mutiligne                  |
| ` ```js `                        | `<pre><code class="language-js">`                  | Bloc avec coloration syntaxique         |
| `- [x] fait`                     | `<label><input type="checkbox" checked> Fait</label>` | ☑ fait                                  |
| `- [ ] à faire`                  | `<label><input type="checkbox"> À faire</label>`   | ☐ à faire                               |
| `[Texte][ref]` + `[ref]: url`    | `<a href="url">Texte</a>`                          | Lien avec référence                     |
| `[^1]` + `[^1]: note`            | Note de bas de page (si supportée)                 | Appel de note                           |
| `==surligné==`                   | souvent `<mark>`                                   | ==surligné== (si supporté)              |
| `[Titre](#ancre)`                | `<a href="#ancre">Titre</a>`                       | Lien vers une ancre interne             |
| `@utilisateur`                   | Plateformes sociales (GitHub…)                     | Mention, si supportée par la plateforme |
| `Corrigé dans #42`               | Référence à issue/PR (GitHub…)                     | Lien auto vers la PR/issue n°42         |
| `![Badge](url)`                  | Badge visuel (image + lien)                        | ![Badge](url)                           |

## Tableaux en Markdown

**Markdown** :

```markdown
| Nom   | Âge  |
|:------|:----:|
| Alice |  30  |
| Bob   |  25  |
```

**HTML** :

```html
<table>
  <thead>
    <tr>
      <th style="text-align:left">Nom</th>
      <th style="text-align:center">Âge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Alice</td>
      <td style="text-align:center">30</td>
    </tr>
    <tr>
      <td style="text-align:left">Bob</td>
      <td style="text-align:center">25</td>
    </tr>
  </tbody>
</table>
```

**Rendu** :

| Nom   | Âge  |
|:------|:----:|
| Alice |  30  |
| Bob   |  25  |

---

_Cette fiche a été publiée en premier sur [https://dev-sensei.digicrafters.fr](https://dev-sensei.digicrafters.fr) par [Nathaniel Vaur Henel](https://dev-sensei.digicrafters.fr/crafters/nathaniel-vaur-henel) sous licence [Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)_
