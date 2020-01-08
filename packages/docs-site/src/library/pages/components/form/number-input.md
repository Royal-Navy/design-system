---
title: Number Input
description: The Number Input is an Input component. It only accepts numbers that can be stepped with the additional arrows.
header: true
---
import { Formik, Form, Field } from 'formik'
import { Icons, Tab, TabSet, Formik as FormikControls } from '@royalnavy/react-component-library'
import { IconBrightnessHigh } from '@royalnavy/icon-library'
import DataTable from '../../../../components/presenters/data-table'
import CodeHighlighter from '../../../../components/presenters/code-highlighter'
import SketchWidget from '../../../../components/presenters/sketch-widget'

import NumberClickerComponent from '../../../images/components/forms/number-clicker/Component'
import NumberClickerAnatomy from '../../../images/components/forms/number-clicker/Anatomy'
import NumberClickerStates from '../../../images/components/forms/number-clicker/States'
import NumberClickerButtonStates from '../../../images/components/forms/number-clicker/ButtonStates'

# Overview
The Number Input component is a field input that only accepts numbers and can be stepped with the additional arrows.

<NumberClickerComponent />

## Usage
The Number Input allows the user to step between predetermined values. They can also manually enter a number into the input. 

<TabSet>

<Tab title="Design">

<SketchWidget name="NumberInput" href="/standards-toolkit.sketch" />

  The Number Input should stand out and be easily discoverable by users. The text label should be concise, effectively communicating to the user the range or value required.

  ### Anatomy
  <NumberClickerAnatomy /> 

  1. **Label**. The Label should be used to describe to the user what the desired input should be. Every field should have a text label. The label should always be visible on all inputs, excluding search bars.
  2. **User Input**. The main area in which the user enters a value.
  3. **Directional Buttons**. The Directional buttons step between predetermined values.
  4. **Container**. The Container wraps the entire component.

  
### Sizing & Spacing
The Number Input is only available in one size. It has been created in relation to other inputs, so it will line up correctly in forms.

### States
<NumberClickerStates />

The Number Input has two states - `Default` and `Focused`.

<NumberClickerButtonStates />

The Directional Buttons also have state. Clicking on the up arrow will increase the entered value, and clicking the down arrow will decrease the value.

</Tab>


<Tab title="Develop">

The `NumberInput` component acts like a regular input except that it only allows numbers to be entered and
can use buttons to increase and decrease in increments, defaulted to 1.

The NumberInput can be used in conjunction with `withFormik` to allow it to be used with a Formik Field component.

### Example
<CodeHighlighter source={`
<Formik
  initialValues={{ muskets: 5, pistols: 10, guns: 100 }}
  onSubmit={onSubmit}
>
  <Form>
    <Field
      className="is-valid"
      component={FormikControls.NumberInput}
      label="Muskets"
      max={10}
      min={1}
      name="muskets"
    />
    <Field
      className="is-invalid"
      component={FormikControls.NumberInput}
      label="Pistols"
      name="pistols"
    />
    <Field
      component={FormikControls.NumberInput}
      label="Guns"
      name="guns"
      step={5}
    />
    <Field
      component={FormikControls.NumberInput}
      label="Brightness"
      name="brintness"
      step={5}
      startAdornment={<IconBrightnessHigh />}
    />
    <Field
      component={FormikControls.NumberInput}
      label="Speed"
      name="speed"
      step={5}
      startAdornment="m/s"
    />
  </Form>
</Formik>
  `} language="javascript">
  <div style={{ maxWidth: 200 }}>
        <Formik
          initialValues={{ muskets: 5, pistols: 10, guns: 100 }}
          onSubmit={(data) => console(data)}
        >
          <Form>
            <Field
              className="is-valid"
              component={FormikControls.NumberInput}
              label="Ships"
              max={10}
              min={1}
              name="ships"
            />
            <Field
              className="is-invalid"
              component={FormikControls.NumberInput}
              label="Aircraft"
              name="aircraft"
            />
            <Field
              component={FormikControls.NumberInput}
              label="Cars"
              name="cars"
              step={5}
            />
            <Field
              component={FormikControls.NumberInput}
              label="Brightness"
              name="brintness"
              step={5}
              startAdornment={<IconBrightnessHigh />}
            />
            <Field
              component={FormikControls.NumberInput}
              label="Speed"
              name="speed"
              step={5}
              startAdornment="m/s"
            />
          </Form>
        </Formik>
      </div>
</CodeHighlighter>

### Properties
<DataTable caption="NumberInput" data={[
  {
    Name: 'autofocus',
    Type: 'boolean',
    Required: 'False',
    Default: '',
    Description: 'Sets focus on the field when it is loaded',
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
    Name: 'footnote',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Text to display below the field',
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
    Name: 'max',
    Type: 'number',
    Required: 'False',
    Default: '',
    Description: 'The maximum value permitted',
  },
  {
    Name: 'min',
    Type: 'number',
    Required: 'False',
    Default: '',
    Description: 'The minimum value permitted',
  },
  {
    Name: 'placeholder',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'If a label is not provided then a placeholder should be.',
  },
  {
    Name: 'name',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The form field name property associated with the input',
  },
  {
    Name: 'onBlur',
    Type: '(event):void',
    Required: 'False',
    Default: '',
    Description: 'The maximum value permitted',
  },
  {
    name: 'onChange',
    Type: '(event):void',
    Required: 'True',
    Default: '',
    Description: 'A handler that is called with a input onChange event, passing the target, field name and field value',
  },
  {
    Name: 'placeholder',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'A piece of text to show in the input when there is no value to display',
  },
  {
    Name: 'step',
    Type: 'number',
    Required: 'False',
    Default: '1',
    Description: 'The number to increase/decrease a number when the buttons are clicked. Note that user can still enter a number that does not conform to this step, so this should be used in conjunction with validation rules',
  },
  {
    Name: 'value',
    Type: 'number',
    Required: 'False',
    Default: '',
    Description: 'The value to display',
  },
  {
    Name: 'startAdornment',
    Type: 'string | ReactNode',
    Required: 'False',
    Default: '',
    Description: 'An adornment to add to the start of the input field.',
  },
]} />
</Tab>
</TabSet>
