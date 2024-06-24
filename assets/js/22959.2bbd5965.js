(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22959],{27293:(e,t,n)=>{"use strict";n.d(t,{A:()=>E});var s=n(96540),r=n(74848);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:o.length>0?(0,r.jsx)(r.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var a=n(34164),i=n(21312),c=n(17559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:s}=e;return(0,r.jsx)("div",{className:(0,a.A)(c.G.common.admonition,c.G.common.admonitionType(t),l.admonition,n),children:s})}function u(e){let{icon:t,title:n}=e;return(0,r.jsxs)("div",{className:l.admonitionHeading,children:[(0,r.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,r.jsx)("div",{className:l.admonitionContent,children:t}):null}function h(e){const{type:t,icon:n,title:s,children:o,className:a}=e;return(0,r.jsxs)(d,{type:t,className:a,children:[s||n?(0,r.jsx)(u,{title:s,icon:n}):null,(0,r.jsx)(m,{children:o})]})}function f(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,r.jsx)(f,{}),title:(0,r.jsx)(i.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,r.jsx)(h,{...p,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function v(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,r.jsx)(v,{}),title:(0,r.jsx)(i.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,r.jsx)(h,{...g,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function b(e){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const A={icon:(0,r.jsx)(b,{}),title:(0,r.jsx)(i.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function y(e){return(0,r.jsx)(h,{...A,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function w(e){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const N={icon:(0,r.jsx)(w,{}),title:(0,r.jsx)(i.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const B={icon:(0,r.jsx)(C,{}),title:(0,r.jsx)(i.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const k={icon:(0,r.jsx)(w,{}),title:(0,r.jsx)(i.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const L={...{note:x,tip:j,info:y,warning:function(e){return(0,r.jsx)(h,{...N,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,r.jsx)(h,{...B,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,r.jsx)(x,{title:"secondary",...e}),important:e=>(0,r.jsx)(y,{title:"important",...e}),success:e=>(0,r.jsx)(j,{title:"success",...e}),caution:function(e){return(0,r.jsx)(h,{...k,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function E(e){const t=o(e),n=(s=t.type,L[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),L.info));var s;return(0,r.jsx)(n,{...t})}},97795:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});n(96540);var s=n(34164),r=n(26058),o=n(17559),a=n(34291);const i={codeBlockContainer:"codeBlockContainer_Ckt0"};var c=n(74848);function l(e){let{as:t,...n}=e;const l=(0,r.A)(),d=(0,a.M$)(l);return(0,c.jsx)(t,{...n,style:d,className:(0,s.A)(n.className,i.codeBlockContainer,o.G.common.codeBlock)})}},52830:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});var s=n(96540),r=n(34164);var o=n(21312),a=n(74848);function i(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function c(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const l={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function d(e){let{code:t,className:n}=e;const[d,u]=(0,s.useState)(!1),m=(0,s.useRef)(void 0),h=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),r=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const o=document.getSelection(),a=o.rangeCount>0&&o.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}s.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(t),u(!0),m.current=window.setTimeout((()=>{u(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(m.current)),[]),(0,a.jsx)("button",{type:"button","aria-label":d?(0,o.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,o.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,o.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.A)("clean-btn",n,l.copyButton,d&&l.copyButtonCopied),onClick:h,children:(0,a.jsxs)("span",{className:l.copyButtonIcons,"aria-hidden":"true",children:[(0,a.jsx)(i,{className:l.copyButtonIcon}),(0,a.jsx)(c,{className:l.copyButtonSuccessIcon})]})})}},14718:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});n(96540);var s=n(34164);const r={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};var o=n(74848);function a(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:i,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=i({line:t,className:(0,s.A)(n,a&&r.codeLine)}),d=t.map(((e,t)=>(0,o.jsx)("span",{...c({token:e})},t)));return(0,o.jsxs)("span",{...l,children:[a?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:r.codeLineNumber}),(0,o.jsx)("span",{className:r.codeLineContent,children:d})]}):d,(0,o.jsx)("br",{})]})}},97044:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(96540);var s=n(34164),r=n(21312),o=n(74848);function a(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const i={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function c(e){let{className:t,onClick:n,isEnabled:c}=e;const l=(0,r.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,o.jsx)("button",{type:"button",onClick:n,className:(0,s.A)("clean-btn",t,c&&i.wordWrapButtonEnabled),"aria-label":l,title:l,children:(0,o.jsx)(a,{className:i.wordWrapButtonIcon,"aria-hidden":"true"})})}},44642:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});n(96540);var s=n(34164),r=n(98257),o=n(21312),a=n(17559),i=n(44586);function c(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,i.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,i.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}var l=n(74848);function d(e){let{lastUpdatedAt:t}=e;const n=new Date(t),s=c({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,l.jsx)(o.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function u(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(o.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function m(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,l.jsxs)("span",{className:a.G.common.lastUpdated,children:[(0,l.jsx)(o.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,l.jsx)(d,{lastUpdatedAt:t}):"",byUser:n?(0,l.jsx)(u,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const h={lastUpdated:"lastUpdated_JAkA"};function f(e){let{className:t,editUrl:n,lastUpdatedAt:o,lastUpdatedBy:a}=e;return(0,l.jsxs)("div",{className:(0,s.A)("row",t),children:[(0,l.jsx)("div",{className:"col",children:n&&(0,l.jsx)(r.A,{editUrl:n})}),(0,l.jsx)("div",{className:(0,s.A)("col",h.lastUpdated),children:(o||a)&&(0,l.jsx)(m,{lastUpdatedAt:o,lastUpdatedBy:a})})]})}},61943:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});n(96540);var s=n(21312),r=n(17559),o=n(28774),a=n(34164);const i={iconEdit:"iconEdit_Z9Sw"};var c=n(74848);function l(e){let{className:t,...n}=e;return(0,c.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.A)(i.iconEdit,t),"aria-hidden":"true",...n,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,c.jsxs)(o.A,{to:t,className:r.G.common.editThisPage,children:[(0,c.jsx)(l,{}),(0,c.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},2441:(e,t,n)=>{"use strict";n.d(t,{A:()=>w});var s=n(96540),r=n(28453),o=n(5260),a=n(92303),i=n(45822),c=n(10417),l=n(74848);function d(e){let{children:t,...n}=e;const r=(0,a.A)(),o=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),d="string"==typeof o?c.A:i.A;return(0,l.jsx)(d,{...n,children:o},String(r))}function u(e){return(0,l.jsx)("code",{...e})}var m=n(28774);var h=n(61385),f=n(51107);function p(e){return(0,l.jsx)(f.A,{...e})}var x=n(34164);const v={containsTaskList:"containsTaskList_mC6p"};function g(e){if(void 0!==e)return(0,x.A)(e,e?.includes("contains-task-list")&&v.containsTaskList)}var j=n(63427);const b={img:"img_ev3q"};var A=n(27293);const y={Head:o.A,details:h.A,Details:h.A,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,l.jsx)(u,{...e}):(0,l.jsx)(d,{...e})},a:function(e){return(0,l.jsx)(m.A,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:g(e.className)})},li:function(e){return(0,j.A)().collectAnchor(e.id),(0,l.jsx)("li",{...e})},img:function(e){return(0,l.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,x.A)(t,b.img))});var t},h1:e=>(0,l.jsx)(p,{as:"h1",...e}),h2:e=>(0,l.jsx)(p,{as:"h2",...e}),h3:e=>(0,l.jsx)(p,{as:"h3",...e}),h4:e=>(0,l.jsx)(p,{as:"h4",...e}),h5:e=>(0,l.jsx)(p,{as:"h5",...e}),h6:e=>(0,l.jsx)(p,{as:"h6",...e}),admonition:A.A,mermaid:()=>null};function w(e){let{children:t}=e;return(0,l.jsx)(r.x,{components:y,children:t})}},50996:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});n(96540);var s=n(34164),r=n(21312),o=n(5260),a=n(74848);function i(){return(0,a.jsx)(r.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,a.jsx)(r.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,a.jsx)(o.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(17559),u=n(27293);function m(e){let{className:t}=e;return(0,a.jsx)(u.A,{type:"caution",title:(0,a.jsx)(i,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,a.jsx)(c,{})})}function h(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{}),(0,a.jsx)(m,{...e})]})}},83551:(e,t,n)=>{"use strict";n.d(t,{B:()=>m});var s=n(96540),r=n(34164),o=n(63427),a=n(92303),i=n(41422);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var l=n(74848);function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function u(e,t){return!!e&&(e===t||u(e.parentElement,t))}function m(e){let{summary:t,children:n,...m}=e;(0,o.A)().collectAnchor(m.id);const h=(0,a.A)(),f=(0,s.useRef)(null),{collapsed:p,setCollapsed:x}=(0,i.u)({initialState:!m.open}),[v,g]=(0,s.useState)(m.open),j=s.isValidElement(t)?t:(0,l.jsx)("summary",{children:t??"Details"});return(0,l.jsxs)("details",{...m,ref:f,open:v,"data-collapsed":p,className:(0,r.A)(c.details,h&&c.isBrowser,m.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&u(t,f.current)&&(e.preventDefault(),p?(x(!1),g(!0)):x(!0))},children:[j,(0,l.jsx)(i.N,{lazy:!1,collapsed:p,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{x(e),g(!e)},children:(0,l.jsx)("div",{className:c.collapsibleContent,children:n})})]})}},96591:(e,t,n)=>{"use strict";n.d(t,{f:()=>i});var s=n(96540),r=n(89532);const o={attributes:!0,characterData:!0,childList:!0,subtree:!0};function a(e,t){const[n,a]=(0,s.useState)(),i=(0,s.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,s.useEffect)((()=>{i()}),[i]),function(e,t,n){void 0===n&&(n=o);const a=(0,r._q)(t),i=(0,r.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,i),()=>t.disconnect()}),[e,a,i])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function i(){const[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!1),o=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return a(o,c),(0,s.useEffect)((()=>{c()}),[e,c]),(0,s.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:i}}},26058:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var s=n(95293),r=n(6342);function o(){const{prism:e}=(0,r.p)(),{colorMode:t}=(0,s.G)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}},97985:(e,t,n)=>{"use strict";n.d(t,{i:()=>c});var s=n(96540),r=n(6342);function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function a(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>o(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function i(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){const t=(0,s.useRef)(void 0),n=i();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let r=t;r<=n;r+=1)s.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),l=a(c,{anchorTopOffset:n.current}),d=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}},34291:(e,t,n)=>{"use strict";n.d(t,{Li:()=>f,M$:()=>p,Op:()=>h,_u:()=>m,wt:()=>u});var s=n(18426),r=n.n(s);const o=/title=(?<quote>["'])(?<title>.*?)\1/,a=/\{(?<range>[\d,-]+)\}/,i={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},c={...i,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},l=Object.keys(i);function d(e,t){const n=e.map((e=>{const{start:n,end:s}=c[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function u(e){return e?.match(o)?.groups.title??""}function m(e){return Boolean(e?.includes("showLineNumbers"))}function h(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function f(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:i}=t;if(i&&a.test(i)){const e=i.match(a).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return d(["js","jsBlock"],t);case"jsx":case"tsx":return d(["js","jsBlock","jsx"],t);case"html":return d(["js","jsBlock","html"],t);case"python":case"py":case"bash":return d(["bash"],t);case"markdown":case"md":return d(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return d(["tex"],t);case"lua":case"haskell":case"sql":return d(["lua"],t);case"wasm":return d(["wasm"],t);case"vb":case"vba":case"visual-basic":return d(["vb","rem"],t);case"vbnet":return d(["vbnet","rem"],t);case"batch":return d(["rem"],t);case"basic":return d(["rem","f90"],t);case"fsharp":return d(["js","ml"],t);case"ocaml":case"sml":return d(["ml"],t);case"fortran":return d(["f90"],t);case"cobol":return d(["cobol"],t);default:return d(l,t)}}(s,o),u=n.split("\n"),m=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),h=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),f=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let r=0;r<u.length;){const e=u[r].match(c);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));h[t]?m[h[t]].range+=`${r},`:f[t]?m[f[t]].start=r:p[t]&&(m[p[t]].range+=`${m[p[t]].start}-${r-1},`),u.splice(r,1)}n=u.join("\n");const x={};return Object.entries(m).forEach((e=>{let[t,{range:n}]=e;r()(n).forEach((e=>{x[e]??=[],x[e].push(t)}))})),{lineClassNames:x,code:n}}function p(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,r]=e;const o=t[s];o&&"string"==typeof r&&(n[o]=r)})),n}},37243:(e,t,n)=>{"use strict";n.d(t,{h:()=>a});var s=n(96540);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):s.push(r)})),s}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>o({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}},18426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,r,o]=t;if(s&&o){s=parseInt(s),o=parseInt(o);const e=s<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=s;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},28453:(e,t,n)=>{"use strict";n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);