"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23602],{31946:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var i=t(74848),s=t(28453);t(94331);const l={title:"Extensions",sidebar_position:3,description:"This page describes the toolkit extensions available for the OpenBB Platform.",keywords:["OpenBB Platform","Python client","Fast API","getting started","extensions","data providers","data extensions","toolkit extensions","toolkits","endpoints","community","technical analysis","quantitative analysis","charting libraries","Plotly","OpenBBFigure","PyWry"]},r=void 0,o={id:"platform/developer_guide/extensions",title:"Extensions",description:"This page describes the toolkit extensions available for the OpenBB Platform.",source:"@site/content/platform/developer_guide/extensions.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/extensions",permalink:"/docs/platform/developer_guide/extensions",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/developer_guide/extensions.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,sidebarPosition:3,frontMatter:{title:"Extensions",sidebar_position:3,description:"This page describes the toolkit extensions available for the OpenBB Platform.",keywords:["OpenBB Platform","Python client","Fast API","getting started","extensions","data providers","data extensions","toolkit extensions","toolkits","endpoints","community","technical analysis","quantitative analysis","charting libraries","Plotly","OpenBBFigure","PyWry"]},sidebar:"tutorialSidebar",previous:{title:"Standardization",permalink:"/docs/platform/developer_guide/standardization"},next:{title:"OBBject",permalink:"/docs/platform/developer_guide/obbject"}},d={},a=[{value:"Data Extensions",id:"data-extensions",level:2},{value:"Provider Coverage",id:"provider-coverage",level:2},{value:"Installation",id:"installation",level:2},{value:"Available Data Extensions",id:"available-data-extensions",level:2},{value:"Core <code>openbb</code> Providers",id:"core-openbb-providers",level:3},{value:"Community Providers",id:"community-providers",level:3},{value:"Toolkit Extensions",id:"toolkit-extensions",level:2},{value:"Charting",id:"charting",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Devtools",id:"devtools",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Econometrics",id:"econometrics",level:2},{value:"Installation",id:"installation-3",level:3},{value:"Quantitative",id:"quantitative",level:2},{value:"Installation",id:"installation-4",level:3},{value:"Technical",id:"technical",level:2},{value:"Installation",id:"installation-5",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The extension framework allows individual pieces to be installed and removed seamlessly within the environment, using only the desired data and toolkit extensions."}),"\n",(0,i.jsx)(n.p,{children:"There are two primary types of extensions for the OpenBB Platform:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Data"}),"\n",(0,i.jsx)(n.li,{children:"Toolkits"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The OpenBB Core installation does not include any toolkit extensions. Install the OpenBB Platform with all data and toolkit extensions from PyPI with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"pip install openbb[all]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When installing from source, navigate into the ",(0,i.jsx)(n.code,{children:"openbb_platform"})," folder from the root of the project and enter:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"python dev_install.py -e\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This installs all extensions in editable mode, and the Python interface is compiled in, ",(0,i.jsx)(n.code,{children:"/openbb_platform/openbb/package"}),", instead of the environment's ",(0,i.jsx)(n.code,{children:"site-packages"})," folder. The tables in the next pages lists extensions as either, Core or Community. The Core extensions are installed by default."]}),"\n",(0,i.jsx)(n.p,{children:"A couple of notable differences between data and toolkit extension are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the OpenBB GitHub repo, extensions are all located under:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"~/OpenBBTerminal/openbb_platform/extensions\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["An additional folder housing integration tests, with the ",(0,i.jsx)(n.code,{children:"tests"})," folder staying empty."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["There is a ",(0,i.jsx)(n.code,{children:"router"})," file, and there can be sub-folders with additional routers."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Utility functions don't need their own sub-folder."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"__init__.py"})," files are all empty."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"data-extensions",children:"Data Extensions"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(n.p,{children:"Data extensions will expand the breadth and coverage of the data available in the OpenBB Platform. Each source (provider) is its own independent extension, even if there is only one endpoint accessible. This allows every data source to be inserted or removed, at any time, without disturbing the operation of the Core components."}),(0,i.jsx)(n.p,{children:"Functions will appear in the Python Interface and Fast API only if a supported provider, for that specific endpoint, is installed. Additional Python libraries will be installed, where required, by the extension."}),(0,i.jsx)(n.h2,{id:"provider-coverage",children:"Provider Coverage"}),(0,i.jsx)(n.p,{children:"The total installed coverage can be determined through the Python interface, as a dictionary."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from openbb import obb\nobb.coverage.providers\n"})}),(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),(0,i.jsxs)(n.p,{children:["All data extensions are installed with similar syntax. Published data extensions will have names beginning with ",(0,i.jsx)(n.code,{children:"openbb"}),". For example, yFinance."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb-yfinance\n"})}),(0,i.jsx)(n.p,{children:"Additions and removals update the router automatically to reflect the changes when the Python interpreter is refreshed. Below is a list of data provider extensions."}),(0,i.jsxs)(n.p,{children:["Uninstall any extension with ",(0,i.jsx)(n.code,{children:"pip uninstall"}),"."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip uninstall openbb-yfinance\n"})}),(0,i.jsx)(n.h2,{id:"available-data-extensions",children:"Available Data Extensions"}),(0,i.jsxs)(n.h3,{id:"core-openbb-providers",children:["Core ",(0,i.jsx)(n.code,{children:"openbb"})," Providers"]}),(0,i.jsxs)(n.p,{children:["These packages are what will be installed when ",(0,i.jsx)(n.code,{children:"pip install openbb"})," is run"]}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Extension Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Installation Command"}),(0,i.jsx)(n.th,{children:"Minimum Subscription Type Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-benzinga"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://www.benzinga.com/apis/en-ca/",children:"Benzinga"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-benzinga"}),(0,i.jsx)(n.td,{children:"Paid"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-fmp"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://site.financialmodelingprep.com/developer/",children:"FMP"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-fmp"}),(0,i.jsx)(n.td,{children:"Free"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-fred"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://fred.stlouisfed.org/",children:"FRED"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-fred"}),(0,i.jsx)(n.td,{children:"Free"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-intrinio"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://intrinio.com/pricing",children:"Intrinio"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-intrinio"}),(0,i.jsx)(n.td,{children:"Paid"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-oecd"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://data.oecd.org/",children:"OECD"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-oecd"}),(0,i.jsx)(n.td,{children:"Free"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-polygon"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://polygon.io/",children:"Polygon"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-polygon"}),(0,i.jsx)(n.td,{children:"Free"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-sec"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://www.sec.gov/edgar/sec-api-documentation",children:"SEC"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-sec"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-tiingo"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://www.tiingo.com/about/pricing",children:"Tiingo"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-tiingo"}),(0,i.jsx)(n.td,{children:"Free"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-tradingeconomics"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://tradingeconomics.com/api",children:"TradingEconomics"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-tradingeconomics"}),(0,i.jsx)(n.td,{children:"Paid"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-yfinance"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://finance.yahoo.com/",children:"Yahoo Finance"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-yfinance"}),(0,i.jsx)(n.td,{children:"None"})]})]})]}),(0,i.jsx)(n.h3,{id:"community-providers",children:"Community Providers"}),(0,i.jsxs)(n.p,{children:["These packages are not installed when ",(0,i.jsx)(n.code,{children:"pip install openbb"})," is run.  They are available for installation separately or by running ",(0,i.jsx)(n.code,{children:"pip install openbb[all]"})]}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Extension Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Installation Command"}),(0,i.jsx)(n.th,{children:"Minimum Subscription Type Required"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-alpha-vantage"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://www.alphavantage.co/",children:"Alpha Vantage"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-alpha-vantage"}),(0,i.jsx)(n.td,{children:"Free"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-biztoc"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://api.biztoc.com/#biztoc-default",children:"Biztoc"})," News data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-biztoc"}),(0,i.jsx)(n.td,{children:"Free"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-cboe"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://www.cboe.com/delayed_quotes/",children:"Cboe"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-cboe"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-ecb"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://data.ecb.europa.eu/",children:"ECB"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-ecb"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-federal-reserve"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://www.federalreserve.gov/",children:"Federal Reserve"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-federal-reserve"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-finra"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://www.finra.org/finra-data",children:"FINRA"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-finra"}),(0,i.jsx)(n.td,{children:"None / Free"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-finviz"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://finviz.com",children:"Finviz"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-finviz"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-government-us"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://data.gov",children:"US Government"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-us-government"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-nasdaq"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://data.nasdaq.com/",children:"Nasdaq Data Link"})," connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-nasdaq"}),(0,i.jsx)(n.td,{children:"None / Free"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-seeking-alpha"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://seekingalpha.com/",children:"Seeking Alpha"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-seeking-alpha"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-stockgrid"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://stockgrid.io",children:"Stockgrid"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-stockgrid"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-tmx"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://money.tmx.com",children:"TMX"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-tmx"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-tradier"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://tradier.com",children:"Tradier"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-tradier"}),(0,i.jsx)(n.td,{children:"None"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"openbb-wsj"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"https://www.wsj.com/",children:"Wall Street Journal"})," data connector"]}),(0,i.jsx)(n.td,{children:"pip install openbb-wsj"}),(0,i.jsx)(n.td,{children:"None"})]})]})]}),(0,i.jsxs)(n.p,{children:["Have you published a data provider extension and want it featured on this list? Tell us about it! Open a pull request on ",(0,i.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/",children:"GitHub"})," to submit an extension for inclusion. Code contributions, for new and existing, data providers are always welcome."]}),(0,i.jsxs)(n.p,{children:["Search ",(0,i.jsx)(n.a,{href:"https://pypi.org/search/?q=openbb-",children:"PyPI"})," to find more extensions."]})]}),"\n",(0,i.jsx)(n.h2,{id:"toolkit-extensions",children:"Toolkit Extensions"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(n.p,{children:"OpenBB Toolkit Extensions expand the Platform with functions for manipulating data and preparing it for display. The Core Platform installation does not install any toolkit extensions. The table below is the current list of toolkit extensions."}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Extension Name"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Installation Command"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Core/Community"}),(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Router Path"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"openbb-charting"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Rest API charting service and Plotly library."}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"pip install openbb-charting"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Community"}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"openbb-devtools"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Aggregates dependencies that facilitate a nice development experience for OpenBB."}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"pip install openbb-devtools"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"N/A"}),(0,i.jsx)(n.td,{style:{textAlign:"right"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"openbb-econometrics"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Econometrics models for the Python interface only."}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"pip install openbb-econometrics"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Community"}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"obb.econometrics"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"openbb-quantitative"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Functions for performing quantitative analysis."}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"pip install openbb-quantitative"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Community"}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"obb.quantitative"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"openbb-technical"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Functions for performing technical analysis."}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"pip install openbb-technical"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Community"}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"obb.technical"})]})]})]}),(0,i.jsx)(n.p,{children:"The sections below outline any specific installation considerations for the extension."}),(0,i.jsx)(n.h2,{id:"charting",children:"Charting"}),(0,i.jsxs)(n.p,{children:["The OpenBB Charting Extension supplies charting infrastructure and services to the OpenBB Platform. Figure objects are served via REST API or Python Client.  It utilizes ",(0,i.jsx)(n.a,{href:"https://github.com/OpenBB-finance/pywry",children:"PyWry"})," for handling the display of interactive charts and tables in a separate window, with a Plotly library."]}),(0,i.jsxs)(n.p,{children:["Functions with dedicated views return figures to the ",(0,i.jsx)(n.code,{children:"chart"})," attribute of the ",(0,i.jsx)(n.code,{children:"OBBject"})," response object. They are displayed with the class method, ",(0,i.jsx)(n.code,{children:"show()"}),"."]}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"openbb-charting"})," is an ",(0,i.jsxs)(n.a,{href:"platform/getting_started/add_obbject_extension",children:[(0,i.jsx)(n.code,{children:"OBBject"})," extension"]}),", which means the general functionality is exposed in every command result."]})}),(0,i.jsxs)(n.p,{children:["The following packages are dependencies of the ",(0,i.jsx)(n.code,{children:"openbb-charting"})," extension:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"scipy"}),"\n",(0,i.jsx)(n.li,{children:"plotly"}),"\n",(0,i.jsx)(n.li,{children:"statsmodels"}),"\n",(0,i.jsx)(n.li,{children:"reportlab"}),"\n",(0,i.jsx)(n.li,{children:"pywry"}),"\n",(0,i.jsx)(n.li,{children:"svglib"}),"\n",(0,i.jsx)(n.li,{children:"nbformat"}),"\n",(0,i.jsx)(n.li,{children:"pandas-ta"}),"\n"]}),(0,i.jsx)(n.h3,{id:"installation-1",children:"Installation"}),(0,i.jsx)(n.p,{children:"Install from PyPI with:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb-charting\n"})}),(0,i.jsx)(n.p,{children:"For more information check the documentation of the openbb-charting extension."}),(0,i.jsx)(n.h2,{id:"devtools",children:"Devtools"}),(0,i.jsxs)(n.p,{children:["Please refer to the following PyPI distributed ",(0,i.jsx)(n.a,{href:"https://pypi.org/project/openbb-devtools/",children:"package"}),"."]}),(0,i.jsxs)(n.p,{children:["This Python package, ",(0,i.jsx)(n.code,{children:"openbb-devtools"}),", is designed for OpenBB Platform Developers and contains a range of dependencies essential for robust and efficient software development."]}),(0,i.jsx)(n.p,{children:"These dependencies cater to various aspects like code formatting, security analysis, type checking, testing, and kernel management."}),(0,i.jsx)(n.p,{children:"The inclusion of these packages ensures that the development process is streamlined, the code quality is maintained, and the software is secure and reliable."}),(0,i.jsx)(n.p,{children:"Included dependencies:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ruff"}),": A fast Python linter focused on performance and simplicity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pylint"}),": A tool that checks for errors in Python code, enforces a coding standard, and looks for code smells."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mypy"}),": A static type checker for Python, helping catch type errors during development."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pydocstyle"}),": A linter for Python docstrings to ensure they meet certain style requirements."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"black"}),": An uncompromising Python code formatter, ensuring consistent code style."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bandit"}),": A tool designed to find common security issues in Python code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pre-commit"}),": Manages and maintains pre-commit hooks that run checks before each commit, ensuring code quality."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"nox"}),": A generic virtualenv management and test command line tool for running tests in isolated environments."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pytest"}),": A mature full-featured Python testing tool that helps in writing better programs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pytest-cov"}),": A plugin for pytest that measures code coverage during testing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ipykernel"}),": A package that provides the IPython kernel for Jupyter."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"types-python-dateutil"}),": Type stubs for python-dateutil, aiding in static type checking."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"types-toml"}),": Type stubs for TOML, useful for static type checking in TOML parsing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"poetry"}),": A tool for dependency management and packaging in Python."]}),"\n"]}),(0,i.jsx)(n.p,{children:"Each dependency plays a critical role in ensuring the code is clean, efficient, and functional, ultimately leading to the development of high-quality software."}),(0,i.jsx)(n.p,{children:"While developing code for the OpenBB Platform, one should always install the DevTools packages so that the above development tooling is available out-of-the-box."}),(0,i.jsx)(n.h3,{id:"installation-2",children:"Installation"}),(0,i.jsx)(n.p,{children:"Install from PyPI with:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb-devtools\n"})}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["When setting up the environment using the ",(0,i.jsx)(n.code,{children:"openbb_platform/dev_install.py"})," script, the DevTools will also be installed."]})}),(0,i.jsx)(n.h2,{id:"econometrics",children:"Econometrics"}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"openbb-econometrics"})," extension installs a new router path (",(0,i.jsx)(n.code,{children:"obb.econometrics"}),") and additional Python libraries:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"scipy"}),"\n",(0,i.jsx)(n.li,{children:"statsmodels"}),"\n",(0,i.jsx)(n.li,{children:"arch"}),"\n",(0,i.jsx)(n.li,{children:"linearmodels"}),"\n"]}),(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Statsmodels requires a C compiler be present on the system. Follow the instructions ",(0,i.jsx)(n.a,{href:"https://cython.readthedocs.io/en/latest/src/quickstart/install.html",children:"here"})," for system-specific methods."]}),(0,i.jsxs)(n.p,{children:["This extension is not accessible via REST API because ",(0,i.jsx)(n.code,{children:"statsmodels"})," is not serializable."]})]}),(0,i.jsx)(n.h3,{id:"installation-3",children:"Installation"}),(0,i.jsx)(n.p,{children:"Install from PyPI with:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb-econometrics\n"})}),(0,i.jsxs)(n.p,{children:["To install from source in editable mode, navigate into the folder, ",(0,i.jsx)(n.code,{children:"~/openbb_platform/extensions/econometrics"}),", and enter:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install -e .\n"})}),(0,i.jsx)(n.p,{children:"After installation, the Python interface will automatically rebuild on initialization."}),(0,i.jsx)(n.h2,{id:"quantitative",children:"Quantitative"}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"openbb-quantitative"})," extension installs a new router path (",(0,i.jsx)(n.code,{children:"obb.quantitative"}),") and a few additional Python libraries:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"pandas-ta"}),"\n",(0,i.jsx)(n.li,{children:"scipy"}),"\n",(0,i.jsx)(n.li,{children:"statsmodels"}),"\n"]}),(0,i.jsx)(n.h3,{id:"installation-4",children:"Installation"}),(0,i.jsx)(n.p,{children:"Install from PyPI with:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb-quantitative\n"})}),(0,i.jsxs)(n.p,{children:["To install from source in editable mode, navigate into the folder, ",(0,i.jsx)(n.code,{children:"~/openbb_platform/extensions/quantitative"}),", and enter:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install -e .\n"})}),(0,i.jsx)(n.p,{children:"After installation, the Python interface will automatically rebuild on initialization."}),(0,i.jsx)(n.h2,{id:"technical",children:"Technical"}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"openbb-technical"})," extension is for performing technical analysis on time series data. It installs a new router path (",(0,i.jsx)(n.code,{children:"obb.technical"}),") and some additional Python libraries:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"pandas-ta"}),"\n",(0,i.jsx)(n.li,{children:"scikit-learn"}),"\n",(0,i.jsx)(n.li,{children:"scipy"}),"\n",(0,i.jsx)(n.li,{children:"statsmodels"}),"\n"]}),(0,i.jsx)(n.h3,{id:"installation-5",children:"Installation"}),(0,i.jsx)(n.p,{children:"Install from PyPI with:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install openbb-technical\n"})}),(0,i.jsxs)(n.p,{children:["To install from source in editable mode, navigate into the folder, ",(0,i.jsx)(n.code,{children:"~/openbb_platform/extensions/technical"}),", and enter:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"pip install -e .\n"})}),(0,i.jsx)(n.p,{children:"After installation, the Python interface will automatically rebuild on initialization."})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var i=t(5260),s=t(74848);function l(e){let{title:n}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);