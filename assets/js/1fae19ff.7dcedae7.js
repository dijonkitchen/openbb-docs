"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77350],{86182:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(74848),r=t(28453),s=t(94331);const i={title:"raw",description:"This page explains the 'raw' function related to financial data manipulation, including its usage, parameters and some examples on how to use it in Python. It cover topics such as sorting raw data, displaying limit number of data points and reverse sorting.",keywords:["raw data","financial data","data manipulation","sorting raw data","reverse sorting","display limit"]},o=void 0,l={id:"terminal/reference/stocks/qa/raw",title:"raw",description:"This page explains the 'raw' function related to financial data manipulation, including its usage, parameters and some examples on how to use it in Python. It cover topics such as sorting raw data, displaying limit number of data points and reverse sorting.",source:"@site/content/terminal/reference/stocks/qa/raw.md",sourceDirName:"terminal/reference/stocks/qa",slug:"/terminal/reference/stocks/qa/raw",permalink:"/terminal/reference/stocks/qa/raw",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/qa/raw.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"raw",description:"This page explains the 'raw' function related to financial data manipulation, including its usage, parameters and some examples on how to use it in Python. It cover topics such as sorting raw data, displaying limit number of data points and reverse sorting.",keywords:["raw data","financial data","data manipulation","sorting raw data","reverse sorting","display limit"]},sidebar:"tutorialSidebar",previous:{title:"quantile",permalink:"/terminal/reference/stocks/qa/quantile"},next:{title:"rolling",permalink:"/terminal/reference/stocks/qa/rolling"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"stocks/qa/raw - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsx)(n.p,{children:"Print raw data to console"}),"\n",(0,a.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"raw [-l LIMIT] [-r] [-s {open,high,low,close,adjclose,volume,date_id,oc_high,oc_low,returns,logret,logprice}]\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Optional"}),(0,a.jsx)(n.th,{children:"Choices"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"limit"}),(0,a.jsx)(n.td,{children:"Number to show"}),(0,a.jsx)(n.td,{children:"20"}),(0,a.jsx)(n.td,{children:"True"}),(0,a.jsx)(n.td,{children:"None"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"reverse"}),(0,a.jsx)(n.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,a.jsx)(n.td,{children:"False"}),(0,a.jsx)(n.td,{children:"True"}),(0,a.jsx)(n.td,{children:"None"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"sortby"}),(0,a.jsx)(n.td,{children:"The column to sort by"}),(0,a.jsx)(n.td,{children:"None"}),(0,a.jsx)(n.td,{children:"True"}),(0,a.jsx)(n.td,{children:"open, high, low, close, adjclose, volume, date_id, oc_high, oc_low, returns, logret, logprice"})]})]})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"2022 Feb 16, 11:05 (\ud83e\udd8b) /stocks/qa/ $ raw\n        Raw Data\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503            \u2503 Adjclose \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 2022-01-19 \u2502 995.650  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-20 \u2502 996.270  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-21 \u2502 943.900  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-24 \u2502 930.000  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-25 \u2502 918.400  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-26 \u2502 937.410  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-27 \u2502 829.100  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-28 \u2502 846.350  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-01-31 \u2502 936.720  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-01 \u2502 931.250  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-02 \u2502 905.660  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-03 \u2502 891.140  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-04 \u2502 923.320  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-07 \u2502 907.340  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-08 \u2502 922.000  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-09 \u2502 932.000  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-10 \u2502 904.550  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-11 \u2502 860.000  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-14 \u2502 875.760  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-02-15 \u2502 922.430  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,a.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(5260),r=t(74848);function s(e){let{title:n}=e;return(0,r.jsx)(a.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);