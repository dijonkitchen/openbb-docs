"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97201],{72259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(74848),s=n(28453),i=n(94331);const c={title:"calc",description:"Learn about 'calc', a tool to calculate profit or loss for given option settings for strikes, premium, and selling contracts with default and optional preferences. Include examples and a profit chart for better understanding.",keywords:["calc","profit calculator","option settings","put option","sell option","strike price","premium price","profit chart"]},o=void 0,l={id:"terminal/reference/stocks/options/calc",title:"calc",description:"Learn about 'calc', a tool to calculate profit or loss for given option settings for strikes, premium, and selling contracts with default and optional preferences. Include examples and a profit chart for better understanding.",source:"@site/content/terminal/reference/stocks/options/calc.md",sourceDirName:"terminal/reference/stocks/options",slug:"/terminal/reference/stocks/options/calc",permalink:"/terminal/reference/stocks/options/calc",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/options/calc.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"calc",description:"Learn about 'calc', a tool to calculate profit or loss for given option settings for strikes, premium, and selling contracts with default and optional preferences. Include examples and a profit chart for better understanding.",keywords:["calc","profit calculator","option settings","put option","sell option","strike price","premium price","profit chart"]},sidebar:"tutorialSidebar",previous:{title:"binom",permalink:"/terminal/reference/stocks/options/binom"},next:{title:"chains",permalink:"/terminal/reference/stocks/options/chains"}},a={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"stocks/options/calc - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Calculate profit or loss for given option settings."}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"calc [--put] [--sell] [-s STRIKE] [-p PREMIUM] [-m MIN] [-M MAX]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"put"}),(0,r.jsx)(t.td,{children:"Flag to calculate put option"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sell"}),(0,r.jsx)(t.td,{children:"Flag to get profit chart of selling contract"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"strike"}),(0,r.jsx)(t.td,{children:"Option strike price"}),(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"premium"}),(0,r.jsx)(t.td,{children:"Premium price"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"min"}),(0,r.jsx)(t.td,{children:"Min price to look at"}),(0,r.jsx)(t.td,{children:"-1"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"max"}),(0,r.jsx)(t.td,{children:"Max price to look at"}),(0,r.jsx)(t.td,{children:"-1"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 08:45 (\ud83e\udd8b) /stocks/options/ $ calc -s 30 -p 6 -m 1 -M 50\n\nStrike: $30.0\nPremium: $6.0\nBreakeven price: $36.0\nMax profit: Unlimited\nMax loss: $-600.0\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154277755-a6640bee-8621-4a7d-9fc6-9c197daca0e1.png",alt:"calc"})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);