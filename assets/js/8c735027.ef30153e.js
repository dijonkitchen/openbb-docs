"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49244],{33525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=n(74848),a=n(28453),s=n(94331),l=n(18228),o=n(19365);const i={title:"macd",description:"Learn about the Moving Average Convergence Divergence (MACD), a powerful  technical indicator used in financial analysis. Understand how the MACD signals  trend changes, identifies overbought and oversold conditions, and generates buy/sell  signals. Explore the parameters and see examples of how to use this indicator in  Python.",keywords:["Moving Average Convergence Divergence","MACD","Exponential Moving Averages","Signal line","trend changes","overbought conditions","oversold conditions","divergence with price","buy signal","sell signal","zero line","parameters","data","target column","fast EMA","slow EMA","signal EMA","calculated data","examples"]},c=void 0,d={id:"platform/reference/technical/macd",title:"macd",description:"Learn about the Moving Average Convergence Divergence (MACD), a powerful  technical indicator used in financial analysis. Understand how the MACD signals  trend changes, identifies overbought and oversold conditions, and generates buy/sell  signals. Explore the parameters and see examples of how to use this indicator in  Python.",source:"@site/content/platform/reference/technical/macd.md",sourceDirName:"platform/reference/technical",slug:"/platform/reference/technical/macd",permalink:"/platform/reference/technical/macd",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/technical/macd.md",tags:[],version:"current",frontMatter:{title:"macd",description:"Learn about the Moving Average Convergence Divergence (MACD), a powerful  technical indicator used in financial analysis. Understand how the MACD signals  trend changes, identifies overbought and oversold conditions, and generates buy/sell  signals. Explore the parameters and see examples of how to use this indicator in  Python.",keywords:["Moving Average Convergence Divergence","MACD","Exponential Moving Averages","Signal line","trend changes","overbought conditions","oversold conditions","divergence with price","buy signal","sell signal","zero line","parameters","data","target column","fast EMA","slow EMA","signal EMA","calculated data","examples"]},sidebar:"tutorialSidebar",previous:{title:"kc",permalink:"/platform/reference/technical/kc"},next:{title:"obv",permalink:"/platform/reference/technical/obv"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"technical/macd - Reference | OpenBB Platform Docs"}),"\n","\n",(0,r.jsx)(t.p,{children:"Calculate the Moving Average Convergence Divergence (MACD)."}),"\n",(0,r.jsx)(t.p,{children:"Difference between two Exponential Moving Averages. The Signal line is an\nExponential Moving Average of the MACD."}),"\n",(0,r.jsx)(t.p,{children:"The MACD signals trend changes and indicates the start of new trend direction.\nHigh values indicate overbought conditions, low values indicate oversold conditions.\nDivergence with the price indicates an end to the current trend, especially if the\nMACD is at extreme high or low values. When the MACD line crosses above the\nsignal line a buy signal is generated. When the MACD crosses below the signal line a\nsell signal is generated. To confirm the signal, the MACD should be above zero for a buy,\nand below zero for a sell."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get the Moving Average Convergence Divergence (MACD).\nstock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp')\nmacd_data = obb.technical.macd(data=stock_data.results, target='close', fast=12, slow=26, signal=9)\n# Example with mock data.\nobb.technical.macd(fast=2, slow=3, signal=1, data=[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}])\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(l.A,{children:(0,r.jsx)(o.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"List[Data]"}),(0,r.jsx)(t.td,{children:"List of data to be used for the calculation."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"target"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Target column name."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fast"}),(0,r.jsx)(t.td,{children:"int, optional"}),(0,r.jsx)(t.td,{children:"Number of periods for the fast EMA, by default 12."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"slow"}),(0,r.jsx)(t.td,{children:"int, optional"}),(0,r.jsx)(t.td,{children:"Number of periods for the slow EMA, by default 26."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"signal"}),(0,r.jsx)(t.td,{children:"int, optional"}),(0,r.jsx)(t.td,{children:"Number of periods for the signal EMA, by default 9."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]})]})]})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[Data]\n        The calculated data.\n"})})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),a=n(74848);function s(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(34164),s=n(23104),l=n(56347),o=n(205),i=n(57485),c=n(31682),d=n(89466);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=f({queryString:n,groupId:a}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),m=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),{pathname:u}=(0,l.zy)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(d(t),o(a))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:p,onClick:h,...s,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,s?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&u.startsWith("/terminal")}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,v.jsx)(y,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);