"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1672],{16346:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>h,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>x});var l=i(74848),s=i(28453),n=i(94331);const r={title:"Loading Historical Price Data",sidebar_position:4,description:"This page provides an introduction to historical prices, including how to access and use them in the OpenBB Platform.",keywords:["stocks","companies","prices","historical","ohlc","intraday","intervals","market data"]},h=void 0,d={id:"platform/getting_started/historical_prices",title:"Loading Historical Price Data",description:"This page provides an introduction to historical prices, including how to access and use them in the OpenBB Platform.",source:"@site/content/platform/getting_started/historical_prices.mdx",sourceDirName:"platform/getting_started",slug:"/platform/getting_started/historical_prices",permalink:"/docs/platform/getting_started/historical_prices",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/getting_started/historical_prices.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,sidebarPosition:4,frontMatter:{title:"Loading Historical Price Data",sidebar_position:4,description:"This page provides an introduction to historical prices, including how to access and use them in the OpenBB Platform.",keywords:["stocks","companies","prices","historical","ohlc","intraday","intervals","market data"]},sidebar:"tutorialSidebar",previous:{title:"Finding Ticker Symbols",permalink:"/docs/platform/getting_started/find_symbols"},next:{title:"Introduction to Financial Statements",permalink:"/docs/platform/getting_started/financial_statements"}},c={},x=[{value:"Historical OHLC",id:"historical-ohlc",level:2},{value:"Other Types of Symbols",id:"other-types-of-symbols",level:2}];function o(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...t.components},{Details:i}=e;return i||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{title:"Historical Prices - Usage | OpenBB Platform Docs"}),"\n",(0,l.jsx)(e.p,{children:"Historical market prices typically come in the form of OHLC+V - open, high, low, close, volume. There may be additional fields returned by a provider, but those are the expected columns."}),"\n",(0,l.jsx)(e.p,{children:"Granularity and amount of historical data will vary by provider and subscription status. Visit their websites to understand what your entitlements are."}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsx)(e.p,{children:"These examples will assume that the OpenBB Platform is initialized in a Python session."}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"from openbb import obb\nimport pandas as pd\n"})})]}),"\n",(0,l.jsx)(e.h2,{id:"historical-ohlc",children:"Historical OHLC"}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsxs)(e.p,{children:["The ",(0,l.jsx)(e.code,{children:"historical"})," function is located under a submodule for each asset type. In the ",(0,l.jsx)(e.code,{children:"openbb-equity"})," module."]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"help(obb.equity.price.historical)\n"})}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"This endpoint has the most number of providers out of any function. At the time of writing, choices are:"}),"\n"]}),(0,l.jsx)(e.p,{children:"['alpha_vantage', 'cboe', 'fmp', 'intrinio', 'polygon', 'tiingo', 'tmx', 'tradier', 'yfinance']"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Common parameters have been standardized across all sources, ",(0,l.jsx)(e.code,{children:"start_date"}),", ",(0,l.jsx)(e.code,{children:"end_date"}),", ",(0,l.jsx)(e.code,{children:"interval"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["The default interval will be ",(0,l.jsx)(e.code,{children:"1d"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"The depth of historical data and choices for granularity will vary by provider and subscription status. Refer to the website and documentation of each source understand your specific entitlements."}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Despite being in the ",(0,l.jsx)(e.code,{children:"equity"})," module, it's might be possible to get other asset types, like currencies or crypto, from the same endpoint."]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["For demonstration purposes, we will use the ",(0,l.jsx)(e.code,{children:"openbb-yfinance"})," data extension."]}),"\n"]}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'df_daily = obb.equity.price.historical(symbol = "spy", provider="yfinance")\ndf_daily.to_df().head(1)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"dividends"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"stock splits"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"capital gains"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-22"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"396.63"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"400.07"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"395.15"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"399.9"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"60429000"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"})]})})]}),(0,l.jsxs)(e.p,{children:["To load the entire history available from a source, pick a starting date well beyond what it might be. For example, ",(0,l.jsx)(e.code,{children:"1900-01-01"})]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'df_daily =(\n  obb.equity.price.historical(symbol = "spy", start_date = "1990-01-01", provider="yfinance")\n  .to_df()\n)\ndf_daily.head(1)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"dividends"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"stock splits"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"capital gains"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"1993-01-29"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"43.97"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"43.97"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"43.75"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"43.94"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1003200"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"})]})})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Intervals"}),(0,l.jsx)(e.p,{children:"The intervals are entered according to this pattern:"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"1m"})," = One Minute"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"1h"})," = One Hour"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"1d"})," = One Day"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"1W"})," = One Week"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"1M"})," = One Month"]}),"\n"]}),(0,l.jsx)(e.p,{children:"The date for monthly value is the first or last, depending on the provider. This can be easily resampled from daily data."}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'df_monthly = (\n  obb.equity.price.historical("spy", start_date="1990-01-01", interval="1M", provider="yfinance")\n  .to_df()\n)\ndf_monthly.tail(2)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"dividends"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"stock splits"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"capital gains"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-10-01"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"426.62"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"438.14"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"409.21"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"418.2"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1999149700"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-01"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"419.2"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"456.38"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"418.65"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"455.02"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1161239576"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"})]})]})]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Resample a Time Series"}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"yfinance"})," returns the monthly data for the first day of each month. Let's resample it to take from the last, using the daily information captured in the previous cells."]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'(\n    df_daily[["open", "high", "low", "close", "volume"]]\n    .resample("M")\n    .agg(\n        {"open": "first", "high": "max", "low": "min", "close": "last", "volume": "sum"}\n    ).tail(2)\n)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-10-31"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"426.62"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"438.14"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"409.21"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"418.2"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1999149700"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-30"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"419.2"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"456.38"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"418.65"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"455.02"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1210484176"})]})]})]}),(0,l.jsx)(e.p,{children:"We can see that the current month's total volume is higher when we resample the daily time series. It is difficult to know where the discrepancy lays, and it may just be a temporary glitch. However, we can verify that the total volume, according to YahooFinance, is the number we just sampled."}),(0,l.jsx)(e.admonition,{type:"note",children:(0,l.jsx)(e.p,{children:"If you are following along, the results will not match exactly what is displayed here."})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'df_daily.loc["2023-11-01":].sum()["volume"]\n'})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-console",children:"1210484176\n"})})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Differences Between Sources"}),(0,l.jsx)(e.p,{children:"To demonstrate the difference between sources, let's compare values for daily volume from several sources."}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'# Collect the data\n\nyahoo = obb.equity.price.historical("spy", provider="yfinance").to_df()\nalphavantage = obb.equity.price.historical("spy", provider = "alpha_vantage").to_df()\nintrinio = obb.equity.price.historical("spy", provider="intrinio").to_df()\nfmp = obb.equity.price.historical("spy", provider="fmp").to_df()\n\n# Make a new DataFrame with just the volume columns\ncompare = pd.DataFrame()\ncompare["AV Volume"] = alphavantage["volume"].tail(10)\ncompare["FMP Volume"] = fmp["volume"].tail(10)\ncompare["Intrinio Volume"] = intrinio["volume"].tail(10)\ncompare["Yahoo Volume"] = yahoo["volume"].tail(10)\n\ncompare\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"AV Volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"FMP Volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"Intrinio Volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"Yahoo Volume"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-09"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"83174417"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"83071417"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"83174417"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"83174400"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-10"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"89558054"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"89558054"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"89558054"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"89462200"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-13"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"52236068"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"52192568"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"52236068"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"52236100"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-14"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"97176935"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"97130503"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"97176935"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"97176900"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-15"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"77327573"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"77327573"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"77327573"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"77327600"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-16"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"66665797"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"66654468"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"66665797"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"66665800"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-17"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"83193902"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"83193902"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"83193902"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"83133200"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-20"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"70055633"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"69614633"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"70055633"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"69936200"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-21"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"49244639"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"49244639"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"49244639"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"49244600"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-22"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"59446573"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"59313820"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"58205780"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"59394900"})]})]})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"other-types-of-symbols",children:"Other Types of Symbols"}),"\n",(0,l.jsxs)(i,{children:[(0,l.jsxs)(e.p,{children:["Other types of assets and ticker symbols can be loaded from ",(0,l.jsx)(e.code,{children:"obb.equity.price.historical()"}),", below are some examples but not an exhaustive list."]}),(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Share Classes"}),(0,l.jsxs)(e.p,{children:["Some sources use ",(0,l.jsx)(e.code,{children:"-"})," as the distinction between a share class, e.g., ",(0,l.jsx)(e.code,{children:"BRK-A"})," and ",(0,l.jsx)(e.code,{children:"BRK-B"}),". Other formats include:"]}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["A period: ",(0,l.jsx)(e.code,{children:"BRK.A"})]}),"\n",(0,l.jsxs)(e.li,{children:["A slash: ",(0,l.jsx)(e.code,{children:"BRK/A"})]}),"\n",(0,l.jsx)(e.li,{children:"No separator, the share class becomes the fourth or fifth letter."}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'obb.equity.price.historical("brk.b", provider="polygon")\n'})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'obb.equity.price.historical("brk-b", provider="fmp")\n'})}),(0,l.jsx)(e.p,{children:"While some providers handle the different formats on their end, others do not."}),(0,l.jsx)(e.p,{children:"This is something to consider when no results are returned from one source."}),(0,l.jsxs)(e.p,{children:["Some may even use a combination, or accept multiple variations. Sometimes there is no real logic behind the additional characters, ",(0,l.jsx)(e.code,{children:"GOOGL"})," vs. ",(0,l.jsx)(e.code,{children:"GOOG"}),"."]}),(0,l.jsx)(e.p,{children:"These are known unknown variables of ticker symbology, what's good for one source may return errors from another."})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Regional Identifiers"}),(0,l.jsxs)(e.p,{children:["With providers supporting market data from multiple jurisdictions, the most common method for requesting data outside of US-listings is to append a suffix to the ticker symbol (e.g., ",(0,l.jsx)(e.code,{children:"RELIANCE.NS"}),")."]}),(0,l.jsx)(e.p,{children:"Formats may be unique to a provider, so it is best to review the source's documentation for an overview of their specific conventions."}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.a,{href:"https://help.yahoo.com/kb/SLN2310.html",children:"This page"})," on Yahoo describes how they format symbols, which many others follow to some degree."]}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"openbb-tmx"}),' follows the composite convention, "SPY',":US",'". When the symbol is for its domestic Canadian market, "CNQ", no identifier is required.']})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Indices"}),(0,l.jsx)(e.p,{children:"Sources will have their own treatment of these symbols, some examples are:"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"YahooFinance/FMP/CBOE: ^RUT"}),"\n",(0,l.jsxs)(e.li,{children:["Polygon: I",":NDX"]}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'obb.equity.price.historical("^RUT", provider="cboe").to_df().tail(1)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-22"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1796.37"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1804.96"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1785.93"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1792.92"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"})]})})]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'obb.equity.price.historical("^RUT", provider="fmp").to_df().tail(1)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"vwap"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"label"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"adj_close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"unadjusted_volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"change"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"change_percent"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"change_over_time"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-22"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1792.51"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1803.12"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1789.88"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1795.54"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1796.18"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"November 22, 23"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1795.54"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"3.02893"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0.16898"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0.0016898"})]})})]}),(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["For an endpoint geared more specifically towards indices, try ",(0,l.jsx)(e.code,{children:"obb.index.price.historical()"})]})})})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Currencies"}),(0,l.jsx)(e.p,{children:"FX symbols face the same dilemma as share classes, there are several variations of the same symbol."}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["YahooFinance: ",(0,l.jsx)(e.code,{children:"EURUSD=X"})]}),"\n",(0,l.jsxs)(e.li,{children:["Polygon: ",(0,l.jsx)(e.code,{children:"C:EURUSD"})]}),"\n",(0,l.jsxs)(e.li,{children:["AlphaVantage/FMP: ",(0,l.jsx)(e.code,{children:"EURUSD"})]}),"\n"]}),(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["The symbol prefixes are handled internally when ",(0,l.jsx)(e.code,{children:"obb.currency.price.historical()"})," is used, enter as a pair with no extra characters."]})})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'obb.equity.price.historical("EURUSD=X", provider="yfinance").to_df().tail(1)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"dividends"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"stock splits"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-22"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1.0918"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1.0923"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1.0855"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1.0918"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"})]})})]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'obb.equity.price.historical("C:EURUSD", provider="polygon").to_df().tail(1)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"vwap"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"transactions"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-21"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1.09168"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1.0923"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1.0851"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1.0888"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"155827"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"1.0893"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"155827"})]})})]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Crypto"}),(0,l.jsx)(e.p,{children:"Similar, but different to FX tickers."}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["YahooFinance: ",(0,l.jsx)(e.code,{children:"BTC-USD"})]}),"\n",(0,l.jsxs)(e.li,{children:["Polygon: ",(0,l.jsx)(e.code,{children:"X:BTCUSD"})]}),"\n",(0,l.jsxs)(e.li,{children:["AlphaVantage/FMP: ",(0,l.jsx)(e.code,{children:"BTCUSD"})]}),"\n"]}),(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.strong,{children:["The symbol prefixes are handled internally when ",(0,l.jsx)(e.code,{children:"obb.crypto.price.historical()"})," is used, enter as a pair with no extra characters and placing the fiat currency second."]})})}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'obb.equity.price.historical("X:BTCUSD", provider="polygon").to_df().tail(1)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"vwap"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"transactions"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-21"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"35756"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"37900"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"35633"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"37433.8"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"30411.4"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"36841.5"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"464907"})]})})]}),(0,l.jsxs)(e.p,{children:["As noted above, ",(0,l.jsx)(e.code,{children:"X:"})," or other prefixes are not required when using the ",(0,l.jsx)(e.code,{children:"crypto"})," version of this same endpoint."]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'obb.crypto.price.historical("BTCUSD", provider="polygon").to_df().tail(1)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"vwap"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"transactions"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-21"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"35756"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"37900"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"35633"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"37433.8"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"30411.4"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"36841.5"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"464907"})]})})]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Futures"}),(0,l.jsxs)(e.p,{children:["Historical prices for the continuation chart, can be fetched by the ",(0,l.jsx)(e.code,{children:"fmp"})," or ",(0,l.jsx)(e.code,{children:"yfinance"})," data extensions.  Individual active contracts are returned by ",(0,l.jsx)(e.code,{children:"yfinance"}),"."]}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Continuous front-month: ",(0,l.jsx)(e.code,{children:"CL=F"})]}),"\n",(0,l.jsxs)(e.li,{children:["December 2023 contract: ",(0,l.jsx)(e.code,{children:"CLZ24.NYM"})]}),"\n",(0,l.jsxs)(e.li,{children:["March 2024 contract: ",(0,l.jsx)(e.code,{children:"CLH24.NYM"})]}),"\n"]}),(0,l.jsxs)(e.p,{children:["Individual contracts will require knowing which of the CME venues the future is listed on. ",(0,l.jsx)(e.code,{children:'["NYM", "NYB", "CME", "CBT"]'}),"."]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'obb.equity.price.historical("CL=F", provider="fmp").to_df().tail(1)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"vwap"}),(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"label"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"adj_close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"unadjusted_volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"change"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"change_percent"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"change_over_time"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-22"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"77.77"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"77.97"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"73.79"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"76.78"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"368686"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"76.18"}),(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"November 22, 23"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"76.78"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"368686"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"-0.99"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"-1.27"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"-0.0127"})]})})]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'obb.equity.price.historical("CLZ24.NYM", provider="yfinance").to_df().tail(1)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"dividends"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"stock splits"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-22"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"74.07"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"74.07"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"73.41"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"73.46"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"610"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"})]})})]})]}),(0,l.jsxs)(i,{children:[(0,l.jsx)("summary",{mdxType:"summary",children:"Options"}),(0,l.jsxs)(e.p,{children:["Individual options contracts are also loadable from ",(0,l.jsx)(e.code,{children:"openbb.equity.price.historical()"}),"."]}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["YahooFinance: ",(0,l.jsx)(e.code,{children:"SPY241220P00400000"})]}),"\n",(0,l.jsxs)(e.li,{children:["Polygon: ",(0,l.jsx)(e.code,{children:"O:SPY241220P00400000"})]}),"\n"]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'obb.equity.price.historical("SPY241220P00400000", provider="yfinance").to_df().tail(1)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"dividends"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"stock splits"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-22 00:00:00"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"10.5"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"10.82"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"10.25"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"10.61"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"77"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"0"})]})})]}),(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'obb.equity.price.historical("O:SPY241220P00400000", provider="polygon").to_df().tail(1)\n'})}),(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"left"},children:"date"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"open"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"high"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"low"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"close"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"volume"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"vwap"}),(0,l.jsx)(e.th,{style:{textAlign:"right"},children:"transactions"})]})}),(0,l.jsx)(e.tbody,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"left"},children:"2023-11-20"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"10.9"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"10.95"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"10.75"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"10.75"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"17"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"10.8376"}),(0,l.jsx)(e.td,{style:{textAlign:"right"},children:"10"})]})})]})]})]})]})}function g(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(o,{...t})}):o(t)}},94331:(t,e,i)=>{i.d(e,{A:()=>n});i(96540);var l=i(5260),s=i(74848);function n(t){let{title:e}=t;return(0,s.jsx)(l.A,{children:(0,s.jsx)("title",{children:e})})}},28453:(t,e,i)=>{i.d(e,{R:()=>r,x:()=>h});var l=i(96540);const s={},n=l.createContext(s);function r(t){const e=l.useContext(n);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function h(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),l.createElement(n.Provider,{value:e},t.children)}}}]);