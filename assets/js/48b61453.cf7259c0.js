"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56540],{35856:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>h,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>x});var n=t(74848),d=t(28453),i=t(94331),s=t(18228),l=t(19365);const a={title:"price_performance",description:"Learn about price performance returns over different periods and how  to retrieve data for a given symbol. Find out how to analyze the time series data,  view the provider information, and access additional metadata and warnings.",keywords:["price performance","return","periods","symbol","data","time series","chart","provider","metadata","warnings","one-day return","week to date return","one-week return","month to date return","one-month return","quarter to date return","three-month return","six-month return","year to date return","one-year return","three-year return","five-year return","ten-year return","max return","ticker symbol"]},h=void 0,c={id:"platform/reference/etf/price_performance",title:"price_performance",description:"Learn about price performance returns over different periods and how  to retrieve data for a given symbol. Find out how to analyze the time series data,  view the provider information, and access additional metadata and warnings.",source:"@site/content/platform/reference/etf/price_performance.md",sourceDirName:"platform/reference/etf",slug:"/platform/reference/etf/price_performance",permalink:"/platform/reference/etf/price_performance",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/etf/price_performance.md",tags:[],version:"current",frontMatter:{title:"price_performance",description:"Learn about price performance returns over different periods and how  to retrieve data for a given symbol. Find out how to analyze the time series data,  view the provider information, and access additional metadata and warnings.",keywords:["price performance","return","periods","symbol","data","time series","chart","provider","metadata","warnings","one-day return","week to date return","one-week return","month to date return","one-month return","quarter to date return","three-month return","six-month return","year to date return","one-year return","three-year return","five-year return","ten-year return","max return","ticker symbol"]},sidebar:"tutorialSidebar",previous:{title:"info",permalink:"/platform/reference/etf/info"},next:{title:"search",permalink:"/platform/reference/etf/search"}},o={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"etf/price_performance - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Price performance as a return, over different periods."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.etf.price_performance(symbol='QQQ', provider='fmp')\nobb.etf.price_performance(symbol='SPY,QQQ,IWM,DJIA', provider='fmp')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(r.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['finviz', 'fmp', 'intrinio']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, i, n, v, i, z."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"finviz",label:"finviz",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(r.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['finviz', 'fmp', 'intrinio']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, i, n, v, i, z."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(r.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['finviz', 'fmp', 'intrinio']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, i, n, v, i, z."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(r.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): finviz, fmp, intrinio."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['finviz', 'fmp', 'intrinio']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, i, n, v, i, z."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"return_type"}),(0,n.jsx)(r.td,{children:"Literal['trailing', 'calendar']"}),(0,n.jsx)(r.td,{children:"The type of returns to return, a trailing or calendar window."}),(0,n.jsx)(r.td,{children:"trailing"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"adjustment"}),(0,n.jsx)(r.td,{children:"Literal['splits_only', 'splits_and_dividends']"}),(0,n.jsx)(r.td,{children:"The adjustment factor, 'splits_only' will return pure price performance."}),(0,n.jsx)(r.td,{children:"splits_and_dividends"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[EtfPricePerformance]\n        Serializable results.\n\n    provider : Optional[Literal['finviz', 'fmp', 'intrinio']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_day"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-day return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"wtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Week to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_week"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-week return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"mtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Month to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"qtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Quarter to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"six_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Six-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ytd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Year to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"two_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Two-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"four_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Four-year"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"five_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Five-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ten_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Ten-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"max"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Return from the beginning of the time series."})]})]})]})}),(0,n.jsx)(l.A,{value:"finviz",label:"finviz",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The ticker symbol."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_day"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-day return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"wtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Week to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_week"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-week return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"mtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Month to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"qtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Quarter to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"six_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Six-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ytd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Year to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"two_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Two-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"four_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Four-year"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"five_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Five-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ten_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Ten-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"max"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Return from the beginning of the time series."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volatility_week"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-week realized volatility, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volatility_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-month realized volatility, as a normalized percent."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"price"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Last Price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Current volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"average_volume"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Average daily volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"relative_volume"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Relative volume as a ratio of current volume to average volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"analyst_recommendation"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The analyst consensus, on a scale of 1-5 where 1 is a buy and 5 is a sell."})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The ticker symbol."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_day"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-day return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"wtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Week to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_week"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-week return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"mtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Month to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"qtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Quarter to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"six_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Six-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ytd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Year to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"two_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Two-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"four_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Four-year"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"five_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Five-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ten_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Ten-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"max"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Return from the beginning of the time series."})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_day"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-day return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"wtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Week to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_week"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-week return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"mtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Month to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"qtd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Quarter to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"six_month"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Six-month return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ytd"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Year to date return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"one_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"One-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"two_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Two-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"three_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Three-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"four_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Four-year"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"five_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Five-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ten_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Ten-year return."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"max"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Return from the beginning of the time series."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"max_annualized"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Annualized rate of return from inception."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volatility_one_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Trailing one-year annualized volatility."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volatility_three_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Trailing three-year annualized volatility."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volatility_five_year"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Trailing five-year annualized volatility."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The trading volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume_avg_30"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The one-month average daily volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume_avg_90"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The three-month average daily volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume_avg_180"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The six-month average daily volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"beta"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Beta compared to the S&P 500."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"nav"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Net asset value per share."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_high"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The 52-week high price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"year_low"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The 52-week low price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"market_cap"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"The market capitalization."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"shares_outstanding"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The number of shares outstanding."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"updated"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The date of the data."})]})]})]})})]})]})}function u(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(34164);const d={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(d.tabItem,s),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),d=t(74848);function i(e){let{title:r}=e;return(0,d.jsx)(n.A,{children:(0,d.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>_});var n=t(96540),d=t(34164),i=t(23104),s=t(56347),l=t(205),a=t(57485),h=t(31682),c=t(70679);function o(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:d}}=e;return{value:r,label:t,attributes:n,default:d}}))}function x(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??o(t);return function(e){const r=(0,h.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function j(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:t}=e;const d=(0,s.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,a.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(d.location.search);r.set(i,e),d.replace({...d.location,search:r.toString()})}),[i,d])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:d}=e,i=x(e),[s,a]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[h,o]=u({queryString:t,groupId:d}),[f,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[d,i]=(0,c.Dv)(t);return[d,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:d}),p=(()=>{const e=h??f;return j({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{p&&a(p)}),[p]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),m(e)}),[o,m,i]),tabValues:i}}var m=t(92303);const p={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var y=t(74848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:a}=e;const h=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:o}=(0,s.zy)(),x=e=>{const r=e.currentTarget,t=h.indexOf(r),d=a[t].value;d!==n&&(c(r),l(d))},j=e=>{let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=h.indexOf(e.currentTarget)+1;r=h[t]??h[0];break}case"ArrowLeft":{const t=h.indexOf(e.currentTarget)-1;r=h[t]??h[h.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>h.push(e),onKeyDown:j,onClick:x,...i,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",p.tabItem,i?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&o.startsWith("/terminal")}),children:t??r},r)}))})}function b(e){let{lazy:r,children:t,selectedValue:d}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===d));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==d})))})}function g(e){const r=f(e);return(0,y.jsxs)("div",{className:(0,d.A)("tabs-container",p.tabList),children:[(0,y.jsx)(v,{...e,...r}),(0,y.jsx)(b,{...e,...r})]})}function _(e){const r=(0,m.A)();return(0,y.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var n=t(96540);const d={},i=n.createContext(d);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);