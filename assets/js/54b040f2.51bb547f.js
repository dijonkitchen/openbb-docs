"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37574],{61670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var r=n(74848),a=n(28453),s=n(94331);const d={title:"candle",description:"This documentation is for the 'candle' function that shows historical data for an ETF. It explains how to use the function with key parameters to sort data, display raw information, setup moving average in days, etc.",keywords:["candle function","ETF historical data","interactive plotly chart","sort data","display raw data","moving average","market trends","high and low trends"]},i=void 0,o={id:"terminal/reference/etf/candle",title:"candle",description:"This documentation is for the 'candle' function that shows historical data for an ETF. It explains how to use the function with key parameters to sort data, display raw information, setup moving average in days, etc.",source:"@site/content/terminal/reference/etf/candle.md",sourceDirName:"terminal/reference/etf",slug:"/terminal/reference/etf/candle",permalink:"/terminal/reference/etf/candle",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/etf/candle.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"candle",description:"This documentation is for the 'candle' function that shows historical data for an ETF. It explains how to use the function with key parameters to sort data, display raw information, setup moving average in days, etc.",keywords:["candle function","ETF historical data","interactive plotly chart","sort data","display raw data","moving average","market trends","high and low trends"]},sidebar:"tutorialSidebar",previous:{title:"etf",permalink:"/terminal/reference/etf/"},next:{title:"compare",permalink:"/terminal/reference/etf/compare"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"etf/candle - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Shows historic data for an ETF"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"candle [-p] [--sort {adjclose,open,close,high,low,volume,returns,logret}] [-r] [--raw] [-n NUM] [-t] [--ma MOV_AVG]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"plotly"}),(0,r.jsx)(t.td,{children:"Flag to show interactive plotly chart."}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sort"}),(0,r.jsx)(t.td,{children:"Choose a column to sort by"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"adjclose, open, close, high, low, volume, returns, logret"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"reverse"}),(0,r.jsx)(t.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"raw"}),(0,r.jsx)(t.td,{children:"Shows raw data instead of chart"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"num"}),(0,r.jsx)(t.td,{children:"Number to show if raw selected"}),(0,r.jsx)(t.td,{children:"20"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"trendlines"}),(0,r.jsx)(t.td,{children:"Flag to add high and low trends to candle."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mov_avg"}),(0,r.jsx)(t.td,{children:"Add moving average in number of days to plot and separate by a comma. Value for ma (moving average) keyword needs to be greater than 1."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154031063-090a4419-c3b1-4707-8f8e-b41c872a783a.png",alt:"candle"})}),"\n",(0,r.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),a=n(74848);function s(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);