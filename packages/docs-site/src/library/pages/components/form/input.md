---
title: Text Input
description: Text inputs let users enter and edit text.
header: true
---

import { Links, Tab, TabSet, Formik as FormComponents} from '@royalnavy/react-component-library'
import { Field, Formik, Form } from 'formik'
import DataTable from '../../../../components/presenters/data-table'
import CodeHighlighter from '../../../../components/presenters/code-highlighter'
import SketchWidget from '../../../../components/presenters/sketch-widget'

import InputComponent from '../../../images/components/forms/input/Component'
import InputAnatomy from '../../../images/components/forms/input/Anatomy'
import InputStates from '../../../images/components/forms/input/States'
import InputPreComponent from '../../../images/components/forms/input/PrePost'
import InputPreAnatomy from '../../../images/components/forms/input/PreAnatomy'

# Overview

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

1. **Label**. Should be used to describe to the user what the desired input should be. Every field should have a text label. The label should always be visible on all inputs, excluding search bars.
2. **User Input**. This is the text the user has entered into the Text Input.
3. **Container**. Wraps the entire component.

### Sizing & Spacing
The Text Input is available in one standard size. It has been created in relation to other form elements to ensure consistency.

### States
<InputStates />

The Text Input has three states - `default`, `active`, and `filled`.

---

### Pre & Post Fix Labels
The Fix Labels are used for adding additional information to an input. They can be either icons or text.
<InputPreComponent />

#### Usage
The labels should accompany the main input label. They should not be the main focus of the Text Input.

#### Anatomy
<InputPreAnatomy />

1. **Container**. Wraps the Pre and Post fixed Labels
2. **Content**. Can be either text or an icon.

### Sizing & Spacing
The Pre and Post fixes don’t have any inherit sizes themselves. As they are additions to the Text Input component, they are sized according to the input.

### Hierarchy & Placement
Only Pre and Post fix should be used on each input.

</Tab>

<Tab title="Develop">
The `TextInput` component is used to capture and display text value within a form. The basic component can be used with a handler to control state or an enhanced `Formik` version can be used with in Formik forms.

### Example with Formik
<CodeHighlighter source={`import { Field, Formik, Form } from 'formik'
import { Formik as FormComponents} from '@royalnavy/react-component-library'
const { TextInput } from FormComponents
...
<Formik initialValues={initialValues} onSubmit={onSubmit}>

<Form>
  <Field className="rn-textinput--is-valid" name="colour" component={TextInput} label="My Label" />
  <Field name="name" component={TextInput} label="Name" />
  <Field name="city" component={TextInput} label="City" />
  <Field name="hero" component={TextInput} endAdornment={<Search />} label="Hero" />
  <Field name="fruit" component={TextInput} startAdornment={<Search />} label="Fruit" />
  <Field name="search" component={TextInput} placeholder="search" />
</Form>
</Formik>`} language="javascript">
  <Formik initialValues={{name: '', city: '', hero: '', fruit: '', search: ''}} onSubmit={() => {}}> 
  <Form>
      <Field className="rn-textinput--is-valid" name="colour" component={FormComponents.TextInput} label="My Label" />
      <Field 
        name="name" 
        component={FormComponents.TextInput} 
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
      <Field name="city" component={FormComponents.TextInput} label="City" />
      <Field name="hero" component={FormComponents.TextInput} endAdornment={<Icons.Search />} label="Hero" />
      <Field name="fruit" component={FormComponents.TextInput} startAdornment={<Icons.Search />} label="Fruit" />
      <Field name="search" component={FormComponents.TextInput} placeholder="search" />
      </Form>
  </Formik>
</CodeHighlighter>


### Properties
The `TextInput` component renders an input element with the value passed to it. The field itself does not handle state, this is achieved by passing both the current value for the field and an `onChange` function. This function is called with a new value when a user interacts with the field, it is up to that function to update the state and pass the new value to display back to the TextInput. This is described in more detail in the [form overview](/components/form).

An enhanced version of the field is also exported that is compatible with Formik.

<DataTable caption="TextInput" data={[
  {
    Name: 'autoFocus',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'Mark the field with the autofocus property causing the browser to focus on the field when the page loads.',
  },
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Optional additional css class to associate with the component wrapper',
  },
  {
    Name: 'isDisabled',
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
    Description: 'An optional component to display at the end of a field, such as a search SVG',
  },
  {
    Name: 'footnote',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'A message to display below the field'
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
    Name: 'name',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'The field name',
  },
  {
    Name: 'onBlur',
    Type: 'React.FormEvent<Element>',
    Required: 'True',
    Default: '',
    Description: 'Called when the field loses focus',
  },
  {
    Name: 'onChange',
    Type: 'React.ChangeEvent <HTMLTextAreaElement>',
    Required: 'True',
    Default: '',
    Description: 'Called when the field value changes',
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
    Description: 'An optional component to display at the start of a field, such as a search SVG',
  },
  {
    Name: 'type',
    Type: 'string',
    Required: 'False',
    Default: 'text',
    Description: 'The field type if it is not a standard text field',
  },
  {
    Name: 'value',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'The field current value',
  },
]} />

</Tab>
</TabSet>
