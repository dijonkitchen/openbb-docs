"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62420],{97429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=r(74848),a=r(28453),s=r(94331),l=r(18228),i=r(19365);const o={title:"demark",description:"This page provides comprehensive documentation on the demark sequential indicator feature offered. It includes detailed source codes, parameters, returns, and examples for users to understand how to get integer values for demark sequential indicators, and also how to plot these indicators.",keywords:["demark sequential indicator","technical analysis","plot indicators","OpenBB terminal","OpenBB finance","GitHub link","OpenBB stocks","matplotlib.axes"]},d=void 0,c={id:"sdk/reference/ta/demark",title:"demark",description:"This page provides comprehensive documentation on the demark sequential indicator feature offered. It includes detailed source codes, parameters, returns, and examples for users to understand how to get integer values for demark sequential indicators, and also how to plot these indicators.",source:"@site/content/sdk/reference/ta/demark.md",sourceDirName:"sdk/reference/ta",slug:"/sdk/reference/ta/demark",permalink:"/sdk/reference/ta/demark",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/ta/demark.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"demark",description:"This page provides comprehensive documentation on the demark sequential indicator feature offered. It includes detailed source codes, parameters, returns, and examples for users to understand how to get integer values for demark sequential indicators, and also how to plot these indicators.",keywords:["demark sequential indicator","technical analysis","plot indicators","OpenBB terminal","OpenBB finance","GitHub link","OpenBB stocks","matplotlib.axes"]},sidebar:"tutorialSidebar",previous:{title:"clenow",permalink:"/sdk/reference/ta/clenow"},next:{title:"donchian",permalink:"/sdk/reference/ta/donchian"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"ta.demark - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(i.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(t.p,{children:"Get the integer value for demark sequential indicator"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_model.py#L257",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"openbb.ta.demark(values: pd.Series)\n"})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"values"}),(0,n.jsx)(t.td,{children:"pd.Series"}),(0,n.jsx)(t.td,{children:"Series of close values"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]})})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"Dataframe of UP and DOWN sequential indicators"})]})})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\ndf = openbb.stocks.load("AAPL")\nopenbb.ta.demark(df["Close"])\n'})}),(0,n.jsx)(t.hr,{})]}),(0,n.jsxs)(i.A,{value:"view",label:"Chart",children:[(0,n.jsx)(t.p,{children:"Plot demark sequential indicator"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_view.py#L644",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.ta.demark_chart(data: pd.DataFrame, symbol: str = "", min_to_show: int = 5, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"DataFrame of values"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol that the data corresponds to"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"min_to_show"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Minimum value to show"}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"export"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Format to export data"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"external_axes"}),(0,n.jsx)(t.td,{children:"Optional[List[plt.Axes]]"}),(0,n.jsx)(t.td,{children:"External axes (1 axes are expected in the list), by default None"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(t.p,{children:"This function does not return anything"}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"examples-1",children:"Examples"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\ndf = openbb.stocks.load("AAPL")\nopenbb.ta.demark_chart(df)\n'})}),(0,n.jsx)(t.hr,{})]})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),a=r(74848);function s(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),a=r(34164),s=r(23104),l=r(56347),i=r(205),o=r(57485),d=r(31682),c=r(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[d,u]=m({queryString:r,groupId:a}),[x,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),f=(()=>{const e=d??x;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:u}=(0,l.zy)(),h=e=>{const t=e.currentTarget,r=d.indexOf(t),a=o[r].value;a!==n&&(c(t),i(a))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:p,onClick:h,...s,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,s?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function k(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function y(e){const t=(0,b.A)();return(0,j.jsx)(k,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);