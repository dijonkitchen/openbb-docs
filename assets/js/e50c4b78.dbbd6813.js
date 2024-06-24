"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60141],{79917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=n(74848),a=n(28453),r=n(94331);const l={title:"balance",description:"This page provides detailed information for retrieving balance sheet data via the OpenBBTerminal's Python function. This includes the parameters and return type of the function, as well as examples of its use for different data sources specifically for the stock symbol 'AAPL'.",keywords:["balance sheet","financial data","YahooFinance","AlphaVantage","stock symbol","AAPL"]},i=void 0,c={id:"sdk/reference/stocks/fa/balance",title:"balance",description:"This page provides detailed information for retrieving balance sheet data via the OpenBBTerminal's Python function. This includes the parameters and return type of the function, as well as examples of its use for different data sources specifically for the stock symbol 'AAPL'.",source:"@site/content/sdk/reference/stocks/fa/balance.md",sourceDirName:"sdk/reference/stocks/fa",slug:"/sdk/reference/stocks/fa/balance",permalink:"/sdk/reference/stocks/fa/balance",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/fa/balance.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"balance",description:"This page provides detailed information for retrieving balance sheet data via the OpenBBTerminal's Python function. This includes the parameters and return type of the function, as well as examples of its use for different data sources specifically for the stock symbol 'AAPL'.",keywords:["balance sheet","financial data","YahooFinance","AlphaVantage","stock symbol","AAPL"]},sidebar:"tutorialSidebar",previous:{title:"analysis",permalink:"/sdk/reference/stocks/fa/analysis"},next:{title:"cal",permalink:"/sdk/reference/stocks/fa/cal"}},d={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"stocks.fa.balance - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(t.p,{children:"Get balance sheet."}),"\n",(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/sdk_helpers.py#L77",children:"link"}),"]"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'openbb.stocks.fa.balance(symbol: str, quarterly: bool = False, ratios: bool = False, source: str = "YahooFinance", limit: int = 10)\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol to get balance sheet for"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"source"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:'Data source for balance sheet, by default "YahooFinance"'}),(0,s.jsx)(t.td,{children:"YahooFinance"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"quarterly"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Flag to get quarterly data"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ratios"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Flag to return data as a percent change."}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of statements to return (free tiers may be limited to 5 years)"}),(0,s.jsx)(t.td,{children:"10"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pd.DataFrame"}),(0,s.jsx)(t.td,{children:"Dataframe of balance sheet"})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nbalance_sheet = openbb.stocks.fa.balance("AAPL", source="YahooFinance)\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"If you have a premium AlphaVantage key, you can use the quarterly flag to get quarterly statements\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'quarterly_income_statement = openbb.stocks.fa.balance("AAPL", source="AlphaVantage", quarterly=True)\n'})}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(5260),a=n(74848);function r(e){let{title:t}=e;return(0,a.jsx)(s.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var s=n(96540);const a={},r=s.createContext(a);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);