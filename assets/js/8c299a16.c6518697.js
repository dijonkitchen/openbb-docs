"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41248],{60269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(74848),d=r(28453),i=r(94331),s=r(18228),a=r(19365);const l={title:"bond_indices",description:"Bond Indices",keywords:["fixedincome","bond_indices"]},o=void 0,c={id:"platform/reference/fixedincome/bond_indices",title:"bond_indices",description:"Bond Indices",source:"@site/content/platform/reference/fixedincome/bond_indices.md",sourceDirName:"platform/reference/fixedincome",slug:"/platform/reference/fixedincome/bond_indices",permalink:"/docs/platform/reference/fixedincome/bond_indices",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/fixedincome/bond_indices.md",tags:[],version:"current",frontMatter:{title:"bond_indices",description:"Bond Indices",keywords:["fixedincome","bond_indices"]},sidebar:"tutorialSidebar",previous:{title:"spot_rates",permalink:"/docs/platform/reference/fixedincome/corporate/spot_rates"},next:{title:"mortgage_indices",permalink:"/docs/platform/reference/fixedincome/mortgage_indices"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"fixedincome/bond_indices - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Bond Indices."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# The default state for FRED are series for constructing the US Corporate Bond Yield Curve.\nobb.fixedincome.bond_indices(provider='fred')\n# Multiple indices, from within the same 'category', can be requested.\nobb.fixedincome.bond_indices(category=high_yield, index=us,europe,emerging, index_type='total_return', provider='fred')\n# From FRED, there are three main categories, 'high_yield', 'us', and 'emerging_markets'. Emerging markets is a broad category.\nobb.fixedincome.bond_indices(category=emerging_markets, index=corporate,private_sector,public_sector, provider='fred')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(a.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"index_type"}),(0,n.jsx)(t.td,{children:"Literal['yield', 'yield_to_worst', 'total_return', 'oas']"}),(0,n.jsx)(t.td,{children:"The type of series. OAS is the option-adjusted spread. Default is yield."}),(0,n.jsx)(t.td,{children:"yield"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fred']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, r, e, d."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(a.A,{value:"fred",label:"fred",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"index_type"}),(0,n.jsx)(t.td,{children:"Literal['yield', 'yield_to_worst', 'total_return', 'oas']"}),(0,n.jsx)(t.td,{children:"The type of series. OAS is the option-adjusted spread. Default is yield."}),(0,n.jsx)(t.td,{children:"yield"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fred']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, r, e, d."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"category"}),(0,n.jsx)(t.td,{children:"Literal['high_yield', 'us', 'emerging_markets']"}),(0,n.jsx)(t.td,{children:"The type of index category. Used in conjunction with 'index', default is 'us'."}),(0,n.jsx)(t.td,{children:"us"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"index"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"The specific index to query. Used in conjunction with 'category' and 'index_type', default is 'yield_curve'. Multiple items allowed for provider(s): fred."}),(0,n.jsx)(t.td,{children:"yield_curve"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"frequency"}),(0,n.jsx)(t.td,{children:"Literal['a', 'q', 'm', 'w', 'd', 'wef', 'weth', 'wew', 'wetu', 'wem', 'wesu', 'wesa', 'bwew', 'bwem']"}),(0,n.jsx)(t.td,{children:"Frequency aggregation to convert daily data to lower frequency.       None = No change       a = Annual       q = Quarterly       m = Monthly       w = Weekly       d = Daily       wef = Weekly, Ending Friday       weth = Weekly, Ending Thursday       wew = Weekly, Ending Wednesday       wetu = Weekly, Ending Tuesday       wem = Weekly, Ending Monday       wesu = Weekly, Ending Sunday       wesa = Weekly, Ending Saturday       bwew = Biweekly, Ending Wednesday       bwem = Biweekly, Ending Monday"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"aggregation_method"}),(0,n.jsx)(t.td,{children:"Literal['avg', 'sum', 'eop']"}),(0,n.jsx)(t.td,{children:"A key that indicates the aggregation method used for frequency aggregation.     This parameter has no affect if the frequency parameter is not set, default is 'avg'.       avg = Average       sum = Sum       eop = End of Period"}),(0,n.jsx)(t.td,{children:"avg"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transform"}),(0,n.jsx)(t.td,{children:"Literal['chg', 'ch1', 'pch', 'pc1', 'pca', 'cch', 'cca', 'log']"}),(0,n.jsx)(t.td,{children:"Transformation type       None = No transformation       chg = Change       ch1 = Change from Year Ago       pch = Percent Change       pc1 = Percent Change from Year Ago       pca = Compounded Annual Rate of Change       cch = Continuously Compounded Rate of Change       cca = Continuously Compounded Annual Rate of Change       log = Natural Log"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[BondIndices]\n        Serializable results.\n\n    provider : Optional[Literal['fred']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(a.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Index values."})]})]})]})}),(0,n.jsx)(a.A,{value:"fred",label:"fred",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Index values."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maturity"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The maturity range of the bond index. Only applicable when 'index' is 'yield_curve'."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"title"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The title of the index."})]})]})]})})]})]})}function f(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const d={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(d.tabItem,s),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),d=r(74848);function i(e){let{title:t}=e;return(0,d.jsx)(n.A,{children:(0,d.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),d=r(34164),i=r(23104),s=r(56347),a=r(205),l=r(57485),o=r(31682),c=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:d}}=e;return{value:t,label:r,attributes:n,default:d}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const d=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(d.location.search);t.set(i,e),d.replace({...d.location,search:t.toString()})}),[i,d])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:d}=e,i=u(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[o,h]=f({queryString:r,groupId:d}),[j,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[d,i]=(0,c.Dv)(r);return[d,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:d}),m=(()=>{const e=o??j;return x({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:h}=(0,s.zy)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),d=l[r].value;d!==n&&(c(t),a(d))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:x,onClick:u,...i,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:d}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===d));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==d})))})}function v(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,d.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function w(e){const t=(0,p.A)();return(0,b.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const d={},i=n.createContext(d);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);