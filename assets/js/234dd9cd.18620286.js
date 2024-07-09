"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80146],{24026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(74848),s=n(28453),c=n(94331);const a={title:"sto",description:"Page about the Stochastic Oscillator (STO) function in the OpenBB library. It includes information about calculating momentum indicators, source code, parameters, and what it returns.",keywords:["sto","stochastic oscillator","momentum indicator","forecasting","k & d columns","dataset"]},o=void 0,i={id:"sdk/reference/forecast/sto",title:"sto",description:"Page about the Stochastic Oscillator (STO) function in the OpenBB library. It includes information about calculating momentum indicators, source code, parameters, and what it returns.",source:"@site/content/sdk/reference/forecast/sto.md",sourceDirName:"sdk/reference/forecast",slug:"/sdk/reference/forecast/sto",permalink:"/sdk/reference/forecast/sto",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/forecast/sto.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,frontMatter:{title:"sto",description:"Page about the Stochastic Oscillator (STO) function in the OpenBB library. It includes information about calculating momentum indicators, source code, parameters, and what it returns.",keywords:["sto","stochastic oscillator","momentum indicator","forecasting","k & d columns","dataset"]},sidebar:"tutorialSidebar",previous:{title:"signal",permalink:"/sdk/reference/forecast/signal"},next:{title:"tcn",permalink:"/sdk/reference/forecast/tcn"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{title:"forecast.sto - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Stochastic Oscillator %K and %D : A stochastic oscillator is a momentum indicator comparing a particular closing"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L187",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.forecast.sto(dataset: pd.DataFrame, close_column: str = "close", high_column: str = "high", low_column: str = "low", period: int = 10)\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dataset"}),(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"The dataset you wish to calculate for"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Span"}),(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Dataframe with added STO K & D columns"})]})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var r=n(5260),s=n(74848);function c(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},c=r.createContext(s);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);