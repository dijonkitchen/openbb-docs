"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85912],{78309:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(74848),o=n(28453),s=n(94331);const i={title:"perf",description:"This page is a guide on how to get a portfolio's performance vs the benchmark with the OpenBB Terminal's perf function. It includes function usage, parameters explanation, return values, and examples.",keywords:["portfolio performance","benchmark","portfolio engine","openbb portfolio perf","performance calculations","trades performance","portfolio load"]},l=void 0,a={id:"sdk/reference/portfolio/perf",title:"perf",description:"This page is a guide on how to get a portfolio's performance vs the benchmark with the OpenBB Terminal's perf function. It includes function usage, parameters explanation, return values, and examples.",source:"@site/content/sdk/reference/portfolio/perf.md",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/perf",permalink:"/openbb-docs/sdk/reference/portfolio/perf",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/perf.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"perf",description:"This page is a guide on how to get a portfolio's performance vs the benchmark with the OpenBB Terminal's perf function. It includes function usage, parameters explanation, return values, and examples.",keywords:["portfolio performance","benchmark","portfolio engine","openbb portfolio perf","performance calculations","trades performance","portfolio load"]},sidebar:"tutorialSidebar",previous:{title:"om",permalink:"/openbb-docs/sdk/reference/portfolio/om"},next:{title:"blacklitterman",permalink:"/openbb-docs/sdk/reference/portfolio/po/blacklitterman"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.A,{title:"portfolio.perf - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(r.p,{children:"Get portfolio performance vs the benchmark"}),"\n",(0,t.jsxs)(r.p,{children:["Source Code: [",(0,t.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1640",children:"link"}),"]"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"openbb.portfolio.perf(portfolio_engine: portfolio_engine.PortfolioEngine, show_all_trades: bool = False)\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Optional"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"portfolio_engine"}),(0,t.jsx)(r.td,{children:"PortfolioEngine"}),(0,t.jsxs)(r.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,t.jsx)("br",{}),"Use ",(0,t.jsx)(r.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,t.jsx)(r.td,{children:"None"}),(0,t.jsx)(r.td,{children:"False"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"show_all_trades"}),(0,t.jsx)(r.td,{children:"bool"}),(0,t.jsx)(r.td,{children:"Whether to also show all trades made and their performance (default is False)"}),(0,t.jsx)(r.td,{children:"False"}),(0,t.jsx)(r.td,{children:"True"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pd.DataFrame"}),(0,t.jsx)(r.td,{children:"DataFrame with portfolio performance vs the benchmark"})]})})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.perf(p)\n'})}),"\n",(0,t.jsx)(r.hr,{})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},94331:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(5260),o=n(74848);function s(e){let{title:r}=e;return(0,o.jsx)(t.A,{children:(0,o.jsx)("title",{children:r})})}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var t=n(96540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);