"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78607],{55379:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var n=r(74848),s=r(28453),d=r(18228),i=r(19365);const a={title:"Income Statement Growth",description:"Get the growth of a company's income statement items over time"},l=void 0,o={id:"platform/data_models/IncomeStatementGrowth",title:"Income Statement Growth",description:"Get the growth of a company's income statement items over time",source:"@site/content/platform/data_models/IncomeStatementGrowth.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/IncomeStatementGrowth",permalink:"/platform/data_models/IncomeStatementGrowth",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/IncomeStatementGrowth.md",tags:[],version:"current",frontMatter:{title:"Income Statement Growth",description:"Get the growth of a company's income statement items over time"},sidebar:"tutorialSidebar",previous:{title:"Income Statement",permalink:"/platform/data_models/IncomeStatement"},next:{title:"Index Constituents",permalink:"/platform/data_models/IndexConstituents"}},c={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IncomeStatementGrowth"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IncomeStatementGrowthQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IncomeStatementGrowthData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.income_statement_growth import (\nIncomeStatementGrowthData,\nIncomeStatementGrowthQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Time period of the data to return."}),(0,n.jsx)(t.td,{children:"annual"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(i.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"Literal['annual', 'quarter']"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"annual"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]})]})]})}),(0,n.jsx)(i.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_revenue"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_cost_of_revenue"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of cost of goods sold."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_gross_profit"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of gross profit."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_gross_profit_margin"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of gross profit as a percentage of revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_general_and_admin_expense"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of general and administrative expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_research_and_development_expense"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of expenses on research and development."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_selling_and_marketing_expense"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of expenses on selling and marketing activities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_expenses"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other operating expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_operating_expenses"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total operating expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_cost_and_expenses"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total costs and expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_interest_expense"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of interest expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_depreciation_and_amortization"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of depreciation and amortization expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_ebitda"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of Earnings Before Interest, Taxes, Depreciation, and Amortization."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_ebitda_margin"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of EBITDA as a percentage of revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_operating_income"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of operating income."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_operating_income_margin"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of operating income as a percentage of revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_total_other_income_expenses_net"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net total other income and expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_income_before_tax"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of income before taxes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_income_before_tax_margin"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of income before taxes as a percentage of revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_income_tax_expense"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of income tax expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_consolidated_net_income"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net income."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_income_margin"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net income as a percentage of revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_basic_earings_per_share"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of Earnings Per Share (EPS)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_diluted_earnings_per_share"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of diluted Earnings Per Share (EPS)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_weighted_average_basic_shares_outstanding"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of weighted average shares outstanding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_weighted_average_diluted_shares_outstanding"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of diluted weighted average shares outstanding."})]})]})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var d=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(96540),s=r(34164),d=r(23104),i=r(56347),a=r(205),l=r(57485),o=r(31682),c=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(d),(0,n.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(s.location.search);t.set(d,e),s.replace({...s.location,search:t.toString()})}),[d,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,d=x(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:d}))),[o,h]=j({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,d]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:s}),p=(()=>{const e=o??m;return u({value:e,tabValues:d})?e:null})();(0,a.A)((()=>{p&&l(p)}),[p]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,d]),tabValues:d}}var f=r(92303);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,d.a_)(),{pathname:h}=(0,i.zy)(),x=e=>{const t=e.currentTarget,r=o.indexOf(t),s=l[r].value;s!==n&&(c(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:u,onClick:x,...d,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,d?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function _(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",p.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(_,{...e,...t})]})}function v(e){const t=(0,f.A)();return(0,b.jsx)(w,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(96540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);