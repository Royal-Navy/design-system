---
title: Radio Enhanced
description: An enhanced version of the Radio Button with space for custom content.
header: true
---

import { Tab, TabSet, RadioEnhanced } from '@royalnavy/react-component-library'
import DataTable from '../../../../components/presenters/data-table'
import CodeHighlighter from '../../../../components/presenters/code-highlighter'
import SketchWidget from '../../../../components/presenters/sketch-widget'

import RadioEnhancedComponent from '../../../images/components/forms/radio-enhanced/Component'
import RadioEnhancedAnatomy from '../../../images/components/forms/radio-enhanced/Anatomy'
import RadioEnhancedStates from '../../../images/components/forms/radio-enhanced/States'
import RadioEnhancedVariation from '../../../images/components/forms/radio-enhanced/Variation'

# Overview
The Radio Button has an enhanced version (`RadioEnhanced`) when a label isn't sufficient by itself. This button provides a space for a description or custom content. It is wrapped in a frame to highlight its clickable region. 

<RadioEnhancedComponent />

## Usage
The `RadioEnhanced` component allows the active selection of one input at a time. It typically appears in forms and modals. If you require the user to select multiple options, then the [CheckboxEnhanced component](/forms/checkbox-enhanced) should be used instead.


<TabSet>

<Tab title="Design">

<SketchWidget name="RadioEnhanced" href="/design-system.sketch" />

### Anatomy

<RadioEnhancedAnatomy />

1. **Frame**. Wraps the component, highlighting when hovered.
1. **Radio Button**. A single value toggle.
1. **Title**. Provides context to the Radio Button.
2. **Description (Optional)**. Additional information.


### States

<RadioEnhancedStates />

The enhanced version of the Radio Button has three states - `Default`, `Hover`/`Active`, and `Checked`.


### Variations

<RadioEnhancedVariation />

The Enhanced Radio Button has a variation where custom content can be added in place of its description. The Radio button and Title must remain in the component so the user knows what to expect with its functionality.




</Tab>

<Tab title="Develop">

The `Radio` component allows the active selection of one input at a time. The initial release for this component has been written to work with <a href="https://jaredpalmer.com/formik/">Formik</a> though a Redux Forms variation will follow.

The `Radio` component can be used on its own in a regular form, if you use the correct syntax, or used within a Formik form as the render component for a `Field`.

### Example with Formik
The use of `FormikGroup` means that if a validation error occurs, then the inputs are shown with the correct aria attributes and associated with a single error message.

<CodeHighlighter source={`<FormikGroup>
  <RadioEnhanced name="example" title="My Label 1" />
  <RadioEnhanced name="example" title="My Label 2" />
</FormikGroup>`} language="javascript">
  <form>
    <RadioEnhanced name="example" title="My Label 1" />
    <RadioEnhanced name="example" title="My Label 2" />
  </form>
</CodeHighlighter>

### Description Variant

<CodeHighlighter source={`<FormikGroup>
  <RadioEnhanced name="example" title="My Label 1" description="..." />
  <RadioEnhanced name="example" title="My Label 2" description="..." />
</FormikGroup>`} language="javascript">
  <form>
    <RadioEnhanced name="example" title="My Label 1" description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam." />
    <RadioEnhanced name="example" title="My Label 2" description="Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facillisis in, egestas eget quam." />
  </form>
</CodeHighlighter>

### Properties
The `Radio` component accepts the standard field properties as defined by Formik. It is also responsible for rendering an optional field label, including any information or error messages associated with the field. 

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
<DataTable caption="Radio" data={[
  {
    Name: 'isChecked',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'Optional to set the initial value of a radio field',
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
    Default: 'Unique ID',
    Description: 'Provide the ID for a field and tie it to its label. If one is not provided then a unique ID will be created',
  },
  {
    Name: 'title',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Ideally a field should include a label to help the user understand what the field is for and help screen readers',
  },
  {
    Name: 'description',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Include a short description to be displayed alongside the radio within its frame.',
  },
]} />

</Tab>
</TabSet>

