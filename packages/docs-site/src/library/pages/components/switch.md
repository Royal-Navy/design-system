---
title: Switch
description: Switch lets users select a value from a number of options.
header: true
---

import { Tab, TabSet, Switch } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import SwitchComponent from '../../images/components/switch/component.svg'
import SwitchAnatomy from '../../images/components/switch/anatomy.svg'
import SwitchStates from '../../images/components/switch/states.svg'

# Overview

<SwitchComponent />

## Usage
With regards to behaviour, a switch can be thought of like a radio field, allowing a single choice from a small number of options. The difference between a switch and radio is presentation - a switch looks similar to a button group. Try to limit the number of items that appear in the Switch. This prevents the Switch breaking on smaller screens and doesn't overwhelm the user with the number of options available. If you require the user to pick an item from a number of options, the [Select Component](/components/select) may be a better approach.

<TabSet>

<Tab title="Design">

<SketchWidget name="Switch" href="/standards-toolkit.sketch" />

### Anatomy

<SwitchAnatomy />

1. **Container**. This wraps the Switch component. On Mobile, this transforms into a Select component, changing the visual appearance of the side-by-side options.
2. **Selected Item**. The Selected value has a blue border around it to signify to the user the selected option.
3. **Unselected Item**. This is the default look of the Switch item.
4. **Label (Optional)**. A label can be provided to describe the function of the Switch component.


### States

<SwitchStates />

The Switch component acts the same as a group of Radio Buttons. Each Switch Item has its own state, however making a single Switch Item active will automatically deselect the rest of the Items.

### Hierarchy & Placement

The Switch component can be used wherever a Radio selection is needed. It can be used within a form, or as a standalone component (For example, changing the view of a calendar between Day/Week/Month/Year).



</Tab>

<Tab title="Develop">

### Basic Usage
<CodeHighlighter source={`const options = [
  { label: 'Day', value: '1' },
  { label: 'Week', value: '2' },
  { label: 'Month', value: '3' },
  { label: 'Year', value: '4' },
]\n\n<Switch
  name="example-switch-field"
  value=""
  label="Date Range"
  options={options}
  onChange={(previous, active) => {
    console.log(previous, active)
  }}
/>
`} language="javascript">
  <Switch
    name="example-switch-field"
    value=""
    label="Date Range"
    options={[
      { label: 'Day', value: '1' },
      { label: 'Week', value: '2' },
      { label: 'Month', value: '3' },
      { label: 'Year', value: '4' },
    ]}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
  />
</CodeHighlighter>

### Switch Properties
<DataTable data={[
  {
    Name: 'label',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'The label to display at the top of the component',
  },
  {
    Name: 'name',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'The name attribute assigned to the form input',
  },
  {
    Name: 'value',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'The current active value associated with field',
  },
  {
    Name: 'options',
    Type: 'OptionType[]',
    Required: 'True',
    Default: '',
    Description: 'The option values that can be selected from',
  },
  {
    Name: 'onChange',
    Type: '(previous: Option, active: Option):void',
    Required: 'False',
    Default: '',
    Description: 'A callback function, invoked when an option is selected',
  },
  {
    Name: 'size',
    Type: 'string',
    Required: 'False',
    Default: 'regular',
    Description: 'Specify the size of the component (small, regular, large)',
  }
]} />

</Tab>
</TabSet>
