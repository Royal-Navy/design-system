---
title: Switch
description: Switch lets users select a value from a number of options.
header: true
---

import { Tab, TabSet, Switch } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

# Overview
Switch lets users select a value from a number of options.

## Usage
With regards to behaviour, a switch can be thought of like a radio field, allowing a single choice from a small number of options. The different between a switch and radio is presentation, a switch looks similar to a button group.

<TabSet>

<Tab title="Design">

<SketchWidget name="Switch" href="/standards-toolkit.sketch" />

</Tab>

<Tab title="Develop">

### Basic Usage
<CodeHighlighter source={`const options = [
  { name: 'Day', value: '1' },
  { name: 'Week', value: '2' },
  { name: 'Month', value: '3' },
  { name: 'Year', value: '4' },
]\n\n<Switch
  label="Date Range"
  options={options}
  onChange={(previous, active) => {
    console.log(previous, active)
  }}
/>
`} language="javascript">
  <Switch
    label="Date Range"
    options={[
      { name: 'Day', value: '1' },
      { name: 'Week', value: '2' },
      { name: 'Month', value: '3' },
      { name: 'Year', value: '4' },
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
    Name: 'options',
    Type: 'Option[]',
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
