"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41673],{32677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=n(74848),s=n(28453),o=n(94331);const i={title:"top_coins",description:"This OpenBBTerminal page provides insights on how to get top crypto coins from sources like CoinGecko and CoinMarketCap using the 'openbb.crypto.disc.top_coins' function. Parameters, return types, and usage examples are clearly illustrated.",keywords:["top cryptp coins","CoinGecko","openbb.crypto.disc.top_coins","parameters","returns","examples","CoinMarketCap","limit parameter"]},c=void 0,d={id:"sdk/reference/crypto/disc/top_coins",title:"top_coins",description:"This OpenBBTerminal page provides insights on how to get top crypto coins from sources like CoinGecko and CoinMarketCap using the 'openbb.crypto.disc.top_coins' function. Parameters, return types, and usage examples are clearly illustrated.",source:"@site/content/sdk/reference/crypto/disc/top_coins.md",sourceDirName:"sdk/reference/crypto/disc",slug:"/sdk/reference/crypto/disc/top_coins",permalink:"/sdk/reference/crypto/disc/top_coins",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/crypto/disc/top_coins.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"top_coins",description:"This OpenBBTerminal page provides insights on how to get top crypto coins from sources like CoinGecko and CoinMarketCap using the 'openbb.crypto.disc.top_coins' function. Parameters, return types, and usage examples are clearly illustrated.",keywords:["top cryptp coins","CoinGecko","openbb.crypto.disc.top_coins","parameters","returns","examples","CoinMarketCap","limit parameter"]},sidebar:"tutorialSidebar",previous:{title:"losers",permalink:"/sdk/reference/crypto/disc/losers"},next:{title:"top_dapps",permalink:"/sdk/reference/crypto/disc/top_dapps"}},p={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"crypto.disc.top_coins - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get top cryptp coins."}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/sdk_helpers.py#L11",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.crypto.disc.top_coins(source: str = "CoinGecko", limit: int = 10)\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"source"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:'Source of data, by default "CoinGecko"'}),(0,r.jsx)(t.td,{children:"CoinGecko"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Number of coins to return, by default 10"}),(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"DataFrame with top coins"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\ntop_coins = openbb.crypto.disc.top_coins()\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"To get 30 results from coinmarketcap, use the source parameter and the limit parameter:\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'top_coins = openbb.crypto.disc.top_coins(source="CoinMarketCap", limit=30)\n'})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(5260),s=n(74848);function o(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);