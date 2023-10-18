"use strict";(self.webpackChunkctdlct_177_2=self.webpackChunkctdlct_177_2||[]).push([[1382],{4137:(n,t,e)=>{e.d(t,{Zo:()=>o,kt:()=>k});var i=e(7294);function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function h(n,t){if(null==n)return{};var e,i,u=function(n,t){if(null==n)return{};var e,i,u={},a=Object.keys(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||(u[e]=n[e]);return u}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(u[e]=n[e])}return u}var r=i.createContext({}),c=function(n){var t=i.useContext(r),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},o=function(n){var t=c(n.components);return i.createElement(r.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(n,t){var e=n.components,u=n.mdxType,a=n.originalType,r=n.parentName,o=h(n,["components","mdxType","originalType","parentName"]),g=c(e),k=u,m=g["".concat(r,".").concat(k)]||g[k]||p[k]||a;return e?i.createElement(m,l(l({ref:t},o),{},{components:e})):i.createElement(m,l({ref:t},o))}));function k(n,t){var e=arguments,u=t&&t.mdxType;if("string"==typeof n||u){var a=e.length,l=new Array(a);l[0]=g;var h={};for(var r in t)hasOwnProperty.call(t,r)&&(h[r]=t[r]);h.originalType=n,h.mdxType="string"==typeof n?n:u,l[1]=h;for(var c=2;c<a;c++)l[c]=e[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,e)}g.displayName="MDXCreateElement"},7857:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>c});var i=e(7462),u=(e(7294),e(4137));const a={sidebar_position:5},l="\u1ee8ng d\u1ee5ng h\xe0ng \u0111\u1ee3i",h={unversionedId:"adts-queue/apply",id:"adts-queue/apply",title:"\u1ee8ng d\u1ee5ng h\xe0ng \u0111\u1ee3i",description:"C\xe2u 1",source:"@site/docs/adts-queue/apply.md",sourceDirName:"adts-queue",slug:"/adts-queue/apply",permalink:"/docs/adts-queue/apply",draft:!1,editUrl:"https://github.com/thangved/datastructure/docs/adts-queue/apply.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"C\xe0i \u0111\u1eb7t v\xe0 \u1ee9ng d\u1ee5ng h\xe0ng \u0111\u1ee3i",permalink:"/docs/adts-queue/install-apply"},next:{title:"T\u1ed5ng quan",permalink:"/docs/adts-binary-tree/intro"}},r={},c=[{value:"C\xe2u 1",id:"c\xe2u-1",level:2},{value:"C\xe2u 2",id:"c\xe2u-2",level:2},{value:"C\xe2u 3",id:"c\xe2u-3",level:2},{value:"C\xe2u 4",id:"c\xe2u-4",level:2}],o={toc:c};function p(n){let{components:t,...e}=n;return(0,u.kt)("wrapper",(0,i.Z)({},o,e,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"\u1ee9ng-d\u1ee5ng-h\xe0ng-\u0111\u1ee3i"},"\u1ee8ng d\u1ee5ng h\xe0ng \u0111\u1ee3i"),(0,u.kt)("h2",{id:"c\xe2u-1"},"C\xe2u 1"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"Gi\u1ea3 s\u1eed ki\u1ec3u d\u1eef li\u1ec7u ng\u0103n x\u1ebfp Stack v\xe0 h\xe0ng \u0111\u1ee3i Queue \u0111\xe3 \u0111\u01b0\u1ee3c khai b\xe1o. C\xe1c ph\xe9p to\xe1n c\u01a1 b\u1ea3n tr\xean ng\u0103n x\u1ebfp v\xe0 tr\xean h\xe0ng \u0111\u1ee3i \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 trong file th\u01b0 vi\u1ec7n ",(0,u.kt)("strong",{parentName:"p"},"AStack.c")," v\xe0 ",(0,u.kt)("strong",{parentName:"p"},"CAQueue.c"),".")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"void makenullStack(Stack *pS)\nint emptyStack(Stack S)\nElementType top(Stack S)\nvoid pop(Stack *pS)\nvoid push(ElementType x, Stack *pS)\n\nvoid makenullQueue(Queue *pQ)\nint emptyQueue(Queue Q)\nElementType front(Queue Q)\nvoid deQueue(Queue *pQ)\nvoid enQueue(ElementType x, Queue *pQ) //ElementType l\xe0 ki\u1ec3u k\xfd t\u1ef1\n")),(0,u.kt)("p",null,"B\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ki\u1ec3u d\u1eef li\u1ec7u tr\u1eebu t\u01b0\u1ee3ng Stack v\xe0 Queue \u0111\xe3 cho, h\xe3y vi\u1ebft ch\u01b0\u01a1ng tr\xecnh ki\u1ec3m tra m\u1ed9t chu\u1ed7i k\xfd t\u1ef1 c\xf3 \u0111\u1ecdc xu\xf4i v\xe0 \u0111\u1ecdc ng\u01b0\u1ee3c nh\u01b0 nhau hay kh\xf4ng (ki\u1ec3m tra chu\u1ed7i palindrome)."),(0,u.kt)("p",null,"D\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o l\xe0 1 d\xf2ng duy nh\u1ea5t ghi chu\u1ed7i k\xfd t\u1ef1. C\xe1c k\xfd t\u1ef1 cho ph\xe9p g\u1ed3m: c\xe1c ch\u1eef c\xe1i ('a' - 'z', 'A' - 'Z') , c\xf3 c\xe1c k\xfd t\u1ef1 kho\u1ea3ng tr\u1eafng v\xe0 c\xe1c d\u1ea5u c\xe2u nh\u01b0 '?', '.', ',', v.v.."),(0,u.kt)("admonition",{type:"caution"},(0,u.kt)("p",{parentName:"admonition"},"L\u01b0u \xfd: kh\xf4ng ph\xe2n bi\u1ec7t gi\u1eefa ch\u1eef c\xe1i in hoa v\xe0 in th\u01b0\u1eddng, kh\xf4ng quan t\xe2m \u0111\u1ebfn c\xe1c k\xfd t\u1ef1 kho\u1ea3ng tr\u1eafng hay d\u1ea5u c\xe2u khi ki\u1ec3m tra chu\u1ed7i palindrome.")),(0,u.kt)("p",null,"D\u1eef li\u1ec7u \u0111\u1ea7u ra l\xe0 d\xf2ng th\xf4ng b\xe1o chu\u1ed7i \u0111\u1ecdc xu\xf4i v\xe0 \u0111\u1ecdc ng\u01b0\u1ee3c nh\u01b0 nhau hay chu\u1ed7i \u0111\u1ecdc xu\xf4i kh\xe1c chu\u1ed7i \u0111\u1ecdc ng\u01b0\u1ee3c (xem th\xeam c\xe1c test case)."),(0,u.kt)("p",null,"G\u1ee3i \xfd:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u0110\u1ecdc t\u1eebng ch\u1eef c\xe1i trong chu\u1ed7i d\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o v\xe0 l\u01b0u \u0111\u1ed3ng th\u1eddi v\xe0o m\u1ed9t ng\u0103n x\u1ebfp v\xe0 m\u1ed9t h\xe0ng \u0111\u1ee3i => ng\u0103n x\u1ebfp s\u1ebd l\u01b0u chu\u1ed7i \u0111\u1ecdc ng\u01b0\u1ee3c v\xe0 h\xe0ng \u0111\u1ee3i s\u1ebd l\u01b0u chu\u1ed7i \u0111\u1ecdc xu\xf4i."),(0,u.kt)("li",{parentName:"ul"},"Trong khi h\xe0ng \u0111\u1ee3i ch\u01b0a r\u1ed7ng:",(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"N\u1ebfu ph\u1ea7n t\u1eed tr\xean \u0111\u1ec9nh ng\u0103n x\u1ebfp v\xe0 ph\u1ea7n t\u1eed \u1edf \u0111\u1ea7u h\xe0ng \u0111\u1ee3i kh\xe1c nhau th\xec k\u1ebft lu\u1eadn chu\u1ed7i \u0111\u1ecdc xu\xf4i kh\xe1c \u0111\u1ecdc ng\u01b0\u1ee3c."),(0,u.kt)("li",{parentName:"ul"},"Ng\u01b0\u1ee3c l\u1ea1i, x\xf3a ph\u1ea7n t\u1eed \u1edf c\u1ea3 ng\u0103n x\u1ebfp v\xe0 h\xe0ng \u0111\u1ee3i."))),(0,u.kt)("li",{parentName:"ul"},"K\u1ebft lu\u1eadn chu\u1ed7i \u0111\u1ecdc xu\xf4i v\xe0 \u0111\u1ecdc ng\u01b0\u1ee3c l\xe0 nh\u01b0 nhau.")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"For example:")),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Input"),(0,u.kt)("th",{parentName:"tr",align:null},"Result"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"A Toyota. Race fast, safe car. A Toyota."),(0,u.kt)("td",{parentName:"tr",align:null},'"A Toyota. Race fast, safe car. A Toyota." doc xuoi va doc nguoc nhu nhau')),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"wow"),(0,u.kt)("td",{parentName:"tr",align:null},'"wow" doc xuoi va doc nguoc nhu nhau')),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"solo"),(0,u.kt)("td",{parentName:"tr",align:null},'"solo" doc xuoi khac doc nguoc')))),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n\n#include "AStack.c"\n#include "CAQueue.c"\n\nint isAb(char c)\n{\n    return (c >= \'a\' && c <= \'z\') || (c >= \'A\' && c <= \'Z\');\n}\n\nint main()\n{\n    char s[256];\n    fgets(s, 255, stdin);\n    s[strlen(s) - 1] = \'\\0\';\n\n    Stack S;\n    makenullStack(&S);\n\n    Queue Q;\n    makenullQueue(&Q);\n\n    // Dua vo ngan xep va hang doi\n    for (int i = 0; i < strlen(s); i++)\n        if (isAb(s[i]))\n        {\n            push(tolower(s[i]), &S);\n            enQueue(tolower(s[i]), &Q);\n        }\n\n    // Kiem tra\n    while (!emptyQueue(Q))\n    {\n        if (top(S) != front(Q))\n        {\n            printf("\\"%s\\" doc xuoi khac doc nguoc\\n", s);\n            return 0;\n        }\n        deQueue(&Q);\n        pop(&S);\n    }\n\n    printf("\\"%s\\" doc xuoi va doc nguoc nhu nhau\\n", s);\n\n    return 0;\n}\n')),(0,u.kt)("h2",{id:"c\xe2u-2"},"C\xe2u 2"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"Gi\u1ea3 s\u1eed ki\u1ec3u d\u1eef li\u1ec7u h\xe0ng \u0111\u1ee3i ",(0,u.kt)("strong",{parentName:"p"},"Queue")," \u0111\xe3 \u0111\u01b0\u1ee3c khai b\xe1o. C\xe1c ph\xe9p to\xe1n c\u01a1 b\u1ea3n tr\xean h\xe0ng \u0111\u1ee3i \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 trong file th\u01b0 vi\u1ec7n ",(0,u.kt)("strong",{parentName:"p"},"PQueue.c"))),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"void makenullQueue(Queue *pQ)\nint emptyQueue(Queue Q)\nElementType front(Queue Q)\nvoid deQueue(Queue *pQ)\nvoid enQueue(ElementType x, Queue *pQ)  //ElementType l\xe0 ki\u1ec3u s\u1ed1 th\u1ef1c\n")),(0,u.kt)("p",null,"B\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ki\u1ec3u d\u1eef li\u1ec7u tr\u1eebu t\u01b0\u1ee3ng Queue \u0111\xe3 cho, h\xe3y vi\u1ebft ch\u01b0\u01a1ng tr\xecnh m\xe3 h\xf3a m\u1ed9t th\xf4ng \u0111i\u1ec7p b\u1eb1ng kh\xf3a l\u1eb7p l\u1ea1i."),(0,u.kt)("p",null,"D\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o l\xe0:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},'D\xf2ng ghi chu\u1ed7i c\u1ea7n m\xe3 h\xf3a. V\xed d\u1ee5 chu\u1ed7i "Hoc CTDL rat vui!".'),(0,u.kt)("li",{parentName:"ul"},"Kh\xf3a l\u1eb7p l\u1ea1i l\xe0 m\u1ed9t chu\u1ed7i c\xe1c k\xfd t\u1ef1 s\u1ed1 ('1' - '9') m\xe0 ch\xfang x\xe1c \u0111\u1ecbnh m\u1ed7i k\xfd t\u1ef1 \u0111\u01b0\u1ee3c d\u1ecbch chuy\u1ec3n v\u1ec1 sau bao nhi\xeau v\u1ecb tr\xed."),(0,u.kt)("li",{parentName:"ul"},'V\xed d\u1ee5: n\u1ebfu chu\u1ed7i c\u1ea7n m\xe3 h\xf3a l\xe0 "Hoc CTDL rat vui!" v\xe0 kh\xf3a l\u1eb7p l\xe0 chu\u1ed7i "29137" th\xec',(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 \u0111\u1ea7u ti\xean c\u1ee7a chu\u1ed7i c\u1ea7n m\xe3 h\xf3a ('H') s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 sau 2 v\u1ecb tr\xed => k\xfd t\u1ef1 'J'"),(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 k\u1ebf ti\u1ebfp c\u1ee7a chu\u1ed7i c\u1ea7n m\xe3 h\xf3a ('o') s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 sau 9 v\u1ecb tr\xed => k\xfd t\u1ef1 'x'"),(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 k\u1ebf ti\u1ebfp n\u1eefa c\u1ee7a chu\u1ed7i c\u1ea7n m\xe3 h\xf3a ('c') s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 sau 1 v\u1ecb tr\xed => k\xfd t\u1ef1 'd'"),(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 ' ' s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 sau 3 v\u1ecb tr\xed => k\xfd t\u1ef1 '#'"),(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 'C' s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 sau 7 v\u1ecb tr\xed => k\xfd t\u1ef1 'J'"),(0,u.kt)("li",{parentName:"ul"},'L\xfac n\xe0y kh\xf3a "29137" \u0111\xe3 h\u1ebft, l\u1ea1i b\u1eaft \u0111\u1ea7u l\u1eb7p l\u1ea1i kh\xf3a n\xe0y.'),(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 'T' s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 sau 2 v\u1ecb tr\xed => k\xfd t\u1ef1 'V'"),(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 'D' s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 sau 9 v\u1ecb tr\xed => k\xfd t\u1ef1 'M'"),(0,u.kt)("li",{parentName:"ul"},"V\xe0 c\u1ee9 ti\u1ebfp t\u1ee5c nh\u01b0 v\u1eady.")))),(0,u.kt)("p",null,"D\u1eef li\u1ec7u \u0111\u1ea7u ra l\xe0 d\xf2ng ghi chu\u1ed7i \u0111\u01b0\u1ee3c m\xe3 h\xf3a (xem th\xeam trong test case)."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"G\u1ee3i \xfd:")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"S\u1eed d\u1ee5ng h\xe0ng \u0111\u1ee3i \u0111\u1ec3 l\u01b0u t\u1eebng ch\u1eef s\u1ed1 c\u1ee7a kh\xf3a l\u1eb7p. Khi ch\u1eef s\u1ed1 \u1edf \u0111\u1ea7u h\xe0ng \u0111\u1ee3i \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng (\u0111\u1ec3 d\u1ecbch chuy\u1ec3n k\xfd t\u1ef1 trong chu\u1ed7i c\u1ea7n m\xe3 h\xf3a) th\xec n\xf3 l\u1ea1i \u0111\u01b0\u1ee3c \u0111\u01b0a tr\u1edf l\u1ea1i h\xe0ng \u0111\u1ee3i."),(0,u.kt)("li",{parentName:"ul"},"Duy\u1ec7t t\u1eebng k\xfd t\u1ef1 trong chu\u1ed7i c\u1ea7n m\xe3 h\xf3a v\xe0 k\u1ebft h\u1ee3p v\u1edbi h\xe0ng \u0111\u1ee3i \u0111\u1ec3 m\xe3 h\xf3a (d\u1ecbch chuy\u1ec3n) k\xfd t\u1ef1 n\xe0y.")),(0,u.kt)("p",{align:"center"},"(D\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o lu\xf4n h\u1ee3p l\u1ec7, sinh vi\xean kh\xf4ng c\u1ea7n ki\u1ec3m tra)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#include \"PQueue.c\"\n\nint main()\n{\n    char pass[512];\n    char key[100];\n\n    fgets(pass, 511, stdin);\n    fflush(stdin);\n    fgets(key, 99, stdin);\n    fflush(stdin);\n\n    pass[strlen(pass) - 1] = '\\0';\n    key[strlen(key) - 1] = '\\0';\n\n    Queue Q;\n    makenullQueue(&Q);\n    for (int i = 0; i < strlen(key); i++)\n        enQueue(key[i] - 48, &Q);\n\n    for (int i = 0; i < strlen(pass); i++)\n    {\n        printf(\"%c\", pass[i] + front(Q));\n        enQueue(front(Q), &Q);\n        deQueue(&Q);\n    }\n\n    return 0;\n}\n")),(0,u.kt)("h2",{id:"c\xe2u-3"},"C\xe2u 3"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"Gi\u1ea3 s\u1eed ki\u1ec3u d\u1eef li\u1ec7u h\xe0ng \u0111\u1ee3i Queue \u0111\xe3 \u0111\u01b0\u1ee3c khai b\xe1o. C\xe1c ph\xe9p to\xe1n c\u01a1 b\u1ea3n tr\xean h\xe0ng \u0111\u1ee3i \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 trong file th\u01b0 vi\u1ec7n ",(0,u.kt)("strong",{parentName:"p"},"PQueue.c"))),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"void makenullQueue(Queue *pQ)\nint emptyQueue(Queue Q)\nElementType front(Queue Q)\nvoid deQueue(Queue *pQ)\nvoid enQueue(ElementType x, Queue *pQ)  //ElementType l\xe0 ki\u1ec3u s\u1ed1 th\u1ef1c\n")),(0,u.kt)("p",null,"B\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ki\u1ec3u d\u1eef li\u1ec7u tr\u1eebu t\u01b0\u1ee3ng ",(0,u.kt)("strong",{parentName:"p"},"Queue")," \u0111\xe3 cho, h\xe3y vi\u1ebft ch\u01b0\u01a1ng tr\xecnh gi\u1ea3i m\xe3 m\u1ed9t th\xf4ng \u0111i\u1ec7p b\u1eb1ng kh\xf3a l\u1eb7p l\u1ea1i."),(0,u.kt)("p",null,"D\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o l\xe0:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},'D\xf2ng ghi chu\u1ed7i c\u1ea7n gi\u1ea3i m\xe3. V\xed d\u1ee5 chu\u1ed7i "Jxd#JVMM#yc}!y|k',"*",'".'),(0,u.kt)("li",{parentName:"ul"},"Kh\xf3a l\u1eb7p l\u1ea1i l\xe0 m\u1ed9t chu\u1ed7i c\xe1c k\xfd t\u1ef1 s\u1ed1 ('1' - '9') m\xe0 ch\xfang x\xe1c \u0111\u1ecbnh m\u1ed7i k\xfd t\u1ef1 \u0111\u01b0\u1ee3c d\u1ecbch chuy\u1ec3n v\u1ec1 tr\u01b0\u1edbc bao nhi\xeau v\u1ecb tr\xed."),(0,u.kt)("li",{parentName:"ul"},'V\xed d\u1ee5: n\u1ebfu chu\u1ed7i c\u1ea7n m\xe3 h\xf3a l\xe0 "Jxd#JVMM#yc}!y|k',"*",'" v\xe0 kh\xf3a l\u1eb7p l\xe0 chu\u1ed7i "29137" th\xec',(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 \u0111\u1ea7u ti\xean c\u1ee7a chu\u1ed7i c\u1ea7n m\xe3 h\xf3a ('J') s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 tr\u01b0\u1edbc 2 v\u1ecb tr\xed => k\xfd t\u1ef1 'H'"),(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 k\u1ebf ti\u1ebfp c\u1ee7a chu\u1ed7i c\u1ea7n m\xe3 h\xf3a ('x') s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 tr\u01b0\u1edbc 9 v\u1ecb tr\xed => k\xfd t\u1ef1 'o'"),(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 k\u1ebf ti\u1ebfp n\u1eefa c\u1ee7a chu\u1ed7i c\u1ea7n m\xe3 h\xf3a ('d') s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 tr\u01b0\u1edbc 1 v\u1ecb tr\xed => k\xfd t\u1ef1 'c'"),(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 '#' s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 tr\u01b0\u1edbc 3 v\u1ecb tr\xed => k\xfd t\u1ef1 ' '"),(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 'J' s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 tr\u01b0\u1edbc 7 v\u1ecb tr\xed => k\xfd t\u1ef1 'C'"),(0,u.kt)("li",{parentName:"ul"},'L\xfac n\xe0y kh\xf3a "29137" \u0111\xe3 h\u1ebft, l\u1ea1i b\u1eaft \u0111\u1ea7u l\u1eb7p l\u1ea1i kh\xf3a n\xe0y.'),(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 'V' s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 tr\u01b0\u1edbc 2 v\u1ecb tr\xed => k\xfd t\u1ef1 'T'"),(0,u.kt)("li",{parentName:"ul"},"K\xfd t\u1ef1 'M' s\u1ebd d\u1ecbch chuy\u1ec3n v\u1ec1 tr\u01b0\u1edbc 9 v\u1ecb tr\xed => k\xfd t\u1ef1 'D'"),(0,u.kt)("li",{parentName:"ul"},"V\xe0 c\u1ee9 ti\u1ebfp t\u1ee5c nh\u01b0 v\u1eady.")))),(0,u.kt)("p",null,"D\u1eef li\u1ec7u \u0111\u1ea7u ra l\xe0 d\xf2ng ghi chu\u1ed7i \u0111\u01b0\u1ee3c gi\u1ea3i m\xe3 (xem th\xeam trong test case)."),(0,u.kt)("p",null,"G\u1ee3i \xfd:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"S\u1eed d\u1ee5ng h\xe0ng \u0111\u1ee3i \u0111\u1ec3 l\u01b0u t\u1eebng ch\u1eef s\u1ed1 c\u1ee7a kh\xf3a l\u1eb7p. Khi ch\u1eef s\u1ed1 \u1edf \u0111\u1ea7u h\xe0ng \u0111\u1ee3i \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng (\u0111\u1ec3 d\u1ecbch chuy\u1ec3n k\xfd t\u1ef1 trong chu\u1ed7i c\u1ea7n gi\u1ea3i m\xe3) th\xec n\xf3 l\u1ea1i \u0111\u01b0\u1ee3c \u0111\u01b0a tr\u1edf l\u1ea1i h\xe0ng \u0111\u1ee3i."),(0,u.kt)("li",{parentName:"ul"},"Duy\u1ec7t t\u1eebng k\xfd t\u1ef1 trong chu\u1ed7i c\u1ea7n gi\u1ea3i m\xe3 v\xe0 k\u1ebft h\u1ee3p v\u1edbi h\xe0ng \u0111\u1ee3i \u0111\u1ec3 gi\u1ea3i m\xe3 (d\u1ecbch chuy\u1ec3n) k\xfd t\u1ef1 n\xe0y.")),(0,u.kt)("p",{align:"center"},"(D\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o lu\xf4n h\u1ee3p l\u1ec7, sinh vi\xean kh\xf4ng c\u1ea7n ki\u1ec3m tra)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#include \"PQueue.c\"\n\nint main()\n{\n    char hash[512];\n    char key[100];\n\n    fgets(hash, 511, stdin);\n    fflush(stdin);\n    fgets(key, 99, stdin);\n    fflush(stdin);\n\n    hash[strlen(hash) - 1] = '\\0';\n    key[strlen(key) - 1] = '\\0';\n\n    Queue Q;\n    makenullQueue(&Q);\n    for (int i = 0; i < strlen(key); i++)\n        enQueue(key[i] - 48, &Q);\n\n    for (int i = 0; i < strlen(hash); i++)\n    {\n        printf(\"%c\", hash[i] - front(Q));\n        enQueue(front(Q), &Q);\n        deQueue(&Q);\n    }\n\n    return 0;\n}\n")),(0,u.kt)("h2",{id:"c\xe2u-4"},"C\xe2u 4"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"Gi\u1ea3 s\u1eed ki\u1ec3u d\u1eef li\u1ec7u h\xe0ng \u0111\u1ee3i Queue \u0111\xe3 \u0111\u01b0\u1ee3c khai b\xe1o. C\xe1c ph\xe9p to\xe1n c\u01a1 b\u1ea3n tr\xean h\xe0ng \u0111\u1ee3i \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 trong file th\u01b0 vi\u1ec7n PIQueue.c")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"void makenullQueue(Queue *pQ)\nint emptyQueue(Queue Q)\nElementType front(Queue Q)\nvoid deQueue(Queue*pQ)\nvoid enQueue(ElementType x, Queue *pQ)  //ElementType l\xe0 ki\u1ec3u s\u1ed1 nguy\xean\n")),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"B\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ki\u1ec3u d\u1eef li\u1ec7u tr\u1eebu t\u01b0\u1ee3ng ",(0,u.kt)("strong",{parentName:"p"},"Queue")," \u0111\xe3 cho, h\xe3y vi\u1ebft ch\u01b0\u01a1ng tr\xecnh t\xednh s\u1ed1 qu\u1ea7y thu ng\xe2n c\u1ea7n ph\u1ea3i m\u1edf t\u1ea1i si\xeau th\u1ecb Coopmart C\u1ea7n Th\u01a1 v\xe0o m\u1ed9t th\u1eddi \u0111i\u1ec3m c\u1ee5 th\u1ec3.")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"D\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o:")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"S\u1ed1 kh\xe1ch h\xe0ng h\xe0ng."),(0,u.kt)("li",{parentName:"ul"},"S\u1ed1 qu\u1ea7y thu ng\xe2n t\u1ed1i \u0111a c\xf3 trong si\xeau th\u1ecb."),(0,u.kt)("li",{parentName:"ul"},"Th\u1eddi gian x\u1eed l\xfd trung b\xecnh cho 1 giao d\u1ecbch t\u1ea1i qu\u1ea7y thu ng\xe2n (\u0111\u01a1n v\u1ecb t\xednh: gi\xe2y)."),(0,u.kt)("li",{parentName:"ul"},"Th\u1eddi gian trung b\xecnh (s\u1ed1 gi\xe2y) m\xe0 kh\xe1ch h\xe0ng s\u1ebd \u0111\u1ebfn x\u1ebfp h\xe0ng thanh to\xe1n."),(0,u.kt)("li",{parentName:"ul"},"Th\u1eddi gian trung b\xecnh m\xe0 kh\xe1ch h\xe0ng ph\u1ea3i \u0111\u1ee3i \u0111\u1ec3 \u0111\u01b0\u1ee3c thanh to\xe1n X. V\xed d\u1ee5: kh\xe1ch h\xe0ng ch\u1ec9 ph\u1ea3i \u0111\u1ee3i d\u01b0\u1edbi 120 gi\xe2y trong h\xe0ng \u0111\u1ee3i l\xe0 \u0111\u01b0\u1ee3c x\u1eed l\xfd giao d\u1ecbch t\u1ea1i qu\u1ea7y thu ng\xe2n.")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"D\u1eef li\u1ec7u \u0111\u1ea7u ra (xem th\xeam trong test case):")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"S\u1ed1 qu\u1ea7y thu ng\xe2n m\u1edf v\xe0 th\u1eddi gian trung b\xecnh m\xe0 kh\xe1ch h\xe0ng ph\u1ea3i \u0111\u1ee3i."),(0,u.kt)("li",{parentName:"ul"},"K\u1ebft lu\u1eadn: s\u1ed1 qu\u1ea7y thu ng\xe2n c\u1ea7n ph\u1ea3i m\u1edf \u0111\u1ec3 kh\xe1ch h\xe0ng ch\u1ec9 ph\u1ea3i \u0111\u1ee3i d\u01b0\u1edbi X gi\xe2y trong h\xe0ng \u0111\u1ee3i l\xe0 \u0111\u01b0\u1ee3c x\u1eed l\xfd giao d\u1ecbch t\u1ea1i qu\u1ea7y thu ng\xe2n.")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"G\u1ee3i \xfd:")),(0,u.kt)("p",null,"Th\u1ef1c hi\u1ec7n m\xf4 ph\u1ecfng theo s\u1ed1 l\u01b0\u1ee3ng qu\u1ea7y thu ng\xe2n t\u0103ng d\u1ea7n (t\u1eeb 1 \u0111\u1ebfn s\u1ed1 qu\u1ea7y thu ng\xe2n t\u1ed1i \u0111a ) cho \u0111\u1ebfn khi th\u1eddi gian trung b\xecnh m\xe0 kh\xe1ch ph\u1ea3i \u0111\u1ee3i <=X th\xec d\u1eebng qu\xe1 tr\xecnh l\u1eb7p v\xe0 \u0111\u01b0a ra k\u1ebft lu\u1eadn."),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"V\u1edbi t\u1eebng s\u1ed1 l\u01b0\u1ee3ng qu\u1ea7y:")),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Kh\u1edfi t\u1ea1o th\u1eddi gian t\u1ea1i t\u1eebng qu\u1ea7y b\u1eb1ng 0;"),(0,u.kt)("li",{parentName:"ul"},"\u0110\u01b0a d\u1eef li\u1ec7u c\u1ee7a kh\xe1ch h\xe0ng (th\u1eddi gian \u0111\u1ebfn c\u1ee7a kh\xe1ch h\xe0ng) v\xe0o h\xe0ng \u0111\u1ee3i;"),(0,u.kt)("li",{parentName:"ul"},"T\xednh t\u1ed5ng th\u1eddi gian x\u1eed l\xfd giao d\u1ecbch cho t\u1ea5t c\u1ea3 c\xe1c kh\xe1ch h\xe0ng trong h\xe0ng \u0111\u1ee3i:",(0,u.kt)("ul",{parentName:"li"},(0,u.kt)("li",{parentName:"ul"},"Kh\u1edfi \u0111\u1ea7u, t\u1ed5ng th\u1eddi gian b\u1eb1ng 0;"),(0,u.kt)("li",{parentName:"ul"},"Trong khi h\xe0ng \u0111\u1ee3i ch\u01b0a h\u1ebft: V\u1edbi l\u1ea7n l\u01b0\u1ee3t t\u1eebng qu\u1ea7y thu ng\xe2n, n\u1ebfu v\u1eabn c\xf2n kh\xe1ch trong h\xe0ng \u0111\u1ee3i th\xec l\u1ea5y th\u1eddi gian \u0111\u1ebfn c\u1ee7a kh\xe1ch, t\xednh th\u1eddi gian \u0111i c\u1ee7a kh\xe1ch (li\xean quan \u0111\u1ebfn th\u1eddi gian \u0111\u1ebfn, th\u1eddi gian t\u1ea1i qu\u1ea7y v\xe0 th\u1eddi gian x\u1eed l\xfd trung b\xecnh cho 1 giao d\u1ecbch), x\xf3a kh\xe1ch kh\u1ecfi h\xe0ng \u0111\u1ee3i, c\u1eadp nh\u1eadt l\u1ea1i th\u1eddi gian t\u1ea1i qu\u1ea7y, c\u1eadp nh\u1eadt l\u1ea1i t\u1ed5ng th\u1eddi gian."))),(0,u.kt)("li",{parentName:"ul"},"T\xednh th\u1eddi gian trung b\xecnh m\xe0 kh\xe1ch h\xe0ng ph\u1ea3i \u0111\u1ee3i d\u1ef1a tr\xean t\u1ed5ng th\u1eddi gian v\xe0 s\u1ed1 l\u01b0\u1ee3ng kh\xe1ch \u0111\u1ec3 d\u1eebng qu\xe1 tr\xecnh l\u1eb7p v\xe0 \u0111\u01b0a ra k\u1ebft lu\u1eadn hay l\u1ea1i ti\u1ebfp t\u1ee5c l\u1eb7p.")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"Example:")),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Input"),(0,u.kt)("th",{parentName:"tr",align:null},"Result"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"100",(0,u.kt)("br",null),"10",(0,u.kt)("br",null),"120",(0,u.kt)("br",null),"15",(0,u.kt)("br",null),"120"),(0,u.kt)("td",{parentName:"tr",align:null},"So quay: 1; Thoi gian cho trung binh: 5317.0",(0,u.kt)("br",null),"So quay: 2; Thoi gian cho trung binh: 2325.0",(0,u.kt)("br",null),"So quay: 3; Thoi gian cho trung binh: 1332.0",(0,u.kt)("br",null),"So quay: 4; Thoi gian cho trung binh: 840.0",(0,u.kt)("br",null),"So quay: 5; Thoi gian cho trung binh: 547.0",(0,u.kt)("br",null),"So quay: 6; Thoi gian cho trung binh: 355.0",(0,u.kt)("br",null),"So quay: 7; Thoi gian cho trung binh: 219.0",(0,u.kt)("br",null),"So quay: 8; Thoi gian cho trung binh: 120.0",(0,u.kt)("br",null)," => Sieu thi se mo 8 quay")))),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdlib.h>\n#include "PIQueue.c"\n\n// **** Dua thoi gian den cua khach vao hang ****\nvoid lineUp(int letTime, int client, Queue *pQ)\n{\n    makenullQueue(pQ);\n    for (int i = 1; i <= client; i++)\n        enQueue(i * letTime, pQ);\n}\n\n// **** Dat lai thoi gian cho tung quay ****\nvoid reset(int A[], int n)\n{\n    for (int i = 0; i < n; i++)\n        A[i] = 0;\n}\n\n// **** Tinh tong thoi gian cho cua khach ****\nint getTotalTime(int tranferTime, Queue *line, int cashiers[], int open)\n{\n    int totalTime = 0;\n    while (!emptyQueue(*line))\n    {\n        for (int i = 0; i < open; i++)\n        {\n            if (emptyQueue(*line))\n                break;\n            if (cashiers[i] < front(*line))\n                cashiers[i] = front(*line);\n            totalTime += cashiers[i] - front(*line) + tranferTime;\n            cashiers[i] += tranferTime;\n            deQueue(line);\n        }\n    }\n    return totalTime;\n}\n\nint main()\n{\n    // message template\n    char info[] = "So quay: %d; Thoi gian cho trung binh: %.1f\\n";\n    char success[] = "=> Sieu thi se mo %d quay\\n";\n    char failed[] = "Voi %d quay hien co, khach phai cho it nhat %.1f giay moi duoc phuc vu.\\n";\n\n    int client;      // so khach hang\n    int maxCashier;  // so quay toi da\n    int tranferTime; // thoi gian giao dich\n    int letTime;     // thoi gian khach den\n    int maxWaitTime; // thoi gian cho toi da\n\n    scanf(\n        "%d%d%d%d%d",\n        &client,\n        &maxCashier,\n        &tranferTime,\n        &letTime,\n        &maxWaitTime);\n\n    Queue line;\n    int cashiers[maxCashier];\n    int totalTime;\n\n    for (int open = 1; open <= maxCashier; open++)\n    {\n        lineUp(letTime, client, &line);\n        reset(cashiers, open);\n\n        totalTime = getTotalTime(tranferTime, &line, cashiers, open);\n\n        // **** In thong tin voi tung so luong quay ****\n        printf(info, open, (float)(totalTime / client));\n\n        // **** Ket luan neu so quay toi da dap ung yeu cau ****\n        if (totalTime / client <= maxWaitTime)\n        {\n            printf(success, open);\n            return 0;\n        }\n    }\n\n    // **** Ket luan neu failed ****\n    printf(failed, maxCashier, (float)(totalTime / client));\n\n    return 0;\n}\n')))}p.isMDXComponent=!0}}]);