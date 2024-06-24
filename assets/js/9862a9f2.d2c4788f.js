"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96214],{46537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>_,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var a=r(74848),n=r(28453),s=r(18228),l=r(19365);const i={title:"SP500 Multiples",description:"Get historical S&P 500 multiples and Shiller PE ratios"},d=void 0,o={id:"platform/data_models/SP500Multiples",title:"SP500 Multiples",description:"Get historical S&P 500 multiples and Shiller PE ratios",source:"@site/content/platform/data_models/SP500Multiples.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/SP500Multiples",permalink:"/platform/data_models/SP500Multiples",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/SP500Multiples.md",tags:[],version:"current",frontMatter:{title:"SP500 Multiples",description:"Get historical S&P 500 multiples and Shiller PE ratios"},sidebar:"tutorialSidebar",previous:{title:"Sonia",permalink:"/platform/data_models/SONIA"},next:{title:"STIR",permalink:"/platform/data_models/STIR"}},c={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,a.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Model name"}),(0,a.jsx)(t.th,{children:"Parameters class"}),(0,a.jsx)(t.th,{children:"Data class"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"SP500Multiples"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"SP500MultiplesQueryParams"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"SP500MultiplesData"})})]})})]}),"\n",(0,a.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.sp500_multiples import (\nSP500MultiplesData,\nSP500MultiplesQueryParams,\n)\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"standard",label:"standard",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"series_name"}),(0,a.jsx)(t.td,{children:"Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter']"}),(0,a.jsx)(t.td,{children:"The name of the series. Defaults to 'pe_month'."}),(0,a.jsx)(t.td,{children:"pe_month"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"start_date"}),(0,a.jsx)(t.td,{children:"Union[date, str]"}),(0,a.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"end_date"}),(0,a.jsx)(t.td,{children:"Union[date, str]"}),(0,a.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"provider"}),(0,a.jsx)(t.td,{children:"Literal['nasdaq']"}),(0,a.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: n, a, s, d, a, q."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]})]})]})}),(0,a.jsx)(l.A,{value:"nasdaq",label:"nasdaq",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"series_name"}),(0,a.jsx)(t.td,{children:"Literal['shiller_pe_month', 'shiller_pe_year', 'pe_year', 'pe_month', 'dividend_year', 'dividend_month', 'dividend_growth_quarter', 'dividend_growth_year', 'dividend_yield_year', 'dividend_yield_month', 'earnings_year', 'earnings_month', 'earnings_growth_year', 'earnings_growth_quarter', 'real_earnings_growth_year', 'real_earnings_growth_quarter', 'earnings_yield_year', 'earnings_yield_month', 'real_price_year', 'real_price_month', 'inflation_adjusted_price_year', 'inflation_adjusted_price_month', 'sales_year', 'sales_quarter', 'sales_growth_year', 'sales_growth_quarter', 'real_sales_year', 'real_sales_quarter', 'real_sales_growth_year', 'real_sales_growth_quarter', 'price_to_sales_year', 'price_to_sales_quarter', 'price_to_book_value_year', 'price_to_book_value_quarter', 'book_value_year', 'book_value_quarter']"}),(0,a.jsx)(t.td,{children:"The name of the series. Defaults to 'pe_month'."}),(0,a.jsx)(t.td,{children:"pe_month"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"start_date"}),(0,a.jsx)(t.td,{children:"Union[date, str]"}),(0,a.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"end_date"}),(0,a.jsx)(t.td,{children:"Union[date, str]"}),(0,a.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"provider"}),(0,a.jsx)(t.td,{children:"Literal['nasdaq']"}),(0,a.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: n, a, s, d, a, q."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"transform"}),(0,a.jsx)(t.td,{children:"Literal['diff', 'rdiff', 'cumul', 'normalize']"}),(0,a.jsx)(t.td,{children:"Transform the data as difference, percent change, cumulative, or normalize."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"collapse"}),(0,a.jsx)(t.td,{children:"Literal['daily', 'weekly', 'monthly', 'quarterly', 'annual']"}),(0,a.jsx)(t.td,{children:"Collapse the frequency of the time series."}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"standard",label:"standard",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"date"}),(0,a.jsx)(t.td,{children:"date"}),(0,a.jsx)(t.td,{children:"The date of the data."})]})})]})}),(0,a.jsx)(l.A,{value:"nasdaq",label:"nasdaq",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"date"}),(0,a.jsx)(t.td,{children:"date"}),(0,a.jsx)(t.td,{children:"The date of the data."})]})})]})})]})]})}function _(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,l),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>g});var a=r(96540),n=r(34164),s=r(23104),l=r(56347),i=r(205),d=r(57485),o=r(31682),c=r(89466);function h(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function u(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function _(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=u(e),[l,d]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!_({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,h]=p({queryString:r,groupId:n}),[x,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),j=(()=>{const e=o??x;return _({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{j&&d(j)}),[j]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!_({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,s]),tabValues:s}}var m=r(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=r(74848);function b(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:h}=(0,l.zy)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),n=d[r].value;n!==a&&(c(t),i(n))},_=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:_,onClick:u,...s,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,s?.className,{"border-b-2 pointer-events-none":a===t,"border-b-2 text-[#669dcb] border-[#669dcb]":a===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function v(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...e,...t}),(0,f.jsx)(y,{...e,...t})]})}function g(e){const t=(0,m.A)();return(0,f.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var a=r(96540);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);