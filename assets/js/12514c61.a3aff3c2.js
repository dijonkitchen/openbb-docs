"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51644],{43461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var d=n(74848),i=n(28453),r=n(94331);const o={title:"dividend",description:"The 'dividend' feature of the OpenBB library allows optimized weight allocation in portfolio based on dividend yield. The document offers detailed examples and parameters of the implementation.",keywords:["dividend","portfolio optimization","po model","portfolio engine","weights allocation","AAPL","MSFT","AMZN"]},l=void 0,s={id:"sdk/reference/portfolio/po/dividend",title:"dividend",description:"The 'dividend' feature of the OpenBB library allows optimized weight allocation in portfolio based on dividend yield. The document offers detailed examples and parameters of the implementation.",source:"@site/content/sdk/reference/portfolio/po/dividend.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/dividend",permalink:"/docs/sdk/reference/portfolio/po/dividend",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/dividend.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"dividend",description:"The 'dividend' feature of the OpenBB library allows optimized weight allocation in portfolio based on dividend yield. The document offers detailed examples and parameters of the implementation.",keywords:["dividend","portfolio optimization","po model","portfolio engine","weights allocation","AAPL","MSFT","AMZN"]},sidebar:"tutorialSidebar",previous:{title:"blacklitterman",permalink:"/docs/sdk/reference/portfolio/po/blacklitterman"},next:{title:"ef",permalink:"/docs/sdk/reference/portfolio/po/ef"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.A,{title:"portfolio.po.dividend - Reference | OpenBB SDK Docs"}),"\n",(0,d.jsx)(t.p,{children:"Optimize weighted according to dividend yield"}),"\n",(0,d.jsxs)(t.p,{children:["Source Code: [",(0,d.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L2207",children:"link"}),"]"]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.po.dividend(symbols: List[str] = None, portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, kwargs: Any)\n"})}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"portfolio_engine"}),(0,d.jsx)(t.td,{children:"PoEngine"}),(0,d.jsxs)(t.td,{children:["Portfolio optimization engine, by default None",(0,d.jsx)("br",{}),"Use ",(0,d.jsx)(t.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"symbols"}),(0,d.jsx)(t.td,{children:"List[str]"}),(0,d.jsx)(t.td,{children:"List of symbols, by default None"}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"interval"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Interval to get data, by default '3y'"}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"start_date"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:'If not using interval, start date string (YYYY-MM-DD), by default ""'}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"end_date"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:'If not using interval, end date string (YYYY-MM-DD). If empty use last weekday, by default ""'}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"log_returns"}),(0,d.jsx)(t.td,{children:"bool"}),(0,d.jsx)(t.td,{children:"If True use log returns, else arithmetic returns, by default False"}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"freq"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Frequency of returns, by default 'D'. Options: 'D' for daily, 'W' for weekly, 'M' for monthly"}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"maxnan"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Maximum percentage of NaNs allowed in the data, by default 0.05"}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"threshold"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Value used to replace outliers that are higher than threshold, by default 0.0"}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"method"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsxs)(t.td,{children:["Method used to fill nan values, by default 'time'",(0,d.jsx)("br",{}),"For more information see ",(0,d.jsx)(t.code,{children:"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"}),"__."]}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"value"}),(0,d.jsx)(t.td,{children:"float"}),(0,d.jsx)(t.td,{children:"Amount to allocate to portfolio in long positions, by default 1.0"}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsx)(t.tbody,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Tuple[pd.DataFrame, Dict]"}),(0,d.jsx)(t.td,{children:"Tuple with weights and performance dictionary"})]})})]}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.portfolio.po.dividend(symbols=["AAPL", "MSFT", "AMZN"])\n'})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{children:"(         value\n AAPL  0.350575\n MSFT  0.649425\n AMZN  0.000000,\n {'Return': 0.26879215033541076,\n  'Volatility': 0.3348681656035649,\n  'Sharpe ratio': 0.8026805111526232})\n"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.dividend(portfolio_engine=p)\n'})}),"\n",(0,d.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var d=n(5260),i=n(74848);function r(e){let{title:t}=e;return(0,i.jsx)(d.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var d=n(96540);const i={},r=d.createContext(i);function o(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);