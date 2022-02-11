import React, { useMemo } from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledField } from './partials/StyledField'
import { StyledError } from './partials/StyledError'
import { StyledHintText } from './partials/StyledHintText'
import { getId } from '../../helpers'

export type ErrorType = {
  error: boolean | string
}

export interface FieldProps extends ComponentWithClass {
  hintText?: string
  errors?: ErrorType[]
}

export function ariaAttributes(
  isInvalid: boolean,
  fieldId: string
): Record<string, string | boolean> {
  return {
    'aria-describedby': fieldId,
    ...(isInvalid && {
      'aria-errormessage': `${fieldId}-errormessage`,
      'aria-invalid': true,
    }),
  }
}

export const Field: React.FC<FieldProps> = ({
  children,
  errors = [],
  hintText,
  className,
}) => {
  const isInvalid: boolean = useMemo(() => {
    return errors.some(({ error }) => error)
  }, [errors])

  const fieldId: string = useMemo(() => getId('field'), [])

  return (
    <StyledField className={className}>
      {isInvalid &&
        errors.map(({ error }) => {
          return (
            error &&
            typeof error === 'string' && (
              <StyledError
                id={`${fieldId}-errormessage`}
                key={error}
                data-testid="field-error-message"
                role="alert"
              >
                {error}
              </StyledError>
            )
          )
        })}
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return null
        }

        return React.cloneElement(child, {
          ...child.props,
          ...ariaAttributes(isInvalid, fieldId),
          isInvalid,
        })
      })}
      {hintText && (
        <StyledHintText id={fieldId} data-testid="field-hint-text">
          {hintText}
        </StyledHintText>
      )}
    </StyledField>
  )
}

Field.displayName = 'Field'
