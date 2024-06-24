"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51017],{19794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=r(74848),a=r(28453),l=r(94331),i=r(18228),s=r(19365);const o={title:"cones",description:"Calculate realized volatility quantiles over rolling windows of time  using different volatility models. Understand the parameters and their effects,  such as index, quantile values, and is_crypto. Examples and code snippets provided.",keywords:["realized volatility quantiles","rolling windows of time","calculate volatility","parameter data","quantile value","volatility models","standard deviation","Parkinson volatility","Garman-Klass volatility","Hodges-Tompkins volatility","Rogers-Satchell volatility","Yang-Zhang volatility","is_crypto","cones data","code example"]},d=void 0,c={id:"platform/reference/technical/cones",title:"cones",description:"Calculate realized volatility quantiles over rolling windows of time  using different volatility models. Understand the parameters and their effects,  such as index, quantile values, and is_crypto. Examples and code snippets provided.",source:"@site/content/platform/reference/technical/cones.md",sourceDirName:"platform/reference/technical",slug:"/platform/reference/technical/cones",permalink:"/platform/reference/technical/cones",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/technical/cones.md",tags:[],version:"current",frontMatter:{title:"cones",description:"Calculate realized volatility quantiles over rolling windows of time  using different volatility models. Understand the parameters and their effects,  such as index, quantile values, and is_crypto. Examples and code snippets provided.",keywords:["realized volatility quantiles","rolling windows of time","calculate volatility","parameter data","quantile value","volatility models","standard deviation","Parkinson volatility","Garman-Klass volatility","Hodges-Tompkins volatility","Rogers-Satchell volatility","Yang-Zhang volatility","is_crypto","cones data","code example"]},sidebar:"tutorialSidebar",previous:{title:"clenow",permalink:"/platform/reference/technical/clenow"},next:{title:"demark",permalink:"/platform/reference/technical/demark"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{title:"technical/cones - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Calculate the realized volatility quantiles over rolling windows of time."}),"\n",(0,n.jsx)(t.p,{children:"The cones indicator is designed to map out the ebb and flow of price movements through a detailed analysis of\nvolatility quantiles. By examining the range of volatility within specific time frames, it offers a nuanced view of\nmarket behavior, highlighting periods of stability and turbulence."}),"\n",(0,n.jsx)(t.p,{children:"The model for calculating volatility is selectable and can be one of the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Standard deviation"}),"\n",(0,n.jsx)(t.li,{children:"Parkinson"}),"\n",(0,n.jsx)(t.li,{children:"Garman-Klass"}),"\n",(0,n.jsx)(t.li,{children:"Hodges-Tompkins"}),"\n",(0,n.jsx)(t.li,{children:"Rogers-Satchell"}),"\n",(0,n.jsx)(t.li,{children:"Yang-Zhang"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Read more about it in the model parameter description."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Realized Volatility Cones.\nstock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='yfinance')\ncones_data = obb.technical.cones(data=stock_data.results, lower_q=0.25, upper_q=0.75, model='std')\nobb.technical.cones(data=[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}])\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(s.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"List[Data]"}),(0,n.jsx)(t.td,{children:"The data to use for the calculation."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"index"}),(0,n.jsx)(t.td,{children:"str, optional"}),(0,n.jsxs)(t.td,{children:["Index column name to use with ",(0,n.jsx)(t.code,{children:"data"}),', by default "date"']}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lower_q"}),(0,n.jsx)(t.td,{children:"float, optional"}),(0,n.jsx)(t.td,{children:"The lower quantile value for calculations"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"upper_q"}),(0,n.jsx)(t.td,{children:"float, optional"}),(0,n.jsx)(t.td,{children:"The upper quantile value for calculations"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"model"}),(0,n.jsx)(t.td,{children:'Literal["std", "parkinson", "garman_klass", "hodges_tompkins", "rogers_satchell", "yang_zhang"], optional'}),(0,n.jsx)(t.td,{children:"The model used to calculate realized volatility"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_crypto"}),(0,n.jsx)(t.td,{children:"bool, optional"}),(0,n.jsx)(t.td,{children:"Whether the data is crypto or not. If True, volatility is calculated for 365 days instead of 252"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trading_periods"}),(0,n.jsx)(t.td,{children:"Optional[int] [default: 252]"}),(0,n.jsx)(t.td,{children:"Number of trading periods in a year."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[Data]\n        The cones data.\n"})})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var l=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(5260),a=r(74848);function l(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(34164),l=r(23104),i=r(56347),s=r(205),o=r(57485),d=r(31682),c=r(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[d,u]=f({queryString:r,groupId:a}),[m,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=d??m;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,l]),tabValues:l}}var x=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),{pathname:u}=(0,i.zy)(),h=e=>{const t=e.currentTarget,r=d.indexOf(t),a=o[r].value;a!==n&&(c(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:p,onClick:h,...l,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,l?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(g,{...e,...t})]})}function w(e){const t=(0,x.A)();return(0,v.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const a={},l=n.createContext(a);function i(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);