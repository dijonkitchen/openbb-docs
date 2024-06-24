"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51792],{29007:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=n(74848),i=n(28453),a=n(77968),o=n(94331);const s={title:"Introduction",sidebar_position:0,description:"The OpenBB Platform CLI is a command line interface wrapping the OpenBB Platform. It offers a convenient way to interact with the Platform and its extensions, as well as automate data collection via OpenBB Routine Scripts. No experience with Python, or other programming languages, is required.",keywords:["OpenBB","CLI","Platform","data connectors","data access","data processing","third-party data providers","introduction"]},l=void 0,c={id:"cli/index",title:"Introduction",description:"The OpenBB Platform CLI is a command line interface wrapping the OpenBB Platform. It offers a convenient way to interact with the Platform and its extensions, as well as automate data collection via OpenBB Routine Scripts. No experience with Python, or other programming languages, is required.",source:"@site/content/cli/index.md",sourceDirName:"cli",slug:"/cli/",permalink:"/docs/cli/",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/cli/index.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0,description:"The OpenBB Platform CLI is a command line interface wrapping the OpenBB Platform. It offers a convenient way to interact with the Platform and its extensions, as well as automate data collection via OpenBB Routine Scripts. No experience with Python, or other programming languages, is required.",keywords:["OpenBB","CLI","Platform","data connectors","data access","data processing","third-party data providers","introduction"]},sidebar:"tutorialSidebar",previous:{title:"Licensing",permalink:"/docs/platform/licensing/"},next:{title:"Installation",permalink:"/docs/cli/installation"}},d={},h=[{value:"Overview",id:"overview",level:2},{value:"Guides &amp; Documentation",id:"guides--documentation",level:2}];function p(t){const e={a:"a",h2:"h2",hr:"hr",img:"img",p:"p",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"OpenBB Platform CLI Docs"}),"\n",(0,r.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(e.p,{children:"The OpenBB Platform CLI is a command line interface wrapping the OpenBB Platform. It offers a convenient way to interact with the Platform and its extensions, as well as automate data collection via OpenBB Routine Scripts."}),"\n",(0,r.jsxs)(e.p,{children:["The CLI is the next iteration of the ",(0,r.jsx)(e.a,{href:"/terminal",children:"OpenBB Terminal"}),", and leverages the extendability of the OpenBB Platform architecture in an easy-to-consume and script format."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/d1617c3b-c83d-4491-a7bc-986321fd7230",alt:"CLI Home"})}),"\n",(0,r.jsx)(e.h2,{id:"guides--documentation",children:"Guides & Documentation"}),"\n",(0,r.jsxs)("ul",{className:"grid grid-cols-1 gap-4 -ml-6",children:[(0,r.jsx)(a.A,{title:"Installation",description:"An installation guide for the OpenBB Platform CLI.",url:"cli/installation"}),(0,r.jsx)(a.A,{title:"Quick Start",description:"A quick start guide for the OpenBB Platform CLI.",url:"cli/quickstart"}),(0,r.jsx)(a.A,{title:"Configuration & Settings",description:"An explanation of the settings and environment variables that customize the look and feel of the OpenBB Platform CLI.",url:"cli/configuration"}),(0,r.jsx)(a.A,{title:"Hub Synchronization",description:"An overview of the `/account` menu and synchronizing settings with the OpenBB Hub.",url:"cli/hub"}),(0,r.jsx)(a.A,{title:"Data Sources",description:"How-to switch providers for a command, and define the default source for a function.",url:"cli/data-sources"}),(0,r.jsx)(a.A,{title:"OpenBBUserData Folder",description:"The OpenBBUserData folder is where exports, routines, and other related files are saved.",url:"cli/openbbuserdata"}),(0,r.jsx)(a.A,{title:"Interactive Tables",description:"Understand how to sort, filter, hide columns, display more rows or export data on our tables.",url:"cli/interactive-tables"}),(0,r.jsx)(a.A,{title:"Interactive Charts",description:"Explore how to overlay charts, change titles, draw lines, add text and much more on our charts.",url:"cli/interactive-charts"})]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:["Want to contribute? Check out our ",(0,r.jsx)(e.a,{href:"/platform/development",children:"Development section"}),"."]})]})}function u(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(p,{...t})}):p(t)}},94331:(t,e,n)=>{n.d(e,{A:()=>a});n(96540);var r=n(5260),i=n(74848);function a(t){let{title:e}=t;return(0,i.jsx)(r.A,{children:(0,i.jsx)("title",{children:e})})}},77968:(t,e,n)=>{n.d(e,{A:()=>l});var r=n(28774),i=n(34164),a=(n(96540),n(56347)),o=n(51820),s=n(74848);function l(t){let{title:e,url:n,description:l,command:c}=t;const{pathname:d}=(0,a.zy)(),h=d.replace(/\/v\d+/,""),p=!h.includes("/reference")&&!h.includes("/widgets-library/")&&!h.includes("/data_models");return(0,s.jsxs)(r.A,{className:(0,i.A)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":h.startsWith("/terminal")||h.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":h.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":h.startsWith("/sdk")||h.startsWith("/cli")||h.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":h.startsWith("/excel"),header_docs:!(h.startsWith("/terminal")||h.startsWith("/pro")||h.startsWith("/excel")||h.startsWith("/sdk")||h.startsWith("/platform")||h.startsWith("/bot")||h.startsWith("/cli"))}),to:n,children:[(0,s.jsx)("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)("p",{className:"py-2 font-bold text-lg my-0",children:[e,""]}),p&&(0,s.jsx)(o.A,{className:"ml-auto mr-4"})]}),l?(0,s.jsx)("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0",children:l}):null]})}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>s});var r=n(96540);const i={},a=r.createContext(i);function o(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);