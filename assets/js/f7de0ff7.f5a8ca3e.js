"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1112],{43583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var r=n(74848),o=n(28453),i=n(94331),s=n(69396);const a={title:"Routine Macro Recorder",sidebar_position:4,description:"Learn how to use the macro recorder in OpenBB to start saving commands and automate common tasks with scripts. This page guides you through the process of recording, saving, and accessing your recorded routines.",keywords:["macro recorder","script routines","global commands","Excel's VBA methods","command recording","routine script","terminal main menu","exe --file","OpenBBUserData","routines folder"]},c=void 0,d={id:"terminal/usage/routines/routine-macro-recorder",title:"Routine Macro Recorder",description:"Learn how to use the macro recorder in OpenBB to start saving commands and automate common tasks with scripts. This page guides you through the process of recording, saving, and accessing your recorded routines.",source:"@site/content/terminal/usage/routines/routine-macro-recorder.md",sourceDirName:"terminal/usage/routines",slug:"/terminal/usage/routines/routine-macro-recorder",permalink:"/terminal/usage/routines/routine-macro-recorder",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/routines/routine-macro-recorder.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,sidebarPosition:4,frontMatter:{title:"Routine Macro Recorder",sidebar_position:4,description:"Learn how to use the macro recorder in OpenBB to start saving commands and automate common tasks with scripts. This page guides you through the process of recording, saving, and accessing your recorded routines.",keywords:["macro recorder","script routines","global commands","Excel's VBA methods","command recording","routine script","terminal main menu","exe --file","OpenBBUserData","routines folder"]},sidebar:"tutorialSidebar",previous:{title:"Overlay Financial Data",permalink:"/terminal/usage/routines/overlay-financial-data"},next:{title:"Routines for Power Users",permalink:"/terminal/usage/routines/routines-for-power-users"}},l={},u=[];function h(e){const t={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"Routine Macro Recorder - Routines - Usage | OpenBB Terminal Docs"}),"\n","\n",(0,r.jsx)(s.A,{youtubeLink:"https://www.youtube.com/embed/o53onlk7tPw?si=VPBKE_V3U1WNH-QO",videoLegend:"Short video on recording commands to create routine"}),"\n",(0,r.jsxs)(t.p,{children:["OpenBB script routines can be captured with the macro recorder, controlled with global commands, ",(0,r.jsx)(t.code,{children:"record"})," to start saving commands and ",(0,r.jsx)(t.code,{children:"stop"})," to terminate the recording. This shares similarities with that of Excel's VBA methods. This means that any command you run will be automatically recorded for the routine script and once you type ",(0,r.jsx)(t.code,{children:"stop"})," it automatically saves the file to the ",(0,r.jsx)(t.code,{children:"~/OpenBBUserData/routines/"})," folder."]}),"\n",(0,r.jsx)(t.p,{children:"For example, if you copy and paste the following prompt in the OpenBB Terminal and press enter, you will see an example."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"/record/economy/cpi/treasury/index sp500/stop\n"})}),"\n",(0,r.jsx)(t.p,{children:"The following shows the output from this pipeline of commands."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/223204998-70d9e5da-f84e-4c22-90c4-576dcf87c1df.png",alt:"Routines"})}),"\n",(0,r.jsxs)(t.p,{children:["Because there was a ",(0,r.jsx)(t.code,{children:"record"})," and ",(0,r.jsx)(t.code,{children:"stop"})," at the ",(0,r.jsx)(t.code,{children:"start"})," and ",(0,r.jsx)(t.code,{children:"end"})," respectively, a routine script was created. This file cane be found inside the ",(0,r.jsx)(t.code,{children:"routines"})," folder within the ",(0,r.jsx)(t.code,{children:"OpenBBUserData"})," folder (more on exporting and import data ",(0,r.jsx)(t.a,{href:"/terminal/usage/data/custom-data",children:"here"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["Now, you should be able to access the routine file from the terminal main menu by doing ",(0,r.jsx)(t.code,{children:"/exe --file"})," and using the auto-completer. Note that the naming of the file will differ for you based on the time you are executing the script."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/223205394-77e7a33d-e9fa-4686-b32f-e8d183b265e6.png",alt:"Routines"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),o=n(74848);function i(e){let{title:t}=e;return(0,o.jsx)(r.A,{children:(0,o.jsx)("title",{children:t})})}},69396:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(96540),o=n(23174),i=n(74848);function s(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[s,a]=(0,r.useState)(!0);return(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,i.jsx)("p",{children:n}),(0,i.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,i.jsx)(o.Toggle,{isOn:s,handleChange:()=>a(!s)})})]}),s&&(0,i.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,i.jsx)("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,t,n)=>{e.exports=n(49793)},49793:(e,t,n)=>{var r,o=(r=n(96540))&&"object"==typeof r&&"default"in r?r.default:r;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return o.createElement("label",{"data-testid":"Toggle-label",className:"switch"},o.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),o.createElement("span",{className:"slider round"}))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);