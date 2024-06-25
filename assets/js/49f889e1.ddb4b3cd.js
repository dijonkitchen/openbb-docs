"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58059],{54219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=a(74848),r=a(28453),s=a(94331);const c={title:"global_cases",description:"The 'global_cases' page provides code and instructions for getting historical Covid-19 case data for any country. Utilize the provided Python function to retrieve a DataFrame of historical data.",keywords:["Covid-19","historical data","openbb.alt.covid.global_cases","global cases","country specific data","programming"]},i=void 0,o={id:"sdk/reference/alt/covid/global_cases",title:"global_cases",description:"The 'global_cases' page provides code and instructions for getting historical Covid-19 case data for any country. Utilize the provided Python function to retrieve a DataFrame of historical data.",source:"@site/content/sdk/reference/alt/covid/global_cases.md",sourceDirName:"sdk/reference/alt/covid",slug:"/sdk/reference/alt/covid/global_cases",permalink:"/sdk/reference/alt/covid/global_cases",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/alt/covid/global_cases.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"global_cases",description:"The 'global_cases' page provides code and instructions for getting historical Covid-19 case data for any country. Utilize the provided Python function to retrieve a DataFrame of historical data.",keywords:["Covid-19","historical data","openbb.alt.covid.global_cases","global cases","country specific data","programming"]},sidebar:"tutorialSidebar",previous:{title:"reference",permalink:"/sdk/reference/"},next:{title:"global_deaths",permalink:"/sdk/reference/alt/covid/global_deaths"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"alt.covid.global_cases - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get historical cases for given country."}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_model.py#L26",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.alt.covid.global_cases(country: str)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Country to search for"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"Dataframe of historical cases"})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'df = get_global_cases("United States")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Dataframe of historical cases for United States\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'df = get_global_cases("Portugal")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Dataframe of historical cases for Portugal\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'df = get_global_cases("Spain")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Dataframe of historical cases for Spain\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var n=a(5260),r=a(74848);function s(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,a)=>{a.d(t,{R:()=>c,x:()=>i});var n=a(96540);const r={},s=n.createContext(r);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);