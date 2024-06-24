---
title: rename
description: The page provides detailed information on the 'rename' function from
  a Python-based toolset, used for renaming columns in a dataset. It includes how
  to use the function, its parameters, and relevant examples.
keywords:
- rename tool
- dataset
- parameter
- column rename
- dataset modification
- data management
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="forecast /rename - Reference | OpenBB Terminal Docs" />

The column you want to rename from a dataset.

### Usage

```python
rename [-d {}] -o OLDCOL -n NEWCOL
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| dataset | Dataset that will get a column renamed | None | True | None |
| oldcol | Old column from dataset to be renamed | None | False | None |
| newcol | New column from dataset to be renamed | None | False | None |


---

## Examples

```python
2022 Jul 23, 10:16 (🦋) /forecast/ $ show AAPL
AAPL dataset has shape (row, column): (759, 7)

                  Dataset AAPL | Showing 10 of 759 rows
┏━━━┳━━━━━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┓
┃   ┃ date       ┃ open  ┃ high  ┃ low   ┃ close ┃ adj_close ┃ volume   ┃
┡━━━╇━━━━━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━┩
│ 0 │ 2019-07-15 │ 51.02 │ 51.47 │ 51.00 │ 51.30 │ 50.07     │ 67789600 │
├───┼────────────┼───────┼───────┼───────┼───────┼───────────┼──────────┤
│ 1 │ 2019-07-16 │ 51.15 │ 51.53 │ 50.88 │ 51.12 │ 49.90     │ 67467200 │
├───┼────────────┼───────┼───────┼───────┼───────┼───────────┼──────────┤
│ 2 │ 2019-07-17 │ 51.01 │ 51.27 │ 50.82 │ 50.84 │ 49.62     │ 56430000 │
├───┼────────────┼───────┼───────┼───────┼───────┼───────────┼──────────┤
│ 3 │ 2019-07-18 │ 51.00 │ 51.47 │ 50.92 │ 51.42 │ 50.18     │ 74162400 │
├───┼────────────┼───────┼───────┼───────┼───────┼───────────┼──────────┤
│ 4 │ 2019-07-19 │ 51.45 │ 51.62 │ 50.59 │ 50.65 │ 49.43     │ 83717200 │
├───┼────────────┼───────┼───────┼───────┼───────┼───────────┼──────────┤
│ 5 │ 2019-07-22 │ 50.91 │ 51.81 │ 50.90 │ 51.81 │ 50.56     │ 89111600 │
├───┼────────────┼───────┼───────┼───────┼───────┼───────────┼──────────┤
│ 6 │ 2019-07-23 │ 52.12 │ 52.23 │ 51.82 │ 52.21 │ 50.96     │ 73420800 │
├───┼────────────┼───────┼───────┼───────┼───────┼───────────┼──────────┤
│ 7 │ 2019-07-24 │ 51.92 │ 52.29 │ 51.79 │ 52.17 │ 50.92     │ 59966400 │
├───┼────────────┼───────┼───────┼───────┼───────┼───────────┼──────────┤
│ 8 │ 2019-07-25 │ 52.22 │ 52.31 │ 51.68 │ 51.76 │ 50.51     │ 55638400 │
├───┼────────────┼───────┼───────┼───────┼───────┼───────────┼──────────┤
│ 9 │ 2019-07-26 │ 51.87 │ 52.43 │ 51.78 │ 51.94 │ 50.69     │ 70475600 │
└───┴────────────┴───────┴───────┴───────┴───────┴───────────┴──────────┘

2022 Jul 23, 10:16 (🦋) /forecast/ $ rename AAPL -o close -n new_name

2022 Jul 23, 10:16 (🦋) /forecast/ $ show AAPL
AAPL dataset has shape (row, column): (759, 7)

                   Dataset AAPL | Showing 10 of 759 rows
┏━━━┳━━━━━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┓
┃   ┃ date       ┃ open  ┃ high  ┃ low   ┃ new_name ┃ adj_close ┃ volume   ┃
┡━━━╇━━━━━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━┩
│ 0 │ 2019-07-15 │ 51.02 │ 51.47 │ 51.00 │ 51.30    │ 50.07     │ 67789600 │
├───┼────────────┼───────┼───────┼───────┼──────────┼───────────┼──────────┤
│ 1 │ 2019-07-16 │ 51.15 │ 51.53 │ 50.88 │ 51.12    │ 49.90     │ 67467200 │
├───┼────────────┼───────┼───────┼───────┼──────────┼───────────┼──────────┤
│ 2 │ 2019-07-17 │ 51.01 │ 51.27 │ 50.82 │ 50.84    │ 49.62     │ 56430000 │
├───┼────────────┼───────┼───────┼───────┼──────────┼───────────┼──────────┤
│ 3 │ 2019-07-18 │ 51.00 │ 51.47 │ 50.92 │ 51.42    │ 50.18     │ 74162400 │
├───┼────────────┼───────┼───────┼───────┼──────────┼───────────┼──────────┤
│ 4 │ 2019-07-19 │ 51.45 │ 51.62 │ 50.59 │ 50.65    │ 49.43     │ 83717200 │
├───┼────────────┼───────┼───────┼───────┼──────────┼───────────┼──────────┤
│ 5 │ 2019-07-22 │ 50.91 │ 51.81 │ 50.90 │ 51.81    │ 50.56     │ 89111600 │
├───┼────────────┼───────┼───────┼───────┼──────────┼───────────┼──────────┤
│ 6 │ 2019-07-23 │ 52.12 │ 52.23 │ 51.82 │ 52.21    │ 50.96     │ 73420800 │
├───┼────────────┼───────┼───────┼───────┼──────────┼───────────┼──────────┤
│ 7 │ 2019-07-24 │ 51.92 │ 52.29 │ 51.79 │ 52.17    │ 50.92     │ 59966400 │
├───┼────────────┼───────┼───────┼───────┼──────────┼───────────┼──────────┤
│ 8 │ 2019-07-25 │ 52.22 │ 52.31 │ 51.68 │ 51.76    │ 50.51     │ 55638400 │
├───┼────────────┼───────┼───────┼───────┼──────────┼───────────┼──────────┤
│ 9 │ 2019-07-26 │ 51.87 │ 52.43 │ 51.78 │ 51.94    │ 50.69     │ 70475600 │
└───┴────────────┴───────┴───────┴───────┴──────────┴───────────┴──────────┘
```
---