"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5337],{83106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>x});var r=n(74848),s=n(28453),i=n(94331),d=n(18228),l=n(19365);const c={title:"constituents",description:"Learn how to fetch constituents of an index using the OBB library in  Python. Get detailed information such as symbol, name, sector, sub-sector, headquarters,  date of first addition, CIK, and founding year of the constituent companies in the  index.",keywords:["index constituents","fetch constituents","index constituents parameters","index constituents returns","index constituents data","index constituents symbol","index constituents name","index constituents sector","index constituents sub-sector","index constituents headquarters","index constituents date first added","index constituents cik","index constituents founding year"]},a=void 0,o={id:"platform/reference/index/constituents",title:"constituents",description:"Learn how to fetch constituents of an index using the OBB library in  Python. Get detailed information such as symbol, name, sector, sub-sector, headquarters,  date of first addition, CIK, and founding year of the constituent companies in the  index.",source:"@site/content/platform/reference/index/constituents.md",sourceDirName:"platform/reference/index",slug:"/platform/reference/index/constituents",permalink:"/platform/reference/index/constituents",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/index/constituents.md",tags:[],version:"current",frontMatter:{title:"constituents",description:"Learn how to fetch constituents of an index using the OBB library in  Python. Get detailed information such as symbol, name, sector, sub-sector, headquarters,  date of first addition, CIK, and founding year of the constituent companies in the  index.",keywords:["index constituents","fetch constituents","index constituents parameters","index constituents returns","index constituents data","index constituents symbol","index constituents name","index constituents sector","index constituents sub-sector","index constituents headquarters","index constituents date first added","index constituents cik","index constituents founding year"]},sidebar:"tutorialSidebar",previous:{title:"available",permalink:"/platform/reference/index/available"},next:{title:"market",permalink:"/platform/reference/index/market"}},h={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"index/constituents - Reference | OpenBB Platform Docs"}),"\n","\n",(0,r.jsx)(t.p,{children:"Get Index Constituents."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.index.constituents(symbol='dowjones', provider='fmp')\n# Providers other than FMP will use the ticker symbol.\nobb.index.constituents(symbol='BEP50P', provider='cboe')\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol to get data for."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provider"}),(0,r.jsx)(t.td,{children:"Literal['cboe', 'fmp', 'tmx']"}),(0,r.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: c, b, o, e."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(l.A,{value:"cboe",label:"cboe",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Literal['BAT20P', 'BBE20P', 'BCH20P', 'BCHM30P', 'BDE40P', 'BDEM50P', 'BDES50P', 'BDK25P', 'BEP50P', 'BEPACP', 'BEPBUS', 'BEPCNC', 'BEPCONC', 'BEPCONS', 'BEPENGY', 'BEPFIN', 'BEPHLTH', 'BEPIND', 'BEPNEM', 'BEPTEC', 'BEPTEL', 'BEPUTL', 'BEPXUKP', 'BES35P', 'BEZ50P', 'BEZACP', 'BFI25P', 'BFR40P', 'BFRM20P', 'BIE20P', 'BIT40P', 'BNL25P', 'BNLM25P', 'BNO25G', 'BNORD40P', 'BPT20P', 'BSE30P', 'BUK100P', 'BUK250P', 'BUK350P', 'BUKAC', 'BUKBISP', 'BUKBUS', 'BUKCNC', 'BUKCONC', 'BUKCONS', 'BUKENGY', 'BUKFIN', 'BUKHI50P', 'BUKHLTH', 'BUKIND', 'BUKLO50P', 'BUKMINP', 'BUKNEM', 'BUKSC', 'BUKTEC', 'BUKTEL', 'BUKUTL']"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"BUK100P"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provider"}),(0,r.jsx)(t.td,{children:"Literal['cboe', 'fmp', 'tmx']"}),(0,r.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: c, b, o, e."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Literal['dowjones', 'sp500', 'nasdaq']"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"dowjones"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provider"}),(0,r.jsx)(t.td,{children:"Literal['cboe', 'fmp', 'tmx']"}),(0,r.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: c, b, o, e."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol to get data for."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provider"}),(0,r.jsx)(t.td,{children:"Literal['cboe', 'fmp', 'tmx']"}),(0,r.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: c, b, o, e."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"use_cache"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether to use a cached request. Index data is from a single JSON file, updated each day after close. It is cached for one day. To bypass, set to False."}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[IndexConstituents]\n        Serializable results.\n\n    provider : Optional[Literal['cboe', 'fmp', 'tmx']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(d.A,{children:[(0,r.jsx)(l.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Name of the constituent company in the index."})]})]})]})}),(0,r.jsx)(l.A,{value:"cboe",label:"cboe",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Name of the constituent company in the index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"security_type"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The type of security represented."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_price"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Last price for the symbol."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"open"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The open price."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"high"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The high price."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"low"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The low price."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"close"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The close price."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"volume"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"The trading volume."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prev_close"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The previous close price."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Change in price."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_percent"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Change in price as a normalized percentage."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tick"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Whether the last sale was an up or down tick."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last_trade_time"}),(0,r.jsx)(t.td,{children:"datetime"}),(0,r.jsx)(t.td,{children:"Last trade timestamp for the symbol."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"asset_type"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Type of asset."})]})]})]})}),(0,r.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Name of the constituent company in the index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sector"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Sector the constituent company in the index belongs to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sub_sector"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Sub-sector the constituent company in the index belongs to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"headquarter"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Location of the headquarter of the constituent company in the index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"date_first_added"}),(0,r.jsx)(t.td,{children:"Union[str, date]"}),(0,r.jsx)(t.td,{children:"Date the constituent company was added to the index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cik"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"founded"}),(0,r.jsx)(t.td,{children:"Union[str, date]"}),(0,r.jsx)(t.td,{children:"Founding year of the constituent company in the index."})]})]})]})}),(0,r.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Name of the constituent company in the index."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"market_value"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The quoted market value of the asset."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function d(e){let{children:t,hidden:n,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,d),hidden:n,children:t})}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,n)=>{n.d(t,{A:()=>B});var r=n(96540),s=n(34164),i=n(23104),d=n(56347),l=n(205),c=n(57485),a=n(31682),o=n(89466);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function x(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const s=(0,d.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=x(e),[d,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[a,h]=j({queryString:n,groupId:s}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),b=(()=>{const e=a??p;return u({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&c(b)}),[b]);return{selectedValue:d,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:h}=(0,d.zy)(),x=e=>{const t=e.currentTarget,n=a.indexOf(t),s=c[n].value;s!==r&&(o(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>a.push(e),onKeyDown:u,onClick:x,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,i?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&h.startsWith("/terminal")}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=p(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,m.jsx)(y,{...e,...t}),(0,m.jsx)(v,{...e,...t})]})}function B(e){const t=(0,f.A)();return(0,m.jsx)(g,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);