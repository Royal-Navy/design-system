---
title: Input
description: A simple list of links listed inline separated by a pipe
---

import { Links, Tab, TabSet, TextInput } from '@royalnavy/react-component-library'
import Field from '../../../../components/containers/Field'
import DataTable from '../../../../components/presenters/data-table'
import CodeHighlighter from '../../../../components/presenters/code-highlighter'


# Input
A simple list of links listed inline separated by a pipe

## Usage

<TabSet>

<Tab title="Design">

  ## Design
  Introduction to the design section.

  ### Anatomy
  The Anatomy is the breakdown of the component.

  [ Image breaking down the component’s anatomy ]

  Each part of the component in the image should be labelled with a number. Underneath, create a list of each of the labeled items, explaining what they are. This list should also indicate to the reader whenever an item is an optional include.

  Any specific notes on a part of the anatomy breakdown should be included here. This includes dos and donts with accompanying image examples.

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
