"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33178],{83144:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(74848),a=n(28453);const r={title:"Command Coverage",sidebar_position:6,description:"This page details the instructions for determining the command coverage provided by the installed extensions.",keywords:["tutorial","standardized output","OBBject","provider","results","warnings","chart","extra","command coverage"]},d=void 0,i={id:"platform/developer_guide/command_coverage",title:"Command Coverage",description:"This page details the instructions for determining the command coverage provided by the installed extensions.",source:"@site/content/platform/developer_guide/command_coverage.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/command_coverage",permalink:"/docs/platform/developer_guide/command_coverage",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/developer_guide/command_coverage.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,sidebarPosition:6,frontMatter:{title:"Command Coverage",sidebar_position:6,description:"This page details the instructions for determining the command coverage provided by the installed extensions.",keywords:["tutorial","standardized output","OBBject","provider","results","warnings","chart","extra","command coverage"]},sidebar:"tutorialSidebar",previous:{title:"Dependency Management",permalink:"/docs/platform/developer_guide/dependency_management"},next:{title:"Contributing",permalink:"/docs/platform/developer_guide/contributing"}},s={},c=[{value:"Commands and Provider Coverage",id:"commands-and-provider-coverage",level:2}];function m(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"commands-and-provider-coverage",children:"Commands and Provider Coverage"}),"\n",(0,t.jsxs)(o.p,{children:["The installed commands and data providers are found under, ",(0,t.jsx)(o.code,{children:"obb.coverage"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-python",children:"obb.coverage\n"})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-console",children:"/coverage\n\n    providers\n    commands\n    command_model\n    command_schemas\n"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"obb.coverage.providers"})," is a dictionary of the installed provider extensions, each with its own list of available commands."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"obb.coverage.commands"})," is a dictionary of commands, each with its own list of available providers for the data."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"obb.coverage.command_model"})," is a dictionary where the keys are the command paths and the values is a nested dictionary of QueryParams and Data models associated with that function."]})]})}function l(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>i});var t=n(96540);const a={},r=t.createContext(a);function d(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);