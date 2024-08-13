"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21199],{21727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var r=n(74848),s=n(28453),a=n(18228),d=n(19365);const l={title:"Executive Compensation",description:"Get executive management team compensation for a given company over time"},i=void 0,o={id:"platform/data_models/ExecutiveCompensation",title:"Executive Compensation",description:"Get executive management team compensation for a given company over time",source:"@site/content/platform/data_models/ExecutiveCompensation.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/ExecutiveCompensation",permalink:"/platform/data_models/ExecutiveCompensation",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/ExecutiveCompensation.md",tags:[],version:"current",frontMatter:{title:"Executive Compensation",description:"Get executive management team compensation for a given company over time"},sidebar:"tutorialSidebar",previous:{title:"European Central Bank Interest Rates",permalink:"/platform/data_models/EuropeanCentralBankInterestRates"},next:{title:"Federal Funds Rate",permalink:"/platform/data_models/FederalFundsRate"}},c={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,r.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Model name"}),(0,r.jsx)(t.th,{children:"Parameters class"}),(0,r.jsx)(t.th,{children:"Data class"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ExecutiveCompensation"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ExecutiveCompensationQueryParams"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ExecutiveCompensationData"})})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.executive_compensation import (\nExecutiveCompensationData,\nExecutiveCompensationQueryParams,\n)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(d.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,r.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]})})]})}),(0,r.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,r.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"year"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Year of the compensation."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(d.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cik"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"company_name"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The name of the company."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"industry"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The industry of the company."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"year"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Year of the compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name_and_position"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Name and position."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"salary"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Salary."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bonus"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Bonus payments."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stock_award"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Stock awards."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"incentive_plan_compensation"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Incentive plan compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"all_other_compensation"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"All other compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"total"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Total compensation."})]})]})]})}),(0,r.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cik"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"company_name"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The name of the company."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"industry"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The industry of the company."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"year"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Year of the compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name_and_position"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Name and position."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"salary"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Salary."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bonus"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Bonus payments."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stock_award"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Stock awards."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"incentive_plan_compensation"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Incentive plan compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"all_other_compensation"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"All other compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"total"}),(0,r.jsx)(t.td,{children:"Annotated[float, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"Total compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filing_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Date of the filing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accepted_date"}),(0,r.jsx)(t.td,{children:"datetime"}),(0,r.jsx)(t.td,{children:"Date the filing was accepted."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"url"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"URL to the filing data."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function d(e){let{children:t,hidden:n,className:d}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,d),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>C});var r=n(96540),s=n(34164),a=n(23104),d=n(56347),l=n(205),i=n(57485),o=n(31682),c=n(70679);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const s=(0,d.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=u(e),[d,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,h]=j({queryString:n,groupId:s}),[m,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),f=(()=>{const e=o??m;return x({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:d,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),p(e)}),[h,p,a]),tabValues:a}}var p=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:h}=(0,d.zy)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),s=i[n].value;s!==r&&(c(t),l(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:x,onClick:u,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,a?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&h.startsWith("/terminal")}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function C(e){const t=(0,p.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var r=n(96540);const s={},a=r.createContext(s);function d(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);