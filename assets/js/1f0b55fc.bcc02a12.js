"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84347],{27654:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=n(74848),i=n(28453),l=n(94331);const r={title:"Due Diligence",description:"Guide to the Cryptocurrency Due Diligence menu command in the crypto terminal. It offers information about the loaded coin, project details, the token balance, fundraising details and social media activity. Examples of usage, price movements and sentiment scores are provided. The guide provides detailed step-by-step instructions on how to use all the features of the Cryptocurrency Due Diligence command.",keywords:["Cryptocurrency Due Diligence","crypto","load","Coin","coin metrics","trades","coin information","project information","Muir Glacier","Istanbul","sentiment analysis","scores"]},d=void 0,c={id:"terminal/menus/crypto/dd",title:"Due Diligence",description:"Guide to the Cryptocurrency Due Diligence menu command in the crypto terminal. It offers information about the loaded coin, project details, the token balance, fundraising details and social media activity. Examples of usage, price movements and sentiment scores are provided. The guide provides detailed step-by-step instructions on how to use all the features of the Cryptocurrency Due Diligence command.",source:"@site/content/terminal/menus/crypto/dd.md",sourceDirName:"terminal/menus/crypto",slug:"/terminal/menus/crypto/dd",permalink:"/docs/terminal/menus/crypto/dd",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/crypto/dd.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"Due Diligence",description:"Guide to the Cryptocurrency Due Diligence menu command in the crypto terminal. It offers information about the loaded coin, project details, the token balance, fundraising details and social media activity. Examples of usage, price movements and sentiment scores are provided. The guide provides detailed step-by-step instructions on how to use all the features of the Cryptocurrency Due Diligence command.",keywords:["Cryptocurrency Due Diligence","crypto","load","Coin","coin metrics","trades","coin information","project information","Muir Glacier","Istanbul","sentiment analysis","scores"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/terminal/menus/crypto/"},next:{title:"Decentralized Finance (DeFi)",permalink:"/docs/terminal/menus/crypto/defi"}},o={},a=[{value:"Usage",id:"usage",level:2},{value:"PI",id:"pi",level:3},{value:"PS",id:"ps",level:3},{value:"Trades",id:"trades",level:3},{value:"OB",id:"ob",level:3},{value:"Inv",id:"inv",level:3}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{title:"Due Diligence - Crypto - Menus | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"The Due Diligence sub-menu provides a layer of tools for researching a digital asset, from a bottom-up perspective, with functions for tokenomics, community engagement, governance, roadmaps, whitepapers, and more.  The commands are grouped into sections:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Overview"}),"\n",(0,s.jsx)(t.li,{children:"Market"}),"\n",(0,s.jsx)(t.li,{children:"Metrics"}),"\n",(0,s.jsx)(t.li,{children:"Contributors and Investors"}),"\n",(0,s.jsx)(t.li,{children:"Tokenomics"}),"\n",(0,s.jsx)(t.li,{children:"Roadmap and News"}),"\n",(0,s.jsx)(t.li,{children:"Activity and Community"}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Functions in this menu do not rely on the selected ",(0,s.jsx)(t.code,{children:"--source"})," from the ",(0,s.jsx)(t.code,{children:"load"})," command.  The source of data for each command is located on the far-right of the menu item, in square brackets."]})}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["Switch the current asset with the ",(0,s.jsx)(t.code,{children:"load"})," command.  A coin does not have to be loaded before entering the menu."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"load xrp\n"})}),"\n",(0,s.jsx)(t.h3,{id:"pi",children:"PI"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"pi"})," command obtains key project information from Messari."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/crypto/dd/load xrp/pi\n"})}),"\n",(0,s.jsx)(t.p,{children:"In this instance, there are no data points for audits or vulnerabilities."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"Audits not found\n\nVulnerabilities not found\n"})}),"\n",(0,s.jsx)(t.p,{children:"A description of the project and technology is returned in a table:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/5ccc696d-4af6-41f8-9386-b621334f23a6",alt:"project information"})}),"\n",(0,s.jsx)(t.h3,{id:"ps",children:"PS"}),"\n",(0,s.jsxs)(t.p,{children:["Similar to ",(0,s.jsx)(t.code,{children:"pi"}),", ",(0,s.jsx)(t.code,{children:"ps"})," are key statitistics of the asset from Messari."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/crypto/dd/load xrp/ps\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"XRP"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"id"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"xrp-xrp"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"symbol"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"XRP"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"rank"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"circulating_supply"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"53560508378"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"total_supply"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"99988331658"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"max_supply"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"100000000000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"beta_value"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1.018"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"first_data_at"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2013-08-04 00:00:00"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"last_updated"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2023-10-31 02:56:18"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_price"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0.5766098562100087"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_volume_24h"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1270078728.0050828"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_volume_24h_change_24h"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"130.86"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_market_cap"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"30883517034"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_market_cap_change_24h"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"3.76"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_percent_change_15m"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-0.23"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_percent_change_30m"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-0.45"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_percent_change_1h"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-0.63"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_percent_change_6h"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-0.66"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_percent_change_12h"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-0.83"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_percent_change_24h"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"3.76"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_percent_change_7d"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5.21"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_percent_change_30d"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"10.77"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_percent_change_1y"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"26.09"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_ath_price"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"3.84194"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_ath_date"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2018-01-04 07:14:00"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"usd_percent_from_price_ath"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"-84.99"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"trades",children:"Trades"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"trades"})," command requests data via CCXT, pick the venue to see the latest trades."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/2ae64595-d78d-48c4-b12f-75e929d0b6d2",alt:"Screenshot 2023-10-30 at 8 11 05\u202fPM"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/crypto/dd/load xrp/trades kraken\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/1e66e39b-3208-4be3-8e11-89d233de3770",alt:"Screenshot 2023-10-30 at 8 09 34\u202fPM"})}),"\n",(0,s.jsx)(t.h3,{id:"ob",children:"OB"}),"\n",(0,s.jsxs)(t.p,{children:["The order book, ",(0,s.jsx)(t.code,{children:"ob"}),", from the same venue:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/crypto/dd/load xrp/ob kraken\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/28846e0b-e3fa-4828-bc12-493a632c5917",alt:"Screenshot 2023-10-30 at 8 14 02\u202fPM"})}),"\n",(0,s.jsx)(t.h3,{id:"inv",children:"Inv"}),"\n",(0,s.jsxs)(t.p,{children:["The investors function, ",(0,s.jsx)(t.code,{children:"inv"}),", shows who is backing the project."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/crypto/dd/load xrp/inv\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f0eabb1c-334c-44a4-9ef1-72f2c6799be1",alt:"Screenshot 2023-10-30 at 8 20 03\u202fPM"})})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var s=n(5260),i=n(74848);function l(e){let{title:t}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(96540);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);