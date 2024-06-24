"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57870],{58979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(74848),i=t(28453),r=t(94331);const o={title:"General Operation",sidebar_position:3,description:"Learn how to overcome system-related issues by enabling the 'developer mode' on Windows and MacOS. Get answers for queries and potential issues. Here, you'll also get to know how to run applications that do not meet the system's security policy, allow apps through firewall and get tips on portfolio management.",keywords:["developer mode","overcome system-related issues","Windows","MacOS","run applications","system's security policy","allow apps through firewall","Portfolio management","Settings","FAQ"]},a=void 0,l={id:"terminal/faqs/general_operation",title:"General Operation",description:"Learn how to overcome system-related issues by enabling the 'developer mode' on Windows and MacOS. Get answers for queries and potential issues. Here, you'll also get to know how to run applications that do not meet the system's security policy, allow apps through firewall and get tips on portfolio management.",source:"@site/content/terminal/faqs/general_operation.md",sourceDirName:"terminal/faqs",slug:"/terminal/faqs/general_operation",permalink:"/terminal/faqs/general_operation",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/faqs/general_operation.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,sidebarPosition:3,frontMatter:{title:"General Operation",sidebar_position:3,description:"Learn how to overcome system-related issues by enabling the 'developer mode' on Windows and MacOS. Get answers for queries and potential issues. Here, you'll also get to know how to run applications that do not meet the system's security policy, allow apps through firewall and get tips on portfolio management.",keywords:["developer mode","overcome system-related issues","Windows","MacOS","run applications","system's security policy","allow apps through firewall","Portfolio management","Settings","FAQ"]},sidebar:"tutorialSidebar",previous:{title:"Launching",permalink:"/terminal/faqs/launching"},next:{title:"Data and Sources",permalink:"/terminal/faqs/data_sources"}},d={},c=[];function h(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"General Operation - Faqs | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(n.p,{children:'Both Windows and MacOS provide a "developer mode", and enabling it may help to overcome system-related issues.'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MacOS"}),': Go to the System Settings, and under the "Privacy and Security" tab, scroll to the bottom and select the option to "Allow applications downloaded from App Store and identified developers". Then, scroll up to click on, "Developer Tools", and add ',(0,s.jsx)(n.code,{children:"Terminal.app"})," and ",(0,s.jsx)(n.code,{children:"Visual Studio Code"})," (or the preferred code editor) to the list of applications allowed to run software locally that does not meet the system's security policy."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Windows"}),': Go to the Control Panel, and under the "Privacy & Security" tab, click on, "For developers". Under this menu, turn "Developer Mode" on.']}),"\n",(0,s.jsx)(n.p,{children:'From the Windows Security menu, click on the Firewall & Network Protection tab, then click on "Allow an app through firewall". If the applications below are not allowed to communicate through Windows Defender Firewall, change the settings to allow.'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"BranchCache"}),"\n",(0,s.jsx)(n.li,{children:"Hyper-V"}),"\n",(0,s.jsx)(n.li,{children:"VcXsrv"}),"\n",(0,s.jsx)(n.li,{children:"Windows Terminal"}),"\n"]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Why does a specific menu or command not exist?"}),(0,s.jsxs)(n.p,{children:["It could be that you are running an outdated version in which the menu or command is not yet available. Please check the ",(0,s.jsx)(n.a,{href:"/terminal/installation",children:"installation guide"})," to download the most recent release."]}),(0,s.jsxs)(n.p,{children:["Do note that it is also possible that the menu or command has been deprecated. If this is oversight, please reach out to us ",(0,s.jsx)(n.a,{href:"https://openbb.co/support",children:"here"}),"."]})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Charts do not display on Linux/WSL or Docker installation."}),(0,s.jsxs)(n.p,{children:["Check that X-11, or similar, is installed, open, and configured. Follow the instructions pertaining to the system here: ",(0,s.jsx)(n.a,{href:"/terminal/installation/docker",children:"/terminal/installation/docker"})]})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"How do I retrieve more results than is returned by default?"}),(0,s.jsxs)(n.p,{children:["Most functions will have either, ",(0,s.jsx)(n.code,{children:"--start"})," and ",(0,s.jsx)(n.code,{children:"--end"})," flags, or a ",(0,s.jsx)(n.code,{children:"--limit"})," argument. Print the help dialogue for any command by attaching, ",(0,s.jsx)(n.code,{children:"--help"})," or ",(0,s.jsx)(n.code,{children:"-h"}),"."]})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Does the portfolio menu allow for dividends, interest, or other distributions?"}),(0,s.jsx)(n.p,{children:"Currently, this is only possible by manually updating the portfolio file."})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Why does my Portfolio file fail to load?"}),(0,s.jsxs)(n.p,{children:["This can be the result of a formatting error, check the file in a simple text editor to observe any abnormalities in the formatting; or, it could be a bug - check the ",(0,s.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues",children:"GitHub issues page"})," for similar errors."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check that all the necessary column titles are present."}),"\n",(0,s.jsx)(n.li,{children:"Inspect the file to see if cells left blank have been filled unintentionally with 0 or NaN values."}),"\n",(0,s.jsx)(n.li,{children:"A particular asset may not be able to load data. Check for valid historical data from the Stocks menu."}),"\n",(0,s.jsx)(n.li,{children:"Format ticker symbols according to yFinance naming convention."}),"\n",(0,s.jsx)(n.li,{children:"All dates must be entered as YYYY-MM-DD."}),"\n",(0,s.jsx)(n.li,{children:"Transactions dated for today will fail to load historical data."}),"\n",(0,s.jsx)(n.li,{children:"MacOS users should attempt to avoid using the Numbers application as it has a habit of changing the formatting while saving."}),"\n"]}),(0,s.jsxs)(n.p,{children:["Files can be formatted as either ",(0,s.jsx)(n.code,{children:".csv"})," or ",(0,s.jsx)(n.code,{children:".xlsx"})," files, and the required column headers are:"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"[Date,Type,Ticker,Side,Price,Quantity,Fees,Investment,Currency,Sector,Industry,Country,Region]"})}),(0,s.jsxs)(n.p,{children:["See the guide ",(0,s.jsx)(n.a,{href:"/sdk/data-available/portfolio/introduction",children:"here"})," for more information."]})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"How do I change the chart styles?"}),(0,s.jsxs)(n.p,{children:["See the guide ",(0,s.jsx)(n.a,{href:"/terminal/usage/overview/customizing-the-terminal",children:"here"}),". The theme can be toggled between light and dark mode, directly on the individual chart. See the ",(0,s.jsx)(n.a,{href:"/terminal/usage/basics#charts",children:"Terminal Basics page"})," for more information on working with the charts."]})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Can I change the colors of the text in the Terminal?"}),(0,s.jsxs)(n.p,{children:["Yes, use the ",(0,s.jsx)(n.code,{children:"colors"})," command under the ",(0,s.jsx)(n.code,{children:"/settings"})," menu: ",(0,s.jsx)(n.a,{href:"/terminal/usage/overview/customizing-the-terminal",children:"/terminal/usage/overview/customizing-the-terminal"})]})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"After setting the preset in the stocks screener, nothing happens."}),(0,s.jsxs)(n.p,{children:["Print the current screen again with by entering, ",(0,s.jsx)(n.code,{children:"?"}),". Does the name of the selected preset display? With a preset loaded, run the screener by entering one of the commands below:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Financial"}),"\n",(0,s.jsx)(n.li,{children:"Ownership"}),"\n",(0,s.jsx)(n.li,{children:"Overview"}),"\n",(0,s.jsx)(n.li,{children:"Performance"}),"\n",(0,s.jsx)(n.li,{children:"Technical"}),"\n",(0,s.jsx)(n.li,{children:"Valuation"}),"\n"]})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Forecast functions say to enter a valid data set"}),(0,s.jsxs)(n.p,{children:["Because an unlimited number of data sets can be loaded into the Forecast menu, each function requires defining the specific data set to be used. Add the ",(0,s.jsx)(n.code,{children:"-d"})," or ",(0,s.jsx)(n.code,{children:"--dataset"})," argument to the command, along with the name of the desired data set."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"rnn -d SPY\n"})})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"How do I find stocks from India, or another country?"}),(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"search"})," command from the ",(0,s.jsx)(n.code,{children:"/stocks"})," menu. Refer to the menu's introduction guide ",(0,s.jsx)(n.a,{href:"/terminal/menus/stocks#search",children:"here"}),"."]}),(0,s.jsx)(n.p,{children:"As an example, try this:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"search --country india --exchange-country india --limit 1000\n"})})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(5260),i=t(74848);function r(e){let{title:n}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);