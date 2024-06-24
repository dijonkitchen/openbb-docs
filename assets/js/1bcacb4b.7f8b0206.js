"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47243],{27925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(74848),s=r(28453),o=r(94331);const i={title:"stoch",description:"Learn how to use the Stochastic Oscillator, a tool for measuring where the close is in relation to the recent trading range. Input values range from zero to 100, and interpret the output for buy and sell signals",keywords:["Stochastic Oscillator","overbought condition","oversold condition","buy signal","sell signal","Fast %D and Slow %D","Raw %K","moving average","trading range","stoch usage","stoch parameters"]},a=void 0,l={id:"terminal/reference/etf/ta/stoch",title:"stoch",description:"Learn how to use the Stochastic Oscillator, a tool for measuring where the close is in relation to the recent trading range. Input values range from zero to 100, and interpret the output for buy and sell signals",source:"@site/content/terminal/reference/etf/ta/stoch.md",sourceDirName:"terminal/reference/etf/ta",slug:"/terminal/reference/etf/ta/stoch",permalink:"/terminal/reference/etf/ta/stoch",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/etf/ta/stoch.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"stoch",description:"Learn how to use the Stochastic Oscillator, a tool for measuring where the close is in relation to the recent trading range. Input values range from zero to 100, and interpret the output for buy and sell signals",keywords:["Stochastic Oscillator","overbought condition","oversold condition","buy signal","sell signal","Fast %D and Slow %D","Raw %K","moving average","trading range","stoch usage","stoch parameters"]},sidebar:"tutorialSidebar",previous:{title:"sma",permalink:"/terminal/reference/etf/ta/sma"},next:{title:"vwap",permalink:"/terminal/reference/etf/ta/vwap"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"etf/ta/stoch - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"The Stochastic Oscillator measures where the close is in relation to the recent trading range. The values range from zero to 100. %D values over 75 indicate an overbought condition; values under 25 indicate an oversold condition. When the Fast %D crosses above the Slow %D, it is a buy signal; when it crosses below, it is a sell signal. The Raw %K is generally considered too erratic to use for crossover signals."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"stoch [-k N_FASTKPERIOD] [-d N_SLOWDPERIOD] [--slowkperiod N_SLOWKPERIOD]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_fastkperiod"}),(0,n.jsx)(t.td,{children:"The time period of the fastk moving average"}),(0,n.jsx)(t.td,{children:"14"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_slowdperiod"}),(0,n.jsx)(t.td,{children:"The time period of the slowd moving average"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_slowkperiod"}),(0,n.jsx)(t.td,{children:"The time period of the slowk moving average"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154311913-d58e58bb-d116-44dd-ae4b-44e59c25f22a.png",alt:"stoch"})}),"\n",(0,n.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(5260),s=r(74848);function o(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(96540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);