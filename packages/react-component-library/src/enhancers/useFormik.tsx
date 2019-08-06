import React from 'react'

import FieldProps from '../types/FieldProps'
import FormProps from '../types/FormProps'

export interface FormikProps {
  field: FieldProps
  form: FormProps
}

const useFormik = (FormComponent: React.FC<any>) => ({
  field,
  form: { touched, errors },
  ...props
}: FormikProps) => (
  <div>
    <FormComponent {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="rn-form__invalid-feedback">{errors[field.name]}</div>
    )}
  </div>
)

export default useFormik
