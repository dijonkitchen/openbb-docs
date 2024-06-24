"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60800],{54565:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var n=t(74848),d=t(28453),s=t(94331),l=t(18228),i=t(19365);const c={title:"reference_rates",description:"Current, official, currency reference rates",keywords:["currency","reference_rates"]},a=void 0,h={id:"platform/reference/currency/reference_rates",title:"reference_rates",description:"Current, official, currency reference rates",source:"@site/content/platform/reference/currency/reference_rates.md",sourceDirName:"platform/reference/currency",slug:"/platform/reference/currency/reference_rates",permalink:"/platform/reference/currency/reference_rates",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/currency/reference_rates.md",tags:[],version:"current",frontMatter:{title:"reference_rates",description:"Current, official, currency reference rates",keywords:["currency","reference_rates"]},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/platform/reference/currency/price/historical"},next:{title:"search",permalink:"/platform/reference/currency/search"}},o={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"currency/reference_rates - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Get current, official, currency reference rates."}),"\n",(0,n.jsx)(r.p,{children:"Foreign exchange reference rates are the exchange rates set by a major financial institution or regulatory body,\nserving as a benchmark for the value of currencies around the world.\nThese rates are used as a standard to facilitate international trade and financial transactions,\nensuring consistency and reliability in currency conversion.\nThey are typically updated on a daily basis and reflect the market conditions at a specific time.\nCentral banks and financial institutions often use these rates to guide their own exchange rates,\nimpacting global trade, loans, and investments."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.currency.reference_rates(provider='ecb')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['ecb']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: e, c, b."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})})]})}),(0,n.jsx)(i.A,{value:"ecb",label:"ecb",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['ecb']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: e, c, b."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[CurrencyReferenceRates]\n        Serializable results.\n\n    provider : Optional[Literal['ecb']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The date of the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"EUR"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Euro."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"USD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"US Dollar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"JPY"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Japanese Yen."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"BGN"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Bulgarian Lev."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"CZK"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Czech Koruna."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"DKK"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Danish Krone."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"GBP"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Pound Sterling."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"HUF"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Hungarian Forint."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"PLN"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Polish Zloty."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"RON"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Romanian Leu."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"SEK"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Swedish Krona."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"CHF"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Swiss Franc."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ISK"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Icelandic Krona."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"NOK"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Norwegian Krone."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"TRY"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Turkish Lira."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"AUD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Australian Dollar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"BRL"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Brazilian Real."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"CAD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Canadian Dollar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"CNY"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Chinese Yuan."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"HKD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Hong Kong Dollar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"IDR"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Indonesian Rupiah."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ILS"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Israeli Shekel."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"INR"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Indian Rupee."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"KRW"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"South Korean Won."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MXN"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Mexican Peso."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MYR"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Malaysian Ringgit."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"NZD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"New Zealand Dollar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"PHP"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Philippine Peso."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"SGD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Singapore Dollar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"THB"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Thai Baht."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ZAR"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"South African Rand."})]})]})]})}),(0,n.jsx)(i.A,{value:"ecb",label:"ecb",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The date of the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"EUR"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Euro."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"USD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"US Dollar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"JPY"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Japanese Yen."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"BGN"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Bulgarian Lev."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"CZK"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Czech Koruna."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"DKK"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Danish Krone."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"GBP"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Pound Sterling."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"HUF"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Hungarian Forint."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"PLN"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Polish Zloty."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"RON"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Romanian Leu."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"SEK"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Swedish Krona."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"CHF"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Swiss Franc."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ISK"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Icelandic Krona."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"NOK"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Norwegian Krone."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"TRY"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Turkish Lira."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"AUD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Australian Dollar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"BRL"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Brazilian Real."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"CAD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Canadian Dollar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"CNY"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Chinese Yuan."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"HKD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Hong Kong Dollar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"IDR"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Indonesian Rupiah."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ILS"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Israeli Shekel."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"INR"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Indian Rupee."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"KRW"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"South Korean Won."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MXN"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Mexican Peso."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"MYR"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Malaysian Ringgit."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"NZD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"New Zealand Dollar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"PHP"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Philippine Peso."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"SGD"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Singapore Dollar."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"THB"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Thai Baht."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ZAR"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"South African Rand."})]})]})]})})]})]})}function u(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var n=t(34164);const d={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(d.tabItem,l),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(5260),d=t(74848);function s(e){let{title:r}=e;return(0,d.jsx)(n.A,{children:(0,d.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>D});var n=t(96540),d=t(34164),s=t(23104),l=t(56347),i=t(205),c=t(57485),a=t(31682),h=t(89466);function o(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:d}}=e;return{value:r,label:t,attributes:n,default:d}}))}function x(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??o(t);return function(e){const r=(0,a.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function j(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function u(e){let{queryString:r=!1,groupId:t}=e;const d=(0,l.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(d.location.search);r.set(s,e),d.replace({...d.location,search:r.toString()})}),[s,d])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:d}=e,s=x(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!j({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[a,o]=u({queryString:t,groupId:d}),[f,p]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[d,s]=(0,h.Dv)(t);return[d,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:d}),b=(()=>{const e=a??f;return j({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),p(e)}),[o,p,s]),tabValues:s}}var p=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var m=t(74848);function y(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),{pathname:o}=(0,l.zy)(),x=e=>{const r=e.currentTarget,t=a.indexOf(r),d=c[t].value;d!==n&&(h(r),i(d))},j=e=>{let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;r=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;r=a[t]??a[a.length-1];break}}r?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>a.push(e),onKeyDown:j,onClick:x,...s,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,s?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&o.startsWith("/terminal")}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:d}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===d));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==d})))})}function v(e){const r=f(e);return(0,m.jsxs)("div",{className:(0,d.A)("tabs-container",b.tabList),children:[(0,m.jsx)(y,{...e,...r}),(0,m.jsx)(g,{...e,...r})]})}function D(e){const r=(0,p.A)();return(0,m.jsx)(v,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var n=t(96540);const d={},s=n.createContext(d);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);