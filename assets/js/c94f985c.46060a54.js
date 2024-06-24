"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18462],{57969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=t(74848),o=t(28453),i=t(94331);const l={title:"file",description:"This page provides detailed information on the functionality and usage of the 'Load portfolio optimization engine from file' method in the OpenBB Terminal application. Examples and parameters are discussed extensively to ensure user familiarity with the method.",keywords:["portfolio optimization","load portfolio","PoEngine","parameters","examples","maxsharpe","risk_free_rate"]},s=void 0,a={id:"sdk/reference/portfolio/po/file",title:"file",description:"This page provides detailed information on the functionality and usage of the 'Load portfolio optimization engine from file' method in the OpenBB Terminal application. Examples and parameters are discussed extensively to ensure user familiarity with the method.",source:"@site/content/sdk/reference/portfolio/po/file.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/file",permalink:"/sdk/reference/portfolio/po/file",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/po/file.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"file",description:"This page provides detailed information on the functionality and usage of the 'Load portfolio optimization engine from file' method in the OpenBB Terminal application. Examples and parameters are discussed extensively to ensure user familiarity with the method.",keywords:["portfolio optimization","load portfolio","PoEngine","parameters","examples","maxsharpe","risk_free_rate"]},sidebar:"tutorialSidebar",previous:{title:"equal",permalink:"/sdk/reference/portfolio/po/equal"},next:{title:"get_properties",permalink:"/sdk/reference/portfolio/po/get_properties"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"portfolio.po.file - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"Load portfolio optimization engine from file"}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L108",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"openbb.portfolio.po.file(portfolio_engine: portfolio_optimization.po_engine.PoEngine, parameters_file_path: str)\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"portfolio_engine"}),(0,r.jsx)(n.td,{children:"PoEngine"}),(0,r.jsxs)(n.td,{children:["Portfolio optimization engine, by default None",(0,r.jsx)("br",{}),"Use ",(0,r.jsx)(n.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"parameters_file_path"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"Parameters file full path, by default None"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Dict"}),(0,r.jsx)(n.td,{children:"Loaded parameters"})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\np.get_params()\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"{}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'parameters = openbb.portfolio.po.file(portfolio_engine=p, parameters_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/optimization/defaults.ini")\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Parameters:\n    interval    : 3y\n    log_returns : 0\n    freq        : d\n    maxnan      : 0.05\n    threshold   : 0.3\n    alpha       : 0.05\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"p.get_params()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"{'interval': '3y',\n 'log_returns': '0',\n 'freq': 'd',\n 'maxnan': '0.05',\n 'threshold': '0.3',\n 'alpha': '0.05'}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'p.set_params({"risk_free_rate": 0.05})\np.get_params()\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"{'interval': '3y',\n'log_returns': '0',\n'freq': 'd',\n'maxnan': '0.05',\n'threshold': '0.3',\n'alpha': '0.05',\n'risk_free_rate': 0.05}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"weights, performance = openbb.portfolio.po.maxsharpe(portfolio_engine=p)\n"})}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(5260),o=t(74848);function i(e){let{title:n}=e;return(0,o.jsx)(r.A,{children:(0,o.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(96540);const o={},i=r.createContext(o);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);