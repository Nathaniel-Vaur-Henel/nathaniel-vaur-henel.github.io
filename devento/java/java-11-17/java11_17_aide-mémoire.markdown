# Changement entre Java 11 et Java 17

## Switch Case

- case multiple avec un séparateur `,`
- `->` remplace `:` et évite le `break`
- `->` peut être utilisé pour renvoyer une valeur
- `->` switch sur le type pour *caster* à la volée
- gestion du `null` dans un case
- `yield` pour renvoyer une valeur dans le switch sur le type

## Classe

- `record` : nouveau type de class : immutable et génère `getter/hashCode/equals`
- `sealed` : afin de verrouiller les possibilités d'héritage

## Formatage

- `NumberFormat` : ajout d'un formatage `SHORT` : 10k, 1M, etc.
- `NumberFormat` : ajout d'un formatage `LONG`; avec `Locale` : 1 million, 2 mille, etc.
- `NumberFormat` : ajout d’un formatage monnaie, avec `Locale` : $3.24, 5,61€, etc.
- `DateTimeFormatter` : ajout du cycle, avec `Locale` : du matin, de l'après-midi, etc.

## Divers

- `String` : bloc String multiligne avec `"""`
- `Exception` : meilleur message de debug sur les `Exception`, en particulier les `NullpointerException`
- `instanceof` : peut être suivi d'un nom de variable afin de caster immédiatement
- `Stream.toList` : afin d’éviter de passer par un `.collect(Collectors.toList())`

---

_Cette fiche a été publiée en premier sur https://nathaniel-vaur-henel.github.io/ par [Nathaniel Vaur Henel](https://nathaniel-vaur-henel.github.io/crafters/nathaniel-vaur-henel) sous licence [Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)_
