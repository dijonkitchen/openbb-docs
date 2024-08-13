"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71546],{31547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=r(74848),n=r(28453),i=r(18228),a=r(19365);const d={title:"Equity NBBO",description:"Get the National Best Bid and Offer for a given stock"},l=void 0,c={id:"platform/data_models/EquityNBBO",title:"Equity NBBO",description:"Get the National Best Bid and Offer for a given stock",source:"@site/content/platform/data_models/EquityNBBO.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EquityNBBO",permalink:"/platform/data_models/EquityNBBO",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/EquityNBBO.md",tags:[],version:"current",frontMatter:{title:"Equity NBBO",description:"Get the National Best Bid and Offer for a given stock"},sidebar:"tutorialSidebar",previous:{title:"Equity Losers",permalink:"/platform/data_models/EquityLosers"},next:{title:"Equity Ownership",permalink:"/platform/data_models/EquityOwnership"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,s.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Model name"}),(0,s.jsx)(t.th,{children:"Parameters class"}),(0,s.jsx)(t.th,{children:"Data class"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"EquityNBBO"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"EquityNBBOQueryParams"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"EquityNBBOData"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.equity_nbbo import (\nEquityNBBOData,\nEquityNBBOQueryParams,\n)\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol to get data for."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]})})]})}),(0,s.jsx)(a.A,{value:"polygon",label:"polygon",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol to get data for."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of data entries to return. Up to ten million records will be returned. Pagination occurs in groups of 50,000. Remaining limit values will always return 50,000 more records unless it is the last page. High volume tickers will require multiple max requests for a single day's NBBO records. Expect stocks, like SPY, to approach 1GB in size, per day, as a raw CSV. Splitting large requests into chunks is recommended for full-day requests of high-volume symbols."}),(0,s.jsx)(t.td,{children:"50000"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"A specific date to get data for. Use bracketed the timestamp parameters to specify exact time ranges."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp_lt"}),(0,s.jsx)(t.td,{children:"Union[datetime, str]"}),(0,s.jsxs)(t.td,{children:["Query by datetime, less than. Either a date with the format 'YYYY-MM-DD' or a TZ-aware timestamp string, 'YYYY-MM-DDTH:M",":S",".000000000-04:00'. Include all nanoseconds and the 'T' between the day and hour."]}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp_gt"}),(0,s.jsx)(t.td,{children:"Union[datetime, str]"}),(0,s.jsxs)(t.td,{children:["Query by datetime, greater than. Either a date with the format 'YYYY-MM-DD' or a TZ-aware timestamp string, 'YYYY-MM-DDTH:M",":S",".000000000-04:00'. Include all nanoseconds and the 'T' between the day and hour."]}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp_lte"}),(0,s.jsx)(t.td,{children:"Union[datetime, str]"}),(0,s.jsxs)(t.td,{children:["Query by datetime, less than or equal to. Either a date with the format 'YYYY-MM-DD' or a TZ-aware timestamp string, 'YYYY-MM-DDTH:M",":S",".000000000-04:00'. Include all nanoseconds and the 'T' between the day and hour."]}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"timestamp_gte"}),(0,s.jsx)(t.td,{children:"Union[datetime, str]"}),(0,s.jsxs)(t.td,{children:["Query by datetime, greater than or equal to. Either a date with the format 'YYYY-MM-DD' or a TZ-aware timestamp string, 'YYYY-MM-DDTH:M",":S",".000000000-04:00'. Include all nanoseconds and the 'T' between the day and hour."]}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(a.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ask_exchange"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The exchange ID for the ask."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ask"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The last ask price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ask_size"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The ask size. This represents the number of round lot orders at the given ask price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"The normal round lot size is 100 shares."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"An ask size of 2 means there are 200 shares available to purchase at the given ask price."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid_size"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The bid size in round lots."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The last bid price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid_exchange"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The exchange ID for the bid."})]})]})]})}),(0,s.jsx)(a.A,{value:"polygon",label:"polygon",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ask_exchange"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The exchange ID for the ask."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ask"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The last ask price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ask_size"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The ask size. This represents the number of round lot orders at the given ask price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"The normal round lot size is 100 shares."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"An ask size of 2 means there are 200 shares available to purchase at the given ask price."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid_size"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The bid size in round lots."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The last bid price."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bid_exchange"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The exchange ID for the bid."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tape"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The exchange tape."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"conditions"}),(0,s.jsx)(t.td,{children:"Union[str, List[int], List[str]]"}),(0,s.jsx)(t.td,{children:"A list of condition codes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"indicators"}),(0,s.jsx)(t.td,{children:"List[int]"}),(0,s.jsx)(t.td,{children:"A list of indicator codes."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sequence_num"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sequence number represents the sequence in which message events happened. These are increasing and unique per ticker symbol, but will not always be sequential (e.g., 1, 2, 6, 9, 10, 11)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"participant_timestamp"}),(0,s.jsx)(t.td,{children:"datetime"}),(0,s.jsx)(t.td,{children:"The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the quote was actually generated at the exchange."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sip_timestamp"}),(0,s.jsx)(t.td,{children:"datetime"}),(0,s.jsx)(t.td,{children:"The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this quote from the exchange which produced it."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"trf_timestamp"}),(0,s.jsx)(t.td,{children:"datetime"}),(0,s.jsx)(t.td,{children:"The nanosecond accuracy TRF (Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this quote."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,a),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var s=r(96540),n=r(34164),i=r(23104),a=r(56347),d=r(205),l=r(57485),c=r(31682),o=r(70679);function h(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}function u(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const n=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=u(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[c,h]=j({queryString:r,groupId:n}),[m,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,o.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),b=(()=>{const e=c??m;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=r(74848);function y(e){let{className:t,block:r,selectedValue:s,selectValue:d,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:h}=(0,a.zy)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),n=l[r].value;n!==s&&(o(t),d(n))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:x,onClick:u,...i,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,i?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function v(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,f.jsx)(y,{...e,...t}),(0,f.jsx)(g,{...e,...t})]})}function T(e){const t=(0,p.A)();return(0,f.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var s=r(96540);const n={},i=s.createContext(n);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);