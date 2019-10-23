---
title: Select
description: A form component used to allow the user to pick a value from a list
header: true
---

import { Links, Tab, TabSet, Select } from '@royalnavy/react-component-library'
import Field from '../../../../components/containers/Field'
import DataTable from '../../../../components/presenters/data-table'
import CodeHighlighter from '../../../../components/presenters/code-highlighter'
import SketchWidget from '../../../../components/presenters/sketch-widget'

import SelectComponent from '../../../images/components/forms/select/component.svg'
import SelectAnatomy from '../../../images/components/forms/select/anatomy.svg'
import SelectStates from '../../../images/components/forms/select/states.svg'

# Select
A form component used to allow the user to pick a value from a list
<SelectComponent />

## Usage
The Select input is useful when the user needs to select an option from a long list, typically more than seven options. Users can click on a control to let the list drop down and the user can then scroll through and pick the desired option. Alternatively the control lets a user select the field and start typing and the list of options will appear and is filtered by the value the user has typed.

<TabSet>

<Tab title="Design">

<SketchWidget name="Select" href="/standards-toolkit.sketch" /> 

### Anatomy

<SelectAnatomy />

1. **Container**. The Container wraps the entire component. When the Select is focused, the sheet expands from the bottom of the Select, covering any content immediately below the Select component.
2. **Label**. The label provides context to the options available in the Select.
3. **Value**. The Value is the currently selected Item from the Sheet.
4. **Sheet**. By default, the Sheet is hidden. When the Select is in a focused state, the Sheet will appear with the list of Select items available. It can only display a maximum of five items before it scrolls.
5. **Item**. An Item in the Sheet can be selected by the user. When the user clicks on the item, the sheet collapses and changes the Value to the selected Item.
6. **Item Active**. When the user opens the Sheet again, the last selected Item will be highlighted.

### States

<SelectStates />

The Select component and the Select Item sub component both have two states - Default and Active.

</Tab>

<Tab title="Develop">

The `Select` component can be used to allow the user to pick a value from a predefined list. The list of `Options` must provide a value and associated label, much like a traditional HTML Select element, though an additional `badge` property can be used to enhance the component if there is a need to display meta data such as a count.

The component works much like other form components, a value property contains the current form field value, changes are sent to an `onChange` property and name and label properties must also be provided.

Note that the `Select` component only currently supports string values.

### Example with Formik
<CodeHighlighter source={`<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

<Form>
  <Field name="colour" component={Select} label="Ball colour" options={options} />

</Form>
</Formik>`} language="javascript">
  <div style="height: 200px">
      <Field name="colour" onChange={(value) => console.log(value)} component={Select} label="Ball color" options={[{label: 'Red', value:'red'},{label: 'Blue', value:'blue'},{label: 'Green', value: 'green', badge: 100 }]} />
  </div>
</CodeHighlighter>


### Properties
The `Select` component accepts the standard field properties and is also
responsible for rendering an optional field label and any information or error messages associated 
with the field.

<DataTable caption="Select" data={[
  {
    Name: 'name',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The field name',
  },
  {
    Name: 'value',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The field current value',
  },
  {
    Name: 'label',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The label to display in the field',
  },
  {
    Name: 'onChange',
    Type: '(value: string):void',
    Required: 'True',
    Default: '',
    Description: 'Called when the field value changes',
  },
  {
    Name: 'options',
    Type: 'SelectOption[]',
    Required: 'True',
    Default: '',
    Description: 'An array of options to use when rendering the component',
  },
]} />
<br />
<DataTable caption="Option" data={[
  {
    Name: 'label',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The text to display in the select option',
  },
  {
    Name: 'value',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'value associated with this option',
  },
  {
    Name: 'badge',
    Type: 'string | number',
    Required: 'False',
    Default: '',
    Description: 'An optional thing to show inside a badge in the option, such as a count',
  },
]} />

</Tab>
</TabSet>
