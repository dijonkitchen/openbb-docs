"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86022],{80687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>o});var r=n(74848),d=n(28453),i=n(18228),s=n(19365);const l={title:"Cash Flow Statement",description:"Get the cash flow statement for a given company"},c=void 0,h={id:"platform/data_models/CashFlowStatement",title:"Cash Flow Statement",description:"Get the cash flow statement for a given company",source:"@site/content/platform/data_models/CashFlowStatement.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/CashFlowStatement",permalink:"/platform/data_models/CashFlowStatement",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/CashFlowStatement.md",tags:[],version:"current",frontMatter:{title:"Cash Flow Statement",description:"Get the cash flow statement for a given company"},sidebar:"tutorialSidebar",previous:{title:"Calendar Splits",permalink:"/platform/data_models/CalendarSplits"},next:{title:"Cash Flow Statement Growth",permalink:"/platform/data_models/CashFlowStatementGrowth"}},a={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,r.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Model name"}),(0,r.jsx)(t.th,{children:"Parameters class"}),(0,r.jsx)(t.th,{children:"Data class"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CashFlowStatement"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CashFlowStatementQueryParams"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CashFlowStatementData"})})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.cash_flow import (\nCashFlowStatementData,\nCashFlowStatementQueryParams,\n)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol to get data for."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"Annotated[int, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"The number of data entries to return."}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(s.A,{value:"fmp",label:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol to get data for."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"Annotated[int, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"The number of data entries to return."}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period"}),(0,r.jsx)(t.td,{children:"Literal['annual', 'quarter']"}),(0,r.jsx)(t.td,{children:"Time period of the data to return."}),(0,r.jsx)(t.td,{children:"annual"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(s.A,{value:"intrinio",label:"intrinio",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol to get data for."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"Annotated[int, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"The number of data entries to return."}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period"}),(0,r.jsx)(t.td,{children:"Literal['annual', 'quarter', 'ttm', 'ytd']"}),(0,r.jsx)(t.td,{children:"Time period of the data to return."}),(0,r.jsx)(t.td,{children:"annual"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_year"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"The specific fiscal year.  Reports do not go beyond 2008."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(s.A,{value:"polygon",label:"polygon",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol to get data for."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"Annotated[int, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"The number of data entries to return."}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period"}),(0,r.jsx)(t.td,{children:"Literal['annual', 'quarter', 'ttm']"}),(0,r.jsx)(t.td,{children:"Time period of the data to return."}),(0,r.jsx)(t.td,{children:"annual"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filing_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Filing date of the financial statement."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filing_date_lt"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Filing date less than the given date."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filing_date_lte"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Filing date less than or equal to the given date."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filing_date_gt"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Filing date greater than the given date."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filing_date_gte"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Filing date greater than or equal to the given date."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period_of_report_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Period of report date of the financial statement."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period_of_report_date_lt"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Period of report date less than the given date."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period_of_report_date_lte"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Period of report date less than or equal to the given date."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period_of_report_date_gt"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Period of report date greater than the given date."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period_of_report_date_gte"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"Period of report date greater than or equal to the given date."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"include_sources"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether to include the sources of the financial statement."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"order"}),(0,r.jsx)(t.td,{children:"Literal['asc', 'desc']"}),(0,r.jsx)(t.td,{children:"Order of the financial statement."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sort"}),(0,r.jsx)(t.td,{children:"Literal['filing_date', 'period_of_report_date']"}),(0,r.jsx)(t.td,{children:"Sort of the financial statement."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})}),(0,r.jsx)(s.A,{value:"yfinance",label:"yfinance",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Symbol to get data for."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"Annotated[int, Ge(ge=0)]"}),(0,r.jsx)(t.td,{children:"The number of data entries to return."}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period"}),(0,r.jsx)(t.td,{children:"Literal['annual', 'quarter']"}),(0,r.jsx)(t.td,{children:"Time period of the data to return."}),(0,r.jsx)(t.td,{children:"annual"}),(0,r.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(s.A,{value:"standard",label:"standard",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period_ending"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_period"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_year"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]})]})]})}),(0,r.jsx)(s.A,{value:"fmp",label:"fmp",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period_ending"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_period"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_year"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filing_date"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The date of the filing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"accepted_date"}),(0,r.jsx)(t.td,{children:"datetime"}),(0,r.jsx)(t.td,{children:"The date the filing was accepted."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"reported_currency"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The currency in which the cash flow statement was reported."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_income"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net income."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"depreciation_and_amortization"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Depreciation and amortization."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"deferred_income_tax"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Deferred income tax."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stock_based_compensation"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Stock-based compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_in_working_capital"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Change in working capital."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_in_account_receivables"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Change in account receivables."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_in_inventory"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Change in inventory."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_in_account_payable"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Change in account payable."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_in_other_working_capital"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Change in other working capital."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"change_in_other_non_cash_items"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Change in other non-cash items."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_operating_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash from operating activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"purchase_of_property_plant_and_equipment"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Purchase of property, plant and equipment."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"acquisitions"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Acquisitions."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"purchase_of_investment_securities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Purchase of investment securities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sale_and_maturity_of_investments"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Sale and maturity of investments."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"other_investing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Other investing activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_investing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash from investing activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"repayment_of_debt"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Repayment of debt."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"issuance_of_common_equity"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Issuance of common equity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"repurchase_of_common_equity"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Repurchase of common equity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"payment_of_dividends"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Payment of dividends."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"other_financing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Other financing activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_financing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash from financing activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"effect_of_exchange_rate_changes_on_cash"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Effect of exchange rate changes on cash."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_change_in_cash_and_equivalents"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net change in cash and equivalents."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cash_at_beginning_of_period"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Cash at beginning of period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cash_at_end_of_period"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Cash at end of period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"operating_cash_flow"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Operating cash flow."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"capital_expenditure"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Capital expenditure."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"free_cash_flow"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"link"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Link to the filing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"final_link"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Link to the filing document."})]})]})]})}),(0,r.jsx)(s.A,{value:"intrinio",label:"intrinio",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period_ending"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_period"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_year"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"reported_currency"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The currency in which the balance sheet is reported."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_income_continuing_operations"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Income (Continuing Operations)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_income_discontinued_operations"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Income (Discontinued Operations)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_income"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Consolidated Net Income."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provision_for_loan_losses"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Provision for Loan Losses"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"provision_for_credit_losses"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Provision for credit losses"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"depreciation_expense"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Depreciation Expense."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"amortization_expense"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Amortization Expense."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"share_based_compensation"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Share-based compensation."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"non_cash_adjustments_to_reconcile_net_income"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Non-Cash Adjustments to Reconcile Net Income."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"changes_in_operating_assets_and_liabilities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Changes in Operating Assets and Liabilities (Net)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_continuing_operating_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Cash from Continuing Operating Activities"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_discontinued_operating_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Cash from Discontinued Operating Activities"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_operating_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Cash from Operating Activities"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"divestitures"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Divestitures"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sale_of_property_plant_and_equipment"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Sale of Property, Plant, and Equipment"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"acquisitions"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Acquisitions"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"purchase_of_investments"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Purchase of Investments"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"purchase_of_investment_securities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Purchase of Investment Securities"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sale_and_maturity_of_investments"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Sale and Maturity of Investments"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"loans_held_for_sale"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Loans Held for Sale (Net)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"purchase_of_property_plant_and_equipment"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Purchase of Property, Plant, and Equipment"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"other_investing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Other Investing Activities (Net)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_continuing_investing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Cash from Continuing Investing Activities"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_discontinued_investing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Cash from Discontinued Investing Activities"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_investing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Cash from Investing Activities"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"payment_of_dividends"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Payment of Dividends"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"repurchase_of_common_equity"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Repurchase of Common Equity"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"repurchase_of_preferred_equity"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Repurchase of Preferred Equity"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"issuance_of_common_equity"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Issuance of Common Equity"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"issuance_of_preferred_equity"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Issuance of Preferred Equity"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"issuance_of_debt"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Issuance of Debt"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"repayment_of_debt"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Repayment of Debt"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"other_financing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Other Financing Activities (Net)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cash_interest_received"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Cash Interest Received"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_change_in_deposits"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Change in Deposits"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_increase_in_fed_funds_sold"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Increase in Fed Funds Sold"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_continuing_financing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Cash from Continuing Financing Activities"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_discontinued_financing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Cash from Discontinued Financing Activities"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_from_financing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Cash from Financing Activities"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"effect_of_exchange_rate_changes"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Effect of Exchange Rate Changes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"other_net_changes_in_cash"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Other Net Changes in Cash"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_change_in_cash_and_equivalents"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net Change in Cash and Equivalents"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cash_income_taxes_paid"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Cash Income Taxes Paid"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"cash_interest_paid"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Cash Interest Paid"})]})]})]})}),(0,r.jsx)(s.A,{value:"polygon",label:"polygon",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period_ending"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_period"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_year"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_flow_from_operating_activities_continuing"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash flow from operating activities continuing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_flow_from_operating_activities_discontinued"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash flow from operating activities discontinued."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_flow_from_operating_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash flow from operating activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_flow_from_investing_activities_continuing"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash flow from investing activities continuing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_flow_from_investing_activities_discontinued"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash flow from investing activities discontinued."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_flow_from_investing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash flow from investing activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_flow_from_financing_activities_continuing"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash flow from financing activities continuing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_flow_from_financing_activities_discontinued"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash flow from financing activities discontinued."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_flow_from_financing_activities"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash flow from financing activities."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_flow_continuing"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash flow continuing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_flow_discontinued"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash flow discontinued."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"exchange_gains_losses"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Exchange gains losses."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"net_cash_flow"}),(0,r.jsx)(t.td,{children:"float"}),(0,r.jsx)(t.td,{children:"Net cash flow."})]})]})]})}),(0,r.jsx)(s.A,{value:"yfinance",label:"yfinance",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period_ending"}),(0,r.jsx)(t.td,{children:"date"}),(0,r.jsx)(t.td,{children:"The end date of the reporting period."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_period"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The fiscal period of the report."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fiscal_year"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"The fiscal year of the fiscal period."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const d={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(d.tabItem,s),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),d=n(34164),i=n(23104),s=n(56347),l=n(205),c=n(57485),h=n(31682),a=n(70679);function o(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:d}}=e;return{value:t,label:n,attributes:r,default:d}}))}function x(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??o(n);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const d=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(d.location.search);t.set(i,e),d.replace({...d.location,search:t.toString()})}),[i,d])]}function u(e){const{defaultValue:t,queryString:n=!1,groupId:d}=e,i=x(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[h,o]=f({queryString:n,groupId:d}),[u,_]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[d,i]=(0,a.Dv)(n);return[d,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:d}),p=(()=>{const e=h??u;return j({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{p&&c(p)}),[p]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),_(e)}),[o,_,i]),tabValues:i}}var _=n(92303);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:c}=e;const h=[],{blockElementScrollPositionUntilNextRender:a}=(0,i.a_)(),{pathname:o}=(0,s.zy)(),x=e=>{const t=e.currentTarget,n=h.indexOf(t),d=c[n].value;d!==r&&(a(t),l(d))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=h.indexOf(e.currentTarget)+1;t=h[n]??h[0];break}case"ArrowLeft":{const n=h.indexOf(e.currentTarget)-1;t=h[n]??h[h.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>h.push(e),onKeyDown:j,onClick:x,...i,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,i?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&o.startsWith("/terminal")}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:d}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===d));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==d})))})}function b(e){const t=u(e);return(0,m.jsxs)("div",{className:(0,d.A)("tabs-container",p.tabList),children:[(0,m.jsx)(g,{...e,...t}),(0,m.jsx)(v,{...e,...t})]})}function y(e){const t=(0,_.A)();return(0,m.jsx)(b,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const d={},i=r.createContext(d);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);