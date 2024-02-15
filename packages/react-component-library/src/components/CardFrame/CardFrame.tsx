import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledCardFrame } from './partials/StyledCardFrame'

export const CardFrame = (props: ComponentWithClass) => (
  <StyledCardFrame data-testid="cardframe-wrapper" {...props} />
)
