"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32201],{43655:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var a=t(74848),s=t(28453),i=t(94331);const o={title:"Hub Synchronization",sidebar_position:6,description:"This is a documentation page for OpenBB focusing on the integration of OpenBB Terminal with OpenBB Hub. Topics covered include registration, login, managing API keys, default data sources, theme styles, script routines, and personal access tokens.",keywords:["OpenBB Terminal guide","OpenBB Hub integration","Registration process","Login process","API Keys management","Default Data Sources","Theme Styles","Script Routines","Personal Access Tokens"]},r=void 0,l={id:"terminal/usage/hub",title:"Hub Synchronization",description:"This is a documentation page for OpenBB focusing on the integration of OpenBB Terminal with OpenBB Hub. Topics covered include registration, login, managing API keys, default data sources, theme styles, script routines, and personal access tokens.",source:"@site/content/terminal/usage/hub.md",sourceDirName:"terminal/usage",slug:"/terminal/usage/hub",permalink:"/terminal/usage/hub",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/usage/hub.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,sidebarPosition:6,frontMatter:{title:"Hub Synchronization",sidebar_position:6,description:"This is a documentation page for OpenBB focusing on the integration of OpenBB Terminal with OpenBB Hub. Topics covered include registration, login, managing API keys, default data sources, theme styles, script routines, and personal access tokens.",keywords:["OpenBB Terminal guide","OpenBB Hub integration","Registration process","Login process","API Keys management","Default Data Sources","Theme Styles","Script Routines","Personal Access Tokens"]},sidebar:"tutorialSidebar",previous:{title:"AskOBB Feature",permalink:"/terminal/usage/askobb-feature"},next:{title:"Keyboard Hotkey Macros",permalink:"/terminal/usage/keyboard-hotkey-macros"}},c={},h=[{value:"Registration",id:"registration",level:2},{value:"Login",id:"login",level:2},{value:"API Keys",id:"api-keys",level:2},{value:"OpenBB Hub",id:"openbb-hub",level:3},{value:"OpenBB Terminal",id:"openbb-terminal",level:3},{value:"Default Data Sources",id:"default-data-sources",level:2},{value:"OpenBB Hub",id:"openbb-hub-1",level:3},{value:"OpenBB Terminal",id:"openbb-terminal-1",level:3},{value:"Theme Styles",id:"theme-styles",level:2},{value:"OpenBB Hub",id:"openbb-hub-2",level:3},{value:"OpenBB Terminal",id:"openbb-terminal-2",level:3},{value:"Script Routines",id:"script-routines",level:2},{value:"OpenBB Hub",id:"openbb-hub-3",level:3},{value:"OpenBB Terminal",id:"openbb-terminal-3",level:3},{value:"Personal Access Tokens",id:"personal-access-tokens",level:2},{value:"OpenBB Hub",id:"openbb-hub-4",level:3},{value:"OpenBB Terminal",id:"openbb-terminal-4",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{title:"Hub Synchronization - Usage | OpenBB Terminal Docs"}),"\n",(0,a.jsx)(n.p,{children:"This guide will walk you through the process of integrating the OpenBB Terminal with the OpenBB Hub to achieve optimal performance."}),"\n",(0,a.jsx)(n.h2,{id:"registration",children:"Registration"}),"\n",(0,a.jsxs)(n.p,{children:["To get started, you'll need to create an account on the OpenBB Hub by visiting ",(0,a.jsx)(n.a,{href:"https://my.openbb.co",children:"https://my.openbb.co"})]}),"\n",(0,a.jsx)(n.p,{children:"By registering with the OpenBB Hub, you can easily access our products on multiple devices and maintain consistent settings for an improved user experience. This also enables you to receive updates for the terminal as soon as they become available."}),"\n",(0,a.jsx)(n.h2,{id:"login",children:"Login"}),"\n",(0,a.jsx)(n.p,{children:"Once you're successfully registered on the OpenBB Hub, you can log in to access all the benefits it has to offer."}),"\n",(0,a.jsx)(n.p,{children:"The login credentials you use on the OpenBB Hub will be the same ones you will use to access the OpenBB Terminal."}),"\n",(0,a.jsx)("img",{width:"1441",alt:"Screenshot 2023-04-14 at 3 46 52 PM",src:"https://user-images.githubusercontent.com/25267873/232166964-635ff0c0-0e09-4cc2-9f9f-078552cc41c1.png"}),"\n",(0,a.jsx)(n.p,{children:"When OpenBB Terminal 3.0.0 (or greater) is launched, there will be a new welcome message. On packaged applications, you will be greeted with the following:"}),"\n",(0,a.jsx)("img",{width:"473",alt:"Screenshot 2023-04-14 at 3 31 51 PM",src:"https://user-images.githubusercontent.com/25267873/232165909-682c7301-237c-4a8a-b780-97c944adb625.png"}),"\n",(0,a.jsx)(n.p,{children:'The "Remember me" feature saves your session locally, eliminating the need to log in for 30 days.'}),"\n",(0,a.jsxs)(n.p,{children:["If you haven't registered, simply press ",(0,a.jsx)(n.code,{children:"<ENTER>"})," to access the terminal as a guest without using this feature."]}),"\n",(0,a.jsx)(n.p,{children:"Once you have successfully logged in, your username (e.g. [didier.lopes]) along with a \ud83e\udd8b flair will be displayed on the terminal. However, if you're in guest mode, only the \ud83d\udc1b flair will be visible."}),"\n",(0,a.jsx)(n.p,{children:"Note: If you wish to log in or out of your account while inside the terminal, simply access the /account menu."}),"\n",(0,a.jsx)(n.h2,{id:"api-keys",children:"API Keys"}),"\n",(0,a.jsx)(n.p,{children:"As you may already know, the OpenBB Terminal acts as a mediator between users and data providers and does not store any data. This enables us to focus on providing a superior product experience for users, while data vendors can integrate their data sources to create a new revenue channel. However, this does mean that each user must manage their own API keys for each data provider they wish to access."}),"\n",(0,a.jsx)(n.h3,{id:"openbb-hub",children:"OpenBB Hub"}),"\n",(0,a.jsxs)(n.p,{children:["If you were an OpenBB user prior to the release of OpenBB Terminal 3.0, you may already have an .env file containing all your API keys. If this is the case, simply drag and drop the file onto ",(0,a.jsx)(n.a,{href:"https://my.openbb.co/app/terminal/api-keys",children:"this page"})," to automatically save your keys."]}),"\n",(0,a.jsx)("img",{width:"1441",alt:"Screenshot 2023-04-14 at 6 14 55 PM",src:"https://user-images.githubusercontent.com/25267873/232176162-b16296d4-0c08-408c-aaa4-f46a6bea1bf3.png"}),"\n",(0,a.jsx)(n.p,{children:"If you are a new user, you'll need to follow the instructions provided by hovering over the \u2139\ufe0f icon for each data source you're interested in. The icon will direct you to the data vendor's website to obtain the necessary API key, which can then be saved on the Hub for future use."}),"\n",(0,a.jsx)(n.h3,{id:"openbb-terminal",children:"OpenBB Terminal"}),"\n",(0,a.jsx)(n.p,{children:"Upon logging in, the OpenBB Terminal will automatically retrieve the API keys associated with your account."}),"\n",(0,a.jsx)(n.p,{children:"If you have not saved them on the OpenBB Hub, they will be loaded from your local environment by default. However, if an API key is saved on the OpenBB Hub, it will take precedence over the local environment key."}),"\n",(0,a.jsxs)(n.p,{children:["Important: Note that setting a key in the ",(0,a.jsx)(n.code,{children:"keys"})," menu will ",(0,a.jsx)(n.strong,{children:"NOT"})," upload it to the OpenBB Hub. This option is only intended for managing local environment variables. For a superior user experience, OpenBB highly recommends using the OpenBB Hub to manage your API keys."]}),"\n",(0,a.jsx)(n.p,{children:"If an API key is updated in the Hub while the OpenBB Terminal is running, you will need to restart the terminal for the changes to take effect."}),"\n",(0,a.jsxs)(n.p,{children:["To delete your saved API keys from the OpenBB Hub, use the ",(0,a.jsx)(n.code,{children:"/account/clear"})," command. However, please note that this action ",(0,a.jsx)(n.strong,{children:"CANNOT BE UNDONE"})," and will prompt a confirmation prompt."]}),"\n",(0,a.jsx)(n.h2,{id:"default-data-sources",children:"Default Data Sources"}),"\n",(0,a.jsx)(n.p,{children:"In many cases, there are multiple data vendors offering access to the same data for a given command. At OpenBB, we believe in empowering our users to choose their preferred data source, or the one with whom they already have a commercial relationship. Therefore, we offer the ability for users to select their default data sources for each command."}),"\n",(0,a.jsx)(n.h3,{id:"openbb-hub-1",children:"OpenBB Hub"}),"\n",(0,a.jsxs)(n.p,{children:["In the OpenBB Hub, you can access ",(0,a.jsx)(n.a,{href:"https://my.openbb.co/app/terminal/data-sources",children:"this page"})," which allows you to select the default data sources for all commands."]}),"\n",(0,a.jsx)("img",{width:"1440",alt:"Screenshot 2023-04-14 at 6 26 53 PM",src:"https://user-images.githubusercontent.com/25267873/232176560-5bee773f-1b9a-4904-8f05-fcaf1342a81d.png"}),"\n",(0,a.jsx)(n.h3,{id:"openbb-terminal-1",children:"OpenBB Terminal"}),"\n",(0,a.jsx)(n.p,{children:"Upon login, the OpenBB Terminal will pull the default data sources associated with your account."}),"\n",(0,a.jsxs)(n.p,{children:["If a user wants to adjust any data source directly from the terminal, this is possible by utilizing the ",(0,a.jsx)(n.code,{children:"/sources"})," menu. For instance,"]}),"\n",(0,a.jsx)("img",{width:"476",alt:"Screenshot 2023-04-14 at 6 39 29 PM",src:"https://user-images.githubusercontent.com/25267873/232177024-445494b6-46f2-4a4f-a874-e93132204378.png"}),"\n",(0,a.jsx)(n.p,{children:"That change will be reflected on the OpenBB Hub when refreshing the page."}),"\n",(0,a.jsx)(n.p,{children:"Note that any changes on the OpenBB Hub will require a restart of the terminal to take effect."}),"\n",(0,a.jsx)(n.h2,{id:"theme-styles",children:"Theme Styles"}),"\n",(0,a.jsxs)(n.p,{children:['Theme styles correspond to the ability to change your terminal "skin" (i.e. colouring of the ',(0,a.jsx)(n.code,{children:"menu"}),", ",(0,a.jsx)(n.code,{children:"commands"}),", ",(0,a.jsx)(n.code,{children:"data source"}),", ",(0,a.jsx)(n.code,{children:"parameters"}),", ",(0,a.jsx)(n.code,{children:"information"})," and ",(0,a.jsx)(n.code,{children:"help"}),"), the charts and tables style."]}),"\n",(0,a.jsx)(n.h3,{id:"openbb-hub-2",children:"OpenBB Hub"}),"\n",(0,a.jsxs)(n.p,{children:["In the OpenBB Hub, you have the ability to change your preferred themes for the terminal on ",(0,a.jsx)(n.a,{href:"https://my.openbb.co/app/terminal/theme?index",children:"this page"}),","]}),"\n",(0,a.jsx)("img",{width:"1427",alt:"Screenshot 2023-04-14 at 6 51 50 PM",src:"https://user-images.githubusercontent.com/25267873/232177511-d86edd57-fa2f-40a2-b05f-35cbb856bb94.png"}),"\n",(0,a.jsxs)(n.p,{children:["and charts and tables on ",(0,a.jsx)(n.a,{href:"https://my.openbb.co/app/terminal/theme/charts-tables",children:"this page"}),","]}),"\n",(0,a.jsx)("img",{width:"1421",alt:"Screenshot 2023-04-14 at 6 56 46 PM",src:"https://user-images.githubusercontent.com/25267873/232177692-89fd6784-dd8b-4cb2-a613-d51f6332e2da.png"}),"\n",(0,a.jsx)(n.h3,{id:"openbb-terminal-2",children:"OpenBB Terminal"}),"\n",(0,a.jsx)(n.p,{children:"When you log in to the OpenBB Terminal, the platform automatically applies the theme style associated with your account."}),"\n",(0,a.jsxs)(n.p,{children:["To further customize your experience, you can manage these styles using the ",(0,a.jsx)(n.code,{children:"/settings/theme"})," and ",(0,a.jsx)(n.code,{children:"/settings/colors"})," commands. While managing the theme is straightforward, managing colors can be more complex as it requires moving a special file around. For a smoother experience, we highly recommend managing colors through the improved interface on the OpenBB Hub."]}),"\n",(0,a.jsx)(n.p,{children:"It's important to note that changes to charts and tables take effect immediately, while changes to the terminal theme require a reset to take effect."}),"\n",(0,a.jsx)(n.h2,{id:"script-routines",children:"Script Routines"}),"\n",(0,a.jsxs)(n.p,{children:["These are text files with an ",(0,a.jsx)(n.code,{children:".openbb"}),' extension that allow users to create workflows of sequence of commands. And allows to create parameters that can be modified outside the terminal. An example would be the file, "',(0,a.jsx)(n.em,{children:"example.openbb"}),'" looking like:']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"stocks\nload $ARGV[0]\n# depict candle chart\ncandle\n"})}),"\n",(0,a.jsx)(n.p,{children:"and then run on the terminal utilizing:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"/exe example.openbb -i MSFT\n"})}),"\n",(0,a.jsx)(n.h3,{id:"openbb-hub-3",children:"OpenBB Hub"}),"\n",(0,a.jsxs)(n.p,{children:["The OpenBB Hub allows users to manage their own script routines to be run in the OpenBB Terminal. They can do so on ",(0,a.jsx)(n.a,{href:"https://my.openbb.co/app/terminal/routines",children:"this page"}),"."]}),"\n",(0,a.jsx)("img",{width:"1442",alt:"Screenshot 2023-04-14 at 7 13 11 PM",src:"https://user-images.githubusercontent.com/25267873/232178264-61f383ef-242f-48da-bd32-83fd013a094c.png"}),"\n",(0,a.jsxs)(n.p,{children:["In addition, a few script routines will be distributed by the OpenBB Team on ",(0,a.jsx)(n.a,{href:"https://my.openbb.co/app/terminal/routines/default",children:"this page"}),". These come primarily from academic content that the team is releasing, but can serve as an example of what you can do."]}),"\n",(0,a.jsx)("img",{width:"1443",alt:"Screenshot 2023-04-14 at 7 17 44 PM",src:"https://user-images.githubusercontent.com/25267873/232178430-1e870571-26b7-4513-9d14-5ef2e97090b2.png"}),"\n",(0,a.jsx)(n.p,{children:'Note that the "Download" button allows you to download the example file and share with co-workers / colleagues.'}),"\n",(0,a.jsx)(n.h3,{id:"openbb-terminal-3",children:"OpenBB Terminal"}),"\n",(0,a.jsx)(n.p,{children:"Once you've logged in to your OpenBB Terminal account, your routines will automatically sync and become available for use."}),"\n",(0,a.jsxs)(n.p,{children:["To see the available routines from the Hub, use the ",(0,a.jsx)(n.code,{children:"/account/list"})," command. This command will display both the default OpenBB routines and your personal routines, as shown in the image below:"]}),"\n",(0,a.jsx)("img",{width:"1582",alt:"Screenshot 2023-04-14 at 7 22 14 PM",src:"https://user-images.githubusercontent.com/25267873/232178585-71b9de95-707f-4374-91c8-83e6622f6829.png"}),"\n",(0,a.jsxs)(n.p,{children:["To run a routine, select ",(0,a.jsx)(n.code,{children:"exe --file"})," from the main menu and the available routines will pop up as auto-completions. For example:"]}),"\n",(0,a.jsx)("img",{width:"576",alt:"Screenshot 2023-04-14 at 7 23 16 PM",src:"https://user-images.githubusercontent.com/25267873/232178635-4626c686-dafb-40c0-911f-60a1d3f8fd13.png"}),"\n",(0,a.jsxs)(n.p,{children:["If you'd like to download a specific routine or upload a locally created .openbb file file, you can use the ",(0,a.jsx)(n.code,{children:"account/upload"})," and ",(0,a.jsx)(n.code,{children:"account/download"})," commands."]}),"\n",(0,a.jsx)(n.p,{children:"You can also delete your locally stored routines, which will then be synced with the OpenBB Hub."}),"\n",(0,a.jsx)(n.h2,{id:"personal-access-tokens",children:"Personal Access Tokens"}),"\n",(0,a.jsx)(n.p,{children:"Setting up API keys on the OpenBB Hub has an additional benefit: it allows you to generate a personal access token (PAT) that can be used with the OpenBB SDK. With this token, you can programmatically access the data that powers the OpenBB Terminal, without the need to add individual API keys for each user."}),"\n",(0,a.jsx)(n.h3,{id:"openbb-hub-4",children:"OpenBB Hub"}),"\n",(0,a.jsxs)(n.p,{children:["If you go to the bottom of ",(0,a.jsx)(n.a,{href:"https://my.openbb.co/app/sdk/api-keys",children:"this page"})," you can find your OpenBB PAT. This is the API Keys that will be used on the OpenBB SDK and this is the same as the ones set in the OpenBB Terminal."]}),"\n",(0,a.jsx)("img",{width:"1427",alt:"Screenshot 2023-04-14 at 10 37 44 PM",src:"https://user-images.githubusercontent.com/25267873/232185425-672a7eb0-e4ba-4863-8dbb-dd951afd25cc.png"}),"\n",(0,a.jsx)(n.p,{children:"The bottom of that page also allows to regenerate the PAT."}),"\n",(0,a.jsx)(n.p,{children:"In addition you can copy-paste the following section"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.login(token = "<YOUR TOKEN HERE>")\n'})}),"\n",(0,a.jsx)(n.h3,{id:"openbb-terminal-4",children:"OpenBB Terminal"}),"\n",(0,a.jsxs)(n.p,{children:["Although the PAT is not meant to be used in the OpenBB Terminal, you can still manage it in the ",(0,a.jsx)(n.code,{children:"/account"})," menu through the ",(0,a.jsx)(n.code,{children:"generate"})," command. This will delete any previously issued tokens."]}),"\n",(0,a.jsx)(n.p,{children:"Once you have generated a token, an SDK session can be initiated anywhere utilizing:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.login(token = "<YOUR TOKEN HERE>")\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note that you can also access your account utilizing your credentials, e.g."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"openbb.login(email = 'didier.lopes@openbb.finance', password = '****')\n"})}),"\n",(0,a.jsx)(n.p,{children:"in addition, if you want to store that information locally you can do so by setting this additional flag."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"keep_session = True\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var a=t(5260),s=t(74848);function i(e){let{title:n}=e;return(0,s.jsx)(a.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(96540);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);