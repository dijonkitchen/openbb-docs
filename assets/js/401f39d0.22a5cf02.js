"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28758],{74339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(74848),s=t(28453),a=t(94331);const i={title:"bbands",description:"A comprehensive guide to understanding and using Bollinger Bands for optimizing trading strategies. Learn about overbought and oversold conditions, price targets, and the intuitive 'bbands' command for Python.",keywords:["Bollinger Bands","overbought conditions","oversold conditions","support level","resistance level","price target","bbands command","technical analysis","trading strategy","Bollinger Bands parameters"]},d=void 0,o={id:"terminal/reference/stocks/ta/bbands",title:"bbands",description:"A comprehensive guide to understanding and using Bollinger Bands for optimizing trading strategies. Learn about overbought and oversold conditions, price targets, and the intuitive 'bbands' command for Python.",source:"@site/content/terminal/reference/stocks/ta/bbands.md",sourceDirName:"terminal/reference/stocks/ta",slug:"/terminal/reference/stocks/ta/bbands",permalink:"/docs/terminal/reference/stocks/ta/bbands",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ta/bbands.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"bbands",description:"A comprehensive guide to understanding and using Bollinger Bands for optimizing trading strategies. Learn about overbought and oversold conditions, price targets, and the intuitive 'bbands' command for Python.",keywords:["Bollinger Bands","overbought conditions","oversold conditions","support level","resistance level","price target","bbands command","technical analysis","trading strategy","Bollinger Bands parameters"]},sidebar:"tutorialSidebar",previous:{title:"atr",permalink:"/docs/terminal/reference/stocks/ta/atr"},next:{title:"cci",permalink:"/docs/terminal/reference/stocks/ta/cci"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"stocks/ta/bbands - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(n.p,{children:"Bollinger Bands consist of three lines. The middle band is a simple moving average (generally 20 periods) of the typical price (TP). The upper and lower bands are F standard deviations (generally 2) above and below the middle band. The bands widen and narrow when the volatility of the price is higher or lower, respectively. Bollinger Bands do not, in themselves, generate buy or sell signals; they are an indicator of overbought or oversold conditions. When the price is near the upper or lower band it indicates that a reversal may be imminent. The middle band becomes a support or resistance level. The upper and lower bands can also be interpreted as price targets. When the price bounces off of the lower band and crosses the middle band, then the upper band becomes the price target."}),"\n",(0,r.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"bbands [-l N_LENGTH] [-s N_STD] [-m {ema,sma,wma,hma,zlma}]\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"}),(0,r.jsx)(n.th,{children:"Choices"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"n_length"}),(0,r.jsx)(n.td,{children:"length"}),(0,r.jsx)(n.td,{children:"15"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"None"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"n_std"}),(0,r.jsx)(n.td,{children:"std"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"None"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"s_mamode"}),(0,r.jsx)(n.td,{children:"mamode"}),(0,r.jsx)(n.td,{children:"sma"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"ema, sma, wma, hma, zlma"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://user-images.githubusercontent.com/46355364/154309951-116f3c31-342d-4ceb-b489-8b0ba78eb3a0.png",alt:"bbands"})}),"\n",(0,r.jsx)(n.hr,{})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(5260),s=t(74848);function a(e){let{title:n}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);