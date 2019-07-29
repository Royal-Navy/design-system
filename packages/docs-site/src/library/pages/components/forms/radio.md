---
title: Radio
description: Radios let users select one option at a time.
header: true
---

import { Tab, TabSet, Radio } from '@royalnavy/react-component-library'
import Field from '../../../../components/containers/Field'
import DataTable from '../../../../components/presenters/data-table'
import CodeHighlighter from '../../../../components/presenters/code-highlighter'
import SketchWidget from '../../../../components/presenters/sketch-widget'

# Input
Radios let users select one option at a time.

## Usage
The Radio component allows the active selection of one input at a time. It typically appears in forms and modals. If you require the user to select multiple options, then the [Checkbox component](/forms/checkbox) should be used instead.

<TabSet>

<Tab title="Design">

<SketchWidget name="Radio" href="/standards-toolkit.sketch" />

## Design
Introduction to the design section.

### Anatomy
The Anatomy is the breakdown of the component.

[ Image breaking down the component’s anatomy ]

Each part of the component in the image should be labelled with a number. Underneath, create a list of each of the labeled items, explaining what they are. This list should also indicate to the reader whenever an item is an optional include.

Any specific notes on a part of the anatomy breakdown should be included here. This includes dos and don’ts with accompanying image examples.

### Sizing & Spacing
Much like the Anatomy section, the Sizing & Spacing section should be a breakdown of the construction of the component. Red line guides should be added to the component, showing the spacing between the different anatomy parts.

### States (if applicable) 
This section covers all the different component states including its default state, hover, active, and disabled.
[ Image / interactive example of component states ]

### Hierarchy & Placement
This section covers how a component should sit within an application’s hierarchy. It also provides insight as when to use the different variations listed below.

### Variation [ Repeatable Section ] 
Introduction to the component variation. For each sub heading, outline any differences between the default component and this variation. 

[ Image / interactive example of Component ]

#### Usage

#### Anatomy
[ Image breaking down the component’s anatomy ]

#### Sizing & Spacing
[ Image of component with red guide lines overlaid ]

#### States (if applicable)
[ Image / interactive example of component states ]

#### Hierarchy & Placement

### Adornments [ Repeatable Section ]
Include any component adornments here. Much like the variations section above, this section is repeatable.

[ Image / interactive example of Component ]

#### Usage

#### Anatomy
[ Image breaking down the component’s anatomy ]

### Sizing & Spacing
[ Image of component with red guide lines overlaid ]

### States (if applicable)
[ Image / interactive example of component states ]

</Tab>

<Tab title="Develop">

The `Radio` component allows the actiev selection of one input at a time. The initial release for this component has been written to work with <a href="https://jaredpalmer.com/formik/">Formik</a> though a Redux Forms variation will follow.

The Radio component can be used on it's own in a regular form, if you use the correct syntax, or used within a Formik form as the render component for a `Field`.

### Example with Formik
<CodeHighlighter source={`<Formik initialValues={initialValues} onSubmit={onSubmit}>

  <Form>
    <Field name="example" id="option1" component={Radio} label="My Label 1" />
    <Field name="example" id="option2" component={Radio} label="My Label 2" />
  </Form>
</Formik>`} language="javascript">
  <div>
      <Field className="rn-radio--is-valid" name="example" id="option1" value="option1" component={Radio} label="My Label 1" />
      <Field className="rn-radio--is-valid" name="example" id="option2" value="option1" component={Radio} label="My Label 2" />
  </div>
</CodeHighlighter>

### Properties
The `Radio` component accepts the standard field properties as defined by Formik but is also
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
<DataTable caption="Radio" data={[
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
