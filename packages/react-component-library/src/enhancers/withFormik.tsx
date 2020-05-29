import classNames from 'classnames'
import React from 'react'

import FieldProps from '../types/FieldProps'
import FormProps from '../types/FormProps'

export interface FormikProps {
  className?: string
  field: FieldProps
  form: FormProps
}

export const withFormik = (FormComponent: React.FC<any>) => ({
  field,
  form: { touched, errors },
  className,
  ...props
}: FormikProps) => {
  const hasError = touched[field.name] && errors[field.name]

  const formikWrapperClassNames = classNames(
    'formik-form-component',
    `formik-form-component--${FormComponent.displayName}`
  )

  const formComponentClassNames = classNames(className, {
    'is-invalid': hasError,
  })

  return (
    <div className={formikWrapperClassNames}>
      <FormComponent
        {...field}
        {...props}
        className={formComponentClassNames}
      />
      {hasError && (
        <div className="rn-form__invalid-feedback" data-testid="error">
          {errors[field.name]}
        </div>
      )}
    </div>
  )
}
