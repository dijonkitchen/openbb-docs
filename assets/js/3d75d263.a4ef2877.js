"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75149],{2911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(74848),s=t(28453),i=t(94331);const o={title:"fred",description:"This page provides thorough instructions for setting up a FRED key in the OpenBB Terminal Python environment, including guidelines for its use within a Jupyter notebook session or as a global terminal environment variable. Examples of correct usage and behaviors are also provided.",keywords:["FRED Key","OpenBB terminal","API key","Jupyter notebook session","terminal environment variables","Status of key set","openbb_terminal.sdk"]},l=void 0,a={id:"sdk/reference/keys/fred",title:"fred",description:"This page provides thorough instructions for setting up a FRED key in the OpenBB Terminal Python environment, including guidelines for its use within a Jupyter notebook session or as a global terminal environment variable. Examples of correct usage and behaviors are also provided.",source:"@site/content/sdk/reference/keys/fred.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/fred",permalink:"/sdk/reference/keys/fred",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/keys/fred.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"fred",description:"This page provides thorough instructions for setting up a FRED key in the OpenBB Terminal Python environment, including guidelines for its use within a Jupyter notebook session or as a global terminal environment variable. Examples of correct usage and behaviors are also provided.",keywords:["FRED Key","OpenBB terminal","API key","Jupyter notebook session","terminal environment variables","Status of key set","openbb_terminal.sdk"]},sidebar:"tutorialSidebar",previous:{title:"fmp",permalink:"/sdk/reference/keys/fmp"},next:{title:"get_keys_info",permalink:"/sdk/reference/keys/get_keys_info"}},d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"keys.fred - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"Set FRED key"}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L548",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"openbb.keys.fred(key: str, persist: bool = False, show_output: bool = False)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"key"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"API key"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"persist"}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsxs)(n.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,r.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,r.jsx)("br",{}),"By default, False."]}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"show_output"}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:"Display status string or not. By default, False."}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"Status of key set"})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.keys.fred(key="example_key")\n'})}),"\n",(0,r.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(5260),s=t(74848);function i(e){let{title:n}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);