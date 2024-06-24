"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41357],{59764:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=t(74848),s=t(28453),a=t(94331);const d={title:"combine",description:"Learn how to use the combine function in OpenBB programming library to add columns to dataframes. This page provides details on parameters, returns, and even source code.",keywords:["Combine function","Data manipulation","Dataframes","Forecasting model","Python library","Programming","Source code","Add column","Data analysis"]},o=void 0,c={id:"sdk/reference/forecast/combine",title:"combine",description:"Learn how to use the combine function in OpenBB programming library to add columns to dataframes. This page provides details on parameters, returns, and even source code.",source:"@site/content/sdk/reference/forecast/combine.md",sourceDirName:"sdk/reference/forecast",slug:"/sdk/reference/forecast/combine",permalink:"/sdk/reference/forecast/combine",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/forecast/combine.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"combine",description:"Learn how to use the combine function in OpenBB programming library to add columns to dataframes. This page provides details on parameters, returns, and even source code.",keywords:["Combine function","Data manipulation","Dataframes","Forecasting model","Python library","Programming","Source code","Add column","Data analysis"]},sidebar:"tutorialSidebar",previous:{title:"clean",permalink:"/sdk/reference/forecast/clean"},next:{title:"corr",permalink:"/sdk/reference/forecast/corr"}},i={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"forecast.combine - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"Adds the given column of df2 to df1"}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L409",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'openbb.forecast.combine(df1: pd.DataFrame, df2: pd.DataFrame, column: str, dataset: str = "")\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"df1"}),(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"The dataframe to add a column to"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"df2"}),(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"The dataframe to lose a column"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"column"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"The column to transfer"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dataset"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"A name for df2 (shows in name of new column)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"The new dataframe"})]})})]}),"\n",(0,r.jsx)(n.hr,{})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(5260),s=t(74848);function a(e){let{title:n}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);