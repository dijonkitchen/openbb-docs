"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35310],{11043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=t(74848),i=t(28453),r=t(94331);const s={title:"ema",description:"A guide to understanding and using the Exponential Moving Average, a fundamental tool in technical analysis with a focus on its application.",keywords:["Exponential Moving Average","technical analysis","moving average","EMA","cumulative calculation","data responsiveness","EMA use","EMA parameters"]},o=void 0,l={id:"terminal/reference/forex/ta/ema",title:"ema",description:"A guide to understanding and using the Exponential Moving Average, a fundamental tool in technical analysis with a focus on its application.",source:"@site/content/terminal/reference/forex/ta/ema.md",sourceDirName:"terminal/reference/forex/ta",slug:"/terminal/reference/forex/ta/ema",permalink:"/terminal/reference/forex/ta/ema",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/forex/ta/ema.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"ema",description:"A guide to understanding and using the Exponential Moving Average, a fundamental tool in technical analysis with a focus on its application.",keywords:["Exponential Moving Average","technical analysis","moving average","EMA","cumulative calculation","data responsiveness","EMA use","EMA parameters"]},sidebar:"tutorialSidebar",previous:{title:"donchian",permalink:"/terminal/reference/forex/ta/donchian"},next:{title:"fib",permalink:"/terminal/reference/forex/ta/fib"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{title:"forex/ta/ema - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsx)(n.p,{children:"The Exponential Moving Average is a staple of technical analysis and is used in countless technical indicators. In a Simple Moving Average, each value in the time period carries equal weight, and values outside of the time period are not included in the average. However, the Exponential Moving Average is a cumulative calculation, including all data. Past values have a diminishing contribution to the average, while more recent values have a greater contribution. This method allows the moving average to be more responsive to changes in the data."}),"\n",(0,a.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"ema [-l N_LENGTH] [-o N_OFFSET]\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Optional"}),(0,a.jsx)(n.th,{children:"Choices"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"n_length"}),(0,a.jsx)(n.td,{children:"Window lengths. Multiple values indicated as comma separated values."}),(0,a.jsx)(n.td,{children:"20, 50"}),(0,a.jsx)(n.td,{children:"True"}),(0,a.jsx)(n.td,{children:"None"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"n_offset"}),(0,a.jsx)(n.td,{children:"offset"}),(0,a.jsx)(n.td,{children:"0"}),(0,a.jsx)(n.td,{children:"True"}),(0,a.jsx)(n.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://user-images.githubusercontent.com/46355364/154310578-6f4a51a8-3667-497c-9c50-7ff16e256fb6.png",alt:"ema"})}),"\n",(0,a.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var a=t(5260),i=t(74848);function r(e){let{title:n}=e;return(0,i.jsx)(a.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);