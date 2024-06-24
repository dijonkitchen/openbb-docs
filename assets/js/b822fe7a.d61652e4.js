"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[270],{67470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var o=n(74848),r=n(28453),i=n(94331);const l={title:"kelly",description:"This page provides information on how to use the 'kelly' function from the OpenBB portfolio management library. With detailed parameter explanations to calculate the kelly criterion and examples of usage, it is a valuable reference for portfolio management within the OpenBB environment.",keywords:["kelly criterion","portfolio management","openbb.portfolio.metric.kelly","portfolio engine","portfolio load"]},s=void 0,a={id:"sdk/reference/portfolio/metric/kelly",title:"kelly",description:"This page provides information on how to use the 'kelly' function from the OpenBB portfolio management library. With detailed parameter explanations to calculate the kelly criterion and examples of usage, it is a valuable reference for portfolio management within the OpenBB environment.",source:"@site/content/sdk/reference/portfolio/metric/kelly.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/kelly",permalink:"/sdk/reference/portfolio/metric/kelly",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/metric/kelly.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"kelly",description:"This page provides information on how to use the 'kelly' function from the OpenBB portfolio management library. With detailed parameter explanations to calculate the kelly criterion and examples of usage, it is a valuable reference for portfolio management within the OpenBB environment.",keywords:["kelly criterion","portfolio management","openbb.portfolio.metric.kelly","portfolio engine","portfolio load"]},sidebar:"tutorialSidebar",previous:{title:"jensens",permalink:"/sdk/reference/portfolio/metric/jensens"},next:{title:"kurtosis",permalink:"/sdk/reference/portfolio/metric/kurtosis"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{title:"portfolio.metric.kelly - Reference | OpenBB SDK Docs"}),"\n",(0,o.jsx)(t.p,{children:"Get kelly criterion"}),"\n",(0,o.jsxs)(t.p,{children:["Source Code: [",(0,o.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1561",children:"link"}),"]"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.metric.kelly(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Default"}),(0,o.jsx)(t.th,{children:"Optional"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"portfolio_engine"}),(0,o.jsx)(t.td,{children:"PortfolioEngine"}),(0,o.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,o.jsx)("br",{}),"Use ",(0,o.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,o.jsx)(t.td,{children:"None"}),(0,o.jsx)(t.td,{children:"False"})]})})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"pd.DataFrame"}),(0,o.jsx)(t.td,{children:"DataFrame of kelly criterion of the portfolio during different time periods"})]})})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.kelly(p)\n'})}),"\n",(0,o.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var o=n(5260),r=n(74848);function i(e){let{title:t}=e;return(0,r.jsx)(o.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var o=n(96540);const r={},i=o.createContext(r);function l(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);