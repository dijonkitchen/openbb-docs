"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38055],{87063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(74848),s=n(28453),d=n(94331);const a={title:"load",description:"Understanding how to load a stock ticker for analysis. This page provides description and usage of parameters such as stock ticker, start date, end date, interval, filepath and more. Indian tickers and Yahoo Finance markets are also referenced.",keywords:["load","stock ticker","analysis","data source","Indian ticker","yahoo finance","market","parameters","starting date","ending date","intraday stock","prepost","filepath","monthly data","weekly data"]},i=void 0,o={id:"terminal/reference/stocks/dps/load",title:"load",description:"Understanding how to load a stock ticker for analysis. This page provides description and usage of parameters such as stock ticker, start date, end date, interval, filepath and more. Indian tickers and Yahoo Finance markets are also referenced.",source:"@site/content/terminal/reference/stocks/dps/load.md",sourceDirName:"terminal/reference/stocks/dps",slug:"/terminal/reference/stocks/dps/load",permalink:"/openbb-docs/terminal/reference/stocks/dps/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/dps/load.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"load",description:"Understanding how to load a stock ticker for analysis. This page provides description and usage of parameters such as stock ticker, start date, end date, interval, filepath and more. Indian tickers and Yahoo Finance markets are also referenced.",keywords:["load","stock ticker","analysis","data source","Indian ticker","yahoo finance","market","parameters","starting date","ending date","intraday stock","prepost","filepath","monthly data","weekly data"]},sidebar:"tutorialSidebar",previous:{title:"hsi",permalink:"/openbb-docs/terminal/reference/stocks/dps/hsi"},next:{title:"pos",permalink:"/openbb-docs/terminal/reference/stocks/dps/pos"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{title:"stocks/dps/load - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsxs)(t.p,{children:["Load stock ticker to perform analysis on. When the data source is syf', an Indian ticker can be loaded by using '.NS' at the end, e.g. 'SBIN.NS'. See available market in ",(0,r.jsx)(t.a,{href:"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html",children:"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"load -t TICKER [-s START] [-e END] [-i {1,5,15,30,60}] [-p] [-f FILEPATH] [-m] [-w] [-r {ytd,1y,2y,5y,6m}]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"Stock ticker"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start"}),(0,r.jsx)(t.td,{children:"The starting date (format YYYY-MM-DD) of the stock"}),(0,r.jsx)(t.td,{children:"2019-11-21"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end"}),(0,r.jsx)(t.td,{children:"The ending date (format YYYY-MM-DD) of the stock"}),(0,r.jsx)(t.td,{children:"2022-11-25"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"interval"}),(0,r.jsx)(t.td,{children:"Intraday stock minutes"}),(0,r.jsx)(t.td,{children:"1440"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"1, 5, 15, 30, 60"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prepost"}),(0,r.jsx)(t.td,{children:"Pre/After market hours. Only works for 'yf' source, and intraday data"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filepath"}),(0,r.jsx)(t.td,{children:"Path to load custom file."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"monthly"}),(0,r.jsx)(t.td,{children:"Load monthly data"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"weekly"}),(0,r.jsx)(t.td,{children:"Load weekly data"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var r=n(5260),s=n(74848);function d(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const s={},d=r.createContext(s);function a(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);