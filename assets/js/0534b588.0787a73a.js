"use strict";(self.webpackChunkctdlct_177_2=self.webpackChunkctdlct_177_2||[]).push([[1687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="T\u1ed5ng quan",c={unversionedId:"adts-stack/intro",id:"adts-stack/intro",title:"T\u1ed5ng quan",description:"banner",source:"@site/docs/adts-stack/intro.md",sourceDirName:"adts-stack",slug:"/adts-stack/intro",permalink:"/docs/adts-stack/intro",draft:!1,editUrl:"https://github.com/thangved/datastructure/docs/adts-stack/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Th\u01b0 vi\u1ec7n danh s\xe1ch li\xean k\u1ebft (PListLib.c)",permalink:"/docs/adts-pointerlist/PListLib"},next:{title:"M\u1ed9t s\u1ed1 ph\xe9p to\xe1n tr\xean Stack",permalink:"/docs/adts-stack/default-function"}},l={},p=[{value:"Kh\xe1i ni\u1ec7m",id:"kh\xe1i-ni\u1ec7m",level:2},{value:"MaxLength",id:"maxlength",level:3},{value:"ElementType",id:"elementtype",level:3}],s={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"t\u1ed5ng-quan"},"T\u1ed5ng quan"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"banner",src:n(8737).Z,width:"1905",height:"652"})),(0,a.kt)("h2",{id:"kh\xe1i-ni\u1ec7m"},"Kh\xe1i ni\u1ec7m"),(0,a.kt)("admonition",{title:"Kh\xe1i ni\u1ec7m",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"L\xe0 m\u1ed9t d\u1ea1ng ",(0,a.kt)("inlineCode",{parentName:"p"},"danh s\xe1ch")," \u0111\u1eb7c bi\u1ec7t m\xe0 vi\u1ec7c th\xeam hay x\xf3a m\u1ed9t ph\u1ea7n t\u1eed ch\u1ec9 th\u1ef1c hi\u1ec7n t\u1ea1i m\u1ed9t \u0111\u1ea7u hay \u0111\u1ec9nh c\u1ee7a danh s\xe1ch.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct{\n    ElementType Elements[MaxLength];\n    int Top_idx;\n} Stack;\n")),(0,a.kt)("h3",{id:"maxlength"},"MaxLength"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"L\xe0 s\u1ed1 ph\u1ea7n t\u1eed t\u1ed1i \u0111a c\u1ee7a ",(0,a.kt)("inlineCode",{parentName:"p"},"Stack"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#define MaxLength <number>\n")),(0,a.kt)("h3",{id:"elementtype"},"ElementType"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ki\u1ec3u ph\u1ea7n t\u1eed c\u1ee7a ng\u0103n x\u1ebfp.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"typedef <type> ElementType;\n")))}u.isMDXComponent=!0},8737:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nx-banner-49a3446531de4459910b921e9bf6a3a9.png"}}]);