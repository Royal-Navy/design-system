import React from 'react'
import styled from 'styled-components'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineRow } from './TimelineRow'

interface TimelineHeaderRowProps extends ComponentWithClass {
  children: React.ReactElement | React.ReactElement[]
  name: string
  renderRowHeader?: (name: string) => React.ReactElement
  isShort?: boolean
}

const StyledTimelineHeaderRow = styled<any>(TimelineRow)`
  ${({ isShort }) =>
    isShort &&
    `
      height: 2.5rem;
    `}
`

export const TimelineHeaderRow: React.FC<TimelineHeaderRowProps> = (props) => (
  <StyledTimelineHeaderRow isHeader {...props} />
)

TimelineHeaderRow.displayName = 'TimelineHeaderRow'
