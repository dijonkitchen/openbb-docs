"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26435],{13450:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var n=t(74848),s=t(28453),a=t(94331),i=t(18228),l=t(19365);const d={title:"screener_data",description:"This documentation outlines the functionality of the screener_data and screener_data_chart modules in the OpenBB Terminal, a Python library for loading and handling preset stock filters. It provides parameter descriptions and return values, with links to the source code.",keywords:["Screener data","Python library","Source code","Stocks","Preset filters","Data types","Screener data chart","Order of stocks","Data export"]},c=void 0,o={id:"sdk/reference/stocks/screener/screener_data",title:"screener_data",description:"This documentation outlines the functionality of the screener_data and screener_data_chart modules in the OpenBB Terminal, a Python library for loading and handling preset stock filters. It provides parameter descriptions and return values, with links to the source code.",source:"@site/content/sdk/reference/stocks/screener/screener_data.md",sourceDirName:"sdk/reference/stocks/screener",slug:"/sdk/reference/stocks/screener/screener_data",permalink:"/sdk/reference/stocks/screener/screener_data",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/screener/screener_data.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"screener_data",description:"This documentation outlines the functionality of the screener_data and screener_data_chart modules in the OpenBB Terminal, a Python library for loading and handling preset stock filters. It provides parameter descriptions and return values, with links to the source code.",keywords:["Screener data","Python library","Source code","Stocks","Preset filters","Data types","Screener data chart","Order of stocks","Data export"]},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/sdk/reference/stocks/screener/historical"},next:{title:"search",permalink:"/sdk/reference/stocks/search"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"stocks.screener.screener_data - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(i.A,{children:[(0,n.jsxs)(l.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(r.p,{children:"Screener Overview"}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/screener/finviz_model.py#L76",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.stocks.screener.screener_data(preset_loaded: str = "top_gainers", data_type: str = "overview", limit: int = 10, ascend: bool = False)\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"preset_loaded"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Loaded preset filter"}),(0,n.jsx)(r.td,{children:"top_gainers"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"data_type"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Data type between: overview, valuation, financial, ownership, performance, technical"}),(0,n.jsx)(r.td,{children:"overview"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"limit"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"Limit of stocks filtered with presets to print"}),(0,n.jsx)(r.td,{children:"10"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ascend"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"Ascended order of stocks filtered to print"}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pd.DataFrame"}),(0,n.jsx)(r.td,{children:"Dataframe with loaded filtered stocks"})]})})]}),(0,n.jsx)(r.hr,{})]}),(0,n.jsxs)(l.A,{value:"view",label:"Chart",children:[(0,n.jsx)(r.p,{children:"Screener one of the following: overview, valuation, financial, ownership, performance, technical."}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/screener/finviz_view.py#L127",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.stocks.screener.screener_data_chart(loaded_preset: str = "top_gainers", data_type: str = "overview", limit: int = 10, ascend: bool = False, sortby: str = "", export: str = "")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"loaded_preset"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Preset loaded to filter for tickers"}),(0,n.jsx)(r.td,{children:"top_gainers"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"data_type"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Data type string between: overview, valuation, financial, ownership, performance, technical"}),(0,n.jsx)(r.td,{children:"overview"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"limit"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"Limit of stocks to display"}),(0,n.jsx)(r.td,{children:"10"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ascend"}),(0,n.jsx)(r.td,{children:"bool"}),(0,n.jsx)(r.td,{children:"Order of table to ascend or descend"}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sortby"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Column to sort table by"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"export"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Export dataframe data to csv,json,xlsx file"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"List[str]"}),(0,n.jsx)(r.td,{children:"List of stocks that meet preset criteria"})]})})]}),(0,n.jsx)(r.hr,{})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(5260),s=t(74848);function a(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>g});var n=t(96540),s=t(34164),a=t(23104),i=t(56347),l=t(205),d=t(57485),c=t(31682),o=t(70679);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function u(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??h(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=u(e),[i,d]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,h]=x({queryString:t,groupId:s}),[f,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,o.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&d(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),j(e)}),[h,j,a]),tabValues:a}}var j=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=t(74848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),{pathname:h}=(0,i.zy)(),u=e=>{const r=e.currentTarget,t=c.indexOf(r),s=d[t].value;s!==n&&(o(r),l(s))},p=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:p,onClick:u,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,a?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&h.startsWith("/terminal")}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function k(e){const r=f(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,m.jsx)(v,{...e,...r}),(0,m.jsx)(y,{...e,...r})]})}function g(e){const r=(0,j.A)();return(0,m.jsx)(k,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);