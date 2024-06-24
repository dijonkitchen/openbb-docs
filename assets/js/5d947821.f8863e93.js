"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2637],{63547:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=o(74848),n=o(28453),a=o(94331);const s={title:"plot",description:"Learn how to plot data on two y-axes using the plot command in our tools. The command allows you to plot different time series in one graph with data from the macro, fred, index, and treasury commands. Our guide also provides examples of usage and parameters to customize your plots.",keywords:["plot data","two y-axes","macro","fred","index","treasury commands","time series","graph","variables"]},i=void 0,d={id:"terminal/reference/economy/plot",title:"plot",description:"Learn how to plot data on two y-axes using the plot command in our tools. The command allows you to plot different time series in one graph with data from the macro, fred, index, and treasury commands. Our guide also provides examples of usage and parameters to customize your plots.",source:"@site/content/terminal/reference/economy/plot.md",sourceDirName:"terminal/reference/economy",slug:"/terminal/reference/economy/plot",permalink:"/docs/terminal/reference/economy/plot",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/economy/plot.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"plot",description:"Learn how to plot data on two y-axes using the plot command in our tools. The command allows you to plot different time series in one graph with data from the macro, fred, index, and treasury commands. Our guide also provides examples of usage and parameters to customize your plots.",keywords:["plot data","two y-axes","macro","fred","index","treasury commands","time series","graph","variables"]},sidebar:"tutorialSidebar",previous:{title:"performance",permalink:"/docs/terminal/reference/economy/performance"},next:{title:"acf",permalink:"/docs/terminal/reference/economy/qa/acf"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function m(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"economy /plot - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"This command can plot any data on two y-axes obtained from the macro, fred, index and treasury commands. To be able to use this data, just load the available series from the previous commands. For example 'macro -p GDP -c Germany Netherlands' will store the data for usage in this command. Therefore, it allows you to plot different time series in one graph. The example above could be plotted the following way: 'plot --y1 Germany_GDP --y2 Netherlands_GDP' or 'plot --y1 Germany_GDP Netherlands_GDP'"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"plot [--y1 YAXIS1] [--y2 YAXIS2]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"yaxis1"}),(0,r.jsx)(t.td,{children:"Select the data you wish to plot on the first y-axis. You can select multiple variables here."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"yaxis2"}),(0,r.jsx)(t.td,{children:"Select the data you wish to plot on the second y-axis. You can select multiple variables here."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/158633367-783d54eb-79ab-443f-af99-8a9ecadf5949.png",alt:"Figure_1"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/158633394-d948d909-d39b-4b05-9c5b-2e30b202cc32.png",alt:"Figure_2"})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},94331:(e,t,o)=>{o.d(t,{A:()=>a});o(96540);var r=o(5260),n=o(74848);function a(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var r=o(96540);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);