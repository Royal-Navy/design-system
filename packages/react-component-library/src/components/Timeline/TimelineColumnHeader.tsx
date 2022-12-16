import React from 'react'

import { StyledVisuallyHiddenText } from '../../styled-components/partials/StyledVisuallyHiddenText'

export const TimelineColumnHeader: React.FC<{ name: string }> = ({
  name,
  ...rest
}) => (
  <div role="columnheader" {...rest}>
    <StyledVisuallyHiddenText>{name}</StyledVisuallyHiddenText>
  </div>
)

TimelineColumnHeader.displayName = 'TimelineColumnHeader'
