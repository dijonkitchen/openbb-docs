"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86797],{61175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(74848),s=r(28453),i=r(94331),a=r(18228),d=r(19365);const l={title:"nbbo",description:"Learn how to load the National Best Bid and Offer (NBBO) for a specific  equity using the OBB.equity.price.nbbo API. Explore the parameters and data returned  by the query, including ask price, bid price, ask size, bid size, exchange details,  timestamps, and more.",keywords:["Equity Quote","National Best Bid and Offer","specific equity","symbol","provider","polygon","query","limit","date","timestamp","OBBject","results","EquityNBBO","warnings","Chart","Metadata","ask_exchange","ask","ask_size","bid_size","bid","bid_exchange","tape","conditions","indicators","sequence_num","participant_timestamp","sip_timestamp","trf_timestamp","data"]},c=void 0,o={id:"platform/reference/equity/price/nbbo",title:"nbbo",description:"Learn how to load the National Best Bid and Offer (NBBO) for a specific  equity using the OBB.equity.price.nbbo API. Explore the parameters and data returned  by the query, including ask price, bid price, ask size, bid size, exchange details,  timestamps, and more.",source:"@site/content/platform/reference/equity/price/nbbo.md",sourceDirName:"platform/reference/equity/price",slug:"/platform/reference/equity/price/nbbo",permalink:"/docs/platform/reference/equity/price/nbbo",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/price/nbbo.md",tags:[],version:"current",frontMatter:{title:"nbbo",description:"Learn how to load the National Best Bid and Offer (NBBO) for a specific  equity using the OBB.equity.price.nbbo API. Explore the parameters and data returned  by the query, including ask price, bid price, ask size, bid size, exchange details,  timestamps, and more.",keywords:["Equity Quote","National Best Bid and Offer","specific equity","symbol","provider","polygon","query","limit","date","timestamp","OBBject","results","EquityNBBO","warnings","Chart","Metadata","ask_exchange","ask","ask_size","bid_size","bid","bid_exchange","tape","conditions","indicators","sequence_num","participant_timestamp","sip_timestamp","trf_timestamp","data"]},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/docs/platform/reference/equity/price/historical"},next:{title:"performance",permalink:"/docs/platform/reference/equity/price/performance"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"equity/price/nbbo - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get the National Best Bid and Offer for a given stock."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.price.nbbo(symbol='AAPL', provider='polygon')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['polygon']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: p, o, l, y, g, o, n."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(d.A,{value:"polygon",label:"polygon",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['polygon']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: p, o, l, y, g, o, n."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return. Up to ten million records will be returned. Pagination occurs in groups of 50,000. Remaining limit values will always return 50,000 more records unless it is the last page. High volume tickers will require multiple max requests for a single day's NBBO records. Expect stocks, like SPY, to approach 1GB in size, per day, as a raw CSV. Splitting large requests into chunks is recommended for full-day requests of high-volume symbols."}),(0,n.jsx)(t.td,{children:"50000"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"A specific date to get data for. Use bracketed the timestamp parameters to specify exact time ranges."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp_lt"}),(0,n.jsx)(t.td,{children:"Union[datetime, str]"}),(0,n.jsxs)(t.td,{children:["Query by datetime, less than. Either a date with the format 'YYYY-MM-DD' or a TZ-aware timestamp string, 'YYYY-MM-DDTH:M",":S",".000000000-04:00'. Include all nanoseconds and the 'T' between the day and hour."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp_gt"}),(0,n.jsx)(t.td,{children:"Union[datetime, str]"}),(0,n.jsxs)(t.td,{children:["Query by datetime, greater than. Either a date with the format 'YYYY-MM-DD' or a TZ-aware timestamp string, 'YYYY-MM-DDTH:M",":S",".000000000-04:00'. Include all nanoseconds and the 'T' between the day and hour."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp_lte"}),(0,n.jsx)(t.td,{children:"Union[datetime, str]"}),(0,n.jsxs)(t.td,{children:["Query by datetime, less than or equal to. Either a date with the format 'YYYY-MM-DD' or a TZ-aware timestamp string, 'YYYY-MM-DDTH:M",":S",".000000000-04:00'. Include all nanoseconds and the 'T' between the day and hour."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timestamp_gte"}),(0,n.jsx)(t.td,{children:"Union[datetime, str]"}),(0,n.jsxs)(t.td,{children:["Query by datetime, greater than or equal to. Either a date with the format 'YYYY-MM-DD' or a TZ-aware timestamp string, 'YYYY-MM-DDTH:M",":S",".000000000-04:00'. Include all nanoseconds and the 'T' between the day and hour."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[EquityNBBO]\n        Serializable results.\n\n    provider : Optional[Literal['polygon']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ask_exchange"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The exchange ID for the ask."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ask"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The last ask price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ask_size"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The ask size. This represents the number of round lot orders at the given ask price.     The normal round lot size is 100 shares.     An ask size of 2 means there are 200 shares available to purchase at the given ask price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bid_size"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The bid size in round lots."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bid"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The last bid price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bid_exchange"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The exchange ID for the bid."})]})]})]})}),(0,n.jsx)(d.A,{value:"polygon",label:"polygon",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ask_exchange"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The exchange ID for the ask."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ask"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The last ask price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ask_size"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The ask size. This represents the number of round lot orders at the given ask price.     The normal round lot size is 100 shares.     An ask size of 2 means there are 200 shares available to purchase at the given ask price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bid_size"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The bid size in round lots."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bid"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The last bid price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bid_exchange"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The exchange ID for the bid."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tape"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The exchange tape."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"conditions"}),(0,n.jsx)(t.td,{children:"Union[str, List[int], List[str]]"}),(0,n.jsx)(t.td,{children:"A list of condition codes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"indicators"}),(0,n.jsx)(t.td,{children:"List[int]"}),(0,n.jsx)(t.td,{children:"A list of indicator codes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sequence_num"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The sequence number represents the sequence in which message events happened. These are increasing and unique per ticker symbol, but will not always be sequential (e.g., 1, 2, 6, 9, 10, 11)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"participant_timestamp"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"The nanosecond accuracy Participant/Exchange Unix Timestamp. This is the timestamp of when the quote was actually generated at the exchange."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sip_timestamp"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"The nanosecond accuracy SIP Unix Timestamp. This is the timestamp of when the SIP received this quote from the exchange which produced it."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trf_timestamp"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"The nanosecond accuracy TRF (Trade Reporting Facility) Unix Timestamp. This is the timestamp of when the trade reporting facility received this quote."})]})]})]})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),s=r(34164),i=r(23104),a=r(56347),d=r(205),l=r(57485),c=r(31682),o=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=p({queryString:r,groupId:s}),[m,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),b=(()=>{const e=c??m;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:h}=(0,a.zy)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=l[r].value;s!==n&&(o(t),d(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:x,onClick:u,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(y,{...e,...t}),(0,f.jsx)(g,{...e,...t})]})}function T(e){const t=(0,j.A)();return(0,f.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);