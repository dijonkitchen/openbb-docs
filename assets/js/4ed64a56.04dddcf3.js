"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17708],{62434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(74848),s=n(28453),r=n(94331);const i={title:"eval",description:"This page provides information about the 'eval' function for creating custom data columns using mathematical expressions supported by pandas.eval(). It exemplifies case sensitivity and the use of queries on loaded datasets.",keywords:["eval function","custom data column","pandas.eval","mathematical expressions","datasets","case sensitive","query","DGS2","DGS5"]},o=void 0,c={id:"terminal/reference/economy/eval",title:"eval",description:"This page provides information about the 'eval' function for creating custom data columns using mathematical expressions supported by pandas.eval(). It exemplifies case sensitivity and the use of queries on loaded datasets.",source:"@site/content/terminal/reference/economy/eval.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/eval",permalink:"/terminal/reference/economy/eval",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/economy/eval.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"eval",description:"This page provides information about the 'eval' function for creating custom data columns using mathematical expressions supported by pandas.eval(). It exemplifies case sensitivity and the use of queries on loaded datasets.",keywords:["eval function","custom data column","pandas.eval","mathematical expressions","datasets","case sensitive","query","DGS2","DGS5"]},sidebar:"tutorialSidebar",previous:{title:"edebt",permalink:"/terminal/reference/economy/edebt"},next:{title:"events",permalink:"/terminal/reference/economy/events"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function m(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{title:"economy /eval - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsxs)(t.p,{children:["Create custom data column from loaded datasets. Can be mathematical expressions supported by pandas.eval() function. Example. If I have loaded ",(0,a.jsx)(t.code,{children:"fred DGS2,DGS5"})," and I want to create a new column that is the difference between these two, I can create a new column by doing ",(0,a.jsx)(t.code,{children:"eval spread = DGS2 - DGS5"}),". Notice that the command is case sensitive, i.e., ",(0,a.jsx)(t.code,{children:"DGS2"})," is not the same as ",(0,a.jsx)(t.code,{children:"dgs2"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"eval [-q QUERY [QUERY ...]]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"query"}),(0,a.jsx)(t.td,{children:"Query to evaluate on loaded datasets"}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"None"})]})})]}),"\n",(0,a.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(5260),s=n(74848);function r(e){let{title:t}=e;return(0,s.jsx)(a.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);