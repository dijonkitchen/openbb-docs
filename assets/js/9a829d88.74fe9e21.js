"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75363],{66021:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=t(74848),a=t(28453),o=t(94331),s=t(18228),l=t(19365);const d={title:"orderbook",description:"This documentation page hosts information on 'Orderbook' operations in forex trading using the 'Oanda' platform, powered by 'OpenBB'. It includes Python source code, various parameters, and return types. Also addressed is plotting an 'Orderbook' chart with 'matplotlib'.",keywords:["orderbook","oanda","forex","currency pair","accountID","orderbook chart","matplotlib","pandas DataFrame"]},i=void 0,c={id:"sdk/reference/forex/oanda/orderbook",title:"orderbook",description:"This documentation page hosts information on 'Orderbook' operations in forex trading using the 'Oanda' platform, powered by 'OpenBB'. It includes Python source code, various parameters, and return types. Also addressed is plotting an 'Orderbook' chart with 'matplotlib'.",source:"@site/content/sdk/reference/forex/oanda/orderbook.md",sourceDirName:"sdk/reference/forex/oanda",slug:"/sdk/reference/forex/oanda/orderbook",permalink:"/sdk/reference/forex/oanda/orderbook",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forex/oanda/orderbook.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"orderbook",description:"This documentation page hosts information on 'Orderbook' operations in forex trading using the 'Oanda' platform, powered by 'OpenBB'. It includes Python source code, various parameters, and return types. Also addressed is plotting an 'Orderbook' chart with 'matplotlib'.",keywords:["orderbook","oanda","forex","currency pair","accountID","orderbook chart","matplotlib","pandas DataFrame"]},sidebar:"tutorialSidebar",previous:{title:"order",permalink:"/sdk/reference/forex/oanda/order"},next:{title:"pending",permalink:"/sdk/reference/forex/oanda/pending"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"forex.oanda.orderbook - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(s.A,{children:[(0,n.jsxs)(l.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(r.p,{children:"Request order book data for plotting."}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L137",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.forex.oanda.orderbook(instrument: Optional[str] = None, accountID: str = "REPLACE_ME")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"instrument"}),(0,n.jsx)(r.td,{children:"Union[str, None]"}),(0,n.jsx)(r.td,{children:"The loaded currency pair, by default None"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accountID"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Oanda account ID, by default cfg.OANDA_ACCOUNT"}),(0,n.jsx)(r.td,{children:"REPLACE_ME"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Union[pd.DataFrame, bool]"}),(0,n.jsx)(r.td,{children:"Order book data or False"})]})})]}),(0,n.jsx)(r.hr,{})]}),(0,n.jsxs)(l.A,{value:"view",label:"Chart",children:[(0,n.jsx)(r.p,{children:"Plot the orderbook for the instrument if Oanda provides one."}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L79",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.forex.oanda.orderbook_chart(accountID: str, instrument: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accountID"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Oanda user account ID"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"instrument"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The loaded currency pair"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"external_axes"}),(0,n.jsx)(r.td,{children:"Optional[List[plt.Axes]]"}),(0,n.jsx)(r.td,{children:"External axes (1 axis is expected in the list), by default None"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(r.p,{children:"This function does not return anything"}),(0,n.jsx)(r.hr,{})]})]})]})}function b(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var n=t(5260),a=t(74848);function o(e){let{title:r}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>k});var n=t(96540),a=t(34164),o=t(23104),s=t(56347),l=t(205),d=t(57485),i=t(31682),c=t(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,i.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,o=h(e),[s,d]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[i,u]=b({queryString:t,groupId:a}),[x,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),m=(()=>{const e=i??x;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{m&&d(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=t(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:d}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),{pathname:u}=(0,s.zy)(),h=e=>{const r=e.currentTarget,t=i.indexOf(r),a=d[t].value;a!==n&&(c(r),l(a))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:p,onClick:h,...o,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,o?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function g(e){const r=x(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...e,...r}),(0,j.jsx)(y,{...e,...r})]})}function k(e){const r=(0,f.A)();return(0,j.jsx)(g,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>l});var n=t(96540);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);