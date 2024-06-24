"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49659],{95114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(74848),s=n(28453),i=n(94331);const o={title:"ethplorer",description:"This page provides documentation on how to set the Ethplorer key in the OpenBB finance terminal. It includes explanations of the parameters and gives examples of how to use this function.",keywords:["Ethplorer","API key","Documentation","Finance","Example","Source Code","Parameters"]},l=void 0,d={id:"sdk/reference/keys/ethplorer",title:"ethplorer",description:"This page provides documentation on how to set the Ethplorer key in the OpenBB finance terminal. It includes explanations of the parameters and gives examples of how to use this function.",source:"@site/content/sdk/reference/keys/ethplorer.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/ethplorer",permalink:"/sdk/reference/keys/ethplorer",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/keys/ethplorer.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"ethplorer",description:"This page provides documentation on how to set the Ethplorer key in the OpenBB finance terminal. It includes explanations of the parameters and gives examples of how to use this function.",keywords:["Ethplorer","API key","Documentation","Finance","Example","Source Code","Parameters"]},sidebar:"tutorialSidebar",previous:{title:"eodhd",permalink:"/sdk/reference/keys/eodhd"},next:{title:"finnhub",permalink:"/sdk/reference/keys/finnhub"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"keys.ethplorer - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Set Ethplorer key."}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1987",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.keys.ethplorer(key: str, persist: bool = False, show_output: bool = False)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"key"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"API key"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"persist"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsxs)(t.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,r.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,r.jsx)("br",{}),"By default, False."]}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"show_output"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Display status string or not. By default, False."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Status of key set"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.keys.ethplorer(key="example_key")\n'})}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);