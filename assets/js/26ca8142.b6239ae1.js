"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74712],{22830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var a=t(74848),i=t(28453),s=t(94331),o=t(69396);const r={title:"AskOBB Feature",sidebar_position:5,description:"This documentation page presents the innovative use of language learning machines (LLMs), in particular, the LlamaIndex in transforming natural language queries into commands in OpenBB Terminal.",keywords:["AskOBB","natural language query","LLMs","LlamaIndex","BloombergGPT"]},d=void 0,l={id:"terminal/usage/askobb-feature",title:"AskOBB Feature",description:"This documentation page presents the innovative use of language learning machines (LLMs), in particular, the LlamaIndex in transforming natural language queries into commands in OpenBB Terminal.",source:"@site/content/terminal/usage/askobb-feature.md",sourceDirName:"terminal/usage",slug:"/terminal/usage/askobb-feature",permalink:"/terminal/usage/askobb-feature",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/askobb-feature.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,sidebarPosition:5,frontMatter:{title:"AskOBB Feature",sidebar_position:5,description:"This documentation page presents the innovative use of language learning machines (LLMs), in particular, the LlamaIndex in transforming natural language queries into commands in OpenBB Terminal.",keywords:["AskOBB","natural language query","LLMs","LlamaIndex","BloombergGPT"]},sidebar:"tutorialSidebar",previous:{title:"Community Routines",permalink:"/terminal/usage/routines/community-routines"},next:{title:"Hub Synchronization",permalink:"/terminal/usage/hub"}},c={},h=[{value:"Background",id:"background",level:2},{value:"Solution: LlamaIndex",id:"solution-llamaindex",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"AskOBB Feature - Usage | OpenBB Terminal Docs"}),"\n","\n",(0,a.jsx)(o.A,{youtubeLink:"https://www.youtube.com/embed/GPMFO08115s?si=D86B3sl8g9-FTKtI",videoLegend:"Short introduction on leveraging natural language for data retrieval using AskOBB"}),"\n",(0,a.jsx)(n.p,{children:"AskOBB allows users to do a query using natural language and we convert it directly into a command. This makes it easier for newcomers to get started with the OpenBB Terminal."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/1ba1e556-150f-470c-9745-2dd7b536e5ba",alt:"image"})}),"\n",(0,a.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,a.jsxs)(n.p,{children:["With the rise of LLMs, it was only a matter of time before LlamaIndex became prevalent in the finance space. While emergent technologies like ",(0,a.jsx)(n.a,{href:"https://www.bloomberg.com/company/press/bloomberggpt-50-billion-parameter-llm-tuned-finance/",children:"BloombergGPT"})," is trained on financial information and financial documents, OpenBB is taking a different approach. With over 900 different commands accessing data from almost 100 different sources, we wanted to map natural language to these to reduce the barrier of entry to newcomers."]}),"\n",(0,a.jsxs)(n.p,{children:["While this may not sound like a complex problem, as we just need to classify natural language queries into one of 900 possible options, there are quite a few intricacies. Among these is the tree-type structure of OpenBB terminal commands. For example, if you want to view a candle chart looking at the so-called \u201cGolden Cross\u201d (where a 50 and a 200-day EMA cross), you would use the command ",(0,a.jsx)(n.code,{children:"stocks/ta/ema -l 50,200"}),". However, this requires that we have some previous context - i.e. the data should be previously selected. So the full command to use would actually be ",(0,a.jsx)(n.code,{children:"stocks/load <TICKER>/ta/ema -l 50,200"})," with ",(0,a.jsx)(n.code,{children:"<TICKER>"})," being the data of interest."]}),"\n",(0,a.jsxs)(n.p,{children:["Another intricacy is that there are many different asset classes covered, which have their individual ",(0,a.jsx)(n.code,{children:"load"})," commands. Loading in a cryptocurrency, such as Bitcoin, is a different command than loading an equity like AAPL. This means that the language model needs to understand the difference in mapping ",(0,a.jsx)(n.code,{children:"load bitcoin"})," to ",(0,a.jsx)(n.code,{children:"crypto/load btc"})," and ",(0,a.jsx)(n.code,{children:"load AAPL"})," to ",(0,a.jsx)(n.code,{children:"stocks/load AAPL"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"solution-llamaindex",children:"Solution: LlamaIndex"}),"\n",(0,a.jsx)(n.p,{children:"This is where LlamaIndex comes into play. Each of our OpenBB Terminal commands has an associated usage string in the form of a typical CLI help argument. An example for the stocks load command:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/fcdcdc22-1c80-4f49-9171-8033c607d0b7",alt:"image"})}),"\n",(0,a.jsx)(n.p,{children:"You can find this on our docs here: OpenBB Docs."}),"\n",(0,a.jsxs)(n.p,{children:["If this help string is provided to an LLM, we can ask it for a command based on the context. So what we did was copy all of these command helps into txt files. In order to help out the model, we provided a few examples of each command. In our ",(0,a.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/d3126b414aac77fe4086661214535975ac55ba95/openbb_terminal/miscellaneous/gpt_index/data/stocks_load.txt",children:"stocks load file"}),", we add the following examples:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/10cae260-8fea-41d0-adb4-13a4b8f62ca8",alt:"image"})}),"\n",(0,a.jsx)(n.p,{children:"This process is repeated for EVERY function in the OpenBB Terminal. Once we have these, we can pass them to a Vector Index in two lines of code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'documents = SimpleDirectoryReader(GPT_INDEX_DIRECTORY / "data/").load_data()\nindex = VectorStoreIndex.from_documents(documents, service_context=service_context)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["What this Vector Index does is load in each file and create an embedding using the OpenAI embeddings API. In essence, this means each file is associated with a vector (a series of numbers such as ",(0,a.jsx)(n.code,{children:"[0.001, 0.002, .2, ..., 0.03]"}),"), and these are all saved in memory through LlamaIndex."]}),"\n",(0,a.jsx)(n.p,{children:"Now that we have the context of our documentation and examples saved, it is time to query the LLM. For AskOBB, we are using OpenAI\u2019s gpt3.5-turbo model by default, but allow users to specify others (e.g. GPT-4). We provide a prompt string to the query, indicating to only return a command and to follow certain rules when querying. The prompt string we provide is:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/c0df6589-e22f-46b0-a272-6fa7f6762ff3",alt:"image"})}),"\n",(0,a.jsx)(n.p,{children:"To get the LLM response, it is just another 2 lines of code with LlamaIndex:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"query_engine = index.as_query_engine() response = query_engine.query(prompt_string)\n"})}),"\n",(0,a.jsx)(n.p,{children:"And that is all we need!"}),"\n",(0,a.jsx)(n.p,{children:"What this process does is take our previously defined Vector Index, which stores all the relevant embeddings, and it creates an embedding from our prompt, which includes the query. To determine which txt file to use, the Vector Index finds the index with the \u201cclosest\u201d embedding and provides that as context to the LLM."}),"\n",(0,a.jsx)(o.A,{youtubeLink:"https://www.youtube.com/embed/s8ZNLqi9hzc?si=u0tr6471z32jFzu0",videoLegend:"Watch LlamaIndex Webinar: LLMs for Investment Research"})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(5260),i=t(74848);function s(e){let{title:n}=e;return(0,i.jsx)(a.A,{children:(0,i.jsx)("title",{children:n})})}},69396:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(96540),i=t(23174),s=t(74848);function o(e){let{youtubeLink:n,videoLegend:t="Tutorial video"}=e;const[o,r]=(0,a.useState)(!0);return(0,s.jsxs)("div",{style:{textAlign:"center"},children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,s.jsx)("p",{children:t}),(0,s.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,s.jsx)(i.Toggle,{isOn:o,handleChange:()=>r(!o)})})]}),o&&(0,s.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,s.jsx)("iframe",{id:n,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,n,t)=>{e.exports=t(49793)},49793:(e,n,t)=>{var a,i=(a=t(96540))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),n.Toggle=function(e){return i.createElement("label",{"data-testid":"Toggle-label",className:"switch"},i.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),i.createElement("span",{className:"slider round"}))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(96540);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);