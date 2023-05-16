"use strict";(self.webpackChunkctdlct_177_2=self.webpackChunkctdlct_177_2||[]).push([[3108],{3905:(n,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var e=i(7294);function s(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}function r(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.push.apply(i,e)}return i}function a(n){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){s(n,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))}))}return n}function L(n,t){if(null==n)return{};var i,e,s=function(n,t){if(null==n)return{};var i,e,s={},r=Object.keys(n);for(e=0;e<r.length;e++)i=r[e],t.indexOf(i)>=0||(s[i]=n[i]);return s}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(e=0;e<r.length;e++)i=r[e],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(s[i]=n[i])}return s}var o=e.createContext({}),l=function(n){var t=e.useContext(o),i=t;return n&&(i="function"==typeof n?n(t):a(a({},t),n)),i},p=function(n){var t=l(n.components);return e.createElement(o.Provider,{value:t},n.children)},m={inlineCode:"code",wrapper:function(n){var t=n.children;return e.createElement(e.Fragment,{},t)}},c=e.forwardRef((function(n,t){var i=n.components,s=n.mdxType,r=n.originalType,o=n.parentName,p=L(n,["components","mdxType","originalType","parentName"]),c=l(i),u=s,d=c["".concat(o,".").concat(u)]||c[u]||m[u]||r;return i?e.createElement(d,a(a({ref:t},p),{},{components:i})):e.createElement(d,a({ref:t},p))}));function u(n,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof n||s){var r=i.length,a=new Array(r);a[0]=c;var L={};for(var o in t)hasOwnProperty.call(t,o)&&(L[o]=t[o]);L.originalType=n,L.mdxType="string"==typeof n?n:s,a[1]=L;for(var l=2;l<r;l++)a[l]=i[l];return e.createElement.apply(null,a)}return e.createElement.apply(null,i)}c.displayName="MDXCreateElement"},9478:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>L,toc:()=>l});var e=i(7462),s=(i(7294),i(3905));const r={},a="Th\u01b0 vi\u1ec7n danh s\xe1ch \u0111\u1eb7c (AListLib.c)",L={unversionedId:"adts-arraylist/AListLib",id:"adts-arraylist/AListLib",title:"Th\u01b0 vi\u1ec7n danh s\xe1ch \u0111\u1eb7c (AListLib.c)",description:"T\u1ea3i v\u1ec1 t\u1ea1i \u0111\xe2y",source:"@site/docs/adts-arraylist/AListLib.md",sourceDirName:"adts-arraylist",slug:"/adts-arraylist/AListLib",permalink:"/docs/adts-arraylist/AListLib",draft:!1,editUrl:"https://github.com/thangved/datastructure/docs/adts-arraylist/AListLib.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"C\xe1c ph\xe9p to\xe1n tr\xean danh s\xe1ch sinh vi\xean",permalink:"/docs/adts-arraylist/student-define"},next:{title:"T\u1ed5ng quan",permalink:"/docs/adts-pointerlist/intro"}},o={},l=[],p={toc:l};function m(n){let{components:t,...r}=n;return(0,s.kt)("wrapper",(0,e.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"th\u01b0-vi\u1ec7n-danh-s\xe1ch-\u0111\u1eb7c-alistlibc"},"Th\u01b0 vi\u1ec7n danh s\xe1ch \u0111\u1eb7c (AListLib.c)"),(0,s.kt)("p",null,(0,s.kt)("a",{target:"_blank",href:i(5964).Z},"T\u1ea3i v\u1ec1 t\u1ea1i \u0111\xe2y")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-c"},'/**\n * @file AListLib.c\n * @author Minh Th\u1eafng (https://github.com/thangved)\n * @brief\n * @version 0.1\n * @date 2021-09-21\n *\n * @copyright Copyright (c) 2021\n *\n */\n\n#include <stdio.h>\n\n/*__DEFINE__TYPE__*/\n#ifndef MaxLength\n#define MaxLength 300 // So phan tu toi da\n#endif\n\n#ifndef ElementType\ntypedef int ElementType; // Kieu du lieu cua phan tu\n#endif\n\n#ifndef Position\ntypedef int Position; // Position = index + 1\n#endif\n\ntypedef struct\n{\n    ElementType Elements[MaxLength];\n    Position Last;\n} List;\n/*__END__DEFINE__TYPE__*/\n\n/* __FUNCTIONS__INTERFACE__ */\nvoid copyEvenNumbers(List list1, List *pL2);\nint countList(ElementType x, List list);\nvoid deleteList(Position p, List *pL);\nvoid difference(List list1, List list2, List *pL);\nint emptyList(List list);\nPosition endList(List list);\nvoid erase(ElementType x, List *pL);\nint fullList(List list);\nPosition first(List list);\nfloat getAvg(List list);\nvoid insertList(ElementType x, Position p, List *pL);\nvoid insertSet(ElementType x, List *pL);\nvoid intersection(List list1, List list2, List *pL);\nPosition locate(ElementType x, List list);\nElementType minList(List list);\nvoid makenullList(List *pL);\nint member(ElementType x, List list);\nElementType maxList(List list);\nPosition next(Position p, List L);\nvoid normalize(List *pL);\nPosition previous(Position p, List L);\nvoid printList(List L);\nvoid printOddNumbers(List list);\nElementType retrieve(Position p, List list);\nvoid removeAll(ElementType x, List *pL);\nvoid readList(List *pL);\nvoid readSet(List *pL);\nElementType sumList(List list);\nvoid swap(ElementType array[], int i, int j);\nvoid sort(List *pL);\nvoid unionSet(List list1, List list2, List *pL);\n/* __END__FUNCTIONS__INTERFACE__*/\n\n// h\xe0m ch\xe9p to\xe0n b\u1ed9 c\xe1c s\u1ed1 ch\u1eb5n trong danh s\xe1ch L1 sang danh s\xe1ch k\u1ebft qu\u1ea3\nvoid copyEvenNumbers(List list1, List *pL2)\n{\n    pL2->Last = 0;\n    for (int i = 0; i < list1.Last; i++)\n        if (list1.Elements[i] % 2 == 0)\n        {\n            pL2->Elements[pL2->Last] = list1.Elements[i];\n            pL2->Last++;\n        }\n}\n\n// dem x trong List\nint countList(ElementType x, List list)\n{\n    int count = 0;\n    for (int i = 0; i < list.Last; i++)\n        if (list.Elements[i] == x)\n            count++;\n    return count;\n}\n\n// ham xoa mot phan tu tai vi tri p\nvoid deleteList(Position p, List *pL)\n{\n    if (p < first(*pL) || p >= endList(*pL))\n    {\n        printf("Vi tri khong hop le\\n");\n        return;\n    }\n\n    for (Position i = p; i < pL->Last; i++)\n        pL->Elements[i - 1] = pL->Elements[i];\n\n    pL->Last--;\n}\n\n// tim hieu cua hai tap\nvoid difference(List list1, List list2, List *pL)\n{\n    makenullList(pL);\n    for (int i = 0; i < list1.Last; i++)\n        if (!member(list1.Elements[i], list2))\n            insertSet(list1.Elements[i], pL);\n}\n\n// ham kiem tra mot ds co rong hay khong\nint emptyList(List list)\n{\n    return list.Last == 0;\n}\n\n// ham tra ve vi tri sau vi tri cuoi cung cua List\nPosition endList(List list)\n{\n    return list.Last + 1;\n}\n\n// X\xf3a ph\u1ea7n t\u1eed \u0111\u1ea7u ti\xean c\xf3 gi\xe1 tr\u1ecb l\xe0 x trong danh s\xe1ch ch\u1ec9 b\u1edfi con tr\u1ecf pL\nvoid erase(ElementType x, List *pL)\n{\n    deleteList(locate(x, *pL), pL);\n}\n\n// ham kiem tra ham co full khong\nint fullList(List list)\n{\n    return list.Last == MaxLength;\n}\n\n// ham tra ve vi tri dau tien cua List\nPosition first(List list)\n{\n    return 1;\n}\n\n// tra ve gia tri trung binh cua List\nfloat getAvg(List list)\n{\n    if (list.Last == 0)\n        return -10000;\n    return (float)sumList(list) / list.Last;\n}\n\n// ham chen 1 phan tu vao List\nvoid insertList(ElementType x, Position p, List *pL)\n{\n    if (fullList(*pL))\n        return;\n\n    if (p < first(*pL) || p > endList(*pL) + 1)\n        return;\n\n    for (Position i = pL->Last; i >= p; i++)\n        pL->Elements[i] = pL->Elements[i - 1];\n\n    pL->Elements[p - 1] = x;\n    pL->Last++;\n}\n\n// them phan tu vao cuoi List\nvoid insertSet(ElementType x, List *pL)\n{\n    pL->Elements[pL->Last] = x;\n    pL->Last++;\n}\n\n// ham tim tap giao cua L1 L2\nvoid intersection(List list1, List list2, List *pL)\n{\n    makenullList(pL);\n    for (int i = 0; i < list1.Last; i++)\n        if (member(list1.Elements[i], list2))\n            insertSet(list1.Elements[i], pL);\n}\n\n// ham tra ve vi tri dau tien cua phan tu x co trong List\nPosition locate(ElementType x, List list)\n{\n    for (int i = 1; i <= list.Last; i++)\n        if (x == retrieve(i, list))\n            return i;\n    return list.Last + 1;\n}\n\n//  tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb nh\u1ecf nh\u1ea5t trong c\xe1c ph\u1ea7n t\u1eed c\u1ee7a danh s\xe1ch L\nElementType minList(List list)\n{\n    ElementType min = list.Elements[0];\n    for (int i = 0; i < list.Last; i++)\n        if (min > list.Elements[i])\n            min = list.Elements[i];\n    return min;\n}\n\n// lam rong danh sach\nvoid makenullList(List *pL)\n{\n    pL->Last = 0;\n}\n\n// ham kiem tra 1 phan tu co trong List hay khong\nint member(ElementType x, List list)\n{\n    for (int i = 1; i <= list.Last; i++)\n        if (x == retrieve(i, list))\n            return 1;\n    return 0;\n}\n\n//  tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb l\u1edbn nh\u1ea5t trong c\xe1c ph\u1ea7n t\u1eed c\u1ee7a danh s\xe1ch L\nElementType maxList(List list)\n{\n    ElementType max = list.Elements[0];\n    for (int i = 0; i < list.Last; i++)\n        if (max < list.Elements[i])\n            max = list.Elements[i];\n    return max;\n}\n\n// tra ve vi tri sau vi tri p trong List\nPosition next(Position p, List L)\n{\n    if (p > L.Last)\n        return 0;\n    if (p == L.Last)\n        return endList(L);\n    return p + 1;\n}\n\n// lam cho List co phan tu duy nhat\nvoid normalize(List *pL)\n{\n    for (int i = 0; i < pL->Last; i++)\n        for (int j = i + 1; j < pL->Last; j++)\n            if (pL->Elements[i] == pL->Elements[j])\n            {\n                deleteList(j + 1, pL);\n                j--;\n            }\n}\n\n// tra ve vi tri truoc vi tri p trong List\nPosition previous(Position p, List L)\n{\n    if (p <= first(L))\n        return 0;\n    return p - 1;\n}\n\n// in ra List\nvoid printList(List L)\n{\n    for (Position p = 1; p <= L.Last; p++)\n        printf("%d ", retrieve(p, L));\n\n    printf("\\n");\n}\n\n// ham in so le\nvoid printOddNumbers(List list)\n{\n    for (int i = 0; i < list.Last; i++)\n        if (!(list.Elements[i] % 2 == 0))\n            printf("%d ", list.Elements[i]);\n    printf("\\n");\n}\n\n// ham tra ve gia tri cua List tai vi tri p\nElementType retrieve(Position p, List list)\n{\n    if (!(p > list.Last))\n        return list.Elements[p - 1];\n    return 0;\n}\n\n// xoa tat ca phan tu co gia tri x trong List\nvoid removeAll(ElementType x, List *pL)\n{\n    while (member(x, *pL))\n        deleteList(locate(x, *pL), pL);\n}\n\n// ham nhap List tu ban phim\nvoid readList(List *pL)\n{\n    makenullList(pL);\n    int n, e;\n    scanf("%d", &n);\n    for (int i = 0; i < n; i++)\n    {\n        scanf("%d", &e);\n        insertList(e, pL->Last + 1, pL);\n    }\n}\n\n// ham them n phan tu vao List neu no chua co trong List\nvoid readSet(List *pL)\n{\n    readList(pL);\n    normalize(pL);\n}\n\n// tr\u1ea3 v\u1ec1 t\u1ed5ng gi\xe1 tr\u1ecb c\xe1c ph\u1ea7n t\u1eed trong danh s\xe1ch L\nElementType sumList(List list)\n{\n    ElementType sum = 0;\n    for (int i = 0; i < list.Last; i++)\n        sum += list.Elements[i];\n    return sum;\n}\n\n// ham hoan doi 2 phan tu trong mang\nvoid swap(ElementType array[], int i, int j)\n{\n    ElementType temp = array[i];\n\n    array[i] = array[j];\n    array[j] = temp;\n}\n\n// ham sap xep\nvoid sort(List *pL)\n{\n    for (int i = 0; i < pL->Last; i++)\n        for (int j = i + 1; j < pL->Last; j++)\n            if (pL->Elements[i] > pL->Elements[j])\n                swap(pL->Elements, i, j);\n}\n\n// tap hop cua 2 tap\nvoid unionSet(List list1, List list2, List *pL)\n{\n    makenullList(pL);\n    int i;\n    for (i = 0; i < list1.Last; i++)\n        insertSet(list1.Elements[i], pL);\n\n    for (i = 0; i < list2.Last; i++)\n        if (!member(list2.Elements[i], list1))\n            insertSet(list2.Elements[i], pL);\n}\n\n')))}m.isMDXComponent=!0},5964:(n,t,i)=>{i.d(t,{Z:()=>e});const e=i.p+"assets/files/AListLib-e3517b9bcada26a7f85a399ff1287268.c"}}]);