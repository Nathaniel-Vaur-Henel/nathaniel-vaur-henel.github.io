"use strict";(self.webpackChunknathaniel_vaur_henel_github_io=self.webpackChunknathaniel_vaur_henel_github_io||[]).push([[8390],{4055:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=a(4848),t=a(8453);const s={slug:"/spring-pagination",title:"Paginer ses r\xe9sultats avec Spring",authors:"nvh",tags:["Java","Spring","langage","d\xe9veloppement","tuto"],enableComments:!0},i=void 0,l={permalink:"/blog/spring-pagination",source:"@site/blog/2024/2024-05-09.spring_paging.md",title:"Paginer ses r\xe9sultats avec Spring",description:"Il arrive encore trop souvent de tomber sur des projets mal pagin\xe9s (voire pas du tout). Or la pagination est un \xe9l\xe9ment essentiel pour \xe9viter de surcharger les serveurs et de perdre les utilisateurs.",date:"2024-05-09T00:00:00.000Z",tags:[{label:"Java",permalink:"/blog/tags/java"},{label:"Spring",permalink:"/blog/tags/spring"},{label:"langage",permalink:"/blog/tags/langage"},{label:"d\xe9veloppement",permalink:"/blog/tags/developpement"},{label:"tuto",permalink:"/blog/tags/tuto"}],hasTruncateMarker:!0,authors:[{name:"Nathaniel Vaur Henel",title:"Tech Lead, D\xe9veloppeur s\xe9nior, formateur et cr\xe9ateur de contenu",url:"https://github.com/Nathaniel-Vaur-Henel",imageURL:"https://github.com/Nathaniel-Vaur-Henel.png",key:"nvh"}],frontMatter:{slug:"/spring-pagination",title:"Paginer ses r\xe9sultats avec Spring",authors:"nvh",tags:["Java","Spring","langage","d\xe9veloppement","tuto"],enableComments:!0},unlisted:!1,nextItem:{title:"Mermaid, l'outil de cr\xe9ation de diagrammes vite faits, bien faits",permalink:"/blog/mermaid"}},o={authorsImageUrls:[void 0]},p=[{value:"La pagination des r\xe9sultats\xa0: avantages et inconv\xe9nients",id:"la-pagination-des-r\xe9sultats-avantages-et-inconv\xe9nients",level:2},{value:"La pagination sauvera ton serveur",id:"la-pagination-sauvera-ton-serveur",level:3},{value:"La pagination sauvera ton client",id:"la-pagination-sauvera-ton-client",level:3},{value:"Les inconv\xe9nients de la pagination",id:"les-inconv\xe9nients-de-la-pagination",level:3},{value:"Les grands principes de la pagination",id:"les-grands-principes-de-la-pagination",level:2},{value:"La pagination dans Spring MVC",id:"la-pagination-dans-spring-mvc",level:2},{value:"Une pagination rapide, mais sans contr\xf4le",id:"une-pagination-rapide-mais-sans-contr\xf4le",level:3},{value:"La pagination avec plus de contr\xf4le",id:"la-pagination-avec-plus-de-contr\xf4le",level:3},{value:"Le r\xe9sultat de la pagination",id:"le-r\xe9sultat-de-la-pagination",level:3},{value:"Le Use Case",id:"le-use-case",level:3},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",del:"del",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Il arrive encore trop souvent de tomber sur des projets mal pagin\xe9s (voire pas du tout). Or la pagination est un \xe9l\xe9ment essentiel pour \xe9viter de surcharger les serveurs et de perdre les utilisateurs."}),"\n",(0,r.jsxs)(n.p,{children:["Dans des articles pr\xe9c\xe9dents, je t'ai expliqu\xe9 ",(0,r.jsx)(n.a,{href:"/blog/begin-spring",children:"comment cr\xe9er un projet avec Spring Boot"})," et comment faire une ",(0,r.jsx)(n.a,{href:"/blog/continue-spring",children:"API REST avec Spring"}),". Aujourd'hui, je vais te montrer comment paginer et ordonner les r\xe9sultats de tes requ\xeates. Pour cela, nous allons encore utiliser Spring. Mais d'abord, je t'expliquerai ce qu'est la pagination et pourquoi il est important de paginer les r\xe9sultats de tes requ\xeates."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Dev sensei, raconte-moi une histoire",type:"tip",children:[(0,r.jsx)(n.p,{children:"Ceci est une anecdote 100% authentique qui s'est pass\xe9e voil\xe0 quelques ann\xe9es."}),(0,r.jsx)(n.p,{children:"Je travaille sur un plugin qui allait r\xe9cup\xe9rer des donn\xe9es depuis une API SOAP. Je commence par tester comment fonctionne le serveur (bien \xe9videmment, je n'ai pas de documentation). La console du navigateur de l'IHM journalisant les requ\xeates ex\xe9cut\xe9es, j'analyse les requ\xeates HTTP."}),(0,r.jsxs)(n.p,{children:["Je fais donc une requ\xeate simple, par d\xe9faut, sans param\xe8tres. Et l\xe0, j'attends. Longtemps. Tr\xe8s longtemps. Et ma requ\xeate plante avec une belle erreur ",(0,r.jsx)(n.code,{children:"500 Internal Server Error"}),". Je r\xe9essaie, serveur indisponible. J'attends un peu et r\xe9essaie, serveur toujours indisponible. Je me renseigne et j'apprends que le serveur est en train de red\xe9marrer, car il a plant\xe9.",(0,r.jsx)(n.br,{}),"\n","Pas de souci, je fais autre chose en attendant que le serveur soit \xe0 nouveau disponible et je recommence. J'imagine que tu as devin\xe9 la suite\xa0: le serveur plante \xe0 nouveau.",(0,r.jsx)(n.br,{}),"\n","Je m'agace sur ce serveur en carton, et j'imagine qu'un autre d\xe9v doit \xeatre en train de tester un truc pas stable dessus.",(0,r.jsx)(n.br,{}),"\n","Je repars \xe0 la chasse aux informations et on me dit que le serveur a replant\xe9, car quelqu'un a fait une requ\xeate qui a retourn\xe9 trop de donn\xe9es. Je fouille un peu et... c'est moi\xa0!"]}),(0,r.jsxs)(n.p,{children:["Et bien oui, il n'y a aucune limitation c\xf4t\xe9 serveur. Ainsi, une requ\xeate sans param\xe8tre retournait toutes les donn\xe9es de la base. Et la base \xe9tait \xe9norme, avec des liens de partout, des calculs \xe0 faire c\xf4t\xe9 serveur, et j'en passe. Je r\xe2le aupr\xe8s du mainteneur de l'application\xa0:",(0,r.jsx)(n.br,{}),"\n","\u2014 Quand m\xeame, c'est pas s\xe9rieux\xa0! Il faut mettre une valeur maximum par d\xe9faut \xe0 la pagination.",(0,r.jsx)(n.br,{}),"\n","Et le gars me r\xe9pond\xa0:",(0,r.jsx)(n.br,{}),"\n","\u2014 Les r\xe9sultats ne sont pas pagin\xe9s. Il faut utiliser des filtres c\xf4t\xe9 client pour \xe9viter de planter le serveur. Mais ne t'inqui\xe8tes pas, les utilisateurs ont l'habitude, \xe7a fait des ann\xe9es que c'est comme \xe7a\".",(0,r.jsx)(n.br,{}),"\n","\u2014 Ah... D'accord... Quand m\xeame.",(0,r.jsx)(n.br,{}),"\n","Je m'en vais donc voir le responsable technique de l'application \xe9tant donn\xe9 que je suis peu satisfait de la r\xe9ponse.",(0,r.jsx)(n.br,{}),"\n","L'int\xe9ress\xe9 me dit alors\xa0:",(0,r.jsx)(n.br,{}),"\n","\u2014 La pagination\xa0? Qu'est-ce que c'est.\"",(0,r.jsx)(n.br,{}),"\n","Un peu (juste un peu) agac\xe9, j'explique rapidement que \xe7a permet de limiter de la taille des r\xe9ponses et, en passant, que cela \xe9viterait \xe0 son serveur de planter lamentablement. Il prend des notes et me dit qu'il va voir ce qu'il peut faire."]}),(0,r.jsxs)(n.p,{children:["Le lendemain, r\xe9union de crise surprise avec tous les grands responsables techniques disponibles ainsi que le responsable du d\xe9partement. Que des gens en costard cravates. Et moi. Le responsable technique de la veille me demande\xa0:",(0,r.jsx)(n.br,{}),"\n","\u2014 Peux-tu nous expliquer la pagination\xa0?"]})]}),"\n",(0,r.jsx)(n.h2,{id:"la-pagination-des-r\xe9sultats-avantages-et-inconv\xe9nients",children:"La pagination des r\xe9sultats\xa0: avantages et inconv\xe9nients"}),"\n",(0,r.jsx)(n.p,{children:"Paginer, c'est d\xe9couper les r\xe9sultats d'une requ\xeate en plusieurs pages. Comme un livre. Cela permet de limiter la taille des r\xe9ponses et d'\xe9viter de charger trop d'informations d'un coup. Mais si, tu connais\xa0: ton moteur de recherche pr\xe9f\xe9r\xe9 et tes sites d'e-commerce paginent g\xe9n\xe9ralement de fa\xe7on tr\xe8s factuelle. Tu as 10 r\xe9sultats et en bas, tu peux changer de page."}),"\n",(0,r.jsxs)(n.p,{children:["Tous les logiciels qui permettent de faire des requ\xeates \xe0 une base de donn\xe9es paginent par d\xe9faut pour \xe9viter d'\xe9crouler le serveur. M\xeame la console H2. Mais si, tu connais, je t'en ai parl\xe9 dans cet ",(0,r.jsx)(n.a,{href:"/blog/begin-spring#avant-de-commencer-pr%C3%A9sentation-des-d%C3%A9pendances",children:"article"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Tu as aussi une pagination invisible et automatique\xa0: la page charge les premiers r\xe9sultats et quand tu les parcoures et que tu arrives vers la fin, la page charge les r\xe9sultats suivants. C'est fluide et invisible pour l'utilisateur. Sauf les bourrins qui appuient sur la touche \"fin\" pour aller directement \xe0 la fin de la page."}),"\n",(0,r.jsx)(n.h3,{id:"la-pagination-sauvera-ton-serveur",children:"La pagination sauvera ton serveur"}),"\n",(0,r.jsx)(n.p,{children:"La pagination a plusieurs utilit\xe9s tr\xe8s concr\xe8tes c\xf4t\xe9 serveur\xa0:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Elle r\xe9duit la quantit\xe9 de donn\xe9es que le serveur doit traiter. Moins de ressource, m\xe9moire et processeur, sont donc utilis\xe9es."}),"\n",(0,r.jsx)(n.li,{children:"Si le serveur doit interroger d'autres serveurs, comme une base de donn\xe9es, cela r\xe9duit la quantit\xe9 de donn\xe9es \xe0 transf\xe9rer."}),"\n",(0,r.jsx)(n.li,{children:"Elle augmente la r\xe9activit\xe9 du serveur, car les requ\xeates sont plus rapides \xe0 traiter et \xe0 transf\xe9rer."}),"\n",(0,r.jsx)(n.li,{children:"Cela stabilise le serveur qui sera moins sujet \xe0 des surcharges qui le feront ralentir."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"la-pagination-sauvera-ton-client",children:"La pagination sauvera ton client"}),"\n",(0,r.jsx)(n.p,{children:"C\xf4t\xe9 client, la pagination a aussi des avantages\xa0:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Elle r\xe9duit le temps de chargement des pages et la consommation de donn\xe9es, car moins de donn\xe9es sont transf\xe9r\xe9es."}),"\n",(0,r.jsx)(n.li,{children:"Elle permet de naviguer plus facilement dans les r\xe9sultats, car les pages sont plus l\xe9g\xe8res et plus rapides \xe0 charger. Et on peut aller directement \xe0 la page souhait\xe9e sans passer par les pages interm\xe9diaires."}),"\n",(0,r.jsx)(n.li,{children:"Dans le cas d'une pagination automatique, la premi\xe8re page s'affiche rapidement et les suivantes se chargent en arri\xe8re-plan. Cela donne l'impression que la page est plus rapide \xe0 charger."}),"\n",(0,r.jsx)(n.li,{children:"Elle \xe9vite \xe0 l'utilisateur se de retrouver submerg\xe9 par un flot d'information qu'il ne traitera pas."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"les-inconv\xe9nients-de-la-pagination",children:"Les inconv\xe9nients de la pagination"}),"\n",(0,r.jsx)(n.p,{children:"Parce que rien n'est parfait, la pagination a aussi ses inconv\xe9nients\xa0:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Elle peut \xeatre frustrante pour l'utilisateur qui doit naviguer entre les pages pour trouver l'information qu'il cherche."}),"\n",(0,r.jsx)(n.li,{children:"Elle peut entra\xeener une perte de contexte si l'utilisateur doit naviguer entre les pages pour trouver l'information qu'il cherche."}),"\n",(0,r.jsx)(n.li,{children:"Elle peut \xeatre difficile \xe0 mettre en place si les donn\xe9es ne sont pas bien structur\xe9es ou si les requ\xeates sont complexes."}),"\n",(0,r.jsx)(n.li,{children:"Elle peut \xeatre difficile \xe0 maintenir si les donn\xe9es changent fr\xe9quemment ou si les requ\xeates sont complexes."}),"\n",(0,r.jsx)(n.li,{children:"Si elle est mal impl\xe9ment\xe9e, elle peut entra\xeener des erreurs ou des incoh\xe9rences dans les r\xe9sultats."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"les-grands-principes-de-la-pagination",children:"Les grands principes de la pagination"}),"\n",(0,r.jsxs)(n.p,{children:["Le principe g\xe9n\xe9ral de la pagination est simple. Il faut ",(0,r.jsx)(n.em,{children:"juste"})," limiter le nombre de r\xe9sultats retourn\xe9s par une requ\xeate. Pour cela, on a besoin de deux param\xe8tres\xa0: le nombre de r\xe9sultats par page et le num\xe9ro de la page."]}),"\n",(0,r.jsx)(n.p,{children:"Exemple\xa0: si tu veux afficher 10 r\xe9sultats par page, tu demandes la page 1, tu auras les r\xe9sultats de 1 \xe0 10. Si tu demandes la page 2, tu auras les r\xe9sultats de 11 \xe0 20. Et ainsi de suite."}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["En SQL, utilise plut\xf4t ",(0,r.jsx)(n.code,{children:"LIMIT"})," et ",(0,r.jsx)(n.code,{children:"OFFSET"})," pour paginer les r\xe9sultats\xa0:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM table\nLIMIT 10 OFFSET 10; -- page 2\n"})}),(0,r.jsx)(n.p,{children:"Cette requ\xeate retournera les r\xe9sultats de 11 \xe0 20."}),(0,r.jsx)(n.p,{children:"Selon le SGBD, il peut y avoir des diff\xe9rences dans la syntaxe, mais le principe reste le m\xeame."})]}),"\n",(0,r.jsx)(n.p,{children:"Pour que tes r\xe9sultats soient coh\xe9rents, il faut aussi les trier. Si tu ne le fais pas, tu auras potentiellement des r\xe9sultats diff\xe9rents \xe0 chaque requ\xeate. Va expliquer \xe0 tes utilisateurs que les r\xe9sultats changent \xe0 chaque fois qu'ils rafra\xeechissent la page. Si tu le fais pour de vrai, filme leurs r\xe9actions et envoie-les-moi s'il te pla\xeet, que je me marre un peu."}),"\n",(0,r.jsx)(n.p,{children:"Et quand tu renvoies tes r\xe9sultats, n'oublie pas de renvoyer le nombre total de r\xe9sultats et de pages. Cela permettra \xe0 l'utilisateur de savoir combien de pages il y a et combien de r\xe9sultats il y a en tout."}),"\n",(0,r.jsx)(n.p,{children:"En g\xe9n\xe9ral, il faut renvoyer toutes les informations de la page. Cela permet au client de savoir o\xf9 il en est et de naviguer plus facilement entre les pages\xa0:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"le num\xe9ro de la page,"}),"\n",(0,r.jsx)(n.li,{children:"le nombre de r\xe9sultats par page,"}),"\n",(0,r.jsx)(n.li,{children:"le nombre total de r\xe9sultats,"}),"\n",(0,r.jsx)(n.li,{children:"le nombre total de pages"}),"\n",(0,r.jsx)(n.li,{children:"et bien s\xfbr les r\xe9sultats de la page."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"L'astuce de ton dev sensei",type:"info",children:(0,r.jsx)(n.p,{children:"Pense \xe0 limiter la taille maximale de tes pages, car sinon, tu auras toujours un petit malin pour te faire des pages d'un milliard de r\xe9sultats."})}),"\n",(0,r.jsxs)(n.admonition,{title:"Le moment mn\xe9motechnique",type:"info",children:[(0,r.jsx)(n.p,{children:"La pagination a besoin de trois informations pour fonctionner\xa0:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Le num\xe9ro de la page."}),"\n",(0,r.jsx)(n.li,{children:"Le nombre de r\xe9sultats par page."}),"\n",(0,r.jsx)(n.li,{children:"Le tri des r\xe9sultats."}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"la-pagination-dans-spring-mvc",children:"La pagination dans Spring MVC"}),"\n",(0,r.jsx)(n.p,{children:"Et maintenant, on va Springer\xa9\xa0!"}),"\n",(0,r.jsx)(n.h3,{id:"une-pagination-rapide-mais-sans-contr\xf4le",children:"Une pagination rapide, mais sans contr\xf4le"}),"\n",(0,r.jsxs)(n.p,{children:["Dans mon ",(0,r.jsx)(n.a,{href:"/blog/continue-spring",children:"article pr\xe9c\xe9dent sur Spring"}),", nous avions \xe9crit un sac fourre tout. Reprenons le ",(0,r.jsx)(n.a,{href:"/blog/continue-spring#%C3%A9crivons-le-controller",children:"controller"})," et modifions-le avec d'ajouter la pagination au ",(0,r.jsx)(n.code,{children:"findAll"}),"\xa0:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="SomethingController.java"',children:'package fr.nvh.begin.spring.bag;\n\nimport fr.nvh.begin.spring.bag.use.cases.SomethingFindPageUseCase;\nimport lombok.RequiredArgsConstructor;\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.ResponseStatus;\nimport org.springframework.web.bind.annotation.RestController;\n\n@Slf4j\n@RequiredArgsConstructor\n@RestController\n@RequestMapping("/api/something")\npublic class SomethingController {\n  private final SomethingFindPageUseCase somethingFindPageUseCase;\n\n  @ResponseStatus(HttpStatus.PARTIAL_CONTENT) // indique que la m\xe9thode retourne un code HTTP 206\n  @GetMapping("/page/flemmard") // g\xe9n\xe9ralement, on supprime le findAll et on garde le findPage, mais l\xe0, je garde les deux pour l\'exemple\n  public Page<SomethingDto> findPage(Pageable page) {\n    log.info("GET /api/something/page {}", page);\n    return somethingFindPageUseCase.findPage(page); // appel du use case\n  }\n  //... reste du controller\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Bien s\xfbr, je ne t'ai mis que ce qu'il y a \xe0 ajouter. Le controller initial \xe0 compl\xe9ter se trouve dans ",(0,r.jsx)(n.a,{href:"/blog/continue-spring#%C3%A9crivons-le-controller",children:"cet article"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Spring va se charger de tout pour toi. Tu pourras appeler ton endpoint avec les param\xe8tres ",(0,r.jsx)(n.code,{children:"page"})," et ",(0,r.jsx)(n.code,{children:"size"})," pour paginer tes r\xe9sultats."]}),"\n",(0,r.jsxs)(n.p,{children:["Tu peux aussi ajouter des param\xe8tres pour trier les r\xe9sultats. Pour cela, tu peux ajouter un param\xe8tre ",(0,r.jsx)(n.code,{children:"sort"})," \xe0 ta m\xe9thode avec comme valeur le nom du champ \xe0 trier. Par exemple, si tu veux trier par ",(0,r.jsx)(n.code,{children:"name"}),", tu ajoutes ",(0,r.jsx)(n.code,{children:"sort=name"})," \xe0 ta requ\xeate. Si tu veux choisir le sens du tri, tu ajoutes ",(0,r.jsx)(n.code,{children:"sort=name,asc"})," ou ",(0,r.jsx)(n.code,{children:"sort=name,desc"}),". Par d\xe9faut, le tri est ascendant. Et si tu veux ajouter un autre champ de tri, tu ajoutes un autre param\xe8tre ",(0,r.jsx)(n.code,{children:"sort"}),", comme \xe7a\xa0: ",(0,r.jsx)(n.code,{children:"sort=name,asc&sort=age,desc"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Exemple de requ\xeate",type:"note",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:"GET http://localhost:8080/api/something/page/flemmard?page=0&size=10&sort=name,asc\n"})}),(0,r.jsx)(n.p,{children:"Cette requ\xeate retournera les 10 premiers r\xe9sultats tri\xe9s par nom dans l'ordre croissant."})]}),"\n",(0,r.jsxs)(n.admonition,{title:"Attention aux Chocabugs\xa0!",type:"warning",children:[(0,r.jsxs)(n.p,{children:["Avec ",(0,r.jsx)(n.code,{children:"Pageable"}),", le nombre de pages commence \xe0 ",(0,r.jsx)(n.strong,{children:"0"}),"\xa0! Si tu n'y fais pas attention et que tu fais commencer ton num\xe9ro de page \xe0 ",(0,r.jsx)(n.strong,{children:"1"}),", il te manquera toujours la premi\xe8re page."]}),(0,r.jsx)(n.p,{children:"Et paf, \xe7a fait des Chocabugs\xa9."})]}),"\n",(0,r.jsx)(n.h3,{id:"la-pagination-avec-plus-de-contr\xf4le",children:"La pagination avec plus de contr\xf4le"}),"\n",(0,r.jsx)(n.p,{children:"C'est la version pour les flemmards o\xf9 tu laisses Spring faire le boulot pour toi. Voyons un peu une version avec plus de contr\xf4le\xa0:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="SomethingController.java"',children:'package fr.nvh.begin.spring.bag;\n\nimport fr.nvh.begin.spring.bag.use.cases.SomethingFindPageUseCase;\nimport lombok.RequiredArgsConstructor;\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.PageRequest;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.data.domain.Sort;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.ResponseStatus;\nimport org.springframework.web.bind.annotation.RestController;\n\nimport java.util.Arrays;\n\n@Slf4j\n@RequiredArgsConstructor\n@RestController\n@RequestMapping("/api/something")\npublic class SomethingController {\n  private final SomethingFindPageUseCase somethingFindPageUseCase;\n\n  @ResponseStatus(HttpStatus.PARTIAL_CONTENT) // indique que la m\xe9thode retourne un code HTTP 206\n  @GetMapping("/page/control")\n  // g\xe9n\xe9ralement, on supprime le findAll et on garde le findPage, mais l\xe0, je garde les deux pour l\'exemple\n  public Page<SomethingDto> findPage(int page, int size, String sort) {\n    log.info("GET /api/something/page?page={}&size={}&sort={}", page, size, sort);\n    Pageable pageable = PageRequest.of(page, size, Sort.by(sort));\n    return somethingFindPageUseCase.findPage(pageable); // appel du use case\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Dans cette version, tu passes les param\xe8tres et tu cr\xe9es ton ",(0,r.jsx)(n.code,{children:"Pageable"}),". Cela te permet de g\xe9rer des minimums, des maximums, un tri par d\xe9faut, etc. Tu peux aussi ajouter des contr\xf4les sur les param\xe8tres pour \xe9viter les erreurs."]}),"\n",(0,r.jsx)(n.p,{children:"Tu peux faire des choses du genre\xa0:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="SomethingController.java"',children:'package fr.nvh.begin.spring.bag;\n\nimport fr.nvh.begin.spring.bag.use.cases.SomethingFindPageUseCase;\nimport lombok.RequiredArgsConstructor;\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.PageRequest;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.data.domain.Sort;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.ResponseStatus;\n\n@Slf4j\n@RequiredArgsConstructor\n//@RestController\n@RequestMapping("/api/something")\npublic class SomethingController {\n  private final SomethingFindPageUseCase somethingFindPageUseCase;\n\n\n  @ResponseStatus(HttpStatus.PARTIAL_CONTENT) // indique que la m\xe9thode retourne un code HTTP 206\n  @GetMapping("/page/control/plus")\n  // g\xe9n\xe9ralement, on supprime le findAll et on garde le findPage, mais l\xe0, je garde les deux pour l\'exemple\n  public Page<SomethingDto> findPagePlus(int page, int size, String sort) {\n    log.info("GET /api/something/page/control/plus?page={}&size={}&sort={}", page, size, sort);\n    Pageable pageable = buildPageable(page, size, sort);\n    return somethingFindPageUseCase.findPage(pageable); // appel du use case\n  }\n\n  /**\n   * Une petite m\xe9thode \xe0 part pour que ce soit plus clair\n   */\n  private static Pageable buildPageable(int paramPage, int paramSize, String paramSort) {\n    int page = Math.min(0, paramPage); // pas de num\xe9ro de page n\xe9gatif\n    int size = Math.clamp(paramSize, 5, 20); // pas de taille d\'un million\n\n    String sort; // on v\xe9rifie que le param\xe8tre de tri est correct\n    if (paramSort.equalsIgnoreCase("name")\n            || paramSort.equalsIgnoreCase("id")\n            || paramSort.equalsIgnoreCase("description")) {\n      sort = paramSort;\n    } else {\n      // si le param\xe8tre de tri n\'est pas correct, ou null, on trie par nom\n      sort = "name";\n    }\n\n    return PageRequest.of(page, size, Sort.by(sort));\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.admonition,{title:"L'astuce de ton dev sensei",type:"info",children:[(0,r.jsx)(n.p,{children:"Tu peux du coup g\xe9rer ta pagination comme tu l'entends. Par exemple\xa0:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ajouter un tri par d\xe9faut, car sans tri, la pagination peut \xeatre bugu\xe9e."}),"\n",(0,r.jsx)(n.li,{children:"ajouter un mapping pour que les noms des champs du tri qui correspondent g\xe9n\xe9ralement \xe0 des champs du DTO correspondent aux noms des champs de la base de donn\xe9es."}),"\n",(0,r.jsxs)(n.li,{children:["ajouter des contr\xf4les sur les param\xe8tres ",(0,r.jsx)(n.code,{children:"page"})," et ",(0,r.jsx)(n.code,{children:"size"})," pour \xe9viter les erreurs."]}),"\n",(0,r.jsx)(n.li,{children:"changer le nom des param\xe8tres."}),"\n",(0,r.jsx)(n.li,{children:"changer l'emplacement des param\xe8tres, par exemple dans le header de la requ\xeate."}),"\n"]}),(0,r.jsx)(n.p,{children:"Bref, tu as le contr\xf4le absolu sur ta pagination."})]}),"\n",(0,r.jsx)(n.h3,{id:"le-r\xe9sultat-de-la-pagination",children:"Le r\xe9sultat de la pagination"}),"\n",(0,r.jsxs)(n.p,{children:["Le r\xe9sultat de la pagination est un objet ",(0,r.jsx)(n.code,{children:"Page"})," qui contient\xa0:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"content"}),"\xa0: les r\xe9sultats de la page."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pageable"}),"\xa0: les informations de la pagination qui ont \xe9t\xe9 envoy\xe9es."]}),"\n",(0,r.jsx)(n.li,{children:"Et ensuite, en vrac plein d'informations sur la page\xa0: le nombre de pages, le nombre de r\xe9sultats par page, le nombre total de r\xe9sultats, le nombre total de pages, est-ce que c'est la premi\xe8re ou la derni\xe8re page, etc."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Tu peux donc renvoyer cet objet directement \xe0 ton client. Il pourra ainsi g\xe9rer l'affichage de tes pages."}),"\n",(0,r.jsx)(n.p,{children:"Voici \xe0 quoi cela ressemble en JSON\xa0:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "content": [\n    {\n      "id": 14,\n      "name": "Thing 12",\n      "description": "HNNNOQSYBN"\n    },\n    {\n      "id": 15,\n      "name": "Thing 13",\n      "description": "MZSGVSDRWR"\n    },\n    {\n      "id": 16,\n      "name": "Thing 14",\n      "description": "XMLIPBQJWC"\n    },\n    {\n      "id": 17,\n      "name": "Thing 15",\n      "description": "UHOGWJCPQQ"\n    },\n    {\n      "id": 18,\n      "name": "Thing 16",\n      "description": "KGBZWEXIZM"\n    }\n  ],\n  "pageable": {\n    "pageNumber": 1,\n    "pageSize": 5,\n    "sort": {\n      "empty": false,\n      "sorted": true,\n      "unsorted": false\n    },\n    "offset": 5,\n    "paged": true,\n    "unpaged": false\n  },\n  "last": false,\n  "totalElements": 101,\n  "totalPages": 21,\n  "size": 5,\n  "number": 1,\n  "sort": {\n    "empty": false,\n    "sorted": true,\n    "unsorted": false\n  },\n  "first": false,\n  "numberOfElements": 5,\n  "empty": false\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"L'astuce de ton dev sensei",type:"info",children:(0,r.jsxs)(n.p,{children:["Si tes besoins sont diff\xe9rents, tu peux cr\xe9er ton propre objet de retour, quelque chose d'\xe9quivalent \xe0 ",(0,r.jsx)(n.code,{children:"Page"}),". Par contre, tu devras tout faire manuellement."]})}),"\n",(0,r.jsx)(n.h3,{id:"le-use-case",children:"Le Use Case"}),"\n",(0,r.jsxs)(n.p,{children:["Nous venons de voir le ",(0,r.jsx)(n.code,{children:"Controller"}),", passant au ",(0,r.jsx)(n.code,{children:"Use Case"}),". Je t'ai fait utiliser ",(0,r.jsx)(n.code,{children:"Pageable"})," pour g\xe9rer les param\xe8tres de pagination et ",(0,r.jsx)(n.code,{children:"Page"})," pour le retour pour une bonne raison. En effet, Spring utilise par d\xe9faut du ",(0,r.jsx)(n.code,{children:"Controller"})," au ",(0,r.jsx)(n.code,{children:"Repository"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="SomethingFindPageUseCase.java"',children:"package fr.nvh.begin.spring.bag.use.cases;\n\nimport fr.nvh.begin.spring.bag.SomethingDto;\nimport fr.nvh.begin.spring.bag.SomethingEntity;\nimport fr.nvh.begin.spring.bag.SomethingMapper;\nimport fr.nvh.begin.spring.bag.SomethingRepository;\nimport lombok.RequiredArgsConstructor;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.PageImpl;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.stereotype.Component;\n\nimport java.util.List;\n\n@RequiredArgsConstructor\n@Component\npublic class SomethingFindPageUseCase {\n\n  private final SomethingRepository repository;\n  private final SomethingMapper mapper;\n\n  /**\n   * La m\xe9thode findAll(pageable) est fourni par l'interface {@link org.springframework.data.repository.PagingAndSortingRepository}, qui est incluse dans {@link org.springframework.data.jpa.repository.JpaRepository}\n   */\n  public Page<SomethingDto> findPage(Pageable pageable) {\n    Page<SomethingEntity> paginatedResult = repository.findAll(pageable); // Une belle Page\n    List<SomethingDto> pageContent = paginatedResult\n            .stream()\n            .map(mapper::toDto) // on transforme les entit\xe9s en DTO\n            .toList();\n    return new PageImpl<>(pageContent, pageable, paginatedResult.getTotalElements());// on refait un page, mais avec les DTO\n  }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Voil\xe0. Tu as ta pagination."}),"\n",(0,r.jsxs)(n.admonition,{title:"L'astuce de ton dev sensei",type:"info",children:[(0,r.jsxs)(n.p,{children:["Si tu veux avoir ta propre impl\xe9mentation de ",(0,r.jsx)(n.code,{children:"Page"}),", tu peux l'appeler ici."]}),(0,r.jsxs)(n.p,{children:["Et n'oublie pas de v\xe9rifier quelles sont les interfaces que tu \xe9tends dans ton propre ",(0,r.jsx)(n.code,{children:"Repository"}),", sinon tu n'auras pas la m\xe9thode ",(0,r.jsx)(n.code,{children:"findAll(pageable)"}),"."]})]}),"\n",(0,r.jsx)(n.p,{children:"Voici quelques liens pour approfondir les sujets abord\xe9s dans cet article en attendant le prochain article\xa0!"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Spring\xa0:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-data/rest/docs/2.0.0.M1/reference/html/paging-chapter.html",children:"Paging and Sorting"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-data/rest/reference/paging-and-sorting.html",children:"Spring Data REST - Paging and Sorting"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Les sites officiels\xa0:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"mettre des liens"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Baeldung\xa0:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.baeldung.com/rest-api-pagination-in-spring",children:"REST Pagination in Spring"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.baeldung.com/spring-data-jpa-pagination-sorting",children:"Pagination and Sorting using Spring Data JPA"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.baeldung.com/spring-data-jpa-convert-list-page",children:"Converting List to Page Using Spring Data JPA"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.baeldung.com/spring-data-web-support",children:"Spring Data Web Support"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:["J'ai commenc\xe9 par te raconter une ",(0,r.jsx)(n.del,{children:"belle"})," histoire que j'ai v\xe9cue."]}),"\n",(0,r.jsx)(n.p,{children:"Je t'ai expliqu\xe9 ce qu'\xe9tait la pagination\xa0: le pourquoi, le comment, les avantages et les inconv\xe9nients."}),"\n",(0,r.jsx)(n.p,{children:"Je t'ai pos\xe9 les bases techniques de la pagination, ce dont tu as absolument besoin pour paginer tes r\xe9sultats."}),"\n",(0,r.jsx)(n.p,{children:"Et enfin, je t'ai montr\xe9 comment paginer tes r\xe9sultats avec Spring MVC."}),"\n",(0,r.jsxs)(n.p,{children:["J'esp\xe8re que tu as appris des choses. Et j'esp\xe8re que tu as envie d'en apprendre encore plus. Parce que ce n'est pas fini. Et je te donne rendez-vous au prochain article pour filtrer tes r\xe9sultats gr\xe2ce aux ",(0,r.jsx)(n.code,{children:"Specification"})," de Spring."]}),"\n",(0,r.jsx)(n.p,{children:"Si tu as envie que j'explique plus avant certains concepts ou que je parle de quelque chose en particulier, n'h\xe9site pas \xe0 me le dire dans les commentaires."}),"\n",(0,r.jsxs)(n.p,{children:["Pour ne pas rater les prochains articles, abonne-toi \xe0 un flux (tu as le choix entre ",(0,r.jsx)(n.a,{href:"https://nathaniel-vaur-henel.github.io/blog/rss.xml",children:"RSS"}),", ",(0,r.jsx)(n.a,{href:"https://nathaniel-vaur-henel.github.io/blog/atom.xml",children:"Atom"})," et ",(0,r.jsx)(n.a,{href:"https://nathaniel-vaur-henel.github.io/blog/feeed.json",children:"Json"}),") ou \xe0 la newsletter en ",(0,r.jsx)(n.a,{href:"/",children:"page d'accueil"}),"\xa0!"]}),"\n",(0,r.jsx)(n.p,{children:"Et bon entrainement\xa0!"})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var r=a(6540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);