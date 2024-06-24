"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57294],{74238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>x});var n=r(74848),d=r(28453),s=r(94331),i=r(18228),c=r(19365);const a={title:"calendar",description:"The Economic Calendar provides information on economic events and data.  Use the OBB Python function `obb.economy.calendar()` to retrieve economic calendar  data. The function accepts parameters such as start date, end date, provider, country,  importance, and group. It returns a list of economic calendar data, including the  date, event, reference, source, actual value, previous value, consensus value, and  forecast value. The data can be filtered by provider such as FMP, Nasdaq, or Trading  Economics.",keywords:["economic calendar","python obb.economy.calendar","parameters","start date","end date","provider","country","importance","group","returns","data","date","event","reference","source","source url","actual","previous","consensus","forecast","url","currency","unit","change","change percent","updated at","created at","description"]},l=void 0,o={id:"platform/reference/economy/calendar",title:"calendar",description:"The Economic Calendar provides information on economic events and data.  Use the OBB Python function `obb.economy.calendar()` to retrieve economic calendar  data. The function accepts parameters such as start date, end date, provider, country,  importance, and group. It returns a list of economic calendar data, including the  date, event, reference, source, actual value, previous value, consensus value, and  forecast value. The data can be filtered by provider such as FMP, Nasdaq, or Trading  Economics.",source:"@site/content/platform/reference/economy/calendar.md",sourceDirName:"platform/reference/economy",slug:"/platform/reference/economy/calendar",permalink:"/platform/reference/economy/calendar",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/economy/calendar.md",tags:[],version:"current",frontMatter:{title:"calendar",description:"The Economic Calendar provides information on economic events and data.  Use the OBB Python function `obb.economy.calendar()` to retrieve economic calendar  data. The function accepts parameters such as start date, end date, provider, country,  importance, and group. It returns a list of economic calendar data, including the  date, event, reference, source, actual value, previous value, consensus value, and  forecast value. The data can be filtered by provider such as FMP, Nasdaq, or Trading  Economics.",keywords:["economic calendar","python obb.economy.calendar","parameters","start date","end date","provider","country","importance","group","returns","data","date","event","reference","source","source url","actual","previous","consensus","forecast","url","currency","unit","change","change percent","updated at","created at","description"]},sidebar:"tutorialSidebar",previous:{title:"balance_of_payments",permalink:"/platform/reference/economy/balance_of_payments"},next:{title:"central_bank_holdings",permalink:"/platform/reference/economy/central_bank_holdings"}},h={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function j(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"economy/calendar - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get the upcoming, or historical, economic calendar of global events."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# By default, the calendar will be forward-looking.\nobb.economy.calendar(provider='fmp')\nobb.economy.calendar(provider='fmp', start_date='2020-03-01', end_date='2020-03-31')\n# By default, the calendar will be forward-looking.\nobb.economy.calendar(provider='nasdaq')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(c.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'nasdaq', 'tradingeconomics']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(c.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'nasdaq', 'tradingeconomics']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(c.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'nasdaq', 'tradingeconomics']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Country of the event Multiple items allowed for provider(s): nasdaq, tradingeconomics."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(c.A,{value:"tradingeconomics",label:"tradingeconomics",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[date, str]"}),(0,n.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'nasdaq', 'tradingeconomics']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Country of the event. Multiple items allowed for provider(s): tradingeconomics."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"importance"}),(0,n.jsx)(t.td,{children:"Literal['low', 'medium', 'high']"}),(0,n.jsx)(t.td,{children:"Importance of the event."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"group"}),(0,n.jsx)(t.td,{children:"Literal['interest_rate', 'inflation', 'bonds', 'consumer', 'gdp', 'government', 'housing', 'labour', 'markets', 'money', 'prices', 'trade', 'business']"}),(0,n.jsx)(t.td,{children:"Grouping of events."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"calendar_id"}),(0,n.jsx)(t.td,{children:"Union[Union[int, str], List[Union[int, str]]]"}),(0,n.jsx)(t.td,{children:"Get events by TradingEconomics Calendar ID. Multiple items allowed for provider(s): tradingeconomics."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[EconomicCalendar]\n        Serializable results.\n\n    provider : Optional[Literal['fmp', 'nasdaq', 'tradingeconomics']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsx)(c.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Country of event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"category"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Category of event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"event"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Event name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"importance"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The importance level for the event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Source of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unit"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Unit of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"consensus"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Average forecast among a representative group of economists."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"previous"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Value for the previous period after the revision (if revision is applicable)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"revised"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Revised previous value, if applicable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"actual"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Latest released value."})]})]})]})}),(0,n.jsx)(c.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Country of event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"category"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Category of event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"event"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Event name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"importance"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The importance level for the event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Source of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unit"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Unit of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"consensus"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Average forecast among a representative group of economists."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"previous"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Value for the previous period after the revision (if revision is applicable)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"revised"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Revised previous value, if applicable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"actual"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Latest released value."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Value change since previous."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"change_percent"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Percentage change since previous."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_updated"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"Last updated timestamp."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"created_at"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"Created at timestamp."})]})]})]})}),(0,n.jsx)(c.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Country of event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"category"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Category of event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"event"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Event name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"importance"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The importance level for the event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Source of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unit"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Unit of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"consensus"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Average forecast among a representative group of economists."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"previous"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Value for the previous period after the revision (if revision is applicable)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"revised"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Revised previous value, if applicable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"actual"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Latest released value."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"description"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Event description."})]})]})]})}),(0,n.jsx)(c.A,{value:"tradingeconomics",label:"tradingeconomics",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"country"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Country of event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"category"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Category of event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"event"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Event name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"importance"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The importance level for the event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Source of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"unit"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Unit of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"consensus"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Average forecast among a representative group of economists."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"previous"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Value for the previous period after the revision (if revision is applicable)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"revised"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Revised previous value, if applicable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"actual"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"Latest released value."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"forecast"}),(0,n.jsx)(t.td,{children:"Union[str, float]"}),(0,n.jsx)(t.td,{children:"TradingEconomics projections."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reference"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Abbreviated period for which released data refers to."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"reference_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"Date for the reference period."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"calendar_id"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"TradingEconomics Calendar ID."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date_span"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Date span of the event."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"TradingEconomics Symbol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"TradingEconomics Ticker symbol."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"te_url"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"TradingEconomics URL path."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source_url"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Source URL."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"last_updated"}),(0,n.jsx)(t.td,{children:"datetime"}),(0,n.jsx)(t.td,{children:"Last update of the data."})]})]})]})})]})]})}function u(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const d={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(d.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),d=r(74848);function s(e){let{title:t}=e;return(0,d.jsx)(n.A,{children:(0,d.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),d=r(34164),s=r(23104),i=r(56347),c=r(205),a=r(57485),l=r(31682),o=r(70679);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:d}}=e;return{value:t,label:r,attributes:n,default:d}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function j(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const d=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(d.location.search);t.set(s,e),d.replace({...d.location,search:t.toString()})}),[s,d])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:d}=e,s=x(e),[i,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,h]=u({queryString:r,groupId:d}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[d,s]=(0,o.Dv)(r);return[d,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:d}),m=(()=>{const e=l??p;return j({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{m&&a(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=r(74848);function b(e){let{className:t,block:r,selectedValue:n,selectValue:c,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),{pathname:h}=(0,i.zy)(),x=e=>{const t=e.currentTarget,r=l.indexOf(t),d=a[r].value;d!==n&&(o(t),c(d))},j=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:j,onClick:x,...s,className:(0,d.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,s?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:d}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===d));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==d})))})}function g(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,d.A)("tabs-container",m.tabList),children:[(0,v.jsx)(b,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function T(e){const t=(0,f.A)();return(0,v.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(96540);const d={},s=n.createContext(d);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);