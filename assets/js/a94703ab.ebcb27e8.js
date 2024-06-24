"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79048],{33214:(t,n,a)=>{a.r(n),a.d(n,{default:()=>Be});var o=a(96540),s=a(34164),i=a(69024),l=a(17559),r=a(84142),c=a(26588),d=a(21312),m=a(23104),u=a(75062);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var p=a(74848);function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,a]=(0,o.useState)(!1),s=(0,o.useRef)(!1),{startScroll:i,cancelScroll:l}=(0,m.gk)();return(0,m.Mq)(((e,n)=>{let{scrollY:o}=e;const i=n?.scrollY;i&&(s.current?s.current=!1:o>=i?(l(),a(!1)):o<t?a(!1):o+window.innerHeight<document.documentElement.scrollHeight&&a(!0))})),(0,u.$)((e=>{e.location.hash&&(s.current=!0,a(!1))})),{shown:n,scrollToTop:()=>i(0)}}({threshold:300});return(0,p.jsx)("button",{"aria-label":(0,d.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,s.A)("clean-btn",l.G.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var x=a(53109),f=a(56347),j=a(24581),g=a(6342),C=a(28774),k=a(86025),v=a(44586),_=a(92303),A=a(95293);const B={themedComponent:"themedComponent_mlkZ","themedComponent--light":"themedComponent--light_NVdE","themedComponent--dark":"themedComponent--dark_xIcU"};function N(e){let{className:t,children:n}=e;const a=(0,_.A)(),{colorMode:i}=(0,A.G)();return(0,p.jsx)(p.Fragment,{children:(a?"dark"===i?["dark"]:["light"]:["light","dark"]).map((e=>{const a=n({theme:e,className:(0,s.A)(t,B.themedComponent,B[`themedComponent--${e}`])});return(0,p.jsx)(o.Fragment,{children:a},e)}))})}function S(e){const{sources:t,className:n,alt:a,...o}=e;return(0,p.jsx)(N,{className:n,children:e=>{let{theme:n,className:s}=e;return(0,p.jsx)("img",{src:t[n],alt:a,className:s,...o})}})}function T(e){let{logo:t,alt:n,imageClassName:a}=e;const o={light:(0,k.A)(t.src),dark:(0,k.A)(t.srcDark||t.src)},s=(0,p.jsx)(S,{className:t.className,sources:o,height:t.height,width:t.width,alt:n,style:t.style});return a?(0,p.jsx)("div",{className:a,children:s}):s}function I(e){const{siteConfig:{title:t}}=(0,v.A)(),{navbar:{title:n,logo:a}}=(0,g.p)(),{imageClassName:o,titleClassName:s,...i}=e,l=(0,k.A)(a?.href||"/"),r=n?"":t,c=a?.alt??r;return(0,p.jsxs)(C.A,{to:l,...i,...a?.target&&{target:a.target},children:[a&&(0,p.jsx)(T,{logo:a,alt:c,imageClassName:o}),null!=n&&(0,p.jsx)("b",{className:s,children:n})]})}function y(e){return(0,p.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,p.jsxs)("g",{fill:"#7a7a7a",children:[(0,p.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,p.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const w={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function E(e){let{onClick:t}=e;return(0,p.jsx)("button",{type:"button",title:(0,d.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,s.A)("button button--secondary button--outline",w.collapseSidebarButton),onClick:t,children:(0,p.jsx)(y,{className:w.collapseSidebarButtonIcon})})}var L=a(65041),W=a(89532);const P=Symbol("EmptyContext"),M=o.createContext(P);function H(e){let{children:t}=e;const[n,a]=(0,o.useState)(null),s=(0,o.useMemo)((()=>({expandedItem:n,setExpandedItem:a})),[n]);return(0,p.jsx)(M.Provider,{value:s,children:t})}var D=a(41422),F=a(99169),G=a(52202);function O(e){let{categoryLabel:t,onClick:n}=e;return(0,p.jsx)("button",{"aria-label":(0,d.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function R(t){let{item:n,onItemClick:a,activePath:i,level:c,index:d,...m}=t;const{items:u,label:h,collapsible:b,className:x,href:j}=n,k={"OpenBB Terminal":"/terminal","OpenBB Platform":"/platform","OpenBB Bot":"/bot","OpenBB Terminal Pro":"/pro","OpenBB Add-in for Excel":"/excel","OpenBB Platform CLI":"/cli"}[h]||j,{docs:{sidebar:{autoCollapseCategories:v}}}=(0,g.p)(),A=function(e,t){const n=(0,_.A)();return(0,o.useMemo)((()=>{if(t)return t;!n&&e.collapsible}),[e,n])}(n,k),B=(0,r.w8)(n,i),N=(0,F.ys)(k,i),{collapsed:S,setCollapsed:T}=(0,D.u)({initialState:()=>!!b&&(!B&&n.collapsed)}),{expandedItem:I,setExpandedItem:y}=function(){const e=(0,o.useContext)(M);if(e===P)throw new W.dV("DocSidebarItemsExpandedStateProvider");return e}(),w=function(e){void 0===e&&(e=!S),y(e?null:d),T(e)};!function(e){let{isActive:t,collapsed:n,updateCollapsed:a}=e;const s=(0,W.ZC)(t);(0,o.useEffect)((()=>{t&&!s&&n&&a(!1)}),[t,s,n,a])}({isActive:B,collapsed:S,updateCollapsed:w}),(0,o.useEffect)((()=>{b&&null!=I&&I!==d&&v&&T(!0)}),[b,I,d,T,v]);const{isIFrame:E}=(0,G.jw)(),L=E&&["OpenBB Terminal","OpenBB SDK","OpenBB Bot"].includes(h),H=(0,f.zy)(),R=H.pathname.startsWith("/pro"),V=H.pathname.startsWith("/excel");return!n.customProps?.hiddenByDefault||R||V?n.customProps?.onlyDirectAccess&&!V?null:(0,p.jsxs)("li",{className:(0,s.A)(l.G.docs.docSidebarItemCategory,l.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":S},x),children:[(0,p.jsxs)("div",{className:(0,s.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":N}),children:[(0,p.jsx)(C.A,{className:(0,s.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!k&&b,"menu__link--active":B}),onClick:b?e=>{L&&e.preventDefault(),a?.(n),k?w(!1):(e.preventDefault(),w())}:()=>{L&&e.preventDefault(),a?.(n)},"aria-current":N?"page":void 0,"aria-expanded":b?!S:void 0,href:b?A??"#":A,...m,children:h}),k&&b&&(0,p.jsx)(O,{categoryLabel:h,onClick:e=>{e.preventDefault(),w()}})]}),(0,p.jsx)(D.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:S,children:(0,p.jsx)(X,{items:u,tabIndex:S?-1:0,onItemClick:a,activePath:i,level:c+1})})]}):null}const V={menuHtmlItem:"menuHtmlItem_PEWV"};function U(e){let{item:t,level:n,index:a}=e;const{value:o,defaultStyle:i,className:r}=t;return(0,p.jsx)("li",{className:(0,s.A)(l.G.docs.docSidebarItemLink,l.G.docs.docSidebarItemLinkLevel(n),i&&[V.menuHtmlItem,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:o}},a)}var Y=a(16654),z=a(43186);const K={menuExternalLink:"menuExternalLink_NnFM"};function q(e){let{item:t,onItemClick:n,activePath:a,level:o,index:i,...c}=e;const{href:d,label:m,className:u,autoAddBaseUrl:h}=t,b=(0,r.w8)(t,a),x=(0,Y.A)(d);return(0,p.jsx)("li",{className:(0,s.A)(l.G.docs.docSidebarItemLink,l.G.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),children:(0,p.jsxs)(C.A,{className:(0,s.A)("menu__link",!x&&K.menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:h,"aria-current":b?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[m,!x&&(0,p.jsx)(z.A,{})]})},m)}function $(e,t){if(e.items)return e.items.every((e=>$(e,t)));if("link"===e.type){return!e.href.replace(/\/$/,"").startsWith(t)}return"category"===e.type&&e.items.every((e=>$(e,t)))}function Z(e){let{item:t,...n}=e;const{isIFrame:a}=(0,G.jw)(),{pathname:o}=(0,f.zy)(),s=o.startsWith("/pro"),i=o.startsWith("/excel");if(t.customProps?.hiddenByDefault&&!s&&!i)return null;if(a){if($(t,o.split("/").slice(0,3).join("/")))return null}if((s||i)&&!J(t))return null;if(!s&&!i&&t.href?.startsWith("/pro")&&t.href?.startsWith("/excel"))return null;switch(t.type){case"category":return(0,p.jsx)(R,{item:t,...n});case"html":return(0,p.jsx)(U,{item:t,...n});default:return(0,p.jsx)(q,{item:t,...n})}}function J(e){return e.items?e.items.some((e=>J(e))):"link"===e.type?e.href?.startsWith("/pro")||e.href?.startsWith("/excel"):"category"===e.type&&e.items.some((e=>J(e)))}function Q(e){let{items:t,...n}=e;const a=(0,r.Y)(t,n.activePath);return(0,p.jsx)(H,{children:a.map(((e,t)=>(0,p.jsx)(Z,{item:e,index:t,...n},t)))})}const X=(0,o.memo)(Q),ee={menu:"menu_Y1UP",menuWithAnnouncementBar:"menuWithAnnouncementBar_fPny"};a(1268);function te(e){let{path:t,sidebar:n,className:a}=e;const i=function(){const{isActive:e}=(0,L.Mj)(),[t,n]=(0,o.useState)(e);return(0,m.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}(),{isIFrame:r}=(0,G.jw)();return(0,p.jsx)("nav",{className:(0,s.A)("menu thin-scrollbar !px-10 text-sm !pb-10",{"mt-[40px]":!r},ee.menu,i&&ee.menuWithAnnouncementBar,a),children:(0,p.jsx)("ul",{className:(0,s.A)(l.G.docs.docSidebarMenu,"menu__list"),children:(0,p.jsx)(X,{items:n,activePath:t,level:1})})})}const ne="sidebar_njMd",ae="sidebarWithHideableNavbar_wUlq",oe="sidebarHidden_VK0M",se="sidebarLogo_isFc";function ie(e){let{path:t,sidebar:n,onCollapse:a,isHidden:o}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:l}}}=(0,g.p)();return(0,p.jsxs)("div",{className:(0,s.A)(ne,i&&ae,o&&oe),children:[i&&(0,p.jsx)(I,{tabIndex:-1,className:se}),(0,p.jsx)(te,{path:t,sidebar:n}),l&&(0,p.jsx)(E,{onClick:a})]})}const le=o.memo(ie);var re=a(75600),ce=a(22069);const de=e=>{let{sidebar:t,path:n}=e;const a=(0,ce.M)();return(0,p.jsx)("ul",{className:(0,s.A)(l.G.docs.docSidebarMenu,"menu__list"),children:(0,p.jsx)(X,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function me(e){return(0,p.jsx)(re.GX,{component:de,props:e})}const ue=o.memo(me);function he(e){const t=(0,j.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,p.jsxs)(p.Fragment,{children:[n&&(0,p.jsx)(le,{...e}),a&&(0,p.jsx)(ue,{...e})]})}const pe={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function be(e){let{toggleSidebar:t}=e;return(0,p.jsx)("div",{className:pe.expandButton,title:(0,d.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,p.jsx)(y,{className:pe.expandButtonIcon})})}const xe={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function fe(e){let{children:t}=e;const n=(0,c.t)();return(0,p.jsx)(o.Fragment,{children:t},n?.name??"noSidebar")}function je(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:a}=e;const{pathname:i}=(0,f.zy)(),[r,c]=(0,o.useState)(!1),d=(0,o.useCallback)((()=>{r&&c(!1),!r&&(0,x.O)()&&c(!0),a((e=>!e))}),[a,r]);return(0,p.jsx)("aside",{className:(0,s.A)(l.G.docs.docSidebarContainer,xe.docSidebarContainer,n&&xe.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(xe.docSidebarContainer)&&n&&c(!0)},children:(0,p.jsx)(fe,{children:(0,p.jsxs)("div",{className:(0,s.A)(xe.sidebarViewport,r&&xe.sidebarViewportHidden),children:[(0,p.jsx)(he,{sidebar:t,path:i,onCollapse:d,isHidden:r}),r&&(0,p.jsx)(be,{toggleSidebar:d})]})})})}const ge={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function Ce(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.t)();return(0,p.jsx)("main",{className:(0,s.A)(ge.docMainContainer,(t||!a)&&ge.docMainContainerEnhanced),children:(0,p.jsx)("div",{className:(0,s.A)("container padding-top--md padding-bottom--lg",ge.docItemWrapper,t&&ge.docItemWrapperEnhanced),children:n})})}const ke={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ve(e){let{children:t}=e;const n=(0,c.t)(),[a,s]=(0,o.useState)(!1);return(0,p.jsxs)("div",{className:ke.docsWrapper,children:[(0,p.jsx)(b,{}),(0,p.jsxs)("div",{className:ke.docRoot,children:[n&&(0,p.jsx)(je,{sidebar:n.items,hiddenSidebarContainer:a,setHiddenSidebarContainer:s}),(0,p.jsx)(Ce,{hiddenSidebarContainer:a,children:t})]})]})}var _e=a(51107);function Ae(e){let{className:t}=e;return(0,p.jsx)("main",{className:(0,s.A)("container margin-vert--xl",t),children:(0,p.jsx)("div",{className:"row",children:(0,p.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,p.jsx)(_e.A,{as:"h1",className:"hero__title",children:(0,p.jsx)(d.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,p.jsx)("p",{children:(0,p.jsx)(d.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,p.jsx)("p",{children:(0,p.jsx)(d.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}function Be(e){const t=(0,r.B5)(e);if(!t)return(0,p.jsx)(Ae,{});const{docElement:n,sidebarName:a,sidebarItems:o}=t;return(0,p.jsx)(i.e3,{className:(0,s.A)(l.G.page.docsDocPage),children:(0,p.jsx)(c.V,{name:a,items:o,children:(0,p.jsx)(ve,{children:n})})})}}}]);