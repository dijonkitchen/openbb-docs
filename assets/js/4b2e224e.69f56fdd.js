"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31579],{47360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(74848),s=n(28453),o=n(94331);const r={title:"Tests",sidebar_position:11,description:"This section provides an in-depth look at the Quality Assurance (QA) process in the OpenBB Platform. It covers the use of QA tools for testing extensions, creation of unit and integration tests, and the importance of maintaining a short import time for the package.",keywords:["OpenBB QA process","Unit and integration tests","QA tools","Extension testing","Import time optimization"]},a=void 0,l={id:"platform/developer_guide/tests",title:"Tests",description:"This section provides an in-depth look at the Quality Assurance (QA) process in the OpenBB Platform. It covers the use of QA tools for testing extensions, creation of unit and integration tests, and the importance of maintaining a short import time for the package.",source:"@site/content/platform/developer_guide/tests.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/tests",permalink:"/platform/developer_guide/tests",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/tests.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,sidebarPosition:11,frontMatter:{title:"Tests",sidebar_position:11,description:"This section provides an in-depth look at the Quality Assurance (QA) process in the OpenBB Platform. It covers the use of QA tools for testing extensions, creation of unit and integration tests, and the importance of maintaining a short import time for the package.",keywords:["OpenBB QA process","Unit and integration tests","QA tools","Extension testing","Import time optimization"]},sidebar:"tutorialSidebar",previous:{title:"Deprecating Endpoints",permalink:"/platform/developer_guide/deprecating_endpoints"},next:{title:"Commitment of Traders",permalink:"/platform/developer_guide/commitment_of_traders"}},c={},d=[{value:"Unit tests",id:"unit-tests",level:2},{value:"Integration tests",id:"integration-tests",level:2},{value:"Import time",id:"import-time",level:2},{value:"Known caveats",id:"known-caveats",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{title:"Tests - Contributor Guidelines - Development | OpenBB Platform Docs"}),"\n",(0,i.jsx)(t.p,{children:"We are strong believers in the Quality Assurance (QA) process and we want to make sure that all the extensions that are added to the OpenBB Platform are of high quality."}),"\n",(0,i.jsx)(t.p,{children:"To ensure this, we have a set of QA tools that you can use to test your work."}),"\n",(0,i.jsx)(t.p,{children:"Primarily, we have tools that semi-automate the creation of unit and integration tests."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"The QA tools are still in development and we are constantly improving them."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"unit-tests",children:"Unit tests"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)(t.p,{children:["Each ",(0,i.jsx)(t.code,{children:"Fetcher"})," comes equipped with a ",(0,i.jsx)(t.code,{children:"test"})," method that will ensure it is implemented correctly, that it is returning the expected data, that all types are correct, and that the data is valid."]}),(0,i.jsx)(t.p,{children:"To create unit tests for your Fetchers, you can run the following command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"python openbb_platform/providers/tests/utils/unit_tests_generator.py\n"})}),(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Run this file from the root of the repository, and the ",(0,i.jsx)(t.code,{children:"tests"})," folder must exist, in order to generate the tests."]}),"\n"]}),(0,i.jsx)(t.p,{children:"The automatic unit test generation will add unit tests for all the fetchers available in a given provider."}),(0,i.jsx)(t.p,{children:"To record the unit tests, you can run the following command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pytest <path_to_the_unit_test_file> --record=all\n"})}),(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Sometimes manual intervention is needed. For example, adjusting out-of-top level imports or adding specific arguments for a given fetcher."})})]}),"\n",(0,i.jsx)(t.h2,{id:"integration-tests",children:"Integration tests"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(t.p,{children:"The integration tests are a bit more complex than the unit tests, as we want to test both the Python interface and the API interface. For this, we have two scripts that will help you generate the integration tests."}),(0,i.jsx)(t.p,{children:"To generate the integration tests for the Python interface, you can run the following command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"python openbb_platform/extensions/tests/utils/integration_tests_generator.py\n"})}),(0,i.jsx)(t.p,{children:"To generate the integration tests for the API interface, you can run the following command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"python openbb_platform/extensions/tests/utils/integration_tests_api_generator.py\n"})}),(0,i.jsx)(t.p,{children:"When testing the API interface, you'll need to run the OpenBB Platform locally before running the tests. To do so, you can run the following command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"uvicorn openbb_core.api.rest_api:app --host 0.0.0.0 --port 8000 --reload\n"})}),(0,i.jsx)(t.p,{children:"These automated tests are a great way to reduce the amount of code you need to write, but they are not a replacement for manual testing and might require tweaking. That's why we have unit tests that test the generated integration tests to ensure they cover all providers and parameters."}),(0,i.jsx)(t.p,{children:"To run the tests we can do:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Unit tests only:"}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'pytest openbb_platform -m "not integration"\n'})}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Integration tests only:"}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pytest openbb_platform -m integration\n"})}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Both integration and unit tests:"}),"\n"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pytest openbb_platform\n"})})]}),"\n",(0,i.jsx)(t.h2,{id:"import-time",children:"Import time"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsxs)(t.p,{children:["We aim to have a short import time for the package. To measure that we use ",(0,i.jsx)(t.code,{children:"tuna"}),"."]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://pypi.org/project/tuna/",children:"https://pypi.org/project/tuna/"})}),"\n"]}),(0,i.jsxs)(t.p,{children:["To visualize the import time breakdown by module and find potential bottlenecks, run the\nfollowing commands from ",(0,i.jsx)(t.code,{children:"openbb_platform"})," directory:"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pip install tuna\npython -X importtime openbb/__init__.py 2> import.log\ntuna import.log\n"})})]}),"\n",(0,i.jsx)(t.h2,{id:"known-caveats",children:"Known caveats"}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(t.p,{children:"When using the OpenBB QA Framework it is important to be aware of the following caveats:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The tests are semi-automated and might require manual intervention. For example, adjusting out-of-top level imports or changing specific arguments for a given payload."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The integration tests are more complex and if your newly added provider integration is already covered by the\nintegration tests from previous commands or providers, you will need to manually inject the payload for the new\nprovider."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"In the integration test parametrized payload, the first item is always the set of standard parameters. Every\nconsecutive item is a set of parameters for a specific provider with the standard parameters included."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The integration tests require you to be explicit, by using all of the standard parameters and provider-specific\nparameters in the payload. If you want to exclude a parameter, you can use ",(0,i.jsx)(t.code,{children:"None"})," as its value."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The integration tests require you to be explicit by specifying the ",(0,i.jsx)(t.code,{children:"provider"})," parameter in provider-specific\npayloads."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"When recording unit tests, you might run into issues with the cache that is tied to your specific provider and present\non your local machine. You will know that this is the case if your tests pass locally, but fail on the CI. To fix this,\nyou can delete the cache file from your local machine and re-record the tests."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Note that the cache is likely located here:\nWindows: ",(0,i.jsx)(t.code,{children:"C:\\Users\\user\\AppData\\Local\\"}),"\nLinux: ",(0,i.jsx)(t.code,{children:"/home/user/.cache/"}),"\nMac: ",(0,i.jsx)(t.code,{children:"/Users/user/Library/Caches"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Some providers (we are aware only of YFinance so far) do an additional request when used from the US region. As our CI\nis running from the US region, this might cause the tests to fail. A workaround for this is to use a VPN to record the\ntests from a different region."}),"\n"]}),"\n"]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var i=n(5260),s=n(74848);function o(e){let{title:t}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);