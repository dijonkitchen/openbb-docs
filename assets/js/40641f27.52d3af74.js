"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28081],{80234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(74848),s=t(28453),r=t(94331);const a={title:"Documentation - Development",sidebar_position:30,description:"Building the OpenBB Platform documentation and packages.",keywords:["OpenBB Platform","Open source","Documentation","Development","Markdown"]},i=void 0,l={id:"platform/developer_guide/documentation_development",title:"Documentation - Development",description:"Building the OpenBB Platform documentation and packages.",source:"@site/content/platform/developer_guide/documentation_development.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/documentation_development",permalink:"/docs/platform/developer_guide/documentation_development",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/developer_guide/documentation_development.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,sidebarPosition:30,frontMatter:{title:"Documentation - Development",sidebar_position:30,description:"Building the OpenBB Platform documentation and packages.",keywords:["OpenBB Platform","Open source","Documentation","Development","Markdown"]},sidebar:"tutorialSidebar",previous:{title:"Commitment of Traders",permalink:"/docs/platform/developer_guide/commitment_of_traders"},next:{title:"Reference",permalink:"/docs/platform/reference/"}},d={},c=[{value:"Generate Markdown Files",id:"generate-markdown-files",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"Install Dependencies",id:"install-dependencies",level:4},{value:"Start Development Server",id:"start-development-server",level:4},{value:"Build",id:"build",level:4}];function p(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{title:"Documentation - Development | OpenBB Platform Docs"}),"\n",(0,o.jsxs)(n.p,{children:["The documentation and packages are kept in the ",(0,o.jsx)(n.code,{children:"/website"})," folder, at the base of the repository. Navigate there to install the dependencies and start the development server."]}),"\n",(0,o.jsx)(n.h3,{id:"generate-markdown-files",children:"Generate Markdown Files"}),"\n",(0,o.jsx)(n.p,{children:"Markdown files for the Reference and Data Models pages need to be generated.\nThis will generate content based on what is actually installed and contained locally, so it may appear different than what is on this website."}),"\n",(0,o.jsxs)(n.p,{children:["Open a terminal command line to the ",(0,o.jsx)(n.code,{children:"/OpenBBTerminal/website"})," folder, then enter:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python generate_platform_v4_markdown.py\n"})}),"\n",(0,o.jsx)(n.h3,{id:"nodejs",children:"Node.js"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"})," >= 16.13.0\nTo check if Node.js installed, run this command:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"node --version # should be v16.13.0 or higher\n"})}),"\n",(0,o.jsx)(n.h4,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,o.jsx)(n.h4,{id:"start-development-server",children:"Start Development Server"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This starts a local development server at: ",(0,o.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})]}),"\n",(0,o.jsx)(n.p,{children:"Most changes are reflected live without having to restart the server."}),"\n",(0,o.jsx)(n.h4,{id:"build",children:"Build"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This command generates static content into the ",(0,o.jsx)(n.code,{children:"build"})," directory and can be served using any static contents hosting service."]}),"\n",(0,o.jsxs)(n.p,{children:["OpenBB uses Github Pages to host our website, it's deployed in the ",(0,o.jsx)(n.code,{children:"gh-pages"})," branch."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(5260),s=t(74848);function r(e){let{title:n}=e;return(0,s.jsx)(o.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);