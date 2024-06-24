"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96861],{30344:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=i(74848),n=i(28453),r=i(94331);const o={title:"chains",description:"Detailed guide on how to display option chains with python usage. Documentation includes parameters for call options, put options, strike price, ask size, bid size, volume, open interest and others, along with their default values and options.",keywords:["option chains","parameters","python usage","call options","put options","strike price","ask size","bid size","volume","open interest","delta","gamma","theta","vega","ask iv","bid iv","mid iv"]},a=void 0,d={id:"terminal/reference/stocks/options/chains",title:"chains",description:"Detailed guide on how to display option chains with python usage. Documentation includes parameters for call options, put options, strike price, ask size, bid size, volume, open interest and others, along with their default values and options.",source:"@site/content/terminal/reference/stocks/options/chains.md",sourceDirName:"terminal/reference/stocks/options",slug:"/terminal/reference/stocks/options/chains",permalink:"/terminal/reference/stocks/options/chains",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/chains.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"chains",description:"Detailed guide on how to display option chains with python usage. Documentation includes parameters for call options, put options, strike price, ask size, bid size, volume, open interest and others, along with their default values and options.",keywords:["option chains","parameters","python usage","call options","put options","strike price","ask size","bid size","volume","open interest","delta","gamma","theta","vega","ask iv","bid iv","mid iv"]},sidebar:"tutorialSidebar",previous:{title:"calc",permalink:"/terminal/reference/stocks/options/calc"},next:{title:"exp",permalink:"/terminal/reference/stocks/options/exp"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"stocks/options/chains - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Display option chains"}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"chains [-c] [-p] [-m MIN_SP] [-M MAX_SP] [-d TO_DISPLAY]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calls"}),(0,s.jsx)(t.td,{children:"Flag to show calls only"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"puts"}),(0,s.jsx)(t.td,{children:"Flag to show puts only"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"min_sp"}),(0,s.jsx)(t.td,{children:"minimum strike price to consider."}),(0,s.jsx)(t.td,{children:"-1"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"max_sp"}),(0,s.jsx)(t.td,{children:"maximum strike price to consider."}),(0,s.jsx)(t.td,{children:"-1"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"to_display"}),(0,s.jsx)(t.td,{children:"(tradier only) Columns to look at. Columns can be: bid, ask, strike, bidsize, asksize, volume, open_interest, delta, gamma, theta, vega, ask_iv, bid_iv, mid_iv. E.g. 'bid,ask,strike'"}),(0,s.jsx)(t.td,{children:"mid_iv, vega, delta, gamma, theta, volume, open_interest, bid, ask"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>r});i(96540);var s=i(5260),n=i(74848);function r(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var s=i(96540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);