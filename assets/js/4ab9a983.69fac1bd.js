"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22400],{87951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var s=r(74848),n=r(28453),c=r(94331);const i={title:"search",description:"The documentation page details the 'search' function of the OpenBB python library used for querying stocks information. The function allows queries based on parameters like country, sector, industry and exchange country. The search results are returned as a pandas DataFrame.",keywords:["search","query","tickers","stocks","country","sector","industry","exchange_country","limit"]},d=void 0,a={id:"sdk/reference/stocks/search",title:"search",description:"The documentation page details the 'search' function of the OpenBB python library used for querying stocks information. The function allows queries based on parameters like country, sector, industry and exchange country. The search results are returned as a pandas DataFrame.",source:"@site/content/sdk/reference/stocks/search.md",sourceDirName:"sdk/reference/stocks",slug:"/sdk/reference/stocks/search",permalink:"/sdk/reference/stocks/search",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/search.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"search",description:"The documentation page details the 'search' function of the OpenBB python library used for querying stocks information. The function allows queries based on parameters like country, sector, industry and exchange country. The search results are returned as a pandas DataFrame.",keywords:["search","query","tickers","stocks","country","sector","industry","exchange_country","limit"]},sidebar:"tutorialSidebar",previous:{title:"screener_data",permalink:"/sdk/reference/stocks/screener/screener_data"},next:{title:"countries",permalink:"/sdk/reference/stocks/sia/countries"}},o={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{title:"stocks.search - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(t.p,{children:"Search selected query for tickers."}),"\n",(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/stocks_helper.py#L98",children:"link"}),"]"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'openbb.stocks.search(query: str = "", country: str = "", sector: str = "", industry: str = "", exchange_country: str = "", limit: int = 0)\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"query"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The search term used to find company tickers"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"country"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Search by country to find stocks matching the criteria"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sector"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Search by sector to find stocks matching the criteria"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"industry"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Search by industry to find stocks matching the criteria"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exchange_country"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Search by exchange country to find stock matching"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The limit of companies shown."}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pd.DataFrame"}),(0,s.jsx)(t.td,{children:"Search results"})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.stocks.search(country="united states", exchange_country="Germany")\n'})}),"\n",(0,s.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>c});r(96540);var s=r(5260),n=r(74848);function c(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var s=r(96540);const n={},c=s.createContext(n);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);