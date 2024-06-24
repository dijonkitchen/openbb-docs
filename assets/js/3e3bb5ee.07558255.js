"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53241],{52142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>o});var s=r(74848),i=r(28453),n=r(18228),d=r(19365);const l={title:"Forward Sales Estimates",description:"Get forward sales estimates"},a=void 0,h={id:"platform/data_models/ForwardSalesEstimates",title:"Forward Sales Estimates",description:"Get forward sales estimates",source:"@site/content/platform/data_models/ForwardSalesEstimates.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/ForwardSalesEstimates",permalink:"/docs/platform/data_models/ForwardSalesEstimates",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/ForwardSalesEstimates.md",tags:[],version:"current",frontMatter:{title:"Forward Sales Estimates",description:"Get forward sales estimates"},sidebar:"tutorialSidebar",previous:{title:"Forward Pe Estimates",permalink:"/docs/platform/data_models/ForwardPeEstimates"},next:{title:"Fred Regional",permalink:"/docs/platform/data_models/FredRegional"}},c={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,s.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Model name"}),(0,s.jsx)(t.th,{children:"Parameters class"}),(0,s.jsx)(t.th,{children:"Data class"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ForwardSalesEstimates"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ForwardSalesEstimatesQueryParams"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ForwardSalesEstimatesData"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.forward_sales_estimates import (\nForwardSalesEstimatesData,\nForwardSalesEstimatesQueryParams,\n)\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsx)(d.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): intrinio, seeking_alpha."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['intrinio', 'seeking_alpha']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: i, n, t, r, i, n, i, o."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(d.A,{value:"intrinio",label:"intrinio",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): intrinio, seeking_alpha."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['intrinio', 'seeking_alpha']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: i, n, t, r, i, n, i, o."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The future fiscal year to retrieve estimates for. When no symbol and year is supplied the current calendar year is used."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_period"}),(0,s.jsx)(t.td,{children:"Literal['fy', 'q1', 'q2', 'q3', 'q4']"}),(0,s.jsx)(t.td,{children:"The future fiscal period to retrieve estimates for."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The future calendar year to retrieve estimates for. When no symbol and year is supplied the current calendar year is used."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_period"}),(0,s.jsx)(t.td,{children:"Literal['q1', 'q2', 'q3', 'q4']"}),(0,s.jsx)(t.td,{children:"The future calendar period to retrieve estimates for."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(d.A,{value:"seeking_alpha",label:"seeking_alpha",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): intrinio, seeking_alpha."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['intrinio', 'seeking_alpha']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: i, n, t, r, i, n, i, o."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"period"}),(0,s.jsx)(t.td,{children:"Literal['annual', 'quarter']"}),(0,s.jsx)(t.td,{children:"The reporting period."}),(0,s.jsx)(t.td,{children:"quarter"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsx)(d.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the entity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Fiscal year for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_period"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Fiscal quarter for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Calendar year for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_period"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Calendar quarter for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"low_estimate"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate low for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"high_estimate"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate high for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mean"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate mean for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"median"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate median for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"standard_deviation"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate standard deviation for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_analysts"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of analysts providing estimates for the period."})]})]})]})}),(0,s.jsx)(d.A,{value:"intrinio",label:"intrinio",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the entity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Fiscal year for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_period"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Fiscal quarter for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Calendar year for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_period"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Calendar quarter for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"low_estimate"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate low for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"high_estimate"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate high for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mean"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate mean for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"median"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate median for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"standard_deviation"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate standard deviation for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_analysts"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of analysts providing estimates for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_1w_up"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of revisions up in the last week."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_1w_down"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of revisions down in the last week."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_1w_change_percent"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The analyst revisions percent change in estimate for the period of 1 week."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_1m_up"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of revisions up in the last month."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_1m_down"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of revisions down in the last month."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_1m_change_percent"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The analyst revisions percent change in estimate for the period of 1 month."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_3m_up"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of revisions up in the last 3 months."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_3m_down"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of revisions down in the last 3 months."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"revisions_3m_change_percent"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The analyst revisions percent change in estimate for the period of 3 months."})]})]})]})}),(0,s.jsx)(d.A,{value:"seeking_alpha",label:"seeking_alpha",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the entity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Fiscal year for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fiscal_period"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Fiscal quarter for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_year"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Calendar year for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"calendar_period"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Calendar quarter for the estimate."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"low_estimate"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate low for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"high_estimate"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate high for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mean"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate mean for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"median"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate median for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"standard_deviation"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The sales estimate standard deviation for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"number_of_analysts"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of analysts providing estimates for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"actual"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Actual sales (revenue) for the period."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"period_growth"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Estimated (or actual if reported) EPS growth for the period."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var s=r(34164);const i={tabItem:"tabItem_Ymn6"};var n=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,d),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var s=r(96540),i=r(34164),n=r(23104),d=r(56347),l=r(205),a=r(57485),h=r(31682),c=r(89466);function o(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:i}}=e;return{value:t,label:r,attributes:s,default:i}}))}function x(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const i=(0,d.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(i.location.search);t.set(n,e),i.replace({...i.location,search:t.toString()})}),[n,i])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,n=x(e),[d,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[h,o]=u({queryString:r,groupId:i}),[m,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,n]=(0,c.Dv)(r);return[i,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:i}),f=(()=>{const e=h??m;return j({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:d,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),p(e)}),[o,p,n]),tabValues:n}}var p=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:a}=e;const h=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),{pathname:o}=(0,d.zy)(),x=e=>{const t=e.currentTarget,r=h.indexOf(t),i=a[r].value;i!==s&&(c(t),l(i))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=h.indexOf(e.currentTarget)+1;t=h[r]??h[0];break}case"ArrowLeft":{const r=h.indexOf(e.currentTarget)-1;t=h[r]??h[h.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>h.push(e),onKeyDown:j,onClick:x,...n,className:(0,i.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,n?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:i}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function g(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function _(e){const t=(0,p.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var s=r(96540);const i={},n=s.createContext(i);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);