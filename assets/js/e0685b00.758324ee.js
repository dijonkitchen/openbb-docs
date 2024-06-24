"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10195],{75458:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(74848),t=n(28453),o=n(94331);const i={title:"funot",description:"This page covers the 'funot' function, which displays fundamental metrics such as market cap, revenue, and TVL (Total Value Locked) for a wide array of digital asset projects, as sourced from Token Terminal.",keywords:["funot","Token Terminal","digital asset metrics","cryptocurrency analysis","cryptocurrency projects","market cap","revenue","TVL","python function","Total Value Locked","cryptocurrency metrics","fundamental metrics","SEO for docusaurus"]},c=void 0,s={id:"terminal/reference/crypto/dd/funot",title:"funot",description:"This page covers the 'funot' function, which displays fundamental metrics such as market cap, revenue, and TVL (Total Value Locked) for a wide array of digital asset projects, as sourced from Token Terminal.",source:"@site/content/terminal/reference/crypto/dd/funot.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/funot",permalink:"/terminal/reference/crypto/dd/funot",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/dd/funot.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"funot",description:"This page covers the 'funot' function, which displays fundamental metrics such as market cap, revenue, and TVL (Total Value Locked) for a wide array of digital asset projects, as sourced from Token Terminal.",keywords:["funot","Token Terminal","digital asset metrics","cryptocurrency analysis","cryptocurrency projects","market cap","revenue","TVL","python function","Total Value Locked","cryptocurrency metrics","fundamental metrics","SEO for docusaurus"]},sidebar:"tutorialSidebar",previous:{title:"fundrate",permalink:"/terminal/reference/crypto/dd/fundrate"},next:{title:"gh",permalink:"/terminal/reference/crypto/dd/gh"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const a={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"crypto/dd/funot - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(a.p,{children:"Display fundamental metric over time [Source: Token Terminal]"}),"\n",(0,r.jsx)(a.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"funot [-m {twitter_followers,gmv_annualized,market_cap,take_rate,revenue,revenue_protocol,tvl,pe,pe_circulating,ps,ps_circulating}] -p {0x,1inch,88mph,aave,abracadabra-money,alchemist,alchemix-finance,algorand,alpha-finance,arweave,autofarm,avalanche,axie-infinity,balancer,bancor,barnbridge,basket-dao,benqi,binance-smart-chain,bitcoin,cap,cardano,centrifuge,clipper,compound,convex-finance,cosmos,cryptex,curve,decentral-games,decred,dforce,dhedge,dodo,dogecoin,dydx,ellipsis-finance,elrond,enzyme-finance,erasure-protocol,ethereum,ethereum-name-service,euler,fantom,fei-protocol,filecoin,futureswap,gmx,goldfinch,harvest-finance,helium,hurricaneswap,idle-finance,index-cooperative,instadapp,integral-protocol,karura,keeperdao,keep-network,kusama,kyber,lido-finance,liquity,litecoin,livepeer,looksrare,loopring,maiar,makerdao,maple-finance,mcdex,metamask,mstable,near-protocol,nexus-mutual,nftx,notional-finance,opensea,optimism,osmosis,pancakeswap,pangolin,perpetual-protocol,piedao,pocket-network,polkadot,polygon,polymarket,pooltogether,powerpool,quickswap,rarible,rari-capital,reflexer,ren,ribbon-finance,rocket-pool,saddle-finance,set-protocol,solana,solend,spookyswap,stake-dao,stellar,sushiswap,synthetix,terra,tezos,the-graph,thorchain,tokemak,tokenlon,tornado-cash,trader-joe,uma,uniswap,unit-protocol,venus,vesper-finance,volmex,wakaswap,yearn-finance,yield-guild-games,yield-yak,zcash,zora}\n"})}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Name"}),(0,r.jsx)(a.th,{children:"Description"}),(0,r.jsx)(a.th,{children:"Default"}),(0,r.jsx)(a.th,{children:"Optional"}),(0,r.jsx)(a.th,{children:"Choices"})]})}),(0,r.jsxs)(a.tbody,{children:[(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"metric"}),(0,r.jsx)(a.td,{children:"Choose metric of interest"}),(0,r.jsx)(a.td,{}),(0,r.jsx)(a.td,{children:"True"}),(0,r.jsx)(a.td,{children:"twitter_followers, gmv_annualized, market_cap, take_rate, revenue, revenue_protocol, tvl, pe, pe_circulating, ps, ps_circulating"})]}),(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"project"}),(0,r.jsx)(a.td,{children:"Choose project of interest"}),(0,r.jsx)(a.td,{children:"None"}),(0,r.jsx)(a.td,{children:"False"}),(0,r.jsx)(a.td,{children:"0x, 1inch, 88mph, aave, abracadabra-money, alchemist, alchemix-finance, algorand, alpha-finance, arweave, autofarm, avalanche, axie-infinity, balancer, bancor, barnbridge, basket-dao, benqi, binance-smart-chain, bitcoin, cap, cardano, centrifuge, clipper, compound, convex-finance, cosmos, cryptex, curve, decentral-games, decred, dforce, dhedge, dodo, dogecoin, dydx, ellipsis-finance, elrond, enzyme-finance, erasure-protocol, ethereum, ethereum-name-service, euler, fantom, fei-protocol, filecoin, futureswap, gmx, goldfinch, harvest-finance, helium, hurricaneswap, idle-finance, index-cooperative, instadapp, integral-protocol, karura, keeperdao, keep-network, kusama, kyber, lido-finance, liquity, litecoin, livepeer, looksrare, loopring, maiar, makerdao, maple-finance, mcdex, metamask, mstable, near-protocol, nexus-mutual, nftx, notional-finance, opensea, optimism, osmosis, pancakeswap, pangolin, perpetual-protocol, piedao, pocket-network, polkadot, polygon, polymarket, pooltogether, powerpool, quickswap, rarible, rari-capital, reflexer, ren, ribbon-finance, rocket-pool, saddle-finance, set-protocol, solana, solend, spookyswap, stake-dao, stellar, sushiswap, synthetix, terra, tezos, the-graph, thorchain, tokemak, tokenlon, tornado-cash, trader-joe, uma, uniswap, unit-protocol, venus, vesper-finance, volmex, wakaswap, yearn-finance, yield-guild-games, yield-yak, zcash, zora"})]})]})]}),"\n",(0,r.jsx)(a.hr,{}),"\n",(0,r.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"2022 Aug 28, 19:08 (\ud83e\udd8b) /crypto/dd/ $ funot -m revenue -p solana\n"})}),"\n",(0,r.jsx)(a.hr,{})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94331:(e,a,n)=>{n.d(a,{A:()=>o});n(96540);var r=n(5260),t=n(74848);function o(e){let{title:a}=e;return(0,t.jsx)(r.A,{children:(0,t.jsx)("title",{children:a})})}},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>c});var r=n(96540);const t={},o=r.createContext(t);function i(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);