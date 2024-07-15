---
title: gainers
description:
  This page provides details on the 'gainers' functionality, including
  descriptions, parameters, usage, and examples. The gainers functionality displays
  the coins that have gained the most in a selected time period.
keywords:
  - gainers
  - crypto
  - coins
  - market cap
  - volume
  - time intervals
  - parameters
  - defaults
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto/disc/gainers - Reference | OpenBB Terminal Docs" />

Shows Largest Gainers - coins which gain the most in given period. You can use parameter --interval to set which timeframe are you interested in: \{14d,1h,1y,200d,24h,30d,7d\} You can look on only N number of records with --limit, You can sort by \{Symbol,Name,Price [$],Market Cap,Market Cap Rank,Volume [$]\} with --sort.

### Usage

```python
gainers [-i {14d,1h,1y,200d,24h,30d,7d}] [-l LIMIT] [-s SORTBY [SORTBY ...]]
```

---

## Parameters

| Name     | Description                                         | Default    | Optional | Choices                                                          |
| -------- | --------------------------------------------------- | ---------- | -------- | ---------------------------------------------------------------- |
| interval | time period, one from \{14d,1h,1y,200d,24h,30d,7d\} | 1h         | True     | 14d, 1h, 1y, 200d, 24h, 30d, 7d                                  |
| limit    | Number of records to display                        | 15         | True     | None                                                             |
| sortby   | Sort by given column. Default: Market Cap Rank      | market_cap | True     | Symbol, Name, Price [$], Market Cap, Market Cap Rank, Volume [$] |

---

## Examples

```python
2022 Feb 15, 06:38 (🦋) /crypto/disc/ $ gainers
┌────────┬─────────────────┬───────────┬────────────────┬─────────────────┬────────────┬───────────────┐
│ Symbol │ Name            │ Price [$] │ Market Cap [$] │ Market Cap Rank │ Volume [$] │ Change 1h [%] │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ xrp    │ XRP             │ 0.84      │ 39.9B          │ 6               │ 3.2B       │ 0.29          │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ luna   │ Terra           │ 56.50     │ 22.4B          │ 9               │ 1B         │ 0.14          │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ usdc   │ USD Coin        │ 1.00      │ 52.6B          │ 5               │ 3B         │ 0.12          │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ bnb    │ Binance Coin    │ 429.85    │ 72.2B          │ 4               │ 709.6M     │ 0.12          │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ btc    │ Bitcoin         │ 44275.00  │ 838.8B         │ 1               │ 20.6B      │ 0.11          │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ usdt   │ Tether          │ 1.00      │ 78.5B          │ 3               │ 43.3B      │ 0.08          │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ busd   │ Binance USD     │ 1.00      │ 17.6B          │ 13              │ 3B         │ -0.04         │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ dot    │ Polkadot        │ 19.79     │ 21.4B          │ 11              │ 672.9M     │ -0.12         │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ eth    │ Ethereum        │ 3100.92   │ 370.6B         │ 2               │ 14.4B      │ -0.24         │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ shib   │ Shiba Inu       │ 0.00      │ 17.2B          │ 14              │ 1.1B       │ -0.34         │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ ada    │ Cardano         │ 1.09      │ 34.9B          │ 7               │ 1B         │ -0.41         │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ doge   │ Dogecoin        │ 0.15      │ 19.9B          │ 12              │ 604.3M     │ -0.50         │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ AVAX   │ Avalanche       │ 88.42     │ 21.7B          │ 10              │ 894.8M     │ -0.65         │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ sol    │ Solana          │ 102.75    │ 32.7B          │ 8               │ 1.8B       │ -0.76         │
├────────┼─────────────────┼───────────┼────────────────┼─────────────────┼────────────┼───────────────┤
│ cro    │ Crypto.com Coin │ 0.50      │ 12.5B          │ 15              │ 200.8M     │ -1.21         │
└────────┴─────────────────┴───────────┴────────────────┴─────────────────┴────────────┴───────────────┘
```

---