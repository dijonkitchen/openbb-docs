"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6373],{59859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>h,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>x});var n=r(74848),i=r(28453),d=r(94331),s=r(18228),l=r(19365);const c={title:"insider_trading",description:"Learn how to use the stock insider trading Python function to get information  about insider trading, including parameter details, return types, and data descriptions.",keywords:["stock insider trading","equity ownership","Python function","parameter details","data description","symbol","transaction type","limit","provider","returns","results","chart","metadata","data","filing date","transaction date","reporting CIK","securities owned","company CIK","reporting name","type of owner","acquisition or disposition","form type","securities transacted","price","security name","link"]},h=void 0,a={id:"platform/reference/equity/ownership/insider_trading",title:"insider_trading",description:"Learn how to use the stock insider trading Python function to get information  about insider trading, including parameter details, return types, and data descriptions.",source:"@site/content/platform/reference/equity/ownership/insider_trading.md",sourceDirName:"platform/reference/equity/ownership",slug:"/platform/reference/equity/ownership/insider_trading",permalink:"/platform/reference/equity/ownership/insider_trading",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/ownership/insider_trading.md",tags:[],version:"current",frontMatter:{title:"insider_trading",description:"Learn how to use the stock insider trading Python function to get information  about insider trading, including parameter details, return types, and data descriptions.",keywords:["stock insider trading","equity ownership","Python function","parameter details","data description","symbol","transaction type","limit","provider","returns","results","chart","metadata","data","filing date","transaction date","reporting CIK","securities owned","company CIK","reporting name","type of owner","acquisition or disposition","form type","securities transacted","price","security name","link"]},sidebar:"tutorialSidebar",previous:{title:"form_13f",permalink:"/platform/reference/equity/ownership/form_13f"},next:{title:"institutional",permalink:"/platform/reference/equity/ownership/institutional"}},o={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:"equity/ownership/insider_trading - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get data about trading by a company's management team and board of directors."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.ownership.insider_trading(symbol='AAPL', provider='fmp')\nobb.equity.ownership.insider_trading(symbol='AAPL', limit=500, provider='intrinio')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"500"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"500"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_type"}),(0,n.jsx)(t.td,{children:"Literal['award', 'conversion', 'return', 'expire_short', 'in_kind', 'gift', 'expire_long', 'discretionary', 'other', 'small', 'exempt', 'otm', 'purchase', 'sale', 'tender', 'will', 'itm', 'trust']"}),(0,n.jsx)(t.td,{children:"Type of the transaction."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"500"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ownership_type"}),(0,n.jsx)(t.td,{children:"Literal['D', 'I']"}),(0,n.jsx)(t.td,{children:"Type of ownership."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sort_by"}),(0,n.jsx)(t.td,{children:"Literal['filing_date', 'updated_on']"}),(0,n.jsx)(t.td,{children:"Field to sort by."}),(0,n.jsx)(t.td,{children:"updated_on"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol to get data for."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"500"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"summary"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Return a summary of the insider activity instead of the individuals."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[InsiderTrading]\n        Serializable results.\n\n    provider : Optional[Literal['fmp', 'intrinio', 'tmx']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"company_cik"}),(0,n.jsx)(t.td,{children:"Union[str, int]"}),(0,n.jsx)(t.td,{children:"CIK number of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_date"}),(0,n.jsx)(t.td,{children:"Union[date, datetime]"}),(0,n.jsx)(t.td,{children:"Filing date of the trade."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Date of the transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_cik"}),(0,n.jsx)(t.td,{children:"Union[str, int]"}),(0,n.jsx)(t.td,{children:"Reporting individual's CIK."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_title"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The title held by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Type of transaction being reported."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"acquisition_or_disposition"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Acquisition or disposition of the shares."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"security_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The type of security transacted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securities_owned"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Number of securities owned by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securities_transacted"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Number of securities transacted by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The price of the transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_url"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Link to the filing."})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"company_cik"}),(0,n.jsx)(t.td,{children:"Union[str, int]"}),(0,n.jsx)(t.td,{children:"CIK number of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_date"}),(0,n.jsx)(t.td,{children:"Union[date, datetime]"}),(0,n.jsx)(t.td,{children:"Filing date of the trade."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Date of the transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_cik"}),(0,n.jsx)(t.td,{children:"Union[str, int]"}),(0,n.jsx)(t.td,{children:"Reporting individual's CIK."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_title"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The title held by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Type of transaction being reported."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"acquisition_or_disposition"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Acquisition or disposition of the shares."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"security_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The type of security transacted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securities_owned"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Number of securities owned by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securities_transacted"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Number of securities transacted by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The price of the transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_url"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Link to the filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"form_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Form type of the insider trading."})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"company_cik"}),(0,n.jsx)(t.td,{children:"Union[str, int]"}),(0,n.jsx)(t.td,{children:"CIK number of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_date"}),(0,n.jsx)(t.td,{children:"Union[date, datetime]"}),(0,n.jsx)(t.td,{children:"Filing date of the trade."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Date of the transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_cik"}),(0,n.jsx)(t.td,{children:"Union[str, int]"}),(0,n.jsx)(t.td,{children:"Reporting individual's CIK."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_title"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The title held by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Type of transaction being reported."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"acquisition_or_disposition"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Acquisition or disposition of the shares."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"security_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The type of security transacted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securities_owned"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Number of securities owned by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securities_transacted"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Number of securities transacted by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The price of the transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_url"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"URL of the filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"company_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"conversion_exercise_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Conversion/Exercise price of the shares."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"deemed_execution_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Deemed execution date of the trade."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exercise_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Exercise date of the trade."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expiration_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Expiration date of the derivative."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"underlying_security_title"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Name of the underlying non-derivative security related to this derivative transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"underlying_shares"}),(0,n.jsx)(t.td,{children:"Union[float, int]"}),(0,n.jsx)(t.td,{children:"Number of underlying shares related to this derivative transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"nature_of_ownership"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Nature of ownership of the insider trading."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"director"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether the owner is a director."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"officer"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether the owner is an officer."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ten_percent_owner"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether the owner is a 10% owner."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_relation"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether the owner is having another relation."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"derivative_transaction"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether the owner is having a derivative transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"report_line_number"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Report line number of the insider trading."})]})]})]})}),(0,n.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"company_cik"}),(0,n.jsx)(t.td,{children:"Union[str, int]"}),(0,n.jsx)(t.td,{children:"CIK number of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_date"}),(0,n.jsx)(t.td,{children:"Union[date, datetime]"}),(0,n.jsx)(t.td,{children:"Filing date of the trade."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Date of the transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_cik"}),(0,n.jsx)(t.td,{children:"Union[str, int]"}),(0,n.jsx)(t.td,{children:"Reporting individual's CIK."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The name of the insider."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_title"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The title held by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Type of transaction being reported."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"acquisition_or_disposition"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Acquisition or disposition of the shares."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"security_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The type of security transacted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securities_owned"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of shares held by the insider."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securities_transacted"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The total number of shares traded by the insider over the period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The price of the transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_url"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Link to the filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"period"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The period of the activity. Bucketed by three, six, and twelve months."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"acquisition_or_deposition"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Whether the insider bought or sold the shares."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"number_of_trades"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of shares traded over the period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trade_value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The value of the shares traded by the insider."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securities_bought"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The total number of shares bought by all insiders over the period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securities_sold"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The total number of shares sold by all insiders over the period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"net_activity"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The total net activity by all insiders over the period."})]})]})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const i={tabItem:"tabItem_Ymn6"};var d=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,d.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,s),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(5260),i=r(74848);function d(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(96540),i=r(34164),d=r(23104),s=r(56347),l=r(205),c=r(57485),h=r(31682),a=r(70679);function o(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const i=(0,s.W6)(),d=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(d),(0,n.useCallback)((e=>{if(!d)return;const t=new URLSearchParams(i.location.search);t.set(d,e),i.replace({...i.location,search:t.toString()})}),[d,i])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,d=x(e),[s,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:d}))),[h,o]=u({queryString:r,groupId:i}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,d]=(0,a.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&d.set(e)}),[r,d])]}({groupId:i}),m=(()=>{const e=h??p;return j({value:e,tabValues:d})?e:null})();(0,l.A)((()=>{m&&c(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:d}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),f(e)}),[o,f,d]),tabValues:d}}var f=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:c}=e;const h=[],{blockElementScrollPositionUntilNextRender:a}=(0,d.a_)(),{pathname:o}=(0,s.zy)(),x=e=>{const t=e.currentTarget,r=h.indexOf(t),i=c[r].value;i!==n&&(a(t),l(i))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=h.indexOf(e.currentTarget)+1;t=h[r]??h[0];break}case"ArrowLeft":{const r=h.indexOf(e.currentTarget)-1;t=h[r]??h[h.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:t,label:r,attributes:d}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>h.push(e),onKeyDown:j,onClick:x,...d,className:(0,i.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,d?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:i}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function _(e){const t=(0,f.A)();return(0,b.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const i={},d=n.createContext(i);function s(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);