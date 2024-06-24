"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6174],{43307:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=r(74848),n=r(28453),l=r(94331),s=r(18228),o=r(19365);const i={title:"atr",description:"Learn about the Average True Range indicator used to measure volatility  in financial data and how to apply it with examples.",keywords:["Average True Range","volatility measurement","gaps","limit moves","data","index column","length","moving average mode","difference period","offset","OBBject","List","examples"]},d=void 0,c={id:"platform/reference/technical/atr",title:"atr",description:"Learn about the Average True Range indicator used to measure volatility  in financial data and how to apply it with examples.",source:"@site/content/platform/reference/technical/atr.md",sourceDirName:"platform/reference/technical",slug:"/platform/reference/technical/atr",permalink:"/docs/platform/reference/technical/atr",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/technical/atr.md",tags:[],version:"current",frontMatter:{title:"atr",description:"Learn about the Average True Range indicator used to measure volatility  in financial data and how to apply it with examples.",keywords:["Average True Range","volatility measurement","gaps","limit moves","data","index column","length","moving average mode","difference period","offset","OBBject","List","examples"]},sidebar:"tutorialSidebar",previous:{title:"aroon",permalink:"/docs/platform/reference/technical/aroon"},next:{title:"bbands",permalink:"/docs/platform/reference/technical/bbands"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.A,{title:"technical/atr - Reference | OpenBB Platform Docs"}),"\n","\n",(0,a.jsx)(t.p,{children:"Calculate the Average True Range."}),"\n",(0,a.jsx)(t.p,{children:"Used to measure volatility, especially volatility caused by gaps or limit moves.\nThe ATR metric helps understand how much the values in your data change on average,\ngiving insights into the stability or unpredictability during a certain period.\nIt's particularly useful for spotting trends of increase or decrease in variations,\nwithout getting into technical trading details.\nThe method considers not just the day-to-day changes but also accounts for any\nsudden jumps or drops, ensuring you get a comprehensive view of movement."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get the Average True Range.\nstock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp')\natr_data = obb.technical.atr(data=stock_data.results)\nobb.technical.atr(length=2, data=[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}])\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(o.A,{value:"standard",label:"standard",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"data"}),(0,a.jsx)(t.td,{children:"List[Data]"}),(0,a.jsx)(t.td,{children:"List of data to apply the indicator to."}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"index"}),(0,a.jsx)(t.td,{children:"str, optional"}),(0,a.jsx)(t.td,{children:'Index column name, by default "date"'}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"length"}),(0,a.jsx)(t.td,{children:"PositiveInt, optional"}),(0,a.jsx)(t.td,{children:"It's period, by default 14"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"mamode"}),(0,a.jsx)(t.td,{children:'Literal["rma", "ema", "sma", "wma"], optional'}),(0,a.jsx)(t.td,{children:'Moving average mode, by default "rma"'}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"drift"}),(0,a.jsx)(t.td,{children:"NonNegativeInt, optional"}),(0,a.jsx)(t.td,{children:"The difference period, by default 1"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"offset"}),(0,a.jsx)(t.td,{children:"int, optional"}),(0,a.jsx)(t.td,{children:"How many periods to offset the result, by default 0"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]})]})]})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[Data]\n        List of data with the indicator applied.\n"})})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var l=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var a=r(5260),n=r(74848);function l(e){let{title:t}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),n=r(34164),l=r(23104),s=r(56347),o=r(205),i=r(57485),d=r(31682),c=r(89466);function u(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[d,u]=m({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),x=(()=>{const e=d??f;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var b=r(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=r(74848);function g(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),{pathname:u}=(0,s.zy)(),h=e=>{const t=e.currentTarget,r=d.indexOf(t),n=i[r].value;n!==a&&(c(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>d.push(e),onKeyDown:p,onClick:h,...l,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,l?.className,{"border-b-2 pointer-events-none":a===t,"border-b-2 text-[#669dcb] border-[#669dcb]":a===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var a=r(96540);const n={},l=a.createContext(n);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);