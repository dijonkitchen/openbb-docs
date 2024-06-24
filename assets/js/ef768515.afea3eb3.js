"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45277],{45935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(74848),s=n(28453),i=n(94331);const a={title:"wma",description:"This page provides a comprehensive guide on how to get the Weighted Moving Average (WMA) for stock using OpenBB's wma function. This includes relevant parameters and return values.",keywords:["Weighted Moving Average","WMA","Stock Analysis","Python Function","Technical Analysis"]},d=void 0,c={id:"sdk/reference/ta/wma",title:"wma",description:"This page provides a comprehensive guide on how to get the Weighted Moving Average (WMA) for stock using OpenBB's wma function. This includes relevant parameters and return values.",source:"@site/content/sdk/reference/ta/wma.md",sourceDirName:"sdk/reference/ta",slug:"/sdk/reference/ta/wma",permalink:"/sdk/reference/ta/wma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/ta/wma.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"wma",description:"This page provides a comprehensive guide on how to get the Weighted Moving Average (WMA) for stock using OpenBB's wma function. This includes relevant parameters and return values.",keywords:["Weighted Moving Average","WMA","Stock Analysis","Python Function","Technical Analysis"]},sidebar:"tutorialSidebar",previous:{title:"vwap",permalink:"/sdk/reference/ta/vwap"},next:{title:"zlma",permalink:"/sdk/reference/ta/zlma"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"ta.wma - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Gets weighted moving average (WMA) for stock"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/overlap_model.py#L67",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.ta.wma(data: pd.Series, length: int = 50, offset: int = 0)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"pd.Series"}),(0,r.jsx)(t.td,{children:"Dataframe of dates and prices"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"length"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Length of SMA window"}),(0,r.jsx)(t.td,{children:"50"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"offset"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Length of offset"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Dataframe containing prices and WMA"})]})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);