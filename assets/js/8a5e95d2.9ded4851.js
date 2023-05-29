"use strict";(self.webpackChunkctdlct_177_2=self.webpackChunkctdlct_177_2||[]).push([[5063],{4137:(n,e,t)=>{t.d(e,{Zo:()=>h,kt:()=>p});var a=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=a.createContext({}),l=function(n){var e=a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},h=function(n){var e=l(n.components);return a.createElement(u.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,u=n.parentName,h=i(n,["components","mdxType","originalType","parentName"]),d=l(t),p=o,D=d["".concat(u,".").concat(p)]||d[p]||s[p]||r;return t?a.createElement(D,c(c({ref:e},h),{},{components:t})):a.createElement(D,c({ref:e},h))}));function p(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,c=new Array(r);c[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=n,i.mdxType="string"==typeof n?n:o,c[1]=i;for(var l=2;l<r;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5363:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(7462),o=(t(7294),t(4137));const r={sidebar_position:4},c="\u0110A TH\u1ee8C",i={unversionedId:"adts-pointerlist/polygon",id:"adts-pointerlist/polygon",title:"\u0110A TH\u1ee8C",description:"Khai b\xe1o ki\u1ec3u d\u1eef li\u1ec7u",source:"@site/docs/adts-pointerlist/polygon.md",sourceDirName:"adts-pointerlist",slug:"/adts-pointerlist/polygon",permalink:"/docs/adts-pointerlist/polygon",draft:!1,editUrl:"https://github.com/thangved/datastructure/docs/adts-pointerlist/polygon.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\xc1p d\u1ee5ng danh s\xe1ch li\xean k\u1ebft c\xe1c s\u1ed1 nguy\xean (ELSE)",permalink:"/docs/adts-pointerlist/apply"},next:{title:"Danh s\xe1ch sinh vi\xean",permalink:"/docs/adts-pointerlist/student-define"}},u={},l=[{value:"Khai b\xe1o ki\u1ec3u d\u1eef li\u1ec7u",id:"khai-b\xe1o-ki\u1ec3u-d\u1eef-li\u1ec7u",level:2},{value:"M\u1ed9t s\u1ed1 ph\xe9p to\xe1n",id:"m\u1ed9t-s\u1ed1-ph\xe9p-to\xe1n",level:2},{value:"chenDonThuc",id:"chendonthuc",level:3},{value:"congDaThuc",id:"congdathuc",level:3},{value:"daoHam",id:"daoham",level:3},{value:"inDaThuc",id:"indathuc",level:3},{value:"khoitao",id:"khoitao",level:3},{value:"nhanDaThuc",id:"nhandathuc",level:3},{value:"nhapDaThuc",id:"nhapdathuc",level:3},{value:"tinhDaoHam",id:"tinhdaoham",level:3}],h={toc:l};function s(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0111a-th\u1ee9c"},"\u0110A TH\u1ee8C"),(0,o.kt)("h2",{id:"khai-b\xe1o-ki\u1ec3u-d\u1eef-li\u1ec7u"},"Khai b\xe1o ki\u1ec3u d\u1eef li\u1ec7u"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct\n{\n    double he_so;\n    int bac;\n} DonThuc;\nstruct Node\n{\n    DonThuc e;\n    struct Node *Next;\n};\ntypedef struct Node *Position;\ntypedef Position DaThuc;\n")),(0,o.kt)("h2",{id:"m\u1ed9t-s\u1ed1-ph\xe9p-to\xe1n"},"M\u1ed9t s\u1ed1 ph\xe9p to\xe1n"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Do h\xe0m vi\u1ebft b\u1eb1ng t\xean ti\u1ebfng Vi\u1ec7t (h\u01a1n h\u1ebft l\xe0 v\xec t\xf4i l\u01b0\u1eddi) n\xean s\u1ebd kh\xf4ng ch\xfa th\xedch")),(0,o.kt)("h3",{id:"chendonthuc"},"chenDonThuc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"void chenDonThuc(DonThuc x, DaThuc *pD)\n{\n    Position P = *pD;\n    while (P->Next != NULL)\n    {\n        if (P->Next->e.bac == x.bac)\n        {\n            P->Next->e.he_so = P->Next->e.he_so + x.he_so;\n            return;\n        }\n        if (P->Next->e.bac < x.bac)\n        {\n            Position T = (Position)malloc(sizeof(struct Node));\n            T->e = x;\n            T->Next = P->Next;\n            P->Next = T;\n            return;\n        }\n        P = P->Next;\n    }\n    Position T = (Position)malloc(sizeof(struct Node));\n    T->e = x;\n    P->Next = T;\n}\n")),(0,o.kt)("h3",{id:"congdathuc"},"congDaThuc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"DaThuc congDaThuc(DaThuc D1, DaThuc D2)\n{\n    DaThuc D = khoitao();\n    Position P = D1;\n    while (P->Next != NULL)\n    {\n        chenDonThuc(P->Next->e, &D);\n        P = P->Next;\n    }\n    P = D2;\n    while (P->Next != NULL)\n    {\n        chenDonThuc(P->Next->e, &D);\n        P = P->Next;\n    }\n    return D;\n}\n")),(0,o.kt)("h3",{id:"daoham"},"daoHam"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"void daoHam(DonThuc *d)\n{\n    d->he_so = d->he_so * d->bac;\n    d->bac--;\n}\n")),(0,o.kt)("h3",{id:"indathuc"},"inDaThuc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'void inDaThuc(DaThuc d)\n{\n    DaThuc P = d;\n    while (P->Next != NULL)\n    {\n        printf("%.3fX^%d", P->Next->e.he_so, P->Next->e.bac);\n        if (P->Next->Next != NULL)\n            printf(" + ");\n        P = P->Next;\n    }\n    printf("\\n");\n}\n')),(0,o.kt)("h3",{id:"khoitao"},"khoitao"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"DaThuc khoitao()\n{\n    DaThuc D = (DaThuc)malloc(sizeof(DaThuc));\n    D->Next = NULL;\n    return D;\n}\n")),(0,o.kt)("h3",{id:"nhandathuc"},"nhanDaThuc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"DaThuc nhanDaThuc(DaThuc D1, DaThuc D2)\n{\n    DaThuc P = D1, Q;\n    DaThuc Result = khoitao();\n    DonThuc E;\n    while (P->Next != NULL)\n    {\n        Q = D2;\n        while (Q->Next != NULL)\n        {\n            E.he_so = P->Next->e.he_so * Q->Next->e.he_so;\n            E.bac = P->Next->e.bac + Q->Next->e.bac;\n            chenDonThuc(E, &Result);\n            Q = Q->Next;\n        }\n        P = P->Next;\n    }\n    return Result;\n}\n")),(0,o.kt)("h3",{id:"nhapdathuc"},"nhapDaThuc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'DaThuc nhapDaThuc()\n{\n    int n;\n    double hs;\n    int bac;\n    DonThuc d;\n    DaThuc D = khoitao();\n    scanf("%d", &n);\n    for (int i = 0; i < n; i++)\n    {\n        scanf("%lf %d", &hs, &bac);\n        d.he_so = hs;\n        d.bac = bac;\n        chenDonThuc(d, &D);\n    }\n    return D;\n}\n')),(0,o.kt)("h3",{id:"tinhdaoham"},"tinhDaoHam"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"DaThuc tinhDaoHam(DaThuc D)\n{\n    DaThuc P = D;\n    while (P->Next != NULL)\n    {\n        daoHam(&P->Next->e);\n        P = P->Next;\n    }\n    return D;\n}\n")))}s.isMDXComponent=!0}}]);