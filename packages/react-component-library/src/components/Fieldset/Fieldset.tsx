import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledFieldset } from './partials/StyledFieldset'
import { StyledLegend } from './partials/StyledLegend'

export type FieldsetType = 'block' | 'inline'

export interface FieldsetProps extends ComponentWithClass {
  isInvalid?: boolean
  legend?: string
  type?: FieldsetType
}

export const Fieldset = ({
  isInvalid,
  legend,
  type = 'inline',
  children,
  ...rest
}: FieldsetProps) => {
  return (
    <StyledFieldset $isInvalid={isInvalid} $type={type} {...rest}>
      {legend && <StyledLegend>{legend}</StyledLegend>}
      {children}
    </StyledFieldset>
  )
}

Fieldset.displayName = 'Fieldset'
