---
title: Tables
description: Tables display tabular data
audience: public
pageClasses: ''
context: 'Component Library'
template: withsidebar
usageExampleType: javascript
usageExample: Import { ICON_NAME } from '@NELSON/Icons'
---

# Basic Example

```html
  <rn-table :tableData="tableData"/>
```

#### Props

Prop Name     | Value      | Required
------------- | ---------- | --------
**tableData** | `{Array}`  | No
**headings**  | `{Array}`  | No
**caption**   | `{String}` | No
**sortable**   | `{Boolean}` | No

#### Dynamic tables

A table can be easily built using manual data, however dynamic data can be used if required. Simply pass the data to the table as an array:

```js
  headings: ['Ferry Name', 'In Service', 'From', 'To', 'Capacity'],
  tableData: [
    ['St Faith', 2001, 'Isle of Wight', 'Portsmouth', 500],
    ['St Cecilia', 2003, 'Portsmouth', 'Southampton', 340],
    ['St Clare', 1993, 'Portsmouth', 'Isle of Wight', 225],
    ['Wight Sun', 2008, 'Gosport', 'Portsmouth', 65],
  ],
```

The example above shows how to construct a 5 column table with 4 rows of data plus an optional header row. 

#### Sortable table

If the table is dynamic and includes headers then it is easy to make it a sortable table by adding `:sortable="true"` to the component (example below), this allows users to sort the table data in ascending/descending order based on any column.

```html
  <rn-table :sortable="true" :headings="headings" :tableData="tableData"/>
```

#### Storybook

To view all the variations of this component, including interactive examples, please visit our [Storybook](https://react-storybook.royalnavy.io/?selectedKind=Table&full=0&addons=0&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel&show-info=0&source=0).