"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90742],{6720:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>n,metadata:()=>h,toc:()=>x});var i=l(74848),s=l(28453),r=l(94331);const n={title:"Futures",description:"Learn how to use the Futures module of the OpenBB SDK in a Python script or Jupyter Notebook. This guide includes descriptions of each function and examples of how to access futures forward curve data and chart, search available futures, and fetch and visualize historical data.",keywords:["OpenBB SDK","Python Script","Futures module","Futures Forward Curve Data","Futures Forward Curve Chart","Search Available Futures","Historical OHLC+V Data","Chart Historical Price","Individual Contracts","Jupyter Notebook"]},d=void 0,h={id:"sdk/data-available/futures",title:"Futures",description:"Learn how to use the Futures module of the OpenBB SDK in a Python script or Jupyter Notebook. This guide includes descriptions of each function and examples of how to access futures forward curve data and chart, search available futures, and fetch and visualize historical data.",source:"@site/content/sdk/data-available/futures.md",sourceDirName:"sdk/data-available",slug:"/sdk/data-available/futures",permalink:"/sdk/data-available/futures",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/data-available/futures.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"Futures",description:"Learn how to use the Futures module of the OpenBB SDK in a Python script or Jupyter Notebook. This guide includes descriptions of each function and examples of how to access futures forward curve data and chart, search available futures, and fetch and visualize historical data.",keywords:["OpenBB SDK","Python Script","Futures module","Futures Forward Curve Data","Futures Forward Curve Chart","Search Available Futures","Historical OHLC+V Data","Chart Historical Price","Individual Contracts","Jupyter Notebook"]},sidebar:"tutorialSidebar",previous:{title:"Forex",permalink:"/sdk/data-available/forex"},next:{title:"Quantitative Analysis",permalink:"/sdk/data-available/quantitative-analysis"}},c={},x=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"Search",id:"search",level:3},{value:"Curve",id:"curve",level:3},{value:"Historical",id:"historical",level:3}];function a(t){const e={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"Futures - Intros - Usage | OpenBB SDK Docs"}),"\n",(0,i.jsx)(e.p,{children:"The functions from the OpenBB Terminal Futures menu is part of the SDK layer, and provides methods for programmatically accessing the data and charts associated with them. Get started by importing the OpenBB SDK to the Python script or Jupyter Notebook file."}),"\n",(0,i.jsx)(e.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,i.jsx)(e.p,{children:"Below is a brief description of each function within the Futures module:"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Path"}),(0,i.jsx)(e.th,{style:{textAlign:"center"},children:"Type"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.futures.curve"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Futures Forward Curve Data"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.futures.curve_chart"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Futures Forward Curve Chart"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.futures.search"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Search Available Futures"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.futures.historical"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Historical OHLC+V Data"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"openbb.futures.historical_chart"}),(0,i.jsx)(e.td,{style:{textAlign:"center"},children:"Function"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"Chart Historical Price of Individual Contracts"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.h3,{id:"import-statements",children:"Import Statements"}),"\n",(0,i.jsx)(e.p,{children:"The examples here will assume that the block below is included at the top of the file:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nimport pandas as pd\n%matplotlib inline\n"})}),"\n",(0,i.jsx)(e.h3,{id:"search",children:"Search"}),"\n",(0,i.jsx)(e.p,{children:"Futures can be searched by description, exchange, or category."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"openbb.futures.search(description = 'Eurodollar')\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"right"}}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Ticker"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Exchange"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Category"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"66"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"GE"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Eurodollar Futures"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"CME"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"currency"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"67"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"GLB"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"One-Month Eurodollar Futures"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"CME"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"currency"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"152"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"SED"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"SED (SOFR-Eurodollar) Spread Futures"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"CME"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"bonds"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"The historical front-month price is captured to a DataFrame with:"}),"\n",(0,i.jsx)(e.h3,{id:"curve",children:"Curve"}),"\n",(0,i.jsx)(e.p,{children:"The forward curve data for a symbol is fetched with:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"eurodollar = openbb.futures.curve('GE')\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Expiration"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Futures"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-01 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"95.3561"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-12-01 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"94.9925"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2023-01-01 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"94.985"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2023-02-01 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"94.9"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2023-03-01 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"94.825"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:["To display a chart of the data, use ",(0,i.jsx)(e.code,{children:"curve_chart"}),":"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"openbb.futures.curve_chart(symbol = 'GE')\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://user-images.githubusercontent.com/85772166/202352342-eecf872d-8934-42e7-8b53-4e3415bc2993.png",alt:"openbb.futures.curve_chart",title:"openbb.futures.curve_chart"})}),"\n",(0,i.jsx)(e.h3,{id:"historical",children:"Historical"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"historical"})," function can fetch the historical front-month price:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"wti_continuous = obb.futures.historical('CL')\n"})}),"\n",(0,i.jsx)(e.p,{children:"Or, while actively trading, individual contracts. The example below requests historical data for the December WTI contract from 2023 to 2030, starting at the first recorded trading day of the December 2030 contract."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"cl_2312 = openbb.futures.historical(symbols = ['CL'], expiry = '2023-12')\ncl_2312 = cl_2312.rename(columns={'Adj Close':'2023-12'})\ncl_2412 = openbb.futures.historical(symbols = ['CL'], expiry = '2024-12')\ncl_2412 = cl_2412.rename(columns={'Adj Close':'2024-12'})\ncl_2512 = openbb.futures.historical(symbols = ['CL'], expiry = '2025-12')\ncl_2512 = cl_2512.rename(columns={'Adj Close':'2025-12'})\ncl_2612 = openbb.futures.historical(symbols = ['CL'], expiry = '2026-12')\ncl_2612 = cl_2612.rename(columns={'Adj Close':'2026-12'})\ncl_2712 = openbb.futures.historical(symbols = ['CL'], expiry = '2027-12')\ncl_2712 = cl_2712.rename(columns={'Adj Close':'2027-12'})\ncl_2812 = openbb.futures.historical(symbols = ['CL'], expiry = '2028-12')\ncl_2812 = cl_2812.rename(columns={'Adj Close':'2028-12'})\ncl_2912 = openbb.futures.historical(symbols = ['CL'], expiry = '2029-12')\ncl_2912 = cl_2912.rename(columns={'Adj Close':'2029-12'})\ncl_3012 = openbb.futures.historical(symbols = ['CL'], expiry = '2030-12')\ncl_3012 = cl_3012.rename(columns={'Adj Close':'2030-12'})\n\nhistorical = pd.DataFrame(data = [cl_2312['2023-12'],cl_2412['2024-12'],cl_2512['2025-12'],cl_2612['2026-12'],cl_2712['2027-12'],cl_2812['2028-12'],cl_2912['2029-12'],cl_3012['2030-12']]).transpose()\nhistorical = historical.dropna()\n\nhistorical\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Date"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"2023-12"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"2024-12"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"2025-12"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"2026-12"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"2027-12"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"2028-12"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"2029-12"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"2030-12"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2020-01-24 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"49.61"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"50.14"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"50.7"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.56"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.63"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.63"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.63"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.63"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2020-01-27 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"49.94"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"50.6"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.18"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.05"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.12"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.12"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.12"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.12"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2020-01-28 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"50.17"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"50.78"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.23"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.55"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.62"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.62"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.62"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.62"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2020-01-29 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"50.07"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"50.64"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.13"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.6"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.67"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.67"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.67"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.67"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2020-01-30 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"50.27"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"50.91"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.44"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.49"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.56"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.56"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.56"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.56"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-09 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"76.69"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"71.62"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"68.01"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"65.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"62.52"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"60.17"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"58.12"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"56.49"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-10 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"77"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"71.64"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"67.89"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"64.86"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"62.26"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"59.91"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"57.86"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"56.23"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-11 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"78.81"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"73.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"69.22"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"66.19"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"63.6"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"61.25"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"59.2"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"57.57"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-14 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"77.4"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"72.35"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"68.89"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"66.15"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"63.62"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"61.25"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"59.13"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"57.5"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2022-11-15 00:00:00"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"78.82"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"73.66"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"70.14"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"67.36"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"64.94"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"62.62"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"60.49"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"58.68"})]})]})]})]})}function o(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(a,{...t})}):a(t)}},94331:(t,e,l)=>{l.d(e,{A:()=>r});l(96540);var i=l(5260),s=l(74848);function r(t){let{title:e}=t;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:e})})}},28453:(t,e,l)=>{l.d(e,{R:()=>n,x:()=>d});var i=l(96540);const s={},r=i.createContext(s);function n(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:n(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);