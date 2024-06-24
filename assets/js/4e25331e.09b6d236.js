"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2097],{74598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var r=n(74848),s=n(28453),i=n(94331);const d={title:"news",description:"This page provides usage details for a news aggregation code from CryptoPanic, involving handy functions such as data filtering, sorting, region based displaying and more. Learn how to get the crypto news you need quickly and efficiently.",keywords:["cryptopanic","crypto news","news aggregation","data filtering","region based","sorted data","bullish news","bearish news","crypto media","cryptocurrency"]},a=void 0,o={id:"terminal/reference/crypto/ov/news",title:"news",description:"This page provides usage details for a news aggregation code from CryptoPanic, involving handy functions such as data filtering, sorting, region based displaying and more. Learn how to get the crypto news you need quickly and efficiently.",source:"@site/content/terminal/reference/crypto/ov/news.md",sourceDirName:"terminal/reference/crypto/ov",slug:"/terminal/reference/crypto/ov/news",permalink:"/terminal/reference/crypto/ov/news",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/ov/news.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"news",description:"This page provides usage details for a news aggregation code from CryptoPanic, involving handy functions such as data filtering, sorting, region based displaying and more. Learn how to get the crypto news you need quickly and efficiently.",keywords:["cryptopanic","crypto news","news aggregation","data filtering","region based","sorted data","bullish news","bearish news","crypto media","cryptocurrency"]},sidebar:"tutorialSidebar",previous:{title:"markets",permalink:"/terminal/reference/crypto/ov/markets"},next:{title:"pairs",permalink:"/terminal/reference/crypto/ov/pairs"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"crypto/ov/news - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsxs)(t.p,{children:["Display recent news from CryptoPanic aggregator platform. [Source: ",(0,r.jsx)(t.a,{href:"https://cryptopanic.com/",children:"https://cryptopanic.com/"}),"]"]}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"news [-l LIMIT] [-k {news,media}] [--filter {rising,hot,bullish,bearish,important,saved,lol}] [-r {en,de,es,fr,nl,it,pt,ru}] [-s {published_at,domain,title,negative_votes,positive_votes}] [--reverse] [-u]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"display N number records"}),(0,r.jsx)(t.td,{children:"20"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"kind"}),(0,r.jsx)(t.td,{children:"Filter by category of news. Available values: news or media."}),(0,r.jsx)(t.td,{children:"news"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"news, media"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"filter"}),(0,r.jsx)(t.td,{children:"Filter by kind of news. One from list: rising"}),(0,r.jsx)(t.td,{children:"hot"}),(0,r.jsx)(t.td,{children:"bullish"}),(0,r.jsx)(t.td,{children:"bearish"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"region"}),(0,r.jsx)(t.td,{children:"Filter news by regions. Available regions are: en (English), de (Deutsch), nl (Dutch), es (Espa\xf1ol), fr (Fran\xe7ais), it (Italiano), pt (Portugu\xeas), ru (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)"}),(0,r.jsx)(t.td,{children:"en"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"en, de, es, fr, nl, it, pt, ru"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sortby"}),(0,r.jsx)(t.td,{children:"Sort by given column. Default: published_at"}),(0,r.jsx)(t.td,{children:"published_at"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"published_at, domain, title, negative_votes, positive_votes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"reverse"}),(0,r.jsx)(t.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"urls"}),(0,r.jsx)(t.td,{children:"Flag to show urls column."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);