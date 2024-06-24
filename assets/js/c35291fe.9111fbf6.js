"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51621],{14862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=t(74848),s=t(28453),a=t(94331);const i={title:"earnings",description:"This site provides an extensive guide to retrieving earnings data of any stock ticker using the OpenBB Terminal. The page includes detailed parameters descriptions and practical examples.",keywords:["earnings data","stock ticker","AlphaVantage","YahooFinance","quarterly data"]},d=void 0,c={id:"sdk/reference/stocks/fa/earnings",title:"earnings",description:"This site provides an extensive guide to retrieving earnings data of any stock ticker using the OpenBB Terminal. The page includes detailed parameters descriptions and practical examples.",source:"@site/content/sdk/reference/stocks/fa/earnings.md",sourceDirName:"sdk/reference/stocks/fa",slug:"/sdk/reference/stocks/fa/earnings",permalink:"/sdk/reference/stocks/fa/earnings",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/fa/earnings.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"earnings",description:"This site provides an extensive guide to retrieving earnings data of any stock ticker using the OpenBB Terminal. The page includes detailed parameters descriptions and practical examples.",keywords:["earnings data","stock ticker","AlphaVantage","YahooFinance","quarterly data"]},sidebar:"tutorialSidebar",previous:{title:"dupont",permalink:"/sdk/reference/stocks/fa/dupont"},next:{title:"enterprise",permalink:"/sdk/reference/stocks/fa/enterprise"}},l={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"stocks.fa.earnings - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"Get earnings data."}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/sdk_helpers.py#L203",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'openbb.stocks.fa.earnings(symbol: str, source: str = "YahooFinance", quarterly: bool = False)\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"symbol"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"Stock ticker"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"source"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:'Source to use, by default "AlphaVantage"'}),(0,r.jsx)(n.td,{children:"YahooFinance"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"quarterly"}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:"Flag to get quarterly data (AlphaVantage only), by default False."}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"Dataframe of earnings"})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\naapl_earnings = openbb.stocks.fa.earnings("AAPL", source ="YahooFinance)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"To obtain quarterly earnings, use the quarterly flag with AlphaVantage\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'aapl_earnings = openbb.stocks.fa.metrics("earnings", source ="AlphaVantage, quarterly=True)\n'})}),"\n",(0,r.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(5260),s=t(74848);function a(e){let{title:n}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);