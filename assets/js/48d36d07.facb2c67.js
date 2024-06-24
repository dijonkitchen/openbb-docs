"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11453],{18998:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=s(74848),i=s(28453);const r={title:"REST API Requests",sidebar_position:8,description:"How to send requests to the OpenBB Platform REST API.",keywords:["tutorial","OpenBB Platform","Python client","Fast API","getting started","requests","data providers"]},l=void 0,d={id:"platform/getting_started/api_requests",title:"REST API Requests",description:"How to send requests to the OpenBB Platform REST API.",source:"@site/content/platform/getting_started/api_requests.mdx",sourceDirName:"platform/getting_started",slug:"/platform/getting_started/api_requests",permalink:"/platform/getting_started/api_requests",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/getting_started/api_requests.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,sidebarPosition:8,frontMatter:{title:"REST API Requests",sidebar_position:8,description:"How to send requests to the OpenBB Platform REST API.",keywords:["tutorial","OpenBB Platform","Python client","Fast API","getting started","requests","data providers"]},sidebar:"tutorialSidebar",previous:{title:"Economic Indicators",permalink:"/platform/getting_started/economic_indicators"},next:{title:"Create New Router Extension",permalink:"/platform/getting_started/create_new_router_extension"}},a={},o=[{value:"Example",id:"example",level:3},{value:"Fetch Some Data",id:"fetch-some-data",level:4},{value:"Send a POST Request",id:"send-a-post-request",level:4}];function h(t){const e={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["Most REST API endpoints are for data retrieval and are defined as ",(0,n.jsx)(e.code,{children:"GET"})," requests, but some ",(0,n.jsx)(e.a,{href:"/platform/user_guides/extensions",children:"toolkit extensions"})," require data to pass through the function. In these instances, it must be a ",(0,n.jsx)(e.code,{children:"POST"})," request."]}),"\n",(0,n.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(e.p,{children:"This example will use a GET request to fetch daily VIX data from the Cboe data extension, and then make a POST request which passes through the data to a technical analysis function."}),"\n",(0,n.jsx)(e.p,{children:"First, start a development server."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"uvicorn openbb_core.api.rest_api:app --reload\n"})}),"\n",(0,n.jsxs)(e.p,{children:["This example will use Python and the ",(0,n.jsx)(e.code,{children:"requests"})," library."]}),"\n",(0,n.jsx)(e.h4,{id:"fetch-some-data",children:"Fetch Some Data"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:'import requests\n\nget_url = "http://127.0.0.1:8000/api/v1/index/price/historical?provider=cboe&symbol=vix&interval=1d"\nget_response = requests.get(get_url)\ndata_results = get_response.json()["results"]\n\ndata_results[-1]\n'})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-json",children:"{'date': '2023-11-17T00:00:00',\n 'open': 14.18,\n 'high': 14.19,\n 'low': 13.67,\n 'close': 13.79,\n 'volume': 0,\n 'calls_volume': None,\n 'puts_volume': None,\n 'total_options_volume': None}\n"})}),"\n",(0,n.jsx)(e.h4,{id:"send-a-post-request",children:"Send a POST Request"}),"\n",(0,n.jsxs)(e.p,{children:["Next, pass the ",(0,n.jsx)(e.code,{children:"data_results"})," to a function, using the ",(0,n.jsx)(e.code,{children:"json"})," field in the POST headers."]}),"\n",(0,n.jsx)(e.p,{children:"For this example, realized volatility cones, the default parameters assume the time series data is daily and that volatility should be annualized over 252 trading days."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:'import pandas as pd\n\npost_url = "http://localhost:8000/api/v1/technical/cones"\npost_response = requests.post(post_url, json=data_results)\nta_results = post_response.json()["results"]\n\npd.DataFrame.from_records(ta_results).head()\n'})}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"window"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"realized"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"min"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"lower_25%"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"median"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"upper_75%"}),(0,n.jsx)(e.th,{style:{textAlign:"right"},children:"max"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"3"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.396165"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.00701638"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.444709"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.72414"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1.11563"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"8.47636"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"10"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.623199"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.190188"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.665584"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.852915"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1.15491"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"4.83264"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"30"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.988435"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.332913"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.750007"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.921482"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1.17072"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2.98404"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"60"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.932594"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.47639"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.792548"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.964617"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1.20171"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2.35563"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"90"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.915137"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.551011"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.815229"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"0.965553"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"1.2128"}),(0,n.jsx)(e.td,{style:{textAlign:"right"},children:"2.04104"})]})]})]}),"\n",(0,n.jsx)(e.p,{children:"The output from the Fast API is a serialized version of this object, and these methods are lost on conversion. OBBject can be reconstructed to recover the helpers by importing the model and validating the data."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:'import requests\nfrom openbb_core.app.model.obbject import OBBject\n\ndata = []\nsymbol="SPY"\nurl = f"http://127.0.0.1:8000/api/v1/equity/price/historical?provider=polygon&symbol={symbol}"\nheaders = {"accept": "application/json"}\n\nresponse = requests.get(url, headers=headers, timeout=3)\n\nif response.status_code == 200:\n  data = OBBject.model_validate(response.json())\n\ndata.to_df()\n'})})]})}function c(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>l,x:()=>d});var n=s(96540);const i={},r=n.createContext(i);function l(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:l(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);