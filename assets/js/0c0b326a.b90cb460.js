"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42998],{5957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(74848),a=n(28453),s=n(94331);const i={title:"qqplot",description:"The 'qqplot' page provides information on how to use the 'qqplot' function in the OpenBB library for quantitative data analysis. It explains the procedure, the parameters required, and provides a practical example using the stock ticker from Apple.",keywords:["qqplot","quantitative analysis","data analysis","matplotlib","Pandas Dataframe","stock ticker","AAPL"]},l=void 0,o={id:"sdk/reference/qa/qqplot",title:"qqplot",description:"The 'qqplot' page provides information on how to use the 'qqplot' function in the OpenBB library for quantitative data analysis. It explains the procedure, the parameters required, and provides a practical example using the stock ticker from Apple.",source:"@site/content/sdk/reference/qa/qqplot.md",sourceDirName:"sdk/reference/qa",slug:"/sdk/reference/qa/qqplot",permalink:"/sdk/reference/qa/qqplot",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/qa/qqplot.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"qqplot",description:"The 'qqplot' page provides information on how to use the 'qqplot' function in the OpenBB library for quantitative data analysis. It explains the procedure, the parameters required, and provides a practical example using the stock ticker from Apple.",keywords:["qqplot","quantitative analysis","data analysis","matplotlib","Pandas Dataframe","stock ticker","AAPL"]},sidebar:"tutorialSidebar",previous:{title:"omega",permalink:"/sdk/reference/qa/omega"},next:{title:"quantile",permalink:"/sdk/reference/qa/quantile"}},d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"qa.qqplot - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Plots QQ plot for data against normal quantiles"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L462",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.qa.qqplot(data: pd.DataFrame, target: str, symbol: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Dataframe"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"target"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Column in data to look at"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"symbol"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Stock ticker"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"external_axes"}),(0,r.jsx)(t.td,{children:"Optional[List[plt.Axes]]"}),(0,r.jsx)(t.td,{children:"External axes (1 axis is expected in the list), by default None"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"This function does not return anything"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\ndf = openbb.stocks.load("AAPL")\nopenbb.qa.qqplot(data=df, target="Adj Close")\n'})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),a=n(74848);function s(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);