"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52083],{74533:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=o(74848),n=o(28453),s=o(94331);const l={title:"load",description:"Docusaurus documentation for the load function from the openbb portfolio module. Provides details about parameters and examples of how to use this function to create a PortfolioEngine instance and perform portfolio calculations.",keywords:["PortfolioEngine object","openbb portfolio","transactions file path","benchmark symbol","full shares","risk free rate","portfolio calculations","openbb_terminal sdk","Portfolio management"]},i=void 0,a={id:"sdk/reference/portfolio/load",title:"load",description:"Docusaurus documentation for the load function from the openbb portfolio module. Provides details about parameters and examples of how to use this function to create a PortfolioEngine instance and perform portfolio calculations.",source:"@site/content/sdk/reference/portfolio/load.md",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/load",permalink:"/sdk/reference/portfolio/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/load.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"load",description:"Docusaurus documentation for the load function from the openbb portfolio module. Provides details about parameters and examples of how to use this function to create a PortfolioEngine instance and perform portfolio calculations.",keywords:["PortfolioEngine object","openbb portfolio","transactions file path","benchmark symbol","full shares","risk free rate","portfolio calculations","openbb_terminal sdk","Portfolio management"]},sidebar:"tutorialSidebar",previous:{title:"holdv",permalink:"/sdk/reference/portfolio/holdv"},next:{title:"maxdd",permalink:"/sdk/reference/portfolio/maxdd"}},d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"portfolio.load - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get PortfolioEngine object"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L27",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.portfolio.load(transactions_file_path: str, benchmark_symbol: str = "SPY", full_shares: bool = False, risk_free_rate: float = 0)\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"transactions_file_path"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Path to transactions file"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"benchmark_symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Benchmark ticker to download data"}),(0,r.jsx)(t.td,{children:"SPY"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"full_shares"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsxs)(t.td,{children:["Whether to mimic the portfolio trades exactly (partial shares) or round down the",(0,r.jsx)("br",{}),"quantity to the nearest number"]}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"risk_free_rate"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Risk free rate in float format"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PortfolioEngine"}),(0,r.jsx)(t.td,{children:"PortfolioEngine class instance, this will hold transactions and perform calculations"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\n'})}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,o)=>{o.d(t,{A:()=>s});o(96540);var r=o(5260),n=o(74848);function s(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>i});var r=o(96540);const n={},s=r.createContext(n);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);