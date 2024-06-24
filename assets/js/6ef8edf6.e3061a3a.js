"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75481],{17401:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>A,contentTitle:()=>c,default:()=>E,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(74848),s=t(28453),a=t(94331);const i={title:"baas",description:"This documentation is related to the 'baas' function which displays the average bid, ask prices, and spread for a chosen crypto pair over a specified time period. The function can work with various cryptocurrencies and ERC 20 tokens.",keywords:["baas","crypto pair","average bid","average ask prices","spread","time period","ERC20 token","crypto currency","ETH","USD","BTC","USDT"]},c=void 0,o={id:"terminal/reference/crypto/onchain/baas",title:"baas",description:"This documentation is related to the 'baas' function which displays the average bid, ask prices, and spread for a chosen crypto pair over a specified time period. The function can work with various cryptocurrencies and ERC 20 tokens.",source:"@site/content/terminal/reference/crypto/onchain/baas.md",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/baas",permalink:"/openbb-docs/terminal/reference/crypto/onchain/baas",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/onchain/baas.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"baas",description:"This documentation is related to the 'baas' function which displays the average bid, ask prices, and spread for a chosen crypto pair over a specified time period. The function can work with various cryptocurrencies and ERC 20 tokens.",keywords:["baas","crypto pair","average bid","average ask prices","spread","time period","ERC20 token","crypto currency","ETH","USD","BTC","USDT"]},sidebar:"tutorialSidebar",previous:{title:"address",permalink:"/openbb-docs/terminal/reference/crypto/onchain/address"},next:{title:"balance",permalink:"/openbb-docs/terminal/reference/crypto/onchain/balance"}},A={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function T(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"crypto/onchain/baas - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsxs)(r.p,{children:["Display average bid, ask prices, spread for given crypto pair for chosen time period [Source: ",(0,n.jsx)(r.a,{href:"https://graphql.bitquery.io/",children:"https://graphql.bitquery.io/"}),"]"]}),"\n",(0,n.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"baas [-c COIN] [-vs {ETH,USD,BTC,USDT}] [-l LIMIT] [-s {date,baseCurrency,quoteCurrency,dailySpread,averageBidPrice,averageAskPrice}] [-r]\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"}),(0,n.jsx)(r.th,{children:"Choices"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"coin"}),(0,n.jsx)(r.td,{children:"ERC20 token symbol or address."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsxs)(r.td,{children:["WETH, USDC, USDT, DAI, WBTC, FEI, sUSD, SHIB, SUSHI, ETH, OHM, UNI, LINK, AAVE, renBTC, TUSD, -, sETH, YFI, imBTC, ALCX, TRIBE, HEX, BNT, SPELL, sBTC, BUSD, UST, CVX, KOKO, FRAX, ETH2x-FLI, LUSD, ELON, LEASH, RAI, MC, EDEN, DYDX, 1INCH, EURS, RBN, MKR, ENS, BIT, ILV, CRV, DELTA, SNX, TOKE, MATIC, SQUID, SYN, SAITAMA, COMP, AGLD, FODL, EURT, BONE, DOG, SAND, AMPL, FNK, PAX, BAC, BDP, DPI, MIC, FTM, TRU, BADGER, BAL, HBTC, AXS, FXS, LRC, MOCHI, WISE, UFO, eRSDL, ESD, sLINK, RGT, STARL, DYP, LOBI, DOE, PERP, TKING, PEOPLE, AKITA, BOND, WDOGE, VSP, MM, ICE, LDO, RARE, CENNZ, xSUSHI, BDI, GM, CARDS, DSD, FARM, MIR, KISHU, AMP, RPL, FLOKI, DIGG, MIS, NCR, YGG, cvxCRV, KINE, CEL, ENJ, LON, MANA, GNO, NU, DRC, BGLD, SHKOOBY, NFD, ALPHA, BAS, PICKLE, RLY, ibEUR, NFTX, FEG, GALA, WOO, welp, SCAMMY, generalize fix for rebass tokens, RAD, Ian Laphan fan token, KP3R, SUPER, ROOK, FLX, REN, MIM, PSP, POLS, agEUR, BANK, NEXO, CORE, sETH2, FLOOR, RUNE, VISR, MCB, UNQT, IMX, BMI, LYXe, STRONG, REB, HGT, UMA, KUMA, BOTTO, WTON, BAND, DAO, AUDIO, XOR, SOUL, bALPHA, TORN, GRO, LEND, ERN, XXi, GYEN, DEXTF, INST, CREAM, VEMP, GRPFT, aKLIMA, ZCX, ibBTC, wNXM, USE, FTX Token, VADER, PLUG, PILOT, stETH, WOOL, KEEP, eXRD, ANY, TUBE2, VERSE, 10SET, DODO, STMX, STAKE, FOX, WAXE, GRT, EVN, RACA, COLLAR, KBTC, XSGD, yveCRV-DAO, aEth, LUNA, PUNK, DFX, LQTY, DERC, SHEESHA, SNGJ, ORB, LCX, BRAIN, RC_WETH_750_DAI_2021_3_31, OUSD, CHAIN, FX, SRM, SAK3, LIMIT, QNT, eMax, mIAU, CRO, USDN, HOPR, XMT, wCRES, 3Crv, EPAY, MASK, UFODOGE, ",(0,n.jsx)(r.span,{className:"katex-error",title:"ParseError: KaTeX parse error: Double subscript at position 67: \u20265000_DAI_2021_3_\u033231, OCEAN, DEUS\u2026",style:{color:"#cc0000"},children:"BASED, TTX, YAXIS, HOKK, PPAY, CAPY, DEA, RC_WBTC_25000_DAI_2021_3_31, OCEAN, DEUS, MILF, STA, pBTC, ibGBP, LPOOL, UBOMB, VRA, UNIX, MXS, LMT, LGB, COR, wPE, GERO, DFL, ZKS, DPX, KIMCHI, vBNT, DORA, Metis, PAID, yvBOOST, wstETH, KYL, BFC, NII, COC, BLACKHOLE, HANU, COTI, BEAN, DEV, LESS, sILV, sOHM, PEBBLE, KIRO, XES, Auction, ORN, GUSD, gm, SWAP, REQ, AUSCM, MPL, PAR, XTK, xSNXa, UMX, RBC, WGMI, OPUL, DEXT, uJENNY, HXB, PENDLE, COVER, ArtDeco, mFloki, TEL, KCAL, FREN, MetaCat, vETH, NAUSICAA, GTC, FREE, AXN, BANANA, SALE, AST1, PKF, BLOCKS, AST, BCS, 3DOG, SI, XFOC, BSOCIAL, MTA, BAT, YAM, UOS, "}),"DG, COMBO, DEFI5, WHALE, APY, BOOST, WOOFY, SDT, YUAN, XEND, OGN, RAMP, yyDAI+yUSDC+yUSDT+yTUSD, LEAFA, SHAMAN, NTVRK, LONDON, buidl, SANSHU, SLP, CERTI, PAXG, LYM, eCum, SMINU, MIMO, UNISTAKE, ALBT, mLOOT, SHB5, GPYX, NOS, RKYU, CTX, K9, CZ, C3, 3TH, CHARLOTTE, COIN, PNT, JEJUDOGE, GMGN, ROOM, FEWGO, SKL, MCO2, BONDLY, GDT, XCAD, BNS, FGLD, XFIT, IDTT, EFI, DOGEGF, HUMAN, XP, Eevee Inu , MEME, PLUG-B, LIX, VXV, OCC, DVF, UBT, YAMv2, pBTC35A, GMT, CUBE, MCC, HEZ, DRF, PUSH, TEMP, RAIL, yDAI+yUSDC+yUSDT+yTUSD, AION, PREMIA, Lelouch, DBUY, XAUt, QRDO, wANATHA, TCAP, BEZOGE, SYLO, STAK, RUSD, oneUNI, PSHIB, xAAVEb, SBC DAO, ID, FOMO, SCREAMINU, SqINU, XYO, XTM, WAGMI, STARB, ViCA, DAM, ANGLE, AIOZ, USF, FST, MFG, SOCRAT, BTRST, PAPER, CONV, POLK, SAFE, 69, RVST, WING, CHINU, MSHIBA, GIZMO, COPE, OOP, MTO, METAGOKU, BLACKSTALLION, AKITACASH, Interstellar, RFOX, NBNG, DIADOGE, APED, BTC2x-FLI, HZM, TECH, MOON, pLTC, MPY, WOGE, FLOAT, SHFL, CAKEINU, LEBRON, RSR, RARI, WXT, RULER, ODA, VLT, PKINU, ERC20, MFS, WWT, VOL, HINU, YLD, PICIPO, GNBU, SWAG, TFI-LP, METACEX, ASTRO, OPM, LEECH, Yf-DAI, SHINU, HOUND, LBY, AFT, ANIME, rDPX, RAICHU, DGCL, SPANK, CHININU, MGC, ICHI, ZENDOGE, KOMBAT, KISHIMOTO, LEEEEECH, SAPINU, SPIDEYINU  , ELAND, SCOOP, DONI, SDOG, ZINU, GIVE, SUPER HEAVY , LGBTSHIBA, SHIB2, CIAO, BARK, TOKYOGHOUL, AVINOC, BIN, BID, TMTG, MLINK, NFY, VAMINU, GG, ORION, WASABI, GP, ROLL?, vETH2, CELL, TINYSAITAMA, 1Punch, RAC, MACROHARD, SGT, ODI, SCOOBY, Mononoke-Inu, CLAKE, SAT, TRND, NEWINU, KST, Rainbows, EWTB, SMT, DNXC, PMON, HMF, UBI, SER, MASHIMA, STIMMY, NFTD, GMI, xHDX, SAITO, MINT, YOP, UMB, LID, SPI, wsOHM, wCFG, GN, B20, XDEFI, MATTER, FDT, LBXC, ONX, SDL, FUN, DDOS, CC10, CoShi, LGCY, PXT, MTHD, ENCORE, TCR, mUSD, K21, ibETH, FNX, REVV, BULK, TOWN, SFI, LAYER, DOGE, ITS, TVK, TGX, Hi, WILD, CFi"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"vs"}),(0,n.jsx)(r.td,{children:"Quote currency"}),(0,n.jsx)(r.td,{children:"USDT"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"ETH, USD, BTC, USDT"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"limit"}),(0,n.jsx)(r.td,{children:"Number of days to display data for."}),(0,n.jsx)(r.td,{children:"10"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sortby"}),(0,n.jsx)(r.td,{children:"Sort by given column."}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"date, baseCurrency, quoteCurrency, dailySpread, averageBidPrice, averageAskPrice"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"reverse"}),(0,n.jsx)(r.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(r.hr,{})]})}function E(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(T,{...e})}):T(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(5260),s=t(74848);function a(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);