"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70901],{59011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(74848),i=t(28453),r=t(94331);const a={title:"fipo",description:"This documentation page provides information and examples on using the 'fipo' function, a tool for retrieving future IPO date estimates from financial data source Finnhub.io. This aids users in planning for upcoming IPOs by providing essential details such as exchange name, company name, number of shares, expected price, status, and total share value.",keywords:["IPO","Stock market","future IPO dates","SMART FOR LIFE, INC.","NASDAQ Capital","FinTech","Finnhub.io","Stock exchange","Investment"]},o=void 0,c={id:"terminal/reference/stocks/disc/fipo",title:"fipo",description:"This documentation page provides information and examples on using the 'fipo' function, a tool for retrieving future IPO date estimates from financial data source Finnhub.io. This aids users in planning for upcoming IPOs by providing essential details such as exchange name, company name, number of shares, expected price, status, and total share value.",source:"@site/content/terminal/reference/stocks/disc/fipo.md",sourceDirName:"terminal/reference/stocks/disc",slug:"/terminal/reference/stocks/disc/fipo",permalink:"/terminal/reference/stocks/disc/fipo",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/disc/fipo.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"fipo",description:"This documentation page provides information and examples on using the 'fipo' function, a tool for retrieving future IPO date estimates from financial data source Finnhub.io. This aids users in planning for upcoming IPOs by providing essential details such as exchange name, company name, number of shares, expected price, status, and total share value.",keywords:["IPO","Stock market","future IPO dates","SMART FOR LIFE, INC.","NASDAQ Capital","FinTech","Finnhub.io","Stock exchange","Investment"]},sidebar:"tutorialSidebar",previous:{title:"divcal",permalink:"/terminal/reference/stocks/disc/divcal"},next:{title:"gainers",permalink:"/terminal/reference/stocks/disc/gainers"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"stocks/disc/fipo - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsxs)(n.p,{children:["Future IPOs dates. [Source: ",(0,s.jsx)(n.a,{href:"https://finnhub.io",children:"https://finnhub.io"}),"]"]}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"fipo [-d DAYS] [-s END] [-l LIMIT]\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Optional"}),(0,s.jsx)(n.th,{children:"Choices"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"days"}),(0,s.jsx)(n.td,{children:"Number of days in the future to look for IPOs."}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"end"}),(0,s.jsx)(n.td,{children:"The end date (format YYYY-MM-DD) to look for IPOs, starting from today. When set, end date will override --days argument"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"limit"}),(0,s.jsx)(n.td,{children:"Limit number of IPOs to display."}),(0,s.jsx)(n.td,{children:"20"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"2022 Feb 16, 03:59 (\ud83e\udd8b) /stocks/disc/ $ fipo\n                                                       Future IPO Dates\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Future     \u2503 Exchange       \u2503 Name                 \u2503 Number of Shares \u2503 Price      \u2503 Status   \u2503 symbol \u2503 Total Shares Value \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 2022-02-16 \u2502 NASDAQ Capital \u2502 SMART FOR LIFE, INC. \u2502 1800000          \u2502 9.00-11.00 \u2502 expected \u2502 SMFL   \u2502 22770000           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(5260),i=t(74848);function r(e){let{title:n}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);