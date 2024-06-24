"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33674],{28127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var s=r(74848),d=r(28453),n=r(18228),i=r(19365);const l={title:"Price Target",description:"Get analyst price targets by company"},a=void 0,c={id:"platform/data_models/PriceTarget",title:"Price Target",description:"Get analyst price targets by company",source:"@site/content/platform/data_models/PriceTarget.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/PriceTarget",permalink:"/platform/data_models/PriceTarget",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/data_models/PriceTarget.md",tags:[],version:"current",frontMatter:{title:"Price Target",description:"Get analyst price targets by company"},sidebar:"tutorialSidebar",previous:{title:"Price Performance",permalink:"/platform/data_models/PricePerformance"},next:{title:"Price Target Consensus",permalink:"/platform/data_models/PriceTargetConsensus"}},h={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,s.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Model name"}),(0,s.jsx)(t.th,{children:"Parameters class"}),(0,s.jsx)(t.th,{children:"Data class"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"PriceTarget"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"PriceTargetQueryParams"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"PriceTargetData"})})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.price_target import (\nPriceTargetData,\nPriceTargetQueryParams,\n)\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsx)(i.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): benzinga, finviz, fmp."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of data entries to return."}),(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['benzinga', 'finviz', 'fmp']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: b, e, n, z, i, n, g, a."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(i.A,{value:"benzinga",label:"benzinga",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): benzinga, finviz, fmp."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of data entries to return."}),(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['benzinga', 'finviz', 'fmp']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: b, e, n, z, i, n, g, a."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"page"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Page offset. For optimization, performance and technical reasons, page offsets are limited from 0 - 100000. Limit the query results by other parameters such as date. Used in conjunction with the limit and date parameters."}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"Date for calendar data, shorthand for date_from and date_to."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"start_date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"end_date"}),(0,s.jsx)(t.td,{children:"Union[date, str]"}),(0,s.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"updated"}),(0,s.jsx)(t.td,{children:"Union[date, int]"}),(0,s.jsx)(t.td,{children:"Records last Updated Unix timestamp (UTC). This will force the sort order to be Greater Than or Equal to the timestamp indicated. The date can be a date string or a Unix timestamp. The date string must be in the format of YYYY-MM-DD."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"importance"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Importance level to filter by. Uses Greater Than or Equal To the importance indicated"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"action"}),(0,s.jsx)(t.td,{children:"Literal['downgrades', 'maintains', 'reinstates', 'reiterates', 'upgrades', 'assumes', 'initiates', 'terminates', 'removes', 'suspends', 'firm_dissolved']"}),(0,s.jsx)(t.td,{children:"Filter by a specific action_company."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"analyst_ids"}),(0,s.jsx)(t.td,{children:"Union[Union[List[str], str], List[Union[List[str], str]]]"}),(0,s.jsx)(t.td,{children:"Comma-separated list of analyst (person) IDs. Omitting will bring back all available analysts. Multiple items allowed for provider(s): benzinga."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"firm_ids"}),(0,s.jsx)(t.td,{children:"Union[Union[List[str], str], List[Union[List[str], str]]]"}),(0,s.jsx)(t.td,{children:"Comma-separated list of firm IDs. Multiple items allowed for provider(s): benzinga."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fields"}),(0,s.jsx)(t.td,{children:"Union[Union[List[str], str], List[Union[List[str], str]]]"}),(0,s.jsxs)(t.td,{children:["Comma-separated list of fields to include in the response. See ",(0,s.jsx)(t.a,{href:"https://docs.benzinga.io/benzinga-apis/calendar/get-ratings",children:"https://docs.benzinga.io/benzinga-apis/calendar/get-ratings"})," to learn about the available fields. Multiple items allowed for provider(s): benzinga."]}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(i.A,{value:"finviz",label:"finviz",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): benzinga, finviz, fmp."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of data entries to return."}),(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['benzinga', 'finviz', 'fmp']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: b, e, n, z, i, n, g, a."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})}),(0,s.jsx)(i.A,{value:"fmp",label:"fmp",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,s.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): benzinga, finviz, fmp."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"The number of data entries to return."}),(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provider"}),(0,s.jsx)(t.td,{children:"Literal['benzinga', 'finviz', 'fmp']"}),(0,s.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: b, e, n, z, i, n, g, a."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"with_grade"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Include upgrades and downgrades in the response."}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(n.A,{children:[(0,s.jsx)(i.A,{value:"standard",label:"standard",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"published_date"}),(0,s.jsx)(t.td,{children:"Union[date, datetime]"}),(0,s.jsx)(t.td,{children:"Published date of the price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"published_time"}),(0,s.jsx)(t.td,{children:"datetime.time"}),(0,s.jsx)(t.td,{children:"Time of the original rating, UTC."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exchange"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Exchange where the company is traded."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"company_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of company that is the subject of rating."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"analyst_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Analyst name."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"analyst_firm"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the analyst firm that published the price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"currency"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Currency the data is denominated in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"price_target"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The current price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"adj_price_target"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Adjusted price target for splits and stock dividends."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"price_target_previous"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Previous price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"previous_adj_price_target"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Previous adjusted price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"price_when_posted"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Price when posted."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rating_current"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The analyst's rating for the company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rating_previous"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Previous analyst rating for the company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"action"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Description of the change in rating from firm's last rating."})]})]})]})}),(0,s.jsx)(i.A,{value:"benzinga",label:"benzinga",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"published_date"}),(0,s.jsx)(t.td,{children:"Union[date, datetime]"}),(0,s.jsx)(t.td,{children:"Published date of the price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"published_time"}),(0,s.jsx)(t.td,{children:"datetime.time"}),(0,s.jsx)(t.td,{children:"Time of the original rating, UTC."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exchange"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Exchange where the company is traded."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"company_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of company that is the subject of rating."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"analyst_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Analyst name."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"analyst_firm"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the analyst firm that published the price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"currency"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Currency the data is denominated in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"price_target"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The current price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"adj_price_target"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Adjusted price target for splits and stock dividends."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"price_target_previous"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Previous price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"previous_adj_price_target"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Previous adjusted price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"price_when_posted"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Price when posted."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rating_current"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The analyst's rating for the company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rating_previous"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Previous analyst rating for the company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"action"}),(0,s.jsx)(t.td,{children:"Literal['Downgrades', 'Maintains', 'Reinstates', 'Reiterates', 'Upgrades', 'Assumes', 'Initiates Coverage On', 'Terminates Coverage On', 'Removes', 'Suspends', 'Firm Dissolved']"}),(0,s.jsx)(t.td,{children:"Description of the change in rating from firm's last rating.Note that all of these terms are precisely defined."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"action_change"}),(0,s.jsx)(t.td,{children:"Literal['Announces', 'Maintains', 'Lowers', 'Raises', 'Removes', 'Adjusts']"}),(0,s.jsx)(t.td,{children:"Description of the change in price target from firm's last price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"importance"}),(0,s.jsx)(t.td,{children:"Literal[0, 1, 2, 3, 4, 5]"}),(0,s.jsx)(t.td,{children:"Subjective Basis of How Important Event is to Market. 5 = High"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"notes"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Notes of the price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"analyst_id"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Id of the analyst."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"url_news"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"URL for analyst ratings news articles for this ticker on Benzinga.com."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"url_analyst"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"URL for analyst ratings page for this ticker on Benzinga.com."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Unique ID of this entry."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last_updated"}),(0,s.jsx)(t.td,{children:"datetime"}),(0,s.jsx)(t.td,{children:"Last updated timestamp, UTC."})]})]})]})}),(0,s.jsx)(i.A,{value:"finviz",label:"finviz",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"published_date"}),(0,s.jsx)(t.td,{children:"Union[date, datetime]"}),(0,s.jsx)(t.td,{children:"Published date of the price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"published_time"}),(0,s.jsx)(t.td,{children:"datetime.time"}),(0,s.jsx)(t.td,{children:"Time of the original rating, UTC."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exchange"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Exchange where the company is traded."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"company_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of company that is the subject of rating."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"analyst_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Analyst name."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"analyst_firm"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the analyst firm that published the price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"currency"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Currency the data is denominated in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"price_target"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The current price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"adj_price_target"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Adjusted price target for splits and stock dividends."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"price_target_previous"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Previous price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"previous_adj_price_target"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Previous adjusted price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"price_when_posted"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Price when posted."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rating_current"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The analyst's rating for the company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rating_previous"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Previous analyst rating for the company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"action"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Description of the change in rating from firm's last rating."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The action taken by the firm. This could be 'Upgrade', 'Downgrade', 'Reiterated', etc."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rating_change"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The rating given by the analyst. This could be 'Buy', 'Sell', 'Underweight', etc. If the rating is a revision, the change is indicated by '->'"})]})]})]})}),(0,s.jsx)(i.A,{value:"fmp",label:"fmp",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"published_date"}),(0,s.jsx)(t.td,{children:"Union[date, datetime]"}),(0,s.jsx)(t.td,{children:"Published date of the price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"published_time"}),(0,s.jsx)(t.td,{children:"datetime.time"}),(0,s.jsx)(t.td,{children:"Time of the original rating, UTC."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"exchange"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Exchange where the company is traded."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"company_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of company that is the subject of rating."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"analyst_name"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Analyst name."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"analyst_firm"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of the analyst firm that published the price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"currency"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Currency the data is denominated in."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"price_target"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"The current price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"adj_price_target"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Adjusted price target for splits and stock dividends."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"price_target_previous"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Previous price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"previous_adj_price_target"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Previous adjusted price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"price_when_posted"}),(0,s.jsx)(t.td,{children:"float"}),(0,s.jsx)(t.td,{children:"Price when posted."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rating_current"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"The analyst's rating for the company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rating_previous"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Previous analyst rating for the company."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"action"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Description of the change in rating from firm's last rating."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"news_url"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"News URL of the price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"news_title"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"News title of the price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"news_publisher"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"News publisher of the price target."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"news_base_url"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"News base URL of the price target."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var s=r(34164);const d={tabItem:"tabItem_Ymn6"};var n=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(d.tabItem,i),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var s=r(96540),d=r(34164),n=r(23104),i=r(56347),l=r(205),a=r(57485),c=r(31682),h=r(70679);function o(e){return function(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:d}}=e;return{value:t,label:r,attributes:s,default:d}}))}function x(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const d=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(d.location.search);t.set(n,e),d.replace({...d.location,search:t.toString()})}),[n,d])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:d}=e,n=x(e),[i,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[c,o]=u({queryString:r,groupId:d}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[d,n]=(0,h.Dv)(r);return[d,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:d}),f=(()=>{const e=c??p;return j({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),m(e)}),[o,m,n]),tabValues:n}}var m=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=r(74848);function b(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,n.a_)(),{pathname:o}=(0,i.zy)(),x=e=>{const t=e.currentTarget,r=c.indexOf(t),d=a[r].value;d!==s&&(h(t),l(d))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:j,onClick:x,...n,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,n?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:d}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===d));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==d})))})}function v(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,d.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function _(e){const t=(0,m.A)();return(0,g.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var s=r(96540);const d={},n=s.createContext(d);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);