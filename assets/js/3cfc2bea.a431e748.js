"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96606],{81733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=r(74848),a=r(28453),s=r(94331),c=r(18228),d=r(19365);const o={title:"CALENDAR",description:"The Economic Calendar provides information on economic events and data. Use the OBB Python function `obb.economy.calendar()` to retrieve economic calendar data. The function accepts parameters such as start date, end date, provider, country, importance, and group. It returns a list of economic calendar data, including the date, event, reference, source, actual value, previous value, consensus value, and forecast value. The data can be filtered by provider such as FMP, Nasdaq, or Trading Economics.",keywords:["economic calendar","python obb.economy.calendar","parameters","start date","end date","provider","country","importance","group","returns","data","date","event","reference","source","source url","actual","previous","consensus","forecast","url","currency","unit","change","change percent","updated at","created at","description"]},l=void 0,i={id:"excel/reference/economy/calendar",title:"CALENDAR",description:"The Economic Calendar provides information on economic events and data. Use the OBB Python function `obb.economy.calendar()` to retrieve economic calendar data. The function accepts parameters such as start date, end date, provider, country, importance, and group. It returns a list of economic calendar data, including the date, event, reference, source, actual value, previous value, consensus value, and forecast value. The data can be filtered by provider such as FMP, Nasdaq, or Trading Economics.",source:"@site/content/excel/reference/economy/calendar.md",sourceDirName:"excel/reference/economy",slug:"/excel/reference/economy/calendar",permalink:"/docs/excel/reference/economy/calendar",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/economy/calendar.md",tags:[],version:"current",frontMatter:{title:"CALENDAR",description:"The Economic Calendar provides information on economic events and data. Use the OBB Python function `obb.economy.calendar()` to retrieve economic calendar data. The function accepts parameters such as start date, end date, provider, country, importance, and group. It returns a list of economic calendar data, including the date, event, reference, source, actual value, previous value, consensus value, and forecast value. The data can be filtered by provider such as FMP, Nasdaq, or Trading Economics.",keywords:["economic calendar","python obb.economy.calendar","parameters","start date","end date","provider","country","importance","group","returns","data","date","event","reference","source","source url","actual","previous","consensus","forecast","url","currency","unit","change","change percent","updated at","created at","description"]},sidebar:"tutorialSidebar",previous:{title:"ECONOMY",permalink:"/docs/excel/reference/economy/"},next:{title:"EQUITY",permalink:"/docs/excel/reference/equity/"}},u={},h=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"ECONOMY.CALENDAR | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get the upcoming, or historical, economic calendar of global events."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.ECONOMY.CALENDAR([start_date],[end_date],[country],[importance],[group],[calendar_id])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.ECONOMY.CALENDAR()\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.ECONOMY.CALENDAR("2020-03-01","2020-03-31")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Country of the event. Multiple comma separated items allowed."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"importance"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Importance of the event. Options: Low, Medium, High."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"group"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Grouping of events. Options: interest_rate, inflation, bonds, consumer, gdp, government, housing, labour, markets, money, prices, trade, business."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"calendar_id"}),(0,n.jsx)(t.td,{children:"Any"}),(0,n.jsx)(t.td,{children:"Get events by TradingEconomics Calendar ID. Multiple comma separated items allowed."}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(c.A,{children:(0,n.jsx)(d.A,{value:"tradingeconomics",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"Country of event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"category"}),(0,n.jsx)(t.td,{children:"Category of event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"event"}),(0,n.jsx)(t.td,{children:"Event name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"importance"}),(0,n.jsx)(t.td,{children:"The importance level for the event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:"Source of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"Currency of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unit"}),(0,n.jsx)(t.td,{children:"Unit of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"consensus"}),(0,n.jsx)(t.td,{children:"Average forecast among a representative group of economists."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"previous"}),(0,n.jsx)(t.td,{children:"Value for the previous period after the revision (if revision is applicable)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"revised"}),(0,n.jsx)(t.td,{children:"Revised previous value, if applicable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"actual"}),(0,n.jsx)(t.td,{children:"Latest released value."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change"}),(0,n.jsx)(t.td,{children:"Value change since previous."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change_percent"}),(0,n.jsx)(t.td,{children:"Percentage change since previous."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_updated"}),(0,n.jsx)(t.td,{children:"Last updated timestamp."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"created_at"}),(0,n.jsx)(t.td,{children:"Created at timestamp."})]})]})]})})})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>c});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function c(e){let{children:t,hidden:r,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,c),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),a=r(74848);function s(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(96540),a=r(34164),s=r(23104),c=r(56347),d=r(205),o=r(57485),l=r(31682),i=r(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const a=(0,c.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[c,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,u]=x({queryString:r,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,i.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),v=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{v&&o(v)}),[v]);return{selectedValue:c,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=r(92303);const v={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function b(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),{pathname:u}=(0,c.zy)(),h=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(i(t),d(a))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:p,onClick:h,...s,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",v.tabItem,s?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,j.jsx)(b,{...e,...t}),(0,j.jsx)(y,{...e,...t})]})}function E(e){const t=(0,f.A)();return(0,j.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>d});var n=r(96540);const a={},s=n.createContext(a);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);