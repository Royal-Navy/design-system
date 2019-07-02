---
title: Phase Banner
description:  A simple banner to indicate the phase of the project.
---
import { PhaseBanner, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'


# Links
A simple banner to indicate the phase of the project.

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
The banner should be used directly underneath the main site header, before the content begins. If used with no props then it will look exactly like the example image below (linking to /feedback), however it can be customized to with any text or link that is required.

### Basic Usage
By default simply passing a `label` and `href` will cause a regular anchor tag to be rendered for a Breadcrumb.

<CodeHighlighter source={`<PhaseBanner />`} language="javascript">
 <PhaseBanner />
</CodeHighlighter>

### Alternative text
You can pass custom markup to appear by including it as a child of the component.

<CodeHighlighter source={`<PhaseBanner>Custom html can go here. <strong>This part is in bold!</strong><PhaseBanner/>`} language="javascript">
  <PhaseBanner>Custom html can go here. <strong>This part is in bold!</strong></PhaseBanner>
</CodeHighlighter>

### Properties
<DataTable caption="Link" data={[
  {
    Name: 'phase',
    Type: 'string (alpha/beta)',
    Required: 'False',
    Default: 'alpha',
    Description: 'Text to display in the phase banner badge',
  },
  {
    Name: 'link',
    Type: 'string ',
    Required: 'False',
    Default: '/feedback',
    Description: 'The url to use with the default message',
  },
  {
    Name: 'children',
    Type: 'React.Element',
    Required: 'False',
    Default: 'This is a new service, <a href=\"link\">Your feedback</a> will help to improve it',
    Description: 'HTML to display in the phase banner body',
  },
]} />

</Tab>
</TabSet>
