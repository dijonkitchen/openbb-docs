"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58059],{4944:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(74848),n=a(28453),s=a(94331);const i={title:"global_cases",description:"The 'global_cases' page provides code and instructions for getting historical Covid-19 case data for any country. Utilize the provided Python function to retrieve a DataFrame of historical data.",keywords:["Covid-19","historical data","openbb.alt.covid.global_cases","global cases","country specific data","programming"]},c=void 0,o={id:"sdk/reference/alt/covid/global_cases",title:"global_cases",description:"The 'global_cases' page provides code and instructions for getting historical Covid-19 case data for any country. Utilize the provided Python function to retrieve a DataFrame of historical data.",source:"@site/content/sdk/reference/alt/covid/global_cases.md",sourceDirName:"sdk/reference/alt/covid",slug:"/sdk/reference/alt/covid/global_cases",permalink:"/docs/sdk/reference/alt/covid/global_cases",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/alt/covid/global_cases.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"global_cases",description:"The 'global_cases' page provides code and instructions for getting historical Covid-19 case data for any country. Utilize the provided Python function to retrieve a DataFrame of historical data.",keywords:["Covid-19","historical data","openbb.alt.covid.global_cases","global cases","country specific data","programming"]},sidebar:"tutorialSidebar",previous:{title:"reference",permalink:"/docs/sdk/reference/"},next:{title:"global_deaths",permalink:"/docs/sdk/reference/alt/covid/global_deaths"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"alt.covid.global_cases - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get historical cases for given country."}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_model.py#L26",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"openbb.alt.covid.global_cases(country: str)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"country"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Country to search for"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Dataframe of historical cases"})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'df = get_global_cases("United States")\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Dataframe of historical cases for United States\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'df = get_global_cases("Portugal")\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Dataframe of historical cases for Portugal\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'df = get_global_cases("Spain")\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Dataframe of historical cases for Spain\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var r=a(5260),n=a(74848);function s(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>c});var r=a(96540);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);