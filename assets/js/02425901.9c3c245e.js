"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41180],{42250:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(74848),s=t(28453),a=t(94331),i=t(18228),l=t(19365);const o={title:"groups",description:"Get company data grouped by sector, industry or country and display either performance or valuation metrics",keywords:["equity","compare","groups"]},d=void 0,c={id:"platform/reference/equity/compare/groups",title:"groups",description:"Get company data grouped by sector, industry or country and display either performance or valuation metrics",source:"@site/content/platform/reference/equity/compare/groups.md",sourceDirName:"platform/reference/equity/compare",slug:"/platform/reference/equity/compare/groups",permalink:"/platform/reference/equity/compare/groups",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/compare/groups.md",tags:[],version:"current",frontMatter:{title:"groups",description:"Get company data grouped by sector, industry or country and display either performance or valuation metrics",keywords:["equity","compare","groups"]},sidebar:"tutorialSidebar",previous:{title:"company_facts",permalink:"/platform/reference/equity/compare/company_facts"},next:{title:"peers",permalink:"/platform/reference/equity/compare/peers"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function p(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"equity/compare/groups - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Get company data grouped by sector, industry or country and display either performance or valuation metrics."}),"\n",(0,n.jsx)(r.p,{children:"Valuation metrics include price to earnings, price to book, price to sales ratios and price to cash flow.\nPerformance metrics include the stock price change for different time periods."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.equity.compare.groups(provider='finviz')\n# Group by sector and analyze valuation.\nobb.equity.compare.groups(group='sector', metric='valuation', provider='finviz')\n# Group by industry and analyze performance.\nobb.equity.compare.groups(group='industry', metric='performance', provider='finviz')\n# Group by country and analyze valuation.\nobb.equity.compare.groups(group='country', metric='valuation', provider='finviz')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"group"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The group to compare - i.e., 'sector', 'industry', 'country'. Choices vary by provider."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"metric"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The type of metrics to compare - i.e, 'valuation', 'performance'. Choices vary by provider."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['finviz']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, i, n, v, i, z."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"finviz",label:"finviz",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"group"}),(0,n.jsx)(r.td,{children:"Literal['sector', 'industry', 'country', 'capitalization', 'energy', 'materials', 'industrials', 'consumer_cyclical', 'consumer_defensive', 'healthcare', 'financial', 'technology', 'communication_services', 'utilities', 'real_estate']"}),(0,n.jsx)(r.td,{children:"US-listed stocks only. When a sector is selected, it is broken down by industry. The default is sector."}),(0,n.jsx)(r.td,{children:"sector"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"metric"}),(0,n.jsx)(r.td,{children:"Literal['performance', 'valuation', 'overview']"}),(0,n.jsx)(r.td,{children:"Select from: performance, valuation, overview. The default is performance."}),(0,n.jsx)(r.td,{children:"performance"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['finviz']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, i, n, v, i, z."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CompareGroups]\n        Serializable results.\n\n    provider : Optional[Literal['finviz']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name or label of the group."})]})})]})}),(0,n.jsx)(l.A,{value:"finviz",label:"finviz",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name or label of the group."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"stocks"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The number of stocks in the group."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"market_cap"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The market cap of the group."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"performance_1D"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The performance in the last day, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"performance_1W"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The performance in the last week, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"performance_1M"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The performance in the last month, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"performance_3M"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The performance in the last quarter, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"performance_6M"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The performance in the last half year, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"performance_1Y"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The performance in the last year, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"performance_YTD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The performance in the year to date, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"dividend_yield"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The dividend yield of the group, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pe"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The P/E ratio of the group."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"forward_pe"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The forward P/E ratio of the group."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"peg"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The PEG ratio of the group."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"eps_growth_past_5_years"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The EPS growth of the group for the past 5 years, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"eps_growth_next_5_years"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The estimated EPS growth of the groupo for the next 5 years, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sales_growth_past_5_years"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The sales growth of the group for the past 5 years, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"float_short"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The percent of the float shorted for the group, as a normalized value."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"analyst_recommendation"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The analyst consensus, on a scale of 1-5 where 1 is a buy and 5 is a sell."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The trading volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume_average"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The 3-month average volume of the group."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume_relative"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The relative volume compared to the 3-month average volume."})]})]})]})})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:r,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(5260),s=t(74848);function a(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>T});var n=t(96540),s=t(34164),a=t(23104),i=t(56347),l=t(205),o=t(57485),d=t(31682),c=t(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function u(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??h(t);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=u(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[d,h]=x({queryString:t,groupId:s}),[f,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=d??f;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=t(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function y(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),{pathname:h}=(0,i.zy)(),u=e=>{const r=e.currentTarget,t=d.indexOf(r),s=o[t].value;s!==n&&(c(r),l(s))},p=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>d.push(e),onKeyDown:p,onClick:u,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,a?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&h.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function g(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(y,{...e,...r}),(0,b.jsx)(v,{...e,...r})]})}function T(e){const r=(0,m.A)();return(0,b.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);