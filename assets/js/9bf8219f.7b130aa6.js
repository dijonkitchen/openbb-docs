"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91630],{62614:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var t=r(74848),a=r(28453),o=r(94331);const c={title:"overview",description:"This page provides documentation for the OpenBBTerminal's economy overview feature. The function scrapes market data, returning a DataFrame with the name, price, net change, and percentage change. No parameters needed.",keywords:["data scraping","economy overview","market data","pandas DataFrame","net change","percent change"]},i=void 0,s={id:"sdk/reference/economy/overview",title:"overview",description:"This page provides documentation for the OpenBBTerminal's economy overview feature. The function scrapes market data, returning a DataFrame with the name, price, net change, and percentage change. No parameters needed.",source:"@site/content/sdk/reference/economy/overview.md",sourceDirName:"sdk/reference/economy",slug:"/sdk/reference/economy/overview",permalink:"/sdk/reference/economy/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/economy/overview.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"overview",description:"This page provides documentation for the OpenBBTerminal's economy overview feature. The function scrapes market data, returning a DataFrame with the name, price, net change, and percentage change. No parameters needed.",keywords:["data scraping","economy overview","market data","pandas DataFrame","net change","percent change"]},sidebar:"tutorialSidebar",previous:{title:"macro_parameters",permalink:"/sdk/reference/economy/macro_parameters"},next:{title:"perfmap",permalink:"/sdk/reference/economy/perfmap"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.A,{title:"economy.overview - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(n.p,{children:"Scrape data for market overview"}),"\n",(0,t.jsxs)(n.p,{children:["Source Code: [",(0,t.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/wsj_model.py#L62",children:"link"}),"]"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"openbb.economy.overview()\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"This function does not take any parameters."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pd.DataFrame"}),(0,t.jsx)(n.td,{children:"Dataframe containing name, price, net change and percent change"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nov_df = openbb.economy.overview()\n"})}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},94331:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var t=r(5260),a=r(74848);function o(e){let{title:n}=e;return(0,a.jsx)(t.A,{children:(0,a.jsx)("title",{children:n})})}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(96540);const a={},o=t.createContext(a);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);