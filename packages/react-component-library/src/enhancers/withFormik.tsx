import React from 'react'
import classNames from 'classnames'
import get from 'lodash/get'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import { FieldProps } from '../common/FieldProps'
import { FormProps } from '../common/FormProps'

const { color, fontSize, spacing } = selectors

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
      text: fieldError,
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

const StyledFieldError = styled.div`
  color: ${color('danger', '700')};
  margin-bottom: ${spacing('4')};
  font-size: ${fontSize('base')};
`

export const FieldError: React.FC<FieldErrorProps> = (props) => (
  <StyledFieldError data-testid="error" {...props} />
)

export const withFormik = (FormComponent: React.FC<any> | string) => ({
  field,
  form: { touched, errors },
  className,
  ...props
}: FormikProps) => {
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
      <FormComponent {...formComponentProps} />
      {!props['aria-describedby'] && error && (
        <FieldError id={error.id}>{error.text}</FieldError>
      )}
    </div>
  )
}
