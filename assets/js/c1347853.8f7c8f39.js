"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52079],{19317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=n(74848),r=n(28453),o=n(94331),a=n(69396);const s={title:"Chat with widgets",sidebar_position:2,description:"Learn about OpenBB Terminal Pro innovative feature, the Chat Widget. This generative AI tool enhances efficiency and productivity in investment research by offering direct data interaction.",keywords:["Chat Widget","generative AI","investment research tools","data interaction","efficiency","productivity"]},d=void 0,c={id:"pro/widgets/chat-with-widget",title:"Chat with widgets",description:"Learn about OpenBB Terminal Pro innovative feature, the Chat Widget. This generative AI tool enhances efficiency and productivity in investment research by offering direct data interaction.",source:"@site/content/pro/widgets/chat-with-widget.md",sourceDirName:"pro/widgets",slug:"/pro/widgets/chat-with-widget",permalink:"/pro/widgets/chat-with-widget",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/pro/widgets/chat-with-widget.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1724671384e3,sidebarPosition:2,frontMatter:{title:"Chat with widgets",sidebar_position:2,description:"Learn about OpenBB Terminal Pro innovative feature, the Chat Widget. This generative AI tool enhances efficiency and productivity in investment research by offering direct data interaction.",keywords:["Chat Widget","generative AI","investment research tools","data interaction","efficiency","productivity"]},sidebar:"tutorialSidebar",previous:{title:"Chart from raw data",permalink:"/pro/widgets/tabular-data/chart-from-raw-data"},next:{title:"Data providers",permalink:"/pro/widgets/data-provider"}},l={},h=[];function p(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{title:"Chat with widgets | OpenBB Terminal Pro Docs"}),"\n","\n",(0,i.jsx)(a.A,{youtubeLink:"https://www.youtube.com/embed/fkC_CMeT1Es?si=Zk5bC96lJKO988CQ",videoLegend:"Short introduction to chatting with widgets"}),"\n",(0,i.jsx)(t.p,{children:"Experience the power of our unique generative AI feature, the Chat Widget. This tool empowers you to interact directly with your data, asking questions to gain deeper insights."}),"\n",(0,i.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"chat w widget",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/9952e040-b8e4-413e-a8bf-be61087ba469"}),"\n",(0,i.jsx)(t.p,{children:"Imagine asking the widget to summarize its contents, or to explain how the data it presents could impact your investment positions in related tickers. The possibilities are endless."}),"\n",(0,i.jsx)(t.p,{children:"This innovative feature, a first in the realm of investment research tools, is designed to enhance your efficiency and productivity, potentially boosting your performance by up to 10x."}),"\n",(0,i.jsx)("img",{className:"pro-border-gradient",width:"1232",alt:"275683456-51bf5ace-906e-4319-84a0-19f3a495e6ad",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/d10e1587-998a-4e93-949b-59c070e82423"})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var i=n(5260),r=n(74848);function o(e){let{title:t}=e;return(0,r.jsx)(i.A,{children:(0,r.jsx)("title",{children:t})})}},69396:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(96540),r=n(23174),o=n(74848);function a(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[a,s]=(0,i.useState)(!0);return(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,o.jsx)("p",{children:n}),(0,o.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,o.jsx)(r.Toggle,{isOn:a,handleChange:()=>s(!a)})})]}),a&&(0,o.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,o.jsx)("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,t,n)=>{e.exports=n(49793)},49793:(e,t,n)=>{var i,r=(i=n(96540))&&"object"==typeof i&&"default"in i?i.default:i;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return r.createElement("label",{"data-testid":"Toggle-label",className:"switch"},r.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),r.createElement("span",{className:"slider round"}))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);