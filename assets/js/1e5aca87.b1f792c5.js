"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2224],{23265:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=s(74848),n=s(28453),r=s(94331);const a={title:"plot",description:"Plot documentation page provides information on how to show a plot for the given x and y variables, with variables being last trade date, strike, last price, bid, ask, percentage change, volume, open interest, implied volatility and more. It also shows usage examples and available customizations.",keywords:["plot","show plot","trade date","strike","last price","bid","ask","change","percent change","volume","open interest","implied volatility","stocks","options","graph","custom graphs","smile"]},o=void 0,l={id:"terminal/reference/stocks/options/plot",title:"plot",description:"Plot documentation page provides information on how to show a plot for the given x and y variables, with variables being last trade date, strike, last price, bid, ask, percentage change, volume, open interest, implied volatility and more. It also shows usage examples and available customizations.",source:"@site/content/terminal/reference/stocks/options/plot.md",sourceDirName:"terminal/reference/stocks/options",slug:"/terminal/reference/stocks/options/plot",permalink:"/terminal/reference/stocks/options/plot",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/plot.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"plot",description:"Plot documentation page provides information on how to show a plot for the given x and y variables, with variables being last trade date, strike, last price, bid, ask, percentage change, volume, open interest, implied volatility and more. It also shows usage examples and available customizations.",keywords:["plot","show plot","trade date","strike","last price","bid","ask","change","percent change","volume","open interest","implied volatility","stocks","options","graph","custom graphs","smile"]},sidebar:"tutorialSidebar",previous:{title:"pcr",permalink:"/terminal/reference/stocks/options/pcr"},next:{title:"add",permalink:"/terminal/reference/stocks/options/pricing/add"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"stocks/options/plot - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(t.p,{children:"Shows a plot for the given x and y variables"}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"plot [-p] [-x {ltd,s,lp,b,a,c,pc,v,oi,iv}] [-y {ltd,s,lp,b,a,c,pc,v,oi,iv}] [-c {smile}]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"put"}),(0,i.jsx)(t.td,{children:"Shows puts instead of calls"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"x"}),(0,i.jsx)(t.td,{children:"ltd- last trade date, s- strike, lp- last price, b- bid, a- ask,c- change, pc- percent change, v- volume, oi- open interest, iv- implied volatility"}),(0,i.jsx)(t.td,{children:"s"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"ltd, s, lp, b, a, c, pc, v, oi, iv"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"y"}),(0,i.jsx)(t.td,{children:"ltd- last trade date, s- strike, lp- last price, b- bid, a- ask,c- change, pc- percent change, v- volume, oi- open interest, iv- implied volatility"}),(0,i.jsx)(t.td,{children:"iv"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"ltd, s, lp, b, a, c, pc, v, oi, iv"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"custom"}),(0,i.jsx)(t.td,{children:"Choose from already created graphs"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"smile"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 09:37 (\ud83e\udd8b) /stocks/options/ $ plot -p -x s -y iv\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154287325-97de8945-a44c-418d-9e88-5123ee70469f.png",alt:"plot"})}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var i=s(5260),n=s(74848);function r(e){let{title:t}=e;return(0,n.jsx)(i.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var i=s(96540);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);