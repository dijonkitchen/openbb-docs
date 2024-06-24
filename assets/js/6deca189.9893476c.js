"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50850],{79682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(74848),o=a(28453),i=a(94331);const s={title:"Custom Data",sidebar_position:3,description:"Documentation detailing usage of the OpenBB Terminal for financial data aggregation, standardization, and user data import. It explains the OpenBBUserData folder functions, how to modify settings, and how to import or export user data.",keywords:["financial data","data aggregation","data standardization","OpenBBUserData folder","import data","export data","Econometrics","Portfolio","Portfolio Optimization","settings menu","export folder location","userdata command","user-created files"]},r=void 0,d={id:"terminal/usage/data/custom-data",title:"Custom Data",description:"Documentation detailing usage of the OpenBB Terminal for financial data aggregation, standardization, and user data import. It explains the OpenBBUserData folder functions, how to modify settings, and how to import or export user data.",source:"@site/content/terminal/usage/data/custom-data.md",sourceDirName:"terminal/usage/data",slug:"/terminal/usage/data/custom-data",permalink:"/terminal/usage/data/custom-data",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/usage/data/custom-data.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,sidebarPosition:3,frontMatter:{title:"Custom Data",sidebar_position:3,description:"Documentation detailing usage of the OpenBB Terminal for financial data aggregation, standardization, and user data import. It explains the OpenBBUserData folder functions, how to modify settings, and how to import or export user data.",keywords:["financial data","data aggregation","data standardization","OpenBBUserData folder","import data","export data","Econometrics","Portfolio","Portfolio Optimization","settings menu","export folder location","userdata command","user-created files"]},sidebar:"tutorialSidebar",previous:{title:"API Keys",permalink:"/terminal/usage/data/api-keys"},next:{title:"Outputs",permalink:"/terminal/usage/outputs/"}},l={},c=[{value:"The OpenBBUserData Folder",id:"the-openbbuserdata-folder",level:2},{value:"Update export folder location",id:"update-export-folder-location",level:3},{value:"Import data",id:"import-data",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"Custom Data - Data - Usage | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"The OpenBB Terminal not only allows access to a world of financial data through our data aggregation and standardization. We also allow users to bring their own data to the terminal and export data."}),"\n",(0,n.jsx)(t.h2,{id:"the-openbbuserdata-folder",children:"The OpenBBUserData Folder"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"OpenBBUserData"})," folder's default location is the home of the system user account. By default this will be the following paths:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["macOS: ",(0,n.jsx)(t.code,{children:"Macintosh HD/Users/<YOUR_USERNAME>/OpenBBUserData"})]}),"\n",(0,n.jsxs)(t.li,{children:["Windows: ",(0,n.jsx)(t.code,{children:"C:/Users/<YOUR_USERNAME>/OpenBBUserData"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Within the folder you can find files that you have exported as well as files that you wish to import directly into the OpenBB Terminal. For example, this could be an orderbook which you can store in ",(0,n.jsx)(t.code,{children:"OpenBBUserData/portfolio/holdings"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/195742985-19f0e420-d8f7-4fea-a145-a0243b8f2ddc.png",alt:"OpenBBUserData Folder"})}),"\n",(0,n.jsx)(t.p,{children:"This folder contains all things user-created. For example:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Screener presets"}),"\n",(0,n.jsx)(t.li,{children:"Portfolio files"}),"\n",(0,n.jsx)(t.li,{children:"Exported files"}),"\n",(0,n.jsx)(t.li,{children:"Files to be imported by various functions"}),"\n",(0,n.jsx)(t.li,{children:"Styles and themes"}),"\n",(0,n.jsx)(t.li,{children:"Preferred data sources"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," With a WSL-enabled Windows installation, this folder will be under the Linux partition"]})}),"\n",(0,n.jsx)(t.h3,{id:"update-export-folder-location",children:"Update export folder location"}),"\n",(0,n.jsxs)(t.p,{children:["The location of this folder can be set by the user from the ",(0,n.jsx)(t.code,{children:"/settings"})," menu. There should be no need to update paths in this menu unless the folders have been moved manually. If the location of the OpenBBUserData folder must be changed, it is best to move the entire existing folder to the new path. The path is then changed under the settings menu with:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:'/settings/ $ userdata --folder "/complete_path_to/OpenBBUserData"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"import-data",children:"Import data"}),"\n",(0,n.jsxs)(t.p,{children:["Menus, such as ",(0,n.jsx)(t.a,{href:"/terminal/menus/econometrics",children:"Econometrics"})," or ",(0,n.jsx)(t.a,{href:"/terminal/menus/forecast",children:"Forecast"}),", allow the user to import their own dataset. Files available to import will be included with the selections made available by auto-complete. In the Econometrics menu, this is activated after pressing the space bar with ",(0,n.jsx)(t.code,{children:"load -f"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/204921760-38742f6c-ec78-4009-9c23-54dcb0504524.png",alt:"Importing Data"})}),"\n",(0,n.jsxs)(t.p,{children:["Both menus look in the ",(0,n.jsx)(t.code,{children:"exports"})," and ",(0,n.jsx)(t.code,{children:"custom_imports"})," folders within the ",(0,n.jsx)(t.code,{children:"/OpenBBUserData"})," folder."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(5260),o=a(74848);function i(e){let{title:t}=e;return(0,o.jsx)(n.A,{children:(0,o.jsx)("title",{children:t})})}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>r});var n=a(96540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);