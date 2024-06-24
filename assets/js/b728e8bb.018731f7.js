"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73899],{14133:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=t(74848),s=t(28453),a=t(94331),i=t(18228),o=t(19365);const l={title:"ex",description:"This page provides code documentation and examples for retrieving and visualizing data about cryptocurrency exchanges for a given coin, using the CoinPaprika API. The OpenBBTerminal project developed by OpenBB-finance allows sorting the data and exports it for further analysis.",keywords:["cryptocurrency","CoinPaprika","cryptocurrency exchanges","data sort","data visualization","BTC","volume share","data export"]},d=void 0,c={id:"sdk/reference/crypto/dd/ex",title:"ex",description:"This page provides code documentation and examples for retrieving and visualizing data about cryptocurrency exchanges for a given coin, using the CoinPaprika API. The OpenBBTerminal project developed by OpenBB-finance allows sorting the data and exports it for further analysis.",source:"@site/content/sdk/reference/crypto/dd/ex.md",sourceDirName:"sdk/reference/crypto/dd",slug:"/sdk/reference/crypto/dd/ex",permalink:"/openbb-docs/sdk/reference/crypto/dd/ex",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/crypto/dd/ex.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"ex",description:"This page provides code documentation and examples for retrieving and visualizing data about cryptocurrency exchanges for a given coin, using the CoinPaprika API. The OpenBBTerminal project developed by OpenBB-finance allows sorting the data and exports it for further analysis.",keywords:["cryptocurrency","CoinPaprika","cryptocurrency exchanges","data sort","data visualization","BTC","volume share","data export"]},sidebar:"tutorialSidebar",previous:{title:"events",permalink:"/openbb-docs/sdk/reference/crypto/dd/events"},next:{title:"exchanges",permalink:"/openbb-docs/sdk/reference/crypto/dd/exchanges"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"crypto.dd.ex - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(i.A,{children:[(0,n.jsxs)(o.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(r.p,{children:"Get all exchanges for given coin id. [Source: CoinPaprika]"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L137",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.crypto.dd.ex(symbol: str = "BTC", sortby: str = "adjusted_volume_24h_share", ascend: bool = True)\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Cryptocurrency symbol (e.g. BTC)"}),(0,n.jsx)(r.td,{children:"BTC"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sortby"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsxs)(r.td,{children:["Key by which to sort data. Every column name is valid (see for possible values:",(0,n.jsx)("br",{}),(0,n.jsx)(r.a,{href:"https://api.coinpaprika.com/v1",children:"https://api.coinpaprika.com/v1"}),")."]}),(0,n.jsx)(r.td,{children:"adjusted_volume_24h_share"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ascend"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"Flag to sort data ascending"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pd.DataFrame"}),(0,n.jsxs)(r.td,{children:["All exchanges for given coin",(0,n.jsx)("br",{}),"Columns: id, name, adjusted_volume_24h_share, fiats"]})]})})]}),(0,n.jsx)(r.hr,{})]}),(0,n.jsxs)(o.A,{value:"view",label:"Chart",children:[(0,n.jsx)(r.p,{children:"Prints table showing all exchanges for given coin id. [Source: CoinPaprika]"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_view.py#L185",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.crypto.dd.ex_chart(symbol: str = "btc", limit: int = 10, sortby: str = "adjusted_volume_24h_share", ascend: bool = True, export: str = "")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Cryptocurrency symbol (e.g. BTC)"}),(0,n.jsx)(r.td,{children:"btc"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"limit"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"Number of records to display"}),(0,n.jsx)(r.td,{children:"10"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sortby"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsxs)(r.td,{children:["Key by which to sort data. Every column name is valid (see for possible values:",(0,n.jsx)("br",{}),(0,n.jsx)(r.a,{href:"https://api.coinpaprika.com/v1",children:"https://api.coinpaprika.com/v1"}),")."]}),(0,n.jsx)(r.td,{children:"adjusted_volume_24h_share"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ascend"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"Flag to sort data ascending"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"export"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Export dataframe data to csv,json,xlsx file"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(r.p,{children:"This function does not return anything"}),(0,n.jsx)(r.hr,{})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(5260),s=t(74848);function a(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>T});var n=t(96540),s=t(34164),a=t(23104),i=t(56347),o=t(205),l=t(57485),d=t(31682),c=t(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[d,u]=x({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=d??b;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=t(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=t(74848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:u}=(0,i.zy)(),h=e=>{const r=e.currentTarget,t=d.indexOf(r),s=l[t].value;s!==n&&(c(r),o(s))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>d.push(e),onKeyDown:p,onClick:h,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,a?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=b(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,m.jsx)(v,{...e,...r}),(0,m.jsx)(y,{...e,...r})]})}function T(e){const r=(0,f.A)();return(0,m.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);