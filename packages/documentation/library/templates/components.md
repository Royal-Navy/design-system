---
title: [Component Name]
description: [Component Description]
audience: public
pageClasses: ''
template: withsidebar
---

import { TabSet, Tab } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'

# Component Title
Introduction paragraph to the component.

[ Image / interactive example of Component ]

## Usage
The usage section is a bullet pointed list of scenarios the component should be used in.

<TabSet>
  <Tab title="Design">

  # Design
  Introduction to the design section.

  ## Anatomy
  The Anatomy is the breakdown of the component.

  [ Image breaking down the component’s anatomy ]

  Each part of the component in the image should be labelled with a number. Underneath, create a list of each of the labeled items, explaining what they are. This list should also indicate to the reader whenever an item is an optional include.

  Any specific notes on a part of the anatomy breakdown should be included here. This includes dos and don’ts with accompanying image examples.

  ## Sizing & Spacing
  Much like the Anatomy section, the Sizing & Spacing section should be a breakdown of the construction of the component. Red line guides should be added to the component, showing the spacing between the different anatomy parts.

  ## States (if applicable) 
  This section covers all the different component states including its default state, hover, active, and disabled.
  [ Image / interactive example of component states ]

  ## Hierarchy & Placement
  This section covers how a component should sit within an application’s hierarchy. It also provides insight as when to use the different variations listed below.

  ---

  ### Variation [ Repeatable Section ] 
  Introduction to the component variation. For each sub heading, outline any differences between the default component and this variation. 

  [ Image / interactive example of Component ]

  #### Usage

  #### Anatomy
  [ Image breaking down the component’s anatomy ]

  ### Sizing & Spacing
  [ Image of component with red guide lines overlaid ]

  ### States (if applicable)
  [ Image / interactive example of component states ]

  ### Hierarchy & Placement

  ---

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

  # Develop
  Introduction to the development section.

  ## Installation
  To install the COMPONENT_NAME component, first install the Standards Component Library via `npm`.

  ```
      npm install @royalnavy/react-component-library
  ```

  Then inside your project, explicitly import the component you need:

  ```
      import { ComponentName } from '@royalnavy/react-component-library'`
  ```

  ## Basic Usage

  ```
      Basic HTML for the component is placed here.
  ```

  ---

  ### Variation [ Repeatable ] 
  Introduction to the component variation. For each sub heading, outline any differences between the default component and this variation. 

  ### Usage

  ```
      Code block for differing HTML
  ```

  # Properties
  This section contains specific properties for the component.

  | Name      | Type   | Required | Default  | Description  |
  -----------------------------------------------------------
  | className | String | True     |          |              |

  ---

  ### Adornment [ Repeatable ]
  Much like the design section, the Adornment block is a repeatable section, outlining any Adornments a component may have and how to apply them.

  [ Image / interactive example of Component ]

  #### Usage

  ```
      Code block for Adornment
  ```

  # Properties
  This section contains specific properties for the adornment.

  | Name         | Type    | Required  | Default  | Description  |
  ----------------------------------------------------------------
  | className    | String  | True      |          |              |

  ---

  ## Style Hooks

  The following CSS classes are used to style the COMPONENT_NAME component. Use these classes to hook into the component if you need to override specific properties.

  | CSS Class  | Required  | Description      |
  ---------------------------------------------
  | .class     | True      | The main styles  |


  # Properties
  This section contains all available props for the component.

  | Name       | Type     | Required  | Default  | Description  |
  ---------------------------------------------------------------
  | className  | String   | True      |          |              |

  </Tab>
</TabSet>

<!-- Example TabSet, Tab Usage -->
<TabSet>
  <Tab title="Example Tab 1">
    <p>This is some example tab 1 content</p>
  </Tab>
  <Tab title="Example Tab 2">
    <p>This is some example tab 2 content</p>
  </Tab>
</TabSet>

<!-- Example CodeHighlighter Usage -->
<CodeHighlighter source="(function() { console.log('This is some source code')})()" language="javascript">
  <!-- Add imports to the top of this file -->
  <h1>This is some live example JSX</h1>
</CodeHighlighter>

<!-- Example DataTable Usage -->
<DataTable caption="Props" data={[
  {
    'Prop Name': 'id',
    Type: 'String',
    Required: 'false',
    Default: '',
    Description: 'ID attribute attached to the wrapper element',
  },
  {
    'Prop Name': 'placeholder',
    Type: 'String',
    Required: 'true',
    Default: '',
    Description: 'A message to show in the input when there is no value',
  },
  {
    'Prop Name': 'type',
    Type: 'String',
    Required: 'false',
    Default: 'text',
    Description: 'The required input attribute',
  },
  {
    'Prop Name': 'onChange',
    Type: 'func(value)',
    Required: 'true',
    Default: 'null',
    Description: 'A callback function to inform of any changes to the value',
  },
]} />
