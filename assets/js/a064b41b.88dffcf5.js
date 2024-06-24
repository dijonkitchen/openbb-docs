"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48769],{58423:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var n=a(74848),r=a(28453),i=a(94331);const d={title:"Metadata",sidebar_position:6,description:"This guide provides instructions for returning metadata from the provider interface that gets included in the `extra` attribute of the OBBject response.",keywords:["OpenBB Platform","metadata","provider","results metadata","fetcher","AnnotatedResult","annotations","develop"]},o=void 0,s={id:"platform/developer_guide/metadata",title:"Metadata",description:"This guide provides instructions for returning metadata from the provider interface that gets included in the `extra` attribute of the OBBject response.",source:"@site/content/platform/developer_guide/metadata.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/metadata",permalink:"/platform/developer_guide/metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/developer_guide/metadata.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,sidebarPosition:6,frontMatter:{title:"Metadata",sidebar_position:6,description:"This guide provides instructions for returning metadata from the provider interface that gets included in the `extra` attribute of the OBBject response.",keywords:["OpenBB Platform","metadata","provider","results metadata","fetcher","AnnotatedResult","annotations","develop"]},sidebar:"tutorialSidebar",previous:{title:"HTTP Requests",permalink:"/platform/developer_guide/http_requests"},next:{title:"Validators",permalink:"/platform/developer_guide/validators"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"How-To Add Metadata",id:"how-to-add-metadata",level:2},{value:"Import Statement",id:"import-statement",level:3},{value:"Transform Data",id:"transform-data",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"Metadata - Developer Guides | OpenBB Platform Docs"}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["When data needs to be included in the output, but should not be included in the serialized results,\nit can sent to the ",(0,n.jsx)(t.code,{children:"extra"})," attribute of the ",(0,n.jsx)(t.a,{href:"obbject",children:"OBBject"})," command response by using the ",(0,n.jsx)(t.code,{children:"AnnotatedResult"})," class."]}),"\n",(0,n.jsxs)(t.p,{children:["A simple modification to the ",(0,n.jsx)(t.code,{children:"transform_data"})," static method, in the provider's Fetcher class, is all that is required. The steps are outlined below."]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-add-metadata",children:"How-To Add Metadata"}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Add an additional import to the provider's model file."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.abstract.annotated_result import AnnotatedResult\n"})}),"\n",(0,n.jsx)(t.h3,{id:"transform-data",children:"Transform Data"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Wrap the output type in the ",(0,n.jsx)(t.code,{children:"transform_data"})," static method with this imported class."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'    @staticmethod\n    def transform_data(\n        query: FredSeriesQueryParams,\n        data: List[Dict[str, Any]],\n        **kwargs: Any,\n    ) -> AnnotatedResult[List[FredSeriesData]]:\n        """Transform data."""\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Return the ",(0,n.jsx)(t.code,{children:"AnnotatedResult"})," class by initializing it with a dictionary of metadata and the validated data model."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Instead of something like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"return [FredSeriesData.model_validate(d) for d in data]\n"})}),"\n",(0,n.jsx)(t.p,{children:"It will be like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"return AnnotatedResult(\n    result=[FredSeriesData.model_validate(r) for r in records],\n    metadata=metadata,\n)\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"metadata"})," should be a valid Python dictionary with keys and values that are JSON-serializable."]})}),"\n",(0,n.jsxs)(t.p,{children:["The example above is a snippet from the ",(0,n.jsx)(t.a,{href:"/platform/data_models/FredSeries",children:(0,n.jsx)(t.code,{children:"FredSeries"})})," data model."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(5260),r=a(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,a)=>{a.d(t,{R:()=>d,x:()=>o});var n=a(96540);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);