"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90708],{55268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(74848),i=t(28453),o=t(94331);const l={title:"Create New Provider Extension",sidebar_position:9,description:"This page will walk through creating a new OpenBB provider extension from scratch. By the end, you will have the shell structure for holding models that connect to a router through the provider interface.",keywords:["OpenBB Platform","Open source","community","code","provider","openbb-provider","data","extension","how-to","new","template","quickstart"]},d=void 0,s={id:"platform/getting_started/create_new_provider_extension",title:"Create New Provider Extension",description:"This page will walk through creating a new OpenBB provider extension from scratch. By the end, you will have the shell structure for holding models that connect to a router through the provider interface.",source:"@site/content/platform/getting_started/create_new_provider_extension.mdx",sourceDirName:"platform/getting_started",slug:"/platform/getting_started/create_new_provider_extension",permalink:"/platform/getting_started/create_new_provider_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/getting_started/create_new_provider_extension.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719224434e3,sidebarPosition:9,frontMatter:{title:"Create New Provider Extension",sidebar_position:9,description:"This page will walk through creating a new OpenBB provider extension from scratch. By the end, you will have the shell structure for holding models that connect to a router through the provider interface.",keywords:["OpenBB Platform","Open source","community","code","provider","openbb-provider","data","extension","how-to","new","template","quickstart"]},sidebar:"tutorialSidebar",previous:{title:"Create New Router Extension",permalink:"/platform/getting_started/create_new_router_extension"},next:{title:"Fetch Data From a New Provider",permalink:"/platform/getting_started/map_a_provider_to_a_route"}},a={},c=[{value:"Preparation",id:"preparation",level:2},{value:"Create Project Folder",id:"create-project-folder",level:3},{value:"Create <code>__init__.py</code> File",id:"create-__init__py-file",level:3},{value:"Create <code>README.md</code> File",id:"create-readmemd-file",level:3},{value:"Create <code>pyproject.toml</code> File",id:"create-pyprojecttoml-file",level:3},{value:"Create Sub-Folder For Code",id:"create-sub-folder-for-code",level:3},{value:"Create <code>__init__.py</code> File",id:"create-__init__py-file-1",level:3},{value:"Create <code>models</code> Sub-Folder",id:"create-models-sub-folder",level:3},{value:"Create <code>__init__.py</code> File",id:"create-__init__py-file-2",level:3},{value:"Build Lock File",id:"build-lock-file",level:2},{value:"Install Extension In Editable Mode",id:"install-extension-in-editable-mode",level:2},{value:"Build Static Assets",id:"build-static-assets",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{title:"Quick Start - New Provider Extension - How-To - Development | OpenBB Platform Docs"}),"\n",(0,r.jsx)(n.p,{children:"This page will walk through creating a new OpenBB Provider Extension from scratch. By the end, you will have the shell structure for holding models that connect to the Router through the Provider Interface."}),"\n",(0,r.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,r.jsx)(n.h3,{id:"create-project-folder",children:"Create Project Folder"}),"\n",(0,r.jsxs)(n.p,{children:["Create a folder for the project. For this example, we will name the folder, ",(0,r.jsx)(n.code,{children:"empty_provider"}),"."]}),"\n",(0,r.jsxs)(n.h3,{id:"create-__init__py-file",children:["Create ",(0,r.jsx)(n.code,{children:"__init__.py"})," File"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Inside the new folder, create a new file called, ",(0,r.jsx)(n.code,{children:"__init__.py"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Open the file and add a docstring in the first line, and leave an empty line below it."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'"""Empty OpenBB Provider."""\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"create-readmemd-file",children:["Create ",(0,r.jsx)(n.code,{children:"README.md"})," File"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the same location, create a new file called, ",(0,r.jsx)(n.code,{children:"README.md"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Open the file, then add a title and any other high-level information about the extension."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"# Empty OpenBB Provider Extension\n\nAn example Provider extension for the OpenBB Platform.\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"create-pyprojecttoml-file",children:["Create ",(0,r.jsx)(n.code,{children:"pyproject.toml"})," File"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the same location, create a new file called, ",(0,r.jsx)(n.code,{children:"pyproject.toml"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[tool.poetry]\nname = "openbb-empty-provider"\nversion = "0.0.1"\ndescription = "Empty provider extension for OpenBB"\nauthors = ["OpenBB Team <hello@openbb.co>"]\nreadme = "README.md"\npackages = [{ include = "openbb_empty_provider" }]\n\n[tool.poetry.dependencies]\npython = ">=3.8,<3.12"\nopenbb = "^4.1.7"\n\n[build-system]\nrequires = ["poetry-core"]\nbuild-backend = "poetry.core.masonry.api"\n\n[tool.poetry.plugins."openbb_provider_extension"]\nempty = "openbb_empty_provider:empty_provider"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"create-sub-folder-for-code",children:"Create Sub-Folder For Code"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a sub-folder that begins with ",(0,r.jsx)(n.code,{children:"openbb"})," and is followed by the name of the project folder, ",(0,r.jsx)(n.code,{children:"openbb_empty_provider"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"create-__init__py-file-1",children:["Create ",(0,r.jsx)(n.code,{children:"__init__.py"})," File"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the new sub-folder, create a new file called, ",(0,r.jsx)(n.code,{children:"__init__.py"}),". This is where all models are mapped to the Provider interface."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'"""Empty Provider Module."""\n\nfrom openbb_core.provider.abstract.provider import Provider\n\nempty_provider = Provider(\n    name="empty", # This should be the same as the assigned name at the bottom of the pyproject.toml file\n    website="http://empty.io",\n    description="""The empty provider is a supplier of promises.""",\n    #credentials=["api_key"], # uncomment to require credentials\n    fetcher_dict={\n    #    "SomeModel" : EmptySomeModelFetcher  # Map Fetchers to the Router here.\n    },\n)\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"create-models-sub-folder",children:["Create ",(0,r.jsx)(n.code,{children:"models"})," Sub-Folder"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the same location as the file just saved, create a new folder called, ",(0,r.jsx)(n.code,{children:"models"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"create-__init__py-file-2",children:["Create ",(0,r.jsx)(n.code,{children:"__init__.py"})," File"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In the new ",(0,r.jsx)(n.code,{children:"models"})," folder, make a new file called, ",(0,r.jsx)(n.code,{children:"__init__.py"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Open the file and add a doctstring to the top line, followed by an empty line."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'"""Empty Provider Models."""\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"build-lock-file",children:"Build Lock File"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The Python environment should have ",(0,r.jsx)(n.code,{children:"toml"})," and ",(0,r.jsx)(n.code,{children:"poetry"})," installed as packages from PyPI."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"pip install toml poetry\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate into the main folder, and with the environment active, enter:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"poetry lock\n"})}),"\n",(0,r.jsx)(n.h2,{id:"install-extension-in-editable-mode",children:"Install Extension In Editable Mode"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"pip install -e .\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The installation can be verified, and it should display a path similar to the one below.\nEverything else is installed under the ",(0,r.jsx)(n.code,{children:"site-packages"})," of the environment."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"pip list | grep openbb\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"openbb                  4.1.7\nopenbb-benzinga         1.1.5\nopenbb-commodity        1.0.4\nopenbb-core             1.1.6\nopenbb-crypto           1.1.5\nopenbb-currency         1.1.5\nopenbb-derivatives      1.1.5\nopenbb-economy          1.1.5\nopenbb-empty-provider   0.0.1        /Users/username/path_to_created_folder/empty_provider\n...\n"})}),"\n",(0,r.jsx)(n.h2,{id:"build-static-assets",children:"Build Static Assets"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:'python -c "import openbb; openbb.build()"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The installation can be verified by inspecting ",(0,r.jsx)(n.code,{children:"obb.reference"}),". Start a Python session and import the OpenBB Platform."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from openbb import obb\n\nobb.reference["info"]["extensions"]["openbb_provider_extension"]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The list should include the newly created and installed extension, ",(0,r.jsx)(n.code,{children:"empty@0.0.1"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"This process created, built, and installed a new OpenBB Platform Provider extension from scratch."}),"\n",(0,r.jsx)(n.p,{children:"The next step is to create the models for connecting with the Provider Interface and Router."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(5260),i=t(74848);function o(e){let{title:n}=e;return(0,i.jsx)(r.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var r=t(96540);const i={},o=r.createContext(i);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);