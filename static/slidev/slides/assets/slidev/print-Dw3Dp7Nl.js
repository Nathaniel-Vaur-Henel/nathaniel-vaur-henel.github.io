import{d,a9 as u,y as h,b as s,e as t,x as a,A as r,F as f,a7 as v,o as n,aa as g,l as x,g as b}from"../modules/vue-BU08-IgL.js";import{u as y,j as N,c as m,b as k}from"../index-C22DQC30.js";import{N as w}from"./NoteDisplay-BSczif5M.js";import"../modules/shiki-CYH36rHa.js";const L={id:"page-root"},T={class:"m-4"},V={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},C={class:"opacity-50"},D={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),A={key:0,class:"border-main mb-8"},F=d({__name:"print",setup(M){const{slides:p,total:_}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const i=h(()=>p.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),s("div",L,[t("div",T,[t("div",V,[t("h1",B,a(r(m).title),1),t("div",C,a(new Date().toLocaleString()),1)]),(n(!0),s(f,null,v(i.value,(e,c)=>(n(),s("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",D,[t("div",H,[t("div",S,a(e==null?void 0:e.no)+"/"+a(r(_)),1),g(" "+a(e==null?void 0:e.title)+" ",1),j])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),s("hr",A)):b("v-if",!0)]))),128))])]))}}),q=k(F,[["__file","C:/Workspace/nathaniel-vaur-henel.github.io/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{q as default};
