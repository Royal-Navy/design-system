import React from 'react'
import { selectors } from '@defencedigital/design-tokens'
import styled from 'styled-components'
import { useFormikContext } from 'formik'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import {
  FieldError,
  FieldErrorE,
  getError,
  transformErrorToAriaAttributes,
} from '../../enhancers'
import { Fieldset } from '../Fieldset'

export interface FormikGroupProps extends ComponentWithClass {
  children: React.ReactElement[]
  label?: string
}

const { spacing } = selectors

const StyledFormikGroupE = styled.div`
  display: inline-block;
`

const StyledLegend = styled.legend`
  padding: ${spacing('10')} 0 ${spacing('8')};
`

export const FormikGroup: React.FC<FormikGroupProps> = ({
  children,
  className,
  label,
}) => {
  const { errors, touched } = useFormikContext()
  const fieldName = children[0].props.name
  const error = getError(touched, errors, fieldName)

  return (
    <div className={className} data-testid="formik-group" role="group">
      {label && (
        <StyledLegend data-testid="formik-group-legend">{label}</StyledLegend>
      )}
      {React.Children.map(children, (child) => {
        return React.cloneElement(
          child as React.ReactElement,
          transformErrorToAriaAttributes(error)
        )
      })}
      {error && (
        <FieldError id={error.id} data-testid="formik-group-error">
          {error.text}
        </FieldError>
      )}
    </div>
  )
}

FormikGroup.displayName = 'FormikGroup'

export const FormikGroupE: React.FC<FormikGroupProps> = ({
  children,
  className,
  label,
}) => {
  const { errors, touched } = useFormikContext()
  const fieldName = children[0].props.name
  const error = getError(touched, errors, fieldName)

  return (
    <StyledFormikGroupE
      className={className}
      data-testid="formik-group"
      role="group"
    >
      {label && (
        <StyledLegend data-testid="formik-group-legend">{label}</StyledLegend>
      )}
      {error && (
        <FieldErrorE id={error.id} data-testid="formik-group-error">
          {error.text}
        </FieldErrorE>
      )}
      <Fieldset isInvalid={!!error}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(
            child as React.ReactElement,
            transformErrorToAriaAttributes(error)
          )
        })}
      </Fieldset>
    </StyledFormikGroupE>
  )
}

FormikGroupE.displayName = 'FormikGroupE'
