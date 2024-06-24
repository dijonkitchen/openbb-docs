"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71836],{7483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=r(74848),n=r(28453),s=r(94331);const o={title:"minrisk",description:"This page provides a detailed explanation of the 'minrisk' function provided by OpenBB, used in portfolio optimization to decrease risk. It includes information about the function's parameters, return structure, and usage examples.",keywords:["portfolio optimization","minrisk function","risk minimization","portfolio weights","instructions","parameters","returns","examples","sharpe ratio","return volatility","financial portfolio"]},d=void 0,l={id:"sdk/reference/portfolio/po/minrisk",title:"minrisk",description:"This page provides a detailed explanation of the 'minrisk' function provided by OpenBB, used in portfolio optimization to decrease risk. It includes information about the function's parameters, return structure, and usage examples.",source:"@site/content/sdk/reference/portfolio/po/minrisk.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/minrisk",permalink:"/sdk/reference/portfolio/po/minrisk",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/minrisk.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"minrisk",description:"This page provides a detailed explanation of the 'minrisk' function provided by OpenBB, used in portfolio optimization to decrease risk. It includes information about the function's parameters, return structure, and usage examples.",keywords:["portfolio optimization","minrisk function","risk minimization","portfolio weights","instructions","parameters","returns","examples","sharpe ratio","return volatility","financial portfolio"]},sidebar:"tutorialSidebar",previous:{title:"maxutil",permalink:"/sdk/reference/portfolio/po/maxutil"},next:{title:"mktcap",permalink:"/sdk/reference/portfolio/po/mktcap"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{title:"portfolio.po.minrisk - Reference | OpenBB SDK Docs"}),"\n",(0,i.jsx)(t.p,{children:"Optimize minimum risk weights"}),"\n",(0,i.jsxs)(t.p,{children:["Source Code: [",(0,i.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L402",children:"link"}),"]"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.po.minrisk(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, symbols: List[str] = None, kwargs: Any)\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"portfolio_engine"}),(0,i.jsx)(t.td,{children:"PoEngine"}),(0,i.jsxs)(t.td,{children:["Portfolio optimization engine, by default None",(0,i.jsx)("br",{}),"Use ",(0,i.jsx)(t.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbols"}),(0,i.jsx)(t.td,{children:"List[str]"}),(0,i.jsx)(t.td,{children:"List of symbols, by default None"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"interval"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Interval to get data, by default '3y'"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"start_date"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:'If not using interval, start date string (YYYY-MM-DD), by default ""'}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"end_date"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:'If not using interval, end date string (YYYY-MM-DD). If empty use last weekday, by default ""'}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"log_returns"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"If True use log returns, else arithmetic returns, by default False"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"freq"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Frequency of returns, by default 'D'. Options: 'D' for daily, 'W' for weekly, 'M' for monthly"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxnan"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Maximum percentage of NaNs allowed in the data, by default 0.05"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"threshold"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Value used to replace outliers that are higher than threshold, by default 0.0"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"method"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsxs)(t.td,{children:["Method used to fill nan values, by default 'time'",(0,i.jsx)("br",{}),"For more information see ",(0,i.jsx)(t.code,{children:"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"}),"__."]}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"value"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Amount to allocate to portfolio in long positions, by default 1.0"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"value_short"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Amount to allocate to portfolio in short positions, by default 0.0"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objective"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsxs)(t.td,{children:["Objective function of the optimization model, by default 'Sharpe'",(0,i.jsx)("br",{}),"Possible values are:",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"- 'MinRisk': Minimize the selected risk measure.",(0,i.jsx)("br",{}),"- 'Utility': Maximize the risk averse utility function.",(0,i.jsx)("br",{}),"- 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.",(0,i.jsx)("br",{}),"- 'MaxRet': Maximize the expected return of the portfolio."]}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"risk_measure"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsxs)(t.td,{children:["The risk measure used to optimize the portfolio, by default 'MV'",(0,i.jsx)("br",{}),"Possible values are:",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"- 'MV': Standard Deviation.",(0,i.jsx)("br",{}),"- 'MAD': Mean Absolute Deviation.",(0,i.jsx)("br",{}),"- 'MSV': Semi Standard Deviation.",(0,i.jsx)("br",{}),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,i.jsx)("br",{}),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,i.jsx)("br",{}),"- 'CVaR': Conditional Value at Risk.",(0,i.jsx)("br",{}),"- 'EVaR': Entropic Value at Risk.",(0,i.jsx)("br",{}),"- 'WR': Worst Realization.",(0,i.jsx)("br",{}),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,i.jsx)("br",{}),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,i.jsx)("br",{}),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,i.jsx)("br",{}),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,i.jsx)("br",{}),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns."]}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"risk_free_rate"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Risk free rate, annualized. Used for 'FLPM' and 'SLPM' and Sharpe objective function, by default 0.0"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"risk_aversion"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Risk aversion factor of the 'Utility' objective function, by default 1.0"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"alpha"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses, by default 0.05"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"target_return"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Constraint on minimum level of portfolio's return, by default -1.0"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"target_risk"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Constraint on maximum level of portfolio's risk, by default -1.0"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"mean"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsxs)(t.td,{children:["The method used to estimate the expected returns, by default 'hist'",(0,i.jsx)("br",{}),"Possible values are:",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"- 'hist': use historical estimates.",(0,i.jsx)("br",{}),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,i.jsx)(t.code,{children:"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"}),(0,i.jsxs)(t.strong,{children:[".",(0,i.jsx)("br",{}),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,i.jsx)(t.code,{children:"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"})]}),"."]}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"covariance"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsxs)(t.td,{children:["The method used to estimate the covariance matrix, by default 'hist'",(0,i.jsx)("br",{}),"Possible values are:",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"- 'hist': use historical estimates.",(0,i.jsx)("br",{}),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,i.jsx)(t.code,{children:"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"}),(0,i.jsxs)(t.strong,{children:[".",(0,i.jsx)("br",{}),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,i.jsx)(t.code,{children:"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"})]}),".",(0,i.jsx)("br",{}),"- 'ledoit': use the Ledoit and Wolf Shrinkage method.",(0,i.jsx)("br",{}),"- 'oas': use the Oracle Approximation Shrinkage method.",(0,i.jsx)("br",{}),"- 'shrunk': use the basic Shrunk Covariance method.",(0,i.jsx)("br",{}),"- 'gl': use the basic Graphical Lasso Covariance method.",(0,i.jsx)("br",{}),"- 'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,i.jsx)(t.code,{children:"a-jLogo"}),".",(0,i.jsx)("br",{}),"- 'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,i.jsx)(t.code,{children:"a-MLforAM"}),".",(0,i.jsx)("br",{}),"- 'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,i.jsx)(t.code,{children:"a-MLforAM"}),".",(0,i.jsx)("br",{}),"- 'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,i.jsx)(t.code,{children:"a-MLforAM"}),"."]}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"d_ewma"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"The smoothing factor of ewma methods, by default 0.94"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tuple[pd.DataFrame, Dict]"}),(0,i.jsx)(t.td,{children:"Tuple with weights and performance dictionary"})]})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.portfolio.po.minrisk(symbols=["AAPL", "MSFT", "AMZN"])\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"(        value\n     AAPL  0.25044\n     MSFT  0.49509\n     AMZN  0.25447,\n     {'Return': 0.2248615963428331,\n      'Volatility': 0.32736590080425004,\n      'Sharpe ratio': 0.6868815468880802})\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.minrisk(portfolio_engine=p)\n'})}),"\n",(0,i.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var i=r(5260),n=r(74848);function s(e){let{title:t}=e;return(0,n.jsx)(i.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>d});var i=r(96540);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);