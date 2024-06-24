"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93121],{19252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>_,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var n=r(74848),a=r(28453),s=r(94331),i=r(18228),o=r(19365);const d={title:"INSTITUTIONAL",description:"Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional function in Python to access the data. Explore the symbol, include_current_quarter, date, and provider parameters. Understand the meaning and usage of the results, provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares, total_invested, ownership_percent, new_positions, closed_positions, total_calls, total_puts, and put_call_ratio.",keywords:["institutional ownership data","python OBB.equity.ownership.institutional function","symbol parameter","include_current_quarter parameter","date parameter","provider parameter","results property","provider property","warnings property","chart property","metadata property","data description","symbol data","cik data","date data","investors_holding data","last_investors_holding data","investors_holding_change data","number_of_13f_shares data","last_number_of_13f_shares data","number_of_13f_shares_change data","total_invested data","last_total_invested data","total_invested_change data","ownership_percent data","last_ownership_percent data","ownership_percent_change data","new_positions data","last_new_positions data","new_positions_change data","increased_positions data","last_increased_positions data","increased_positions_change data","closed_positions data","last_closed_positions data","closed_positions_change data","reduced_positions data","last_reduced_positions data","reduced_positions_change data","total_calls data","last_total_calls data","total_calls_change data","total_puts data","last_total_puts data","total_puts_change data","put_call_ratio data","last_put_call_ratio data","put_call_ratio_change data"]},l=void 0,c={id:"excel/reference/equity/ownership/institutional",title:"INSTITUTIONAL",description:"Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional function in Python to access the data. Explore the symbol, include_current_quarter, date, and provider parameters. Understand the meaning and usage of the results, provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares, total_invested, ownership_percent, new_positions, closed_positions, total_calls, total_puts, and put_call_ratio.",source:"@site/content/excel/reference/equity/ownership/institutional.md",sourceDirName:"excel/reference/equity/ownership",slug:"/excel/reference/equity/ownership/institutional",permalink:"/excel/reference/equity/ownership/institutional",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/equity/ownership/institutional.md",tags:[],version:"current",frontMatter:{title:"INSTITUTIONAL",description:"Learn about institutional ownership data, and how to use the OBB.equity.ownership.institutional function in Python to access the data. Explore the symbol, include_current_quarter, date, and provider parameters. Understand the meaning and usage of the results, provider, warnings, chart, and metadata properties. Additionally, get detailed descriptions of the various data fields such as symbol, cik, date, investors_holding, number_of_13f_shares, total_invested, ownership_percent, new_positions, closed_positions, total_calls, total_puts, and put_call_ratio.",keywords:["institutional ownership data","python OBB.equity.ownership.institutional function","symbol parameter","include_current_quarter parameter","date parameter","provider parameter","results property","provider property","warnings property","chart property","metadata property","data description","symbol data","cik data","date data","investors_holding data","last_investors_holding data","investors_holding_change data","number_of_13f_shares data","last_number_of_13f_shares data","number_of_13f_shares_change data","total_invested data","last_total_invested data","total_invested_change data","ownership_percent data","last_ownership_percent data","ownership_percent_change data","new_positions data","last_new_positions data","new_positions_change data","increased_positions data","last_increased_positions data","increased_positions_change data","closed_positions data","last_closed_positions data","closed_positions_change data","reduced_positions data","last_reduced_positions data","reduced_positions_change data","total_calls data","last_total_calls data","total_calls_change data","total_puts data","last_total_puts data","total_puts_change data","put_call_ratio data","last_put_call_ratio data","put_call_ratio_change data"]},sidebar:"tutorialSidebar",previous:{title:"INSIDER_TRADING",permalink:"/excel/reference/equity/ownership/insider_trading"},next:{title:"MAJOR_HOLDERS",permalink:"/excel/reference/equity/ownership/major_holders"}},h={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"EQUITY.OWNERSHIP.INSTITUTIONAL | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get data about institutional ownership for a given company over time."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.OWNERSHIP.INSTITUTIONAL(symbol,[include_current_quarter],[date])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.OWNERSHIP.INSTITUTIONAL("AAPL")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for."})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"include_current_quarter"}),(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"Include current quarter data."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"A specific date to get data for."}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(o.A,{value:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cik"}),(0,n.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"investors_holding"}),(0,n.jsx)(t.td,{children:"Number of investors holding the stock."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_investors_holding"}),(0,n.jsx)(t.td,{children:"Number of investors holding the stock in the last quarter."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"investors_holding_change"}),(0,n.jsx)(t.td,{children:"Change in the number of investors holding the stock."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"numberOf13Fshares"}),(0,n.jsx)(t.td,{children:"Number of 13F shares."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lastNumberOf13Fshares"}),(0,n.jsx)(t.td,{children:"Number of 13F shares in the last quarter."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"numberOf13FsharesChange"}),(0,n.jsx)(t.td,{children:"Change in the number of 13F shares."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_invested"}),(0,n.jsx)(t.td,{children:"Total amount invested."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_total_invested"}),(0,n.jsx)(t.td,{children:"Total amount invested in the last quarter."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_invested_change"}),(0,n.jsx)(t.td,{children:"Change in the total amount invested."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ownership_percent"}),(0,n.jsx)(t.td,{children:"Ownership percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_ownership_percent"}),(0,n.jsx)(t.td,{children:"Ownership percent in the last quarter."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ownership_percent_change"}),(0,n.jsx)(t.td,{children:"Change in the ownership percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"new_positions"}),(0,n.jsx)(t.td,{children:"Number of new positions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_new_positions"}),(0,n.jsx)(t.td,{children:"Number of new positions in the last quarter."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"new_positions_change"}),(0,n.jsx)(t.td,{children:"Change in the number of new positions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"increased_positions"}),(0,n.jsx)(t.td,{children:"Number of increased positions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_increased_positions"}),(0,n.jsx)(t.td,{children:"Number of increased positions in the last quarter."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"increased_positions_change"}),(0,n.jsx)(t.td,{children:"Change in the number of increased positions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"closed_positions"}),(0,n.jsx)(t.td,{children:"Number of closed positions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_closed_positions"}),(0,n.jsx)(t.td,{children:"Number of closed positions in the last quarter."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"closed_positions_change"}),(0,n.jsx)(t.td,{children:"Change in the number of closed positions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reduced_positions"}),(0,n.jsx)(t.td,{children:"Number of reduced positions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_reduced_positions"}),(0,n.jsx)(t.td,{children:"Number of reduced positions in the last quarter."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reduced_positions_change"}),(0,n.jsx)(t.td,{children:"Change in the number of reduced positions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_calls"}),(0,n.jsx)(t.td,{children:"Total number of call options contracts traded for Apple Inc. on the specified date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_total_calls"}),(0,n.jsx)(t.td,{children:"Total number of call options contracts traded for Apple Inc. on the previous reporting date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_calls_change"}),(0,n.jsx)(t.td,{children:"Change in the total number of call options contracts traded between the current and previous reporting dates."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_puts"}),(0,n.jsx)(t.td,{children:"Total number of put options contracts traded for Apple Inc. on the specified date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_total_puts"}),(0,n.jsx)(t.td,{children:"Total number of put options contracts traded for Apple Inc. on the previous reporting date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_puts_change"}),(0,n.jsx)(t.td,{children:"Change in the total number of put options contracts traded between the current and previous reporting dates."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"put_call_ratio"}),(0,n.jsx)(t.td,{children:"Put-call ratio, which is the ratio of the total number of put options to call options traded on the specified date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_put_call_ratio"}),(0,n.jsx)(t.td,{children:"Put-call ratio on the previous reporting date."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"put_call_ratio_change"}),(0,n.jsx)(t.td,{children:"Change in the put-call ratio between the current and previous reporting dates."})]})]})]})})})]})}function _(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),a=r(74848);function s(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),a=r(34164),s=r(23104),i=r(56347),o=r(205),d=r(57485),l=r(31682),c=r(70679);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function _(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=u(e),[i,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,h]=_({queryString:r,groupId:a}),[x,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),j=(()=>{const e=l??x;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&d(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=r(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function m(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:h}=(0,i.zy)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=d[r].value;a!==n&&(c(t),o(a))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:p,onClick:u,...s,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,s?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,b.jsx)(m,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function y(e){const t=(0,f.A)();return(0,b.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);