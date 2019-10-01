import classNames from 'classnames'
import React from 'react'

import FieldProps from '../types/FieldProps'
import FormProps from '../types/FormProps'

export interface FormikProps {
  className?: string
  field: FieldProps
  form: FormProps
}

const withFormik = (FormComponent: React.FC<any>) => ({
  field,
  form: { touched, errors },
  className,
  ...props
}: FormikProps) => {
  const hasError = touched[field.name] && errors[field.name]
  const formComponentClassNames = classNames(className, {
    'is-invalid': hasError,
  })
  const errorMessage = hasError ? errors[field.name] : undefined

  return (
    <>
      <FormComponent
        {...field}
        {...props}
        className={formComponentClassNames}
        errorMessage={errorMessage}
      />
    </>
  )
}

export default withFormik
