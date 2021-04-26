import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'
import { useFormikContext } from 'formik'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import {
  FieldError,
  getError,
  transformErrorToAriaAttributes,
} from '../../enhancers'

export interface FormikGroupProps extends ComponentWithClass {
  children: React.ReactElement[]
  label?: string
}

const { spacing } = selectors

const StyledLegend = styled.legend`
  padding-bottom: ${spacing('4')};
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
        return React.cloneElement(child, transformErrorToAriaAttributes(error))
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
