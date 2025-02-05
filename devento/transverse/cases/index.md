---
last_update:
  date: 3/14/2024
tags:
  - casse
  - case
  - écriture
  - développement
# pour ajouter des tags à la page
image: https://i.imgur.com/mErPwqL.png
keywords:
  - devento
  - aide-mémoire
  - fiche technique
# pour ajouter meta description à la page
description: Fiche technique et aide-mémoire sur les casses en programmation
---

# Les casses, ou case, en programmation.

Ici, on ne va pas parler de carcasse de voitures, mais plutôt d'écriture. Tu peux lire l'article sur les [casses](https://fr.wikipedia.org/wiki/Casse_(typographie)) sur Wikipédia pour en savoir plus.  
En programmation, il y a plusieurs façons d'écrire les noms de variables, de fonctions, de classes, etc. 

Tu veux un exemple ? Si tu parcoures ce site, tu pourras voir que son titre comprend "dév sensei". En programmation, tu peux écrire `DevSensei`, `devSensei`, `dev_sensei`, `DEV_SENSEI`, `dev-sensei`. 

## À quoi servent les différentes casses ?

Les différentes casses servent à différencier les éléments de ton code. Cela permet de les identifier plus facilement. Par exemple, si tu vois `personne` et  `Personne`, tu sais que ce n'est pas la même chose. 

De plus, on utilise toujours la même casse pour un type d'élément donné : classe, fichier, variable, etc. Cela permet de savoir immédiatement de quoi il s'agit.

Il existe plusieurs conventions de nommage, et certaines ont des noms... imagés !  

## La fiche technique

### camelCase

La plus connue est la [convention CamelCase](https://fr.wikipedia.org/wiki/Camel_case). Elle est concise et lisible. 

:::info

La première lettre de chaque mot est en majuscule, sauf le premier mot.

:::

:::note exemple

'camelCase', 'devSensei', 'tuEsLeMeilleur', 'ceciEstUnTrèsLongNomDeVariable'

:::

### PascalCase

La [convention PascalCase](https://fr.wikipedia.org/wiki/PascalCase) est très proche de la camelCase avec laquelle est parfois confondue. Elle est aussi concise et lisible que sa sœur la camelCase.

:::info

PascalCase : la première lettre de chaque mot est en majuscule.

:::

:::note exemple
'PascalCase', 'DevSensei', 'TuEsLeMeilleur', 'CeciEstUnTrèsLongNomDeVariable'
:::

### snake_case

La [convention snake_case](https://fr.wikipedia.org/wiki/Snake_case) est plus lisible que les précédentes, mais elle est plus longue. 

:::info

snake_case : les mots sont séparés par des underscores et en minuscules.

:::

:::note exemple
'snake_case', 'dev_sensei', 'tu_es_le_meilleur', 'ceci_est_un_très_long_nom_de_variable'
:::

### kebab-case

La [convention kebab-case](https://fr.wikipedia.org/wiki/Kebab_case) est très proche de la snake_case, mais elle utilise des tirets au lieu des underscores. Et oui, c'est comme un kebab, mais sans la viande et les frites.

:::info

kebab-case : les mots sont séparés par des tirets et en minuscules.

:::

:::note exemple

'kebab-case', 'dev-sensei', 'tu-es-le-meilleur', 'ceci-est-un-très-long-nom-de-variable'

:::

### SCREAMING_SNAKE_CASE

La [convention SCREAMING_SNAKE_CASE](https://fr.wikipedia.org/wiki/Snake_case) est très proche de la snake_case, mais elle utilise des majuscules. Elle est souvent utilisée pour les constantes.

:::info

SCREAMING_SNAKE_CASE : les mots sont séparés par des underscores et en majuscules.

:::

:::note exemple

'SCREAMING_SNAKE_CASE', 'DEV_SENSEI', 'TU_ES_LE_MEILLEUR', 'CECI_EST_UN_TRÈS_LONG_NOM_DE_VARIABLE'

:::

## Ressources

### Sources

- [Wikipédia](https://fr.wikipedia.org/wiki/Expression_r%C3%A9guli%C3%A8re), parce que sans Wikipédia, Internet ne serait pas ce qu'il est aujourd'hui.

### Fiches à télécharger

Tu peux télécharger ce devento en plusieurs formats :
- [pdf](casses_aide-mémoire.pdf)
- [md](casses_aide-mémoire.markdown)

---

_Cette fiche a été publiée en premier sur https://nathaniel-vaur-henel.github.io/ par [Nathaniel Vaur Henel](https://nathaniel-vaur-henel.github.io/crafters/nathaniel-vaur-henel) sous licence [Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)_