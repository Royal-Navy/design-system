import React from 'react'
import classNames from 'classnames'
import get from 'lodash/get'
import { v4 as uuidv4 } from 'uuid'

import FieldProps from '../types/FieldProps'
import FormProps from '../types/FormProps'

export interface FormikProps {
  className?: string
  field: FieldProps
  form: FormProps
  'aria-describedby'?: string
  'aria-invalid'?: boolean
}

interface ErrorProps {
  id: string
  text: string
}

export function getError(
  touched: any,
  errors: any,
  fieldName: any
): ErrorProps {
  const fieldTouched = get(touched, fieldName)
  const fieldError = get(errors, fieldName)

  if (fieldTouched && fieldError) {
    return {
      id: `${fieldName}-error-${uuidv4()}`,
      text: errors[fieldName],
    }
  }

  return null
}

export function transformErrorToAriaAttributes(error: ErrorProps) {
  if (!error) {
    return null
  }

  return {
    [`aria-describedby`]: error.id,
    [`aria-invalid`]: true,
  }
}

interface FieldErrorProps {
  id: string
  children: string
}

export const FieldError: React.FC<FieldErrorProps> = (props) => (
  <div className="rn-form__invalid-feedback" data-testid="error" {...props} />
)

export const withFormik = (FormComponent: React.FC<any> | string) => ({
  field,
  form: { touched, errors },
  className,
  ...props
}: FormikProps) => {
  const { name } = field
  const error = getError(touched, errors, name)

  const formComponentClassNames = classNames(className, {
    'is-invalid': !!error,
  })

  const formComponentProps = {
    ...field,
    ...transformErrorToAriaAttributes(error),
    ...props,
    className: formComponentClassNames,
  }

  return (
    <div>
      <FormComponent {...formComponentProps} />
      {!props['aria-describedby'] && error && (
        <FieldError id={error.id}>{error.text}</FieldError>
      )}
    </div>
  )
}
