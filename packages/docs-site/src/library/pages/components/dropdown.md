---
title: Dropdown
description: A component to show a list of actions
header: true
---

import { Links, Tab, TabSet, Dropdown } from '@royalnavy/react-component-library'
import Field from '../../../components/containers/Field'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import RightContent from '../../../components/presenters/right-content'
import SketchWidget from '../../../components/presenters/sketch-widget'

import IconAcUnit from '../../images/components/dropdown/acunit.svg'

# Dropdown
A component to show a list of actions.

## Usage
The Dropdown input is useful when the user needs to select an option from a long list, typically more than 7 options. Users can click on a control to let the list drop down and the user can then scroll through the list
and pick the desired option. Alternatively the control lets a user select the field and start typing and the list of options will appear and is filtered by the value the user has typed.

<TabSet>

<Tab title="Design">

<SketchWidget name="Dropdown" href="/standards-toolkit.sketch" /> 
TBD

</Tab>

<Tab title="Develop">
The `Dropdown` component can be used to allow the user to pick an action for a list. When the user selects the dropdown component a list is displayed which can be navigated through. When an option is selected through a mouse click or pressing enter the onSelected property is called.

### Examples
<CodeHighlighter source={`<Dropdown label="Actions" options={options} onSelect={handleAction} />`}>
<div style="height: 300px">
<Dropdown 
  label="Actions" 
  options={[
    { value: 'chocolate', label: 'Chocolate', hidden: true },
    { value: 'chozbun', label: 'ChozoBun', visible: true },
    { value: 'melon', label: 'Melon', isDisabled: true },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla', rightContent: RightContent},
  ]} 
  onSelect={(value) => {console.log(value)}} 
/> 
</div>
</CodeHighlighter>

<CodeHighlighter source={`<Dropdown label="Actions" options={options} onSelect={handleAction} />`}>
<div style="height: 300px">
<Dropdown 
  label="Actions" 
  options={[
    { icon: IconAcUnit, value: 'chocolate', label: 'Chocolate', hidden: true },
    { icon: IconAcUnit, value: 'chozbun', label: 'ChozoBun', visible: true },
    { icon: IconAcUnit, value: 'melon', label: 'Melon', isDisabled: true },
    { icon: IconAcUnit, value: 'strawberry', label: 'Strawberry' },
    { icon: IconAcUnit, value: 'vanilla', label: 'Vanilla' },
  ]} 
  onSelect={(value) => {console.log(value)}} 
/> 
</div>
</CodeHighlighter>

### Properties
The `Dropdown` accepts a label, options and a handler which is called with the value associated with the option that is selected by the user.

<DataTable caption="Dropdown" data={[
  {
    Name: 'label',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The text to display in the component the user needs to click on to view options',
  },
  {
    Name: 'onSelect',
    Type: '(value:string) => void',
    Required: 'True',
    Default: '',
    Description: 'When an option is selected the onSelect method is called with the value associated with the option',
  },
  {
    Name: 'options',
    Type: 'DropdownOption[]',
    Required: 'True',
    Default: '',
    Description: 'An array of options to be displayed when the user opens the dropdown.',
  },
]} />
<br />

Options can consist of a simple label and value, but also have other optional properties to allow
the user of icons, left or right, and indicate if something is hidden or visible.

An option can also be marked as inactive and is greyed out to show that to the user. Do not mix the use of hidden, visible and rightContent. These three properties can interfere with each other.

<DataTable caption="Option" data={[
  {
    Name: 'isDisabled',
    Type: 'boolean',
    Required: 'False',
    Default: 'False',
    Description: 'A disabled option is displayed with slightly greyed out text and cannot be selected',
  },
  {
    Name: 'hidden',
    Type: 'boolean',
    Required: 'False',
    Default: 'False',
    Description: 'Should the option display a hidden icon on the right side to indicate a hidden layer or hidden element',
  },
  {
    Name: 'icon',
    Type: 'ReactComponent',
    Required: 'False',
    Default: '',
    Description: 'A component that renders an icon to the left of the option text',
  },
  {
    Name: 'label',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The text to display in the option',
  },
  {
    Name: 'rightContent',
    Type: 'ReactComponent',
    Required: 'False',
    Default: '',
    Description: 'A component that renders content to show on the right of the option text',
  },
  {
    Name: 'value',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The value that it used in the onSelect method to indicate the desired action',
  },
  {
    Name: 'visible',
    Type: 'boolean',
    Required: 'False',
    Default: 'False',
    Description: 'Should the option display a visible icon on the right side to indicate a visible layer or visible element',
  },
]} />

</Tab>
</TabSet>
