"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38966],{57014:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>h,toc:()=>x});var n=t(74848),s=t(28453),d=t(94331),a=t(18228),l=t(19365);const i={title:"treasury_rates",description:"Government Treasury Rates",keywords:["fixedincome","government","treasury_rates"]},c=void 0,h={id:"platform/reference/fixedincome/government/treasury_rates",title:"treasury_rates",description:"Government Treasury Rates",source:"@site/content/platform/reference/fixedincome/government/treasury_rates.md",sourceDirName:"platform/reference/fixedincome/government",slug:"/platform/reference/fixedincome/government/treasury_rates",permalink:"/platform/reference/fixedincome/government/treasury_rates",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/fixedincome/government/treasury_rates.md",tags:[],version:"current",frontMatter:{title:"treasury_rates",description:"Government Treasury Rates",keywords:["fixedincome","government","treasury_rates"]},sidebar:"tutorialSidebar",previous:{title:"treasury_prices",permalink:"/platform/reference/fixedincome/government/treasury_prices"},next:{title:"us_yield_curve",permalink:"/platform/reference/fixedincome/government/us_yield_curve"}},o={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:"fixedincome/government/treasury_rates - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Government Treasury Rates."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.fixedincome.government.treasury_rates(provider='fmp')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"start_date"}),(0,n.jsx)(r.td,{children:"Union[date, str]"}),(0,n.jsx)(r.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"end_date"}),(0,n.jsx)(r.td,{children:"Union[date, str]"}),(0,n.jsx)(r.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"federal_reserve",label:"federal_reserve",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"start_date"}),(0,n.jsx)(r.td,{children:"Union[date, str]"}),(0,n.jsx)(r.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"end_date"}),(0,n.jsx)(r.td,{children:"Union[date, str]"}),(0,n.jsx)(r.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"start_date"}),(0,n.jsx)(r.td,{children:"Union[date, str]"}),(0,n.jsx)(r.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"end_date"}),(0,n.jsx)(r.td,{children:"Union[date, str]"}),(0,n.jsx)(r.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[TreasuryRates]\n        Serializable results.\n\n    provider : Optional[Literal['federal_reserve', 'fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"Union[date, str]"}),(0,n.jsx)(r.td,{children:"The date of the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"week_4"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"4 week Treasury bills rate (secondary market)."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"month_1"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"1 month Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"month_2"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"2 month Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"month_3"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"3 month Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"month_6"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"6 month Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_1"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"1 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_2"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"2 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_3"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"3 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_5"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"5 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_7"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"7 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_10"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"10 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_20"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"20 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_30"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"30 year Treasury rate."})]})]})]})}),(0,n.jsx)(l.A,{value:"federal_reserve",label:"federal_reserve",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"Union[date, str]"}),(0,n.jsx)(r.td,{children:"The date of the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"week_4"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"4 week Treasury bills rate (secondary market)."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"month_1"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"1 month Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"month_2"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"2 month Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"month_3"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"3 month Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"month_6"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"6 month Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_1"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"1 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_2"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"2 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_3"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"3 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_5"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"5 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_7"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"7 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_10"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"10 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_20"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"20 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_30"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"30 year Treasury rate."})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"Union[date, str]"}),(0,n.jsx)(r.td,{children:"The date of the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"week_4"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"4 week Treasury bills rate (secondary market)."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"month_1"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"1 month Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"month_2"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"2 month Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"month_3"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"3 month Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"month_6"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"6 month Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_1"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"1 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_2"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"2 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_3"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"3 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_5"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"5 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_7"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"7 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_10"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"10 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_20"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"20 year Treasury rate."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_30"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"30 year Treasury rate."})]})]})]})})]})]})}function j(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var d=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>d});t(96540);var n=t(5260),s=t(74848);function d(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>_});var n=t(96540),s=t(34164),d=t(23104),a=t(56347),l=t(205),i=t(57485),c=t(31682),h=t(70679);function o(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function x(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??o(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function u(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:t}=e;const s=(0,a.W6)(),d=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(d),(0,n.useCallback)((e=>{if(!d)return;const r=new URLSearchParams(s.location.search);r.set(d,e),s.replace({...s.location,search:r.toString()})}),[d,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,d=x(e),[a,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!u({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:d}))),[c,o]=j({queryString:t,groupId:s}),[f,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,d]=(0,h.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&d.set(e)}),[t,d])]}({groupId:s}),y=(()=>{const e=c??f;return u({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{y&&i(y)}),[y]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),m(e)}),[o,m,d]),tabValues:d}}var m=t(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var p=t(74848);function b(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,d.a_)(),{pathname:o}=(0,a.zy)(),x=e=>{const r=e.currentTarget,t=c.indexOf(r),s=i[t].value;s!==n&&(h(r),l(s))},u=e=>{let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:r,label:t,attributes:d}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:u,onClick:x,...d,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",y.tabItem,d?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&o.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function T(e){const r=f(e);return(0,p.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,p.jsx)(b,{...e,...r}),(0,p.jsx)(v,{...e,...r})]})}function _(e){const r=(0,m.A)();return(0,p.jsx)(T,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const s={},d=n.createContext(s);function a(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);