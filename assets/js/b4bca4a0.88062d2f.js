"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37820],{2204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(74848),i=t(28453),d=t(94331);const a={title:"Mutual Funds",description:"The documentation presents various commands and functions available within the Mutual Funds menu, enabling users to analyze and get detailed insights about different mutual funds. It covers features like searching funds, loading fund data, analyzing sector weightings, and viewing current fund holdings, among others.",keywords:["Mutual funds","Fund analysis","Investment","Fund listings","/funds commands","Fund data","Mutual fund information","Fund sector weightings","Mutual fund holdings","Mutual fund carbon metrics"]},l=void 0,r={id:"terminal/menus/mutualfunds",title:"Mutual Funds",description:"The documentation presents various commands and functions available within the Mutual Funds menu, enabling users to analyze and get detailed insights about different mutual funds. It covers features like searching funds, loading fund data, analyzing sector weightings, and viewing current fund holdings, among others.",source:"@site/content/terminal/menus/mutualfunds.md",sourceDirName:"terminal/menus",slug:"/terminal/menus/mutualfunds",permalink:"/terminal/menus/mutualfunds",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/mutualfunds.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,frontMatter:{title:"Mutual Funds",description:"The documentation presents various commands and functions available within the Mutual Funds menu, enabling users to analyze and get detailed insights about different mutual funds. It covers features like searching funds, loading fund data, analyzing sector weightings, and viewing current fund holdings, among others.",keywords:["Mutual funds","Fund analysis","Investment","Fund listings","/funds commands","Fund data","Mutual fund information","Fund sector weightings","Mutual fund holdings","Mutual fund carbon metrics"]},sidebar:"tutorialSidebar",previous:{title:"Futures",permalink:"/terminal/menus/futures"},next:{title:"cases",permalink:"/terminal/reference/alt/covid/cases"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"Country",id:"country",level:3},{value:"Search",id:"search",level:3},{value:"Load",id:"load",level:3},{value:"Holdings",id:"holdings",level:3},{value:"Plot",id:"plot",level:3},{value:"Sector",id:"sector",level:3},{value:"Infoswe",id:"infoswe",level:3}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{title:"Mutual Funds - Menus | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(n.p,{children:"The Mutual Funds menu provides a global view of the mutual funds universe."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Enter the menu by typing, ",(0,s.jsx)(n.code,{children:"funds"}),", from the main menu. Or, use the absolute path:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/funds\n"})}),"\n",(0,s.jsx)(n.p,{children:"Commands in the Mutual Funds menu are grouped according to the workflow."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Function Key"}),(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"country"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"Set the target country."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"search"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"Search for a mutual fund within the target country."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"load"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"Load a mutual fund for analysis."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"plot"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"Plot the historical price performance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"sector"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"A chart of the sector weightings against the benchmark index."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"holdings"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"Current holdings of the fund."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"carbon"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"Carbon metrics for the fund."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"exclusion"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"The fund's policy for excluding investment types."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"alswe"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"Display the fund's allocation data (Sweden-only)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"infoswe"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"Get fund information (Sweden only)."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"country",children:"Country"}),"\n",(0,s.jsxs)(n.p,{children:["To use the menu, a country must be selected, and the default is ",(0,s.jsx)(n.code,{children:"united_states"}),".  To select a different one, type ",(0,s.jsx)(n.code,{children:"country"}),", followed by the ",(0,s.jsx)(n.code,{children:"spacebar"}),".  This will bring up a list that can be picked from using the up/down arrow keys."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/235046797-0541dfbf-8f2a-41a0-a70b-d6fb890aa61d.png",alt:"Mutual Funds Menu"})}),"\n",(0,s.jsxs)(n.p,{children:["Refresh the screen, by typing ",(0,s.jsx)(n.code,{children:"?"}),", to verify the choice has been made."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/235046837-4bc9ad55-a4ca-411d-a3b4-800fe2e03db1.png",alt:"Selecting a Country"})}),"\n",(0,s.jsx)(n.h3,{id:"search",children:"Search"}),"\n",(0,s.jsxs)(n.p,{children:["The most effective way to sift through a vast quantity of funds is to use the ",(0,s.jsx)(n.code,{children:"search"})," function broadly, then narrow the focus using the built-in filters on the displayed table.  In the example below, there are 668 results returned for ",(0,s.jsx)(n.code,{children:"RBC"})," and ",(0,s.jsx)(n.code,{children:"Canada"}),".  Filtering for money market funds gets it down to only ten funds."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/funds/country canada/search rbc --limit 1000\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/235046894-6cae803b-6b42-4e24-9d16-a02be06599e9.png",alt:"Search Funds"})}),"\n",(0,s.jsx)(n.h3,{id:"load",children:"Load"}),"\n",(0,s.jsxs)(n.p,{children:["A mutual fund is loaded by using the ID number, which is the column labeled, ",(0,s.jsx)(n.code,{children:"SECID"}),", on the left side of the table."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"load F0CAN05LTL\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"The fund RBC Premium Money Market Fund A - 52.8.RBF447 (F0CAN05LTL) was successfully loaded.\n"})}),"\n",(0,s.jsx)(n.h3,{id:"holdings",children:"Holdings"}),"\n",(0,s.jsxs)(n.p,{children:["With a fund loaded, get the weighting of the portfolio using the ",(0,s.jsx)(n.code,{children:"holdings"})," command."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The holdings data returned will vary by country.  Some will only return the top ten, while others will publish the entire portfolio."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/funds/country canada/load F00000U48G/holdings\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/235046949-e4aa2a5c-149d-4733-80a2-e1a703741cd3.png",alt:"Holdings"})}),"\n",(0,s.jsx)(n.p,{children:"In contrast, the iShares Developed Real Estate Index Fund Investor A Shares, from the United States, returns 449 results."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"funds/country united_states/load F00000VW8Z/holdings\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/235047003-7e4e0e0f-7a72-416e-a40a-8f9d30027c35.png",alt:"Holdings"})}),"\n",(0,s.jsx)(n.h3,{id:"plot",children:"Plot"}),"\n",(0,s.jsx)(n.p,{children:"Plot historical performance of the fund against its benchmark index or the broad category."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/funds/country united_states/load F00000VW8Z --start 2000-01-01/plot -c both\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/235047052-0f7cd672-534f-4a03-b6af-a5ec53ff1718.png",alt:"Plot Performance"})}),"\n",(0,s.jsx)(n.h3,{id:"sector",children:"Sector"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"sector"})," command displays a breakdown of sector weightings, compared against the benchmark index and broad category."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/funds/country united_states/load F00000ZAFI/sector\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/235047206-01cfd8c3-d65f-4bfa-ae47-ba0869a0c38e.png",alt:"Sector Breakdown"})}),"\n",(0,s.jsx)(n.h3,{id:"infoswe",children:"Infoswe"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"infoswe"})," command when the target country is, ",(0,s.jsx)(n.code,{children:"sweden"}),", and a loaded fund is issued by Avanza."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/funds/country sweden/load F00000OW3P/infoswe\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"The description below has been translated into English in this documentation because of the spelling checkers working in the repository are expecting English."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"The fund Avanza 100 - SE0004841526 (F00000OW3P) was successfully loaded.\n\nSwedish Description:\n\nThe fund is a mutual fund and aims to provide a positive return in the long term, taking into account the fund's risk level. The underlying funds must be cost-effective and have broad market exposure. The fund mainly invests in global, Swedish and growth market-oriented equity funds. The share exposed to shares in the fund is normally between 80 and 100 percent.\n\nThe fund is managed by:\n        - Peter Steng\xe5rd since 2012-10-19\n        - Hampus Ernstsson since 2023-02-27\nfrom Avanza.\nFund currency is SEK and it the fund started 2012-10-19. It is not a index fund. The fund manages 764173863.0 SEK. The standard deviation of the fund is 13.200000000000001 and the sharpe ratio is 1.08.\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>d});t(96540);var s=t(5260),i=t(74848);function d(e){let{title:n}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const i={},d=s.createContext(i);function a(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);