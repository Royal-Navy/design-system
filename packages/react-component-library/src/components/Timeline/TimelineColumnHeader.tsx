import React from 'react'

import { StyledVisuallyHiddenText } from '../../styled-components/partials/StyledVisuallyHiddenText'

export const TimelineColumnHeader = ({ name, ...rest }: { name: string }) => (
  <div role="columnheader" {...rest}>
    <StyledVisuallyHiddenText>{name}</StyledVisuallyHiddenText>
  </div>
)

TimelineColumnHeader.displayName = 'TimelineColumnHeader'
