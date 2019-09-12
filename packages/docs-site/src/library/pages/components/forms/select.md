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

# Select
A form component used to allow the user to pick a value from a list
<InputComponent />

## Usage
The Select input is useful when the user needs to select an option from a long list, typically more than 7 options. Users can click on a control to let the list drop down and the user can then scroll through the list
and pick the desired option. Alternatively the control lets a user select the field and start typing and the list of options will appear and is filtered by the value the user has typed.

<TabSet>

<Tab title="Design">

<SketchWidget name="Select" href="/standards-toolkit.sketch" />

## Design
TBD

</Tab>

<Tab title="Develop">

The `Select` component can be used to allow the user to pick a value from a predefined list. The list of `Options` must provide a value and associated label, much like a traditional HTML Select element, though an additional `badge` property can be used to enhance the component if there is a need to display meta data such as a count.

The component works much like other form components, a value property contains the current form field value, changes are send to an `onChange` property and name and label properties must also be provided.

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
