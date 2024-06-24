"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92883],{49432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var n=r(74848),a=r(28453),s=r(94331);const d={title:"load",description:"This documentation page supports users in stock analysis by guiding them on how to load a stock ticker. It explains various parameters such as market source, date ranges, pre/after market hours, and periodicity of data. It also includes guidance for loading custom files and managing data at different frequencies.",keywords:["Load stock ticker","Stock analysis","Data source","Indian ticker","Market analysis","Intraday stock minutes","Pre/After market hours","Load custom file","Monthly data","Weekly data"]},i=void 0,o={id:"terminal/reference/forex/ta/load",title:"load",description:"This documentation page supports users in stock analysis by guiding them on how to load a stock ticker. It explains various parameters such as market source, date ranges, pre/after market hours, and periodicity of data. It also includes guidance for loading custom files and managing data at different frequencies.",source:"@site/content/terminal/reference/forex/ta/load.md",sourceDirName:"terminal/reference/forex/ta",slug:"/terminal/reference/forex/ta/load",permalink:"/terminal/reference/forex/ta/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/ta/load.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"load",description:"This documentation page supports users in stock analysis by guiding them on how to load a stock ticker. It explains various parameters such as market source, date ranges, pre/after market hours, and periodicity of data. It also includes guidance for loading custom files and managing data at different frequencies.",keywords:["Load stock ticker","Stock analysis","Data source","Indian ticker","Market analysis","Intraday stock minutes","Pre/After market hours","Load custom file","Monthly data","Weekly data"]},sidebar:"tutorialSidebar",previous:{title:"fisher",permalink:"/terminal/reference/forex/ta/fisher"},next:{title:"macd",permalink:"/terminal/reference/forex/ta/macd"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"forex/ta/load - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsxs)(t.p,{children:["Load stock ticker to perform analysis on. When the data source is syf', an Indian ticker can be loaded by using '.NS' at the end, e.g. 'SBIN.NS'. See available market in ",(0,n.jsx)(t.a,{href:"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html",children:"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"load -t TICKER [-s START] [-e END] [-i {1,5,15,30,60}] [-p] [-f FILEPATH] [-m] [-w] [-r {ytd,1y,2y,5y,6m}]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"Stock ticker"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start"}),(0,n.jsx)(t.td,{children:"The starting date (format YYYY-MM-DD) of the stock"}),(0,n.jsx)(t.td,{children:"2019-11-21"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end"}),(0,n.jsx)(t.td,{children:"The ending date (format YYYY-MM-DD) of the stock"}),(0,n.jsx)(t.td,{children:"2022-11-25"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"Intraday stock minutes"}),(0,n.jsx)(t.td,{children:"1440"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"1, 5, 15, 30, 60"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prepost"}),(0,n.jsx)(t.td,{children:"Pre/After market hours. Only works for 'yf' source, and intraday data"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filepath"}),(0,n.jsx)(t.td,{children:"Path to load custom file."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"monthly"}),(0,n.jsx)(t.td,{children:"Load monthly data"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"weekly"}),(0,n.jsx)(t.td,{children:"Load weekly data"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),a=r(74848);function s(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);