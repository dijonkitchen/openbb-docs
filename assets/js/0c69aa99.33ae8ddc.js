"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94467],{3594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(74848),i=r(28453),s=r(94331);const o={title:"maxutil",description:"Documentation page of the maxutil module in the OpenBB Terminal's portfolio optimization tool. It includes the module's function signature with its parameters, default values, and optional indicators. Specializations like risk measures and return calculations are also detailed. Examples of use are provided for better understanding.",keywords:["Docusaurus SEO","Portfolio Optimization","maxutil function","Portfolio Management Tools","Python in Finance","Algorithmic Trading","Risk Measures","OpenBB maxutil"]},d=void 0,l={id:"sdk/reference/portfolio/po/maxutil",title:"maxutil",description:"Documentation page of the maxutil module in the OpenBB Terminal's portfolio optimization tool. It includes the module's function signature with its parameters, default values, and optional indicators. Specializations like risk measures and return calculations are also detailed. Examples of use are provided for better understanding.",source:"@site/content/sdk/reference/portfolio/po/maxutil.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/maxutil",permalink:"/sdk/reference/portfolio/po/maxutil",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/po/maxutil.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"maxutil",description:"Documentation page of the maxutil module in the OpenBB Terminal's portfolio optimization tool. It includes the module's function signature with its parameters, default values, and optional indicators. Specializations like risk measures and return calculations are also detailed. Examples of use are provided for better understanding.",keywords:["Docusaurus SEO","Portfolio Optimization","maxutil function","Portfolio Management Tools","Python in Finance","Algorithmic Trading","Risk Measures","OpenBB maxutil"]},sidebar:"tutorialSidebar",previous:{title:"maxsharpe",permalink:"/sdk/reference/portfolio/po/maxsharpe"},next:{title:"minrisk",permalink:"/sdk/reference/portfolio/po/minrisk"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"portfolio.po.maxutil - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Optimize maximum utility weights"}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L539",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.po.maxutil(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, symbols: List[str] = None, kwargs: Any)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio_engine"}),(0,n.jsx)(t.td,{children:"PoEngine"}),(0,n.jsxs)(t.td,{children:["Portfolio optimization engine, by default None",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(t.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbols"}),(0,n.jsx)(t.td,{children:"List[str]"}),(0,n.jsx)(t.td,{children:"List of symbols, by default None"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Interval to get data, by default '3y'"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:'If not using interval, start date string (YYYY-MM-DD), by default ""'}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:'If not using interval, end date string (YYYY-MM-DD). If empty use last weekday, by default ""'}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"log_returns"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"If True use log returns, else arithmetic returns, by default False"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"freq"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Frequency of returns, by default 'D'. Options: 'D' for daily, 'W' for weekly, 'M' for monthly"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maxnan"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Maximum percentage of NaNs allowed in the data, by default 0.05"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"threshold"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value used to replace outliers that are higher than threshold, by default 0.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"method"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["Method used to fill nan values, by default 'time'",(0,n.jsx)("br",{}),"For more information see ",(0,n.jsx)(t.code,{children:"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"}),"__."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Amount to allocate to portfolio in long positions, by default 1.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value_short"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Amount to allocate to portfolio in short positions, by default 0.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"objective"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["Objective function of the optimization model, by default 'Sharpe'",(0,n.jsx)("br",{}),"Possible values are:",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"- 'MinRisk': Minimize the selected risk measure.",(0,n.jsx)("br",{}),"- 'Utility': Maximize the risk averse utility function.",(0,n.jsx)("br",{}),"- 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.",(0,n.jsx)("br",{}),"- 'MaxRet': Maximize the expected return of the portfolio."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_measure"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["The risk measure used to optimize the portfolio, by default 'MV'",(0,n.jsx)("br",{}),"Possible values are:",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"- 'MV': Standard Deviation.",(0,n.jsx)("br",{}),"- 'MAD': Mean Absolute Deviation.",(0,n.jsx)("br",{}),"- 'MSV': Semi Standard Deviation.",(0,n.jsx)("br",{}),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,n.jsx)("br",{}),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,n.jsx)("br",{}),"- 'CVaR': Conditional Value at Risk.",(0,n.jsx)("br",{}),"- 'EVaR': Entropic Value at Risk.",(0,n.jsx)("br",{}),"- 'WR': Worst Realization.",(0,n.jsx)("br",{}),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,n.jsx)("br",{}),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,n.jsx)("br",{}),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,n.jsx)("br",{}),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,n.jsx)("br",{}),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_free_rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Risk free rate, annualized. Used for 'FLPM' and 'SLPM' and Sharpe objective function, by default 0.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_aversion"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Risk aversion factor of the 'Utility' objective function, by default 1.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"alpha"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses, by default 0.05"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_return"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Constraint on minimum level of portfolio's return, by default -1.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_risk"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Constraint on maximum level of portfolio's risk, by default -1.0"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mean"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["The method used to estimate the expected returns, by default 'hist'",(0,n.jsx)("br",{}),"Possible values are:",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"- 'hist': use historical estimates.",(0,n.jsx)("br",{}),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,n.jsx)(t.code,{children:"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"}),(0,n.jsxs)(t.strong,{children:[".",(0,n.jsx)("br",{}),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,n.jsx)(t.code,{children:"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"})]}),"."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"covariance"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["The method used to estimate the covariance matrix, by default 'hist'",(0,n.jsx)("br",{}),"Possible values are:",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"- 'hist': use historical estimates.",(0,n.jsx)("br",{}),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,n.jsx)(t.code,{children:"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"}),(0,n.jsxs)(t.strong,{children:[".",(0,n.jsx)("br",{}),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,n.jsx)(t.code,{children:"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"})]}),".",(0,n.jsx)("br",{}),"- 'ledoit': use the Ledoit and Wolf Shrinkage method.",(0,n.jsx)("br",{}),"- 'oas': use the Oracle Approximation Shrinkage method.",(0,n.jsx)("br",{}),"- 'shrunk': use the basic Shrunk Covariance method.",(0,n.jsx)("br",{}),"- 'gl': use the basic Graphical Lasso Covariance method.",(0,n.jsx)("br",{}),"- 'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,n.jsx)(t.code,{children:"a-jLogo"}),".",(0,n.jsx)("br",{}),"- 'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,n.jsx)(t.code,{children:"a-MLforAM"}),".",(0,n.jsx)("br",{}),"- 'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,n.jsx)(t.code,{children:"a-MLforAM"}),".",(0,n.jsx)("br",{}),"- 'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,n.jsx)(t.code,{children:"a-MLforAM"}),"."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"d_ewma"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The smoothing factor of ewma methods, by default 0.94"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tuple[pd.DataFrame, Dict]"}),(0,n.jsx)(t.td,{children:"Tuple with weights and performance dictionary"})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.portfolio.po.maxutil(symbols=["AAPL", "MSFT", "AMZN"])\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"(      value\n     AAPL    1.0\n     MSFT    0.0\n     AMZN    0.0,\n     {'Return': 0.3448948339574538,\n      'Volatility': 0.36513261935342495,\n      'Sharpe ratio': 0.9445741510802071})\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.maxutil(portfolio_engine=p)\n'})}),"\n",(0,n.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),i=r(74848);function s(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>d});var n=r(96540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);