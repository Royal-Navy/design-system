---
title: Pagination
description: Navigate between muitple pages of records.
---

import { Pagination } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'


# Pagination
The Pagination component allows an end user to navigate between pages of records.

## Usage

<TabSet>

<Tab title="Design">

  ## Design
  Introduction to the design section.

  ### Anatomy
  The Anatomy is the breakdown of the component.

  [ Image breaking down the component’s anatomy ]

  Each part of the component in the image should be labelled with a number. Underneath, create a list of each of the labeled items, explaining what they are. This list should also indicate to the reader whenever an item is an optional include.

  Any specific notes on a part of the anatomy breakdown should be included here. This includes dos and don’ts with accompanying image examples.

  ### Sizing & Spacing
  Much like the Anatomy section, the Sizing & Spacing section should be a breakdown of the construction of the component. Red line guides should be added to the component, showing the spacing between the different anatomy parts.

  ### States (if applicable) 
  This section covers all the different component states including its default state, hover, active, and disabled.
  [ Image / interactive example of component states ]

  ### Hierarchy & Placement
  This section covers how a component should sit within an application’s hierarchy. It also provides insight as when to use the different variations listed below.

  ### Variation [ Repeatable Section ] 
  Introduction to the component variation. For each sub heading, outline any differences between the default component and this variation. 

  [ Image / interactive example of Component ]

  #### Usage

  #### Anatomy
  [ Image breaking down the component’s anatomy ]

  #### Sizing & Spacing
  [ Image of component with red guide lines overlaid ]

  #### States (if applicable)
  [ Image / interactive example of component states ]

  #### Hierarchy & Placement

  ### Adornments [ Repeatable Section ]
  Include any component adornments here. Much like the variations section above, this section is repeatable.

  [ Image / interactive example of Component ]

  #### Usage

  #### Anatomy
  [ Image breaking down the component’s anatomy ]

  ### Sizing & Spacing
  [ Image of component with red guide lines overlaid ]

  ### States (if applicable)
  [ Image / interactive example of component states ]

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

| Name             | Type          | Requied | Default | Description                                                  |
|------------------|---------------|---------|---------|--------------------------------------------------------------|
| onChangeCallback | Function<any> | False   |         | A callback function invoked when the current page is changed |
| pageSize         | Number        | False   | 10      | The number of records to display per page                    |
| total            | Number        | True    |         | The total number of records to paginate                      |


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
