"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77624],{817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(74848),o=t(28453),d=t(94331);const r={title:"Dependency Management",sidebar_position:5,description:"Dealing with dependencies when developing with the OpenBB Platform. Learn how to add new dependencies to the OpenBB Platform and how to add new dependencies to your custom extension.",keywords:["OpenBB Platform","Open source","Python interface","Dependency Management"]},s=void 0,l={id:"platform/developer_guide/dependency_management",title:"Dependency Management",description:"Dealing with dependencies when developing with the OpenBB Platform. Learn how to add new dependencies to the OpenBB Platform and how to add new dependencies to your custom extension.",source:"@site/content/platform/developer_guide/dependency_management.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/dependency_management",permalink:"/platform/developer_guide/dependency_management",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/developer_guide/dependency_management.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,sidebarPosition:5,frontMatter:{title:"Dependency Management",sidebar_position:5,description:"Dealing with dependencies when developing with the OpenBB Platform. Learn how to add new dependencies to the OpenBB Platform and how to add new dependencies to your custom extension.",keywords:["OpenBB Platform","Open source","Python interface","Dependency Management"]},sidebar:"tutorialSidebar",previous:{title:"OBBject",permalink:"/platform/developer_guide/obbject"},next:{title:"Command Coverage",permalink:"/platform/developer_guide/command_coverage"}},a={},c=[{value:"High-Level Overview",id:"high-level-overview",level:2},{value:"Core Dependency Management",id:"core-dependency-management",level:2},{value:"Installation",id:"installation",level:3},{value:"Using Poetry",id:"using-poetry",level:3},{value:"Core and Extensions",id:"core-and-extensions",level:2},{value:"Dev Installation",id:"dev-installation",level:3},{value:"Dependency Management with Poetry",id:"dependency-management-with-poetry",level:3}];function p(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:"Dependency Management - Development | OpenBB Platform Docs"}),"\n",(0,i.jsx)(n.h2,{id:"high-level-overview",children:"High-Level Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Core"}),": Serves as the main infrastructure. All extensions and providers have ",(0,i.jsx)(n.code,{children:"openbb-core"})," as a dependency."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Extensions"}),": Utility packages that leverage Core's infrastructure. Each extension is its own package."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Providers"}),": Utility packages extending functionality to different providers, where each provider is its own package."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This page assumes that the OpenBB GitHub repo has been cloned."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"core-dependency-management",children:"Core Dependency Management"}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Do not run these commands in an already-installed OpenBB Platform environment. Do not run both ",(0,i.jsx)(n.code,{children:"pip"})," and ",(0,i.jsx)(n.code,{children:"poetry"}),"."]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"pip"}),": ",(0,i.jsx)(n.code,{children:"pip install -e OpenBBTerminal/openbb_platform/platform/core"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"poetry"}),": ",(0,i.jsx)(n.code,{children:"poetry install OpenBBTerminal/openbb_platform/platform/core"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"using-poetry",children:"Using Poetry"}),"\n",(0,i.jsx)(n.p,{children:"Ensure you're in a fresh conda environment before adjusting dependencies."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Add a Dependency"}),": ",(0,i.jsx)(n.code,{children:"poetry add <my-dependency>"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Update Dependencies"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All: ",(0,i.jsx)(n.code,{children:"poetry update"})]}),"\n",(0,i.jsxs)(n.li,{children:["Specific: ",(0,i.jsx)(n.code,{children:"poetry update <my-dependency>"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Remove a Dependency"}),": ",(0,i.jsx)(n.code,{children:"poetry remove <my-dependency>"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"core-and-extensions",children:"Core and Extensions"}),"\n",(0,i.jsx)(n.h3,{id:"dev-installation",children:"Dev Installation"}),"\n",(0,i.jsx)(n.p,{children:"For development setup, use the provided script to install all extensions and their dependencies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"python dev_install.py [-e|--extras]"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": If developing an extension, avoid installing all extensions to prevent unnecessary overhead."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dependency-management-with-poetry",children:"Dependency Management with Poetry"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Add Platform Extension"}),": ",(0,i.jsx)(n.code,{children:"poetry add openbb-extension-name [--dev]"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Resolve Conflicts"}),": Adjust versions in ",(0,i.jsx)(n.code,{children:"pyproject.toml"})," if notified by Poetry."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Lock Dependencies"}),": ",(0,i.jsx)(n.code,{children:"poetry lock"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Update Platform"}),": ",(0,i.jsx)(n.code,{children:"poetry update openbb-platform"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Documentation"}),": Maintain ",(0,i.jsx)(n.code,{children:"pyproject.toml"})," and ",(0,i.jsx)(n.code,{children:"poetry.lock"})," for a clear record of dependencies."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>d});t(96540);var i=t(5260),o=t(74848);function d(e){let{title:n}=e;return(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(96540);const o={},d=i.createContext(o);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);