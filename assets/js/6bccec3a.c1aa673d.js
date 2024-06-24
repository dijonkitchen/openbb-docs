"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22037],{27912:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var n=o(74848),s=o(28453),a=o(94331);const d={title:"commands add",description:"This documentation page provides in-depth insight on how to use the 'add' command in the context of autoposting with OpenBB bot. It gives details of usage, parameters and even provides a few illustrative examples.",keywords:["OpenBB bot","autopost commands","autoposting","commands add","usage parameters","automated notifications"]},r=void 0,i={id:"bot/reference/discord/autopost/add",title:"commands add",description:"This documentation page provides in-depth insight on how to use the 'add' command in the context of autoposting with OpenBB bot. It gives details of usage, parameters and even provides a few illustrative examples.",source:"@site/content/bot/reference/discord/autopost/add.md",sourceDirName:"bot/reference/discord/autopost",slug:"/bot/reference/discord/autopost/add",permalink:"/bot/reference/discord/autopost/add",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/autopost/add.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"commands add",description:"This documentation page provides in-depth insight on how to use the 'add' command in the context of autoposting with OpenBB bot. It gives details of usage, parameters and even provides a few illustrative examples.",keywords:["OpenBB bot","autopost commands","autoposting","commands add","usage parameters","automated notifications"]},sidebar:"tutorialSidebar",previous:{title:"autopost",permalink:"/bot/reference/discord/autopost/"},next:{title:"list",permalink:"/bot/reference/discord/autopost/list"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(t){const e={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"autopost: commands add - Discord Reference | OpenBB Bot Docs"}),"\n",(0,n.jsx)(e.p,{children:'This command allows the user to add an autopost command to a channel. It allows the user to receive notifications from OpenBB bot in the channel without having to manually query them. This can be used for all commands that appear in the list when you run "autopost commands add"'}),"\n",(0,n.jsx)(e.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",metastring:"wordwrap",children:"/autopost commands add cmd interval [start_time] [stop_time]\n"})}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Name"}),(0,n.jsx)(e.th,{children:"Description"}),(0,n.jsx)(e.th,{children:"Optional"}),(0,n.jsx)(e.th,{children:"Choices"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"cmd"}),(0,n.jsx)(e.td,{children:"Pick the command you want to assign for autoposting"}),(0,n.jsx)(e.td,{children:"False"}),(0,n.jsx)(e.td,{children:"List of commands that allow auto posting"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"interval"}),(0,n.jsx)(e.td,{children:"How oftern to post the autopost command"}),(0,n.jsx)(e.td,{children:"False"}),(0,n.jsx)(e.td,{children:"5m, 15m, 30m, 1hr, 2hr, 4hr, 6hr"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"start_time"}),(0,n.jsx)(e.td,{children:"Time to start the autopost command - ex. If I want to start at 8am I do 8"}),(0,n.jsx)(e.td,{children:"True"}),(0,n.jsx)(e.td,{children:"24hr time"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"stop_time"}),(0,n.jsx)(e.td,{children:"Time to stop the autopost command - ex. If I want to stop at 6pm I do 18"}),(0,n.jsx)(e.td,{children:"True"}),(0,n.jsx)(e.td,{children:"24hr time"})]})]})]}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"/autopost commands add cmd:/cm interval:1 Hour\n"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"/autopost commands add cmd: /cm interval: 1 Hour start_time: 9 stop_time: 10\n"})})]})}function m(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},94331:(t,e,o)=>{o.d(e,{A:()=>a});o(96540);var n=o(5260),s=o(74848);function a(t){let{title:e}=t;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:e})})}},28453:(t,e,o)=>{o.d(e,{R:()=>d,x:()=>r});var n=o(96540);const s={},a=n.createContext(s);function d(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:d(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);