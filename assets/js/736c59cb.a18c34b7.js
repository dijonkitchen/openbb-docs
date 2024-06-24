"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32193],{87108:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=t(74848),n=t(28453),s=t(94331);const a={title:"maxutil",description:"Maxutil is a powerful Python tool used for portfolio optimization. The page provides extensive information about the usage, parameters, and examples of maximizing a risk-averse utility function. Navigate through the specifics, from expected return methods to defining your risk measures and risk aversion parameters.",keywords:["maxutil","risk averse utility function","portfolio optimization","financial tool","financial software","usage","parameters","examples","expected return","covariance","risk measure","risk aversion","target return","target risk","risk-free rate"]},o=void 0,d={id:"terminal/reference/portfolio/po/maxutil",title:"maxutil",description:"Maxutil is a powerful Python tool used for portfolio optimization. The page provides extensive information about the usage, parameters, and examples of maximizing a risk-averse utility function. Navigate through the specifics, from expected return methods to defining your risk measures and risk aversion parameters.",source:"@site/content/terminal/reference/portfolio/po/maxutil.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/maxutil",permalink:"/terminal/reference/portfolio/po/maxutil",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/portfolio/po/maxutil.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"maxutil",description:"Maxutil is a powerful Python tool used for portfolio optimization. The page provides extensive information about the usage, parameters, and examples of maximizing a risk-averse utility function. Navigate through the specifics, from expected return methods to defining your risk measures and risk aversion parameters.",keywords:["maxutil","risk averse utility function","portfolio optimization","financial tool","financial software","usage","parameters","examples","expected return","covariance","risk measure","risk aversion","target return","target risk","risk-free rate"]},sidebar:"tutorialSidebar",previous:{title:"maxsharpe",permalink:"/terminal/reference/portfolio/po/maxsharpe"},next:{title:"minrisk",permalink:"/terminal/reference/portfolio/po/minrisk"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{title:"portfolio/po/maxutil - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(r.p,{children:"Maximizes a risk averse utility function"}),"\n",(0,i.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"maxutil [-ra RISK_AVERSION] [-tr TARGET_RETURN] [-tk TARGET_RISK] [-m {hist,ewma1,ewma2}] [-cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}] [-de SMOOTHING_FACTOR_EWMA] [-vs SHORT_ALLOCATION] [-rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}] [-mt METHOD] [-ct CATEGORIES] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION] [--name NAME]\n"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Default"}),(0,i.jsx)(r.th,{children:"Optional"}),(0,i.jsx)(r.th,{children:"Choices"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"risk_aversion"}),(0,i.jsx)(r.td,{children:"Risk aversion parameter"}),(0,i.jsx)(r.td,{children:"1"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"target_return"}),(0,i.jsx)(r.td,{children:"Constraint on minimum level of portfolio's return"}),(0,i.jsx)(r.td,{children:"-1"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"target_risk"}),(0,i.jsx)(r.td,{children:"Constraint on maximum level of portfolio's risk"}),(0,i.jsx)(r.td,{children:"-1"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"expected_return"}),(0,i.jsx)(r.td,{children:"Method used to estimate the expected return vector"}),(0,i.jsx)(r.td,{children:"hist"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"hist, ewma1, ewma2"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"covariance"}),(0,i.jsx)(r.td,{children:"Method used to estimate covariance matrix. Possible values are 'hist': historical method 'ewma1': exponential weighted moving average with adjust=True 'ewma2': exponential weighted moving average with adjust=False 'ledoit': Ledoit and Wolf shrinkage method 'oas': oracle shrinkage method 'shrunk': scikit-learn shrunk method 'gl': graphical lasso method 'jlogo': j-logo covariance 'fixed': takes average of eigenvalues above max Marchenko Pastour limit 'spectral': makes zero eigenvalues above max Marchenko Pastour limit 'shrink': Lopez de Prado's book shrinkage method"}),(0,i.jsx)(r.td,{children:"hist"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"hist, ewma1, ewma2, ledoit, oas, shrunk, gl, jlogo, fixed, spectral, shrink"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"smoothing_factor_ewma"}),(0,i.jsx)(r.td,{children:"Smoothing factor for ewma estimators"}),(0,i.jsx)(r.td,{children:"0.94"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"short_allocation"}),(0,i.jsx)(r.td,{children:"Amount to allocate to portfolio in short positions"}),(0,i.jsx)(r.td,{children:"0.0"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"risk_measure"}),(0,i.jsx)(r.td,{children:"Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'CVaR' : Conditional Value at Risk 'EVaR' : Entropic Value at Risk 'WR' : Worst Realization 'ADD' : Average Drawdown of uncompounded returns 'UCI' : Ulcer Index of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns 'MDD' : Maximum Drawdown of uncompounded returns"}),(0,i.jsx)(r.td,{children:"MV"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"MV, MAD, MSV, FLPM, SLPM, CVaR, EVaR, WR, ADD, UCI, CDaR, EDaR, MDD"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"nan_fill_method"}),(0,i.jsx)(r.td,{children:"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"}),(0,i.jsx)(r.td,{children:"time"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"linear, time, nearest, zero, slinear, quadratic, cubic, barycentric"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"categories"}),(0,i.jsx)(r.td,{children:"Show selected categories"}),(0,i.jsx)(r.td,{children:"ASSET_CLASS, COUNTRY, SECTOR, INDUSTRY"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"historic_period"}),(0,i.jsx)(r.td,{children:"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"}),(0,i.jsx)(r.td,{children:"3y"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"start_period"}),(0,i.jsx)(r.td,{children:"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"end_period"}),(0,i.jsx)(r.td,{children:"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"log_returns"}),(0,i.jsx)(r.td,{children:"If use logarithmic or arithmetic returns to calculate returns"}),(0,i.jsx)(r.td,{children:"False"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"return_frequency"}),(0,i.jsx)(r.td,{children:"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"}),(0,i.jsx)(r.td,{children:"d"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"d, w, m"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"max_nan"}),(0,i.jsx)(r.td,{children:"Max percentage of nan values accepted per asset to be considered in the optimization process"}),(0,i.jsx)(r.td,{children:"0.05"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"threshold_value"}),(0,i.jsx)(r.td,{children:"Value used to replace outliers that are higher to threshold in absolute value"}),(0,i.jsx)(r.td,{children:"0.3"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"risk_free"}),(0,i.jsx)(r.td,{children:"Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual"}),(0,i.jsx)(r.td,{children:"0.02924"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"significance_level"}),(0,i.jsx)(r.td,{children:"Significance level of CVaR, EVaR, CDaR and EDaR"}),(0,i.jsx)(r.td,{children:"0.05"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"long_allocation"}),(0,i.jsx)(r.td,{children:"Amount to allocate to portfolio"}),(0,i.jsx)(r.td,{children:"1"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"name"}),(0,i.jsx)(r.td,{children:"Save portfolio with personalized or default name"}),(0,i.jsx)(r.td,{children:"MAXUTIL_0"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"2022 Apr 05, 13:21 (\ud83e\udd8b) /portfolio/po/ $ maxutil\n\n [3 Years] Display a maximal risk averse utility function\n portfolio using volatility as risk measure\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502 100.0 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 124.85%\nAnnual (by \u221a252) volatility: 68.44%\nSharpe ratio: 1.8215\n"})}),"\n",(0,i.jsx)(r.hr,{})]})}function x(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var i=t(5260),n=t(74848);function s(e){let{title:r}=e;return(0,n.jsx)(i.A,{children:(0,n.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>o});var i=t(96540);const n={},s=i.createContext(n);function a(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);