"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82830],{83263:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=s(74848),r=s(28453),i=s(94331);const c={title:"filter_stocks",description:"This page provides an in-depth look into the function 'filter_stocks' used for filtering stocks based on various parameters like country, sector, industry, and market cap, and excluding specific exchanges. Understand the usage and benefits of this functionality in stock filtering.",keywords:["filter stocks","stock filters","stock filtering","finance database","sector stocks","industry stocks","market cap","stock exchange","filter by country"]},d=void 0,o={id:"sdk/reference/stocks/sia/filter_stocks",title:"filter_stocks",description:"This page provides an in-depth look into the function 'filter_stocks' used for filtering stocks based on various parameters like country, sector, industry, and market cap, and excluding specific exchanges. Understand the usage and benefits of this functionality in stock filtering.",source:"@site/content/sdk/reference/stocks/sia/filter_stocks.md",sourceDirName:"sdk/reference/stocks/sia",slug:"/sdk/reference/stocks/sia/filter_stocks",permalink:"/docs/sdk/reference/stocks/sia/filter_stocks",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/sia/filter_stocks.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"filter_stocks",description:"This page provides an in-depth look into the function 'filter_stocks' used for filtering stocks based on various parameters like country, sector, industry, and market cap, and excluding specific exchanges. Understand the usage and benefits of this functionality in stock filtering.",keywords:["filter stocks","stock filters","stock filtering","finance database","sector stocks","industry stocks","market cap","stock exchange","filter by country"]},sidebar:"tutorialSidebar",previous:{title:"cps",permalink:"/docs/sdk/reference/stocks/sia/cps"},next:{title:"industries",permalink:"/docs/sdk/reference/stocks/sia/industries"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"stocks.sia.filter_stocks - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Filter stocks based on country, sector, industry, market cap and exclude exchanges."}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_model.py#L109",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.stocks.sia.filter_stocks(country: str = None, sector: str = None, industry: str = None, marketcap: str = "", exclude_exchanges: bool = True)\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Search by country to find stocks matching the criteria."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sector"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Search by sector to find stocks matching the criteria."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"industry"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Search by industry to find stocks matching the criteria."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"marketcap"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Select stocks based on the market cap."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exclude_exchanges"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"When you wish to include different exchanges use this boolean."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"list"}),(0,n.jsx)(t.td,{children:"List of filtered stocks"})]})})]}),"\n",(0,n.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(5260),r=s(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>d});var n=s(96540);const r={},i=n.createContext(r);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);