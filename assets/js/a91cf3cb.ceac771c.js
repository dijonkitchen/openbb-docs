"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91767],{91728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var n=r(74848),s=r(28453),a=r(94331),l=r(18228),i=r(19365);const d={title:"HOLDINGS",description:"Learn how to get the holdings data for an individual ETF using the `obb.etf.holdings` method. Understand the parameters like symbol, provider, date, and CIK. Explore the returns, results, warnings, chart, and metadata. Dive into the data fields like symbol, name, LEI, title, CUSIP, ISIN, balance, units, currency, value, weight, payoff profile, asset category, issuer category, country, and more.",keywords:["ETF holdings","individual ETF holdings","holdings data for ETF","symbol","provider","date","CIK","returns","results","warnings","chart","metadata","data","name","LEI","title","CUSIP","ISIN","balance","units","currency","value","weight","payoff profile","asset category","issuer category","country","is restricted","fair value level","is cash collateral","is non-cash collateral","is loan by fund","acceptance datetime"]},o=void 0,c={id:"excel/reference/etf/holdings",title:"HOLDINGS",description:"Learn how to get the holdings data for an individual ETF using the `obb.etf.holdings` method. Understand the parameters like symbol, provider, date, and CIK. Explore the returns, results, warnings, chart, and metadata. Dive into the data fields like symbol, name, LEI, title, CUSIP, ISIN, balance, units, currency, value, weight, payoff profile, asset category, issuer category, country, and more.",source:"@site/content/excel/reference/etf/holdings.md",sourceDirName:"excel/reference/etf",slug:"/excel/reference/etf/holdings",permalink:"/docs/excel/reference/etf/holdings",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/etf/holdings.md",tags:[],version:"current",frontMatter:{title:"HOLDINGS",description:"Learn how to get the holdings data for an individual ETF using the `obb.etf.holdings` method. Understand the parameters like symbol, provider, date, and CIK. Explore the returns, results, warnings, chart, and metadata. Dive into the data fields like symbol, name, LEI, title, CUSIP, ISIN, balance, units, currency, value, weight, payoff profile, asset category, issuer category, country, and more.",keywords:["ETF holdings","individual ETF holdings","holdings data for ETF","symbol","provider","date","CIK","returns","results","warnings","chart","metadata","data","name","LEI","title","CUSIP","ISIN","balance","units","currency","value","weight","payoff profile","asset category","issuer category","country","is restricted","fair value level","is cash collateral","is non-cash collateral","is loan by fund","acceptance datetime"]},sidebar:"tutorialSidebar",previous:{title:"ETF",permalink:"/docs/excel/reference/etf/"},next:{title:"INFO",permalink:"/docs/excel/reference/etf/info"}},h={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"ETF.HOLDINGS | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get the holdings for an individual ETF."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.ETF.HOLDINGS(symbol,[date])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.ETF.HOLDINGS("XLK")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.ETF.HOLDINGS("XLK","2022-03-31")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for. (ETF)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"A specific date to get data for."}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(i.A,{value:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data. (ETF)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"Name of the ETF holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lei"}),(0,n.jsx)(t.td,{children:"The LEI of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"title"}),(0,n.jsx)(t.td,{children:"The title of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cusip"}),(0,n.jsx)(t.td,{children:"The CUSIP of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isin"}),(0,n.jsx)(t.td,{children:"The ISIN of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"balance"}),(0,n.jsx)(t.td,{children:"The balance of the holding, in shares or units."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"units"}),(0,n.jsx)(t.td,{children:"The type of units."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cur_cd"}),(0,n.jsx)(t.td,{children:"The currency of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"valUsd"}),(0,n.jsx)(t.td,{children:"The value of the holding, in dollars."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pctVal"}),(0,n.jsx)(t.td,{children:"The weight of the holding, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"payoffProfile"}),(0,n.jsx)(t.td,{children:"The payoff profile of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"assetCat"}),(0,n.jsx)(t.td,{children:"The asset category of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"issuerCat"}),(0,n.jsx)(t.td,{children:"The issuer category of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"invCountry"}),(0,n.jsx)(t.td,{children:"The country of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isRestrictedSec"}),(0,n.jsx)(t.td,{children:"Whether the holding is restricted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fairValLevel"}),(0,n.jsx)(t.td,{children:"The fair value level of the holding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isCashCollateral"}),(0,n.jsx)(t.td,{children:"Whether the holding is cash collateral."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isNonCashCollateral"}),(0,n.jsx)(t.td,{children:"Whether the holding is non-cash collateral."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isLoanByFund"}),(0,n.jsx)(t.td,{children:"Whether the holding is loan by fund."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cik"}),(0,n.jsx)(t.td,{children:"The CIK of the filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"acceptanceTime"}),(0,n.jsx)(t.td,{children:"The acceptance datetime of the filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"updated"}),(0,n.jsx)(t.td,{children:"The date the data was updated."})]})]})]})})})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),s=r(74848);function a(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>I});var n=r(96540),s=r(34164),a=r(23104),l=r(56347),i=r(205),d=r(57485),o=r(31682),c=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=u(e),[l,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[o,h]=f({queryString:r,groupId:s}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),j=(()=>{const e=o??p;return x({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&d(j)}),[j]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),b(e)}),[h,b,a]),tabValues:a}}var b=r(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=r(74848);function m(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:h}=(0,l.zy)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),s=d[r].value;s!==n&&(c(t),i(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:x,onClick:u,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,a?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,g.jsx)(m,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function I(e){const t=(0,b.A)();return(0,g.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);