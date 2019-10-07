---
title: Checkbox
description: Checkboxes let users select multiple options at once.
header: true
---

import { Tab, TabSet, Checkbox } from '@royalnavy/react-component-library'
import Field from '../../../../components/containers/Field'
import DataTable from '../../../../components/presenters/data-table'
import CodeHighlighter from '../../../../components/presenters/code-highlighter'
import SketchWidget from '../../../../components/presenters/sketch-widget'

import CheckboxComponent from '../../../images/components/forms/checkbox/component.svg'
import CheckboxAnatomy from '../../../images/components/forms/checkbox/anatomy.svg'
import CheckboxStates from '../../../images/components/forms/checkbox/states.svg'

# Checkbox
Checkboxes let users select multiple options at once.

<CheckboxComponent />

## Usage
The checkbox component allows the active selection of one or more input values at a time. It typically appears in forms and modals. If you require the user to select a single option from a series of items, then the [Radio Button component](/forms/radio) should be used instead.


<TabSet>

<Tab title="Design">

<SketchWidget name="Checkbox" href="/standards-toolkit.sketch" />

### Anatomy
<CheckboxAnatomy />

1. **Checkbox Button**. The checkbox is a single value toggle.
2. **Label (Optional)**. Used to provide context to the Checkbox Button.


### States
<CheckboxStates />

The Checkbox Button has three available states - `Default`, `Hover`/`Active`, and `Checked`.

</Tab>

<Tab title="Develop">

The `Checkbox` component allows the active selection of an arbitrary amount of options. The initial release for this component has been written to work with <a href="https://jaredpalmer.com/formik/">Formik</a> though a Redux Forms variation will follow.

The Checkbox component can be used on it's own in a regular form, if you use the correct syntax, or used within a Formik form as the render component for a `Field`.

### Example with Formik
<CodeHighlighter source={`<Checkbox name="example1" label="My Label 1" value="true" checked />`} language="javascript">
  <Form>
    <Checkbox name="example1" label="My Label 1" value="true" checked />
    <Checkbox name="example2" label="My Label 2" />
    <Checkbox name="example3" label="My Label 3" />
  </Form>
</CodeHighlighter>

### Properties
The `Checkbox` component accepts the standard field properties as defined by Formik but is also
responsible for rendering an optional field label and any information or error messages associated 
with the field:

<DataTable caption="FieldProps" data={[
  {
    Name: 'name',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'The field name',
  },
  {
    Name: 'value',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'The field current value',
  },
   {
    Name: 'onChange',
    Type: '(React.SyntheticEvent):void',
    Required: 'True',
    Default: '',
    Description: 'Called when the field value changes',
  },
  {
    Name: 'onBlur',
    Type: '(React.SyntheticEvent):void',
    Required: 'True',
    Default: '',
    Description: 'Called when the field loses focus',
  },
]} />
<br />
<DataTable caption="FormProps" data={[
  {
    Name: 'errors',
    Type: '{ string: string }',
    Required: 'False',
    Default: '{}',
    Description: 'A hashmap using the field name as a key and the error message associated with it',
  },
  {
    Name: 'touched',
    Type: '{ string: boolean }',
    Required: 'False',
    Default: '{}',
    Description: 'A hashmap using the field name as a key and indicating if it has been touched or not',
  },
]} />
<br />
<DataTable caption="Checkbox" data={[
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Optional additional css class to associate with the component wrapper',
  },
  {
    Name: 'disabled',
    Type: 'boolean',
    Required: 'False',
    Default: 'false',
    Description: 'Mark the field as disabled/inactive',
  },
  {
    Name: 'field',
    Type: 'FieldProps',
    Required: 'True',
    Default: '',
    Description: 'Can be manually provided or sent from Formik. Indicates any errors and which fields have been touched',
  },
  {
    Name: 'id',
    Type: 'string',
    Required: 'False',
    Default: 'unique id',
    Description: 'Provide the ID for a field and tie it to its label. If one is not provided then a unique id will be created',
  },
  {
    Name: 'label',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Ideally a field should include a label to help the user understand what the field is for and help screen readers',
  },
]} />

</Tab>
</TabSet>
