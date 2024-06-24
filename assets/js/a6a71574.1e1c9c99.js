"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65153],{26153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var n=r(74848),a=r(28453),o=r(94331),l=r(18228),s=r(19365);const i={title:"capm",description:"Learn about the Capital Asset Pricing Model (CAPM), a widely-used finance  theory for determining an investment's expected return based on its risk. Understand  how CAPM can be used as an investment strategy to evaluate and select securities.",keywords:["capital asset pricing model","CAPM","finance","investment strategy"]},c=void 0,u={id:"platform/reference/quantitative/capm",title:"capm",description:"Learn about the Capital Asset Pricing Model (CAPM), a widely-used finance  theory for determining an investment's expected return based on its risk. Understand  how CAPM can be used as an investment strategy to evaluate and select securities.",source:"@site/content/platform/reference/quantitative/capm.md",sourceDirName:"platform/reference/quantitative",slug:"/platform/reference/quantitative/capm",permalink:"/docs/platform/reference/quantitative/capm",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/quantitative/capm.md",tags:[],version:"current",frontMatter:{title:"capm",description:"Learn about the Capital Asset Pricing Model (CAPM), a widely-used finance  theory for determining an investment's expected return based on its risk. Understand  how CAPM can be used as an investment strategy to evaluate and select securities.",keywords:["capital asset pricing model","CAPM","finance","investment strategy"]},sidebar:"tutorialSidebar",previous:{title:"variance",permalink:"/docs/platform/reference/quantitative/rolling/variance"},next:{title:"normality",permalink:"/docs/platform/reference/quantitative/normality"}},d={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"quantitative/capm - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get Capital Asset Pricing Model (CAPM)."}),"\n",(0,n.jsx)(t.p,{children:"CAPM offers a streamlined way to assess the expected return on an investment while accounting for its risk relative\nto the market. It's a cornerstone of modern financial theory that helps investors understand the trade-off between\nrisk and return, guiding more informed investment choices."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get Capital Asset Pricing Model (CAPM).\nstock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp').to_df()\nobb.quantitative.capm(data=stock_data, target='close')\nobb.quantitative.capm(target='close', data=[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}, {'date': '2023-01-07', 'open': 128.33, 'high': 140.0, 'low': 116.67, 'close': 134.17, 'volume': 11666.67}, {'date': '2023-01-08', 'open': 125.71, 'high': 137.14, 'low': 114.29, 'close': 131.43, 'volume': 11428.57}, {'date': '2023-01-09', 'open': 123.75, 'high': 135.0, 'low': 112.5, 'close': 129.38, 'volume': 11250.0}, {'date': '2023-01-10', 'open': 122.22, 'high': 133.33, 'low': 111.11, 'close': 127.78, 'volume': 11111.11}, {'date': '2023-01-11', 'open': 121.0, 'high': 132.0, 'low': 110.0, 'close': 126.5, 'volume': 11000.0}, {'date': '2023-01-12', 'open': 120.0, 'high': 130.91, 'low': 109.09, 'close': 125.45, 'volume': 10909.09}, {'date': '2023-01-13', 'open': 119.17, 'high': 130.0, 'low': 108.33, 'close': 124.58, 'volume': 10833.33}, {'date': '2023-01-14', 'open': 118.46, 'high': 129.23, 'low': 107.69, 'close': 123.85, 'volume': 10769.23}, {'date': '2023-01-15', 'open': 117.86, 'high': 128.57, 'low': 107.14, 'close': 123.21, 'volume': 10714.29}, {'date': '2023-01-16', 'open': 117.33, 'high': 128.0, 'low': 106.67, 'close': 122.67, 'volume': 10666.67}, {'date': '2023-01-17', 'open': 116.88, 'high': 127.5, 'low': 106.25, 'close': 122.19, 'volume': 10625.0}, {'date': '2023-01-18', 'open': 116.47, 'high': 127.06, 'low': 105.88, 'close': 121.76, 'volume': 10588.24}, {'date': '2023-01-19', 'open': 116.11, 'high': 126.67, 'low': 105.56, 'close': 121.39, 'volume': 10555.56}, {'date': '2023-01-20', 'open': 115.79, 'high': 126.32, 'low': 105.26, 'close': 121.05, 'volume': 10526.32}, {'date': '2023-01-21', 'open': 115.5, 'high': 126.0, 'low': 105.0, 'close': 120.75, 'volume': 10500.0}, {'date': '2023-01-22', 'open': 115.24, 'high': 125.71, 'low': 104.76, 'close': 120.48, 'volume': 10476.19}, {'date': '2023-01-23', 'open': 115.0, 'high': 125.45, 'low': 104.55, 'close': 120.23, 'volume': 10454.55}, {'date': '2023-01-24', 'open': 114.78, 'high': 125.22, 'low': 104.35, 'close': 120.0, 'volume': 10434.78}, {'date': '2023-01-25', 'open': 114.58, 'high': 125.0, 'low': 104.17, 'close': 119.79, 'volume': 10416.67}, {'date': '2023-01-26', 'open': 114.4, 'high': 124.8, 'low': 104.0, 'close': 119.6, 'volume': 10400.0}, {'date': '2023-01-27', 'open': 114.23, 'high': 124.62, 'low': 103.85, 'close': 119.42, 'volume': 10384.62}, {'date': '2023-01-28', 'open': 114.07, 'high': 124.44, 'low': 103.7, 'close': 119.26, 'volume': 10370.37}, {'date': '2023-01-29', 'open': 113.93, 'high': 124.29, 'low': 103.57, 'close': 119.11, 'volume': 10357.14}, {'date': '2023-01-30', 'open': 113.79, 'high': 124.14, 'low': 103.45, 'close': 118.97, 'volume': 10344.83}, {'date': '2023-01-31', 'open': 113.67, 'high': 124.0, 'low': 103.33, 'close': 118.83, 'volume': 10333.33}, {'date': '2023-02-01', 'open': 113.55, 'high': 123.87, 'low': 103.23, 'close': 118.71, 'volume': 10322.58}])\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(s.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"List[Data]"}),(0,n.jsx)(t.td,{children:"Time series data."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Target column name."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]})]})]})})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : CAPMModel\n        CAPM model summary.\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(5260),a=r(74848);function o(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(96540),a=r(34164),o=r(23104),l=r(56347),s=r(205),i=r(57485),c=r(31682),u=r(89466);function d(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,d]=m({queryString:r,groupId:a}),[f,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=r(74848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),{pathname:d}=(0,l.zy)(),h=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==n&&(u(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:p,onClick:h,...o,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,o?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&d.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&d.startsWith("/terminal")}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function j(e){const t=(0,v.A)();return(0,g.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>s});var n=r(96540);const a={},o=n.createContext(a);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);