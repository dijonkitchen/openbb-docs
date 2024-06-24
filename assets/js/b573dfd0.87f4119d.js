"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72744],{42140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var i=n(74848),o=n(28453),r=n(94331),s=n(69396);const a={title:"Grouping Mechanism",sidebar_position:1,description:"Learn about the powerful grouping mechanism in OpenBB Terminal Pro. Understand how widgets can be grouped based on equity categories and tickers, and also how the watchlist widget's unique grouping property works.",keywords:["Grouping","Widgets","Ticker","Symbol","Dashboard","Watchlist","Relationship"]},d=void 0,l={id:"pro/dashboards/grouping",title:"Grouping Mechanism",description:"Learn about the powerful grouping mechanism in OpenBB Terminal Pro. Understand how widgets can be grouped based on equity categories and tickers, and also how the watchlist widget's unique grouping property works.",source:"@site/content/pro/dashboards/grouping.md",sourceDirName:"pro/dashboards",slug:"/pro/dashboards/grouping",permalink:"/pro/dashboards/grouping",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/pro/dashboards/grouping.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,sidebarPosition:1,frontMatter:{title:"Grouping Mechanism",sidebar_position:1,description:"Learn about the powerful grouping mechanism in OpenBB Terminal Pro. Understand how widgets can be grouped based on equity categories and tickers, and also how the watchlist widget's unique grouping property works.",keywords:["Grouping","Widgets","Ticker","Symbol","Dashboard","Watchlist","Relationship"]},sidebar:"tutorialSidebar",previous:{title:"Dashboards",permalink:"/pro/dashboards/"},next:{title:"Templates",permalink:"/pro/dashboards/templates"}},c={},h=[{value:"Watchlist and grouping",id:"watchlist-and-grouping",level:3}];function p(e){const t={h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"Grouping | OpenBB Terminal Pro Docs"}),"\n","\n",(0,i.jsx)(s.A,{youtubeLink:"https://www.youtube.com/embed/cOH8qjOBWTI?si=I_NLm7UP4vgNBjo4",videoLegend:"Short introduction to grouping"}),"\n",(0,i.jsx)(t.p,{children:"The grouping mechanism is extremely powerful as it allows widgets to be grouped together through one of their parameters based on the category they belong to."}),"\n",(0,i.jsx)(t.p,{children:"For instance, for the equity category, widgets can be connected through their ticker / symbol. Examples are: AAPL to simbolize Apple, TSLA for Tesla and so on."}),"\n",(0,i.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"grouping",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/f0cbeb52-c7cd-4e03-9eba-5ef35e1665b6"}),"\n",(0,i.jsx)(t.p,{children:"This is an example of 3 widgets that belong to the same group, note the dark yellow 1 on the top right."}),"\n",(0,i.jsx)(t.p,{children:"In addition, when clicking on the grouping icon you can see that they are grouped around the MSFT ticker."}),"\n",(0,i.jsx)(t.p,{children:"This means that if a user changes the ticker on any of these widgets, the remaining ones will get updated accordingly."}),"\n",(0,i.jsx)(t.p,{children:"Also note that the grouping is visible on the sidebar, immediately under the dashboard naming."}),"\n",(0,i.jsx)(t.p,{children:"A trick that you can use to group up widgets together faster is using the SHIFT while clicking on each widget, once creating a group in one of them - the grouping will replicate throughout selected widgets."}),"\n",(0,i.jsx)(t.h3,{id:"watchlist-and-grouping",children:"Watchlist and grouping"}),"\n",(0,i.jsx)(t.p,{children:"The watchlist widget has a special property in relation to grouping. Since this widget doesn't have a single symbol but many, users can select the row of their ticker of interest, and widgets that are grouped with the watchlist will get updated accordingly."}),"\n",(0,i.jsx)("img",{className:"pro-border-gradient",width:"800",alt:"watchlist",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/d36380df-743a-4676-bec4-6bd34567e661"}),"\n",(0,i.jsx)(t.p,{children:"If a user selects a new ticker in another widget that is grouped with the watchlist, that ticker will be added to the watchlist and will become the one selected by default."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(5260),o=n(74848);function r(e){let{title:t}=e;return(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:t})})}},69396:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(96540),o=n(23174),r=n(74848);function s(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[s,a]=(0,i.useState)(!0);return(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,r.jsx)("p",{children:n}),(0,r.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,r.jsx)(o.Toggle,{isOn:s,handleChange:()=>a(!s)})})]}),s&&(0,r.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,r.jsx)("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,t,n)=>{e.exports=n(49793)},49793:(e,t,n)=>{var i,o=(i=n(96540))&&"object"==typeof i&&"default"in i?i.default:i;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return o.createElement("label",{"data-testid":"Toggle-label",className:"switch"},o.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),o.createElement("span",{className:"slider round"}))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);