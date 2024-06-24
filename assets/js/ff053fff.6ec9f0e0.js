"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86265],{95855:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var n=t(74848),s=t(28453),i=t(94331),a=t(18228),l=t(19365);const d={title:"curve",description:"Learn about fetching historical futures price data using Python and an  API. Understand the available parameters, such as symbol, date, and provider. Explore  the returned results, including FuturesCurve, warnings, chart, and metadata. Analyze  the data, including expiration, close price, and trading symbol.",keywords:["futures historical price","futures historical data","Python","API","symbol","date","provider","cboe","yfinance","results","FuturesCurve","warnings","Chart","Metadata","expiration","close price","trading symbol"]},c=void 0,o={id:"platform/reference/derivatives/futures/curve",title:"curve",description:"Learn about fetching historical futures price data using Python and an  API. Understand the available parameters, such as symbol, date, and provider. Explore  the returned results, including FuturesCurve, warnings, chart, and metadata. Analyze  the data, including expiration, close price, and trading symbol.",source:"@site/content/platform/reference/derivatives/futures/curve.md",sourceDirName:"platform/reference/derivatives/futures",slug:"/platform/reference/derivatives/futures/curve",permalink:"/docs/platform/reference/derivatives/futures/curve",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/derivatives/futures/curve.md",tags:[],version:"current",frontMatter:{title:"curve",description:"Learn about fetching historical futures price data using Python and an  API. Understand the available parameters, such as symbol, date, and provider. Explore  the returned results, including FuturesCurve, warnings, chart, and metadata. Analyze  the data, including expiration, close price, and trading symbol.",keywords:["futures historical price","futures historical data","Python","API","symbol","date","provider","cboe","yfinance","results","FuturesCurve","warnings","Chart","Metadata","expiration","close price","trading symbol"]},sidebar:"tutorialSidebar",previous:{title:"Futures",permalink:"/docs/platform/reference/derivatives/futures/"},next:{title:"historical",permalink:"/docs/platform/reference/derivatives/futures/historical"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"derivatives/futures/curve - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Futures Term Structure, current or historical."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.derivatives.futures.curve(symbol='VX', provider='cboe')\n# Enter a date to get the term structure from a historical date.\nobb.derivatives.futures.curve(symbol='NG', provider='yfinance', date='2023-01-01')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol to get data for."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"Union[date, str]"}),(0,n.jsx)(r.td,{children:"A specific date to get data for."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['cboe', 'yfinance']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: c, b, o, e."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"cboe",label:"cboe",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol to get data for."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"Union[date, str]"}),(0,n.jsx)(r.td,{children:"A specific date to get data for."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['cboe', 'yfinance']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: c, b, o, e."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol to get data for."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"Union[date, str]"}),(0,n.jsx)(r.td,{children:"A specific date to get data for."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['cboe', 'yfinance']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: c, b, o, e."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[FuturesCurve]\n        Serializable results.\n\n    provider : Optional[Literal['cboe', 'yfinance']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"expiration"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Futures expiration month."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"price"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The close price."})]})]})]})}),(0,n.jsx)(l.A,{value:"cboe",label:"cboe",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"expiration"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Futures expiration month."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"price"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The close price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The trading symbol for the tenor of future."})]})]})]})}),(0,n.jsx)(l.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"expiration"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Futures expiration month."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"price"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The close price."})]})]})]})})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),s=t(74848);function i(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(96540),s=t(34164),i=t(23104),a=t(56347),l=t(205),d=t(57485),c=t(31682),o=t(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function x(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:t}=e;const s=(0,a.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(s.location.search);r.set(i,e),s.replace({...s.location,search:r.toString()})}),[i,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,i=h(e),[a,d]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[c,u]=p({queryString:t,groupId:s}),[f,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,i]=(0,o.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),b=(()=>{const e=c??f;return x({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&d(b)}),[b]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=t(74848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:u}=(0,a.zy)(),h=e=>{const r=e.currentTarget,t=c.indexOf(r),s=d[t].value;s!==n&&(o(r),l(s))},x=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:x,onClick:h,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,i?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=f(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,m.jsx)(v,{...e,...r}),(0,m.jsx)(y,{...e,...r})]})}function w(e){const r=(0,j.A)();return(0,m.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);