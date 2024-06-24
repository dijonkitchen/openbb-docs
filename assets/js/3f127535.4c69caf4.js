"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74465],{74318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(74848),s=n(28453),o=n(94331);const c={title:"tob",description:"Get top of book bid and ask for any ticker on the CBOE exchange using the OpenBB Terminal. Default exchange is BZX, but can be changed to EDGX, BYX, or EDGA. Returns a Dataframe of Bids.",keywords:["Top of Book bid","Ask for ticker","CBOE","BZX","EDGX","BYX","EDGA","OpenBB Stocks","Dataframe of Bids","OpenBB finance"]},d=void 0,i={id:"sdk/reference/stocks/tob",title:"tob",description:"Get top of book bid and ask for any ticker on the CBOE exchange using the OpenBB Terminal. Default exchange is BZX, but can be changed to EDGX, BYX, or EDGA. Returns a Dataframe of Bids.",source:"@site/content/sdk/reference/stocks/tob.md",sourceDirName:"sdk/reference/stocks",slug:"/sdk/reference/stocks/tob",permalink:"/docs/sdk/reference/stocks/tob",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/tob.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"tob",description:"Get top of book bid and ask for any ticker on the CBOE exchange using the OpenBB Terminal. Default exchange is BZX, but can be changed to EDGX, BYX, or EDGA. Returns a Dataframe of Bids.",keywords:["Top of Book bid","Ask for ticker","CBOE","BZX","EDGX","BYX","EDGA","OpenBB Stocks","Dataframe of Bids","OpenBB finance"]},sidebar:"tutorialSidebar",previous:{title:"open",permalink:"/docs/sdk/reference/stocks/th/open"},next:{title:"ad",permalink:"/docs/sdk/reference/ta/ad"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"stocks.tob - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get top of book bid and ask for ticker on exchange [CBOE.com]"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/cboe_model.py#L12",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.stocks.tob(symbol: str, exchange: str = "BZX")\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Ticker to get"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"exchange"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsxs)(t.td,{children:["Exchange to look at.  Can be ",(0,r.jsx)(t.code,{children:"BZX"}),",",(0,r.jsx)(t.code,{children:"EDGX"}),", ",(0,r.jsx)(t.code,{children:"BYX"}),", ",(0,r.jsx)(t.code,{children:"EDGA"})]}),(0,r.jsx)(t.td,{children:"BZX"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DatatFrame"}),(0,r.jsx)(t.td,{children:"Dataframe of Bids"})]})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(5260),s=n(74848);function o(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var r=n(96540);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);