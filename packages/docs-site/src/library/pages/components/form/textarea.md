---
title: Textarea
description: Textareas allow users to enter multiple lines of text.
header: true
---

import { Tab, TabSet, Formik as FormComponents } from '@royalnavy/react-component-library'
import { Field, Formik, Form } from 'formik'
import DataTable from '../../../../components/presenters/data-table'
import CodeHighlighter from '../../../../components/presenters/code-highlighter'
import SketchWidget from '../../../../components/presenters/sketch-widget'
import TextareaComponent from '../../../images/components/forms/textarea/Component'
import TextareaAnatomy from '../../../images/components/forms/textarea/Anatomy'
import TextareaStates from '../../../images/components/forms/textarea/States'
import TextareaVariations from '../../../images/components/forms/textarea/Variations'

# Textarea
The textarea component lets users enter and edit multiple lines of text.

<TextareaComponent />

## Usage
The Textarea component should be used to let users enter multiple lines of text. It typically appears in Forms and Modals, however can be used wherever the requirement for multiple lines of text exists. If you require the user to enter a single line of text, use the [Text Input component](/components/form/input) instead.


<TabSet>

<Tab title="Design">

<SketchWidget name="Textarea" href="/standards-toolkit.sketch" />

The textarea should contain a concise message, communicating to the user the expected content. To ensure there is appropriate readability of the entered content, try to make the Textarea container stretch to the full width of its parent.

### Anatomy

<TextareaAnatomy />

1. **Label**. The Label should be used to describe to the user what the desired input should be. Every textarea should have a text label.
2. **User Input**. The User Input is the text the user has entered into the Textarea.
3. **Container**. The Container wraps the entire component.

### States

<TextareaStates />

The Textarea has 3 states - default, active, and filled.


### Variations

<TextareaVariations />

The textarea comes in _two_ variations - fixed and resizable. The fixed version of the Textarea cannot be resized by the user, whereas the resizable one can. **Note:** Whilst the resizable Textarea can be resized by the user, it can only be changed on the `y-axis`. This is to prevent the interface breaking when the textarea is stretched outside of its parent container.

</Tab>

<Tab title="Develop">
The `TextArea` component can be used to capture multiline text a form. Like other form components, this component can be used
either on it's own with values and onChange handlers passed to it, or with Formik by using the variation of the component enhanced to with it.

### Example with Formik
<CodeHighlighter source={`<Formik 
  initialValues={initialValues} 
  onSubmit={onSubmit} 
  validationSchema={validationSchema}
>
<Form>
   <Field
      name="description"
      component={FormComponents.TextArea}
      label="Description"
    />
</Form>
</Formik>`} language="javascript">
  <Formik initialValues={{description: ''}} onBlur={() => {}} onChange={(data) => {console.log}}> 
  <Form>
     <Field
        name="description"
        component={FormComponents.TextArea}
        label="Description"
      />
  </Form>
  </Formik>
</CodeHighlighter>


### Properties
The `TextArea` component simply displays a field with the specified value. In order ot allow the user to make changes to
the field content a 'onChange' property must accept the new field value and update the state for the form it belongs to and 
cause a re-render to take place with the updated value passed back to the field to display.

<DataTable caption="TextArea" data={[
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
    Name: 'disabled',
    Type: 'boolean',
    Required: 'False',
    Default: 'false',
    Description: 'Mark the field as disabled/inactive',
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
    Name: 'value',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'The field current value',
  },
]} />
</Tab>
</TabSet>
