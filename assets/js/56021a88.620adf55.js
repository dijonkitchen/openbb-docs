"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14614],{35085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var o=n(74848),r=n(28453),s=n(94331);const c={title:"collections",description:"Understand how to use Python code for tracking NFT collections. The guide includes scripts and examples showcasing how to display the floor price and sales over time for top collections including CryptoPunks, Bored Ape Yacht Club, and others.",keywords:["NFT Collections","floor price","sales over time","top collections","CryptoPunks","Bored Ape Yacht Club","Mutant Ape Yacht Club","Otherdeed for Otherside","Moonbirds","ethereum","python code for NFTs"]},l=void 0,i={id:"terminal/reference/crypto/nft/collections",title:"collections",description:"Understand how to use Python code for tracking NFT collections. The guide includes scripts and examples showcasing how to display the floor price and sales over time for top collections including CryptoPunks, Bored Ape Yacht Club, and others.",source:"@site/content/terminal/reference/crypto/nft/collections.md",sourceDirName:"terminal/reference/crypto/nft",slug:"/terminal/reference/crypto/nft/collections",permalink:"/terminal/reference/crypto/nft/collections",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/nft/collections.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"collections",description:"Understand how to use Python code for tracking NFT collections. The guide includes scripts and examples showcasing how to display the floor price and sales over time for top collections including CryptoPunks, Bored Ape Yacht Club, and others.",keywords:["NFT Collections","floor price","sales over time","top collections","CryptoPunks","Bored Ape Yacht Club","Mutant Ape Yacht Club","Otherdeed for Otherside","Moonbirds","ethereum","python code for NFTs"]},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/terminal/reference/crypto/load"},next:{title:"fp",permalink:"/terminal/reference/crypto/nft/fp"}},d={},a=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{title:"crypto/nft/collections - Reference | OpenBB Terminal Docs"}),"\n",(0,o.jsxs)(t.p,{children:["NFT Collections [Source: ",(0,o.jsx)(t.a,{href:"https://nftpricefloor.com/",children:"https://nftpricefloor.com/"}),"]"]}),"\n",(0,o.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"collections [--fp] [--sales]\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Default"}),(0,o.jsx)(t.th,{children:"Optional"}),(0,o.jsx)(t.th,{children:"Choices"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"fp"}),(0,o.jsx)(t.td,{children:"Flag to display floor price over time for top collections"}),(0,o.jsx)(t.td,{children:"False"}),(0,o.jsx)(t.td,{children:"True"}),(0,o.jsx)(t.td,{children:"None"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"sales"}),(0,o.jsx)(t.td,{children:"Flag to display sales over time for top collections"}),(0,o.jsx)(t.td,{children:"False"}),(0,o.jsx)(t.td,{children:"True"}),(0,o.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"NFT Collections\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 slug                  \u2503 name                    \u2503 floorPriceETH \u2503 totalSupply \u2503 countOnSale \u2503 blockchain \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 cryptopunks           \u2502 CryptoPunks             \u2502 67.95         \u2502 10000       \u2502 1145        \u2502 ethereum   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 bored-ape-yacht-club  \u2502 Bored Ape Yacht Club    \u2502 65.68         \u2502 10000       \u2502 775         \u2502 ethereum   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 mutant-ape-yacht-club \u2502 Mutant Ape Yacht Club   \u2502 11.99         \u2502 19423       \u2502 1075        \u2502 ethereum   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 otherdeed             \u2502 Otherdeed for Otherside \u2502 1.57          \u2502 100000      \u2502 3932        \u2502 ethereum   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 proof-moonbirds       \u2502 Moonbirds               \u2502 13.25         \u2502 10000       \u2502 145         \u2502 ethereum   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://user-images.githubusercontent.com/40023817/186201697-ff15dd9c-3b09-4c3a-b498-e98a876f1338.png",alt:"collections fp command"})}),"\n",(0,o.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var o=n(5260),r=n(74848);function s(e){let{title:t}=e;return(0,r.jsx)(o.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var o=n(96540);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);