"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16328],{52491:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var t=n(74848),r=n(28453),i=n(94331);const a={title:"coinbase",description:"This page provides a detailed guide on setting up a Coinbase key using the OpenBBTerminal. Learn how to input your API key, secret, and passphrase. Understand the functionality of persist and show_output parameters in the context of your Jupyter notebook session and terminal environment variables.",keywords:["coinbase","coinbase key setup","API key set","openbb_terminal","terminal environment variables","coinbase API","API secret","coinbase passphrase"]},o=void 0,d={id:"sdk/reference/keys/coinbase",title:"coinbase",description:"This page provides a detailed guide on setting up a Coinbase key using the OpenBBTerminal. Learn how to input your API key, secret, and passphrase. Understand the functionality of persist and show_output parameters in the context of your Jupyter notebook session and terminal environment variables.",source:"@site/content/sdk/reference/keys/coinbase.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/coinbase",permalink:"/sdk/reference/keys/coinbase",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/keys/coinbase.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"coinbase",description:"This page provides a detailed guide on setting up a Coinbase key using the OpenBBTerminal. Learn how to input your API key, secret, and passphrase. Understand the functionality of persist and show_output parameters in the context of your Jupyter notebook session and terminal environment variables.",keywords:["coinbase","coinbase key setup","API key set","openbb_terminal","terminal environment variables","coinbase API","API secret","coinbase passphrase"]},sidebar:"tutorialSidebar",previous:{title:"cmc",permalink:"/sdk/reference/keys/cmc"},next:{title:"coinglass",permalink:"/sdk/reference/keys/coinglass"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{title:"keys.coinbase - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(s.p,{children:"Set Coinbase key"}),"\n",(0,t.jsxs)(s.p,{children:["Source Code: [",(0,t.jsx)(s.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1622",children:"link"}),"]"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"openbb.keys.coinbase(key: str, secret: str, passphrase: str, persist: bool = False, show_output: bool = False)\n"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Default"}),(0,t.jsx)(s.th,{children:"Optional"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"key"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"API key"}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"False"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"secret"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"API secret"}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"False"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"passphrase"}),(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"Account passphrase"}),(0,t.jsx)(s.td,{children:"None"}),(0,t.jsx)(s.td,{children:"False"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"persist"}),(0,t.jsx)(s.td,{children:"bool"}),(0,t.jsxs)(s.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,t.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,t.jsx)("br",{}),"By default, False."]}),(0,t.jsx)(s.td,{children:"False"}),(0,t.jsx)(s.td,{children:"True"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"show_output"}),(0,t.jsx)(s.td,{children:"bool"}),(0,t.jsx)(s.td,{children:"Display status string or not. By default, False."}),(0,t.jsx)(s.td,{children:"False"}),(0,t.jsx)(s.td,{children:"True"})]})]})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"str"}),(0,t.jsx)(s.td,{children:"Status of key set"})]})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nopenbb.keys.coinbase(\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'key="example_key",\n        secret="example_secret",\n        passphrase="example_passphrase"\n    )\n'})}),"\n",(0,t.jsx)(s.hr,{})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,s,n)=>{n.d(s,{A:()=>i});n(96540);var t=n(5260),r=n(74848);function i(e){let{title:s}=e;return(0,r.jsx)(t.A,{children:(0,r.jsx)("title",{children:s})})}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(96540);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);