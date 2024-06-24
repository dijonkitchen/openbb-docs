"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59585],{66895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var a=r(74848),n=r(28453),s=r(94331),l=r(18228),i=r(19365);const d={title:"MARKET",description:"Learn how to retrieve historical market indices data using various data providers and query parameters. Understand the available parameters and return values, such as symbol, start date, end date, provider, interval, timeseries, timespan, sort order, limit, adjusted, multiplier, chart, metadata, date, open price, high price, low price, close price, volume, calls volume, puts volume, options volume, adjusted close price, unadjusted volume, change, change percent, label, change over time, and transactions.",keywords:["Historical Market Indices","market data","symbol","start date","end date","data provider","query","interval","timeseries","timespan","sort order","limit","adjusted","multiplier","chart","metadata","date","open price","high price","low price","close price","volume","calls volume","puts volume","options volume","adjusted close price","unadjusted volume","change","change percent","label","change over time","transactions"]},o=void 0,c={id:"excel/reference/index/market",title:"MARKET",description:"Learn how to retrieve historical market indices data using various data providers and query parameters. Understand the available parameters and return values, such as symbol, start date, end date, provider, interval, timeseries, timespan, sort order, limit, adjusted, multiplier, chart, metadata, date, open price, high price, low price, close price, volume, calls volume, puts volume, options volume, adjusted close price, unadjusted volume, change, change percent, label, change over time, and transactions.",source:"@site/content/excel/reference/index/market.md",sourceDirName:"excel/reference/index",slug:"/excel/reference/index/market",permalink:"/excel/reference/index/market",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/index/market.md",tags:[],version:"current",frontMatter:{title:"MARKET",description:"Learn how to retrieve historical market indices data using various data providers and query parameters. Understand the available parameters and return values, such as symbol, start date, end date, provider, interval, timeseries, timespan, sort order, limit, adjusted, multiplier, chart, metadata, date, open price, high price, low price, close price, volume, calls volume, puts volume, options volume, adjusted close price, unadjusted volume, change, change percent, label, change over time, and transactions.",keywords:["Historical Market Indices","market data","symbol","start date","end date","data provider","query","interval","timeseries","timespan","sort order","limit","adjusted","multiplier","chart","metadata","date","open price","high price","low price","close price","volume","calls volume","puts volume","options volume","adjusted close price","unadjusted volume","change","change percent","label","change over time","transactions"]},sidebar:"tutorialSidebar",previous:{title:"INDEX",permalink:"/excel/reference/index/"},next:{title:"NEWS",permalink:"/excel/reference/news/"}},u={},h=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"INDEX.MARKET | OpenBB Add-in for Excel Docs"}),"\n",(0,a.jsx)(t.p,{children:"Get Historical Market Indices."}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-excel",children:"=OBB.INDEX.MARKET(symbol,[start_date],[end_date],[interval])\n"})}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-excel",children:'=OBB.INDEX.MARKET("^IBEX")\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Required"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"symbol"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"Text"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"Symbol to get data for. Multiple comma separated items allowed."})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"True"})})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"start_date"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"end_date"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"interval"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"Time interval of the data to return."}),(0,a.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n","\n",(0,a.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,a.jsx)(l.A,{children:(0,a.jsx)(i.A,{value:"fmp",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"date"}),(0,a.jsx)(t.td,{children:"The date of the data."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"open"}),(0,a.jsx)(t.td,{children:"The open price."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"high"}),(0,a.jsx)(t.td,{children:"The high price."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"low"}),(0,a.jsx)(t.td,{children:"The low price."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"close"}),(0,a.jsx)(t.td,{children:"The close price."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"volume"}),(0,a.jsx)(t.td,{children:"The trading volume."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"vwap"}),(0,a.jsx)(t.td,{children:"Volume Weighted Average Price over the period."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"change"}),(0,a.jsx)(t.td,{children:"Change in the price from the previous close."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"changeOverTime"}),(0,a.jsx)(t.td,{children:"Change in the price from the previous close, as a normalized percent."})]})]})]})})})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,l),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(5260),n=r(74848);function s(e){let{title:t}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),n=r(34164),s=r(23104),l=r(56347),i=r(205),d=r(57485),o=r(31682),c=r(89466);function u(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[l,d]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[o,u]=m({queryString:r,groupId:n}),[x,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),b=(()=>{const e=o??x;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&d(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function f(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:u}=(0,l.zy)(),h=e=>{const t=e.currentTarget,r=o.indexOf(t),n=d[r].value;n!==a&&(c(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:p,onClick:h,...s,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,s?.className,{"border-b-2 pointer-events-none":a===t,"border-b-2 text-[#669dcb] border-[#669dcb]":a===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,j.jsx)(f,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function w(e){const t=(0,v.A)();return(0,j.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var a=r(96540);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);