"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6603],{35465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=t(74848),i=t(28453),o=t(94331);const s={title:"macd",description:"This page describes the Moving Average Convergence Divergence (MACD) tool used for trend changes in market conditions. It explains the concept, usage and different parameters. Information about how these parameters influence and indicate the onset of new trend direction, overbought or oversold conditions is also provided.",keywords:["MACD","Moving Average Convergence Divergence","Exponential Moving Averages","trend changes","overbought conditions","oversold conditions","Divergence","buy signal","sell signal"]},a=void 0,d={id:"terminal/reference/forex/ta/macd",title:"macd",description:"This page describes the Moving Average Convergence Divergence (MACD) tool used for trend changes in market conditions. It explains the concept, usage and different parameters. Information about how these parameters influence and indicate the onset of new trend direction, overbought or oversold conditions is also provided.",source:"@site/content/terminal/reference/forex/ta/macd.md",sourceDirName:"terminal/reference/forex/ta",slug:"/terminal/reference/forex/ta/macd",permalink:"/terminal/reference/forex/ta/macd",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/ta/macd.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"macd",description:"This page describes the Moving Average Convergence Divergence (MACD) tool used for trend changes in market conditions. It explains the concept, usage and different parameters. Information about how these parameters influence and indicate the onset of new trend direction, overbought or oversold conditions is also provided.",keywords:["MACD","Moving Average Convergence Divergence","Exponential Moving Averages","trend changes","overbought conditions","oversold conditions","Divergence","buy signal","sell signal"]},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/terminal/reference/forex/ta/load"},next:{title:"obv",permalink:"/terminal/reference/forex/ta/obv"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"forex/ta/macd - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(n.p,{children:"The Moving Average Convergence Divergence (MACD) is the difference between two Exponential Moving Averages. The Signal line is an Exponential Moving Average of the MACD. The MACD signals trend changes and indicates the start of new trend direction. High values indicate overbought conditions, low values indicate oversold conditions. Divergence with the price indicates an end to the current trend, especially if the MACD is at extreme high or low values. When the MACD line crosses above the signal line a buy signal is generated. When the MACD crosses below the signal line a sell signal is generated. To confirm the signal, the MACD should be above zero for a buy, and below zero for a sell."}),"\n",(0,r.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"macd [--fast N_FAST] [--slow N_SLOW] [--signal N_SIGNAL]\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Choices"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"n_fast"}),(0,r.jsx)(n.td,{children:"The short period."}),(0,r.jsx)(n.td,{children:"12"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"None"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"n_slow"}),(0,r.jsx)(n.td,{children:"The long period."}),(0,r.jsx)(n.td,{children:"26"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"None"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"n_signal"}),(0,r.jsx)(n.td,{children:"The signal period."}),(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/46355364/154311220-d18eb93e-76b3-4abb-b9c6-86484f462c55.png",alt:"macd"})}),"\n",(0,r.jsx)(n.hr,{})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(5260),i=t(74848);function o(e){let{title:n}=e;return(0,i.jsx)(r.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);