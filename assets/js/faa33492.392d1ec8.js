"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23264],{20655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var s=r(74848),n=r(28453),i=r(94331),d=r(18228),a=r(19365);const l={title:"share_statistics",description:"Learn how to retrieve and analyze share statistics for a given company  using the obb.equity.ownership.share_statistics API endpoint. This documentation  provides details on the parameters, return values, and data structure.",keywords:["share statistics","company statistics","equity ownership","symbol","provider","data","free float","float shares","outstanding shares","source"]},o=void 0,c={id:"platform/reference/equity/ownership/share_statistics",title:"share_statistics",description:"Learn how to retrieve and analyze share statistics for a given company  using the obb.equity.ownership.share_statistics API endpoint. This documentation  provides details on the parameters, return values, and data structure.",source:"@site/content/platform/reference/equity/ownership/share_statistics.md",sourceDirName:"platform/reference/equity/ownership",slug:"/platform/reference/equity/ownership/share_statistics",permalink:"/platform/reference/equity/ownership/share_statistics",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/ownership/share_statistics.md",tags:[],version:"current",frontMatter:{title:"share_statistics",description:"Learn how to retrieve and analyze share statistics for a given company  using the obb.equity.ownership.share_statistics API endpoint. This documentation  provides details on the parameters, return values, and data structure.",keywords:["share statistics","company statistics","equity ownership","symbol","provider","data","free float","float shares","outstanding shares","source"]},sidebar:"tutorialSidebar",previous:{title:"major_holders",permalink:"/platform/reference/equity/ownership/major_holders"},next:{title:"Fundamental",permalink:"/platform/reference/equity/fundamental/"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"equity/ownership/share_statistics - Reference | OpenBB Platform Docs"}),"\n","\n",(0,s.jsx)(t.p,{children:"Get data about share float for a given company."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.ownership.share_statistics(symbol='AAPL', provider='fmp')\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(a.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): yfinance."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'yfinance']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(a.A,{value:"fmp",label:"fmp",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): yfinance."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'yfinance']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(a.A,{value:"intrinio",label:"intrinio",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): yfinance."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'yfinance']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(a.A,{value:"yfinance",label:"yfinance",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): yfinance."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'yfinance']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[ShareStatistics]\n        Serializable results.\n\n    provider : Optional[Literal['fmp', 'intrinio', 'yfinance']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(d.A,{children:[(0,s.jsx)(a.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"free_float"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of unrestricted shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"float_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Number of shares available for trading by the general public."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"outstanding_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Total number of shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"source"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Source of the received data."})]})]})]})}),(0,s.jsx)(a.A,{value:"fmp",label:"fmp",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"free_float"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of unrestricted shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"float_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Number of shares available for trading by the general public."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"outstanding_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Total number of shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"source"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Source of the received data."})]})]})]})}),(0,s.jsx)(a.A,{value:"intrinio",label:"intrinio",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"free_float"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of unrestricted shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"float_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Number of shares available for trading by the general public."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"outstanding_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Total number of shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"source"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Source of the received data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"adjusted_outstanding_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Total number of shares of a publicly-traded company, adjusted for splits."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"public_float"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Aggregate market value of the shares of a publicly-traded company."})]})]})]})}),(0,s.jsx)(a.A,{value:"yfinance",label:"yfinance",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"The date of the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"free_float"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of unrestricted shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"float_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Number of shares available for trading by the general public."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"outstanding_shares"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Total number of shares of a publicly-traded company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"source"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Source of the received data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"implied_shares_outstanding"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Implied Shares Outstanding of common equity, assuming the conversion of all convertible subsidiary equity into common."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"short_interest"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of shares that are reported short."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"short_percent_of_float"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of shares that are reported short, as a normalized percent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"days_to_cover"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Number of days to repurchase the shares as a ratio of average daily volume"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"short_interest_prev_month"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of shares that were reported short in the previous month."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"short_interest_prev_date"}),(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Date of the previous month's report."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"insider_ownership"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of shares held by insiders, as a normalized percent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"institution_ownership"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of shares held by institutions, as a normalized percent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"institution_float_ownership"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Percentage of float held by institutions, as a normalized percent."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"institutions_count"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of institutions holding shares."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var i=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,d),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(5260),n=r(74848);function i(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var s=r(96540),n=r(34164),i=r(23104),d=r(56347),a=r(205),l=r(57485),o=r(31682),c=r(89466);function h(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}function u(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const n=(0,d.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=u(e),[d,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[o,h]=j({queryString:r,groupId:n}),[f,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),b=(()=>{const e=o??f;return x({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:d,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=r(74848);function y(e){let{className:t,block:r,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:h}=(0,d.zy)(),u=e=>{const t=e.currentTarget,r=o.indexOf(t),n=l[r].value;n!==s&&(c(t),a(n))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:x,onClick:u,...i,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,i?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,m.jsx)(y,{...e,...t}),(0,m.jsx)(v,{...e,...t})]})}function w(e){const t=(0,p.A)();return(0,m.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>a});var s=r(96540);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);