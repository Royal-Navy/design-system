---
title: Masthead
description: Masthead
---

import { Icons, Masthead, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'


# Masthead 
The Masthead is a simple section at the top of the page that allows the developer to communicate the service logo, name and offer a search bar.

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

The masthead is a simple header section for a website that 

### Simple Masthead
<CodeHighlighter source={`<Masthead title="Test"/>`} language="javascript">
<Masthead title="Test" />
</CodeHighlighter>

### Masthead with custom logo
<CodeHighlighter source={`<Masthead title="Test" Logo={CustomLogo} />`} language="javascript">
<Masthead title="Test" Logo={Icons.Bell} />
</CodeHighlighter>

### Masthead with search
<CodeHighlighter source={`<Masthead title="Test" onSearch={onSearch} searchPlaceholder="Search" />`} language="javascript">
  <Masthead
    onSearch={term => console.log(`Search for: ${term}`)}
    searchPlaceholder="Search"
    title="Test"
  />
</CodeHighlighter>


### Properties
<DataTable data={[
  {
    Name: 'Logo',
    Type: 'React.ComponentType',
    Required: 'False',
    Default: '',
    Description: 'A logo 19x21 px or if none is provided a default is used.',
  },
  {
    Name: 'onSearch',
    Type: '(term: string) => void',
    Required: 'False',
    Default: '',
    Description: 'If a search function is provided the searchbox is shown and the function called on submission',
  },
    {
    Name: 'searchPlaceholder',
    Type: 'String',
    Required: 'False',
    Default: '',
    Description: 'Provide a placeholder attribute for the search text input if desired',
  },
  {
    Name: 'title',
    Type: 'String',
    Required: 'True',
    Default: '',
    Description: 'A service name that will be displayed next to the logo',
  },
  
]} />

</Tab>
</TabSet>
