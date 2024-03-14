/*! For license information please see 7897.fcc58183.js.LICENSE.txt */
"use strict";(self.webpackChunknathaniel_vaur_henel_github_io=self.webpackChunknathaniel_vaur_henel_github_io||[]).push([[7897],{9614:(t,e)=>{Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,m=globalThis,g=m.trustedTypes,_=g?g.emptyScript:"",f=m.reactiveElementPolyfillSupport,v=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},b=(t,e)=>!l(t,e),y={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:b};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return null==i?void 0:i.call(this)},set(e){const n=null==i?void 0:i.call(this);r.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const t=this._$Eu(e,s);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),null==(t=this.constructor.l)||t.forEach((t=>t(this)))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&(null==(e=t.hostConnected)||e.call(t))}removeController(t){var e;null==(e=this._$E_)||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(i)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=s.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$E_)||t.forEach((t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$E_)||t.forEach((t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(s=t.converter)?void 0:s.fromAttribute)?t.converter:$;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??b)(i?r:this[t],e))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],s)}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null==(t=this._$E_)||t.forEach((t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)})),this.update(s)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null==(e=this._$E_)||e.forEach((t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EO(t,this[t])))),this._$ET()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[v("elementProperties")]=new Map,A[v("finalized")]=new Map,null==f||f({ReactiveElement:A}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.2");const S=globalThis,x=S.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,w="?"+C,j=`<${w}>`,N=document,T=()=>N.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,k="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,R=/>/g,H=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,G=/"/g,Z=/^(?:script|style|textarea|title)$/i,W=(V=1,(t,...e)=>({_$litType$:V,strings:t,values:e})),B=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),z=new WeakMap,F=N.createTreeWalker(N,129);var V;function q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,c]=((t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=M;for(let a=0;a<s;a++){const e=t[a];let s,l,c=-1,h=0;for(;h<e.length&&(o.lastIndex=h,l=o.exec(e),null!==l);)h=o.lastIndex,o===M?"!--"===l[1]?o=O:void 0!==l[1]?o=R:void 0!==l[2]?(Z.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=H):void 0!==l[3]&&(o=H):o===H?">"===l[0]?(o=r??M,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?H:'"'===l[3]?G:L):o===G||o===L?o=H:o===O||o===R?o=M:(o=H,r=void 0);const d=o===H&&t[a+1].startsWith("/>")?" ":"";n+=o===M?e+j:c>=0?(i.push(s),e.slice(0,c)+P+e.slice(c)+C+d):e+C+(-2===c?a:d)}return[q(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),i]})(t,e);if(this.el=K.createElement(l,s),F.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(P)){const e=c[n++],s=i.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:X}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(Z.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),F.nextNode(),a.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===w)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=N.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){var r,n;if(e===B)return e;let o=void 0!==i?null==(r=s._$Co)?void 0:r[i]:s._$Cl;const a=U(e)?void 0:e._$litDirective$;return(null==o?void 0:o.constructor)!==a&&(null==(n=null==o?void 0:o._$AO)||n.call(o,!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??(s._$Co=[]))[i]=o:s._$Cl=o),void 0!==o&&(e=Y(t,o._$AS(t,e.values),o,i)),e}let J=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((null==t?void 0:t.creationScope)??N).importNode(e,!0);F.currentNode=i;let r=F.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=s[++o]}n!==(null==a?void 0:a.index)&&(r=F.nextNode(),n++)}return F.currentNode=N,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}};class Q{get _$AU(){var t;return(null==(t=this._$AM)?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),U(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>I(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==D&&U(this._$AH)?this._$AA.nextSibling.data=t:this.$(N.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(q(i.h,i.h[0]),this.options)),i);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.p(s);else{const t=new J(r,this),e=t.u(this.options);t.p(s),this.$(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new K(t)),e}T(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Q(this.k(T()),this.k(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null==(s=this._$AP)||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null==(e=this._$AP)||e.call(this,t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=D}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=Y(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Y(this,i[s+o],e,o),a===B&&(a=this._$AH[o]),n||(n=!U(a)||a!==this._$AH[o]),a===D?t=D:t!==D&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.O(t)}O(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===D?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}}class st extends X{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??D)===B)return;const s=this._$AH,i=t===D&&s!==D||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==D&&(s===D||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;"function"==typeof this._$AH?this._$AH.call((null==(e=this.options)?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const rt=S.litHtmlPolyfillSupport;null==rt||rt(K,Q),(S.litHtmlVersions??(S.litHtmlVersions=[])).push("3.1.0");let nt=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=(null==s?void 0:s.renderBefore)??e;let r=i._$litPart$;if(void 0===r){const t=(null==s?void 0:s.renderBefore)??null;i._$litPart$=r=new Q(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return B}};var ot;nt._$litElement$=!0,nt.finalized=!0,null==(ot=globalThis.litElementHydrateSupport)||ot.call(globalThis,{LitElement:nt});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:nt}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");const lt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:b},ct=(t=lt,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t)},init(e){return void 0!==e&&this.C(i,void 0,t),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t)}}throw Error("Unsupported decorator location: "+i)};function ht(t){return(e,s)=>"object"==typeof s?ct(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const dt=2;let ut=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const pt=(t,e)=>{var s;const i=t._$AN;if(void 0===i)return!1;for(const r of i)null==(s=r._$AO)||s.call(r,e,!1),pt(r,e);return!0},mt=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},gt=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),vt(e)}};function _t(t){void 0!==this._$AN?(mt(this),this._$AM=t,gt(this)):this._$AM=t}function ft(t,e=!1,s=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(i))for(let n=s;n<i.length;n++)pt(i[n],!1),mt(i[n]);else null!=i&&(pt(i,!1),mt(i));else pt(this,t)}const vt=t=>{t.type==dt&&(t._$AP??(t._$AP=ft),t._$AQ??(t._$AQ=_t))};class $t extends ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),gt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null==(s=this.reconnected)||s.call(this):null==(i=this.disconnected)||i.call(this)),e&&(pt(this,t),mt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class bt{}const yt=new WeakMap,At=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends $t{render(t){return D}update(t,[e]){var s;const i=e!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.ct=null==(s=t.options)?void 0:s.host,this.ot(this.lt=t.element)),D}ot(t){if("function"==typeof this.G){const e=this.ct??globalThis;let s=yt.get(e);void 0===s&&(s=new WeakMap,yt.set(e,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e;return"function"==typeof this.G?null==(t=yt.get(this.ct??globalThis))?void 0:t.get(this.G):null==(e=this.G)?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var St=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,Et=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?xt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&St(e,s,n),n};e.GiscusWidget=class extends nt{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new bt,this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return null==(t=this._iframeRef)?void 0:t.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){const t=location.href,e=new URL(t),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=e.searchParams.get("giscus")??"";if(this.__session="",i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,e.searchParams.delete("giscus"),e.hash="",void history.replaceState(void 0,document.title,e.toString());if(s)try{this.__session=JSON.parse(s)}catch(r){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==r?void 0:r.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(t){if(t.origin!==this._host)return;const{data:e}=t;if("object"!=typeof e||!e.giscus)return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),e.giscus.signOut)return console.info("[giscus] User has logged out. Session has been cleared."),void this.signOut();if(!e.giscus.error)return;const s=e.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")||s.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return console.warn(`${this._formatError(s)} Session has been cleared.`),void this.signOut();console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}s.includes("Discussion not found")?console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){var e;null==(e=this.iframeRef)||!e.contentWindow||!this.hasLoaded||this.iframeRef.contentWindow.postMessage({giscus:t},this._host)}updateConfig(){const t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;null==(t=this.iframeRef)||t.addEventListener("load",(()=>{var t;null==(t=this.iframeRef)||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()}))}requestUpdate(t,e,s){this.hasUpdated&&"host"!==t?this.updateConfig():super.requestUpdate(t,e,s)}getMetaContent(t,e=!1){const s=e?`meta[property='og:${t}'],`:"",i=document.querySelector(s+`meta[name='${t}']`);return i?i.content:""}_getCleanedUrl(){const t=new URL(location.href);return t.searchParams.delete("giscus"),t.hash="",t}getTerm(){switch(this.mapping){case"url":return this._getCleanedUrl().toString();case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term??"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping?this.term??"":""}getIframeSrc(){const t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,s=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||t,r={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId??"",category:this.category??"",categoryId:this.categoryId??"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:i};return`${this._host}${this.lang?`/${this.lang}`:""}/widget?${new URLSearchParams(r).toString()}`}render(){return W`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${At(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},e.GiscusWidget.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,t,r)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,Et([ht({reflect:!0})],e.GiscusWidget.prototype,"host",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"repo",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"repoId",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"category",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"categoryId",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"mapping",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"term",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"strict",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"reactionsEnabled",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"emitMetadata",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"inputPosition",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"theme",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"lang",2),Et([ht({reflect:!0})],e.GiscusWidget.prototype,"loading",2),e.GiscusWidget=Et([function(t){return customElements.get(t)?t=>t:(t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})(t)}("giscus-widget")],e.GiscusWidget)},8071:(t,e,s)=>{const i=s(5893),r=s(7294);t.exports=function({id:t,host:e,repo:n,repoId:o,category:a,categoryId:l,mapping:c,term:h,strict:d,reactionsEnabled:u,emitMetadata:p,inputPosition:m,theme:g,lang:_,loading:f}){const[v,$]=r.useState(!1);return r.useEffect((()=>{v||(Promise.resolve().then((()=>s(9614))),$(!0))}),[]),v?i.jsx("giscus-widget",{id:t,host:e,repo:n,repoid:o,category:a,categoryid:l,mapping:c,term:h,strict:d,reactionsenabled:u,emitmetadata:p,inputposition:m,theme:g,lang:_,loading:f}):null}},1460:(t,e,s)=>{s.d(e,{Z:()=>$});var i=s(7294),r=s(512),n=s(7293),o=s(7524),a=s(3692),l=s(5999),c=s(6550),h=s(8596);function d(t){const{pathname:e}=(0,c.TH)();return(0,i.useMemo)((()=>t.filter((t=>function(t,e){return!(t.unlisted&&!(0,h.Mg)(t.permalink,e))}(t,e)))),[t,e])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var p=s(5893);function m(t){let{sidebar:e}=t;const s=d(e.items);return(0,p.jsx)("aside",{className:"col col--3",children:(0,p.jsxs)("nav",{className:(0,r.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,l.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,p.jsx)("div",{className:(0,r.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:e.title}),(0,p.jsx)("ul",{className:(0,r.Z)(u.sidebarItemList,"clean-list"),children:s.map((t=>(0,p.jsx)("li",{className:u.sidebarItem,children:(0,p.jsx)(a.Z,{isNavLink:!0,to:t.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:t.title})},t.permalink)))})]})})}var g=s(3102);function _(t){let{sidebar:e}=t;const s=d(e.items);return(0,p.jsx)("ul",{className:"menu__list",children:s.map((t=>(0,p.jsx)("li",{className:"menu__list-item",children:(0,p.jsx)(a.Z,{isNavLink:!0,to:t.permalink,className:"menu__link",activeClassName:"menu__link--active",children:t.title})},t.permalink)))})}function f(t){return(0,p.jsx)(g.Zo,{component:_,props:t})}function v(t){let{sidebar:e}=t;const s=(0,o.i)();return e?.items.length?"mobile"===s?(0,p.jsx)(f,{sidebar:e}):(0,p.jsx)(m,{sidebar:e}):null}function $(t){const{sidebar:e,toc:s,children:i,...o}=t,a=e&&e.items.length>0;return(0,p.jsx)(n.Z,{...o,children:(0,p.jsx)("div",{className:"container margin-vert--lg",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)(v,{sidebar:e}),(0,p.jsx)("main",{className:(0,r.Z)("col",{"col--7":a,"col--9 col--offset-1":!a}),itemScope:!0,itemType:"https://schema.org/Blog",children:i}),s&&(0,p.jsx)("div",{className:"col col--2",children:s})]})})})}},390:(t,e,s)=>{s.d(e,{Z:()=>U});s(7294);var i=s(512),r=s(9460),n=s(4996),o=s(5893);function a(t){let{children:e,className:s}=t;const{frontMatter:i,assets:a,metadata:{description:l}}=(0,r.C)(),{withBaseUrl:c}=(0,n.C)(),h=a.image??i.image,d=i.keywords??[];return(0,o.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[l&&(0,o.jsx)("meta",{itemProp:"description",content:l}),h&&(0,o.jsx)("link",{itemProp:"image",href:c(h,{absolute:!0})}),d.length>0&&(0,o.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),e]})}var l=s(3692);const c={title:"title_f1Hy"};function h(t){let{className:e}=t;const{metadata:s,isBlogPostPage:n}=(0,r.C)(),{permalink:a,title:h}=s,d=n?"h1":"h2";return(0,o.jsx)(d,{className:(0,i.Z)(c.title,e),itemProp:"headline",children:n?h:(0,o.jsx)(l.Z,{itemProp:"url",to:a,children:h})})}var d=s(5999),u=s(8824);const p={container:"container_mt6G"};function m(t){let{readingTime:e}=t;const s=function(){const{selectMessage:t}=(0,u.c)();return e=>{const s=Math.ceil(e);return t(s,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,o.jsx)(o.Fragment,{children:s(e)})}function g(t){let{date:e,formattedDate:s}=t;return(0,o.jsx)("time",{dateTime:e,itemProp:"datePublished",children:s})}function _(){return(0,o.jsx)(o.Fragment,{children:" \xb7 "})}function f(t){let{className:e}=t;const{metadata:s}=(0,r.C)(),{date:n,formattedDate:a,readingTime:l}=s;return(0,o.jsxs)("div",{className:(0,i.Z)(p.container,"margin-vert--md",e),children:[(0,o.jsx)(g,{date:n,formattedDate:a}),void 0!==l&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{}),(0,o.jsx)(m,{readingTime:l})]})]})}function v(t){return t.href?(0,o.jsx)(l.Z,{...t}):(0,o.jsx)(o.Fragment,{children:t.children})}function $(t){let{author:e,className:s}=t;const{name:r,title:n,url:a,imageURL:l,email:c}=e,h=a||c&&`mailto:${c}`||void 0;return(0,o.jsxs)("div",{className:(0,i.Z)("avatar margin-bottom--sm",s),children:[l&&(0,o.jsx)(v,{href:h,className:"avatar__photo-link",children:(0,o.jsx)("img",{className:"avatar__photo",src:l,alt:r,itemProp:"image"})}),r&&(0,o.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,o.jsx)("div",{className:"avatar__name",children:(0,o.jsx)(v,{href:h,itemProp:"url",children:(0,o.jsx)("span",{itemProp:"name",children:r})})}),n&&(0,o.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:n})]})]})}const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function y(t){let{className:e}=t;const{metadata:{authors:s},assets:n}=(0,r.C)();if(0===s.length)return null;const a=s.every((t=>{let{name:e}=t;return!e}));return(0,o.jsx)("div",{className:(0,i.Z)("margin-top--md margin-bottom--sm",a?b.imageOnlyAuthorRow:"row",e),children:s.map(((t,e)=>(0,o.jsx)("div",{className:(0,i.Z)(!a&&"col col--6",a?b.imageOnlyAuthorCol:b.authorCol),children:(0,o.jsx)($,{author:{...t,imageURL:n.authorsImageUrls[e]??t.imageURL}})},e)))})}function A(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(h,{}),(0,o.jsx)(f,{}),(0,o.jsx)(y,{})]})}var S=s(8780),x=s(7917);function E(t){let{children:e,className:s}=t;const{isBlogPostPage:n}=(0,r.C)();return(0,o.jsx)("div",{id:n?S.blogPostContainerID:void 0,className:(0,i.Z)("markdown",s),itemProp:"articleBody",children:(0,o.jsx)(x.Z,{children:e})})}var P=s(4881),C=s(1526);function w(){return(0,o.jsx)("b",{children:(0,o.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function j(t){const{blogPostTitle:e,...s}=t;return(0,o.jsx)(l.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:e}),...s,children:(0,o.jsx)(w,{})})}const N={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function T(){const{metadata:t,isBlogPostPage:e}=(0,r.C)(),{tags:s,title:n,editUrl:a,hasTruncateMarker:l}=t,c=!e&&l,h=s.length>0;return h||c||a?(0,o.jsxs)("footer",{className:(0,i.Z)("row docusaurus-mt-lg",e&&N.blogPostFooterDetailsFull),children:[h&&(0,o.jsx)("div",{className:(0,i.Z)("col",{"col--9":c}),children:(0,o.jsx)(C.Z,{tags:s})}),e&&a&&(0,o.jsx)("div",{className:"col margin-top--sm",children:(0,o.jsx)(P.Z,{editUrl:a})}),c&&(0,o.jsx)("div",{className:(0,i.Z)("col text--right",{"col--3":h}),children:(0,o.jsx)(j,{blogPostTitle:n,to:t.permalink})})]}):null}function U(t){let{children:e,className:s}=t;const n=function(){const{isBlogPostPage:t}=(0,r.C)();return t?void 0:"margin-bottom--xl"}();return(0,o.jsxs)(a,{className:(0,i.Z)(n,s),children:[(0,o.jsx)(A,{}),(0,o.jsx)(E,{children:e}),(0,o.jsx)(T,{})]})}},4881:(t,e,s)=>{s.d(e,{Z:()=>h});s(7294);var i=s(5999),r=s(5281),n=s(3692),o=s(512);const a={iconEdit:"iconEdit_Z9Sw"};var l=s(5893);function c(t){let{className:e,...s}=t;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(a.iconEdit,e),"aria-hidden":"true",...s,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function h(t){let{editUrl:e}=t;return(0,l.jsxs)(n.Z,{to:e,className:r.k.common.editThisPage,children:[(0,l.jsx)(c,{}),(0,l.jsx)(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},2244:(t,e,s)=>{s.d(e,{Z:()=>o});s(7294);var i=s(512),r=s(3692),n=s(5893);function o(t){const{permalink:e,title:s,subLabel:o,isNext:a}=t;return(0,n.jsxs)(r.Z,{className:(0,i.Z)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:e,children:[o&&(0,n.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,n.jsx)("div",{className:"pagination-nav__label",children:s})]})}},3008:(t,e,s)=>{s.d(e,{Z:()=>a});s(7294);var i=s(512),r=s(3692);const n={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var o=s(5893);function a(t){let{permalink:e,label:s,count:a}=t;return(0,o.jsxs)(r.Z,{href:e,className:(0,i.Z)(n.tag,a?n.tagWithCount:n.tagRegular),children:[s,a&&(0,o.jsx)("span",{children:a})]})}},1526:(t,e,s)=>{s.d(e,{Z:()=>l});s(7294);var i=s(512),r=s(5999),n=s(3008);const o={tags:"tags_jXut",tag:"tag_QGVx"};var a=s(5893);function l(t){let{tags:e}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("b",{children:(0,a.jsx)(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,a.jsx)("ul",{className:(0,i.Z)(o.tags,"padding--none","margin-left--sm"),children:e.map((t=>{let{label:e,permalink:s}=t;return(0,a.jsx)("li",{className:o.tag,children:(0,a.jsx)(n.Z,{label:e,permalink:s})},s)}))})]})}},9460:(t,e,s)=>{s.d(e,{C:()=>l,n:()=>a});var i=s(7294),r=s(902),n=s(5893);const o=i.createContext(null);function a(t){let{children:e,content:s,isBlogPostPage:r=!1}=t;const a=function(t){let{content:e,isBlogPostPage:s}=t;return(0,i.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:s})),[e,s])}({content:s,isBlogPostPage:r});return(0,n.jsx)(o.Provider,{value:a,children:e})}function l(){const t=(0,i.useContext)(o);if(null===t)throw new r.i6("BlogPostProvider");return t}},8824:(t,e,s)=>{s.d(e,{c:()=>c});var i=s(7294),r=s(2263);const n=["zero","one","two","few","many","other"];function o(t){return n.filter((e=>t.includes(e)))}const a={locale:"en",pluralForms:o(["one","other"]),select:t=>1===t?"one":"other"};function l(){const{i18n:{currentLocale:t}}=(0,r.Z)();return(0,i.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:o(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),a}}),[t])}function c(){const t=l();return{selectMessage:(e,s)=>function(t,e,s){const i=t.split("|");if(1===i.length)return i[0];i.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${i.length}: ${t}`);const r=s.select(e),n=s.pluralForms.indexOf(r);return i[Math.min(n,i.length-1)]}(s,e,t)}}},9861:(t,e,s)=>{s.d(e,{Z:()=>i});const i=s(8071)}}]);