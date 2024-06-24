"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23736],{68516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=n(74848),a=n(28453),o=n(94331),s=n(18228),l=n(19365);const i={title:"aroon",description:"Learn about the Aroon Indicator, a trend indicator in technical analysis.  Understand how the Aroon Up and Down lines can help identify upward and downward  trends, and how to calculate and use the Aroon Indicator. Includes examples and  parameters.",keywords:["Aroon Indicator","Aroon Up and Down","Aroon Indicator explanation","trend indicator","technical analysis","Aroon Indicator usage","Aroon Indicator examples","Aroon Indicator parameters","Aroon Indicator calculation"]},d=void 0,c={id:"platform/reference/technical/aroon",title:"aroon",description:"Learn about the Aroon Indicator, a trend indicator in technical analysis.  Understand how the Aroon Up and Down lines can help identify upward and downward  trends, and how to calculate and use the Aroon Indicator. Includes examples and  parameters.",source:"@site/content/platform/reference/technical/aroon.md",sourceDirName:"platform/reference/technical",slug:"/platform/reference/technical/aroon",permalink:"/platform/reference/technical/aroon",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/technical/aroon.md",tags:[],version:"current",frontMatter:{title:"aroon",description:"Learn about the Aroon Indicator, a trend indicator in technical analysis.  Understand how the Aroon Up and Down lines can help identify upward and downward  trends, and how to calculate and use the Aroon Indicator. Includes examples and  parameters.",keywords:["Aroon Indicator","Aroon Up and Down","Aroon Indicator explanation","trend indicator","technical analysis","Aroon Indicator usage","Aroon Indicator examples","Aroon Indicator parameters","Aroon Indicator calculation"]},sidebar:"tutorialSidebar",previous:{title:"adx",permalink:"/platform/reference/technical/adx"},next:{title:"atr",permalink:"/platform/reference/technical/atr"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"technical/aroon - Reference | OpenBB Platform Docs"}),"\n","\n",(0,r.jsx)(t.p,{children:"Calculate the Aroon Indicator."}),"\n",(0,r.jsx)(t.p,{children:'The word aroon is Sanskrit for "dawn\'s early light." The Aroon\nindicator attempts to show when a new trend is dawning. The indicator consists\nof two lines (Up and Down) that measure how long it has been since the highest\nhigh/lowest low has occurred within an n period range.'}),"\n",(0,r.jsx)(t.p,{children:"When the Aroon Up is staying between 70 and 100 then it indicates an upward trend.\nWhen the Aroon Down is staying between 70 and 100 then it indicates an downward trend.\nA strong upward trend is indicated when the Aroon Up is above 70 while the Aroon Down is below 30.\nLikewise, a strong downward trend is indicated when the Aroon Down is above 70 while\nthe Aroon Up is below 30. Also look for crossovers. When the Aroon Down crosses above\nthe Aroon Up, it indicates a weakening of the upward trend (and vice versa)."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get the Chande Momentum Oscillator.\nstock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp')\naaron_data = obb.technical.aroon(data=stock_data.results, length=25, scalar=100)\nobb.technical.aroon(length=2, data=[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}])\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(l.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"List[Data]"}),(0,r.jsx)(t.td,{children:"List of data to be used for the calculation."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"index"}),(0,r.jsx)(t.td,{children:"str, optional"}),(0,r.jsxs)(t.td,{children:["Index column name to use with ",(0,r.jsx)(t.code,{children:"data"}),', by default "date".']}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"length"}),(0,r.jsx)(t.td,{children:"int, optional"}),(0,r.jsx)(t.td,{children:"Number of periods to be used for the calculation, by default 25."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"scalar"}),(0,r.jsx)(t.td,{children:"float, optional"}),(0,r.jsx)(t.td,{children:"Scalar to be used for the calculation, by default 100."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]})]})]})})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[Data]\n        The calculated data.\n"})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(5260),a=n(74848);function o(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(34164),o=n(23104),s=n(56347),l=n(205),i=n(57485),d=n(31682),c=n(70679);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,u]=b({queryString:n,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),x=(()=>{const e=d??f;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=n(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var w=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),{pathname:u}=(0,s.zy)(),h=e=>{const t=e.currentTarget,n=d.indexOf(t),a=i[n].value;a!==r&&(c(t),l(a))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:p,onClick:h,...o,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,o?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&u.startsWith("/terminal")}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,w.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,w.jsx)(v,{...e,...t}),(0,w.jsx)(g,{...e,...t})]})}function y(e){const t=(0,m.A)();return(0,w.jsx)(j,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);