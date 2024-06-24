"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48459],{98627:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(74848),o=t(28453);const s={title:"REST API",sidebar_position:6,description:"Learn how to configure and deploy the OpenBB Platform's REST API using FastAPI, including detailed guidelines on API documentation, authorization, CORS settings, and server configurations.",keywords:["tutorial","OpenBB Platform","REST API","FastAPI","API Documentation","API Authorization","CORS Configuration","Server Settings","API Deployment","Swagger Documentation","Basic Auth","API Security","System Settings JSON","API Keys","Public Internet Deployment","Production Deployment","API Endpoints","Uvicorn Command","Base64 Encoding","HTTP Headers","Python Requests","Local Network API","OpenAPI JSON"]},r=void 0,a={id:"platform/user_guides/rest_api",title:"REST API",description:"Learn how to configure and deploy the OpenBB Platform's REST API using FastAPI, including detailed guidelines on API documentation, authorization, CORS settings, and server configurations.",source:"@site/content/platform/user_guides/rest_api.mdx",sourceDirName:"platform/user_guides",slug:"/platform/user_guides/rest_api",permalink:"/docs/platform/user_guides/rest_api",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/user_guides/rest_api.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719227954e3,sidebarPosition:6,frontMatter:{title:"REST API",sidebar_position:6,description:"Learn how to configure and deploy the OpenBB Platform's REST API using FastAPI, including detailed guidelines on API documentation, authorization, CORS settings, and server configurations.",keywords:["tutorial","OpenBB Platform","REST API","FastAPI","API Documentation","API Authorization","CORS Configuration","Server Settings","API Deployment","Swagger Documentation","Basic Auth","API Security","System Settings JSON","API Keys","Public Internet Deployment","Production Deployment","API Endpoints","Uvicorn Command","Base64 Encoding","HTTP Headers","Python Requests","Local Network API","OpenAPI JSON"]},sidebar:"tutorialSidebar",previous:{title:"Metadata",permalink:"/docs/platform/user_guides/metadata"},next:{title:"Build New Provider Extension",permalink:"/docs/platform/user_guides/add_data_provider_extension"}},c={},l=[{value:"API Documentation",id:"api-documentation",level:2},{value:"Data API Keys",id:"data-api-keys",level:2},{value:"API Authorization",id:"api-authorization",level:2},{value:"Advanced API Settings",id:"advanced-api-settings",level:2},{value:"CORS Configuration",id:"cors-configuration",level:2},{value:"Servers List",id:"servers-list",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The OpenBB Platform comes with a FastAPI application that serves platform commands as REST API endpoints."}),"\n",(0,i.jsx)(n.p,{children:"Activate the Python environment and then start the server from a Terminal command line with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"uvicorn openbb_core.api.rest_api:app\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can add arguments that are supported by ",(0,i.jsx)(n.code,{children:"uvicorn"})," to customize how the API is launched.\nFor example this command will be useful if you are developing. It will launch the API in a way it's reachable on your local network and reload every time the code changes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"uvicorn openbb_core.api.rest_api:app --host 0.0.0.0 --port 8000 --reload\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about how you can run the API in different scenarios refer to ",(0,i.jsx)(n.a,{href:"https://www.uvicorn.org/#command-line-options",children:"uvicorn's documentation"})]}),"\n",(0,i.jsx)(n.h2,{id:"api-documentation",children:"API Documentation"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(n.p,{children:["The Fast API app comes with a swagger documentation page. When running the API locally, navigate to ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8000/docs",children:"http://127.0.0.1:8000/docs"}),"."]}),(0,i.jsx)(n.p,{children:"The API Docs provide interactive descriptions of all available endpoints that you can call right from the documentation web page."})]}),"\n",(0,i.jsx)(n.h2,{id:"data-api-keys",children:"Data API Keys"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(n.p,{children:["The API keys to your data providers are loaded from the ",(0,i.jsx)(n.code,{children:"~/.openbb_platform/user_settings.json"})," file."]}),(0,i.jsxs)(n.p,{children:["You can find more information about the structure of the file and environment variables in the ",(0,i.jsx)(n.a,{href:"api_keys#local-environment",children:"Local Environment"})," section."]})]}),"\n",(0,i.jsx)(n.h2,{id:"api-authorization",children:"API Authorization"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(n.p,{children:["By default, no authorization is required. Basic authorization can be enabled with environment variables. In the ",(0,i.jsx)(n.code,{children:"~/.openbb_platform"})," folder, next to the ",(0,i.jsx)(n.code,{children:"user_settings.json"}),", create a new file, ",(0,i.jsx)(n.code,{children:".env"}),", if it does not yet exist. Set your Basic Auth credentials."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-.env",children:'OPENBB_API_AUTH="True"\nOPENBB_API_USERNAME="my_email"\nOPENBB_API_PASSWORD="my_password"\n'})}),(0,i.jsxs)(n.p,{children:["The application will expect a header that contains username and password in the form of ",(0,i.jsx)(n.code,{children:"Basic <username:password>"}),', where "username',":password",'" is encoded in Base64. Pass this in every request to the API inside the headers "Authorization" field.']}),(0,i.jsx)(n.p,{children:"Here is an example of calling the API that has Basic Authorization enabled from python."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import base64\nimport requests\n\nmsg = "some_user:some_pass"\nmsg_bytes = msg.encode(\'ascii\')\nbase64_bytes = base64.b64encode(msg_bytes)\nbase64_msg = base64_bytes.decode(\'ascii\')\n\n\nsymbol="SPY"\nurl = f"http://127.0.0.1:8000/api/v1/equity/price/quote?provider=intrinio&symbol={symbol}&source=intrinio_mx"\nheaders = {"accept": "application/json", "Authorization": f"Basic {base64_msg}"}\n\nresponse = requests.get(url=url, headers=headers)\n\nresponse.json()\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"advanced-api-settings",children:"Advanced API Settings"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)(n.p,{children:'When deploying the API to the public internet, it\'s crucial to configure it in a way you ensure the application functions correctly and securely. Two critical aspects to consider are Cross-Origin Resource Sharing (CORS) and the configuration of the "servers" list.'}),(0,i.jsxs)(n.p,{children:["The configuration for these settings is managed through the ",(0,i.jsx)(n.code,{children:"system_settings.json"})," file, which should be located in the same directory as your ",(0,i.jsx)(n.code,{children:"user_settings.json"}),". This JSON file allows you to specify various settings that affect the behavior of the API. Here's an example structure of the ",(0,i.jsx)(n.code,{children:"system_settings.json"})," file:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "api_settings": {\n        "version": "1",\n        "title": "OpenBB Platform API",\n        "description": "This is the OpenBB Platform API.",\n        "terms_of_service": "http://example.com/terms/",\n        "contact_name": "OpenBB Team",\n        "contact_url": "https://openbb.co",\n        "contact_email": "hello@openbb.co",\n        "license_name": "MIT",\n        "license_url": "https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/LICENSE",\n        "servers": [\n            {\n                "url": "http://localhost:8000",\n                "description": "Local OpenBB development server"\n            }\n        ],\n        "cors": {\n            "allow_origins": [\n                "*"\n            ],\n            "allow_methods": [\n                "*"\n            ],\n            "allow_headers": [\n                "*"\n            ]\n        },\n        "prefix": "/api/v1"\n    }\n}\n'})}),(0,i.jsx)(n.h2,{id:"cors-configuration",children:"CORS Configuration"}),(0,i.jsx)(n.p,{children:"The cors section within the api_settings is particularly important for web applications. It defines the rules for which external domains are allowed to access your API."}),(0,i.jsx)(n.p,{children:'In the example above, the settings are permissive ("*" for origins, methods, and headers), which means any external domain can request resources from your API. This setting might be suitable for development, but when deploying to public internet, you should specify the exact domains, methods, and headers to tighten security.'}),(0,i.jsx)(n.h2,{id:"servers-list",children:"Servers List"}),(0,i.jsx)(n.p,{children:"The servers array is used to specify the different environments where your API can be accessed."}),(0,i.jsx)(n.p,{children:"In the example, there is only one server defined, which is the local development server. For deployment to public internet, you would add an entry for the public server URL and any other environments where your API is accessible."})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);