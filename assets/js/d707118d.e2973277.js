"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36293],{26986:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(74848),i=t(28453),r=t(94331);const a={title:"gaintopain",description:"On this page, learn how to use the gaintopain function from the openbb.portfolio.metric package to compute a portfolio's gain-to-pain ratio based on historical data. Examples and source code are provided.",keywords:["openbb.portfolio.metric.gaintopain function","portfolio's gain-to-pain ratio","PortfolioEngine class","compute gain-to-pain ratio"]},s=void 0,l={id:"sdk/reference/portfolio/metric/gaintopain",title:"gaintopain",description:"On this page, learn how to use the gaintopain function from the openbb.portfolio.metric package to compute a portfolio's gain-to-pain ratio based on historical data. Examples and source code are provided.",source:"@site/content/sdk/reference/portfolio/metric/gaintopain.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/gaintopain",permalink:"/sdk/reference/portfolio/metric/gaintopain",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/metric/gaintopain.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"gaintopain",description:"On this page, learn how to use the gaintopain function from the openbb.portfolio.metric package to compute a portfolio's gain-to-pain ratio based on historical data. Examples and source code are provided.",keywords:["openbb.portfolio.metric.gaintopain function","portfolio's gain-to-pain ratio","PortfolioEngine class","compute gain-to-pain ratio"]},sidebar:"tutorialSidebar",previous:{title:"commonsense",permalink:"/sdk/reference/portfolio/metric/commonsense"},next:{title:"information",permalink:"/sdk/reference/portfolio/metric/information"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{title:"portfolio.metric.gaintopain - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(o.p,{children:"Get Pain-to-Gain ratio based on historical data"}),"\n",(0,n.jsxs)(o.p,{children:["Source Code: [",(0,n.jsx)(o.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1313",children:"link"}),"]"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"openbb.portfolio.metric.gaintopain(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Name"}),(0,n.jsx)(o.th,{children:"Type"}),(0,n.jsx)(o.th,{children:"Description"}),(0,n.jsx)(o.th,{children:"Default"}),(0,n.jsx)(o.th,{children:"Optional"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"portfolio_engine"}),(0,n.jsx)(o.td,{children:"PortfolioEngine"}),(0,n.jsxs)(o.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(o.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,n.jsx)(o.td,{children:"None"}),(0,n.jsx)(o.td,{children:"False"})]})})]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Type"}),(0,n.jsx)(o.th,{children:"Description"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"pd.DataFrame"}),(0,n.jsx)(o.td,{children:"DataFrame of the portfolio's gain-to-pain ratio"})]})})]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.gaintopain(p)\n'})}),"\n",(0,n.jsx)(o.hr,{})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},94331:(e,o,t)=>{t.d(o,{A:()=>r});t(96540);var n=t(5260),i=t(74848);function r(e){let{title:o}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:o})})}},28453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>s});var n=t(96540);const i={},r=n.createContext(i);function a(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);