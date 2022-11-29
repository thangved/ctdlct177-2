"use strict";(self.webpackChunkctdlct_177_2=self.webpackChunkctdlct_177_2||[]).push([[1770],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,u=function(e,n){if(null==e)return{};var t,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,u=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=u,g=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function m(e,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var o=t.length,a=new Array(o);a[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:u,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(7462),u=(t(7294),t(3905));const o={sidebar_position:2},a="C\xe0i \u0111\u1eb7t h\xe0ng \u0111\u1ee3i b\u1eb1ng danh s\xe1ch li\xean k\u1ebft",i={unversionedId:"adts-queue/pointer-queue",id:"adts-queue/pointer-queue",title:"C\xe0i \u0111\u1eb7t h\xe0ng \u0111\u1ee3i b\u1eb1ng danh s\xe1ch li\xean k\u1ebft",description:"Ki\u1ec3u h\xe0ng \u0111\u1ee3i",source:"@site/docs/adts-queue/pointer-queue.md",sourceDirName:"adts-queue",slug:"/adts-queue/pointer-queue",permalink:"/docs/adts-queue/pointer-queue",draft:!1,editUrl:"https://github.com/thangved/datastructure/docs/adts-queue/pointer-queue.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"T\u1ed5ng quan",permalink:"/docs/adts-queue/intro"},next:{title:"C\xe0i \u0111\u1eb7t v\xe0 \u1ee9ng d\u1ee5ng h\xe0ng \u0111\u1ee3i",permalink:"/docs/adts-queue/install-apply"}},l={},p=[{value:"Ki\u1ec3u h\xe0ng \u0111\u1ee3i",id:"ki\u1ec3u-h\xe0ng-\u0111\u1ee3i",level:2},{value:"M\u1ed9t s\u1ed1 ph\xe9p to\xe1n",id:"m\u1ed9t-s\u1ed1-ph\xe9p-to\xe1n",level:2},{value:"makenullQueue",id:"makenullqueue",level:3},{value:"emptyQueue",id:"emptyqueue",level:3},{value:"front",id:"front",level:3},{value:"deQueue",id:"dequeue",level:3},{value:"enQueue",id:"enqueue",level:3},{value:"count",id:"count",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,u.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"c\xe0i-\u0111\u1eb7t-h\xe0ng-\u0111\u1ee3i-b\u1eb1ng-danh-s\xe1ch-li\xean-k\u1ebft"},"C\xe0i \u0111\u1eb7t h\xe0ng \u0111\u1ee3i b\u1eb1ng danh s\xe1ch li\xean k\u1ebft"),(0,u.kt)("h2",{id:"ki\u1ec3u-h\xe0ng-\u0111\u1ee3i"},"Ki\u1ec3u h\xe0ng \u0111\u1ee3i"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"#include <stdlib.h>\n\ntypedef int ElementType;\n\nstruct Node\n{\n    ElementType Element;\n    struct Node *Next;\n};\n\ntypedef struct Node *Position;\n\ntypedef struct\n{\n    Position Front, Rear;\n} Queue;\n")),(0,u.kt)("h2",{id:"m\u1ed9t-s\u1ed1-ph\xe9p-to\xe1n"},"M\u1ed9t s\u1ed1 ph\xe9p to\xe1n"),(0,u.kt)("h3",{id:"makenullqueue"},"makenullQueue"),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"Kh\u1edfi t\u1ea1o m\u1ed9t h\xe0ng \u0111\u1ee3i r\u1ed7ng.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"void makenullQueue(Queue *pS)\n{\n    pS->Front = (Position)malloc(sizeof(struct Node));\n    pS->Front->Next = NULL;\n    pS->Rear = pS->Front;\n}\n")),(0,u.kt)("h3",{id:"emptyqueue"},"emptyQueue"),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"Ki\u1ec3m tra h\xe0ng \u0111\u1ee3i c\xf3 r\u1ed7ng hay kh\xf4ng.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"int emptyQueue(Queue Q)\n{\n    return Q.Front == Q.Rear;\n}\n")),(0,u.kt)("h3",{id:"front"},"front"),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"Tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb \u1edf \u0111\u1ea7u h\xe0ng.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"ElementType front(Queue Q)\n{\n    return Q.Front->Next->Element;\n}\n")),(0,u.kt)("h3",{id:"dequeue"},"deQueue"),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"X\xf3a ph\u1ea7n t\u1eed \u1edf \u0111\u1ea7u h\xe0ng")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"void deQueue(Queue *pQ)\n{\n    pQ->Front = pQ->Front->Next;\n}\n")),(0,u.kt)("h3",{id:"enqueue"},"enQueue"),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"Th\xeam ph\u1ea7n t\u1eed x v\xe0o cu\u1ed1i h\xe0ng.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"void enQueue(ElementType x, Queue *pQ)\n{\n    pQ->Rear->Next = (Position)malloc(sizeof(struct Node));\n    pQ->Rear = pQ->Rear->Next;\n    pQ->Rear->Element = x;\n    pQ->Rear->Next = NULL;\n}\n")),(0,u.kt)("h3",{id:"count"},"count"),(0,u.kt)("admonition",{type:"info"},(0,u.kt)("p",{parentName:"admonition"},"\u0110\u1ebfm s\u1ed1 l\u01b0\u1ee3ng ph\u1ea7n t\u1eed trong h\xe0ng.")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"int count(Queue Q)\n{\n    int c = 0;\n    Position P = Q.Front;\n    while (P != Q.Rear)\n    {\n        c++;\n        P = P->Next;\n    }\n    return c;\n}\n")))}d.isMDXComponent=!0}}]);