"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66654],{54354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var n=r(74848),s=r(28453),a=r(18228),d=r(19365);const l={title:"Analyst Search",description:"Search for specific analysts and get their forecast track record"},i=void 0,c={id:"platform/data_models/AnalystSearch",title:"Analyst Search",description:"Search for specific analysts and get their forecast track record",source:"@site/content/platform/data_models/AnalystSearch.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/AnalystSearch",permalink:"/docs/platform/data_models/AnalystSearch",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/AnalystSearch.md",tags:[],version:"current",frontMatter:{title:"Analyst Search",description:"Search for specific analysts and get their forecast track record"},sidebar:"tutorialSidebar",previous:{title:"Analyst Estimates",permalink:"/docs/platform/data_models/AnalystEstimates"},next:{title:"Available Indicators",permalink:"/docs/platform/data_models/AvailableIndicators"}},h={},o=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"implementation-details",children:"Implementation details"}),"\n",(0,n.jsx)(t.h3,{id:"class-names",children:"Class names"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Model name"}),(0,n.jsx)(t.th,{children:"Parameters class"}),(0,n.jsx)(t.th,{children:"Data class"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AnalystSearch"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AnalystSearchQueryParams"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"AnalystSearchData"})})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"import-statement",children:"Import Statement"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb_core.provider.standard_models.analyst_search import (\nAnalystSearchData,\nAnalystSearchQueryParams,\n)\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"analyst_name"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Analyst names to return. Omitting will return all available analysts. Multiple items allowed for provider(s): benzinga."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"firm_name"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Firm names to return. Omitting will return all available firms. Multiple items allowed for provider(s): benzinga."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['benzinga']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: b, e, n, z, i, n, g, a."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(d.A,{value:"benzinga",label:"benzinga",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"analyst_name"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Analyst names to return. Omitting will return all available analysts. Multiple items allowed for provider(s): benzinga."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"firm_name"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Firm names to return. Omitting will return all available firms. Multiple items allowed for provider(s): benzinga."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['benzinga']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: b, e, n, z, i, n, g, a."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"analyst_ids"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"List of analyst IDs to return. Multiple items allowed for provider(s): benzinga."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"firm_ids"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Firm IDs to return. Multiple items allowed for provider(s): benzinga."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of results returned. Limit 1000."}),(0,n.jsx)(t.td,{children:"100"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"page"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Page offset. For optimization, performance and technical reasons, page offsets are limited from 0 - 100000. Limit the query results by other parameters such as date."}),(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fields"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsxs)(t.td,{children:["Fields to include in the response. See ",(0,n.jsx)(t.a,{href:"https://docs.benzinga.io/benzinga-apis/calendar/get-ratings",children:"https://docs.benzinga.io/benzinga-apis/calendar/get-ratings"})," to learn about the available fields. Multiple items allowed for provider(s): benzinga."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_updated"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"Date of the last update."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"firm_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Firm name of the analyst."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name_first"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Analyst first name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name_last"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Analyst last name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name_full"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Analyst full name."})]})]})]})}),(0,n.jsx)(d.A,{value:"benzinga",label:"benzinga",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_updated"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"Date of the last update."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"firm_name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Firm name of the analyst."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name_first"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Analyst first name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name_last"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Analyst last name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name_full"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Analyst full name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"analyst_id"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"ID of the analyst."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"firm_id"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"ID of the analyst firm."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"smart_score"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"A weighted average of the total_ratings_percentile, overall_avg_return_percentile, and overall_success_rate"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"overall_success_rate"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain overall."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"overall_avg_return_percentile"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percentile (normalized) of this analyst's overall average return per rating in comparison to other analysts' overall average returns per rating."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_ratings_percentile"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percentile (normalized) of this analyst's total number of ratings in comparison to the total number of ratings published by all other analysts"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_ratings"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of recommendations made by this analyst."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"overall_gain_count"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have gained value since the date of recommendation"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"overall_loss_count"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have lost value since the date of recommendation"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"overall_average_return"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The average percent (normalized) price difference per rating since the date of recommendation"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"overall_std_dev"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings since the date of recommendation"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gain_count_1m"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have gained value over the last month"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loss_count_1m"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have lost value over the last month"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"average_return_1m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The average percent (normalized) price difference per rating over the last month"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"std_dev_1m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last month"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"smart_score_1m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"A weighted average smart score over the last month."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"success_rate_1m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain over the last month"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gain_count_3m"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have gained value over the last 3 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loss_count_3m"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have lost value over the last 3 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"average_return_3m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The average percent (normalized) price difference per rating over the last 3 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"std_dev_3m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 3 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"smart_score_3m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"A weighted average smart score over the last 3 months."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"success_rate_3m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 3 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gain_count_6m"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have gained value over the last 6 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loss_count_6m"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have lost value over the last 6 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"average_return_6m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The average percent (normalized) price difference per rating over the last 6 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"std_dev_6m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 6 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gain_count_9m"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have gained value over the last 9 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loss_count_9m"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have lost value over the last 9 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"average_return_9m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The average percent (normalized) price difference per rating over the last 9 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"std_dev_9m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 9 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"smart_score_9m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"A weighted average smart score over the last 9 months."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"success_rate_9m"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 9 months"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gain_count_1y"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have gained value over the last 1 year"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loss_count_1y"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have lost value over the last 1 year"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"average_return_1y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The average percent (normalized) price difference per rating over the last 1 year"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"std_dev_1y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 1 year"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"smart_score_1y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"A weighted average smart score over the last 1 year."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"success_rate_1y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 1 year"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gain_count_2y"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have gained value over the last 2 years"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loss_count_2y"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have lost value over the last 2 years"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"average_return_2y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The average percent (normalized) price difference per rating over the last 2 years"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"std_dev_2y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 2 years"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"smart_score_2y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"A weighted average smart score over the last 3 years."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"success_rate_2y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 2 years"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"gain_count_3y"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have gained value over the last 3 years"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"loss_count_3y"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of ratings that have lost value over the last 3 years"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"average_return_3y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The average percent (normalized) price difference per rating over the last 3 years"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"std_dev_3y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The standard deviation in percent (normalized) price difference in the analyst's ratings over the last 3 years"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"smart_score_3y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"A weighted average smart score over the last 3 years."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"success_rate_3y"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The percentage (normalized) of gain/loss ratings that resulted in a gain over the last 3 years"})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(96540),s=r(34164),a=r(23104),d=r(56347),l=r(205),i=r(57485),c=r(31682),h=r(89466);function o(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??o(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const s=(0,d.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=x(e),[d,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,o]=u({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,h.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),v=(()=>{const e=c??m;return j({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),f(e)}),[o,f,a]),tabValues:a}}var f=r(92303);const v={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var p=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,a.a_)(),{pathname:o}=(0,d.zy)(),x=e=>{const t=e.currentTarget,r=c.indexOf(t),s=i[r].value;s!==n&&(h(t),l(s))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:j,onClick:x,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",v.tabItem,a?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&o.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&o.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&o.startsWith("/terminal")}),children:r??t},t)}))})}function b(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,p.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,p.jsx)(g,{...e,...t}),(0,p.jsx)(b,{...e,...t})]})}function _(e){const t=(0,f.A)();return(0,p.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var n=r(96540);const s={},a=n.createContext(s);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);