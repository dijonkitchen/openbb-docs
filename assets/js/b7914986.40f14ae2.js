"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94407],{68423:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(74848),t=n(28453),o=n(94331);const i={title:"ols",description:"Perform OLS regression on timeseries data using the 'ols' function from OpenBB's econometrics module. The page includes parameters description, return type, and a practical example with code.",keywords:["ols","timeseries data","statsmodels","regression","openbb.econometrics.ols","Dependent variable series","Independent variables series","RegressionResultsWrapper","OLS Regression Results","R-squared","Least Squares","F-statistic","Prob (F-statistic)","Log-Likelihood","AIC","BIC","Df Residuals","Df Model","Covariance Type"]},a=void 0,d={id:"sdk/reference/econometrics/ols",title:"ols",description:"Perform OLS regression on timeseries data using the 'ols' function from OpenBB's econometrics module. The page includes parameters description, return type, and a practical example with code.",source:"@site/content/sdk/reference/econometrics/ols.md",sourceDirName:"sdk/reference/econometrics",slug:"/sdk/reference/econometrics/ols",permalink:"/sdk/reference/econometrics/ols",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/econometrics/ols.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"ols",description:"Perform OLS regression on timeseries data using the 'ols' function from OpenBB's econometrics module. The page includes parameters description, return type, and a practical example with code.",keywords:["ols","timeseries data","statsmodels","regression","openbb.econometrics.ols","Dependent variable series","Independent variables series","RegressionResultsWrapper","OLS Regression Results","R-squared","Least Squares","F-statistic","Prob (F-statistic)","Log-Likelihood","AIC","BIC","Df Residuals","Df Model","Covariance Type"]},sidebar:"tutorialSidebar",previous:{title:"norm",permalink:"/sdk/reference/econometrics/norm"},next:{title:"options",permalink:"/sdk/reference/econometrics/options"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const s={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"econometrics.ols - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(s.p,{children:"Performs an OLS regression on timeseries data. [Source: Statsmodels]"}),"\n",(0,r.jsxs)(s.p,{children:["Source Code: [",(0,r.jsx)(s.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L176",children:"link"}),"]"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"openbb.econometrics.ols(Y: pd.DataFrame, X: pd.DataFrame)\n"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Default"}),(0,r.jsx)(s.th,{children:"Optional"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Y"}),(0,r.jsx)(s.td,{children:"pd.DataFrame"}),(0,r.jsx)(s.td,{children:"Dependent variable series."}),(0,r.jsx)(s.td,{children:"None"}),(0,r.jsx)(s.td,{children:"False"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"X"}),(0,r.jsx)(s.td,{children:"pd.DataFrame"}),(0,r.jsx)(s.td,{children:"Dataframe of independent variables series."}),(0,r.jsx)(s.td,{children:"None"}),(0,r.jsx)(s.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"statsmodels.regression.linear_model.RegressionResultsWrapper"}),(0,r.jsx)(s.td,{children:"Regression model wrapper from statsmodels."})]})})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:'import openbb_terminal.sdk as openbb\ndf = openbb.econometrics.load("wage_panel")\nOLS_model = openbb.econometrics.OLS(df["lwage"], df[["educ", "exper", "expersq"]])\nprint(OLS_model.summary())`\n'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"OLS Regression Results\n=======================================================================================\nDep. Variable:                  lwage   R-squared (uncentered):                   0.920\nModel:                            OLS   Adj. R-squared (uncentered):              0.919\nMethod:                 Least Squares   F-statistic:                          1.659e+04\nDate:                Thu, 10 Nov 2022   Prob (F-statistic):                        0.00\nTime:                        15:28:11   Log-Likelihood:                         -3091.3\nNo. Observations:                4360   AIC:                                      6189.\nDf Residuals:                    4357   BIC:                                      6208.\nDf Model:                           3\nCovariance Type:            nonrobust\n==============================================================================\n                coef    std err          t      P>|t|      [0.025      0.975]\n------------------------------------------------------------------------------\neduc           0.0986      0.002     39.879      0.000       0.094       0.103\nexper          0.1018      0.009     10.737      0.000       0.083       0.120\nexpersq       -0.0034      0.001     -4.894      0.000      -0.005      -0.002\n==============================================================================\nOmnibus:                     1249.642   Durbin-Watson:                   0.954\nProb(Omnibus):                  0.000   Jarque-Bera (JB):             9627.436\nSkew:                          -1.152   Prob(JB):                         0.00\nKurtosis:                       9.905   Cond. No.                         86.4\n==============================================================================\nNotes:\n[1] R\xb2 is computed without centering (uncentered) since the model does not contain a constant.\n[2] Standard Errors assume that the covariance matrix of the errors is correctly specified.\n"})}),"\n",(0,r.jsx)(s.hr,{})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94331:(e,s,n)=>{n.d(s,{A:()=>o});n(96540);var r=n(5260),t=n(74848);function o(e){let{title:s}=e;return(0,t.jsx)(r.A,{children:(0,t.jsx)("title",{children:s})})}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var r=n(96540);const t={},o=r.createContext(t);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);