"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35602],{14002:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=d(74848),n=d(28453),i=d(18228),s=d(19365);const a={title:"Calendar Dividend",description:"Get historical and upcoming dividend payments"},l=void 0,c={id:"platform/data_models/CalendarDividend",title:"Calendar Dividend",description:"Get historical and upcoming dividend payments",source:"@site/content/platform/data_models/CalendarDividend.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/CalendarDividend",permalink:"/platform/data_models/CalendarDividend",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/CalendarDividend.md",tags:[],version:"current",frontMatter:{title:"Calendar Dividend",description:"Get historical and upcoming dividend payments"},sidebar:"tutorialSidebar",previous:{title:"COT Search",permalink:"/platform/data_models/COTSearch"},next:{title:"Calendar Earnings",permalink:"/platform/data_models/CalendarEarnings"}},h={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,r.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Model name"}),(0,r.jsx)(t.th,{children:"Parameters class"}),(0,r.jsx)(t.th,{children:"Data class"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CalendarDividend"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CalendarDividendQueryParams"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CalendarDividendData"})})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.calendar_dividend import (\nCalendarDividendData,\nCalendarDividendQueryParams,\n)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provider"}),(0,r.jsx)(t.td,{children:"Literal['fmp', 'nasdaq']"}),(0,r.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp, nasdaq."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(s.A,{value:"fmp",label:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provider"}),(0,r.jsx)(t.td,{children:"Literal['fmp', 'nasdaq']"}),(0,r.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp, nasdaq."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(s.A,{value:"nasdaq",label:"nasdaq",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provider"}),(0,r.jsx)(t.td,{children:"Literal['fmp', 'nasdaq']"}),(0,r.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: fmp, nasdaq."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ex_dividend_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The dividend amount per share."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Name of the entity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"record_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The record date of ownership for eligibility."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"payment_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The payment date of the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"declaration_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Declaration date of the dividend."})]})]})]})}),(0,r.jsx)(s.A,{value:"fmp",label:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ex_dividend_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The dividend amount per share."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Name of the entity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"record_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The record date of ownership for eligibility."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"payment_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The payment date of the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"declaration_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Declaration date of the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"adjusted_amount"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The adjusted-dividend amount."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"label"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Ex-dividend date formatted for display."})]})]})]})}),(0,r.jsx)(s.A,{value:"nasdaq",label:"nasdaq",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ex_dividend_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The dividend amount per share."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Name of the entity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"record_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The record date of ownership for eligibility."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"payment_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The payment date of the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"declaration_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Declaration date of the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"annualized_amount"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The indicated annualized dividend amount."})]})]})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},19365:(e,t,d)=>{d.d(t,{A:()=>s});d(96540);var r=d(34164);const n={tabItem:"tabItem_Ymn6"};var i=d(74848);function s(e){let{children:t,hidden:d,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,s),hidden:d,children:t})}},18228:(e,t,d)=>{d.d(t,{A:()=>D});var r=d(96540),n=d(34164),i=d(23104),s=d(56347),a=d(205),l=d(57485),c=d(31682),h=d(70679);function o(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:d,attributes:r,default:n}}=e;return{value:t,label:d,attributes:r,default:n}}))}function x(e){const{values:t,children:d}=e;return(0,r.useMemo)((()=>{const e=t??o(d);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,d])}function u(e){let{value:t,tabValues:d}=e;return d.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:d}=e;const n=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:d}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!d)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return d??null}({queryString:t,groupId:d});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function m(e){const{defaultValue:t,queryString:d=!1,groupId:n}=e,i=x(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:d}=e;if(0===d.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:d}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${d.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=d.find((e=>e.default))??d[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,o]=j({queryString:d,groupId:n}),[m,p]=function(e){let{groupId:t}=e;const d=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,h.Dv)(d);return[n,(0,r.useCallback)((e=>{d&&i.set(e)}),[d,i])]}({groupId:n}),f=(()=>{const e=c??m;return u({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),p(e)}),[o,p,i]),tabValues:i}}var p=d(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=d(74848);function v(e){let{className:t,block:d,selectedValue:r,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.a_)(),{pathname:o}=(0,s.zy)(),x=e=>{const t=e.currentTarget,d=c.indexOf(t),n=l[d].value;n!==r&&(h(t),a(n))},u=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const d=c.indexOf(e.currentTarget)+1;t=c[d]??c[0];break}case"ArrowLeft":{const d=c.indexOf(e.currentTarget)-1;t=c[d]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:d,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:x,...i,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,i?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&o.startsWith("/terminal")}),children:d??t},t)}))})}function y(e){let{lazy:t,children:d,selectedValue:n}=e;if(d=Array.isArray(d)?d:[d],t){const e=d.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:d.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function D(e){const t=(0,p.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,d)=>{d.d(t,{R:()=>s,x:()=>a});var r=d(96540);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);