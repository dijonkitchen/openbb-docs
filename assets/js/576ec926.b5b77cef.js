"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31380],{56269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var n=r(74848),i=r(28453),a=r(94331);const d={title:"chart",description:"This documentation page provides detailed information about the Chart command in our tool. The command retrieves a candlestick chart based on the provided ticker and time interval, displaying vital trading data such as opening/closing prices and volume for the specified number of previous days.",keywords:["Chart Command","Candlestick Chart","Stock Ticker","Time Interval","Opening and Closing Prices","Trading Volume","Past Days Display"]},s=void 0,c={id:"bot/reference/telegram/charts/chart",title:"chart",description:"This documentation page provides detailed information about the Chart command in our tool. The command retrieves a candlestick chart based on the provided ticker and time interval, displaying vital trading data such as opening/closing prices and volume for the specified number of previous days.",source:"@site/content/bot/reference/telegram/charts/chart.md",sourceDirName:"bot/reference/telegram/charts",slug:"/bot/reference/telegram/charts/chart",permalink:"/bot/reference/telegram/charts/chart",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/telegram/charts/chart.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"chart",description:"This documentation page provides detailed information about the Chart command in our tool. The command retrieves a candlestick chart based on the provided ticker and time interval, displaying vital trading data such as opening/closing prices and volume for the specified number of previous days.",keywords:["Chart Command","Candlestick Chart","Stock Ticker","Time Interval","Opening and Closing Prices","Trading Volume","Past Days Display"]},sidebar:"tutorialSidebar",previous:{title:"cd",permalink:"/bot/reference/telegram/charts/cd"},next:{title:"chartfib",permalink:"/bot/reference/telegram/charts/chartfib"}},o={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"charts: chart - Telegram Reference | OpenBB Bot Docs"}),"\n",(0,n.jsx)(t.p,{children:"This command will retrieve a candlestick chart for the ticker/interval provided, with data for the past number of days specified. The interval provided must be a valid time interval (e.g. 5 minute, 15 minute, etc.). The chart will be displayed to the user and will contain information such as the opening and closing prices, the high and low, the volume, and any other relevant information."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/chart ticker interval [past_days]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"Stock Ticker"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"1m"}),", ",(0,n.jsx)(t.code,{children:"5m"}),", ",(0,n.jsx)(t.code,{children:"10m"}),", ",(0,n.jsx)(t.code,{children:"15m"}),", ",(0,n.jsx)(t.code,{children:"30m"}),", ",(0,n.jsx)(t.code,{children:"60m"}),", ",(0,n.jsx)(t.code,{children:"1d"}),", ",(0,n.jsx)(t.code,{children:"1wk"}),", ",(0,n.jsx)(t.code,{children:"1mo"})," Default: ",(0,n.jsx)(t.code,{children:"15m"})]}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"1d, 1wk, 1mo, 1m, 5m, 10m, 15m, 30m, 1hr"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"past_days"}),(0,n.jsx)(t.td,{children:"Past Days to Display. Default: 0"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"/chart AMD 1d 10\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"/chart AMD 1d\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),i=r(74848);function a(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>s});var n=r(96540);const i={},a=n.createContext(i);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);