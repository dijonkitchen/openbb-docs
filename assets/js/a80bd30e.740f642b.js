"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84284],{37711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=r(74848),d=r(28453),n=r(18228),s=r(19365);const l={title:"Financial Ratios",description:"Get an extensive set of financial and accounting ratios for a given company over time"},a=void 0,c={id:"platform/data_models/FinancialRatios",title:"Financial Ratios",description:"Get an extensive set of financial and accounting ratios for a given company over time",source:"@site/content/platform/data_models/FinancialRatios.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/FinancialRatios",permalink:"/platform/data_models/FinancialRatios",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/FinancialRatios.md",tags:[],version:"current",frontMatter:{title:"Financial Ratios",description:"Get an extensive set of financial and accounting ratios for a given company over time"},sidebar:"tutorialSidebar",previous:{title:"Federal Funds Rate",permalink:"/platform/data_models/FederalFundsRate"},next:{title:"Form 13FHR",permalink:"/platform/data_models/Form13FHR"}},o={},h=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,i.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Model name"}),(0,i.jsx)(t.th,{children:"Parameters class"}),(0,i.jsx)(t.th,{children:"Data class"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"FinancialRatios"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"FinancialRatiosQueryParams"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"FinancialRatiosData"})})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.financial_ratios import (\nFinancialRatiosData,\nFinancialRatiosQueryParams,\n)\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.A,{children:[(0,i.jsx)(s.A,{value:"standard",label:"standard",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol to get data for."}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"period"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Time period of the data to return."}),(0,i.jsx)(t.td,{children:"annual"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"limit"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The number of data entries to return."}),(0,i.jsx)(t.td,{children:"12"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"provider"}),(0,i.jsx)(t.td,{children:"Literal['fmp', 'intrinio']"}),(0,i.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]})]})]})}),(0,i.jsx)(s.A,{value:"fmp",label:"fmp",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol to get data for."}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"period"}),(0,i.jsx)(t.td,{children:"Literal['annual', 'quarter', 'ttm']"}),(0,i.jsx)(t.td,{children:"Time period of the data to return."}),(0,i.jsx)(t.td,{children:"annual"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"limit"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The number of data entries to return."}),(0,i.jsx)(t.td,{children:"12"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"provider"}),(0,i.jsx)(t.td,{children:"Literal['fmp', 'intrinio']"}),(0,i.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]})]})]})}),(0,i.jsx)(s.A,{value:"intrinio",label:"intrinio",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbol"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Symbol to get data for."}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"period"}),(0,i.jsx)(t.td,{children:"Literal['annual', 'quarter', 'ttm', 'ytd']"}),(0,i.jsx)(t.td,{children:"Time period of the data to return."}),(0,i.jsx)(t.td,{children:"annual"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"limit"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The number of data entries to return."}),(0,i.jsx)(t.td,{children:"12"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"provider"}),(0,i.jsx)(t.td,{children:"Literal['fmp', 'intrinio']"}),(0,i.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fiscal_year"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"The specific fiscal year. Reports do not go beyond 2008."}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,i.jsxs)(n.A,{children:[(0,i.jsx)(s.A,{value:"standard",label:"standard",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"period_ending"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The date of the data."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fiscal_period"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Period of the financial ratios."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fiscal_year"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Fiscal year."})]})]})]})}),(0,i.jsx)(s.A,{value:"fmp",label:"fmp",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"period_ending"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The date of the data."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fiscal_period"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Period of the financial ratios."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fiscal_year"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Fiscal year."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"current_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Current ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"quick_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Quick ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cash_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Cash ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"days_of_sales_outstanding"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Days of sales outstanding."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"days_of_inventory_outstanding"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Days of inventory outstanding."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"operating_cycle"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Operating cycle."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"days_of_payables_outstanding"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Days of payables outstanding."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cash_conversion_cycle"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Cash conversion cycle."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"gross_profit_margin"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Gross profit margin."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"operating_profit_margin"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Operating profit margin."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"pretax_profit_margin"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Pretax profit margin."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"net_profit_margin"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Net profit margin."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"effective_tax_rate"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Effective tax rate."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"return_on_assets"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Return on assets."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"return_on_equity"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Return on equity."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"return_on_capital_employed"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Return on capital employed."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"net_income_per_ebt"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Net income per EBT."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ebt_per_ebit"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"EBT per EBIT."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ebit_per_revenue"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"EBIT per revenue."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"debt_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Debt ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"debt_equity_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Debt equity ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"long_term_debt_to_capitalization"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Long term debt to capitalization."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"total_debt_to_capitalization"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Total debt to capitalization."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"interest_coverage"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Interest coverage."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cash_flow_to_debt_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Cash flow to debt ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"company_equity_multiplier"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Company equity multiplier."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"receivables_turnover"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Receivables turnover."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"payables_turnover"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Payables turnover."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"inventory_turnover"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Inventory turnover."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fixed_asset_turnover"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Fixed asset turnover."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"asset_turnover"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Asset turnover."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"operating_cash_flow_per_share"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Operating cash flow per share."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"free_cash_flow_per_share"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Free cash flow per share."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cash_per_share"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Cash per share."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"payout_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Payout ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"operating_cash_flow_sales_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Operating cash flow sales ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"free_cash_flow_operating_cash_flow_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Free cash flow operating cash flow ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"cash_flow_coverage_ratios"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Cash flow coverage ratios."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"short_term_coverage_ratios"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Short term coverage ratios."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"capital_expenditure_coverage_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Capital expenditure coverage ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dividend_paid_and_capex_coverage_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Dividend paid and capex coverage ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dividend_payout_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Dividend payout ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"price_book_value_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Price book value ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"price_to_book_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Price to book ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"price_to_sales_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Price to sales ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"price_earnings_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Price earnings ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"price_to_free_cash_flows_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Price to free cash flows ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"price_to_operating_cash_flows_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Price to operating cash flows ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"price_cash_flow_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Price cash flow ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"price_earnings_to_growth_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Price earnings to growth ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"price_sales_ratio"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Price sales ratio."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dividend_yield"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Dividend yield."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dividend_yield_percentage"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Dividend yield percentage."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"dividend_per_share"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Dividend per share."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"enterprise_value_multiple"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Enterprise value multiple."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"price_fair_value"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Price fair value."})]})]})]})}),(0,i.jsx)(s.A,{value:"intrinio",label:"intrinio",children:(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"period_ending"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"The date of the data."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fiscal_period"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Period of the financial ratios."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fiscal_year"}),(0,i.jsx)(t.td,{children:"int"}),(0,i.jsx)(t.td,{children:"Fiscal year."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var i=r(34164);const d={tabItem:"tabItem_Ymn6"};var n=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,i.A)(d.tabItem,s),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>g});var i=r(96540),d=r(34164),n=r(23104),s=r(56347),l=r(205),a=r(57485),c=r(31682),o=r(89466);function h(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:i,default:d}}=e;return{value:t,label:r,attributes:i,default:d}}))}function x(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const d=(0,s.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(n),(0,i.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(d.location.search);t.set(n,e),d.replace({...d.location,search:t.toString()})}),[n,d])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:d}=e,n=x(e),[s,a]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:n}))),[c,h]=u({queryString:r,groupId:d}),[f,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[d,n]=(0,o.Dv)(r);return[d,(0,i.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:d}),m=(()=>{const e=c??f;return j({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{m&&a(m)}),[m]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!j({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),p(e)}),[h,p,n]),tabValues:n}}var p=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var _=r(74848);function b(e){let{className:t,block:r,selectedValue:i,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),{pathname:h}=(0,s.zy)(),x=e=>{const t=e.currentTarget,r=c.indexOf(t),d=a[r].value;d!==i&&(o(t),l(d))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:j,onClick:x,...n,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,n?.className,{"border-b-2 pointer-events-none":i===t,"border-b-2 text-[#669dcb] border-[#669dcb]":i===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":i===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":i!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":i!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:d}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===d));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==d})))})}function y(e){const t=f(e);return(0,_.jsxs)("div",{className:(0,d.A)("tabs-container",m.tabList),children:[(0,_.jsx)(b,{...e,...t}),(0,_.jsx)(v,{...e,...t})]})}function g(e){const t=(0,p.A)();return(0,_.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var i=r(96540);const d={},n=i.createContext(d);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);