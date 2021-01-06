import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledCardFrame } from './partials/StyledCardFrame'

export const CardFrame: React.FC<ComponentWithClass> = (props) => (
  <StyledCardFrame data-testid="cardframe-wrapper" {...props} />
)
