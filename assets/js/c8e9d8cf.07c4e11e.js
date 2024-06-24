"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96539],{73303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=n(74848),i=n(28453),r=n(94331);const a={title:"infer",description:"The documentation guide on 'infer', a tool used for quick sentiment inference from latest tweets that contain the ticker using vader sentiment analysis. It provides parameters to set the tweet limit and also includes examples of usage",keywords:["infer","vader sentiment analysis","Twitter","tweets","sentiment inference","stock","limit"]},o=void 0,c={id:"terminal/reference/stocks/ba/infer",title:"infer",description:"The documentation guide on 'infer', a tool used for quick sentiment inference from latest tweets that contain the ticker using vader sentiment analysis. It provides parameters to set the tweet limit and also includes examples of usage",source:"@site/content/terminal/reference/stocks/ba/infer.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/infer",permalink:"/terminal/reference/stocks/ba/infer",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/ba/infer.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"infer",description:"The documentation guide on 'infer', a tool used for quick sentiment inference from latest tweets that contain the ticker using vader sentiment analysis. It provides parameters to set the tweet limit and also includes examples of usage",keywords:["infer","vader sentiment analysis","Twitter","tweets","sentiment inference","stock","limit"]},sidebar:"tutorialSidebar",previous:{title:"headlines",permalink:"/terminal/reference/stocks/ba/headlines"},next:{title:"interest",permalink:"/terminal/reference/stocks/ba/interest"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"stocks/ba/infer - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Print quick sentiment inference from last tweets that contain the ticker. This model splits the text into character-level tokens and uses vader sentiment analysis. [Source: Twitter]"}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"infer [-l LIMIT]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"limit of latest tweets to infer from."}),(0,s.jsx)(t.td,{children:"100"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"2022 Feb 19, 13:05 (\ud83e\udd8b) /stocks/ba/ $ infer\nFrom: 2022-02-19 17:08:20\nTo:   2022-02-19 18:04:18\n100 tweets were analyzed.\nFrequency of approx 1 tweet every 34 seconds.\nThe summed compound sentiment of AAPL is: 13.2\nThe average compound sentiment of AAPL is: 0.13\nOf the last 100 tweets, 45.00 % had a higher positive sentiment\nOf the last 100 tweets, 18.00 % had a higher negative sentiment\n"})}),"\n",(0,s.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(5260),i=n(74848);function r(e){let{title:t}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);