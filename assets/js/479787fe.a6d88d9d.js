"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39868],{45609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>h,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var s=r(74848),i=r(28453),n=r(94331),a=r(18228),d=r(19365);const l={title:"historical",description:"Learn about historical analyst estimates and analyst stock recommendations  with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical`  function and its parameters, including `symbol`, `period`, `limit`, and `provider`.  Understand the structure of the returned object, `OBBject`, with `results`, `provider`,  `warnings`, `chart`, and `metadata` properties. Dive into the available data such  as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`,  `EPS`, and the number of analysts who estimated revenue and EPS.",keywords:["historical analyst estimates","analyst stock recommendations","python obb.equity.estimates.historical","parameters","standard","symbol","union[str, list[str]]","period","literal['quarter', 'annual']","limit","int","provider","literal['fmp']","returns","obbject","list[analystestimates]","serializable results","optional[literal['fmp']]","optional[list[warning_]]","optional[chart]","optional[metadata]","data","symbol","str","date","estimated revenue low","estimated revenue high","estimated revenue average","estimated ebitda low","estimated ebitda high","estimated ebitda average","estimated ebit low","estimated ebit high","estimated ebit average","estimated net income low","estimated net income high","estimated net income average","estimated sga expense low","estimated sga expense high","estimated sga expense average","estimated eps average","estimated eps high","estimated eps low","number of analysts who estimated revenue","number of analysts who estimated eps"]},h=void 0,c={id:"platform/reference/equity/estimates/historical",title:"historical",description:"Learn about historical analyst estimates and analyst stock recommendations  with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical`  function and its parameters, including `symbol`, `period`, `limit`, and `provider`.  Understand the structure of the returned object, `OBBject`, with `results`, `provider`,  `warnings`, `chart`, and `metadata` properties. Dive into the available data such  as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`,  `EPS`, and the number of analysts who estimated revenue and EPS.",source:"@site/content/platform/reference/equity/estimates/historical.md",sourceDirName:"platform/reference/equity/estimates",slug:"/platform/reference/equity/estimates/historical",permalink:"/platform/reference/equity/estimates/historical",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/estimates/historical.md",tags:[],version:"current",frontMatter:{title:"historical",description:"Learn about historical analyst estimates and analyst stock recommendations  with the OBBPy library in Python. Explore the usage of the `obb.equity.estimates.historical`  function and its parameters, including `symbol`, `period`, `limit`, and `provider`.  Understand the structure of the returned object, `OBBject`, with `results`, `provider`,  `warnings`, `chart`, and `metadata` properties. Dive into the available data such  as `symbol`, `date`, `estimated revenue`, `ebitda`, `ebit`, `net income`, `SGA expense`,  `EPS`, and the number of analysts who estimated revenue and EPS.",keywords:["historical analyst estimates","analyst stock recommendations","python obb.equity.estimates.historical","parameters","standard","symbol","union[str, list[str]]","period","literal['quarter', 'annual']","limit","int","provider","literal['fmp']","returns","obbject","list[analystestimates]","serializable results","optional[literal['fmp']]","optional[list[warning_]]","optional[chart]","optional[metadata]","data","symbol","str","date","estimated revenue low","estimated revenue high","estimated revenue average","estimated ebitda low","estimated ebitda high","estimated ebitda average","estimated ebit low","estimated ebit high","estimated ebit average","estimated net income low","estimated net income high","estimated net income average","estimated sga expense low","estimated sga expense high","estimated sga expense average","estimated eps average","estimated eps high","estimated eps low","number of analysts who estimated revenue","number of analysts who estimated eps"]},sidebar:"tutorialSidebar",previous:{title:"forward_sales",permalink:"/platform/reference/equity/estimates/forward_sales"},next:{title:"price_target",permalink:"/platform/reference/equity/estimates/price_target"}},o={},m=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{title:"equity/estimates/historical - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(t.p,{children:"Get historical analyst estimates for earnings and revenue."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.estimates.historical(symbol='AAPL', provider='fmp')\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(d.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]})})]})}),(0,s.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"period"}),(0,s.jsx)(t.td,{children:"Literal['quarter', 'annual']"}),(0,s.jsx)(t.td,{children:"Time period of the data to return."}),(0,s.jsx)(t.td,{children:"annual"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of data entries to return."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[AnalystEstimates]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(d.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_revenue_low"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated revenue low."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_revenue_high"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated revenue high."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_revenue_avg"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated revenue average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_sga_expense_low"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated SGA expense low."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_sga_expense_high"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated SGA expense high."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_sga_expense_avg"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated SGA expense average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_ebitda_low"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated EBITDA low."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_ebitda_high"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated EBITDA high."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_ebitda_avg"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated EBITDA average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_ebit_low"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated EBIT low."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_ebit_high"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated EBIT high."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_ebit_avg"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated EBIT average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_net_income_low"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated net income low."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_net_income_high"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated net income high."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_net_income_avg"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated net income average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_eps_avg"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Estimated EPS average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_eps_high"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Estimated EPS high."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_eps_low"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Estimated EPS low."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_analyst_estimated_revenue"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of analysts who estimated revenue."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_analysts_estimated_eps"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of analysts who estimated EPS."})]})]})]})}),(0,s.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_revenue_low"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated revenue low."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_revenue_high"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated revenue high."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_revenue_avg"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated revenue average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_sga_expense_low"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated SGA expense low."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_sga_expense_high"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated SGA expense high."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_sga_expense_avg"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated SGA expense average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_ebitda_low"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated EBITDA low."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_ebitda_high"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated EBITDA high."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_ebitda_avg"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated EBITDA average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_ebit_low"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated EBIT low."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_ebit_high"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated EBIT high."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_ebit_avg"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated EBIT average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_net_income_low"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated net income low."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_net_income_high"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated net income high."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_net_income_avg"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Estimated net income average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_eps_avg"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Estimated EPS average."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_eps_high"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Estimated EPS high."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"estimated_eps_low"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Estimated EPS low."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_analyst_estimated_revenue"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of analysts who estimated revenue."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_analysts_estimated_eps"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of analysts who estimated EPS."})]})]})]})})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var s=r(34164);const i={tabItem:"tabItem_Ymn6"};var n=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var s=r(5260),i=r(74848);function n(e){let{title:t}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var s=r(96540),i=r(34164),n=r(23104),a=r(56347),d=r(205),l=r(57485),h=r(31682),c=r(70679);function o(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:i}}=e;return{value:t,label:r,attributes:s,default:i}}))}function m(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:r}=e;const i=(0,a.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(i.location.search);t.set(n,e),i.replace({...i.location,search:t.toString()})}),[n,i])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,n=m(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[h,o]=x({queryString:r,groupId:i}),[j,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,n]=(0,c.Dv)(r);return[i,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:i}),b=(()=>{const e=h??j;return u({value:e,tabValues:n})?e:null})();(0,d.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),p(e)}),[o,p,n]),tabValues:n}}var p=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=r(74848);function v(e){let{className:t,block:r,selectedValue:s,selectValue:d,tabValues:l}=e;const h=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),{pathname:o}=(0,a.zy)(),m=e=>{const t=e.currentTarget,r=h.indexOf(t),i=l[r].value;i!==s&&(c(t),d(i))},u=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=h.indexOf(e.currentTarget)+1;t=h[r]??h[0];break}case"ArrowLeft":{const r=h.indexOf(e.currentTarget)-1;t=h[r]??h[h.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>h.push(e),onKeyDown:u,onClick:m,...n,className:(0,i.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,n?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:i}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(g,{...e,...t})]})}function _(e){const t=(0,p.A)();return(0,f.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var s=r(96540);const i={},n=s.createContext(i);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);