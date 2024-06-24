"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15749],{21141:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=s(74848),i=s(28453),r=s(94331);const a={title:"Econometrics",description:"This documentation page introduces the Econometrics menu, in the OpenBB Terminal.  The menu has features for performing statistical analysis on custom datasets.",keywords:["econometrics","statistics","statistical research","custom datasets","panel regression","autocorrelation tests","heteroscedasticity","OpenBBUserData","panel","normality","co-integration","unitroot","garch","linear regression"]},l=void 0,o={id:"terminal/menus/econometrics",title:"Econometrics",description:"This documentation page introduces the Econometrics menu, in the OpenBB Terminal.  The menu has features for performing statistical analysis on custom datasets.",source:"@site/content/terminal/menus/econometrics.md",sourceDirName:"terminal/menus",slug:"/terminal/menus/econometrics",permalink:"/terminal/menus/econometrics",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/econometrics.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"Econometrics",description:"This documentation page introduces the Econometrics menu, in the OpenBB Terminal.  The menu has features for performing statistical analysis on custom datasets.",keywords:["econometrics","statistics","statistical research","custom datasets","panel regression","autocorrelation tests","heteroscedasticity","OpenBBUserData","panel","normality","co-integration","unitroot","garch","linear regression"]},sidebar:"tutorialSidebar",previous:{title:"Alternative",permalink:"/terminal/menus/alternative"},next:{title:"Economy",permalink:"/terminal/menus/economy"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Sample Datasets",id:"sample-datasets",level:3},{value:"Load",id:"load",level:3},{value:"Show",id:"show",level:3},{value:"Index",id:"index",level:3},{value:"Type",id:"type",level:3},{value:"RET",id:"ret",level:3},{value:"Clean",id:"clean",level:3},{value:"Plot",id:"plot",level:3},{value:"OLS",id:"ols",level:3},{value:"Norm",id:"norm",level:3},{value:"Working With Panel Data",id:"working-with-panel-data",level:3},{value:"Scripts &amp; Routines",id:"scripts--routines",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{title:"Econometrics - Menus | OpenBB Terminal Docs"}),"\n",(0,t.jsxs)(n.p,{children:["The Econometrics functions are for performing statistical analysis on custom datasets.  Multiple data sets can be loaded from local storage and modified with basic DataFrame operations. Statistical tests - (e.g. ",(0,t.jsx)("a",{href:"https://en.wikipedia.org/wiki/Breusch%E2%80%93Godfrey_test",target:"_blank",rel:"noreferrer noopener",children:"Breusch-Godfrey autocorrelation tests"}),") or OLS and Panel regressions (e.g. ",(0,t.jsx)("a",{href:"https://en.wikipedia.org/wiki/Random_effects_model",target:"_blank",rel:"noreferrer noopener",children:"Random Effects"})," and ",(0,t.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fixed_effects_model",target:"_blank",rel:"noreferrer noopener",children:"Fixed Effects"}),") - are performed on any of the loaded files."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Enter the Econometrics menu from the main menu by typing, ",(0,t.jsx)(n.code,{children:"econometrics"}),", into the Terminal.  The absolute path for the menu is:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/econometrics\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/b1720a35-d5d0-44c8-9826-b0cfffe29ee0",alt:"Screenshot 2023-11-02 at 9 03 24\u202fAM"})}),"\n",(0,t.jsx)(n.h3,{id:"sample-datasets",children:"Sample Datasets"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/44cf93ce-96f9-4c6b-bed1-611f27738de9",alt:"Screenshot 2023-11-02 at 12 12 07\u202fPM"})}),"\n",(0,t.jsxs)(n.p,{children:["There are sample datasets included in the Scipy library, those are listed by adding ",(0,t.jsx)(n.code,{children:"--examples"})," to the ",(0,t.jsx)(n.code,{children:"load"})," command. For example, ",(0,t.jsx)(n.code,{children:"longley"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"load longley\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Due to the small size of the dataset, many of these tests are not statistically significant."})}),"\n",(0,t.jsx)(n.h3,{id:"load",children:"Load"}),"\n",(0,t.jsx)(n.p,{children:'The first step in using the Econometrics menu is to load in some data.  Place files in the paths displayed at the top of the menu, under "Looking for data in:".'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/aabd6f32-2495-45f4-84b7-3d6686875e66",alt:"Screenshot 2023-11-02 at 9 15 17\u202fAM"})}),"\n",(0,t.jsxs)(n.p,{children:["This file contains historical monthly levels of the S&P 500 price and P/E ratio.  It was populated from: ",(0,t.jsx)(n.a,{href:"https://data.nasdaq.com/data/MULTPL-sp-500-ratios",children:"Nasdaq Data Link"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["After loading a file, refreshing the screen (",(0,t.jsx)(n.code,{children:"?"})," or ",(0,t.jsx)(n.code,{children:"h"}),' with no command) updates the information printed under "Loaded files and data columns:".']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Loaded files and data columns:\n        sp500_pe : date, pe, price\n"})}),"\n",(0,t.jsx)(n.h3,{id:"show",children:"Show"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"show"})," command to inspect a a loaded file.  If more than one file has been loaded, specify the target's name."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"show sp500_pe\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"date"}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"pe"}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"price"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"1871-01-31"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"11.1"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"4.44"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"1871-02-28"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"11.25"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"4.5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"..."}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"..."}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"..."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"2023-10-31"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"23.94"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"4193.8"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"index",children:"Index"}),"\n",(0,t.jsx)(n.p,{children:"Set the index by using a similar syntax to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"index sp500_pe -i date\n"})}),"\n",(0,t.jsx)(n.p,{children:"A confirmation message will print:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Successfully updated 'sp500_pe' index to be 'date'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"type",children:"Type"}),"\n",(0,t.jsx)(n.p,{children:"Format any column as one of:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"int"}),"\n",(0,t.jsx)(n.li,{children:"float"}),"\n",(0,t.jsx)(n.li,{children:"str"}),"\n",(0,t.jsx)(n.li,{children:"bool"}),"\n",(0,t.jsx)(n.li,{children:"cataegory"}),"\n",(0,t.jsx)(n.li,{children:"date"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To see what a column is defined as already:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"type sp500_pe.pe\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"The type of 'sp500_pe.pe' is 'float64'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Change it by adding the ",(0,t.jsx)(n.code,{children:"--format"})," argument and one of the choices listed above."]}),"\n",(0,t.jsx)(n.p,{children:"If this column of numbers was defined as a string, it could be changed with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"type -n sp500_pe.pe --format float\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Update 'sp500_pe.pe' with type 'float'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"ret",children:"RET"}),"\n",(0,t.jsx)(n.p,{children:"Add a column to the time series for returns."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"ret -v sp500_pe.price\n"})}),"\n",(0,t.jsx)(n.h3,{id:"clean",children:"Clean"}),"\n",(0,t.jsxs)(n.p,{children:["If NaN values exist, use the ",(0,t.jsx)(n.code,{children:"clean"})," command to handle them.  The example below removes rows where they exist.  The new ",(0,t.jsx)(n.code,{children:"returns"})," column will contain a NaN in the first row."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"clean sp500_pe -d rdrop\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Successfully cleaned 'sp500_pe' dataset\n"})}),"\n",(0,t.jsx)(n.h3,{id:"plot",children:"Plot"}),"\n",(0,t.jsxs)(n.p,{children:["Plot columns from a loaded dataset using the ",(0,t.jsx)(n.code,{children:"plot"})," command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"plot sp500_pe.pe\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/316104d9-17a7-4c96-9516-57a4074fd221",alt:"Screenshot 2023-11-02 at 9 40 47\u202fAM"})}),"\n",(0,t.jsx)(n.h3,{id:"ols",children:"OLS"}),"\n",(0,t.jsx)(n.p,{children:"Fit an OLS regression model to a loaded data set by defining the dependent and independent variables as column names."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"ols sp500_pe.pe -i sp500_pe.price,sp500_pe.price_returns\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/6ba43577-aa95-4c17-b1d4-77561629972f",alt:"Screenshot 2023-11-02 at 11 15 11\u202fAM"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"bgod"})," and ",(0,t.jsx)(n.code,{children:"bpag"})," commands require running ",(0,t.jsx)(n.code,{children:"OLS"})," first."]})}),"\n",(0,t.jsx)(n.h3,{id:"norm",children:"Norm"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"norm"})," is used to determine whether the data is normally distributed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"norm sp500_pe.price_returns\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"}}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Kurtosis"}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Skewness"}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Jarque-Bera"}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Shapiro-Wilk"}),(0,t.jsx)(n.th,{style:{textAlign:"right"},children:"Kolmogorov-Smirnov"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Statistic"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"20.5784"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"7.20623"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"20258.4"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0.903374"}),(0,t.jsx)(n.td,{style:{textAlign:"right"},children:"0.454473"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["A histogram of the distribution is displayed by adding a, ",(0,t.jsx)(n.code,{children:"-p"}),", flag to the command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"norm sp500_pe.price_returns -p\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/4aa0ff4a-b3c5-4a88-acd5-25c754724b9f",alt:"Screenshot 2023-11-02 at 12 25 22\u202fPM"})}),"\n",(0,t.jsx)(n.h3,{id:"working-with-panel-data",children:"Working With Panel Data"}),"\n",(0,t.jsxs)(n.p,{children:["Within the examples of ",(0,t.jsx)(n.code,{children:"load --examples"})," there is one panel dataset available named ",(0,t.jsx)(n.code,{children:"wage_panel"}),". This is a dataset from the paper by Vella and M. Verbeek (1998), \u201cWhose Wages Do Unions Raise? A Dynamic Model of Unionism and Wage Rate Determination for Young Men,\u201d Journal of Applied Econometrics 13, 163-183. This is a well-known dataset also used within Chapter 14 of ",(0,t.jsx)("a",{href:"https://www.amazon.com/Introductory-Econometrics-Modern-Approach-Economics/dp/1111531048",target:"_blank",rel:"noreferrer noopener",children:"Introduction to Econometrics by Jeffrey Wooldridge"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In the example below, the dataset is loaded and given an alias by adding the, ",(0,t.jsx)(n.code,{children:"-a"}),", argument."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/econometrics/load --file wage_panel -a wp\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To run panel regressions, it is important to define both ",(0,t.jsx)(n.em,{children:"entity"})," (e.g. company) and ",(0,t.jsx)(n.em,{children:"time"})," (e.g. year). Trying to run the ",(0,t.jsx)(n.code,{children:"panel"})," command would right now result in the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"panel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"The column 'lwage' from the dataset 'wp' is not a MultiIndex.\n\nMake sure you set the index correctly with the index (e.g. index wp -i lwage,nr) command where the first level is the entity (e.g. Tesla Inc.) and the second level the date (e.g. 2021-03-31)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Within this dataset the ",(0,t.jsx)(n.code,{children:"nr"})," and ",(0,t.jsx)(n.code,{children:"year"})," columns define the ",(0,t.jsx)(n.em,{children:"entity"})," and ",(0,t.jsx)(n.em,{children:"time"}),". To allow panel regression estimations, they will need to be defined using the ",(0,t.jsx)(n.code,{children:"index"})," command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"index wp -i nr,year\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Successfully updated 'wp' index to be 'nr, year'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The columns ",(0,t.jsx)(n.code,{children:"nr"})," and ",(0,t.jsx)(n.code,{children:"year"})," still exists within the dataset and could have been dropped with the ",(0,t.jsx)(n.code,{children:"-d"})," argument if desired. However, in this case the ",(0,t.jsx)(n.code,{children:"year"})," column is relevant for generating time effects in Pooled OLS, Fixed Effects and Random Effects estimations. To be able to do this, the type of the year column needs to be changed."]}),"\n",(0,t.jsxs)(n.p,{children:["For the panel regressions, it can be beneficial to see time effects from ",(0,t.jsx)(n.code,{children:"year"}),". Therefore, the type of the ",(0,t.jsx)(n.code,{children:"year"})," column should be altered to ",(0,t.jsx)(n.code,{children:"category"}),". This can be done with the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"type wp.year --format category\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Update 'wp.year' with type 'category'\n"})}),"\n",(0,t.jsx)(n.p,{children:"The dataset is now properly configured to allow for proper panel regressions.  The type of regression used is a choice of:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-r pols"})," (Pooled OLS)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-r re"})," (Random Effects)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-r bols"})," (Between OLS)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-r fe"})," (Fixed Effects)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-r fdols"})," (First Difference OLS)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For example, a ",(0,t.jsx)(n.strong,{children:"Random Effects"})," regression is performed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"panel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year -r re\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/1b576690-53b6-4ca2-9aa7-bc19cb3ac4f1",alt:"Screenshot 2023-11-02 at 1 03 57\u202fPM"})}),"\n",(0,t.jsx)(n.h3,{id:"scripts--routines",children:"Scripts & Routines"}),"\n",(0,t.jsxs)(n.p,{children:["Doing research, both as a student or professor for a university or as a professional, often requires the findings to be easily replicated. As many steps could be required, the ability to make small adjustments without needing to re-do every single step again. This is where ",(0,t.jsx)(n.a,{href:"/terminal/usage/routines/introduction-to-routines",children:"OpenBB Routines"})," play an important role."]}),"\n",(0,t.jsxs)(n.p,{children:["Use the contents below as a demo file, copying and pasting into a file saved to the ",(0,t.jsx)(n.code,{children:"~/OpenBBUserData/routines"})," folder."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"# Go into the econometrics context\neconometrics\n\n# Load the wage_panel dataset and include an alias\nload wage_panel -a wp\n\n# Set the MultiIndex, allowing for Panel regressions to be performed\nindex wp -i nr,year\n\n# Change the type of the year column so it can be included as time effects within the regressions\ntype wp.year --format category\n\n# Perform a Pooled OLS, Random Effects and Fixed Effects estimation\npanel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year\npanel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year -r re\npanel -d wp.lwage -i wp.expersq,wp.union,wp.married,wp.year -r fe\n\n# Compare the results obtained from these regressions\ncompare\n"})}),"\n",(0,t.jsx)(n.p,{children:"Run the routine from the Main menu:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/exe -f name_of_file.openbb\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,n,s)=>{s.d(n,{A:()=>r});s(96540);var t=s(5260),i=s(74848);function r(e){let{title:n}=e;return(0,i.jsx)(t.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);