---
title: Input
description: Text inputs let users enter and edit text.
header: true
---

import { Links, Tab, TabSet, TextInput } from '@royalnavy/react-component-library'
import Field from '../../../../components/containers/Field'
import DataTable from '../../../../components/presenters/data-table'
import CodeHighlighter from '../../../../components/presenters/code-highlighter'
import SketchWidget from '../../../../components/presenters/sketch-widget'

import InputComponent from '../../../images/components/forms/input/component.svg'
import InputAnatomy from '../../../images/components/forms/input/anatomy.svg'
import InputStates from '../../../images/components/forms/input/states.svg'
import InputPreComponent from '../../../images/components/forms/input/pre-post.svg'
import InputPreAnatomy from '../../../images/components/forms/input/pre-anatomy.svg'

# Input
Text inputs let users enter and edit text.
<InputComponent />

## Usage
The Text Input should be used to let the user enter a single line of text. It typically appears in forms and modals. If you require the user to enter multi-line content, then the [Textarea component](/forms/textarea) should be used instead.

<TabSet>

<Tab title="Design">

<SketchWidget name="Input" href="/standards-toolkit.sketch" />

## Design
The Text Input should stand out and be easily discoverable by users. The text label should be concise, effectively communicating to the user the type of input required.

### Anatomy
<InputAnatomy />

1. **Label**. The Label should be used to describe to the user what the desired input should be. Every field should have a text label. The label should always be visible on all inputs, excluding search bars.
2. **User Input**. The User Input is the text the user has entered into the Text Input.
3. **Container**. The Container wraps the entire component.

### Sizing & Spacing
The Text Input is available in 1 standard size. It has been created in relation to other form elements to ensure consistency.

### States
<InputStates />

The Text Input has 3 states - default, active, and filled.

---

### Pre & Post Fix Labels
The Fix Labels are used for adding additional information to an input. They can be either icons or text.
<InputPreComponent />

#### Usage
The labels should accompany the main input label. They should be additive, and not the main focus of the Text Input.

#### Anatomy
<InputPreAnatomy />

1. **Container**. The Container wraps the Pre and Post fixed Labels
2. **Content**. The Content can be either text or an icon.

### Sizing & Spacing
The Pre and Post fixes don’t have any inherit sizes themselves. As they are additions to the Text Input component, they are sized according to the input.

### Hierarchy & Placement
Only Pre and Post fix should be used on each input.

</Tab>

<Tab title="Develop">

The `TextInput` component can be used for any text/number based input within a form. The initial release for this component has been written to work with <a href="https://jaredpalmer.com/formik/">Formik</a> though a Redux Forms variation will follow.

The TextInput component can be used on it's own in a regular form, if you use the correct syntax, or used within a Formik form as the render component for a `Field`.

### Example with Formik
<CodeHighlighter source={`<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

<Form>
  <Field className="rn-textinput--is-valid" name="colour" component={TextInput} label="My Label" />
  <Field name="name" component={TextInput} label="Name" />
  <Field name="city" component={TextInput} label="City" />
  <Field name="hero" component={TextInput} endAdornment={<Search />} label="Hero" />
  <Field name="fruit" component={TextInput} startAdornment={<Search />} label="Fruit" />
  <Field name="search" component={TextInput} placeholder="search" />
</Form>
</Formik>`} language="javascript">
  <div>
      <Field className="rn-textinput--is-valid" name="colour" component={TextInput} label="My Label" />
      <Field 
        name="name" 
        component={TextInput} 
        label="Name" 
        form={{
          errors: {
            name: 'Invalid Name'
          },
          touched: {
            name: true
          }
        }}
        />
      <Field name="city" component={TextInput} label="City" />
      <Field name="hero" component={TextInput} endAdornment={<Icons.Search />} label="Hero" />
      <Field name="fruit" component={TextInput} startAdornment={<Icons.Search />} label="Fruit" />
      <Field name="search" component={TextInput} placeholder="search" />
  </div>
</CodeHighlighter>


### Properties
The `TextInput` component accepts the standard field properties as defined by Formik but is also
responsible for rendering an optional field label and any information or error messages associated 
with the field. The component can also render 'Adornments'. An Adornment is a visual item at the start or
end of a field:

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
    Description: 'Called when the field looses focus',
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
<DataTable caption="TextInput" data={[
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
    Name: 'endAdornment',
    Type: 'React.ReactNode',
    Required: 'False',
    Default: '',
    Description: 'An optional component to display at the end of a field, such as a search svg',
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
  {
    Name: 'placeholder',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'If a label is not provided then a placeholder should be.',
  },
  {
    Name: 'startAdornment',
    Type: 'React.ReactNode',
    Required: 'False',
    Default: '',
    Description: 'An optional component to display at the start of a field, such as a search svg',
  },
  {
    Name: 'type',
    Type: 'string',
    Required: 'False',
    Default: 'text',
    Description: 'The field type if it is not a standard text field',
  },
]} />

</Tab>
</TabSet>
