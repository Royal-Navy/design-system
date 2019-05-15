---
title: Transfer
description: A component which allows you to transfer items from one panel to another
---

# Overview

Transfers items from one panel to another 

## Usage

The transfer component can be used anywhere within an HTML form.

#### Properties

| Name         | Type                  | Required | Description                                                                                                |
| ------------ | --------------------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| listData     | Array                 | True     | Provides an array of data to be used within the transfer component (see example below)                     |
| leftHeader   | String                | False    | Provides a header for the left panel                                                                       |
| rightHeader  | String                | False    | Provides a header for the right panel                                                                      |

#### Example

![Toggle example](images/transfer.gif)

```js
const listData = [
        {
          "id": "stfaith",
          "location": 'St Faith', 
          "list" : 'left',
        },
        {
          "id": "portsmouth",
          "location": 'Portsmouth', 
          "list" : 'right',
        },
        {
          "id": "gosport",
          "location": 'Gosport', 
          "list" : 'left',
        },
        {
          "id": "southampton",
          "location": 'Southampton', 
          "list" : 'left',
        },
      ]

<rn-transfer :listData="listData"></rn-transfer>
```
