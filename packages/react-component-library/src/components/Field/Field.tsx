import React, { useMemo } from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledField } from './partials/StyledField'
import { StyledError } from './partials/StyledError'
import { StyledHintText } from './partials/StyledHintText'

export type ErrorType = {
  error: boolean | string
}

export interface FieldProps extends ComponentWithClass {
  hintText?: string
  errors?: ErrorType[]
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

  return (
    <StyledField className={className}>
      {isInvalid &&
        errors.map(({ error }) => {
          return (
            error &&
            typeof error === 'string' && (
              <StyledError key={error} data-testid="field-error-message">
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
          isInvalid,
        })
      })}
      {hintText && (
        <StyledHintText data-testid="field-hint-text">
          {hintText}
        </StyledHintText>
      )}
    </StyledField>
  )
}

Field.displayName = 'Field'
