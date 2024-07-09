"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21416],{64269:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var n=t(74848),r=t(28453),i=t(94331);const a={title:"messari",description:"This page deals with details on setting the Messari key in the OpenBB finance terminal. It highlights on parameters such as API key, the persist and show_output options and also provides an example of how to use the openbb.keys.messari function.",keywords:["OpenBB terminal","Messari key","API key","Parameters","openbb.keys.messari function","example usage","persist","show_output"]},l=void 0,o={id:"sdk/reference/keys/messari",title:"messari",description:"This page deals with details on setting the Messari key in the OpenBB finance terminal. It highlights on parameters such as API key, the persist and show_output options and also provides an example of how to use the openbb.keys.messari function.",source:"@site/content/sdk/reference/keys/messari.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/messari",permalink:"/sdk/reference/keys/messari",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/keys/messari.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,frontMatter:{title:"messari",description:"This page deals with details on setting the Messari key in the OpenBB finance terminal. It highlights on parameters such as API key, the persist and show_output options and also provides an example of how to use the openbb.keys.messari function.",keywords:["OpenBB terminal","Messari key","API key","Parameters","openbb.keys.messari function","example usage","persist","show_output"]},sidebar:"tutorialSidebar",previous:{title:"iex",permalink:"/sdk/reference/keys/iex"},next:{title:"mykeys",permalink:"/sdk/reference/keys/mykeys"}},d={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"keys.messari - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(s.p,{children:"Set Messari key."}),"\n",(0,n.jsxs)(s.p,{children:["Source Code: [",(0,n.jsx)(s.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L2205",children:"link"}),"]"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"openbb.keys.messari(key: str, persist: bool = False, show_output: bool = False)\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Optional"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"key"}),(0,n.jsx)(s.td,{children:"str"}),(0,n.jsx)(s.td,{children:"API key"}),(0,n.jsx)(s.td,{children:"None"}),(0,n.jsx)(s.td,{children:"False"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"persist"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsxs)(s.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,n.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,n.jsx)("br",{}),"By default, False."]}),(0,n.jsx)(s.td,{children:"False"}),(0,n.jsx)(s.td,{children:"True"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"show_output"}),(0,n.jsx)(s.td,{children:"bool"}),(0,n.jsx)(s.td,{children:"Display status string or not. By default, False."}),(0,n.jsx)(s.td,{children:"False"}),(0,n.jsx)(s.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"str"}),(0,n.jsx)(s.td,{children:"Status of key set"})]})})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.keys.messari(key="example_key")\n'})}),"\n",(0,n.jsx)(s.hr,{})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},94331:(e,s,t)=>{t.d(s,{A:()=>i});t(96540);var n=t(5260),r=t(74848);function i(e){let{title:s}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:s})})}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var n=t(96540);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);