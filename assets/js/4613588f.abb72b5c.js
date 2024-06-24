"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53164],{61375:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=s(74848),r=s(28453),d=s(94331);const i={title:"pipo",description:"This page provides information about the 'pipo' open source code which is used to find Past IPO dates. It includes details about the parameters used and the output provided by the code.",keywords:["pipo","past IPO dates","open source code","Finnhub","dataframe","num_days_behind","start_date"]},o=void 0,c={id:"sdk/reference/stocks/disc/pipo",title:"pipo",description:"This page provides information about the 'pipo' open source code which is used to find Past IPO dates. It includes details about the parameters used and the output provided by the code.",source:"@site/content/sdk/reference/stocks/disc/pipo.md",sourceDirName:"sdk/reference/stocks/disc",slug:"/sdk/reference/stocks/disc/pipo",permalink:"/sdk/reference/stocks/disc/pipo",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/disc/pipo.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"pipo",description:"This page provides information about the 'pipo' open source code which is used to find Past IPO dates. It includes details about the parameters used and the output provided by the code.",keywords:["pipo","past IPO dates","open source code","Finnhub","dataframe","num_days_behind","start_date"]},sidebar:"tutorialSidebar",previous:{title:"news",permalink:"/sdk/reference/stocks/disc/news"},next:{title:"rtat",permalink:"/sdk/reference/stocks/disc/rtat"}},a={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:"stocks.disc.pipo - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Past IPOs dates. [Source: Finnhub]"}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/discovery/finnhub_model.py#L74",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.stocks.disc.pipo(num_days_behind: int = 5, start_date: Optional[str] = None)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num_days_behind"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of days to look behind for IPOs dates"}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The starting date (format YYYY-MM-DD) to look for IPOs"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"Get dataframe with past IPOs"})]})})]}),"\n",(0,n.jsx)(t.hr,{})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>d});s(96540);var n=s(5260),r=s(74848);function d(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(96540);const r={},d=n.createContext(r);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);