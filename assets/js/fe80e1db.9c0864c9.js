"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73756],{7807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(74848),r=n(28453),i=n(94331);const a={title:"trending",description:"The 'Trending' page provides the latest news articles sourced from Seeking Alpha. Users can access articles by ID, limit the number of articles displayed, and filter by start date.",keywords:["Trending","News Articles","Seeking Alpha","Article ID","Article Limit","Start Date"]},c=void 0,l={id:"terminal/reference/stocks/disc/trending",title:"trending",description:"The 'Trending' page provides the latest news articles sourced from Seeking Alpha. Users can access articles by ID, limit the number of articles displayed, and filter by start date.",source:"@site/content/terminal/reference/stocks/disc/trending.md",sourceDirName:"terminal/reference/stocks/disc",slug:"/terminal/reference/stocks/disc/trending",permalink:"/terminal/reference/stocks/disc/trending",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/disc/trending.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"trending",description:"The 'Trending' page provides the latest news articles sourced from Seeking Alpha. Users can access articles by ID, limit the number of articles displayed, and filter by start date.",keywords:["Trending","News Articles","Seeking Alpha","Article ID","Article Limit","Start Date"]},sidebar:"tutorialSidebar",previous:{title:"rtat",permalink:"/terminal/reference/stocks/disc/rtat"},next:{title:"ugs",permalink:"/terminal/reference/stocks/disc/ugs"}},o={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"stocks/disc/trending - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Trending news articles. [Source: Seeking Alpha]"}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"trending [-i N_ID] [-l LIMIT] [-d S_DATE]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"n_id"}),(0,s.jsx)(t.td,{children:"article ID"}),(0,s.jsx)(t.td,{children:"-1"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"limit of articles being printed"}),(0,s.jsx)(t.td,{children:"5"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"s_date"}),(0,s.jsx)(t.td,{children:"starting date of articles"}),(0,s.jsx)(t.td,{children:"2022-11-25"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 04:13 (\ud83e\udd8b) /stocks/disc/ $ trending -i 10\n2010-03-21 08:33:21   Deutsche Bank's Marc Greenberg can't justify the BUD deal. But he says Bud Light Lime is the...\nhttps://seekingalpha.com/news/10\n\n Deutsche Bank's Marc Greenberg can't justify the BUD deal. But he says Bud Light Lime is the beer to beat.\n2022 Feb 16, 04:13 (\ud83e\udd8b) /stocks/disc/ $ trending -l 10\n2022-02-16 02:00:18 - 3800145 - Shopify Q4 Earnings Preview: What to Expect\nhttps://seekingalpha.com/news/3800145-shopify-q4-earnings-preview-what-to-expect\n\n2022-02-15 16:20:21 - 3800395 - Upstart stock soars after Q4 earnings beat, strong guidance, stock buyback\nhttps://seekingalpha.com/news/3800395-upstart-stock-soars-after-q4-earnings-beat-strong-guidance-stock-buyback\n\n2022-02-15 11:31:14 - 3800203 - Greenview Capital takes stakes in Alibaba, Amazon\nhttps://seekingalpha.com/news/3800203-greenview-capital-takes-stakes-in-alibaba-amazon\n\n2022-02-15 16:38:11 - 3800438 - Roblox shares plunge as metaverse company misses Wall Street's expectations\nhttps://seekingalpha.com/news/3800438-roblox-shares-plunge-as-metaverse-company-misses-wall-streets-expectations\n\n2022-02-15 12:39:57 - 3800257 - Sunshine Biopharma announces pricing of $8M public offering, uplisting\nhttps://seekingalpha.com/news/3800257-sunshine-biopharma-announces-pricing-of-8m-public-offering-uplisting\n\n2022-02-15 14:06:05 - 3800296 - Cathie Wood\u2019s ARKK a bubble? Let\u2019s look at history\nhttps://seekingalpha.com/news/3800296-is-cathie-woods-arkk-a-bubble-lets-look-at-history\n\n2022-02-16 01:38:34 - 3800525 - Flex LNG Non-GAAP EPS of $1.18, revenue of $114.6M beats by $4.38M\nhttps://seekingalpha.com/news/3800525-flex-lng-non-gaap-eps-of-118-revenue-of-1146m-beats-by-438m\n\n2022-02-15 19:04:21 - 3800509 - ViacomCBS earnings call: A flood of content feeding transformation to Paramount\nhttps://seekingalpha.com/news/3800509-viacomcbs-earnings-call-a-flood-of-content-feeding-transformation-to-paramount\n\n2022-02-16 02:09:27 - 3800529 - Golden Ocean raises dividend by ~6% to $0.90/share\nhttps://seekingalpha.com/news/3800529-golden-ocean-raises-dividend-by-6-to-090share\n\n2022-02-15 17:35:20 - 3800169 - Matterport Q4 2021 Earnings Preview\nhttps://seekingalpha.com/news/3800169-matterport-q4-2021-earnings-preview\n"})}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(5260),r=n(74848);function i(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);