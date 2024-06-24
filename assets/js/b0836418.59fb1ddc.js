"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15947],{26731:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=s(74848),n=s(28453),o=s(94331);const i={title:"spacc",description:"Spacc- a tool that presents a list of other users' SPACs announcements from the 'SPACs' subreddit. Options include setting the limit of posts retrieved and the sorting model- popular posts or recent posts.",keywords:["spacc","SPACs","subreddit","tool","posts","limit","b_popular","score","time","Reddit","stocks"]},c=void 0,a={id:"terminal/reference/stocks/ba/spacc",title:"spacc",description:"Spacc- a tool that presents a list of other users' SPACs announcements from the 'SPACs' subreddit. Options include setting the limit of posts retrieved and the sorting model- popular posts or recent posts.",source:"@site/content/terminal/reference/stocks/ba/spacc.md",sourceDirName:"terminal/reference/stocks/ba",slug:"/terminal/reference/stocks/ba/spacc",permalink:"/terminal/reference/stocks/ba/spacc",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ba/spacc.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"spacc",description:"Spacc- a tool that presents a list of other users' SPACs announcements from the 'SPACs' subreddit. Options include setting the limit of posts retrieved and the sorting model- popular posts or recent posts.",keywords:["spacc","SPACs","subreddit","tool","posts","limit","b_popular","score","time","Reddit","stocks"]},sidebar:"tutorialSidebar",previous:{title:"spac",permalink:"/terminal/reference/stocks/ba/spac"},next:{title:"stalker",permalink:"/terminal/reference/stocks/ba/stalker"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"stocks/ba/spacc - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Print other users SPACs announcement under subreddit 'SPACs'. [Source: Reddit]"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"spacc [-l N_LIMIT] [-p]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_limit"}),(0,r.jsx)(t.td,{children:"limit of posts with SPACs retrieved"}),(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"b_popular"}),(0,r.jsx)(t.td,{children:"popular flag, if true the posts retrieved are based on score rather than time"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 10:43 (\ud83e\udd8b) /stocks/ba/ $ spacc\n2022-02-16 11:35:01 - I scraped r/SPACs for the top ticker mentions in the last 24H. Here are the results (Wednesday February 16, 2022)\nhttps://old.reddit.com/r/SPACs/comments/sttsnl/i_scraped_rspacs_for_the_top_ticker_mentions_in/\n\n2022-02-16 09:26:19 - PPGH Gogoro confirms that it is expected to list overseas in the first quarter of this year\nhttps://old.reddit.com/r/SPACs/comments/strs9m/ppgh_gogoro_confirms_that_it_is_expected_to_list/\n\n2022-02-16 08:00:16 - Announcements x Daily Discussion for Wednesday, February 16, 2022\nhttps://old.reddit.com/r/SPACs/comments/stqhci/announcements_x_daily_discussion_for_wednesday/\n\n2022-02-15 15:10:40 - Did IBKR resolve my SPAC redemptions wrongly?\nhttps://old.reddit.com/r/SPACs/comments/st52xb/did_ibkr_resolve_my_spac_redemptions_wrongly/\n\nThe following stock tickers have been mentioned more than once across the previous SPACs:\n8 CCAC, 6 IBKR, 3 CLBT, 3 SLDP, 2 VIAC, 2 CND\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>o});s(96540);var r=s(5260),n=s(74848);function o(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var r=s(96540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);