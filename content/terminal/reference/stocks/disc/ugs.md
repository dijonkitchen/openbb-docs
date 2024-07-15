---
title: ugs
description: The 'ugs' documentation page provides instructions on how to print up
  to 25 undervalued stocks with revenue and earnings growth exceeding 25%. It includes
  details on usage, parameters, and examples demonstrating expected outcomes.
keywords:
- undervalued stocks
- stocks
- revenue growth
- earnings growth
- stock market
- financial market
- ugs
- Yahoo Finance
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/disc/ugs - Reference | OpenBB Terminal Docs" />

Print up to 25 undervalued stocks with revenue and earnings growth in excess of 25%. [Source: Yahoo Finance]

### Usage

```python
ugs [-l LIMIT]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of stocks to display. | 5 | True | None |


---

## Examples

```python
2022 Feb 16, 04:14 (🦋) /stocks/disc/ $ ugs -l 25
                                                             Undervalued Growth Stocks
┏━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━┓
┃ Symbol ┃ Name                                ┃ Price (Intraday) ┃ Change ┃ % Change ┃ Volume  ┃ Avg Vol (3 month) ┃ Market Cap ┃ PE Ratio (TTM) ┃
┡━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━┩
│ BAC    │ Bank of America Corporation         │ 47.79            │ 0.37   │ +0.78%   │ 41.879M │ 52.171M           │ 386.04B    │ 13.39          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ PFE    │ Pfizer Inc.                         │ 49.79            │ -0.01  │ -0.02%   │ 28.167M │ 42.507M           │ 279.465B   │ 12.92          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ ITUB   │ Itaú Unibanco Holding S.A.          │ 5.14             │ 0.08   │ +1.58%   │ 41.059M │ 45.848M           │ 50.269B    │ 9.92           │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ FCX    │ Freeport-McMoRan Inc.               │ 43.67            │ 1.22   │ +2.87%   │ 15.482M │ 18.44M            │ 64.128B    │ 15.06          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ VALE   │ Vale S.A.                           │ 17.14            │ -0.35  │ -2.00%   │ 33.93M  │ 32.586M           │ 80.669B    │ 4.79           │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ WFC    │ Wells Fargo & Company               │ 58.38            │ 0.53   │ +0.92%   │ 17.227M │ 30.109M           │ 226.853B   │ 11.79          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ GM     │ General Motors Company              │ 49.67            │ 1.27   │ +2.62%   │ 14.813M │ 20.688M           │ 72.172B    │ 7.41           │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ FB     │ Meta Platforms, Inc.                │ 221.00           │ 3.30   │ +1.52%   │ 42.685M │ 29.422M           │ 601.549B   │ 16.05          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ ATUS   │ Altice USA, Inc.                    │ 14.65            │ 0.71   │ +5.09%   │ 4.904M  │ 6.156M            │ 6.661B     │ 6.65           │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ MU     │ Micron Technology, Inc.             │ 96.00            │ 6.14   │ +6.83%   │ 27.084M │ 21.734M           │ 107.499B   │ 14.86          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ HBAN   │ Huntington Bancshares Incorporated  │ 16.21            │ 0.51   │ +3.25%   │ 5.809M  │ 12.004M           │ 23.306B    │ 18.01          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ UMC    │ United Microelectronics Corporation │ 9.90             │ 0.41   │ +4.32%   │ 14.052M │ 8.722M            │ 24.52B     │ 12.07          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ VIAC   │ ViacomCBS Inc.                      │ 35.99            │ 0.96   │ +2.74%   │ 13.027M │ 14.338M           │ 23.436B    │ 7.03           │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ CMCSA  │ Comcast Corporation                 │ 48.05            │ 0.65   │ +1.37%   │ 21.088M │ 23.444M           │ 217.822B   │ 15.81          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ LYG    │ Lloyds Banking Group plc            │ 2.82             │ 0.06   │ +2.17%   │ 10.023M │ 9.419M            │ 53.069B    │ 8493.98        │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ GFI    │ Gold Fields Limited                 │ 11.79            │ -0.49  │ -3.99%   │ 10.13M  │ 7.067M            │ 10.466B    │ 11.19          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ HPQ    │ HP Inc.                             │ 37.37            │ 0.86   │ +2.36%   │ 7.367M  │ 10.599M           │ 40.461B    │ 7.01           │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ RF     │ Regions Financial Corporation       │ 25.29            │ 0.77   │ +3.14%   │ 7.727M  │ 9.327M            │ 23.823B    │ 10.16          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ QCOM   │ QUALCOMM Incorporated               │ 173.00           │ 7.87   │ +4.77%   │ 11.103M │ 11.057M           │ 194.971B   │ 19.83          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ DOW    │ Dow Inc.                            │ 61.86            │ 1.03   │ +1.69%   │ 4.025M  │ 5.732M            │ 45.513B    │ 7.38           │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ KEY    │ KeyCorp                             │ 26.53            │ 0.62   │ +2.39%   │ 6.08M   │ 8.248M            │ 24.642B    │ 10.07          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ FITB   │ Fifth Third Bancorp                 │ 49.38            │ 1.15   │ +2.38%   │ 3.765M  │ 5.432M            │ 33.716B    │ 13.24          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ RKT    │ Rocket Companies, Inc.              │ 12.67            │ 0.39   │ +3.18%   │ 3.99M   │ 4.741M            │ 25.179B    │ 4.18           │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ ING    │ ING Groep N.V.                      │ 14.77            │ 0.30   │ +2.07%   │ 4.587M  │ 4.233M            │ 55.768B    │ 10.33          │
├────────┼─────────────────────────────────────┼──────────────────┼────────┼──────────┼─────────┼───────────────────┼────────────┼────────────────┤
│ SYF    │ Synchrony Financial                 │ 44.79            │ 0.76   │ +1.73%   │ 5.374M  │ 5.908M            │ 23.348B    │ 6.10           │
└────────┴─────────────────────────────────────┴──────────────────┴────────┴──────────┴─────────┴───────────────────┴────────────┴────────────────┘
```
---