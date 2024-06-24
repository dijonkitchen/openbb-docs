"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7189],{64107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var i=n(74848),r=n(28453),o=n(94331);const c={title:"load",description:"This page provides instructions on how to load and analyze cryptocurrency data from various sources with custom intervals using Python. Ideal for Bitcoin, Ethereum, and other cryptocurrency investors and analysts.",keywords:["cryptocurrency analysis","crypto trading","Yahoo Finance","ccxt","cg","crypto exchange","Python cryptocurrency","coin symbol","Bitcoin","Ethereum","Binance","crypto intervals","USD trading"]},a=void 0,s={id:"terminal/reference/crypto/load",title:"load",description:"This page provides instructions on how to load and analyze cryptocurrency data from various sources with custom intervals using Python. Ideal for Bitcoin, Ethereum, and other cryptocurrency investors and analysts.",source:"@site/content/terminal/reference/crypto/load.md",sourceDirName:"terminal/reference/crypto",slug:"/terminal/reference/crypto/load",permalink:"/docs/terminal/reference/crypto/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/load.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,frontMatter:{title:"load",description:"This page provides instructions on how to load and analyze cryptocurrency data from various sources with custom intervals using Python. Ideal for Bitcoin, Ethereum, and other cryptocurrency investors and analysts.",keywords:["cryptocurrency analysis","crypto trading","Yahoo Finance","ccxt","cg","crypto exchange","Python cryptocurrency","coin symbol","Bitcoin","Ethereum","Binance","crypto intervals","USD trading"]},sidebar:"tutorialSidebar",previous:{title:"headlines",permalink:"/docs/terminal/reference/crypto/headlines"},next:{title:"collections",permalink:"/docs/terminal/reference/crypto/nft/collections"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{title:"crypto /load - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(t.p,{children:"Load crypto currency to perform analysis on. Yahoo Finance is used as default source. Other sources can be used such as 'ccxt' or 'cg' with --source. If you select 'ccxt', you can then select any exchange with --exchange. You can also select a specific interval with --interval."}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"load -c COIN [-s START] [--exchange {aax,ascendex,bequant,bibox,bigone,binance,binancecoinm,binanceus,binanceusdm,bit2c,bitbank,bitbay,bitcoincom,bitfinex,bitfinex2,bitflyer,bitforex,bitget,bithumb,bitmart,bitmex,bitopro,bitpanda,bitrue,bitso,bitstamp,bitstamp1,bittrex,bitvavo,bkex,bl3p,btcalpha,btcbox,btcex,btcmarkets,btctradeua,btcturk,buda,bw,bybit,bytetrade,cex,coinbaseprime,coinbasepro,coincheck,coinex,coinfalcon,coinmate,coinone,coinspot,crex24,cryptocom,currencycom,delta,deribit,digifinex,eqonex,exmo,flowbtc,fmfwio,ftx,ftxus,gate,gateio,gemini,hitbtc,hitbtc3,hollaex,huobi,huobijp,huobipro,idex,independentreserve,indodax,itbit,kraken,kucoin,kucoinfutures,kuna,latoken,lbank,lbank2,liquid,luno,lykke,mercado,mexc,mexc3,ndax,novadax,oceanex,okcoin,okex,okex5,okx,paymium,phemex,poloniex,probit,qtrade,ripio,stex,therock,tidebit,tidex,timex,tokocrypto,upbit,wavesexchange,whitebit,woo,yobit,zaif,zb,zipmex,zonda}] [-e END] [-i {1,5,15,30,60,240,1440,10080,43200}] [--vs VS]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"coin"}),(0,i.jsx)(t.td,{children:"Coin to get. Must be coin symbol (e.g., btc, eth)"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"start"}),(0,i.jsx)(t.td,{children:"The starting date (format YYYY-MM-DD) of the crypto"}),(0,i.jsx)(t.td,{children:"2019-11-21"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"exchange"}),(0,i.jsx)(t.td,{children:"Exchange to search"}),(0,i.jsx)(t.td,{children:"binance"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"aax, ascendex, bequant, bibox, bigone, binance, binancecoinm, binanceus, binanceusdm, bit2c, bitbank, bitbay, bitcoincom, bitfinex, bitfinex2, bitflyer, bitforex, bitget, bithumb, bitmart, bitmex, bitopro, bitpanda, bitrue, bitso, bitstamp, bitstamp1, bittrex, bitvavo, bkex, bl3p, btcalpha, btcbox, btcex, btcmarkets, btctradeua, btcturk, buda, bw, bybit, bytetrade, cex, coinbaseprime, coinbasepro, coincheck, coinex, coinfalcon, coinmate, coinone, coinspot, crex24, cryptocom, currencycom, delta, deribit, digifinex, eqonex, exmo, flowbtc, fmfwio, ftx, ftxus, gate, gateio, gemini, hitbtc, hitbtc3, hollaex, huobi, huobijp, huobipro, idex, independentreserve, indodax, itbit, kraken, kucoin, kucoinfutures, kuna, latoken, lbank, lbank2, liquid, luno, lykke, mercado, mexc, mexc3, ndax, novadax, oceanex, okcoin, okex, okex5, okx, paymium, phemex, poloniex, probit, qtrade, ripio, stex, therock, tidebit, tidex, timex, tokocrypto, upbit, wavesexchange, whitebit, woo, yobit, zaif, zb, zipmex, zonda"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"end"}),(0,i.jsx)(t.td,{children:"The ending date (format YYYY-MM-DD) of the crypto"}),(0,i.jsx)(t.td,{children:"2022-11-25"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"interval"}),(0,i.jsx)(t.td,{children:"The interval of the crypto"}),(0,i.jsx)(t.td,{children:"1440"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"1, 5, 15, 30, 60, 240, 1440, 10080, 43200"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"vs"}),(0,i.jsx)(t.td,{children:"Quote currency (what to view coin vs). e.g., usdc, usdt, ... if source is ccxt, usd, eur, ... otherwise"}),(0,i.jsx)(t.td,{children:"usdt"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var i=n(5260),r=n(74848);function o(e){let{title:t}=e;return(0,r.jsx)(i.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);