"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26292],{37443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=n(74848),r=n(28453),i=n(94331);const l={title:"Stock Screener",description:"This comprehensive guide provides step-by-step instructions for using the Stock Screener tool, an efficient way to discover stocks and narrow down investment options. It includes details on various categories of stocks, detailed examples, and preset parameters for customization. This guide also includes information on how to view, set, and customize presets as per user preferences.",keywords:["stock screener","stock research","stock statistics","stock investing","financial analytics","preset parameters","investment tool","custom presets","trading trends","technical analysis"]},a=void 0,o={id:"terminal/menus/stocks/screener",title:"Stock Screener",description:"This comprehensive guide provides step-by-step instructions for using the Stock Screener tool, an efficient way to discover stocks and narrow down investment options. It includes details on various categories of stocks, detailed examples, and preset parameters for customization. This guide also includes information on how to view, set, and customize presets as per user preferences.",source:"@site/content/terminal/menus/stocks/screener.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/screener",permalink:"/docs/terminal/menus/stocks/screener",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/screener.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"Stock Screener",description:"This comprehensive guide provides step-by-step instructions for using the Stock Screener tool, an efficient way to discover stocks and narrow down investment options. It includes details on various categories of stocks, detailed examples, and preset parameters for customization. This guide also includes information on how to view, set, and customize presets as per user preferences.",keywords:["stock screener","stock research","stock statistics","stock investing","financial analytics","preset parameters","investment tool","custom presets","trading trends","technical analysis"]},sidebar:"tutorialSidebar",previous:{title:"Options",permalink:"/docs/terminal/menus/stocks/options"},next:{title:"Trading Hours",permalink:"/docs/terminal/menus/stocks/tradinghours"}},c={},d=[{value:"Presets",id:"presets",level:3},{value:"Set",id:"set",level:3},{value:"View",id:"view",level:3},{value:"S&amp;P 500 Sector Components",id:"sp-500-sector-components",level:3},{value:"CA",id:"ca",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"Stock Screener - Stocks - Menus | OpenBB Terminal Docs"}),"\n",(0,s.jsxs)(t.p,{children:["The Stock Screener is a diverse tool for discovering comapanies.  It is a great jumping point for narrowing the universe of stocks at the beginning of a research workflow.  Get to the screener from the ",(0,s.jsx)(t.code,{children:"Stocks"})," menu by typing ",(0,s.jsx)(t.code,{children:"scr"}),", and then pressing ",(0,s.jsx)(t.code,{children:"enter"}),".  There are six categories of statistics to sort the defined criteria by."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Overview"}),"\n",(0,s.jsx)(t.li,{children:"Valuation"}),"\n",(0,s.jsx)(t.li,{children:"Financial"}),"\n",(0,s.jsx)(t.li,{children:"Ownership"}),"\n",(0,s.jsx)(t.li,{children:"Performance"}),"\n",(0,s.jsx)(t.li,{children:"Technical"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Running a screen is as easy as entering one of the choices above."}),"\n",(0,s.jsx)(t.h3,{id:"presets",children:"Presets"}),"\n",(0,s.jsxs)(t.p,{children:["The default preset upon entering the sub-menu is, ",(0,s.jsx)(t.code,{children:"top_gainers"}),".  This preset, like some of the others, contain no parameters other than a signal - the name of the preset - and has no corresponding file which can be edited.  All signals are listed in the table below.  Use the commands ",(0,s.jsx)(t.code,{children:"view"})," and ",(0,s.jsx)(t.code,{children:"set"})," to select a new one."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Preset and Signal Name"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"top_gainers"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stocks with the highest % price gain today"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"top_losers"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stocks with the highest % price loss today"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"new_high"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stocks making 52-week high today"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"new_low"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stocks making 52-week low today"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"most_volatile"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stocks with the highest widest high/low trading range today"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"most_active"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stocks with the highest trading volume today"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"unusual_volume"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stocks with unusually high volume today - the highest relative volume ratio"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"overbought"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stock is becoming overvalued and may experience a pullback."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"oversold"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"oversold stocks may represent a buying opportunity for investors"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"downgrades"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stocks downgraded by analysts today"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"upgrades"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stocks upgraded by analysts today"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"earnings_before"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"companies reporting earnings today, before market open"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"earnings_after"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"companies reporting earnings today, after market close"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"recent_insider_buying"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stocks with recent insider buying activity"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"recent_insider_selling"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stocks with recent insider selling activity"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"major_news"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stocks with the highest news coverage today"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"horizontal_sr"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"horizontal channel of price range between support and resistance trendlines"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"tl_resistance"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"once a rising trendline is broken"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"tl_support"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"once a falling trendline is broken"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"wedge_up"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"upward trendline support and upward trendline resistance (reversal)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"wedge_down"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"downward trendline support and downward trendline resistance (reversal)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"wedge"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"upward trendline support, downward trendline resistance (contiunation)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"triangle_ascending"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"upward trendline support and horizontal trendline resistance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"triangle_descending"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"horizontal trendline support and downward trendline resistance"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"channel_up"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"both support and resistance trendlines slope upward"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"channel_down"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"both support and resistance trendlines slope downward"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"channel"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"both support and resistance trendlines are horizontal"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"double_top"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stock with 'M' shape that indicates a bearish reversal in trend"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"double_bottom"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"stock with 'W' shape that indicates a bullish reversal in trend"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"multiple_top"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"same as double_top hitting more highs"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"multiple_bottom"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"same as double_bottom hitting more lows"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"head_shoulders"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"chart formation that predicts a bullish-to-bearish trend reversal"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"head_shoulders_inverse"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"chart formation that predicts a bearish-to-bullish trend reversal"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["These signals offer a good starting point, and results can be narrowed by creating a custom preset with defined parameters.  Place new presets (which are text files saved as an ",(0,s.jsx)(t.code,{children:".ini"})," type) in the OpenBBUserData folder: ",(0,s.jsx)(t.code,{children:"~/OpenBBUserData/presets/stocks/screener"}),".  Files saved here will populate as a choice the next time the Terminal is launched.  Changes to an existing file (same filename) are reflected the next time that screener preset is run, a restart is not required once the preset has been recognized."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.mdxAdmonitionTitle,{children:["Refer to the template file ",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/files/11153280/all_parameters.txt",children:"here"})," for all of the available parameters and accepted values."]})}),"\n",(0,s.jsx)(t.p,{children:"Preset parameters are grouped into major categories:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"[General]"}),"\n",(0,s.jsx)(t.li,{children:"[Descriptive]"}),"\n",(0,s.jsx)(t.li,{children:"[Fundamental]"}),"\n",(0,s.jsx)(t.li,{children:"[Technical]"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"General"})," category, for example, has two parameters: Order and Signal.  The accepted values for both are listed below."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"[General]\n# Ticker, Company, Sector, Industry, Country, Market Cap., Price/Earnings, Forward Price/Earnings,\n# PEG (Price/Earnings/Growth), Price/Sales, Price/Book, Price/Cash, Price/Free Cash Flow, Dividend Yield, Payout Ratio,\n# EPS (ttm), EPS growth this year, EPS growth next year, EPS growth past 5 years, EPS growth next 5 years,\n# Sales growth past 5 years, EPS growth qtr over qtr, Sales growth qtr over qtr, Shares Outstanding, Shares Float,\n# Insider Ownership, Insider Transactions, Institutional Ownership, Institutional Transactions, Short Interest Share,\n# Short Interest Ratio, Earnings Date, Return on Assets, Return on Equity, Return on Investment, Current Ratio,\n# Quick Ratio, LT Debt/Equity, Total Debt/Equity, Gross Margin, Operating Margin, Net Profit Margin,\n# Analyst Recommendation, Performance (Week), Performance (Month), Performance (Quarter), Performance (Half Year),\n# Performance (Year), Performance (Year To Date), Beta, Average True Range, Volatility (Week), Volatility (Month),\n# 20-Day SMA (Relative), 50-Day SMA (Relative), 200-Day SMA (Relative), 50-Day High (Relative), 50-Day Low (Relative),\n# 52-Week High (Relative), 52-Week Low (Relative), Relative Strength Index (14), Average Volume (3 Month),\n# Relative Volume, Change, Change from Open, Gap, Volume, Price, Target Price, IPO Date\n\nOrder = Ticker\n\n# None (all stocks), Top Gainers, Top Losers, New High, New Low, Most Volatile, Most Active, Unusual Volume, Overbought,\n# Oversold, Downgrades, Upgrades, Earnings Before, Earnings After, Recent Insider Buying, Recent Insider Selling, Major News,\n# Horizontal S/R, TL Resistance, TL Support, Wedge Up, Wedge Down, Triangle Ascending, Triangle Descending, Wedge, Channel Up,\n# Channel Down, Channel, Double Top, Double Bottom, Multiple Top, Multiple Bottom, Head & Shoulders, Head & Shoulders Inverse\n\nSignal = Top Gainers\n\n"})}),"\n",(0,s.jsxs)(t.p,{children:["A new preset file should contain all four categories, even if no parameters are added.  The example below is a minimalist example of how it should be structured.  This preset is called, ",(0,s.jsx)(t.code,{children:"djia_components"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"# Author of preset: OpenBB\n# Description: Filter for the Dow Jones Industrial Average components.\n\n[General]\n\n[Descriptive]\n\nIndex = DJIA\n\n[Fundamental]\n\n[Technical]\n"})}),"\n",(0,s.jsx)(t.h3,{id:"set",children:"Set"}),"\n",(0,s.jsxs)(t.p,{children:["To set the preset to be the example above, use the ",(0,s.jsx)(t.code,{children:"set"})," command and press the spacebar.  Use the up/down arrow keys to scroll through the presets."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"set djia_components\n"})}),"\n",(0,s.jsxs)(t.p,{children:["With a preset selected, select the type of data to return by entering one of the six commands listed at the top of this guide.  Each command returns a different set of columns which can be sorted by adding the optional ",(0,s.jsx)(t.code,{children:"-s"})," argument, and selecting a choice populated by autocomplete.  The results will display as a table."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/229921157-8297665a-1b88-4f4e-aeb1-91c1bb9aba7c.png",alt:"Stocks Screener"})}),"\n",(0,s.jsx)(t.p,{children:"The next examples will demonstrate the expected outputs, and provide some context for getting started."}),"\n",(0,s.jsx)(t.h3,{id:"view",children:"View"}),"\n",(0,s.jsxs)(t.p,{children:["See the specified parameters for a custom preset with the ",(0,s.jsx)(t.code,{children:"view"})," function."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"view -p bull_runs_over_10pct\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"\n - General -\nOrder : Ticker\nSignal: Top Gainers\n\n\n - Descriptive -\n\n\n - Fundamental -\n\n\n - Technical -\nPerformance: Today +10%\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"view -p buffett_like\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:" - General -\n\n\n - Descriptive -\nMarket Cap.   : +Mid (over $2bln)\nDividend Yield: Positive (>0%)\n\n\n - Fundamental -\nEPS growthnext 5 years  : Positive (>0%)\nDebt/Equity             : Under 0.5\nPrice/Free Cash Flow    : Under 50\nSales growthpast 5 years: Positive (>0%)\nReturn on Investment    : Over +15%\nP/B                     : Under 3\n\n\n - Technical -\n\n"})}),"\n",(0,s.jsx)(t.p,{children:"Some presets contain only a signal, therefore there are no parameters to view.  Any stock crossing the threshold for the signal will be returned."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"view -p channel_up\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"This preset contains no parameters other than the signal.\n"})}),"\n",(0,s.jsx)(t.h3,{id:"sp-500-sector-components",children:"S&P 500 Sector Components"}),"\n",(0,s.jsx)(t.p,{children:"A series of presets are included that filter the S&P 500 constituents by sector.  There are no parameters, so these presets simply return the components for comparison."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/229921343-605d0fbe-645f-4c69-83a9-a0034bc5c00e.png",alt:"S&P 500"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"/stocks/scr/set -p sp500_financial_sector/performance\n"})}),"\n",(0,s.jsx)(t.p,{children:"Columns can also be sorted, filtered, or rearranged from within the tables."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/229921470-ac5d9d9e-8489-45aa-9cc2-f0d8a156b172.png",alt:"Screener Output"})}),"\n",(0,s.jsx)(t.p,{children:"Changes made to an existing preset will be reflected immediately, restarting is only necessary when adding a new file.  The preset Financial Sector preset can be modified to filter only those companies with a Price-to-Book ratio of under 1."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"\n# Author of preset: OpenBB\n# Description: Filter for the S&P 500 Financial Sector components.\n\n[General]\n\n[Descriptive]\n\nIndex = S&P 500\nSector = Financial\n\n[Fundamental]\n\nP/B = Under 1\n\n[Technical]\n\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Open presets in any simple text editor, add the desired parameters, save the file, then run the command again.  At the time of publication, twelve results were narrowed down from sixty-eight.  All available parameters and settings are listed in the text file ",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/files/11153280/all_parameters.txt",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/229921644-ca14f08a-95f2-4ac3-8da3-49bbe4af3be4.png",alt:"Financial Sector P/B Under 1"})}),"\n",(0,s.jsx)(t.h3,{id:"ca",children:"CA"}),"\n",(0,s.jsxs)(t.p,{children:["The tickers from the results of the last screen are stored in memory and can be taken into the ",(0,s.jsx)(t.a,{href:"/terminal/menus/stocks/comparison",children:"Comparison Analysis menu"})," to undergo further scrutiny."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/229921889-3ce97436-a768-4a74-b312-e6070459e2a9.png",alt:"Screener Results"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"set -p buffett_like\nperformance\n?\nca\nhcorr\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/229921977-fd31ff4c-d782-46fb-ba56-922cde5df8f0.png",alt:"Correlation Matrix of Results"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(5260),r=n(74848);function i(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);