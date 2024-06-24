"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96440],{54468:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>i,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=t(74848),d=t(28453),n=t(18228),a=t(19365);const l={title:"Treasury Rates",description:"Government Treasury Rates"},i=void 0,c={id:"platform/data_models/TreasuryRates",title:"Treasury Rates",description:"Government Treasury Rates",source:"@site/content/platform/data_models/TreasuryRates.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/TreasuryRates",permalink:"/platform/data_models/TreasuryRates",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/TreasuryRates.md",tags:[],version:"current",frontMatter:{title:"Treasury Rates",description:"Government Treasury Rates"},sidebar:"tutorialSidebar",previous:{title:"Treasury Prices",permalink:"/platform/data_models/TreasuryPrices"},next:{title:"US Yield Curve",permalink:"/platform/data_models/USYieldCurve"}},h={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,s.jsx)(r.h3,{id:"class-names",children:"Class names"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Model name"}),(0,s.jsx)(r.th,{children:"Parameters class"}),(0,s.jsx)(r.th,{children:"Data class"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TreasuryRates"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TreasuryRatesQueryParams"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TreasuryRatesData"})})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"from openbb_core.provider.standard_models.treasury_rates import (\nTreasuryRatesData,\nTreasuryRatesQueryParams,\n)\n"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsx)(a.A,{value:"standard",label:"standard",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"start_date"}),(0,s.jsx)(r.td,{children:"Union[date, str]"}),(0,s.jsx)(r.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"end_date"}),(0,s.jsx)(r.td,{children:"Union[date, str]"}),(0,s.jsx)(r.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"provider"}),(0,s.jsx)(r.td,{children:"Literal['federal_reserve', 'fmp']"}),(0,s.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, e, d, e, r, a, l, _, r, e, s, e, r, v, e."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]})]})]})}),(0,s.jsx)(a.A,{value:"federal_reserve",label:"federal_reserve",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"start_date"}),(0,s.jsx)(r.td,{children:"Union[date, str]"}),(0,s.jsx)(r.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"end_date"}),(0,s.jsx)(r.td,{children:"Union[date, str]"}),(0,s.jsx)(r.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"provider"}),(0,s.jsx)(r.td,{children:"Literal['federal_reserve', 'fmp']"}),(0,s.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, e, d, e, r, a, l, _, r, e, s, e, r, v, e."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]})]})]})}),(0,s.jsx)(a.A,{value:"fmp",label:"fmp",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Default"}),(0,s.jsx)(r.th,{children:"Optional"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"start_date"}),(0,s.jsx)(r.td,{children:"Union[date, str]"}),(0,s.jsx)(r.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"end_date"}),(0,s.jsx)(r.td,{children:"Union[date, str]"}),(0,s.jsx)(r.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"provider"}),(0,s.jsx)(r.td,{children:"Literal['federal_reserve', 'fmp']"}),(0,s.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, e, d, e, r, a, l, _, r, e, s, e, r, v, e."}),(0,s.jsx)(r.td,{children:"None"}),(0,s.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsx)(a.A,{value:"standard",label:"standard",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"The date of the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"week_4"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"4 week Treasury bills rate (secondary market)."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"month_1"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"1 month Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"month_2"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"2 month Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"month_3"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"3 month Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"month_6"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"6 month Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_1"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"1 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_2"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"2 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_3"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"3 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_5"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"5 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_7"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"7 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_10"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"10 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_20"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"20 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_30"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"30 year Treasury rate."})]})]})]})}),(0,s.jsx)(a.A,{value:"federal_reserve",label:"federal_reserve",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"The date of the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"week_4"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"4 week Treasury bills rate (secondary market)."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"month_1"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"1 month Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"month_2"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"2 month Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"month_3"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"3 month Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"month_6"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"6 month Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_1"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"1 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_2"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"2 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_3"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"3 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_5"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"5 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_7"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"7 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_10"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"10 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_20"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"20 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_30"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"30 year Treasury rate."})]})]})]})}),(0,s.jsx)(a.A,{value:"fmp",label:"fmp",children:(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"The date of the data."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"week_4"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"4 week Treasury bills rate (secondary market)."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"month_1"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"1 month Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"month_2"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"2 month Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"month_3"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"3 month Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"month_6"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"6 month Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_1"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"1 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_2"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"2 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_3"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"3 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_5"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"5 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_7"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"7 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_10"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"10 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_20"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"20 year Treasury rate."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"year_30"}),(0,s.jsx)(r.td,{children:"float"}),(0,s.jsx)(r.td,{children:"30 year Treasury rate."})]})]})]})})]})]})}function j(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var s=t(34164);const d={tabItem:"tabItem_Ymn6"};var n=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(d.tabItem,a),hidden:t,children:r})}},18228:(e,r,t)=>{t.d(r,{A:()=>_});var s=t(96540),d=t(34164),n=t(23104),a=t(56347),l=t(205),i=t(57485),c=t(31682),h=t(89466);function o(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:d}}=e;return{value:r,label:t,attributes:s,default:d}}))}function x(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??o(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function j(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:t}=e;const d=(0,a.W6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(d.location.search);r.set(n,e),d.replace({...d.location,search:r.toString()})}),[n,d])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:d}=e,n=x(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:n}))),[c,o]=u({queryString:t,groupId:d}),[f,y]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[d,n]=(0,h.Dv)(t);return[d,(0,s.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:d}),m=(()=>{const e=c??f;return j({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{m&&i(m)}),[m]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),y(e)}),[o,y,n]),tabValues:n}}var y=t(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var p=t(74848);function b(e){let{className:r,block:t,selectedValue:s,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,n.a_)(),{pathname:o}=(0,a.zy)(),x=e=>{const r=e.currentTarget,t=c.indexOf(r),d=i[t].value;d!==s&&(h(r),l(d))},j=e=>{let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:r,label:t,attributes:n}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>c.push(e),onKeyDown:j,onClick:x,...n,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,n?.className,{"border-b-2 pointer-events-none":s===r,"border-b-2 text-[#669dcb] border-[#669dcb]":s===r&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==r&&o.startsWith("/terminal")}),children:t??r},r)}))})}function T(e){let{lazy:r,children:t,selectedValue:d}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===d));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==d})))})}function v(e){const r=f(e);return(0,p.jsxs)("div",{className:(0,d.A)("tabs-container",m.tabList),children:[(0,p.jsx)(b,{...e,...r}),(0,p.jsx)(T,{...e,...r})]})}function _(e){const r=(0,y.A)();return(0,p.jsx)(v,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var s=t(96540);const d={},n=s.createContext(d);function a(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);