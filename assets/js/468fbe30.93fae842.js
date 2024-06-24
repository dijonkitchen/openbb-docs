"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25125],{37586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(74848),o=n(28453),i=n(94331);const r={title:"chains",description:"This page provides comprehensive instructions on how to get option chain for a stock using openbb.stocks.options API. It provides examples including how to retrieve data from 'Nasdaq' and fetch specific expiration dates.",keywords:["stock options","option chain","openbb.stocks.options.api","Nasdaq","expiration dates","stock market API"]},c=void 0,a={id:"sdk/reference/stocks/options/chains",title:"chains",description:"This page provides comprehensive instructions on how to get option chain for a stock using openbb.stocks.options API. It provides examples including how to retrieve data from 'Nasdaq' and fetch specific expiration dates.",source:"@site/content/sdk/reference/stocks/options/chains.md",sourceDirName:"sdk/reference/stocks/options",slug:"/sdk/reference/stocks/options/chains",permalink:"/sdk/reference/stocks/options/chains",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/options/chains.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"chains",description:"This page provides comprehensive instructions on how to get option chain for a stock using openbb.stocks.options API. It provides examples including how to retrieve data from 'Nasdaq' and fetch specific expiration dates.",keywords:["stock options","option chain","openbb.stocks.options.api","Nasdaq","expiration dates","stock market API"]},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/sdk/reference/stocks/load"},next:{title:"dte",permalink:"/sdk/reference/stocks/options/dte"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"stocks.options.chains - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(t.p,{children:"Get Option Chain For A Stock.  No greek data is returned"}),"\n",(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/options_sdk_helper.py#L20",children:"link"}),"]"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'openbb.stocks.options.chains(symbol: str, source: str = "Nasdaq", expiration: Optional[str] = None)\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol to get chain for"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"source"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:'Source to get data from, by default "Nasdaq"'}),(0,s.jsx)(t.td,{children:"Nasdaq"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"expiration"}),(0,s.jsx)(t.td,{children:"Union[str, None]"}),(0,s.jsx)(t.td,{children:"Date to get chain for.  By default returns all dates"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pd.DataFrame"}),(0,s.jsx)(t.td,{children:"Dataframe of full option chain."})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\naapl_option_chain = openbb.stocks.options.chains("AAPL", source = "Nasdaq")\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"To get a specific expiration date, use the expiration parameter\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'aapl_chain_date = openbb.stocks.options.chains("AAPL", expiration="2023-07-21", source="Nasdaq")\n'})}),"\n",(0,s.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(5260),o=n(74848);function i(e){let{title:t}=e;return(0,o.jsx)(s.A,{children:(0,o.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);