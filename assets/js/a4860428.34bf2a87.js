"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73924],{54239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(74848),i=r(28453),s=r(94331);const o={title:"sumexp",description:"A documentation descriptor for the command 'sumexp', a function which allows users to obtain total premium of a specified stock ticker in the current trading day by expiration. Users can distinguish calls and puts depending on where the trade happened on the bid/ask.",keywords:["sumexp","trading","stock ticker","option trading","trade on bid/ask","premium retrieval","expiration date"]},d=void 0,a={id:"bot/reference/discord/flow/sumexp",title:"sumexp",description:"A documentation descriptor for the command 'sumexp', a function which allows users to obtain total premium of a specified stock ticker in the current trading day by expiration. Users can distinguish calls and puts depending on where the trade happened on the bid/ask.",source:"@site/content/bot/reference/discord/flow/sumexp.md",sourceDirName:"bot/reference/discord/flow",slug:"/bot/reference/discord/flow/sumexp",permalink:"/bot/reference/discord/flow/sumexp",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/discord/flow/sumexp.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"sumexp",description:"A documentation descriptor for the command 'sumexp', a function which allows users to obtain total premium of a specified stock ticker in the current trading day by expiration. Users can distinguish calls and puts depending on where the trade happened on the bid/ask.",keywords:["sumexp","trading","stock ticker","option trading","trade on bid/ask","premium retrieval","expiration date"]},sidebar:"tutorialSidebar",previous:{title:"sumday",permalink:"/bot/reference/discord/flow/sumday"},next:{title:"summary",permalink:"/bot/reference/discord/flow/summary"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"flow: sumexp - Discord Reference | OpenBB Bot Docs"}),"\n",(0,n.jsx)(t.p,{children:"This command allows the user to retrieve the total premium of the given stock ticker for the current trading day by expiration. We categorize the calls and puts by where the trade occurred on the bid/ask. For example, Above Ask, means the trade happened over the current Ask price."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/flow sumexp ticker expiry\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"Stock Ticker"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expiry"}),(0,n.jsx)(t.td,{children:"Expiration Date"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"/flow sumexp ticker:AMD expiry:2022-07-29\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),i=r(74848);function s(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>d});var n=r(96540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);