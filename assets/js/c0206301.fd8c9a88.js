"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68975],{76742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(74848),s=n(28453),o=n(94331);const i={title:"root",description:"This page provides detailed info on running unit root tests on a column of a dataset using various types of regression. The page includes usage, parameters, and examples.",keywords:["unit root tests","dataset","econometrics","ADF","KPSS","regression"]},a=void 0,c={id:"terminal/reference/econometrics/root",title:"root",description:"This page provides detailed info on running unit root tests on a column of a dataset using various types of regression. The page includes usage, parameters, and examples.",source:"@site/content/terminal/reference/econometrics/root.md",sourceDirName:"terminal/reference/econometrics",slug:"/terminal/reference/econometrics/root",permalink:"/terminal/reference/econometrics/root",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/econometrics/root.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"root",description:"This page provides detailed info on running unit root tests on a column of a dataset using various types of regression. The page includes usage, parameters, and examples.",keywords:["unit root tests","dataset","econometrics","ADF","KPSS","regression"]},sidebar:"tutorialSidebar",previous:{title:"rename",permalink:"/terminal/reference/econometrics/rename"},next:{title:"show",permalink:"/terminal/reference/econometrics/show"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"econometrics /root - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Show unit root tests of a column of a dataset"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"root -v {} [-r {c,ct,ctt,n}] [-k {c,ct}]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"column"}),(0,r.jsx)(t.td,{children:"The column and name of the database you want test unit root for"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fuller_reg"}),(0,r.jsx)(t.td,{children:"Type of regression. Can be 'c','ct','ctt','nc'. c - Constant and t - trend order"}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"c, ct, ctt, n"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kpss_reg"}),(0,r.jsx)(t.td,{children:"Type of regression. Can be 'c', 'ct'. c - Constant and t - trend order"}),(0,r.jsx)(t.td,{children:"c"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"c, ct"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"2022 Jun 01, 06:47 (\ud83e\udd8b) /econometrics/ $ load fair\n\n2022 Jun 01, 06:47 (\ud83e\udd8b) /econometrics/ $ root fair.yrs_married\n\nUnitroot from dataset 'fair of 'yrs_married'\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503                \u2503 ADF      \u2503 KPSS  \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 Test Statistic \u2502 -8.08    \u2502 7.01  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 P-Value        \u2502 0.00     \u2502 0.01  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 NLags          \u2502 34.00    \u2502 26.00 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Nobs           \u2502 6331.00  \u2502 0.00  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ICBest         \u2502 42958.72 \u2502 0.00  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(5260),s=n(74848);function o(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);