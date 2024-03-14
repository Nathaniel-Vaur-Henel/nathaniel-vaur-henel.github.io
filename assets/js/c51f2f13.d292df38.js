"use strict";(self.webpackChunknathaniel_vaur_henel_github_io=self.webpackChunknathaniel_vaur_henel_github_io||[]).push([[1109],{6435:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=r(5893),s=r(1151);const t={slug:"/begin-spring",title:"D\xe9buter avec Spring gr\xe2ce \xe0 Spring Initializr",authors:"nvh",tags:["Java","Spring","langage","d\xe9veloppement","tuto"],enableComments:!0},a=void 0,o={permalink:"/blog/begin-spring",source:"@site/blog/2024/02/2024-02-15.begin_spring.md",title:"D\xe9buter avec Spring gr\xe2ce \xe0 Spring Initializr",description:"Ce n'est pas toujours facile de se lancer avec Spring quand on est un d\xe9veloppeur Java d\xe9butant. De premier abord aride avec sa r\xe9putation de mastodonte compliqu\xe9 \xe0 appr\xe9hender, Spring est pourtant un framework superstar dans la communaut\xe9 java, et ce n'est pas sans raison.",date:"2024-02-15T00:00:00.000Z",formattedDate:"15 f\xe9vrier 2024",tags:[{label:"Java",permalink:"/blog/tags/java"},{label:"Spring",permalink:"/blog/tags/spring"},{label:"langage",permalink:"/blog/tags/langage"},{label:"d\xe9veloppement",permalink:"/blog/tags/developpement"},{label:"tuto",permalink:"/blog/tags/tuto"}],readingTime:14.455,hasTruncateMarker:!0,authors:[{name:"Nathaniel Vaur Henel",title:"Tech Lead, D\xe9veloppeur s\xe9nior, formateur et cr\xe9ateur de contenu",url:"https://github.com/Nathaniel-Vaur-Henel",imageURL:"https://github.com/Nathaniel-Vaur-Henel.png",key:"nvh"}],frontMatter:{slug:"/begin-spring",title:"D\xe9buter avec Spring gr\xe2ce \xe0 Spring Initializr",authors:"nvh",tags:["Java","Spring","langage","d\xe9veloppement","tuto"],enableComments:!0},unlisted:!1,prevItem:{title:"D\xe9velopper son premier projet Spring : poser de bonnes bases",permalink:"/blog/continue-spring"}},l={authorsImageUrls:[void 0]},d=[{value:"Spring, un framework Java incontournable",id:"spring-un-framework-java-incontournable",level:2},{value:"Spring, le framework pour tous",id:"spring-le-framework-pour-tous",level:3},{value:"Attention \xe0 ne pas confondre Spring ou Spring Boot",id:"attention-\xe0-ne-pas-confondre-spring-ou-spring-boot",level:3},{value:"Spring, c&#39;est quoi\xa0?",id:"spring-cest-quoi",level:3},{value:"Initializr\xa0: le g\xe9n\xe9rateur de projet Spring",id:"initializr-le-g\xe9n\xe9rateur-de-projet-spring",level:2},{value:"Avant de commencer, pr\xe9sentation des d\xe9pendances",id:"avant-de-commencer-pr\xe9sentation-des-d\xe9pendances",level:3},{value:"Cr\xe9er son premier projet avec Spring Initializr \xe9tape par \xe9tape",id:"cr\xe9er-son-premier-projet-avec-spring-initializr-\xe9tape-par-\xe9tape",level:3},{value:"Lancement de l&#39;application du projet g\xe9n\xe9r\xe9",id:"lancement-de-lapplication-du-projet-g\xe9n\xe9r\xe9",level:3},{value:"Pour aller plus loin",id:"pour-aller-plus-loin",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Ce n'est pas toujours facile de se lancer avec Spring quand on est un d\xe9veloppeur Java d\xe9butant. De premier abord aride avec sa r\xe9putation de mastodonte compliqu\xe9 \xe0 appr\xe9hender, Spring est pourtant un framework superstar dans la communaut\xe9 java, et ce n'est pas sans raison.",(0,i.jsx)(n.br,{}),"\n","Afin de faciliter ta prise en main de Spring, je vais te pr\xe9senter comment il fonctionne et te donner les clefs qui te permettront de te lancer tout en douceur."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Je vais consid\xe9rer que tu as d\xe9j\xe0 des bases en Java. Si ce n'est pas le cas, je te conseille de commencer par l\xe0. Tu trouveras plein de ressources sur le net pour apprendre Java. J'ai toujours aim\xe9 les cours d'",(0,i.jsx)(n.a,{href:"https://openclassrooms.com/fr/courses/6173501-apprenez-a-programmer-en-java",children:"OpenClassrooms"}),", mais il y en a plein d'autres. Et tu pourras trouver quelques conseils sur ce site."]})}),"\n",(0,i.jsx)(n.h2,{id:"spring-un-framework-java-incontournable",children:"Spring, un framework Java incontournable"}),"\n",(0,i.jsxs)(n.p,{children:["Spring, c'est de la magie\xa0: ce framework sait faire plein de choses tout seul, sans que l'on ait besoin de comprendre toutes les m\xe9caniques sous-jacentes. Un avantage certes, mais qui peut rendre parfois son usage d\xe9routant, voire complexe, quand le framework s'emballe et te casse ta belle appli sans que tu ne comprennes pourquoi. ",(0,i.jsx)(n.a,{href:"https://youtu.be/snB8u_G3jVI?feature=shared&t=374",children:"En mode les balais de Fantasia qui se mettent \xe0 danser tout seul... et inondent finalement ta baraque"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"spring-le-framework-pour-tous",children:"Spring, le framework pour tous"}),"\n",(0,i.jsx)(n.p,{children:"Spring est un framework opensource Java qui permet de d\xe9velopper plus rapidement des applications complexes et de qualit\xe9. Il est tr\xe8s populaire et tr\xe8s utilis\xe9 dans le monde professionnel au point o\xf9 l'on peut dire qu'on ne code plus en Java, mais en Spring. C'est une v\xe9ritable comp\xe9tence clef qui peut ouvrir les portes de beaux projets, mais surtout en fermer si on ne le ma\xeetrise pas suffisamment."}),"\n",(0,i.jsxs)(n.p,{children:["Derni\xe8rement, j'ai abord\xe9 le sujet de Spring avec des d\xe9veloppeurs juniors que j'accompagne. Comme ils sortent d'\xe9cole et n'ont pas creus\xe9 la question de ce framework, je leur ai propos\xe9, afin d'augmenter leurs comp\xe9tences, de cr\xe9er un projet perso en Spring. Leur r\xe9action a \xe9t\xe9 unanime\xa0:",(0,i.jsx)(n.br,{}),"\n","\"C'est trop gros, trop compliqu\xe9, c'est pour des grosses applis.\"",(0,i.jsx)(n.br,{}),"\n","Alors... c'est pas faux. Je me souviens moi-m\xeame avoir eu des difficult\xe9s \xe0 m'y mettre lorsque je n'\xe9tais encore qu'un d\xe9butant.\nEt pourtant, aujourd'hui, je ne peux plus m'en passer. Spring est devenu un outil indispensable dans mon quotidien de d\xe9veloppeur Java."]}),"\n",(0,i.jsx)(n.p,{children:"Je te propose de d\xe9mystifier Spring et de te montrer comment tu peux t'en servir pour cr\xe9er des applications, quelles que soient la taille et l'ambition de ton projet."}),"\n",(0,i.jsx)(n.p,{children:"Une fois les concepts de base assimil\xe9s, Spring est finalement facile \xe0 utiliser, \xe0 condition d'y aller doucement et d'avoir d\xe9j\xe0 quelques bases en Java. Donc go, go, go\xa0! M\xeame \xe0 la maison, tu peux springer\xa9 (il faut que je le d\xe9pose \xe7a...) \xe0 volont\xe9."}),"\n",(0,i.jsx)(n.h3,{id:"attention-\xe0-ne-pas-confondre-spring-ou-spring-boot",children:"Attention \xe0 ne pas confondre Spring ou Spring Boot"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Spring"})," est un framework tr\xe8s modulaire. Il est compos\xe9 de plusieurs modules, qui peuvent \xeatre utilis\xe9s ind\xe9pendamment les uns des autres."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Spring Boot"})," est un module de Spring qui permet de cr\xe9er et de configurer plus facilement des applications Spring. Il contient aussi un serveur d'application embarqu\xe9 et des outils pour faciliter le d\xe9veloppement (rechargement \xe0 chaud, gestion des d\xe9pendances, etc)."]}),"\n",(0,i.jsx)(n.p,{children:"Donc, tu peux faire du Spring sans Spring Boot, mais tu ne peux pas faire du Spring Boot sans Spring. En fait, Spring Boot est une surcouche de Spring qui te permet de te concentrer sur le d\xe9veloppement de ton application sans te soucier de la configuration de Spring. C'est pour \xe7a que je te conseille de commencer par Spring Boot si tu d\xe9butes avec Spring. Tu verras, c'est plus simple et plus rapide."}),"\n",(0,i.jsx)(n.admonition,{title:"Le moment mn\xe9motechnique",type:"info",children:(0,i.jsx)(n.p,{children:"Spring est comme un dojo traditionnel d'arts martiaux, offrant une profondeur d'apprentissage et de pratique. En revanche, Spring Boot est comme un entra\xeenement en plein air, ax\xe9 sur la simplicit\xe9 et l'efficacit\xe9 pour une progression rapide."})}),"\n",(0,i.jsx)(n.h3,{id:"spring-cest-quoi",children:"Spring, c'est quoi\xa0?"}),"\n",(0,i.jsxs)(n.p,{children:["Spring est un sac de grain de caf\xe9... Attends, je t'explique...\n(Roulement de tambours pour le moment culture g\xe9n\xe9rale.)\nSi tu ne le sais pas, ",(0,i.jsx)(n.strong,{children:"java"})," est un mot anglais pour caf\xe9. C'est pour \xe7a que le logo de Java (note la majuscule) est une tasse de caf\xe9 fumante ",(0,i.jsx)(n.em,{children:"(AAAAHHHH\xa0!!!)"})," et qu'en Java, on a des ",(0,i.jsx)(n.strong,{children:"Beans"}),", des haricots ou des grains de caf\xe9 ",(0,i.jsx)(n.em,{children:"(OOOHHHH\xa0!!!)"}),".\nEt comme Spring est un conteneur de Beans, on peut dire que c'est un sac de grain de caf\xe9."]}),"\n",(0,i.jsx)(n.p,{children:"Garde cette image en t\xeate, \xe7a devrait te permettre de mieux comprendre la suite."}),"\n",(0,i.jsx)(n.p,{children:"En fait, c'est m\xeame encore mieux\xa0:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Tu d\xe9cris tes Beans \xe0 Spring."}),"\n",(0,i.jsx)(n.li,{children:"Il te les fabrique."}),"\n",(0,i.jsx)(n.li,{children:"Il te les range sur une \xe9tag\xe8re, pr\xeats \xe0 servir."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Spring initialise tes Beans, les range dans un conteneur, et te les fournit quand tu en as besoin. Et il fait \xe7a tout seul. Et \xe7a, c'est le premier gros point fort de Spring et \xe7a s'appelle l'inversion de contr\xf4le (ou IoC pour les intimes). C'est le premier concept cl\xe9s de Spring."}),"\n",(0,i.jsx)(n.p,{children:"Le deuxi\xe8me concept clef de Spring, c'est qu'il utilise la POO (Programmation Orient\xe9e Objet) comme un \xe9l\xe9ment central. \xc0 un point qui d\xe9fie l'imagination d'un d\xe9butant. Je ferai peut-\xeatre un article \xe0 ce sujet. Spring utilise la POO pour faire des trucs tout seul, comme g\xe9n\xe9rer des classes enti\xe8res \xe0 partir d'une simple annotation."}),"\n",(0,i.jsx)(n.p,{children:"En parlant annotations, c'est le c\u0153ur de Spring. Tu vas voir, c'est super pratique. Tu \xe9cris une annotation au-dessus d'une classe ou d'une m\xe9thode, et Spring fait le reste. C'est magique. Litt\xe9ralement. Avec Spring, quand on me demande \"comment on fait \xe7a\xa0?\", j'aime r\xe9pondre\xa0:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Il a une annotation pour \xe7a."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Bref, l'abstraction de Spring est tellement puissante que tu n'as pas besoin de comprendre comment \xe7a marche pour l'utiliser. Mais c'est quand m\xeame mieux si tu comprends quand-m\xeame. C'est le troisi\xe8me concept clef de Spring."}),"\n",(0,i.jsx)(n.admonition,{title:"Le moment mn\xe9motechnique",type:"info",children:(0,i.jsx)(n.p,{children:"Spring, c'est un sac de grain de caf\xe9, avec un robot qui te les pr\xe9pare et te les sert quand tu en as besoin. Et la t\xe9l\xe9commande du robot, ce sont les annotations."})}),"\n",(0,i.jsx)(n.p,{children:"Spring est compos\xe9 de plusieurs modules, une vingtaine, mais pour d\xe9buter, je te conseille de commencer par l\xe0\xa0:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Boot"}),"\xa0: c'est le module qui permet de cr\xe9er des applications Spring autonomes. Il contient aussi un serveur d'application embarqu\xe9 (Tomcat, Jetty ou Undertow), et des outils pour faciliter le d\xe9veloppement (rechargement \xe0 chaud, etc)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Data"}),"\xa0: c'est le module qui permet de manipuler des donn\xe9es dans des bases de donn\xe9es relationnelles ou NoSQL."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Web Services"}),"\xa0: c'est le module qui permet de d\xe9velopper des applications web services."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Test"}),"\xa0: c'est le module qui permet de faire des tests unitaires et d'int\xe9gration."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Si tu veux te lancer dans la d\xe9couverte des autres modules, je te conseille tout simplement la (sacro-sainte) ",(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/docs/4.0.x/spring-framework-reference/html/overview.html",children:"doc"})]})}),"\n",(0,i.jsxs)(n.admonition,{title:"Attention aux Chocabugs\xa0!",type:"warning",children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Spring a un grand pouvoir et un grand pouvoir implique de grandes responsabilit\xe9s."}),"\n"]}),(0,i.jsx)(n.p,{children:"Spring, c'est de la magie. Il fait des trucs tout seul et tu ne vas pas toujours comprendre comment il fait. Et c'est \xe0 ce moment que tu dois creuser un peu afin de comprendre les m\xe9canismes sous-jacents. Pourquoi\xa0? Parce que sinon, tu vas te retrouver avec des bugs incompr\xe9hensibles. Et \xe7a, c'est pas cool. Surtout si tu rajoutes Hibernate et Lombok, et d'autres encore, qui sont aussi des frameworks qui font des trucs tout seul. \xc0 coup d'annotations. Et qui sont int\xe9gr\xe9s \xe0 Spring Boot."}),(0,i.jsx)(n.p,{children:"Et paf, \xe7a fait des Chocabugs\xa9."})]}),"\n",(0,i.jsx)(n.h2,{id:"initializr-le-g\xe9n\xe9rateur-de-projet-spring",children:"Initializr\xa0: le g\xe9n\xe9rateur de projet Spring"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://start.spring.io/",children:"Spring Initializr"})," est l'outil de r\xe9f\xe9rence pour utiliser Spring Boot et pour cause, c'est l'outil officiel de Spring pour cr\xe9er des projets Spring Boot. C'est un site qui te permet de cr\xe9er un projet Spring Boot en quelques clics.\nC'est tr\xe8s pratique pour commencer. Tu choisis les d\xe9pendances dont tu as besoin, et il te g\xe9n\xe8re un projet pr\xeat \xe0 l'emploi."]}),"\n",(0,i.jsx)(n.p,{children:"Nous allons donc cr\xe9er un projet Spring Boot avec Spring Initializr."}),"\n",(0,i.jsx)(n.h3,{id:"avant-de-commencer-pr\xe9sentation-des-d\xe9pendances",children:"Avant de commencer, pr\xe9sentation des d\xe9pendances"}),"\n",(0,i.jsx)(n.p,{children:"Avant de nous lancer dans le vif du sujet, je te pr\xe9sente quelques d\xe9pendances de bases, je les mets dans tous mes projets ou presque\xa0:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Web"}),"\xa0: c'est la d\xe9pendance qui permet de d\xe9velopper des applications web."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Data JPA"}),"\xa0: c'est la d\xe9pendance qui permet de manipuler des donn\xe9es dans une base de donn\xe9es relationnelle."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Boot Test"}),"\xa0: c'est la d\xe9pendance qui permet de faire des tests unitaires et d'int\xe9gration. Tu n'as rien \xe0 faire, Spring Initializr ajoute d\xe9j\xe0 cette d\xe9pendance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Lombok"}),"\xa0: c'est la d\xe9pendance qui permet de g\xe9n\xe9rer du code automatiquement. C'est tr\xe8s pratique pour \xe9viter de r\xe9p\xe9ter du code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Boot DevTools"}),"\xa0: c'est la d\xe9pendance qui permet de recharger \xe0 chaud ton application. C'est tr\xe8s pratique pour gagner du temps."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Libre \xe0 toi d'en choisir d'autres. Tu peux m\xeame en ajouter d'autres plus tard. C'est \xe7a qui est bien avec Spring\xa0: tu peux commencer petit et ajouter des choses au fur et \xe0 mesure que ton projet grandit."}),"\n",(0,i.jsxs)(n.p,{children:["Petit bonus\xa0: Si tu veux une base de donn\xe9es facile et rapide \xe0 mettre en place, tu peux ajouter la d\xe9pendance ",(0,i.jsx)(n.strong,{children:"H2 Database"}),". C'est une base de donn\xe9es relationnelle en m\xe9moire. C'est tr\xe8s pratique pour le d\xe9marrage d'une appli. Et tu peux aussi la mettre en fichier pour conserver les donn\xe9es entre deux lancements de l'appli. Et quand tu passeras en production, tu pourras facilement changer pour une autre base de donn\xe9es. H2 m\xe9riterait un article \xe0 lui tout seul, mais pour l'instant, je te conseille de l'ajouter."]}),"\n",(0,i.jsx)(n.h3,{id:"cr\xe9er-son-premier-projet-avec-spring-initializr-\xe9tape-par-\xe9tape",children:"Cr\xe9er son premier projet avec Spring Initializr \xe9tape par \xe9tape"}),"\n",(0,i.jsx)(n.p,{children:"C'est enfin l'heure du tuto\xa0!"}),"\n",(0,i.jsxs)(n.p,{children:["C'est le moment d'aller sur ",(0,i.jsx)(n.a,{href:"https://start.spring.io/",children:"Spring Initializr"})," pour cr\xe9er ton projet.\nPour ce faire, tu dois d'abord remplir les champs suivants\xa0:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Project"}),"\xa0: c'est le type de projet. Tu peux choisir Maven ou Gradle. Moi, j'ai l'habitude de Maven, donc je choisis ",(0,i.jsx)(n.code,{children:"Maven"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Language"}),"\xa0: c'est le langage de programmation. Tu peux choisir Java, Kotlin ou Groovy. Moi, je choisis ",(0,i.jsx)(n.code,{children:"Java"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Boot"}),"\xa0: c'est la version de Spring Boot. Tu peux choisir la derni\xe8re version stable. Moi, je choisis la version ",(0,i.jsx)(n.code,{children:"3.2.2"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Project Metadata"}),"\xa0: ce sont les informations sur ton projet. Tu peux mettre ce que tu veux. Moi, je mets\xa0:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Group"}),"\xa0: ",(0,i.jsx)(n.code,{children:"fr.nvh"}),", c'est le nom racine de tous mes packages de toutes mes side projects."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Artifact"}),"\xa0: ",(0,i.jsx)(n.code,{children:"begin-spring"}),", c'est le nom de code du projet."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),"\xa0: ",(0,i.jsx)(n.code,{children:"D\xe9bute avec Spring"}),", c'est le nom du projet."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Description"}),"\xa0: ",(0,i.jsx)(n.code,{children:"Un side project pour d\xe9buter avec Spring"}),", c'est la description du projet."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Package name"}),"\xa0: ",(0,i.jsx)(n.code,{children:"fr.nvh.begin.spring"}),", c'est le nom du package racine du projet."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Packaging"}),"\xa0: ",(0,i.jsx)(n.code,{children:"jar"}),", c'est le type de package g\xe9n\xe9r\xe9, tant que tu ne passes pas en production, \xe7a n'a pas d'importance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Java"}),"\xa0: 21, c'est la version de Java, tu peux mettre la derni\xe8re version stable."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Et voil\xe0\xa0:\n",(0,i.jsx)(n.img,{alt:"spring_initializer_basics.png",src:r(4507).Z+"",width:"1520",height:"737"})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Tu pourras changer toutes ces infos plus tard dans ton fichier de configuration ",(0,i.jsx)(n.code,{children:"pom.xml"})," ou ",(0,i.jsx)(n.code,{children:"build.gradle"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Voil\xe0 pour le travail de base.",(0,i.jsx)(n.br,{}),"\n","Maintenant, il faut ajouter les d\xe9pendances.",(0,i.jsx)(n.br,{}),"\n","Pour cela, tu cliques sur le bouton ",(0,i.jsx)(n.strong,{children:"Add Dependencies"})," et tu ajoutes les d\xe9pendances dont je t'ai parl\xe9 plus haut. Tu peux aussi ajouter d'autres d\xe9pendances si tu veux."]}),"\n",(0,i.jsx)(n.p,{children:"Pour rappel\xa0:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Web"}),"\xa0: c'est la d\xe9pendance qui permet de d\xe9velopper des applications web."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Data JPA"}),"\xa0: c'est la d\xe9pendance qui permet de manipuler des donn\xe9es dans une base de donn\xe9es relationnelle."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Boot Test"}),"\xa0: c'est la d\xe9pendance qui permet de faire des tests unitaires et d'int\xe9gration."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Lombok"}),"\xa0: c'est la d\xe9pendance qui permet de g\xe9n\xe9rer du code automatiquement. C'est tr\xe8s pratique pour \xe9viter de r\xe9p\xe9ter du code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Spring Boot DevTools"}),"\xa0: c'est la d\xe9pendance qui permet de recharger \xe0 chaud ton application. C'est tr\xe8s pratique pour gagner du temps."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"H2 Database"}),"\xa0: c'est la d\xe9pendance qui permet d'ajouter une base de donn\xe9es relationnelle en m\xe9moire."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"spring_initializer_dependencies.png",src:r(7223).Z+"",width:"1521",height:"735"})}),"\n",(0,i.jsxs)(n.p,{children:["Clic sur le bouton ",(0,i.jsx)(n.strong,{children:"Generate"})," et tu auras un fichier zip avec ton projet Spring Boot. D\xe9compresse-le et ouvre-le dans ton IDE pr\xe9f\xe9r\xe9."]}),"\n",(0,i.jsx)(n.p,{children:"Faisons-le\xa0!"}),"\n",(0,i.jsxs)(n.p,{children:["Comme je suis sympa, je te mets le lien vers le projet que j'ai cr\xe9\xe9\xa0: ",(0,i.jsx)(n.a,{href:"https://start.spring.io/#!type=maven-project&language=java&platformVersion=3.2.2&packaging=jar&jvmVersion=21&groupId=fr.nvh&artifactId=begin-spring&name=D%C3%A9bute%20avec%20Spring&description=Cr%C3%A9e%20un%20projet%20facilement&packageName=fr.nvh.begin.spring&dependencies=devtools,lombok,web,data-jpa,h2",children:"Spring Initializr - begin-spring"})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Le bouton ",(0,i.jsx)(n.strong,{children:"Explore"})," te permet de voir le projet que tu as cr\xe9\xe9 avant de la t\xe9l\xe9charger."]})}),"\n",(0,i.jsx)(n.h3,{id:"lancement-de-lapplication-du-projet-g\xe9n\xe9r\xe9",children:"Lancement de l'application du projet g\xe9n\xe9r\xe9"}),"\n",(0,i.jsx)(n.p,{children:"Ouvre ton projet dans ton IDE pr\xe9f\xe9r\xe9."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Moi, j'utilise ",(0,i.jsx)(n.a,{href:"https://www.jetbrains.com/fr-fr/idea/",children:"IntelliJ IDEA"}),", mais tu peux utiliser celui que tu veux. La version Community d'IntelliJ IDEA est gratuite et suffisante pour commencer. Je pourrais \xe9crire des tonnes d'articles sur IntelliJ IDEA, et je le ferai prochainement, mais pour l'instant, revenons \xe0 Spring."]})}),"\n",(0,i.jsx)(n.p,{children:"Alors \xe0 quoi \xe7a ressemble\xa0?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Un fichier de configuration ",(0,i.jsx)(n.code,{children:"pom.xml"})," (ou ",(0,i.jsx)(n.code,{children:"build.gradle"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Un fichier ",(0,i.jsx)(n.code,{children:"DebuteAvecSpringApplication.java"})," dans le package ",(0,i.jsx)(n.code,{children:"fr.nvh.begin.spring"}),". C'est la classe de d\xe9marrage de ton application."]}),"\n",(0,i.jsxs)(n.li,{children:["Un fichier ",(0,i.jsx)(n.code,{children:"application.properties"})," dans le dossier ",(0,i.jsx)(n.code,{children:"src/main/resources"}),". C'est le fichier de configuration de ton application."]}),"\n",(0,i.jsxs)(n.li,{children:["Un fichier ",(0,i.jsx)(n.code,{children:"DebuteAvecSpringApplication.java"})," dans le package ",(0,i.jsx)(n.code,{children:"fr.nvh.begin.spring"}),". C'est le fichier de test de ton application."]}),"\n",(0,i.jsxs)(n.li,{children:["Un fichier ",(0,i.jsx)(n.code,{children:"HELP.md"})," qui contient des informations et des guides sur Spring."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Ignore le reste pour l'instant."}),"\n",(0,i.jsxs)(n.p,{children:["Bon, commen\xe7ons par le commencement. Le fichier ",(0,i.jsx)(n.code,{children:"pom.xml"})," (ou ",(0,i.jsx)(n.code,{children:"build.gradle"}),"). Va jeter un \u0153il, tu y verras toutes les d\xe9pendances que tu as ajout\xe9es. Tu pourras aussi y ajouter d'autres d\xe9pendances plus tard."]}),"\n",(0,i.jsx)(n.p,{children:"Et tu peux d\xe9j\xe0 lancer ton application\xa0! Tu verras, \xe7a ne fait pas grand-chose pour l'instant. Mais c'est d\xe9j\xe0 un bon d\xe9but."}),"\n",(0,i.jsx)(n.p,{children:"Regardons un peu ces logs. Tu verras, c'est tr\xe8s verbeux. Mais c'est normal. C'est Spring qui te dit tout ce qu'il fait. Et c'est tr\xe8s pratique pour comprendre ce qui se passe. Int\xe9ressons-nous \xe0 quelque lignes en particulier\xa0:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Un petit d'ASCII art qui te dit que c'est Spring Boot qui d\xe9marre.","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::                (v3.2.2)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Si tu as mis ",(0,i.jsx)(n.strong,{children:"Spring Boot Devtools"}),", tu verras une ligne qui te dit que le rechargement \xe0 chaud est activ\xe9\xa0: ",(0,i.jsx)(n.code,{children:"LiveReload server is running on port 35729"})]}),"\n",(0,i.jsxs)(n.li,{children:["Tu verras aussi deux lignes qui te disent que la base de donn\xe9es est d\xe9marr\xe9e.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"HikariPool-1 - Added connection conn0: url=jdbc:h2:mem:006fa2a9-f721-437e-ad84-dfc02dc70c38 user=SA"})," pour la connection \xe0 la base de donn\xe9es."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"H2 console available at '/h2-console'. Database available at 'jdbc:h2:mem:3e3e3e3e-3e3e-3e3e-3e3e-3e3e3e3e3e3e'"})," pour t'annoncer que tu peux acc\xe9der \xe0 la base de donn\xe9es \xe0 l'adresse ",(0,i.jsx)(n.a,{href:"http://localhost:8080/h2-console",children:"http://localhost:8080/h2-console"}),". Moi, j'adore."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Tu verras aussi une ligne qui te dit que le serveur d'application est d\xe9marr\xe9.\n",(0,i.jsx)(n.code,{children:"Tomcat started on port(s): 8080 (http) with context path ''"})]}),"\n",(0,i.jsxs)(n.li,{children:["Et tu verras une ligne qui te dit que l'application est d\xe9marr\xe9e.\n",(0,i.jsx)(n.code,{children:"Started DebuteAvecSpringApplication in 1.5 seconds (JVM running for 2.1)"})]}),"\n",(0,i.jsx)(n.li,{children:"Tu verras aussi des lignes qui te disent qu'Hibernate est lanc\xe9."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Du coup, va voir ta base de donn\xe9es\xa0! Tu peux y acc\xe9der \xe0 l'adresse ",(0,i.jsx)(n.a,{href:"http://localhost:8080/h2-console",children:"http://localhost:8080/h2-console"}),", remplis le champ ",(0,i.jsx)(n.code,{children:"JDBC URL:"})," avec l'url que tu trouves dans les logs, ici ",(0,i.jsx)(n.code,{children:"jdbc:h2:mem:006fa2a9-f721-437e-ad84-dfc02dc70c38"}),". Tu verras que tu as une base de donn\xe9es H2 qui est d\xe9marr\xe9e. Bon, elle est vide, mais c'est d\xe9j\xe0 un bon d\xe9but."]}),"\n",(0,i.jsxs)(n.p,{children:["Et tu peux aussi acc\xe9der \xe0 ton application \xe0 l'adresse ",(0,i.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"}),". Tu verras une belle page d'erreur. C'est normal, tu n'as pas encore de page \xe0 afficher."]}),"\n",(0,i.jsx)(n.p,{children:"Et voil\xe0, tu as d\xe9j\xe0 une application Spring qui tourne. Tu peux d\xe9j\xe0 commencer \xe0 coder. On y va\xa0?"}),"\n",(0,i.jsx)(n.p,{children:"Ok, mais pas maintenant, je vais m'arr\xeater l\xe0 pour aujourd'hui. Je te laisse dig\xe9rer tout \xe7a. Et je te donne rendez-vous dans le prochain article pour commencer \xe0 coder et \xe0 configurer ton application."}),"\n",(0,i.jsx)(n.h2,{id:"pour-aller-plus-loin",children:"Pour aller plus loin"}),"\n",(0,i.jsx)(n.p,{children:"Voici quelques liens pour approfondir les sujets abord\xe9s dans cet article en attendant le prochain article\xa0!"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Wikipedia\xa0:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Java_(langage)",children:"Java"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Kotlin_(langage)",children:"Kotlin"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Groovy_(langage)",children:"Groovy"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Apache_Maven",children:"Maven"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Gradle",children:"Gradle"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Spring_Framework",children:"Spring"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/H2_(base_de_donn%C3%A9es)",children:"H2 Database"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Spring\xa0:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://spring.io/",children:"Spring"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://start.spring.io/",children:"Spring Initializr"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://spring.io/projects/spring-boot",children:"Spring Boot"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://spring.io/projects/spring-data-jpa",children:"Spring Data JPA"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://spring.io/guides/gs/producing-web-service/",children:"Spring Web Services"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://spring.io/guides/gs/testing-web/",children:"Spring Boot Test"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/using-spring-boot.html#using-boot-devtools",children:"Spring Boot DevTools"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://spring.io/projects/spring-security",children:"Spring Security"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Les sites officiels\xa0:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.h2database.com/html/main.html",children:"H2 Database"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://projectlombok.org/",children:"Lombok"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://hibernate.org/",children:"Hibernate"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://gradle.org/",children:"Gradle"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://maven.apache.org/",children:"Maven"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.java.com/fr/",children:"Java"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://kotlinlang.org/",children:"Kotlin"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://groovy-lang.org/",children:"Groovy"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openclassrooms.com/fr",children:"Cours en ligne OpenClassrooms"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.jetbrains.com/fr-fr/idea/",children:"IntelliJ IDEA"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Baeldung\xa0:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.baeldung.com/spring-tutorial",children:"Spring"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.baeldung.com/spring-boot",children:"Spring Boot"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.baeldung.com/spring-vs-spring-boot",children:"A Comparison Between Spring and Spring Boot"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa",children:"Spring Data JPA"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.baeldung.com/spring-webserviceservertest",children:"Spring Web Services"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.baeldung.com/spring-boot-testing",children:"Spring Boot Test"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.baeldung.com/spring-boot-devtools",children:"Spring Boot DevTools"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Je t'ai expliqu\xe9 ce qu'est Spring et pourquoi c'est un framework incontournable pour un d\xe9veloppeur Java."}),"\n",(0,i.jsxs)(n.p,{children:["Je t'ai expliqu\xe9 comment cr\xe9er une application Spring en quelques minutes gr\xe2ce \xe0 ",(0,i.jsx)(n.a,{href:"https://start.spring.io/",children:"Spring Initializr"})," et je t'ai m\xeame donn\xe9 des d\xe9pendances pour commencer."]}),"\n",(0,i.jsxs)(n.p,{children:["J'esp\xe8re que tu as appris des choses. Et j'esp\xe8re que tu as envie d'en apprendre encore plus. Parce que c'est pas fini. Et je te donne rendez-vous dans le ",(0,i.jsx)(n.a,{href:"/blog/continue-spring",children:"prochain article"})," pour commencer \xe0 coder et \xe0 configurer ton application."]}),"\n",(0,i.jsx)(n.p,{children:"Si tu as envie que j'explique plus en avant certains concepts ou que je parle de quelque chose en particulier, n'h\xe9site pas \xe0 me le dire dans les commentaires."}),"\n",(0,i.jsxs)(n.p,{children:["Pour ne pas rater les prochains articles, abonne-toi \xe0 un flux (tu as le choix entre ",(0,i.jsx)(n.a,{href:"https://nathaniel-vaur-henel.github.io/blog/rss.xml",children:"RSS"}),", ",(0,i.jsx)(n.a,{href:"https://nathaniel-vaur-henel.github.io/blog/atom.xml",children:"Atom"})," et ",(0,i.jsx)(n.a,{href:"https://nathaniel-vaur-henel.github.io/blog/feeed.json",children:"Json"}),") ou \xe0 la newsletter en ",(0,i.jsx)(n.a,{href:"/",children:"page d'accueil"}),"\xa0!"]}),"\n",(0,i.jsx)(n.p,{children:"Et bon entrainement\xa0!"})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4507:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/spring_initializer_basics-8adebadc5d4e4a2d26c675fda49f4eea.png"},7223:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/spring_initializer_dependencies-d87e33d300a9729c99a1856657cf677a.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var i=r(7294);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);