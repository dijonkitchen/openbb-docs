"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17573],{32517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=r(74848),l=r(28453),o=r(94331),s=r(18228),a=r(19365);const i={title:"dret",description:"Detailed documentation for 'dret' function of OpenBB Terminal, allows calculation of daily returns and visualization of these returns through charts. This function manipulates and interprets portfolio data.",keywords:["dret","portfolio","returns","PortfolioEngine","visualization","dret_chart","daily returns","data analysis"]},d=void 0,c={id:"sdk/reference/portfolio/dret",title:"dret",description:"Detailed documentation for 'dret' function of OpenBB Terminal, allows calculation of daily returns and visualization of these returns through charts. This function manipulates and interprets portfolio data.",source:"@site/content/sdk/reference/portfolio/dret.md",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/dret",permalink:"/sdk/reference/portfolio/dret",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/dret.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"dret",description:"Detailed documentation for 'dret' function of OpenBB Terminal, allows calculation of daily returns and visualization of these returns through charts. This function manipulates and interprets portfolio data.",keywords:["dret","portfolio","returns","PortfolioEngine","visualization","dret_chart","daily returns","data analysis"]},sidebar:"tutorialSidebar",previous:{title:"distr",permalink:"/sdk/reference/portfolio/distr"},next:{title:"es",permalink:"/sdk/reference/portfolio/es"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"portfolio.dret - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(s.A,{children:[(0,n.jsxs)(a.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(t.p,{children:"Get daily returns"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L373",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.portfolio.dret(portfolio_engine: portfolio_engine.PortfolioEngine, window: str = "all")\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio_engine"}),(0,n.jsx)(t.td,{children:"PortfolioEngine"}),(0,n.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"window"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"interval to compare cumulative returns and benchmark"}),(0,n.jsx)(t.td,{children:"all"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"DataFrame with daily returns"})]})})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.dret(p)\n'})}),(0,n.jsx)(t.hr,{})]}),(0,n.jsxs)(a.A,{value:"view",label:"Chart",children:[(0,n.jsx)(t.p,{children:"Display daily returns"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L557",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.portfolio.dret_chart(portfolio_engine: portfolio_engine.PortfolioEngine, window: str = "all", raw: bool = False, limit: int = 10, export: str = "", external_axes: Optional[matplotlib.axes._axes.Axes] = None)\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio_engine"}),(0,n.jsx)(t.td,{children:"PortfolioEngine"}),(0,n.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"window"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"interval to compare cumulative returns and benchmark"}),(0,n.jsx)(t.td,{children:"all"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"raw"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"Display raw data from cumulative return"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Last daily returns to display"}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"export"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Export certain type of data"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"external_axes"}),(0,n.jsx)(t.td,{children:"plt.Axes"}),(0,n.jsx)(t.td,{children:"Optional axes to display plot on"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(t.p,{children:"This function does not return anything"}),(0,n.jsx)(t.hr,{})]})]})]})}function f(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const l={tabItem:"tabItem_Ymn6"};var o=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,s),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(5260),l=r(74848);function o(e){let{title:t}=e;return(0,l.jsx)(n.A,{children:(0,l.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),l=r(34164),o=r(23104),s=r(56347),a=r(205),i=r(57485),d=r(31682),c=r(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:l}}=e;return{value:t,label:r,attributes:n,default:l}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const l=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(l.location.search);t.set(o,e),l.replace({...l.location,search:t.toString()})}),[o,l])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:l}=e,o=h(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[d,u]=f({queryString:r,groupId:l}),[x,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,o]=(0,c.Dv)(r);return[l,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:l}),m=(()=>{const e=d??x;return p({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{m&&i(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var b=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),{pathname:u}=(0,s.zy)(),h=e=>{const t=e.currentTarget,r=d.indexOf(t),l=i[r].value;l!==n&&(c(t),a(l))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:p,onClick:h,...o,className:(0,l.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,o?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:l}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,l.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,j.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const l={},o=n.createContext(l);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);