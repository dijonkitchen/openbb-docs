"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62803],{85340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var n=r(74848),d=r(28453),s=r(18228),i=r(19365);const l={title:"Company Overview",description:"Get company general business and stock data for a given company"},c=void 0,a={id:"platform/data_models/CompanyOverview",title:"Company Overview",description:"Get company general business and stock data for a given company",source:"@site/content/platform/data_models/CompanyOverview.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/CompanyOverview",permalink:"/docs/platform/data_models/CompanyOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/CompanyOverview.md",tags:[],version:"current",frontMatter:{title:"Company Overview",description:"Get company general business and stock data for a given company"},sidebar:"tutorialSidebar",previous:{title:"Company News",permalink:"/docs/platform/data_models/CompanyNews"},next:{title:"Compare Company Facts",permalink:"/docs/platform/data_models/CompareCompanyFacts"}},h={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CompanyOverview"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CompanyOverviewQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CompanyOverviewData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.company_overview import (\nCompanyOverviewData,\nCompanyOverviewQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(i.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Price of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"beta"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Beta of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vol_avg"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Volume average of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mkt_cap"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Market capitalization of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_div"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Last dividend of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"range"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Range of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"changes"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Changes of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"company_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Company name of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cik"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isin"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"ISIN of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cusip"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"CUSIP of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Exchange of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange_short_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Exchange short name of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"industry"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Industry of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"website"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Website of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"description"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Description of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ceo"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"CEO of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sector"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Sector of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Country of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"full_time_employees"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Full time employees of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"phone"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Phone of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"address"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Address of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"city"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"City of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"state"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"State of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"zip"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Zip of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dcf_diff"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Discounted cash flow difference of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dcf"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Discounted cash flow of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"image"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Image of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ipo_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"IPO date of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"default_image"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If the image is the default image."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_etf"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If the company is an ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_actively_trading"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If the company is actively trading."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_adr"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If the company is an ADR."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_fund"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If the company is a fund."})]})]})]})}),(0,n.jsx)(i.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Price of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"beta"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Beta of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vol_avg"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Volume average of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mkt_cap"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Market capitalization of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_div"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Last dividend of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"range"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Range of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"changes"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Changes of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"company_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Company name of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cik"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Central Index Key (CIK) for the requested entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"isin"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"ISIN of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cusip"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"CUSIP of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Exchange of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange_short_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Exchange short name of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"industry"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Industry of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"website"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Website of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"description"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Description of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ceo"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"CEO of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sector"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Sector of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Country of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"full_time_employees"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Full time employees of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"phone"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Phone of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"address"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Address of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"city"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"City of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"state"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"State of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"zip"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Zip of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dcf_diff"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Discounted cash flow difference of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dcf"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Discounted cash flow of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"image"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Image of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ipo_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"IPO date of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"default_image"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If the image is the default image."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_etf"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If the company is an ETF."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_actively_trading"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If the company is actively trading."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_adr"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If the company is an ADR."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"is_fund"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If the company is a fund."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const d={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(d.tabItem,i),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>C});var n=r(96540),d=r(34164),s=r(23104),i=r(56347),l=r(205),c=r(57485),a=r(31682),h=r(89466);function o(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:d}}=e;return{value:t,label:r,attributes:n,default:d}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,a.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const d=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(d.location.search);t.set(s,e),d.replace({...d.location,search:t.toString()})}),[s,d])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:d}=e,s=x(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[a,o]=u({queryString:r,groupId:d}),[m,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[d,s]=(0,h.Dv)(r);return[d,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:d}),f=(()=>{const e=a??m;return j({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),p(e)}),[o,p,s]),tabValues:s}}var p=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=r(74848);function b(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),{pathname:o}=(0,i.zy)(),x=e=>{const t=e.currentTarget,r=a.indexOf(t),d=c[r].value;d!==n&&(h(t),l(d))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;t=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;t=a[r]??a[a.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:j,onClick:x,...s,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,s?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:d}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===d));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==d})))})}function g(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,d.A)("tabs-container",f.tabList),children:[(0,y.jsx)(b,{...e,...t}),(0,y.jsx)(v,{...e,...t})]})}function C(e){const t=(0,p.A)();return(0,y.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const d={},s=n.createContext(d);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);