"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28557],{3728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(74848),r=n(28453),s=n(94331);const i={title:"wma",description:"Learn how to use Weighted Moving Average (WMA) for better data analysis. This page provides a guide on how to implement WMA, with more weight on recent data and less on past data. It details the usage, parameters, defaults and offers a visual representation for clearer understanding.",keywords:["Weighted Moving Average","WMA","Simple Moving Average","n_length","n_offset"]},o=void 0,d={id:"terminal/reference/etf/ta/wma",title:"wma",description:"Learn how to use Weighted Moving Average (WMA) for better data analysis. This page provides a guide on how to implement WMA, with more weight on recent data and less on past data. It details the usage, parameters, defaults and offers a visual representation for clearer understanding.",source:"@site/content/terminal/reference/etf/ta/wma.md",sourceDirName:"terminal/reference/etf/ta",slug:"/terminal/reference/etf/ta/wma",permalink:"/terminal/reference/etf/ta/wma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/etf/ta/wma.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"wma",description:"Learn how to use Weighted Moving Average (WMA) for better data analysis. This page provides a guide on how to implement WMA, with more weight on recent data and less on past data. It details the usage, parameters, defaults and offers a visual representation for clearer understanding.",keywords:["Weighted Moving Average","WMA","Simple Moving Average","n_length","n_offset"]},sidebar:"tutorialSidebar",previous:{title:"vwap",permalink:"/terminal/reference/etf/ta/vwap"},next:{title:"zlma",permalink:"/terminal/reference/etf/ta/zlma"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"etf/ta/wma - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsx)(t.p,{children:"A Weighted Moving Average puts more weight on recent data and less on past data. This is done by multiplying each bar\u2019s price by a weighting factor. Because of its unique calculation, WMA will follow prices more closely than a corresponding Simple Moving Average."}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"wma [-l N_LENGTH] [-o N_OFFSET]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_length"}),(0,a.jsx)(t.td,{children:"Window lengths. Multiple values indicated as comma separated values."}),(0,a.jsx)(t.td,{children:"20, 50"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_offset"}),(0,a.jsx)(t.td,{children:"offset"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154312618-43430406-97c1-4740-87be-2414de9a1c06.png",alt:"wma"})}),"\n",(0,a.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(5260),r=n(74848);function s(e){let{title:t}=e;return(0,r.jsx)(a.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);