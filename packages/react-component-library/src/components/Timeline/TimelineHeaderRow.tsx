import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledHeaderRow } from './partials/StyledHeaderRow'

interface TimelineHeaderRowProps extends ComponentWithClass {
  children: React.ReactElement | React.ReactElement[]
  name: string
  renderRowHeader?: (name: string) => React.ReactElement
  isShort?: boolean
}

export const TimelineHeaderRow: React.FC<TimelineHeaderRowProps> = ({
  name,
  ...rest
}) => <StyledHeaderRow isHeader ariaLabel={name} {...rest} />

TimelineHeaderRow.displayName = 'TimelineHeaderRow'
