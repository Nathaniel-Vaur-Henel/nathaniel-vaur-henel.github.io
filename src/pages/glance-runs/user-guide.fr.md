---
title: Guide d'utilisation de GlanceRuns
description: Comment installer, promouvoir des Run Configurations et utiliser GlanceRuns dans votre IDE.
---

🇬🇧 [Read in English](/glance-runs/user-guide)

# Guide d'utilisation de GlanceRuns

GlanceRuns transforme vos Run/Debug Configurations longues à exécuter en
une mosaïque de cards de statut, pour toutes les surveiller d'un coup
d'œil au lieu de garder une console grand format ouverte pour chacune.

:::note Ce que GlanceRuns n'est pas
GlanceRuns ne remplace pas le Run Manager natif, et ne copie jamais une
Run Configuration. Chaque card **référence** une Run Configuration
existante, résolue en direct à chaque lancement. Éditer ou renommer la
configuration d'origine dans le dialog natif "Run/Debug Configurations"
se répercute toujours sur sa card.
:::

## Ouvrir le tool window

GlanceRuns ajoute un tool window, ancré en bas de l'IDE par défaut.
Ouvrez-le depuis le bouton de la bande d'outils, ou via **View \| Tool
Windows \| GlanceRuns** s'il est masqué.

## Ajouter un GlanceRun

Une card promue s'appelle un **GlanceRun**. Trois façons d'en créer un :

1. Cliquez sur **+** dans la barre d'outils du tool window et choisissez
   une Run/Debug Configuration existante dans la liste.
2. Dans cette même liste, choisissez **Nouvelle Run Configuration...**
   pour ouvrir le dialog natif "Edit Configurations...", créer le type de
   configuration de votre choix, et la voir promue automatiquement dès
   validation.
3. Depuis n'importe où dans l'IDE, utilisez **Tools \| Promouvoir vers
   GlanceRun...** sur une configuration existante — un second point
   d'accès à cette même liste.

:::tip Réutiliser plusieurs fois la même configuration
La même Run Configuration peut être promue plusieurs fois — pratique pour
la lancer avec des valeurs de paramètres différentes, côte à côte (voir
[Lancer avec des paramètres](#lancer-avec-des-paramètres) ci-dessous).
Chaque copie a sa propre card, son propre nom, et ses propres valeurs
mémorisées.
:::

## Lancer, arrêter et consulter les logs

Chaque card affiche un bouton **Run** à l'état Idle, qui devient **Stop**
dès qu'un process est actif — jamais les deux en même temps, et un second
clic pendant qu'un lancement est déjà en cours est ignoré sans effet.

- **Run** démarre le process (après l'exécution des tâches "before
  launch" configurées sur la Run Configuration, comme un Build — si l'une
  d'elles échoue, le GlanceRun passe `Failed` et rien n'est lancé).
- **Stop** demande confirmation ("Arrêter *&lt;nom&gt;* ?"), puis
  interrompt le process.
- **Logs**, ou un clic n'importe où sur le corps de la card, ouvre la
  **vue agrandie** : la sortie console complète (avec les vraies couleurs
  ANSI), un toggle **soft wrap**, et, une fois le run terminé, son code de
  sortie, sa durée et son heure de fin.
- La card elle-même n'affiche qu'un **aperçu live de 7 lignes** de la
  sortie, pour que plusieurs cards restent lisibles côte à côte.

## Lancer avec des paramètres

Si les **Program arguments** d'une Run Configuration contiennent un ou
plusieurs placeholders, GlanceRuns vous demande leurs valeurs avant
chaque lancement, plutôt que d'exécuter la commande telle quelle :

```text
deploy --version {{VERSION}} --env {{env-name}}
```

- Un placeholder, c'est `{{` + un nom (lettres, chiffres, underscores et
  tirets — jamais de tiret en tête) + `}}`. Tout ce qui ne correspond pas
  à cette forme (syntaxe de gabarit d'un autre outil, espaces dans le
  nom...) reste littéral.
- Cliquer sur **Run** sur une card avec des placeholders ouvre un petit
  formulaire — un champ par placeholder, pré-rempli avec la **dernière
  valeur utilisée sur cette card** — avec les boutons **Lancer** /
  **Annuler**.
- Les valeurs sont mémorisées **par card**, jamais partagées entre cards
  ni entre configurations, même quand plusieurs cards promeuvent la même
  configuration sous-jacente.
- La Run Configuration d'origine n'est jamais modifiée : GlanceRuns la
  clone en mémoire, substitue les valeurs dans ce clone, puis exécute ce
  clone. Dans le Run Manager natif, la configuration garde ses
  placeholders littéraux.

:::info Périmètre actuel
Seul le champ **Program arguments** prend en charge les placeholders, et
uniquement en texte libre — pas de listes déroulantes, cases à cocher ou
sélecteurs de fichiers pour l'instant. Le working directory, les
variables d'environnement et les VM options ne sont pas paramétrables
dans cette version.
:::

## Statuts d'une card

| Statut | Signification |
|---|---|
| **Idle** | Jamais lancée, ou terminée puis réinitialisée. |
| **Running** | Le process est actuellement actif. |
| **Success** | Terminée avec le code de sortie `0`. |
| **Failed** | Terminée avec un code de sortie non nul, ou n'a même pas pu démarrer. |
| **Stopped** | Interrompue volontairement, via le bouton **Stop**. |
| **Missing** | La Run Configuration référencée par cette card est introuvable. |

Un statut est **toujours** déduit du vrai code de sortie du process —
jamais deviné à partir du texte affiché dans les logs. Un test qui
affiche volontairement "ERROR" tout en réussissant s'affichera bien en
`Success`.

`Missing` vient se superposer au statut ci-dessus, il ne le remplace
jamais : une card dont la configuration a disparu alors qu'elle était
encore `Running` continue d'afficher `Running` (et reste arrêtable, ses
logs restent lisibles) jusqu'à la fin réelle du process. Seule une card
par ailleurs neutre (`Idle` ou `Stopped`) affiche directement `Missing`.

## Garder le lien avec sa Run Configuration

Ouvrez **⋮ \| Paramètres du GlanceRun** sur n'importe quelle card pour :

- Voir à quelle Run Configuration elle est liée (icône de type et nom
  courant), et accéder directement à ses réglages natifs via **Éditer la
  configuration...**.
- Activer/désactiver **"Synchroniser le nom du GlanceRun sur celui du
  Run"** (activé par défaut) : tant que c'est actif, renommer la Run
  Configuration renomme la card en conséquence. Désactivez pour donner à
  la card un nom indépendant.

## Réorganiser les cards

- **Glisser-déposer** n'importe quelle card vers une nouvelle position,
  quel que soit le mode d'affichage.
- Ou utilisez **⋮ \| Monter** / **Descendre** pour une réorganisation au
  clavier.
- Faites défiler les modes d'affichage — **Liste**, **2 colonnes**, **3
  colonnes** — avec le bouton de disposition de la barre d'outils ; votre
  choix est mémorisé par projet.

## Tout lancer d'un coup

- **Tout lancer**, dans la barre d'outils, démarre tous les GlanceRun qui
  ne sont pas déjà en cours.
- Son menu déroulant, **Options de "Tout lancer"**, ajoute **"Tout
  lancer, y compris les GlanceRun en cours (relance)"** — arrête puis
  relance chaque card après confirmation.

## Quand une Run Configuration disparaît

Si vous supprimez une Run Configuration référencée par une ou plusieurs
cards, GlanceRuns vous demande quoi faire des cards devenues orphelines :
les **garder** (elles passent `Missing`, supprimables manuellement plus
tard) ou les **supprimer avec la configuration**.

Si une configuration à l'identité correspondante réapparaît plus tard
(par exemple recréée avec le même nom), GlanceRuns demande confirmation
avant de relier une card `Missing` à celle-ci — jamais de rattachement
silencieux, puisque rien ne garantit qu'il s'agisse bien de "la même"
configuration qu'avant.

:::caution Fermer l'IDE avec des runs actifs
Si un GlanceRun est encore en cours à la fermeture de l'IDE, un
avertissement vous prévient qu'il sera arrêté. Au redémarrage, une card
qui était en cours s'affiche en `Idle`, avec une note indiquant qu'elle a
été interrompue par la fermeture de l'IDE — GlanceRuns ne peut pas
reprendre un process qui n'existe plus.
:::

## Vie privée

GlanceRuns ne collecte aucune donnée, n'envoie aucune télémétrie et ne
fait aucun appel réseau de son propre fait — voir l'[End User License
Agreement](/glance-runs/EULA) pour la déclaration complète. Il ne fait que lire et référencer
des données déjà présentes dans votre projet (vos Run/Debug
Configurations) et écrit ses propres logs de fonctionnement dans le
`idea.log` local de l'IDE.
