"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21817],{71519:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(74848),a=r(28453),s=r(94331),o=r(18228),l=r(19365);const i={title:"PEERS",description:"Learn how to compare and analyze equity peers with the `obb.equity.compare.peers` function. This function allows you to retrieve a list of company peers based on symbol, sector, exchange, and market cap. Understand the parameters, returns, and data structure provided by this function.",keywords:["equity peers","company peers","compare peers","symbol","provider","parameter","returns","data","list of peers","sector","exchange","market cap","serializable results","chart object","metadata","command execution","warnings"]},c=void 0,u={id:"excel/reference/equity/compare/peers",title:"PEERS",description:"Learn how to compare and analyze equity peers with the `obb.equity.compare.peers` function. This function allows you to retrieve a list of company peers based on symbol, sector, exchange, and market cap. Understand the parameters, returns, and data structure provided by this function.",source:"@site/content/excel/reference/equity/compare/peers.md",sourceDirName:"excel/reference/equity/compare",slug:"/excel/reference/equity/compare/peers",permalink:"/excel/reference/equity/compare/peers",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/equity/compare/peers.md",tags:[],version:"current",frontMatter:{title:"PEERS",description:"Learn how to compare and analyze equity peers with the `obb.equity.compare.peers` function. This function allows you to retrieve a list of company peers based on symbol, sector, exchange, and market cap. Understand the parameters, returns, and data structure provided by this function.",keywords:["equity peers","company peers","compare peers","symbol","provider","parameter","returns","data","list of peers","sector","exchange","market cap","serializable results","chart object","metadata","command execution","warnings"]},sidebar:"tutorialSidebar",previous:{title:"EQUITY.COMPARE",permalink:"/excel/reference/equity/compare/"},next:{title:"EQUITY.ESTIMATES",permalink:"/excel/reference/equity/estimates/"}},d={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function h(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"EQUITY.COMPARE.PEERS | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get the closest peers for a given company.  Peers consist of companies trading on the same exchange, operating within the same sector and with comparable market capitalizations."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.COMPARE.PEERS(symbol)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.COMPARE.PEERS("AAPL")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for."})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(o.A,{children:(0,n.jsx)(l.A,{value:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"peers_list"}),(0,n.jsx)(t.td,{children:"A list of equity peers based on sector, exchange and market cap."})]})})]})})})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),a=r(74848);function s(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(34164),s=r(23104),o=r(56347),l=r(205),i=r(57485),c=r(31682),u=r(89466);function d(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:r,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),x=(()=>{const e=c??b;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),{pathname:d}=(0,o.zy)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==n&&(u(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:h,onClick:p,...s,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,s?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&d.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&d.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=b(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(g,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,y.jsx)(j,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);