---
title: Forms
description: Forms contain interactive controls for submitting information to a web server.
header: true
---

# Overview

Forms are an important part of almost all applications. Making sure they are displayed and behave consistently is a key principle behind the **NELSON Standards** component library.

The component library has support for regular React JS forms and also forms constructed using Formik. Support for `Redux Forms` will be added to a future release.

## Form components and state

Form components are a little different to most React components, they need to display a value and handle events triggered when a user wishes to change that value by typing in a field or selecting an option. They are often referred to as [controlled components](https://reactjs.org/docs/forms.html#controlled-components). All form components in the component library are stateless, they display the contents of the 'value' property and call the `onChange` function passed in as a property when a change is made. It is the job of the onChange function to change the state and pass the new value back in the value property.

Below is an example of a field with the value state managed by the container:

```
import React, { useState } from 'react'
import { TextInput } from '@royalnavy/react-component-library

const MyForm = () => {
  const [colour, setColour] = useState('Orange')

  return (
    <form>
      <TextInput 
        label="Colour" 
        name="colour"
        value={color} 
        onChange=((event) => setColor(event.target.value)) 
      />
    </form>
  )
}
```

## Form component display

Form fields are made up of more than just the input element. The component toolkit groups together the form input with its associated label. Some components provide properties for additional visual elements. Please see the individual component documentation for details of these properties.

## Errors

One thing that all form components have in common is that they need to indicate if there is an error associated with the form element. Each form component has an 'errorMessage' property which should be used to pass on a message indicating the nature of the error. Additionally, the classname for the component should include 'is-invalid' to enable visual styles to highlight the error.

```
import { TextInput } from '@royalnavy/react-component-library

const MyForm = () => {
  const [colour, setColour] = useState('Orange')
  const [errorMessage, setErrorMessage] = useState()

  onFieldChange = (event) => {
    setColor(event.target.value)
    if (event.target.value.length < 3) {
      setErrorMessage('Too short)
    } else {
      setErrorMessage(null)
    }
  }

  return (
    <form>
      <TextInput 
        className={error ? 'is-invalid' : null}
        errorMessage={errorMessage}
        label="Colour"
        name="colour"
        value={color} 
        onChange=(onFieldChange) 
      />
    </form>
  )
}
```

## Form libraries

Building forms can result in large amounts of boilerplate/repetitive code and forms can grow to become complex once things such as validation are introduced. With this growth in complexity and size, there is the added risk of different developers adopting different patterns or code becoming bloated and difficult to maintain. With this in mind, a small number of frameworks have been created to help the developer and provide patterns to solve common challenges. The two most popular libraries are [Formik](https://jaredpalmer.com/formik/) and [Redux Forms](https://redux-form.com).

### Formik

Formik promises a toolkit to build forms 'without the tears', though it is not always as simple as it promises. Formik is responsible for managing the forms state, triggering events integrating with a validation library.

When using Formik, the initial values for a form are passed into it and the developer specifies the form layout including the fields that should be displayed. For each field, the name property must be provided and Formik is responsible for assigning the associated value.

Formik includes a 'Field' component that by default will render a regular textinput and accepts a 'component' property that is responsible for rendering the field. The component library uses this feature to integrate with Formik. It exposes a Formik version of all of the component library form components, on an object named 'Formik'.

Below is a version of the earlier form example but uses Formik and the **NELSON Standards Toolkit**:

```
import { Formik, Form } from 'formik'
import { Formik as FormComponents } from '@royalnavy/react-component-library
import * as Yup from 'yup';

const { TextInput } = FormComponents

const ColorSchema = Yup.object().shape({
  colour: Yup.string()
    .min(3, 'Too Short!')
    .required('Required'),
});

const MyForm = () => (
    <Formik 
      initialValues={{ color: 'orange' }} 
      onSubmit={(data) => console.log(data)}
      validationSchema={ColorSchema}
    >
      <Form>
        <Field component={TextInput} label="Colour" name="colour" />
      </Form>
    </form>
  )
}
```

Note: because the name of the object exposed by the component library conflicts with the name of the object exported by Formik, you must alias it to another name.

In the above example [Yup](https://github.com/jquense/yup) is used to provide a standardized way of handling validation. Yup is not required by Formik but the two are proven to work together. This approach scales well and any developer who has worked on a Formik form, will be able to understand the code.

### Redux Forms

Redux support for the form components will be provided in a future release.
