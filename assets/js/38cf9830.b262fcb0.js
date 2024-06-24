"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98043],{41663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=n(74848),r=n(28453),i=n(94331);const a={title:"smartstake",description:"The page provides detailed documentation on 'smartstake' function of the OpenBB Python SDK. This function is used to set the SmartStake API key for the current session or globally in terminal environment. Includes examples of usage and link to source code.",keywords:["SmartStake API key","API key setting","Python function","docusaurus documentation","programming","environment variables"]},o=void 0,d={id:"sdk/reference/keys/smartstake",title:"smartstake",description:"The page provides detailed documentation on 'smartstake' function of the OpenBB Python SDK. This function is used to set the SmartStake API key for the current session or globally in terminal environment. Includes examples of usage and link to source code.",source:"@site/content/sdk/reference/keys/smartstake.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/smartstake",permalink:"/sdk/reference/keys/smartstake",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/keys/smartstake.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"smartstake",description:"The page provides detailed documentation on 'smartstake' function of the OpenBB Python SDK. This function is used to set the SmartStake API key for the current session or globally in terminal environment. Includes examples of usage and link to source code.",keywords:["SmartStake API key","API key setting","Python function","docusaurus documentation","programming","environment variables"]},sidebar:"tutorialSidebar",previous:{title:"si",permalink:"/sdk/reference/keys/si"},next:{title:"stocksera",permalink:"/sdk/reference/keys/stocksera"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"keys.smartstake - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(t.p,{children:"Set Smartstake key."}),"\n",(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L2057",children:"link"}),"]"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"openbb.keys.smartstake(key: str, access_token: str, persist: bool = False, show_output: bool = False)\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"key"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"API key"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"access_token"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"API token"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"persist"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsxs)(t.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,s.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,s.jsx)("br",{}),"By default, False."]}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"show_output"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Display status string or not. By default, False."}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Status of key set"})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nopenbb.keys.smartstake(\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'key="example_key",\n        access_token="example_access_token",\n        )\n'})}),"\n",(0,s.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(5260),r=n(74848);function i(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);