---
title: Pagination
description: Navigate between muitple pages of records.
header: true
---

import { Pagination, TabSet, Tab } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'
import PaginationComponent from '../../images/components/pagination/component.svg'
import PaginationAnatomy from '../../images/components/pagination/anatomy.svg'
import PaginationStates from '../../images/components/pagination/states.svg'

# Overview

The Pagination component shows a series of related content split across multiple pages. It allows an end user to navigate between these pages of records.
<PaginationComponent />

## Usage
The Pagination component is best used for large lists and tables.

<TabSet>

<Tab title="Design">

<SketchWidget name="Pagination" href="/standards-toolkit.sketch" />

### Anatomy
<PaginationAnatomy />

1. **Page Action**. The Page Action allows the user to quickly jump to a specific page of records.
2. **Prev/Next**. The Prev and Next buttons move the page number by +/-1.


### Sizing & Spacing
The Pagination component is of fixed size. 

### States (if applicable) 
<PaginationStates />

The subcomponents of the Pagination component have multiple different states. The Page Action buttons have default, hover, and active states, whereas the Prev/Next buttons have default and hover.

### Hierarchy & Placement
The Pagination component should be placed above and below a table or list, aligned to the right hand side. Do not nest the Pagination component. If another level is required, direct the user to a new page.

</Tab>

<Tab title="Develop">
The Pagination component allows an end user to navigate between pages of records.

### Basic Usage
<CodeHighlighter source={`<Pagination
  onChangeCallback={(currentPage, totalPages) => {
    console.log(currentPage, totalPages)
  }}
  pageSize={10}
  total={1000}
/>`} language="javascript">
  <Pagination
    onChangeCallback={(currentPage, totalPages) => {
      console.log(currentPage, totalPages)
    }}
    pageSize={10}
    total={1000}
  />
</CodeHighlighter>

### Pagination Properties
<DataTable data={[
  {
    Name: 'onChangeCallback',
    Type: 'Function<any>',
    Required: 'False',
    Default: '',
    Description: 'A callback function invoked when the current page is changed',
  },
  {
    Name: 'pageSize',
    Type: 'Number',
    Required: 'False',
    Default: '10',
    Description: 'The number of records to display per page',
  },
  {
    Name: 'total',
    Type: 'Number',
    Required: 'True',
    Default: '',
    Description: 'The total number of records to paginate',
  }
]} />

</Tab>
</TabSet>
