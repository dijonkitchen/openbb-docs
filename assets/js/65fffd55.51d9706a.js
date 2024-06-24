"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58944],{7575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>x});var n=r(74848),s=r(28453),i=r(94331),a=r(18228),o=r(19365);const d={title:"income_growth",description:"Explore the growth of a company's income statement with the Python function  obb.equity.fundamental.income_growth. Retrieve data for symbols, specify the limit,  period, and provider, and get detailed information on various aspects of the income  statement growth.",keywords:["income statement growth","company income statement","python obb.equity.fundamental.income_growth","symbol","limit","period","provider","data entries","time period","provider name","warnings","chart object","metadata","symbol data","date","growth revenue","cost of goods sold","gross profit","gross profit ratio","research and development expenses","general and administrative expenses","selling and marketing expenses","operating expenses","total costs and expenses","interest expenses","depreciation and amortization expenses","ebitda","ebitda ratio","operating income","operating income ratio","total other income expenses net","income before tax","income tax expenses","net income","eps","eps diluted","weighted average shares outstanding"]},l=void 0,c={id:"platform/reference/equity/fundamental/income_growth",title:"income_growth",description:"Explore the growth of a company's income statement with the Python function  obb.equity.fundamental.income_growth. Retrieve data for symbols, specify the limit,  period, and provider, and get detailed information on various aspects of the income  statement growth.",source:"@site/content/platform/reference/equity/fundamental/income_growth.md",sourceDirName:"platform/reference/equity/fundamental",slug:"/platform/reference/equity/fundamental/income_growth",permalink:"/platform/reference/equity/fundamental/income_growth",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/fundamental/income_growth.md",tags:[],version:"current",frontMatter:{title:"income_growth",description:"Explore the growth of a company's income statement with the Python function  obb.equity.fundamental.income_growth. Retrieve data for symbols, specify the limit,  period, and provider, and get detailed information on various aspects of the income  statement growth.",keywords:["income statement growth","company income statement","python obb.equity.fundamental.income_growth","symbol","limit","period","provider","data entries","time period","provider name","warnings","chart object","metadata","symbol data","date","growth revenue","cost of goods sold","gross profit","gross profit ratio","research and development expenses","general and administrative expenses","selling and marketing expenses","operating expenses","total costs and expenses","interest expenses","depreciation and amortization expenses","ebitda","ebitda ratio","operating income","operating income ratio","total other income expenses net","income before tax","income tax expenses","net income","eps","eps diluted","weighted average shares outstanding"]},sidebar:"tutorialSidebar",previous:{title:"income",permalink:"/platform/reference/equity/fundamental/income"},next:{title:"latest_attributes",permalink:"/platform/reference/equity/fundamental/latest_attributes"}},h={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"equity/fundamental/income_growth - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get the growth of a company's income statement items over time."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.fundamental.income_growth(symbol='AAPL', provider='fmp')\nobb.equity.fundamental.income_growth(symbol='AAPL', limit=10, period='annual', provider='fmp')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(o.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Time period of the data to return."}),(0,n.jsx)(t.td,{children:"annual"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(o.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"Literal['annual', 'quarter']"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"annual"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[IncomeStatementGrowth]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(o.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]})]})]})}),(0,n.jsx)(o.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period_ending"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fiscal_year"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_revenue"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_cost_of_revenue"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of cost of goods sold."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_gross_profit"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of gross profit."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_gross_profit_margin"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of gross profit as a percentage of revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_general_and_admin_expense"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of general and administrative expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_research_and_development_expense"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of expenses on research and development."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_selling_and_marketing_expense"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of expenses on selling and marketing activities."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_other_expenses"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of other operating expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_operating_expenses"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total operating expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_cost_and_expenses"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of total costs and expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_interest_expense"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of interest expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_depreciation_and_amortization"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of depreciation and amortization expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_ebitda"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of Earnings Before Interest, Taxes, Depreciation, and Amortization."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_ebitda_margin"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of EBITDA as a percentage of revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_operating_income"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of operating income."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_operating_income_margin"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of operating income as a percentage of revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_total_other_income_expenses_net"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net total other income and expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_income_before_tax"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of income before taxes."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_income_before_tax_margin"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of income before taxes as a percentage of revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_income_tax_expense"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of income tax expenses."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_consolidated_net_income"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net income."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_net_income_margin"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of net income as a percentage of revenue."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_basic_earings_per_share"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of Earnings Per Share (EPS)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_diluted_earnings_per_share"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of diluted Earnings Per Share (EPS)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_weighted_average_basic_shares_outstanding"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of weighted average shares outstanding."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"growth_weighted_average_diluted_shares_outstanding"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Growth rate of diluted weighted average shares outstanding."})]})]})]})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(96540),s=r(34164),i=r(23104),a=r(56347),o=r(205),d=r(57485),l=r(31682),c=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,d.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=x(e),[a,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,h]=p({queryString:r,groupId:s}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),j=(()=>{const e=l??f;return u({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{j&&d(j)}),[j]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=r(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=r(74848);function b(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:h}=(0,a.zy)(),x=e=>{const t=e.currentTarget,r=l.indexOf(t),s=d[r].value;s!==n&&(c(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:x,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function _(e){const t=(0,m.A)();return(0,g.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);