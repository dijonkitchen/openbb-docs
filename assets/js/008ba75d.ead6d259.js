"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44522],{55566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var s=n(74848),r=n(28453),i=n(94331);const c={title:"es",description:"Documentation page for using the Expected Shortfall (ES) function in Python. Provides detailed examples, parameter usage, and options for calculations.",keywords:["Expected Shortfall","stock","distribution","percentile","ES","calculations"]},l=void 0,o={id:"terminal/reference/stocks/qa/es",title:"es",description:"Documentation page for using the Expected Shortfall (ES) function in Python. Provides detailed examples, parameter usage, and options for calculations.",source:"@site/content/terminal/reference/stocks/qa/es.md",sourceDirName:"terminal/reference/stocks/qa",slug:"/terminal/reference/stocks/qa/es",permalink:"/docs/terminal/reference/stocks/qa/es",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/qa/es.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"es",description:"Documentation page for using the Expected Shortfall (ES) function in Python. Provides detailed examples, parameter usage, and options for calculations.",keywords:["Expected Shortfall","stock","distribution","percentile","ES","calculations"]},sidebar:"tutorialSidebar",previous:{title:"decompose",permalink:"/docs/terminal/reference/stocks/qa/decompose"},next:{title:"hist",permalink:"/docs/terminal/reference/stocks/qa/hist"}},a={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"stocks/qa/es - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Provides Expected Shortfall (short: ES) of the selected stock."}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"es [-m] [-d {laplace,student_t,logistic,normal}] [-p PERCENTILE]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"use_mean"}),(0,s.jsx)(t.td,{children:"If one should use the mean of the stocks return"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"distributions"}),(0,s.jsx)(t.td,{children:"Distribution used for the calculations"}),(0,s.jsx)(t.td,{children:"normal"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"laplace, student_t, logistic, normal"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"percentile"}),(0,s.jsx)(t.td,{children:"Percentile for calculations, i.e. input 99.9 equals a 99.9 Percent Expected Shortfall"}),(0,s.jsx)(t.td,{children:"99.9"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"2022 Feb 25, 06:50 (\ud83e\udd8b) /stocks/qa/ $ es\n      TSLA Expected Shortfall\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503       \u2503 ES:     \u2503 Historical ES: \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 90.0% \u2502 -0.0752 \u2502 -0.0705        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 95.0% \u2502 -0.0885 \u2502 -0.0932        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 99.0% \u2502 -0.1144 \u2502 -0.1561        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 99.9% \u2502 -0.1444 \u2502 -0.2106        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(5260),r=n(74848);function i(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);