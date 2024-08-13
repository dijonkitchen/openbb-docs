"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87116],{84431:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>o});var r=d(74848),n=d(28453),i=d(18228),s=d(19365);const l={title:"Historical Dividends",description:"Get historical dividend data for a given company"},a=void 0,h={id:"platform/data_models/HistoricalDividends",title:"Historical Dividends",description:"Get historical dividend data for a given company",source:"@site/content/platform/data_models/HistoricalDividends.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/HistoricalDividends",permalink:"/platform/data_models/HistoricalDividends",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/HistoricalDividends.md",tags:[],version:"current",frontMatter:{title:"Historical Dividends",description:"Get historical dividend data for a given company"},sidebar:"tutorialSidebar",previous:{title:"Historical Attributes",permalink:"/platform/data_models/HistoricalAttributes"},next:{title:"Historical Employees",permalink:"/platform/data_models/HistoricalEmployees"}},c={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,r.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Model name"}),(0,r.jsx)(t.th,{children:"Parameters class"}),(0,r.jsx)(t.th,{children:"Data class"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"HistoricalDividends"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"HistoricalDividendsQueryParams"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"HistoricalDividendsData"})})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.historical_dividends import (\nHistoricalDividendsData,\nHistoricalDividendsQueryParams,\n)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,r.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): nasdaq."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(s.A,{value:"fmp",label:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,r.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): nasdaq."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(s.A,{value:"intrinio",label:"intrinio",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,r.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): nasdaq."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"The number of data entries to return."}),(0,r.jsx)(t.td,{children:"100"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(s.A,{value:"nasdaq",label:"nasdaq",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,r.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): nasdaq."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(s.A,{value:"tmx",label:"tmx",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,r.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): nasdaq."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(s.A,{value:"yfinance",label:"yfinance",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,r.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): nasdaq."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"start_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"end_date"}),(0,r.jsx)(t.td,{children:"Union[date, str]"}),(0,r.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ex_dividend_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The dividend amount per share."})]})]})]})}),(0,r.jsx)(s.A,{value:"fmp",label:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ex_dividend_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The dividend amount per share."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"label"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Label of the historical dividends."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"adj_dividend"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Adjusted dividend of the historical dividends."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"record_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Record date of the historical dividends."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"payment_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Payment date of the historical dividends."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"declaration_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Declaration date of the historical dividends."})]})]})]})}),(0,r.jsx)(s.A,{value:"intrinio",label:"intrinio",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ex_dividend_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The dividend amount per share."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"factor"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"factor by which to multiply stock prices before this date, in order to calculate historically-adjusted stock prices."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"currency"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The currency in which the dividend is paid."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"split_ratio"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The ratio of the stock split, if a stock split occurred."})]})]})]})}),(0,r.jsx)(s.A,{value:"nasdaq",label:"nasdaq",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ex_dividend_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The dividend amount per share."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dividend_type"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The type of dividend - i.e., cash, stock."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"currency"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The currency in which the dividend is paid."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"record_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The record date of ownership for eligibility."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"payment_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The payment date of the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"declaration_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Declaration date of the dividend."})]})]})]})}),(0,r.jsx)(s.A,{value:"tmx",label:"tmx",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ex_dividend_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The dividend amount per share."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"currency"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The currency the dividend is paid in."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"decalaration_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The date of the announcement."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"record_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The record date of ownership for rights to the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"payment_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The date the dividend is paid."})]})]})]})}),(0,r.jsx)(s.A,{value:"yfinance",label:"yfinance",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ex_dividend_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The ex-dividend date - the date on which the stock begins trading without rights to the dividend."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"The dividend amount per share."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},19365:(e,t,d)=>{d.d(t,{A:()=>s});d(96540);var r=d(34164);const n={tabItem:"tabItem_Ymn6"};var i=d(74848);function s(e){let{children:t,hidden:d,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,s),hidden:d,children:t})}},18228:(e,t,d)=>{d.d(t,{A:()=>D});var r=d(96540),n=d(34164),i=d(23104),s=d(56347),l=d(205),a=d(57485),h=d(31682),c=d(70679);function o(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:d,attributes:r,default:n}}=e;return{value:t,label:d,attributes:r,default:n}}))}function x(e){const{values:t,children:d}=e;return(0,r.useMemo)((()=>{const e=t??o(d);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,d])}function j(e){let{value:t,tabValues:d}=e;return d.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:d}=e;const n=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:d}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!d)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return d??null}({queryString:t,groupId:d});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function m(e){const{defaultValue:t,queryString:d=!1,groupId:n}=e,i=x(e),[s,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:d}=e;if(0===d.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:d}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${d.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=d.find((e=>e.default))??d[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[h,o]=u({queryString:d,groupId:n}),[m,p]=function(e){let{groupId:t}=e;const d=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Dv)(d);return[n,(0,r.useCallback)((e=>{d&&i.set(e)}),[d,i])]}({groupId:n}),f=(()=>{const e=h??m;return j({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),p(e)}),[o,p,i]),tabValues:i}}var p=d(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=d(74848);function v(e){let{className:t,block:d,selectedValue:r,selectValue:l,tabValues:a}=e;const h=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:o}=(0,s.zy)(),x=e=>{const t=e.currentTarget,d=h.indexOf(t),n=a[d].value;n!==r&&(c(t),l(n))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const d=h.indexOf(e.currentTarget)+1;t=h[d]??h[0];break}case"ArrowLeft":{const d=h.indexOf(e.currentTarget)-1;t=h[d]??h[h.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:d,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>h.push(e),onKeyDown:j,onClick:x,...i,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,i?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&o.startsWith("/terminal")}),children:d??t},t)}))})}function y(e){let{lazy:t,children:d,selectedValue:n}=e;if(d=Array.isArray(d)?d:[d],t){const e=d.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:d.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function D(e){const t=(0,p.A)();return(0,b.jsx)(g,{...e},String(t))}},28453:(e,t,d)=>{d.d(t,{R:()=>s,x:()=>l});var r=d(96540);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);