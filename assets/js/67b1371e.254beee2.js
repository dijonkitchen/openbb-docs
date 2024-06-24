"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93305],{53180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(74848),a=n(28453),i=n(94331);const s={title:"treasury",description:"This page provides detailed information and instructions on how to obtain and plot any set of U.S. treasuries through different parameters including maturity, frequency and type. It provides flexibility with regards to date ranges.",keywords:["U.S. treasuries","maturity","frequency","plot","date range","parameters","instructions","EconDB","FED","inflation-adjusted","secondary markets"]},d=void 0,o={id:"terminal/reference/economy/treasury",title:"treasury",description:"This page provides detailed information and instructions on how to obtain and plot any set of U.S. treasuries through different parameters including maturity, frequency and type. It provides flexibility with regards to date ranges.",source:"@site/content/terminal/reference/economy/treasury.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/treasury",permalink:"/terminal/reference/economy/treasury",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/economy/treasury.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"treasury",description:"This page provides detailed information and instructions on how to obtain and plot any set of U.S. treasuries through different parameters including maturity, frequency and type. It provides flexibility with regards to date ranges.",keywords:["U.S. treasuries","maturity","frequency","plot","date range","parameters","instructions","EconDB","FED","inflation-adjusted","secondary markets"]},sidebar:"tutorialSidebar",previous:{title:"spread",permalink:"/terminal/reference/economy/spread"},next:{title:"valuation",permalink:"/terminal/reference/economy/valuation"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"economy /treasury - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Obtain any set of U.S. treasuries and plot them together. These can be a range of maturities for nominal, inflation-adjusted (on long term average of inflation adjusted) and secondary markets over a lengthy period. Note: 3-month and 10-year treasury yields for other countries are available via the command 'macro' and parameter 'M3YD' and 'Y10YD'. [Source: EconDB / FED]"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"treasury [-m MATURITY] [--show] [--freq {annually,monthly,weekly,daily}] [-t TYPE] [-s START_DATE] [-e END_DATE]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maturity"}),(0,r.jsx)(t.td,{children:"The preferred maturity which is dependent on the type of the treasury"}),(0,r.jsx)(t.td,{children:"10y"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"show_maturities"}),(0,r.jsx)(t.td,{children:"Show the maturities available for every instrument."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"frequency"}),(0,r.jsx)(t.td,{children:"The frequency, this can be annually, monthly, weekly or daily"}),(0,r.jsx)(t.td,{children:"monthly"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"annually, monthly, weekly, daily"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"Choose from: nominal, inflation, average, secondary"}),(0,r.jsx)(t.td,{children:"nominal"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"The start date of the data (format: YEAR-MONTH-DAY, i.e. 2010-12-31)"}),(0,r.jsx)(t.td,{children:"1934-01-31"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"The end date of the data (format: YEAR-DAY-MONTH, i.e. 2021-06-02)"}),(0,r.jsx)(t.td,{children:"2022-11-25"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"2022 Mar 15, 07:33 (\ud83e\udd8b) /economy/ $ treasury -sm\n               Maturity options per instrument\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Instrument \u2503 Maturities                                    \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 nominal    \u2502 1m, 3m, 6m, 1y, 2y, 3y, 5y, 7y, 10y, 20y, 30y \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 inflation  \u2502 5y, 7y, 10y, 20y, 30y                         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 average    \u2502 Defined by function                           \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 secondary  \u2502 4w, 3m, 6m, 1y                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/158575884-8ec4e1dc-fb5b-4440-be4b-5e1dcd6d2a5e.png",alt:"3y 5y 10y 30y nominal"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/158575921-ff7c387c-8eb6-4716-80c4-f4c5121633f2.png",alt:"5y nominal inflation average"})}),"\n",(0,r.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),a=n(74848);function i(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);