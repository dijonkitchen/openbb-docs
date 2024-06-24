"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90883],{68625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(74848),s=n(28453),l=n(94331);const r={title:"Options",description:"This is an informative page providing a detailed overview of how to navigate and use the Options Menu to analyze equity options. It discusses the functions, and gives clear examples of how to fetch and analyze options data such as chains, Greeks, expiration dates, and put/call ratios using different financial data sources.",keywords:["equity options","options menu","financial instruments","derivatives","due diligence","YahooFinance","Nasdaq","Tradier","Intrinio","options data","options chains","options functions","ticker symbol","unusual options","fdscanner.com","option chain","put/call ratio","expiration date","volatility smile","second order Greeks","greeks command","puts","calls","surface","spx","ndx"]},a=void 0,o={id:"terminal/menus/stocks/options",title:"Options",description:"This is an informative page providing a detailed overview of how to navigate and use the Options Menu to analyze equity options. It discusses the functions, and gives clear examples of how to fetch and analyze options data such as chains, Greeks, expiration dates, and put/call ratios using different financial data sources.",source:"@site/content/terminal/menus/stocks/options.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/options",permalink:"/terminal/menus/stocks/options",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/menus/stocks/options.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719240743e3,frontMatter:{title:"Options",description:"This is an informative page providing a detailed overview of how to navigate and use the Options Menu to analyze equity options. It discusses the functions, and gives clear examples of how to fetch and analyze options data such as chains, Greeks, expiration dates, and put/call ratios using different financial data sources.",keywords:["equity options","options menu","financial instruments","derivatives","due diligence","YahooFinance","Nasdaq","Tradier","Intrinio","options data","options chains","options functions","ticker symbol","unusual options","fdscanner.com","option chain","put/call ratio","expiration date","volatility smile","second order Greeks","greeks command","puts","calls","surface","spx","ndx"]},sidebar:"tutorialSidebar",previous:{title:"Insider Trading",permalink:"/terminal/menus/stocks/ins"},next:{title:"Stock Screener",permalink:"/terminal/menus/stocks/screener"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"UNU",id:"unu",level:3},{value:"Load",id:"load",level:3},{value:"PCR",id:"pcr",level:3},{value:"EXP",id:"exp",level:3},{value:"Plot",id:"plot",level:3},{value:"Greeks",id:"greeks",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.A,{title:"Options - Stocks - Menus | OpenBB Terminal Docs"}),"\n",(0,i.jsxs)(t.p,{children:["The Options menu provides the user with tools for analyzing equity options. Wikipedia is a great resource for definitions and for learning about the mechanics of derivatives, read it ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Option_(finance)",children:"here"}),". These are complex, leveraged, financial instruments requiring specialized knowledge and a different frame-of-mind than the approach taken by an equities long-only investor. Always conduct thorough due diligence."]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:["Navigate to the menu by typing ",(0,i.jsx)(t.code,{children:"options"}),", from the ",(0,i.jsx)(t.code,{children:"/stocks"})," menu, and then pressing enter. The menu can also be entered by the absolute path:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"/stocks/options\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The source for the options data can be defined using the ",(0,i.jsx)(t.code,{children:"load"})," command, and a default preference is be defined in the ",(0,i.jsx)(t.code,{children:"/sources"})," menu - or on the ",(0,i.jsx)(t.a,{href:"https://my.openbb.co",children:"OpenBB Hub"}),". The chains data returned will vary by source. The following sources are currently available to use:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"YahooFinance"}),"\n",(0,i.jsx)(t.li,{children:"Nasdaq"}),"\n",(0,i.jsx)(t.li,{children:"Tradier (requires API key)"}),"\n",(0,i.jsx)(t.li,{children:"Intrinio (requires API key)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The menu can be entered without a ticker symbol loaded. If one is already loaded from the stocks menu, it will automatically fetch the chains data from the default source. The commands displayed above the currently active Ticker and Expiry do not require any data to be loaded, while the functions below do."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Function Key"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"calc"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"A basic payoff diagram for a single call or put."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"chains"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Display options chains and Greeks."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"eodchain"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Gets the option chain for a ticker, on a specific date."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"exp"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Select a target expiration date."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"greeks"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Shows or recalculates the Greeks for an expiration date."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"grhist"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Plot the historical Greeks of an individual contract."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"hedge"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"A calculator for weighting a position to neutralize delta."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"hist"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Historical prices of an individual contract."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"info"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Basic stats for the options chain."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"load"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Load a new ticker."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"oi"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Plot the open interest."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"plot"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Plot x vs. y as defined by the user."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"pcr"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Display historical rolling put/call ratios for a ticker over a selectable window."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"screen"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"An options screener."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"unu"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Unusual options activity for S&P 500 stocks."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"voi"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Plot the volume and open interest together."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"vol"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Plot the volume."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"vsurf"}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3-D volatility surface chart."})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The examples here will start by entering the Options menu without a ticker symbol loaded."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"/stocks/options\n"})}),"\n",(0,i.jsx)(t.h3,{id:"unu",children:"UNU"}),"\n",(0,i.jsxs)(t.p,{children:["Unusual options are described as those having a very high volume/open interest ratio. This function is built using the data provided by ",(0,i.jsx)(t.a,{href:"https://fdscanner.com",children:"fdscanner.com"}),". By default, the top 20 options with the highest vol/OI ratio are returned as a table."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"unu\n"})}),"\n",(0,i.jsx)(t.p,{children:"With the new interactive tables, it may be better to remove the limit and utilize the table's built-in filtering."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"unu -l 500\n"})}),"\n",(0,i.jsx)(t.p,{children:"This returned over 500 results which can then be filtered, for example, by June/23 expirations. There were thirty-four results."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/234757578-da79b032-416b-4e0a-b759-a05f651f28a2.png",alt:"Unusual Options"})}),"\n",(0,i.jsx)(t.h3,{id:"load",children:"Load"}),"\n",(0,i.jsxs)(t.p,{children:["Let's take a look at one of these tickers, GM. The default source will be ",(0,i.jsx)(t.code,{children:"YahooFinance"}),". Select a different source by attaching ",(0,i.jsx)(t.code,{children:"--source"})," to the command."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"load gm\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"This obtains the data for all the expirations, very long chains - like SPY - may take a few moments to load."})})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"Getting Option Chain \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00\nLoaded option chain from YahooFinance\n"})}),"\n",(0,i.jsx)(t.h3,{id:"pcr",children:"PCR"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"pcr"})," command plots a rolling put/call ratio (ten years max) over a selectable window of time (default is 30 days)."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"pcr -l 90 -s 2010-04-01\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/234757627-8250700b-1586-4535-948e-33d6ff18c4a2.png",alt:"GM 90-Day P/C Ratio"})}),"\n",(0,i.jsx)(t.p,{children:"Adding in an overlay from an exported CSV file adds more context to the story."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"/stocks/load GM --start 2013-04-01 --monthly --export gm_monthly.csv\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/234757705-0bc63a89-0cb8-4d32-a403-2a8aa7b0337a.png",alt:"GM 90-Day P/C Ratio Against Share Price"})}),"\n",(0,i.jsx)(t.h3,{id:"exp",children:"EXP"}),"\n",(0,i.jsxs)(t.p,{children:["After loading, select an expiration date for the chain using the ",(0,i.jsx)(t.code,{children:"exp"})," command. To display the list of available expirations, use the function with no arguments. The date can be selected by entering a number - with ",(0,i.jsx)(t.code,{children:"0"})," being the nearest expiry - or by entering the date, formatted as ",(0,i.jsx)(t.code,{children:"YYYY-MM-DD"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"exp 2023-06-02\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"Expiration set to 2023-06-02\n"})}),"\n",(0,i.jsx)(t.h3,{id:"plot",children:"Plot"}),"\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"plot"})," function to draw the volatility smile for the selected expiration date."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"plot -c smile\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/234757758-537ada39-cf47-49e3-a861-b97c4b7a9919.png",alt:"Volatility Smile"})}),"\n",(0,i.jsx)(t.h3,{id:"greeks",children:"Greeks"}),"\n",(0,i.jsxs)(t.p,{children:["Calculate the second order Greeks - Rho, Phi, Charm, Vanna, Vomma - with the ",(0,i.jsx)(t.code,{children:"greeks"})," command."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"greeks --risk-free 4.8 --all\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/234757813-c6a7b04f-3a20-4c7b-841b-1cd3fec7c088.png",alt:"Greeks Command"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/85772166/234757864-749ff78e-00c3-465a-b1b1-f4d0d2991c84.png",alt:"Second Order Greeks"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var i=n(5260),s=n(74848);function l(e){let{title:t}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);