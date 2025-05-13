---
last_update:
  date: 01/03/2024
tags:
  - expression régulière
  - regex
  - développement
# pour ajouter des tags à la page
keywords:
  - devento
  - aide-mémoire
  - fiche technique
# pour ajouter meta description à la page
description: Fiche technique et aide-mémoire pour écrire des regex
---

# L'efficacité des regex : un code souple et élégant

S'il y a bien un sujet qui hante les développeurs, ce sont les regex. Sur [les_joies_du_code();](https://lesjoiesducode.fr/halloween-top-20-des-trucs-qui-font-le-plus-peur-aux-developpeurs) le thème est récurrent et on peut trouver des centaines de [mèmes](https://fr.wikipedia.org/wiki/M%C3%A8me_Internet) sur le sujet en quelques clics sur son moteur de recherche favori.
Et pourtant, les regex sont très utiles dans bien des situations : validation de formulaire, recherche de texte, remplacement de texte, etc. Sans les regex, il est quasiment impossible de réaliser certaines fonctions. Alors pour passer au niveau supérieur du développement et assouplir ton code, je te propose de t'initier à l'univers merveilleux des Regex.

Quand j'ai commencé à développer, je m'étais écrit un aide-mémoire sur les regex. À l'époque, je l'avais même imprimé. Et régulièrement, je le retrouvais sur le bureau d'un collègue qui me l'avait _emprunté_. Et j'ai toujours le fichier dans un cloud...  
Et c'est certainement ce qui m'a donné l'idée des devento presque deux décennies plus tard...

Dans cette fiche devento, je ne fournirai pas d'explications techniques avancées. J'irai droit au but en te présentant les bases sous forme d'aide-mémoire.

## Les regex : un outil de contrôle, lecture, modification et analyse de texte

Avant d'entrer dans le détail, je te propose de revoir la définition d'une regex :

> Une expression régulière ou expression rationnelle [...] est une chaîne de caractères qui décrit, selon une syntaxe précise, un ensemble de chaînes de caractères possibles. Les expressions régulières sont également appelées regex (un mot-valise formé depuis l'anglais regular expression).

Merci [Wikipedia](https://fr.wikipedia.org/wiki/Expression_r%C3%A9guli%C3%A8re).

Sans regex, tu dois parcourir ton texte, généralement caractère par caractère, pour trouver ce que tu cherches. Avec les regex, tu vas pouvoir décrire ce que tu cherches et laisser le moteur de regex faire le travail pour toi. Selon ce que tu veux, vérification, recherche, modification ou analyse, tu utiliseras des méthodes différentes, mais le principe reste le même. Ces méthodes portent souvent des noms tels que `match()`, `search()`, `replace()` ou `split()`.

Cela t'évite des boucles, des conditions, des tests, des variables intermédiaires, etc. qui alourdiront ton code. Tu vas donc écrire moins de code et il sera plus lisible et plus rapide. 

Bref, c'est souple et efficace.

## La fiche technique

:::info

Les exemples sont présentés ainsi :

```regexp
regex : explication => exemples qui valide la regex, chaque exemple est présenté entre '

Par exemple :

^a : commence par a => 'a', 'aze'
```

:::

:::caution

Ce qui est présenté ici est la base des regex et est compris par la plupart des moteurs de regex.

Corollaire : il y a certainement plus de fonctionnalités dans le langage que tu utilises, notamment de groupe et d'ensemble, que ce qui est présenté ici. Renseigne-toi dans la documentation de ton langage ou framework avant de te lancer.

De plus, selon les langages, l'écriture peut légèrement changer. Vérifie dans la documentation de ton langage ou framework avant de te lancer.

:::

### Métacaractères

_Les métacaractères sont des caractères spéciaux ayant une signification particulière. Ils sont généralement utilisés pour définir des règles de recherche et de remplacement. Pour rechercher un métacaractère, tu dois le précéder d'un caractère d'échappement <code>\\</code>._

- `^` : Début de chaîne
- `$` : Fin de chaîne ou fin de ligne
- `.` : N’importe quel caractère
- `|` : Ou (a|b pour a ou b)
- `( )` : Délimiteur de groupe
- `[ ]` : Délimiteur d'ensemble
- <code>\\</code> : caractère d'échappement

:::note exemple

```regexp
^a : commence par a => 'a', 'aze'
z$ : finit par z => 'z', 'aez'
a.c : a suivi de n'importe quel caractère suivi de c => 'abc', 'a1c', 'a c'
a|b : a ou b => 'a', 'b'
\. : le caractère point => '.'
```

On reviendra sur les groupes et les ensembles dans une [section dédiée](#groupes-et-ensembles).

:::

### Opérateurs de répétition

_Les opérateurs de répétition permettent de définir le nombre de fois qu'un caractère ou un groupe doit, ou peut, être
répété. Comme pour les métacaractères, pour rechercher un opérateur de répétition, il faut le précéder de <code>\\</code>._

- `*` : 0 ou plus
- `+` : 1 ou plus
- `?` : 0 ou 1 fois
- `{n}` : exactement n fois
- `{n,}` : n fois ou plus
- `{n,m}` : de n à m fois

:::info

Un opérateur s'applique sur le caractère ou le groupe le précédent. Par défaut, un opérateur prendra en charge le plus d'élément possible. Ajoute un `?` afin qu'il prenne le moins d'élément possible.

:::

:::note exemple

```regexp
a* : 0 ou plus de a => chaine vide, 'a', 'aaa'
a+ : 1 ou plus de a => 'a', 'aaa'
a? : 0 ou 1 fois a => chaine vide, 'a'
a{2} : exactement 2 a => 'aa'
a{2,} : 2 ou plus de a => 'aa', 'aaa'
a{2,6} : 2 à 6 a => 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'
\*+ : le caractère * 1 fois ou plus => '*', '**', '***'
```

:::

### Groupes et ensembles

_Les groupes et les ensembles permettent de définir des règles de recherche plus complexes en créant tes propres schémas
de recherche._

- `(...)` : définit un groupe : c'est une sous-expression régulière
- `[...]` : définit un ensemble : c'est une liste de caractères à rechercher
- `[^...]` : définit un ensemble négatif : c'est une liste de caractères à exclure
- `[a-z]` : définit un ensemble de caractères : c'est une plage de caractères à rechercher depuis la table ASCII
- `\n` ou `$n` : énième groupe

:::note exemple

Tu peux utiliser les groupes et les ensembles avec des [opérateurs de répétition](#opérateurs-de-répétition) !

```regexp
- `(aze)+` : 'aze' répété 1 à n fois => 'aze', 'azeaze', 'azeazeaze'
- `(aK).+` : 'aK' suivi de n'importe quel caractère suivi de 'aK' => 'aKazeaK', 'aK1aK', 'aK aK'
- `[abc]` : a ou b ou c => 'a', 'b', 'c'
- `[^abc]` : Non a ou b ou c => 'd', 'e', 'f'
- `[a-z]` : Lettre min. de a à z => 'a', 'b', 'c', 'd', 'e', 'f'
- `[0-9]` : Entier (0 à 9) (\d) => '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
- `[a-z0-9_]` : Lettre min. de a à z ou entier ou _ => 'a', 'b', 'A', 'B', '0', '1', '2', '_'
- `[a-z’-]` : Lettre min. de a à z ou apostrophe ou tiret
```

:::

#### Ensembles prédéfinis

_Ces ensembles représentent des ensembles plus complexes et permettent de les écrire de façon abrégée et plus lisible._

- `\s` : n'importe quel caractère blanc : espace, tabulation, retour à la ligne, [ \t\n\r]
- `\S` : n'importe quel caractère **non** blanc, [^ \t\r\n]+
- `\d` : n'importe quel nombre, [0-9]
- `\D` : n'importe quel **non** nombre, [^0-9]
- `\w` : n'importe quel caractère alphanumérique, [a-zA-Z0-9_]
- `\W` : n'importe quel caractère non alphanumérique, [^a-zA-Z0-9_]

### Caractères spéciaux

_Certains caractères nécessitent une écriture spéciale._

- `\n` : Nouvelle ligne
- `\r` : Retour à la ligne
- `\t` : Tabulation
- `\x{0281}` : Car. Unicode U+0281 (K)

### Ancres

_Les ancres ne représentent pas des caractères, mais des emplacements._

- `\A` : Début de chaîne, équivaut à `^`
- `\Z` : Fin de chaîne, équivaut à `$`
- `\b` : Borne de mot, marque la fin, ou le début, d'une séquence de type `\w`
- `\B` : Non borne de mot, marque tout ce que `\b` ne marque pas...

:::note exemple

Tu peux utiliser les groupes et les ensembles avec des [opérateurs de répétition](#opérateurs-de-répétition) !

```regexp
- `\b\w+\b` : va trouvé les mots entourés d'espaces
```

:::

### Lookahead et Lookbehind

_J'ai gardé le plus dur pour la fin. Avec ces deux motifs, tu vas pouvoir trouver ce qu'il y a avant, ou après un motif._

- `(?=...)` : ce qu'il y a après (positive lookahead)
- `(?!...)` : ce qu'il y **n'a pas** après (negative lookahead)
- `(?<=...)` : ce qu'il y a avant (positive lookbehind)
- `(?<!...)` : ce qu'il y **n'a pas** avant (negative lookbehind)

:::note exemple

Bon, là, pas le choix, il faut des exemples efficaces !

```
- Dans la phrase : '1 pain coute 2€'
    - `\d+\b(?=€)` correspond à 2 car 2 est suivi par `€`.
    - `\d+\b(?!€)` correspond à `1`car 1 n'est pas suivi par `€`.
- Dans la phrase : '1 paquet de chips coute $2'
    - `(?<=\$)\d+` correspond à 30 car 2 est précédé par `$`.
    - `(?<!\$)\d+` correspond à `1`car 1 n'est pas précédé par `$`.
```

:::

## Ressources


### Sources

- [Wikipédia](https://fr.wikipedia.org/wiki/Expression_r%C3%A9guli%C3%A8re), parce que sans Wikipédia, Internet ne serait pas ce qu'il est aujourd'hui.
- Le site [regular expressions 101](https://regex101.com/) est un incontournable, surtout pour tester tes regex rapidement. Et même avoir une explication. Comme pour tout, il faut s'entrainer pour y arriver ! 
- [Regexr](https://regexr.com/) est un autre site pour tester et comprendre les regex.
- [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_r%C3%A9guli%C3%A8res) pour les regex en JavaScript.
- Mon repository [Dev Workout](https://github.com/Nathaniel-Vaur-Henel/dev-workout) sur GitHub pour des exercices sur les regex. Et bien d'autres si tu veux t'entrainer.

### Fiches à télécharger

Tu peux télécharger un aide-mémoire de ce Devento en :
- [📥 Version PDF](regex_aide-mémoire.pdf)
- [📥 Version Markdown](regex_aide-mémoire.markdown)

---

_Cette fiche a été publiée en premier sur https://nathaniel-vaur-henel.github.io/ par [Nathaniel Vaur Henel](https://nathaniel-vaur-henel.github.io/crafters/nathaniel-vaur-henel) sous licence [Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)_
