"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50751],{57932:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=n(74848),i=n(28453),s=n(94331);const a={title:"herc",description:"The page contains details about using HERC (Hierarchical Equal Risk Contribution) for building a portfolio. It covers its usage, parameters, and a clear step-by-step example.",keywords:["Hierarchical Equal Risk Contribution","Portfolio","HERC","Risk Measurement","SEO improvement","Financial trading","Financial portfolio","Risk management","Codependence","Covariance","Risk measure optimization"]},d=void 0,o={id:"terminal/reference/portfolio/po/herc",title:"herc",description:"The page contains details about using HERC (Hierarchical Equal Risk Contribution) for building a portfolio. It covers its usage, parameters, and a clear step-by-step example.",source:"@site/content/terminal/reference/portfolio/po/herc.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/herc",permalink:"/docs/terminal/reference/portfolio/po/herc",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/po/herc.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"herc",description:"The page contains details about using HERC (Hierarchical Equal Risk Contribution) for building a portfolio. It covers its usage, parameters, and a clear step-by-step example.",keywords:["Hierarchical Equal Risk Contribution","Portfolio","HERC","Risk Measurement","SEO improvement","Financial trading","Financial portfolio","Risk management","Codependence","Covariance","Risk measure optimization"]},sidebar:"tutorialSidebar",previous:{title:"file",permalink:"/docs/terminal/reference/portfolio/po/file"},next:{title:"hrp",permalink:"/docs/terminal/reference/portfolio/po/hrp"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.A,{title:"portfolio/po/herc - Reference | OpenBB Terminal Docs"}),"\n",(0,t.jsx)(r.p,{children:"Builds a hierarchical equal risk contribution portfolio"}),"\n",(0,t.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"herc [-cd {pearson,spearman,abs_pearson,abs_spearman,distance,mutual_info,tail}] [-cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}] [-rm RISK-MEASURE] [-as CVAR_SIMULATIONS_LOSSES] [-b CVAR_SIGNIFICANCE] [-bs CVAR_SIMULATIONS_GAINS] [-lk LINKAGE] [-k AMOUNT_CLUSTERS] [-mk MAX_CLUSTERS] [-bi {KN,FD,SC,HGR}] [-at ALPHA_TAIL] [-lo LEAF_ORDER] [-de SMOOTHING_FACTOR_EWMA] [-mt METHOD] [-ct CATEGORIES] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION] [--name NAME]\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Optional"}),(0,t.jsx)(r.th,{children:"Choices"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"co_dependence"}),(0,t.jsx)(r.td,{children:"The codependence or similarity matrix used to build the distance metric and clusters. Possible values are: 'pearson': pearson correlation matrix 'spearman': spearman correlation matrix 'abs_pearson': absolute value of pearson correlation matrix 'abs_spearman': absolute value of spearman correlation matrix 'distance': distance correlation matrix 'mutual_info': mutual information codependence matrix 'tail': tail index codependence matrix"}),(0,t.jsx)(r.td,{children:"pearson"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"pearson, spearman, abs_pearson, abs_spearman, distance, mutual_info, tail"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"covariance"}),(0,t.jsx)(r.td,{children:"Method used to estimate covariance matrix. Possible values are 'hist': historical method 'ewma1': exponential weighted moving average with adjust=True 'ewma2': exponential weighted moving average with adjust=False 'ledoit': Ledoit and Wolf shrinkage method 'oas': oracle shrinkage method 'shrunk': scikit-learn shrunk method 'gl': graphical lasso method 'jlogo': j-logo covariance 'fixed': takes average of eigenvalues above max Marchenko Pastour limit 'spectral': makes zero eigenvalues above max Marchenko Pastour limit 'shrink': Lopez de Prado's book shrinkage method"}),(0,t.jsx)(r.td,{children:"hist"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"hist, ewma1, ewma2, ledoit, oas, shrunk, gl, jlogo, fixed, spectral, shrink"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"risk_measure"}),(0,t.jsx)(r.td,{children:"Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'GMD' : Gini Mean Difference 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'VaR' : Value at Risk 'CVaR' : Conditional Value at Risk 'TG' : Tail Gini 'EVaR' : Entropic Value at Risk 'WR' : Worst Realization 'RG' : Range 'CVRG' : CVaR Range 'TGRG' : Tail Gini Range 'ADD' : Average Drawdown of uncompounded returns 'UCI' : Ulcer Index of uncompounded returns 'DaR' : Drawdown at Risk of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns 'MDD' : Maximum Drawdown of uncompounded returns 'ADD_Rel' : Average Drawdown of compounded returns 'UCI_Rel' : Ulcer Index of compounded returns 'DaR_Rel' : Drawdown at Risk of compounded returns 'CDaR_Rel' : Conditional Drawdown at Risk of compounded returns 'EDaR_Rel' : Entropic Drawdown at Risk of compounded returns 'MDD_Rel' : Maximum Drawdown of compounded returns"}),(0,t.jsx)(r.td,{children:"MV"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"MV, MAD, GMD, MSV, VaR, CVaR, TG, EVaR, RG, CVRG, TGRG, WR, FLPM, SLPM, MDD, ADD, DaR, CDaR, EDaR, UCI, MDD_Rel, ADD_Rel, DaR_Rel, CDaR_Rel, EDaR_Rel, UCI_Rel"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cvar_simulations_losses"}),(0,t.jsx)(r.td,{children:"Number of CVaRs used to approximate Tail Gini of losses. The default is 100"}),(0,t.jsx)(r.td,{children:"100"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cvar_significance"}),(0,t.jsx)(r.td,{children:"Significance level of CVaR and Tail Gini of gains. If empty it duplicates alpha"}),(0,t.jsx)(r.td,{children:"None"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cvar_simulations_gains"}),(0,t.jsx)(r.td,{children:"Number of CVaRs used to approximate Tail Gini of gains. If empty it duplicates a_sim value"}),(0,t.jsx)(r.td,{children:"None"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"linkage"}),(0,t.jsx)(r.td,{children:"Linkage method of hierarchical clustering"}),(0,t.jsx)(r.td,{children:"single"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"single, complete, average, weighted, centroid, median, ward, dbht"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"amount_clusters"}),(0,t.jsx)(r.td,{children:"Number of clusters specified in advance"}),(0,t.jsx)(r.td,{children:"None"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"max_clusters"}),(0,t.jsx)(r.td,{children:"Max number of clusters used by the two difference gap statistic to find the optimal number of clusters. If k is empty this value is used"}),(0,t.jsx)(r.td,{children:"10"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"amount_bins"}),(0,t.jsx)(r.td,{children:"Number of bins used to calculate the variation of information"}),(0,t.jsx)(r.td,{children:"KN"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"KN, FD, SC, HGR"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"alpha_tail"}),(0,t.jsx)(r.td,{children:"Significance level for lower tail dependence index, only used when when codependence value is 'tail'"}),(0,t.jsx)(r.td,{children:"0.05"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"leaf_order"}),(0,t.jsx)(r.td,{children:"Indicates if the cluster are ordered so that the distance between successive leaves is minimal"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"smoothing_factor_ewma"}),(0,t.jsx)(r.td,{children:"Smoothing factor for ewma estimators"}),(0,t.jsx)(r.td,{children:"0.94"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nan_fill_method"}),(0,t.jsx)(r.td,{children:"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"}),(0,t.jsx)(r.td,{children:"time"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"linear, time, nearest, zero, slinear, quadratic, cubic, barycentric"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"categories"}),(0,t.jsx)(r.td,{children:"Show selected categories"}),(0,t.jsx)(r.td,{children:"ASSET_CLASS, COUNTRY, SECTOR, INDUSTRY"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"historic_period"}),(0,t.jsx)(r.td,{children:"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"}),(0,t.jsx)(r.td,{children:"3y"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"start_period"}),(0,t.jsx)(r.td,{children:"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"end_period"}),(0,t.jsx)(r.td,{children:"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"log_returns"}),(0,t.jsx)(r.td,{children:"If use logarithmic or arithmetic returns to calculate returns"}),(0,t.jsx)(r.td,{children:"False"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"return_frequency"}),(0,t.jsx)(r.td,{children:"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"}),(0,t.jsx)(r.td,{children:"d"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"d, w, m"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"max_nan"}),(0,t.jsx)(r.td,{children:"Max percentage of nan values accepted per asset to be considered in the optimization process"}),(0,t.jsx)(r.td,{children:"0.05"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"threshold_value"}),(0,t.jsx)(r.td,{children:"Value used to replace outliers that are higher to threshold in absolute value"}),(0,t.jsx)(r.td,{children:"0.3"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"risk_free"}),(0,t.jsx)(r.td,{children:"Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual"}),(0,t.jsx)(r.td,{children:"0.02924"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"significance_level"}),(0,t.jsx)(r.td,{children:"Significance level of CVaR, EVaR, CDaR and EDaR"}),(0,t.jsx)(r.td,{children:"0.05"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"long_allocation"}),(0,t.jsx)(r.td,{children:"Amount to allocate to portfolio"}),(0,t.jsx)(r.td,{children:"1"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"name"}),(0,t.jsx)(r.td,{children:"Save portfolio with personalized or default name"}),(0,t.jsx)(r.td,{children:"HERC_0"}),(0,t.jsx)(r.td,{children:"True"}),(0,t.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"2022 Apr 05, 14:40 (\ud83e\udd8b) /portfolio/po/ $ herc\n\n [3 Years] Hierarchical equal risk contribution portfolio using pearson\ncodependence,single linkage and volatility as risk measure\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502 10.78 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502 12.64 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502  9.12 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502  8.08 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502 12.86 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502 43.83 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502  2.66 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 18.09%\nAnnual (by \u221a252) volatility: 24.19%\nSharpe ratio: 0.7401\n"})}),"\n",(0,t.jsx)(r.hr,{})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(5260),i=n(74848);function s(e){let{title:r}=e;return(0,i.jsx)(t.A,{children:(0,i.jsx)("title",{children:r})})}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>d});var t=n(96540);const i={},s=t.createContext(i);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);