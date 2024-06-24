"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71668],{66752:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=n(74848),r=n(28453),i=n(94331);const s={title:"commonsense",description:"This documentation page includes details on how to get the commonsense ratio for a portfolio within the OpenBB-framework using Python. It explains the use of the PortfolioEngine class and provides examples using the openbb.portfolio.load and openbb.portfolio.metric.commonsense functions.",keywords:["commonsense ratio","PortfolioEngine","openbb.portfolio.load","openbb.portfolio.metric.commonsense"]},l=void 0,c={id:"sdk/reference/portfolio/metric/commonsense",title:"commonsense",description:"This documentation page includes details on how to get the commonsense ratio for a portfolio within the OpenBB-framework using Python. It explains the use of the PortfolioEngine class and provides examples using the openbb.portfolio.load and openbb.portfolio.metric.commonsense functions.",source:"@site/content/sdk/reference/portfolio/metric/commonsense.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/commonsense",permalink:"/sdk/reference/portfolio/metric/commonsense",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/metric/commonsense.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"commonsense",description:"This documentation page includes details on how to get the commonsense ratio for a portfolio within the OpenBB-framework using Python. It explains the use of the PortfolioEngine class and provides examples using the openbb.portfolio.load and openbb.portfolio.metric.commonsense functions.",keywords:["commonsense ratio","PortfolioEngine","openbb.portfolio.load","openbb.portfolio.metric.commonsense"]},sidebar:"tutorialSidebar",previous:{title:"calmar",permalink:"/sdk/reference/portfolio/metric/calmar"},next:{title:"gaintopain",permalink:"/sdk/reference/portfolio/metric/gaintopain"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const o={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{title:"portfolio.metric.commonsense - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(o.p,{children:"Get common sense ratio"}),"\n",(0,t.jsxs)(o.p,{children:["Source Code: [",(0,t.jsx)(o.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1448",children:"link"}),"]"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-python",children:"openbb.portfolio.metric.commonsense(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Name"}),(0,t.jsx)(o.th,{children:"Type"}),(0,t.jsx)(o.th,{children:"Description"}),(0,t.jsx)(o.th,{children:"Default"}),(0,t.jsx)(o.th,{children:"Optional"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"portfolio_engine"}),(0,t.jsx)(o.td,{children:"PortfolioEngine"}),(0,t.jsxs)(o.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,t.jsx)("br",{}),"Use ",(0,t.jsx)(o.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,t.jsx)(o.td,{children:"None"}),(0,t.jsx)(o.td,{children:"False"})]})})]}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Type"}),(0,t.jsx)(o.th,{children:"Description"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"pd.DataFrame"}),(0,t.jsx)(o.td,{children:"DataFrame of the portfolios and the benchmarks common sense ratio during different time periods"})]})})]}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.commonsense(p)\n'})}),"\n",(0,t.jsx)(o.hr,{})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},94331:(e,o,n)=>{n.d(o,{A:()=>i});n(96540);var t=n(5260),r=n(74848);function i(e){let{title:o}=e;return(0,r.jsx)(t.A,{children:(0,r.jsx)("title",{children:o})})}},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>l});var t=n(96540);const r={},i=t.createContext(r);function s(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);