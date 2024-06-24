"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19041],{26884:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=s(74848),n=s(28453),r=s(94331);const o={title:"Data and Sources",sidebar_position:4,description:"The page discusses the data sources and functionalities of OpenBB, an aggregator of data from various sources. It guides on troubleshooting, locating data, and requesting features.",keywords:["data aggregator","troubleshooting guide","data sources","ticker symbols","load function","feature request","data providers"]},i=void 0,d={id:"terminal/faqs/data_sources",title:"Data and Sources",description:"The page discusses the data sources and functionalities of OpenBB, an aggregator of data from various sources. It guides on troubleshooting, locating data, and requesting features.",source:"@site/content/terminal/faqs/data_sources.md",sourceDirName:"terminal/faqs",slug:"/terminal/faqs/data_sources",permalink:"/terminal/faqs/data_sources",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/faqs/data_sources.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,sidebarPosition:4,frontMatter:{title:"Data and Sources",sidebar_position:4,description:"The page discusses the data sources and functionalities of OpenBB, an aggregator of data from various sources. It guides on troubleshooting, locating data, and requesting features.",keywords:["data aggregator","troubleshooting guide","data sources","ticker symbols","load function","feature request","data providers"]},sidebar:"tutorialSidebar",previous:{title:"General Operation",permalink:"/terminal/faqs/general_operation"},next:{title:"Bugs, Support, and Feedback",permalink:"/terminal/faqs/bugs_support_feedback"}},c={},l=[{value:"Data and Sources",id:"data-and-sources",level:2}];function u(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{title:"Data and Sources - Faqs | OpenBB Terminal Docs"}),"\n",(0,t.jsx)(a.h2,{id:"data-and-sources",children:"Data and Sources"}),"\n",(0,t.jsx)(a.p,{children:"Please note that OpenBB does not provide any data, it is an aggregator which provides users access to data from a variety of sources. OpenBB does not maintain or have any control over the raw data supplied. If there is a specific problem with the output from a data provider, please consider contacting them first."}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"Is there a list of all data providers?"}),(0,t.jsxs)(a.p,{children:["The complete list is found ",(0,t.jsx)(a.a,{href:"/terminal/usage/data/api-keys",children:"here"})]})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"How do I find and load a ticker symbol from India, or any other country?"}),(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.a,{href:"/terminal/menus/stocks/introduction#search",children:(0,t.jsx)(a.code,{children:"/stocks/search"})})," command."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-console",children:"search --country canada --industrygroup banks\n"})}),(0,t.jsx)(a.p,{children:"Ticker symbols listed on exchanges outside of the US will have a suffix attached, for example, Rico Auto Industries Limited:"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-console",children:"load ricoauto.ns\n"})}),(0,t.jsx)(a.p,{children:"The precise naming convention will differ by source, reference each source's own documentation for specific details."})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"Data from today is missing."}),(0,t.jsxs)(a.p,{children:["By default, the load function requests end-of-day daily data and is not included until the EOD summary has been published. The current day's data is considered intraday and is loaded when the ",(0,t.jsx)(a.code,{children:"interval"})," argument is present."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-console",children:"load SPY -i 60\n"})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"Can I stream live prices and news feeds?"}),(0,t.jsx)(a.p,{children:"The OpenBB Terminal is not currently capable of streaming live feeds through websocket connections."})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:'"Pair BTC/USDT not found in binance"'}),(0,t.jsx)(a.p,{children:"US-based users are currently unable to access the Binance API. Please try loading the pair from a different source, for example:"}),(0,t.jsx)(a.p,{children:(0,t.jsx)(a.code,{children:"load btc --source CCXT --exchange kraken"})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:"How can I request functionality for a specific data source?"}),(0,t.jsxs)(a.p,{children:["Please ",(0,t.jsx)(a.a,{href:"https://openbb.co/request-a-feature",children:"request a feature"})," by submitting a new request."]})]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},94331:(e,a,s)=>{s.d(a,{A:()=>r});s(96540);var t=s(5260),n=s(74848);function r(e){let{title:a}=e;return(0,n.jsx)(t.A,{children:(0,n.jsx)("title",{children:a})})}},28453:(e,a,s)=>{s.d(a,{R:()=>o,x:()=>i});var t=s(96540);const n={},r=t.createContext(n);function o(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);