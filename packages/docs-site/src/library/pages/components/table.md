---
title: Table
description: Display tabular data.
header: true
---

import { Table, Column, TabSet, Tab } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import TableComponent from '../../images/components/table/component.svg'
import TableAnatomy from '../../images/components/table/anatomy.svg'

# Overview

The Table component is used to display tabular data. Each row is presented in the same format. It makes information eas ier to compare and scan.

<TableComponent />

## Usage
The Table component is best used to compare information in rows and columns. It organises data, making it easier for users to interpret by looking for patterns and insights.

<TabSet>
<Tab title="Design">

<SketchWidget name="Table" href="/standards-toolkit.sketch" />

### Anatomy
<TableAnatomy />

1. **Table Container**. Wraps the entire Table component. By default it has no border styles, ensuring it sits flush with its immediate parent.
2. **Table Header**. Contains the column titles.
3. **Table Column**. Each Table Column contains data for each Table Row.

### Sizing & Spacing
The Table component adapts to the data and content placed inside of it. By default, the Table will extend the full width of its parent.

### Hierarchy & Placement
Whilst there is no restriction on the number of Table instances that can be used per page, it's always worth exploring if there is a more informative or interactive way of displaying this data to the user.

</Tab>

<Tab title="Develop">

### Basic Usage
<CodeHighlighter source={`const data = [
  {
    id: 'a',
    first: 'a1',
    second: 'a2',
    third: 'a3',
  },
  {
    id: 'b',
    first: 'b1',
    second: 'b2',
    third: 'b3',
  },
  {
    id: 'c',
    first: 'c1',
    second: 'c2',
    third: 'c3',
  },
]\n
<Table data={data}>
  <Column field="first">First</Column>
  <Column field="second">Second</Column>
  <Column field="third">Third</Column>
</Table>
`} language="javascript" />

### Table Properties
<DataTable data={[
  {
    Name: 'data',
    Type: '{ id: string }[]',
    Required: 'True',
    Default: '',
    Description: 'An array of objects for presenting as rows.',
  },
  {
    Name: 'children',
    Type: 'React.ReactElement<ColumnProps>[]',
    Required: 'True',
    Default: '',
    Description: 'An array of columns for header cells and presenting cells.',
  },
]} />

### Column Properties
<DataTable data={[
  {
    Name: 'field',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'Name of the field to be presented in the cell.',
  },
  {
    Name: 'children',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'Text to be presented in the column header cell.',
  },
]} />

</Tab>
</TabSet>
