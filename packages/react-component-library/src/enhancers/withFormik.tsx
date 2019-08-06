import React from 'react'

import FieldProps from '../types/FieldProps'
import FormProps from '../types/FormProps'

export interface FormikProps {
  field: FieldProps
  form: FormProps
}

const withFormik = (FormComponent: React.FC<any>) => ({
  field,
  form: { touched, errors },
  ...props
}: FormikProps) => {
  const hasError = touched[field.name] && errors[field.name]

  return (
    <>
      <FormComponent
        {...field}
        {...props}
        className={hasError ? 'is-invalid' : ''}
      />
      {hasError && (
        <div className="rn-form__invalid-feedback" data-testid="error">
          {errors[field.name]}
        </div>
      )}
    </>
  )
}

export default withFormik
