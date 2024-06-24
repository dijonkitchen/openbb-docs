"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57095],{89129:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=n(74848),r=n(28453),i=n(94331),s=n(69396);const o={title:"Chart from raw data",sidebar_position:1,description:"Learn how to transform raw data into informative charts using OpenBB Terminal Pro. This tool simplifies data visualization, aiding quants and analysts in their investment research.",keywords:["investment research","data visualization","charting tool","quants","analysts"]},d=void 0,l={id:"pro/widgets/tabular-data/chart-from-raw-data",title:"Chart from raw data",description:"Learn how to transform raw data into informative charts using OpenBB Terminal Pro. This tool simplifies data visualization, aiding quants and analysts in their investment research.",source:"@site/content/pro/widgets/tabular-data/chart-from-raw-data.md",sourceDirName:"pro/widgets/tabular-data",slug:"/pro/widgets/tabular-data/chart-from-raw-data",permalink:"/pro/widgets/tabular-data/chart-from-raw-data",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/pro/widgets/tabular-data/chart-from-raw-data.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,sidebarPosition:1,frontMatter:{title:"Chart from raw data",sidebar_position:1,description:"Learn how to transform raw data into informative charts using OpenBB Terminal Pro. This tool simplifies data visualization, aiding quants and analysts in their investment research.",keywords:["investment research","data visualization","charting tool","quants","analysts"]},sidebar:"tutorialSidebar",previous:{title:"Tabular data",permalink:"/pro/widgets/tabular-data/"},next:{title:"Chat with widgets",permalink:"/pro/widgets/chat-with-widget"}},c={},h=[];function p(t){const e={p:"p",...(0,r.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{title:"Chart from raw data | OpenBB Terminal Pro Docs"}),"\n","\n",(0,a.jsx)(s.A,{youtubeLink:"https://www.youtube.com/embed/4jV_FUb5tVU?si=Ic4VNdm8rsbketD1",videoLegend:"Short introduction to chart from raw data"}),"\n",(0,a.jsx)(e.p,{children:"In the world of investment research, data is king. But raw, tabular data can be overwhelming and difficult to interpret. That's where charts come in. They transform complex data sets into visual narratives, making it easier to spot trends, compare variables, and make informed decisions."}),"\n",(0,a.jsx)(e.p,{children:"With OpenBB Terminal Pro, you can create charts directly from your tabular data. Simply select the data you want to visualize, choose your preferred charting style, and let the software do the rest. It's a powerful tool for quants and analysts alike."}),"\n",(0,a.jsx)(e.p,{children:"Here are a few examples to get you started:"}),"\n",(0,a.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"example",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/1f521b0e-28c1-4126-bd13-658262745fc8"}),"\n",(0,a.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"example",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/4829a4a0-5186-40f9-bcee-86e1a373d3c8"}),"\n",(0,a.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"example",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/5f02d6e8-6344-4dc2-8950-b925b5eba04f"})]})}function u(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(p,{...t})}):p(t)}},94331:(t,e,n)=>{n.d(e,{A:()=>i});n(96540);var a=n(5260),r=n(74848);function i(t){let{title:e}=t;return(0,r.jsx)(a.A,{children:(0,r.jsx)("title",{children:e})})}},69396:(t,e,n)=>{n.d(e,{A:()=>s});var a=n(96540),r=n(23174),i=n(74848);function s(t){let{youtubeLink:e,videoLegend:n="Tutorial video"}=t;const[s,o]=(0,a.useState)(!0);return(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,i.jsx)("p",{children:n}),(0,i.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,i.jsx)(r.Toggle,{isOn:s,handleChange:()=>o(!s)})})]}),s&&(0,i.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,i.jsx)("iframe",{id:e,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:e,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(t,e,n)=>{t.exports=n(49793)},49793:(t,e,n)=>{var a,r=(a=n(96540))&&"object"==typeof a&&"default"in a?a.default:a;!function(t,e){void 0===e&&(e={});var n=e.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),e.Toggle=function(t){return r.createElement("label",{"data-testid":"Toggle-label",className:"switch"},r.createElement("input",{checked:t.isOn,"data-testid":"Toggle",onChange:t.handleChange,type:"checkbox"}),r.createElement("span",{className:"slider round"}))}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>o});var a=n(96540);const r={},i=a.createContext(r);function s(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);