"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35582],{90943:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var n=a(74848),r=a(28453),t=a(94331);const i={title:"pos",description:"This documentation page is about getting dark pool short positions using the 'pos' function in the openbb.stocks.dps python package. Details about parameters such as 'sortby' and 'ascend', and the data returned, i.e., pd.DataFrame, are provided.",keywords:["pos","dark pool short positions","Stockgrid","coding","openbb.stocks.dps.pos","parameters","returns","Data in ascending order"]},l=void 0,m={id:"sdk/reference/stocks/dps/pos",title:"pos",description:"This documentation page is about getting dark pool short positions using the 'pos' function in the openbb.stocks.dps python package. Details about parameters such as 'sortby' and 'ascend', and the data returned, i.e., pd.DataFrame, are provided.",source:"@site/content/sdk/reference/stocks/dps/pos.md",sourceDirName:"sdk/reference/stocks/dps",slug:"/sdk/reference/stocks/dps/pos",permalink:"/docs/sdk/reference/stocks/dps/pos",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/dps/pos.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"pos",description:"This documentation page is about getting dark pool short positions using the 'pos' function in the openbb.stocks.dps python package. Details about parameters such as 'sortby' and 'ascend', and the data returned, i.e., pd.DataFrame, are provided.",keywords:["pos","dark pool short positions","Stockgrid","coding","openbb.stocks.dps.pos","parameters","returns","Data in ascending order"]},sidebar:"tutorialSidebar",previous:{title:"hsi",permalink:"/docs/sdk/reference/stocks/dps/hsi"},next:{title:"prom",permalink:"/docs/sdk/reference/stocks/dps/prom"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h2:"h2",hr:"hr",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.A,{title:"stocks.dps.pos - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(e.p,{children:"Get dark pool short positions. [Source: Stockgrid]"}),"\n",(0,n.jsxs)(e.p,{children:["Source Code: [",(0,n.jsx)(e.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stockgrid_model.py#L18",children:"link"}),"]"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:'openbb.stocks.dps.pos(sortby: str = "dpp_dollar", ascend: bool = False)\n'})}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Name"}),(0,n.jsx)(e.th,{children:"Type"}),(0,n.jsx)(e.th,{children:"Description"}),(0,n.jsx)(e.th,{children:"Default"}),(0,n.jsx)(e.th,{children:"Optional"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"sortby"}),(0,n.jsx)(e.td,{children:"str"}),(0,n.jsxs)(e.td,{children:["Field for which to sort by, where 'sv': Short Vol. [1M],",(0,n.jsx)("br",{}),"'sv_pct': Short Vol. %%, 'nsv': Net Short Vol. [1M],",(0,n.jsx)("br",{}),"'nsv_dollar': Net Short Vol. (",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"100"}),(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsx)(e.mo,{children:":"}),(0,n.jsx)(e.mi,{children:"D"}),(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mi,{children:"M"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mo,{children:"<"}),(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mo,{children:">"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"d"})]}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"r"}),(0,n.jsx)(e.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,n.jsx)(e.mo,{children:":"}),(0,n.jsx)(e.mi,{children:"D"}),(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"100M), 'dpp': DP Position [1M],<br/>'dpp_dollar': DP Position ("})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"100"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsxs)(e.span,{className:"mpunct",children:[(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:":"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"PP"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"os"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"<"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"b"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"mord",children:"/"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsxs)(e.span,{className:"mrel",children:[(0,n.jsx)(e.span,{className:"mrel",children:">"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9463em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7519em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:":"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"D"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"PP"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"os"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mopen",children:"("})]})]})]}),"1B)"]}),(0,n.jsx)(e.td,{children:"dpp_dollar"}),(0,n.jsx)(e.td,{children:"True"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"ascend"}),(0,n.jsx)(e.td,{children:"bool"}),(0,n.jsx)(e.td,{children:"Data in ascending order"}),(0,n.jsx)(e.td,{children:"False"}),(0,n.jsx)(e.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Type"}),(0,n.jsx)(e.th,{children:"Description"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"pd.DataFrame"}),(0,n.jsx)(e.td,{children:"Dark pool short position data"})]})})]}),"\n",(0,n.jsx)(e.hr,{})]})}function o(s={}){const{wrapper:e}={...(0,r.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},94331:(s,e,a)=>{a.d(e,{A:()=>t});a(96540);var n=a(5260),r=a(74848);function t(s){let{title:e}=s;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:e})})}},28453:(s,e,a)=>{a.d(e,{R:()=>i,x:()=>l});var n=a(96540);const r={},t=n.createContext(r);function i(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:i(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);