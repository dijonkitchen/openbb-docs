"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83926],{65753:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=o(74848),r=o(28453),i=o(94331),l=o(18228),a=o(19365);const s={title:"plot",description:"This documentation page outlines the functions related to plotting and charting an investment portfolio using the OpenBB's po module. The page provides examples of different chart types such as pie, hist, dd, and rc. It includes necessary parameters for the functions and discusses the usage of a portfolio engine.",keywords:["plot","tab","po","chart","portfolio","example","pie","hist","dd","rc","engine","type","category","parameters","returns"]},p=void 0,c={id:"sdk/reference/portfolio/po/plot",title:"plot",description:"This documentation page outlines the functions related to plotting and charting an investment portfolio using the OpenBB's po module. The page provides examples of different chart types such as pie, hist, dd, and rc. It includes necessary parameters for the functions and discusses the usage of a portfolio engine.",source:"@site/content/sdk/reference/portfolio/po/plot.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/plot",permalink:"/sdk/reference/portfolio/po/plot",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/plot.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"plot",description:"This documentation page outlines the functions related to plotting and charting an investment portfolio using the OpenBB's po module. The page provides examples of different chart types such as pie, hist, dd, and rc. It includes necessary parameters for the functions and discusses the usage of a portfolio engine.",keywords:["plot","tab","po","chart","portfolio","example","pie","hist","dd","rc","engine","type","category","parameters","returns"]},sidebar:"tutorialSidebar",previous:{title:"nco",permalink:"/sdk/reference/portfolio/po/nco"},next:{title:"property",permalink:"/sdk/reference/portfolio/po/property"}},d={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"portfolio.po.plot - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(a.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(t.p,{children:"Display efficient frontier"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_view.py#L237",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.portfolio.po.plot(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, chart_type: str = "pie", kwargs: Any)\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio_engine"}),(0,n.jsx)(t.td,{children:"PoEngine"}),(0,n.jsxs)(t.td,{children:["Portfolio optimization engine, by default None",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(t.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"chart_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:['Chart type, by default "pie"',(0,n.jsx)("br",{}),'Options are "pie", "hist", "dd" or "rc"']}),(0,n.jsx)(t.td,{children:"pie"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,n.jsx)(t.p,{children:"This function does not return anything"}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols=["AAPL", "MSFT", "AMZN"])\nd = {\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'"SECTOR": {\n            "AAPL": "INFORMATION TECHNOLOGY",\n            "MSFT": "INFORMATION TECHNOLOGY",\n            "AMZN": "CONSUMER DISCRETIONARY",\n        },\n        "CURRENT_INVESTED_AMOUNT": {\n            "AAPL": "100000.0",\n            "MSFT": "200000.0",\n            "AMZN": "300000.0",\n        },\n        "CURRENCY": {\n            "AAPL": "USD",\n            "MSFT": "USD",\n            "AMZN": "USD",\n        },\n    }\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"p.set_categories_dict(categories=d)\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"['SECTOR']\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="pie")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="hist")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="dd")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="rc")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="heat")\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"['ASSET_CLASS',\n 'SECTOR',\n 'INDUSTRY',\n 'COUNTRY',\n 'CURRENT_INVESTED_AMOUNT',\n 'CURRENCY']\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.portfolio.po.plot(portfolio_engine=p, category="ASSET_CLASS", chart_type="pie")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="hist")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="INDUSTRY", chart_type="dd")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="COUNTRY", chart_type="rc")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="ASSET_CLASS", chart_type="heat")\n'})}),(0,n.jsx)(t.hr,{})]}),(0,n.jsxs)(a.A,{value:"view",label:"Chart",children:[(0,n.jsx)(t.p,{children:"Display efficient frontier"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_view.py#L237",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.portfolio.po.plot_chart(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, chart_type: str = "pie", kwargs: Any)\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio_engine"}),(0,n.jsx)(t.td,{children:"PoEngine"}),(0,n.jsxs)(t.td,{children:["Portfolio optimization engine, by default None",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(t.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"chart_type"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:['Chart type, by default "pie"',(0,n.jsx)("br",{}),'Options are "pie", "hist", "dd" or "rc"']}),(0,n.jsx)(t.td,{children:"pie"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(t.p,{children:"This function does not return anything"}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"examples-1",children:"Examples"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols=["AAPL", "MSFT", "AMZN"])\nd = {\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'"SECTOR": {\n            "AAPL": "INFORMATION TECHNOLOGY",\n            "MSFT": "INFORMATION TECHNOLOGY",\n            "AMZN": "CONSUMER DISCRETIONARY",\n        },\n        "CURRENT_INVESTED_AMOUNT": {\n            "AAPL": "100000.0",\n            "MSFT": "200000.0",\n            "AMZN": "300000.0",\n        },\n        "CURRENCY": {\n            "AAPL": "USD",\n            "MSFT": "USD",\n            "AMZN": "USD",\n        },\n    }\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"p.set_categories_dict(categories=d)\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"['SECTOR']\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="pie")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="hist")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="dd")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="rc")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="heat")\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n'})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"['ASSET_CLASS',\n 'SECTOR',\n 'INDUSTRY',\n 'COUNTRY',\n 'CURRENT_INVESTED_AMOUNT',\n 'CURRENCY']\n"})}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.portfolio.po.plot(portfolio_engine=p, category="ASSET_CLASS", chart_type="pie")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="SECTOR", chart_type="hist")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="INDUSTRY", chart_type="dd")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="COUNTRY", chart_type="rc")\nopenbb.portfolio.po.plot(portfolio_engine=p, category="ASSET_CLASS", chart_type="heat")\n'})}),(0,n.jsx)(t.hr,{})]})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,o)=>{o.d(t,{A:()=>l});o(96540);var n=o(34164);const r={tabItem:"tabItem_Ymn6"};var i=o(74848);function l(e){let{children:t,hidden:o,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:o,children:t})}},94331:(e,t,o)=>{o.d(t,{A:()=>i});o(96540);var n=o(5260),r=o(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},18228:(e,t,o)=>{o.d(t,{A:()=>T});var n=o(96540),r=o(34164),i=o(23104),l=o(56347),a=o(205),s=o(57485),p=o(31682),c=o(89466);function d(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:r}}=e;return{value:t,label:o,attributes:n,default:r}}))}function h(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??d(o);return function(e){const t=(0,p.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function u(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:o}=e;const r=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,s.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:o=!1,groupId:r}=e,i=h(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[p,d]=f({queryString:o,groupId:r}),[b,g]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(o);return[r,(0,n.useCallback)((e=>{o&&i.set(e)}),[o,i])]}({groupId:r}),x=(()=>{const e=p??b;return u({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{x&&s(x)}),[x]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=o(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=o(74848);function y(e){let{className:t,block:o,selectedValue:n,selectValue:a,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:d}=(0,l.zy)(),h=e=>{const t=e.currentTarget,o=p.indexOf(t),r=s[o].value;r!==n&&(c(t),a(r))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const o=p.indexOf(e.currentTarget)+1;t=p[o]??p[0];break}case"ArrowLeft":{const o=p.indexOf(e.currentTarget)-1;t=p[o]??p[p.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:s.map((e=>{let{value:t,label:o,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>p.push(e),onKeyDown:u,onClick:h,...i,className:(0,r.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",x.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&d.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&d.startsWith("/terminal")}),children:o??t},t)}))})}function j(e){let{lazy:t,children:o,selectedValue:r}=e;if(o=Array.isArray(o)?o:[o],t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function _(e){const t=b(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,m.jsx)(y,{...e,...t}),(0,m.jsx)(j,{...e,...t})]})}function T(e){const t=(0,g.A)();return(0,m.jsx)(_,{...e},String(t))}},28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>a});var n=o(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);