"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82659],{12805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(74848),a=n(28453),s=n(94331);const i={title:"hma",description:"This page provides documentation on the hma function from OpenBB. This function calculates the hull moving average (HMA) of stock prices, using a pandas dataframe as input and returning a dataframe with the prices and the HMA.",keywords:["hma","hull moving average","stock technical analysis","pandas","SMA window"]},d=void 0,c={id:"sdk/reference/ta/hma",title:"hma",description:"This page provides documentation on the hma function from OpenBB. This function calculates the hull moving average (HMA) of stock prices, using a pandas dataframe as input and returning a dataframe with the prices and the HMA.",source:"@site/content/sdk/reference/ta/hma.md",sourceDirName:"sdk/reference/ta",slug:"/sdk/reference/ta/hma",permalink:"/sdk/reference/ta/hma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/ta/hma.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"hma",description:"This page provides documentation on the hma function from OpenBB. This function calculates the hull moving average (HMA) of stock prices, using a pandas dataframe as input and returning a dataframe with the prices and the HMA.",keywords:["hma","hull moving average","stock technical analysis","pandas","SMA window"]},sidebar:"tutorialSidebar",previous:{title:"fisher",permalink:"/sdk/reference/ta/fisher"},next:{title:"kc",permalink:"/sdk/reference/ta/kc"}},h={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"ta.hma - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Gets hull moving average (HMA) for stock"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/overlap_model.py#L91",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.ta.hma(data: pd.Series, length: int = 50, offset: int = 0)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"pd.Series"}),(0,r.jsx)(t.td,{children:"Dataframe of dates and prices"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"length"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Length of SMA window"}),(0,r.jsx)(t.td,{children:"50"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"offset"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Length of offset"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Dataframe containing prices and HMA"})]})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),a=n(74848);function s(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);