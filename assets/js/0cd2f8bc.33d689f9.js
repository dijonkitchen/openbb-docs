"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97701],{21324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=t(74848),s=t(28453),o=t(94331);const i={title:"futures",description:"This page provides information on how to retrieve and manipulate futures data using the OpenBB economy function. It includes examples and descriptions for parameters such as data source and future type.",keywords:["economy","futures data","Finviz","WSJ","Indices","Energy","Metals","Meats","Grains","Softs","Bonds","Currencies"]},d=void 0,a={id:"sdk/reference/economy/futures",title:"futures",description:"This page provides information on how to retrieve and manipulate futures data using the OpenBB economy function. It includes examples and descriptions for parameters such as data source and future type.",source:"@site/content/sdk/reference/economy/futures.md",sourceDirName:"sdk/reference/economy",slug:"/sdk/reference/economy/futures",permalink:"/sdk/reference/economy/futures",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/economy/futures.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"futures",description:"This page provides information on how to retrieve and manipulate futures data using the OpenBB economy function. It includes examples and descriptions for parameters such as data source and future type.",keywords:["economy","futures data","Finviz","WSJ","Indices","Energy","Metals","Meats","Grains","Softs","Bonds","Currencies"]},sidebar:"tutorialSidebar",previous:{title:"future",permalink:"/sdk/reference/economy/future"},next:{title:"gdp",permalink:"/sdk/reference/economy/gdp"}},c={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"economy.futures - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"Get futures data."}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/sdk_helpers.py#L8",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'openbb.economy.futures(source: Any = "WSJ", future_type: str = "Indices")\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"source"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"Data source for futures data.  From the following: WSJ, Finviz"}),(0,r.jsx)(n.td,{children:"WSJ"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"future_type"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"(Finviz only) Future type to get.  Can be: Indices, Energy, Metals, Meats, Grains, Softs, Bonds, Currencies."}),(0,r.jsx)(n.td,{children:"Indices"}),(0,r.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"Dataframe of futures data."})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nwsj_futures = openbb.economy.futures()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"To sort by the largest percent change:\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'futures_sorted = openbb.economy.futures().sort_values(by="%Chg", ascending=False)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"FinViz provides different options for future types.  We can get Meats with the following command:\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'meat_futures = openbb.economy.futures(source="Finviz", future_type="Meats")\n'})}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(5260),s=t(74848);function o(e){let{title:n}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);