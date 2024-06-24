"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4282],{60592:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var n=t(74848),s=t(28453),a=t(94331),o=t(18228),c=t(19365);const d={title:"macro",description:"This Docusaurus page offers detailed resources related to the 'macro' function within the OpenBBTerminal Python package. It presents function parameters, provides source code links, and offers examples of two functions that handle querying macroeconomic data from the EconDB database and visualizing the received macro data.",keywords:["docusaurus page","metadata","macro function","EconDB database","parameters","countries","transform","start_date","end_date","symbol","macro data","macro chart","raw","econdb_model.py","econdb_view.py","economy","macro parameters","macro countries","economical data visualization"]},i=void 0,l={id:"sdk/reference/economy/macro",title:"macro",description:"This Docusaurus page offers detailed resources related to the 'macro' function within the OpenBBTerminal Python package. It presents function parameters, provides source code links, and offers examples of two functions that handle querying macroeconomic data from the EconDB database and visualizing the received macro data.",source:"@site/content/sdk/reference/economy/macro.md",sourceDirName:"sdk/reference/economy",slug:"/sdk/reference/economy/macro",permalink:"/docs/sdk/reference/economy/macro",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/economy/macro.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"macro",description:"This Docusaurus page offers detailed resources related to the 'macro' function within the OpenBBTerminal Python package. It presents function parameters, provides source code links, and offers examples of two functions that handle querying macroeconomic data from the EconDB database and visualizing the received macro data.",keywords:["docusaurus page","metadata","macro function","EconDB database","parameters","countries","transform","start_date","end_date","symbol","macro data","macro chart","raw","econdb_model.py","econdb_view.py","economy","macro parameters","macro countries","economical data visualization"]},sidebar:"tutorialSidebar",previous:{title:"inf",permalink:"/docs/sdk/reference/economy/inf"},next:{title:"macro_countries",permalink:"/docs/sdk/reference/economy/macro_countries"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function m(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"economy.macro - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(o.A,{children:[(0,n.jsxs)(c.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(r.p,{children:"This functions groups the data queried from the EconDB database [Source: EconDB]"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/econdb_model.py#L655",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.economy.macro(parameters: list = None, countries: list = None, transform: str = "", start_date: str = "1900-01-01", end_date: Optional[str] = None, symbol: str = "")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"parameters"}),(0,n.jsx)(r.td,{children:"list"}),(0,n.jsx)(r.td,{children:"The type of data you wish to download. Available parameters can be accessed through economy.macro_parameters()."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"countries"}),(0,n.jsx)(r.td,{children:"list"}),(0,n.jsx)(r.td,{children:"The selected country or countries. Available countries can be accessed through economy.macro_countries()."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"transform"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The selected transform. Available transforms can be accessed through get_macro_transform()."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"start_date"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:'The starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31.'}),(0,n.jsx)(r.td,{children:"1900-01-01"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"end_date"}),(0,n.jsx)(r.td,{children:"Optional[str]"}),(0,n.jsx)(r.td,{children:'The end date, format "YEAR-MONTH-DAY", i.e. 2020-06-05.'}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"In what currency you wish to convert all values."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Tuple[pd.DataFrame, Dict[Any, Dict[Any, Any]], str]"}),(0,n.jsxs)(r.td,{children:["A DataFrame with the requested macro data of all chosen countries,",(0,n.jsx)("br",{}),"A dictionary containing the units of each country's parameter (e.g. EUR),",(0,n.jsx)("br",{}),"A string denomination which can be Trillions, Billions, Millions, Thousands"]})]})})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nmacro_df = openbb.economy.macro()\n"})}),(0,n.jsx)(r.hr,{})]}),(0,n.jsxs)(c.A,{value:"view",label:"Chart",children:[(0,n.jsx)(r.p,{children:"Show the received macro data about a company [Source: EconDB]"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/econdb_view.py#L25",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.economy.macro_chart(parameters: list = None, countries: list = None, transform: str = "", start_date: str = "1900-01-01", end_date: Optional[str] = None, symbol: str = "", raw: bool = False, external_axes: Optional[List[axes]] = None, export: str = "")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"parameters"}),(0,n.jsx)(r.td,{children:"list"}),(0,n.jsx)(r.td,{children:"The type of data you wish to display. Available parameters can be accessed through get_macro_parameters()."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"countries"}),(0,n.jsx)(r.td,{children:"list"}),(0,n.jsx)(r.td,{children:"The selected country or countries. Available countries can be accessed through get_macro_countries()."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"transform"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsxs)(r.td,{children:["select data transformation from:",(0,n.jsx)("br",{}),"    '' - no transformation",(0,n.jsx)("br",{}),"    'TPOP' - total percentage change on period,",(0,n.jsx)("br",{}),"    'TOYA' - total percentage since 1 year ago,",(0,n.jsx)("br",{}),"    'TUSD' - level USD,",(0,n.jsx)("br",{}),"    'TPGP' - Percentage of GDP,",(0,n.jsx)("br",{}),"    'TNOR' - Start = 100"]}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"start_date"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:'The starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31.'}),(0,n.jsx)(r.td,{children:"1900-01-01"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"end_date"}),(0,n.jsx)(r.td,{children:"Optional[str]"}),(0,n.jsx)(r.td,{children:'The end date, format "YEAR-MONTH-DAY", i.e. 2020-06-05.'}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"In what currency you wish to convert all values."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"raw"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"Whether to display the raw output."}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"external_axes"}),(0,n.jsx)(r.td,{children:"Optional[List[plt.axes]]"}),(0,n.jsx)(r.td,{children:"External axes to plot on"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"export"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Export data to csv,json,xlsx or png,jpg,pdf,svg file"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Plots the Series."}),(0,n.jsx)(r.td,{})]})})]}),(0,n.jsx)(r.hr,{})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(5260),s=t(74848);function a(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>T});var n=t(96540),s=t(34164),a=t(23104),o=t(56347),c=t(205),d=t(57485),i=t(31682),l=t(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function u(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??h(t);return function(e){const r=(0,i.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=u(e),[o,d]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[i,h]=x({queryString:t,groupId:s}),[p,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,l.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),f=(()=>{const e=i??p;return m({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{f&&d(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function y(e){let{className:r,block:t,selectedValue:n,selectValue:c,tabValues:d}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),{pathname:h}=(0,o.zy)(),u=e=>{const r=e.currentTarget,t=i.indexOf(r),s=d[t].value;s!==n&&(l(r),c(s))},m=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:m,onClick:u,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,a?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&h.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=p(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(y,{...e,...r}),(0,b.jsx)(v,{...e,...r})]})}function T(e){const r=(0,j.A)();return(0,b.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>c});var n=t(96540);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);