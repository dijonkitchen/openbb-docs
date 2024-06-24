"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70055],{68488:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>m,metadata:()=>t,toc:()=>d});var n=a(74848),r=a(28453),i=a(94331);const m={title:"gainers",description:"This page provides details on the 'gainers' functionality, including descriptions, parameters, usage, and examples. The gainers functionality displays the coins that have gained the most in a selected time period.",keywords:["gainers","crypto","coins","market cap","volume","time intervals","parameters","defaults"]},l=void 0,t={id:"terminal/reference/crypto/disc/gainers",title:"gainers",description:"This page provides details on the 'gainers' functionality, including descriptions, parameters, usage, and examples. The gainers functionality displays the coins that have gained the most in a selected time period.",source:"@site/content/terminal/reference/crypto/disc/gainers.md",sourceDirName:"terminal/reference/crypto/disc",slug:"/terminal/reference/crypto/disc/gainers",permalink:"/terminal/reference/crypto/disc/gainers",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/disc/gainers.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"gainers",description:"This page provides details on the 'gainers' functionality, including descriptions, parameters, usage, and examples. The gainers functionality displays the coins that have gained the most in a selected time period.",keywords:["gainers","crypto","coins","market cap","volume","time intervals","parameters","defaults"]},sidebar:"tutorialSidebar",previous:{title:"dex",permalink:"/terminal/reference/crypto/disc/dex"},next:{title:"games",permalink:"/terminal/reference/crypto/disc/games"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const s={annotation:"annotation",code:"code",h2:"h2",h3:"h3",hr:"hr",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"crypto/disc/gainers - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsxs)(s.p,{children:["Shows Largest Gainers - coins which gain the most in given period. You can use parameter --interval to set which timeframe are you interested in: {14d,1h,1y,200d,24h,30d,7d} You can look on only N number of records with --limit, You can sort by {Symbol,Name,Price [",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"M"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"r"}),(0,n.jsx)(s.mi,{children:"k"}),(0,n.jsx)(s.mi,{children:"e"}),(0,n.jsx)(s.mi,{children:"t"}),(0,n.jsx)(s.mi,{children:"C"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"p"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"M"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"r"}),(0,n.jsx)(s.mi,{children:"k"}),(0,n.jsx)(s.mi,{children:"e"}),(0,n.jsx)(s.mi,{children:"t"}),(0,n.jsx)(s.mi,{children:"C"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"p"}),(0,n.jsx)(s.mi,{children:"R"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mi,{children:"k"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"V"}),(0,n.jsx)(s.mi,{children:"o"}),(0,n.jsx)(s.mi,{children:"l"}),(0,n.jsx)(s.mi,{children:"u"}),(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mi,{children:"e"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"["})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"],Market Cap,Market Cap Rank,Volume ["})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mclose",children:"]"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"tC"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"tC"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"pR"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"ank"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(s.span,{className:"mopen",children:"["})]})})]}),"]} with --sort."]}),"\n",(0,n.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"gainers [-i {14d,1h,1y,200d,24h,30d,7d}] [-l LIMIT] [-s SORTBY [SORTBY ...]]\n"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Optional"}),(0,n.jsx)(s.th,{children:"Choices"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"interval"}),(0,n.jsx)(s.td,{children:"time period, one from {14d,1h,1y,200d,24h,30d,7d}"}),(0,n.jsx)(s.td,{children:"1h"}),(0,n.jsx)(s.td,{children:"True"}),(0,n.jsx)(s.td,{children:"14d, 1h, 1y, 200d, 24h, 30d, 7d"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"limit"}),(0,n.jsx)(s.td,{children:"Number of records to display"}),(0,n.jsx)(s.td,{children:"15"}),(0,n.jsx)(s.td,{children:"True"}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sortby"}),(0,n.jsx)(s.td,{children:"Sort by given column. Default: Market Cap Rank"}),(0,n.jsx)(s.td,{children:"market_cap"}),(0,n.jsx)(s.td,{children:"True"}),(0,n.jsxs)(s.td,{children:["Symbol, Name, Price [",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"M"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"r"}),(0,n.jsx)(s.mi,{children:"k"}),(0,n.jsx)(s.mi,{children:"e"}),(0,n.jsx)(s.mi,{children:"t"}),(0,n.jsx)(s.mi,{children:"C"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"p"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"M"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"r"}),(0,n.jsx)(s.mi,{children:"k"}),(0,n.jsx)(s.mi,{children:"e"}),(0,n.jsx)(s.mi,{children:"t"}),(0,n.jsx)(s.mi,{children:"C"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"p"}),(0,n.jsx)(s.mi,{children:"R"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mi,{children:"k"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mi,{children:"V"}),(0,n.jsx)(s.mi,{children:"o"}),(0,n.jsx)(s.mi,{children:"l"}),(0,n.jsx)(s.mi,{children:"u"}),(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mi,{children:"e"}),(0,n.jsx)(s.mo,{stretchy:"false",children:"["})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"], Market Cap, Market Cap Rank, Volume ["})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mclose",children:"]"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"tC"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"tC"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"pR"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"ank"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(s.span,{className:"mopen",children:"["})]})})]}),"]"]})]})]})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:"2022 Feb 15, 06:38 (\ud83e\udd8b) /crypto/disc/ $ gainers\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Symbol \u2502 Name            \u2502 Price [$] \u2502 Market Cap [$] \u2502 Market Cap Rank \u2502 Volume [$] \u2502 Change 1h [%] \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 xrp    \u2502 XRP             \u2502 0.84      \u2502 39.9B          \u2502 6               \u2502 3.2B       \u2502 0.29          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 luna   \u2502 Terra           \u2502 56.50     \u2502 22.4B          \u2502 9               \u2502 1B         \u2502 0.14          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 usdc   \u2502 USD Coin        \u2502 1.00      \u2502 52.6B          \u2502 5               \u2502 3B         \u2502 0.12          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 bnb    \u2502 Binance Coin    \u2502 429.85    \u2502 72.2B          \u2502 4               \u2502 709.6M     \u2502 0.12          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 btc    \u2502 Bitcoin         \u2502 44275.00  \u2502 838.8B         \u2502 1               \u2502 20.6B      \u2502 0.11          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 usdt   \u2502 Tether          \u2502 1.00      \u2502 78.5B          \u2502 3               \u2502 43.3B      \u2502 0.08          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 busd   \u2502 Binance USD     \u2502 1.00      \u2502 17.6B          \u2502 13              \u2502 3B         \u2502 -0.04         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 dot    \u2502 Polkadot        \u2502 19.79     \u2502 21.4B          \u2502 11              \u2502 672.9M     \u2502 -0.12         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 eth    \u2502 Ethereum        \u2502 3100.92   \u2502 370.6B         \u2502 2               \u2502 14.4B      \u2502 -0.24         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 shib   \u2502 Shiba Inu       \u2502 0.00      \u2502 17.2B          \u2502 14              \u2502 1.1B       \u2502 -0.34         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ada    \u2502 Cardano         \u2502 1.09      \u2502 34.9B          \u2502 7               \u2502 1B         \u2502 -0.41         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 doge   \u2502 Dogecoin        \u2502 0.15      \u2502 19.9B          \u2502 12              \u2502 604.3M     \u2502 -0.50         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AVAX   \u2502 Avalanche       \u2502 88.42     \u2502 21.7B          \u2502 10              \u2502 894.8M     \u2502 -0.65         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 sol    \u2502 Solana          \u2502 102.75    \u2502 32.7B          \u2502 8               \u2502 1.8B       \u2502 -0.76         \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 cro    \u2502 Crypto.com Coin \u2502 0.50      \u2502 12.5B          \u2502 15              \u2502 200.8M     \u2502 -1.21         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,n.jsx)(s.hr,{})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,s,a)=>{a.d(s,{A:()=>i});a(96540);var n=a(5260),r=a(74848);function i(e){let{title:s}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:s})})}},28453:(e,s,a)=>{a.d(s,{R:()=>m,x:()=>l});var n=a(96540);const r={},i=n.createContext(r);function m(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:m(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);