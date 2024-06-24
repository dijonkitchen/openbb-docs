"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93955],{16046:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=o(74848),r=o(28453),i=o(94331);const s={title:"bench",description:"This page discusses the 'bench' function, part of the OpenBB Terminal, which allows users to load benchmarks into their portfolio. It provides details on the parameters, method of application, and examples utilizing Python for portfolio management.",keywords:["portfolio benchmark","portfolio management","portfolio load","financial data","portfolio operations"]},l=void 0,a={id:"sdk/reference/portfolio/bench",title:"bench",description:"This page discusses the 'bench' function, part of the OpenBB Terminal, which allows users to load benchmarks into their portfolio. It provides details on the parameters, method of application, and examples utilizing Python for portfolio management.",source:"@site/content/sdk/reference/portfolio/bench.md",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/bench",permalink:"/sdk/reference/portfolio/bench",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/bench.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"bench",description:"This page discusses the 'bench' function, part of the OpenBB Terminal, which allows users to load benchmarks into their portfolio. It provides details on the parameters, method of application, and examples utilizing Python for portfolio management.",keywords:["portfolio benchmark","portfolio management","portfolio load","financial data","portfolio operations"]},sidebar:"tutorialSidebar",previous:{title:"sectors",permalink:"/sdk/reference/portfolio/alloc/sectors"},next:{title:"distr",permalink:"/sdk/reference/portfolio/distr"}},d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"portfolio.bench - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Load benchmark into portfolio"}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L93",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.bench(portfolio_engine: portfolio_engine.PortfolioEngine, symbol: str, full_shares: bool = False)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio_engine"}),(0,n.jsx)(t.td,{children:"PortfolioEngine"}),(0,n.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Benchmark symbol to download data"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"full_shares"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsxs)(t.td,{children:["Whether to mimic the portfolio trades exactly (partial shares) or round down the",(0,n.jsx)("br",{}),"quantity to the nearest number"]}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"This function does not return anything"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.bench(p, symbol="SPY")\n'})}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,o)=>{o.d(t,{A:()=>i});o(96540);var n=o(5260),r=o(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>l});var n=o(96540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);