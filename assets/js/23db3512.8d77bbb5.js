"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76997],{86808:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=i(74848),s=i(28453);const l={title:"v2.5.0",version:"2.5.0",date:new Date("2023-03-01T00:00:00.000Z"),description:"v2.5.0",sidebar_position:102},o=void 0,r={id:"terminal/changelog/version2_5_0",title:"v2.5.0",description:"v2.5.0",source:"@site/content/terminal/changelog/version2_5_0.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version2_5_0",permalink:"/terminal/changelog/version2_5_0",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/changelog/version2_5_0.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,sidebarPosition:102,frontMatter:{title:"v2.5.0",version:"2.5.0",date:"2023-03-01T00:00:00.000Z",description:"v2.5.0",sidebar_position:102},sidebar:"tutorialSidebar",previous:{title:"v2.5.1",permalink:"/terminal/changelog/version2_5_1"},next:{title:"v2.4.1",permalink:"/terminal/changelog/version2_4_1"}},a={},d=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"What&#39;s changed",id:"whats-changed",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"whats-new",children:"What's new"}),"\n",(0,t.jsx)(n.p,{children:"We had quite a busy 2 weeks."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"New youtube video summarization and sentiment function using NLP.  (Note this requires you to install ffmpeg on your machine)."}),"\n",(0,t.jsx)(n.li,{children:"Support of historical endpointpoints for DataBento!"}),"\n",(0,t.jsx)(n.li,{children:"A brand new fixed income menu"}),"\n",(0,t.jsx)(n.li,{children:"CPI by country"}),"\n",(0,t.jsx)(n.li,{children:"Volatility cones"}),"\n",(0,t.jsx)(n.li,{children:"General bug fix and improvements"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"whats-changed",children:"What's changed"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix issue 4316 (#4357) @Chavithra"}),"\n",(0,t.jsx)(n.li,{children:"Fix short name (#4356) @JerBouma"}),"\n",(0,t.jsx)(n.li,{children:"Hotfix/options screener fix (#4335) @deeleeramone"}),"\n",(0,t.jsx)(n.li,{children:"[Feature] Automatic Video Analysis with NLP \ud83d\udcfa  (#4323) @martinb-bb"}),"\n",(0,t.jsx)(n.li,{children:"Updating Docs Pages and Intro Guides.  (#4263) @deeleeramone"}),"\n",(0,t.jsx)(n.li,{children:"Feature - Disable unit test on draft PR (#4342) @luqmanbello"}),"\n",(0,t.jsx)(n.li,{children:"Introduce CPI (Consumer Price Index) functionality (#4350) @JerBouma"}),"\n",(0,t.jsx)(n.li,{children:"Fix long/short issue and fix transform issue (#4349) @JerBouma"}),"\n",(0,t.jsx)(n.li,{children:"Remove yfinance from news (#4332) @montezdesousa"}),"\n",(0,t.jsx)(n.li,{children:"Clean up SDK files (#4321) @piiq"}),"\n",(0,t.jsx)(n.li,{children:"Add fixed income text to main menu (#4345) @JerBouma"}),"\n",(0,t.jsxs)(n.li,{children:["Update functionality with FinanceDatabase v2, depreciate ",(0,t.jsx)(n.code,{children:"stocks/sia"}),", fix ",(0,t.jsx)(n.code,{children:"exe --example"})," and fix ",(0,t.jsx)(n.code,{children:"stocks/fa/dcf"})," (#4319) @JerBouma"]}),"\n",(0,t.jsx)(n.li,{children:"Got the correct papermill (#4318) @colin99d"}),"\n",(0,t.jsx)(n.li,{children:"Add reverse fx choices to forex load (#4333) @montezdesousa"}),"\n",(0,t.jsx)(n.li,{children:"Add options greeks to the SDK (#4334) @northern-64bit"}),"\n",(0,t.jsxs)(n.li,{children:["Hotfix/File Exists Error on ",(0,t.jsx)(n.code,{children:"test_directories"})," (#4338) @tehcoderer"]}),"\n",(0,t.jsx)(n.li,{children:"frozendict removal for build (#4330) @jmaslek"}),"\n",(0,t.jsx)(n.li,{children:"Add fixed income menu (#4071) @northern-64bit"}),"\n",(0,t.jsxs)(n.li,{children:["Additional check for empty dataframe for ",(0,t.jsx)(n.code,{children:"stocks load"})," (#4325) @hjoaquim"]}),"\n",(0,t.jsx)(n.li,{children:"Changes the default data source for crypto.load (#4324) @hjoaquim"}),"\n",(0,t.jsx)(n.li,{children:"Make integration tests more responsive (#4329) @montezdesousa"}),"\n",(0,t.jsx)(n.li,{children:"Patch Equity Report (#4327) @hjoaquim"}),"\n",(0,t.jsx)(n.li,{children:"Update so that image links to website (#4328) @JerBouma"}),"\n",(0,t.jsx)(n.li,{children:"Adding databento as a source (#4293) @jmaslek"}),"\n",(0,t.jsx)(n.li,{children:"Add tweet news in terminal toolbar (#3757) @DidierRLopes"}),"\n",(0,t.jsx)(n.li,{children:"Auto login on the SDK if local session is found (#4297) @hjoaquim"}),"\n",(0,t.jsx)(n.li,{children:"User UUID to use the designated column instead (#4299) @hjoaquim"}),"\n",(0,t.jsx)(n.li,{children:"Set query arg in economy/eval as required (#4317) @elyanah-aco"}),"\n",(0,t.jsx)(n.li,{children:"Nightly Publish to Pypi (#4315) @luqmanbello"}),"\n",(0,t.jsx)(n.li,{children:"Allow entering into the sources menu (#4312) @jmaslek"}),"\n",(0,t.jsx)(n.li,{children:"Added flake8-simplify (#4227) @colin99d"}),"\n",(0,t.jsxs)(n.li,{children:["Handle ",(0,t.jsx)(n.code,{children:"end_date"})," with ",(0,t.jsx)(n.code,{children:"CCXT"})," source when loading crypto (#4296) @northern-64bit"]}),"\n",(0,t.jsx)(n.li,{children:"Fixes #3873 and adds generic naming to financial statements (#4142) @northern-64bit"}),"\n",(0,t.jsx)(n.li,{children:"Display correct risk free rate in the portfolio menu help message (#4217) @northern-64bit"}),"\n",(0,t.jsx)(n.li,{children:"Speed up pytest with xdist plugin (#4307) @jmaslek"}),"\n",(0,t.jsx)(n.li,{children:"Hotfix for SIA menu (#4294) @jmaslek"}),"\n",(0,t.jsx)(n.li,{children:"Hotfix/sdk-ta-docs (#4301) @tehcoderer"}),"\n",(0,t.jsx)(n.li,{children:"Fix Unit Test (#4298) @luqmanbello"}),"\n",(0,t.jsx)(n.li,{children:"Update api-keys.md (#4256) @shivansh2310"}),"\n",(0,t.jsx)(n.li,{children:"fix variable name (#4289) @xinbaDev"}),"\n",(0,t.jsx)(n.li,{children:"Fix spelling mistake in portfolio menu help message (#4291) @northern-64bit"}),"\n",(0,t.jsxs)(n.li,{children:["Fix ",(0,t.jsx)(n.code,{children:"--help"})," for ",(0,t.jsx)(n.code,{children:"stocks/candle"}),", ",(0,t.jsx)(n.code,{children:"stocks/tob"})," and ",(0,t.jsx)(n.code,{children:"stocks/news"})," (#4292) @northern-64bit"]}),"\n",(0,t.jsx)(n.li,{children:"Release/2.4.1 (#4274) @jmaslek"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var t=i(96540);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);