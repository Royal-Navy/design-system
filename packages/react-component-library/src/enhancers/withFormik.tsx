import React from 'react'
import classNames from 'classnames'
import get from 'lodash/get'
import { v4 as uuidv4 } from 'uuid'
import {
  FormikErrors,
  FormikValues,
  FormikTouched,
  FormikHandlers,
} from 'formik'

import { ComponentWithClass } from '../common/ComponentWithClass'
import { InputValidationProps } from '../common/InputValidationProps'
import { FieldProps } from '../common/FieldProps'
import { FormProps } from '../common/FormProps'

interface ErrorProps {
  id: string
  text: string
}

interface FieldErrorProps {
  id: string
  children: string
}

interface A11yProps {
  'aria-describedby'?: string
  'aria-invalid'?: boolean
}

// WithFormikProps
export interface FormikProps extends ComponentWithClass, A11yProps {
  field: FieldProps
  form: FormProps
}

export interface FormikEnhancedFormComponentProps
  extends ComponentWithClass,
    InputValidationProps,
    A11yProps {
  name: string
  value: string
  label: string
  onChange: FormikHandlers['handleChange']
  onBlur: FormikHandlers['handleBlur']
}

export function getError(
  touched: FormikTouched<FormikValues>,
  errors: FormikErrors<FormikValues>,
  fieldName: string
): ErrorProps {
  const fieldTouched = get(touched, fieldName)
  const fieldError = get(errors, fieldName)

  if (fieldTouched && fieldError) {
    return {
      id: `${fieldName}-error-${uuidv4()}`,
      text: fieldError as string,
    }
  }

  return null
}

export function transformErrorToAriaAttributes(error: ErrorProps): A11yProps {
  if (!error) {
    return null
  }

  return {
    [`aria-describedby`]: error.id,
    [`aria-invalid`]: true,
  }
}

export const FieldError: React.FC<FieldErrorProps> = (props) => (
  <div className="rn-form__invalid-feedback" data-testid="error" {...props} />
)

export const withFormik = <P extends FormikEnhancedFormComponentProps>(
  FormComponent: React.FC<P>
) => ({
  field,
  form: { touched, errors },
  className,
  ...props
}: FormikProps): JSX.Element => {
  const { name } = field
  const error = getError(touched, errors, name)
  const isInvalid = !!error

  const formComponentClassNames = classNames(className, {
    'is-invalid': isInvalid,
  })

  const formComponentProps = {
    ...field,
    ...transformErrorToAriaAttributes(error),
    ...props,
    isInvalid,
    className: formComponentClassNames,
  }

  return (
    <div>
      <FormComponent {...(formComponentProps as P)} />
      {!props['aria-describedby'] && error && (
        <FieldError id={error.id}>{error.text}</FieldError>
      )}
    </div>
  )
}
