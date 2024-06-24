"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81570],{45278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(74848),r=n(28453),c=n(94331);const a={title:"cnews",description:"This page provides details about the 'cnews' function of the OpenBB Terminal, capable of fetching company news. The function uses the company ticker and optional dates of search as parameters.",keywords:["cnews function","company news","Finnhub","company ticker","news articles","search dates"]},i=void 0,o={id:"sdk/reference/stocks/ba/cnews",title:"cnews",description:"This page provides details about the 'cnews' function of the OpenBB Terminal, capable of fetching company news. The function uses the company ticker and optional dates of search as parameters.",source:"@site/content/sdk/reference/stocks/ba/cnews.md",sourceDirName:"sdk/reference/stocks/ba",slug:"/sdk/reference/stocks/ba/cnews",permalink:"/sdk/reference/stocks/ba/cnews",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/ba/cnews.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"cnews",description:"This page provides details about the 'cnews' function of the OpenBB Terminal, capable of fetching company news. The function uses the company ticker and optional dates of search as parameters.",keywords:["cnews function","company news","Finnhub","company ticker","news articles","search dates"]},sidebar:"tutorialSidebar",previous:{title:"bullbear",permalink:"/sdk/reference/stocks/ba/bullbear"},next:{title:"getdd",permalink:"/sdk/reference/stocks/ba/getdd"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.A,{title:"stocks.ba.cnews - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(t.p,{children:"Get news from a company. [Source: Finnhub]"}),"\n",(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/behavioural_analysis/finnhub_model.py#L20",children:"link"}),"]"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"openbb.stocks.ba.cnews(symbol: str, start_date: Optional[str] = None, end_date: Optional[str] = None)\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"company ticker to look for news articles"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"start_date"}),(0,s.jsx)(t.td,{children:"Optional[str]"}),(0,s.jsx)(t.td,{children:"date to start searching articles, with format YYYY-MM-DD"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"end_date"}),(0,s.jsx)(t.td,{children:"Optional[str]"}),(0,s.jsx)(t.td,{children:"date to end searching articles, with format YYYY-MM-DD"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"List"}),(0,s.jsx)(t.td,{children:"term to search on the news articles"})]})})]}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var s=n(5260),r=n(74848);function c(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const r={},c=s.createContext(r);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);