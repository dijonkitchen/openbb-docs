"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4727],{15754:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>f,toc:()=>p});var r=t(74848),n=t(28453),i=t(94331);const a={title:"payoff",description:"Documentation for openbb.portfolio.metric.payoff function. This function allows to get the payoff ratio of a portfolio during different time periods. The function does not take any parameters and returns a DataFrame with values.",keywords:["payoff ratio","portfolio","time periods","portfolio metric","no losing trades"]},s=void 0,f={id:"sdk/reference/portfolio/metric/payoff",title:"payoff",description:"Documentation for openbb.portfolio.metric.payoff function. This function allows to get the payoff ratio of a portfolio during different time periods. The function does not take any parameters and returns a DataFrame with values.",source:"@site/content/sdk/reference/portfolio/metric/payoff.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/payoff",permalink:"/sdk/reference/portfolio/metric/payoff",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/metric/payoff.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"payoff",description:"Documentation for openbb.portfolio.metric.payoff function. This function allows to get the payoff ratio of a portfolio during different time periods. The function does not take any parameters and returns a DataFrame with values.",keywords:["payoff ratio","portfolio","time periods","portfolio metric","no losing trades"]},sidebar:"tutorialSidebar",previous:{title:"maxdrawdown",permalink:"/sdk/reference/portfolio/metric/maxdrawdown"},next:{title:"profitfactor",permalink:"/sdk/reference/portfolio/metric/profitfactor"}},l={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const o={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"portfolio.metric.payoff - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(o.p,{children:"Get payoff ratio"}),"\n",(0,r.jsxs)(o.p,{children:["Source Code: [",(0,r.jsx)(o.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1590",children:"link"}),"]"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-python",children:"openbb.portfolio.metric.payoff(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(o.p,{children:"This function does not take any parameters."}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Type"}),(0,r.jsx)(o.th,{children:"Description"})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"pd.DataFrame"}),(0,r.jsx)(o.td,{children:"DataFrame of payoff ratio of the portfolio during different time periods"})]})})]}),"\n",(0,r.jsx)(o.hr,{}),"\n",(0,r.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.payoff(p)\n'})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"During some time periods there were no losing trades. Thus some values could not be calculated.\n"})}),"\n",(0,r.jsx)(o.hr,{})]})}function d(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},94331:(e,o,t)=>{t.d(o,{A:()=>i});t(96540);var r=t(5260),n=t(74848);function i(e){let{title:o}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:o})})}},28453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>s});var r=t(96540);const n={},i=r.createContext(n);function a(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);