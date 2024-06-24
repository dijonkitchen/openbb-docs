"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93519],{8878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>h,toc:()=>o});var n=r(74848),s=r(28453),d=r(18228),l=r(19365);const i={title:"Index Snapshots",description:"Index Snapshots"},c=void 0,h={id:"platform/data_models/IndexSnapshots",title:"Index Snapshots",description:"Index Snapshots",source:"@site/content/platform/data_models/IndexSnapshots.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/IndexSnapshots",permalink:"/platform/data_models/IndexSnapshots",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/IndexSnapshots.md",tags:[],version:"current",frontMatter:{title:"Index Snapshots",description:"Index Snapshots"},sidebar:"tutorialSidebar",previous:{title:"Index Sectors",permalink:"/platform/data_models/IndexSectors"},next:{title:"Insider Trading",permalink:"/platform/data_models/InsiderTrading"}},a={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IndexSnapshots"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IndexSnapshotsQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IndexSnapshotsData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.index_snapshots import (\nIndexSnapshotsData,\nIndexSnapshotsQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"region"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The region of focus for the data - i.e., us, eu."}),(0,n.jsx)(t.td,{children:"us"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['cboe', 'tmx']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: c, b, o, e."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"cboe",label:"cboe",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"region"}),(0,n.jsx)(t.td,{children:"Literal['us', 'eu']"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"us"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['cboe', 'tmx']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: c, b, o, e."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"region"}),(0,n.jsx)(t.td,{children:"Literal['ca', 'us']"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"ca"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['cboe', 'tmx']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: c, b, o, e."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"use_cache"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to use a cached request. Index data is from a single JSON file, updated each day after close. It is cached for one day. To bypass, set to False."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Current price of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"open"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The open price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The high price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The low price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prev_close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The previous close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change in value of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change_percent"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change, in normalized percentage points, of the index."})]})]})]})}),(0,n.jsx)(l.A,{value:"cboe",label:"cboe",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Current price of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"open"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The open price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The high price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The low price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prev_close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The previous close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change in price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change_percent"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change in price as a normalized percentage."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bid"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Current bid price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ask"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Current ask price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_trade_time"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"Last trade timestamp for the symbol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"status"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Status of the market, open or closed."})]})]})]})}),(0,n.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Current price of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"open"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The open price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The high price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The low price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"volume"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The trading volume."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prev_close"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The previous close price."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change in value of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change_percent"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Change, in normalized percentage points, of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year_high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The 52-week high of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"year_low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The 52-week low of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_mtd"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The month-to-date return of the index, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_qtd"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The quarter-to-date return of the index, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_ytd"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The year-to-date return of the index, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_market_value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The total quoted market value of the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"number_of_constituents"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of constituents in the index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"constituent_average_market_value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The average quoted market value of the index constituents."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"constituent_median_market_value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The median quoted market value of the index constituents."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"constituent_top10_market_value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The sum of the top 10 quoted market values of the index constituents."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"constituent_largest_market_value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The largest quoted market value of the index constituents."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"constituent_largest_weight"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The largest weight of the index constituents, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"constituent_smallest_market_value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The smallest quoted market value of the index constituents."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"constituent_smallest_weight"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The smallest weight of the index constituents, as a normalized percent."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var d=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),s=r(34164),d=r(23104),l=r(56347),i=r(205),c=r(57485),h=r(31682),a=r(70679);function o(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(d),(0,n.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(s.location.search);t.set(d,e),s.replace({...s.location,search:t.toString()})}),[d,s])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,d=x(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:d}))),[h,o]=u({queryString:r,groupId:s}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,d]=(0,a.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:s}),m=(()=>{const e=h??p;return j({value:e,tabValues:d})?e:null})();(0,i.A)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),f(e)}),[o,f,d]),tabValues:d}}var f=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:c}=e;const h=[],{blockElementScrollPositionUntilNextRender:a}=(0,d.a_)(),{pathname:o}=(0,l.zy)(),x=e=>{const t=e.currentTarget,r=h.indexOf(t),s=c[r].value;s!==n&&(a(t),i(s))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=h.indexOf(e.currentTarget)+1;t=h[r]??h[0];break}case"ArrowLeft":{const r=h.indexOf(e.currentTarget)-1;t=h[r]??h[h.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:t,label:r,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>h.push(e),onKeyDown:j,onClick:x,...d,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,d?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function T(e){const t=(0,f.A)();return(0,b.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const s={},d=n.createContext(s);function l(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);