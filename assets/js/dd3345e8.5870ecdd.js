"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5311],{550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(74848),r=t(28453),o=t(94331);const i={title:"Standardization",sidebar_position:2,description:"Learn about the OpenBB Platform, an open-source solution built by the community. Understand its use via Python interface and REST API, and acquaint yourself with how to build a custom extension or contribute directly to the platform",keywords:["OpenBB Platform","Open source","Python interface","REST API","Data integration","Data standardization","OpenBB extensions","openbb-core","Python package","High-Level Architecture","Custom extension","Contribution"]},d=void 0,s={id:"platform/developer_guide/standardization",title:"Standardization",description:"Learn about the OpenBB Platform, an open-source solution built by the community. Understand its use via Python interface and REST API, and acquaint yourself with how to build a custom extension or contribute directly to the platform",source:"@site/content/platform/developer_guide/standardization.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/standardization",permalink:"/platform/developer_guide/standardization",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/standardization.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,sidebarPosition:2,frontMatter:{title:"Standardization",sidebar_position:2,description:"Learn about the OpenBB Platform, an open-source solution built by the community. Understand its use via Python interface and REST API, and acquaint yourself with how to build a custom extension or contribute directly to the platform",keywords:["OpenBB Platform","Open source","Python interface","REST API","Data integration","Data standardization","OpenBB extensions","openbb-core","Python package","High-Level Architecture","Custom extension","Contribution"]},sidebar:"tutorialSidebar",previous:{title:"Architecture Overview",permalink:"/platform/developer_guide/architecture_overview"},next:{title:"Extensions",permalink:"/platform/developer_guide/extensions"}},l={},c=[{value:"What Is The Standardization Framework?",id:"what-is-the-standardization-framework",level:2},{value:"What Is A Standard Model?",id:"what-is-a-standard-model",level:3},{value:"Caveats",id:"caveats",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{title:"Standardization - Development | OpenBB Platform Docs"}),"\n",(0,a.jsx)(n.h2,{id:"what-is-the-standardization-framework",children:"What Is The Standardization Framework?"}),"\n",(0,a.jsx)(n.p,{children:"The Standardization Framework is a set of tools and guidelines that enable the user to query and obtain data in a consistent way across multiple providers."}),"\n",(0,a.jsxs)(n.p,{children:["Each provider data model should inherit from an already defined ",(0,a.jsx)(n.a,{href:"https://docs.openbb.co/platform/data_models",children:"standard"})," model. All standard models are created and maintained by the OpenBB team."]}),"\n",(0,a.jsx)(n.p,{children:"If a standard model needs to be created, please open a pull request and detail its use."}),"\n",(0,a.jsx)(n.p,{children:"Standardizing provider query parameters and response data enhances the user experience by overcoming things like:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Consistent query parameters across all data sources for a function, or type of function."}),"\n",(0,a.jsxs)(n.li,{children:["Output data that has conformed types, is validated, and will be JSON serializable.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"NaN"}),", ",(0,a.jsx)(n.code,{children:"NaT"}),", ",(0,a.jsx)(n.code,{children:'"None"'}),", empty strings, are always returned as ",(0,a.jsx)(n.code,{children:"NoneType"})," (null)."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"Transparently defined schemas for the data and query parameters."}),"\n",(0,a.jsx)(n.li,{children:"Outputs from multiple sources are comparable with each other and easily interchanged."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The standard models are all defined in the ",(0,a.jsx)(n.code,{children:"/OpenBBTerminal/openbb_platform/core/openbb_core/provider/standard_models/"})," ",(0,a.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_platform/core/openbb_core/provider/standard_models",children:"directory"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"what-is-a-standard-model",children:"What Is A Standard Model?"}),"\n",(0,a.jsx)(n.p,{children:"Every standard model consists of two classes, with each being a Pydantic model."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/openbb_platform/core/openbb_core/provider/abstract/query_params.py",children:(0,a.jsx)(n.code,{children:"QueryParams"})})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://raw.githubusercontent.com/OpenBB-finance/OpenBBTerminal/main/openbb_platform/core/openbb_core/provider/abstract/data.py",children:(0,a.jsx)(n.code,{children:"Data"})})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Any parameter or field can be assigned a custom ",(0,a.jsx)(n.code,{children:"field_validator"}),", or the entire model can be passed through a ",(0,a.jsx)(n.code,{children:"model_validator"})," on creation."]}),"\n",(0,a.jsx)(n.h3,{id:"caveats",children:"Caveats"}),"\n",(0,a.jsx)(n.p,{children:"The standardization framework is a very powerful tool, but it has some caveats that you should be aware of:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["We standardize fields and parameters that are shared between multiple providers.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"In some cases, it can be undesirable to define common items in the standard model. In this event, we still want consistent names and descriptions."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["When mapping the column names from a provider-specific model to the standard model, the CamelCase to snake_case conversion is done automatically. If the column names are not the same, you'll need to manually map them.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["e.g., ",(0,a.jsx)(n.code,{children:'__alias_dict__ = {"o": "open"}'})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"The standard models are created and maintained by the OpenBB team. If you want to add or modify a field within a standard model, you'll need to open a PR to the OpenBB Platform."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(5260),r=t(74848);function o(e){let{title:n}=e;return(0,r.jsx)(a.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var a=t(96540);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);