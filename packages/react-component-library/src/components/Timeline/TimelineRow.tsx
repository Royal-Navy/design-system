import React from 'react'
import styled from 'styled-components'
import {
  SpacingPx,
  ZindexBody,
  TypographyS,
  TypographyM,
  ColorNeutral400,
  ColorNeutral600,
  ColorNeutralWhite,
  Spacing8,
} from '@royalnavy/design-tokens'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineContext, TimelineEventsProps } from '.'
import { TIMELINE_BORDER_COLOR, TIMELINE_ROW_HEADER_WIDTH } from './constants'

export interface TimelineRowProps extends ComponentWithClass {
  children:
    | React.ReactElement<TimelineEventsProps>
    | React.ReactElement<TimelineEventsProps>[]
  name?: string
  renderRowHeader?: (name: string) => React.ReactElement
  isHeader?: boolean
}

const StyledTimelineRow = styled.div`
  display: flex;
  height: 4rem;
`

interface StyledRowHeaderProps {
  isHeader?: boolean
}

const StyledRowHeader = styled.div<StyledRowHeaderProps>`
  min-width: ${TIMELINE_ROW_HEADER_WIDTH};
  position: absolute;
  left: 0;
  height: inherit;
  background-color: ${ColorNeutralWhite};
  border-right: ${SpacingPx} solid ${TIMELINE_BORDER_COLOR};
  box-shadow: inset 0px 0px 0px 0px ${TIMELINE_BORDER_COLOR},
    5px 0px 5px 0px rgba(0, 0, 0, 0.04);
  z-index: ${Number(ZindexBody) + 3};
  justify-content: flex-end;
  display: inline-flex;
  align-items: center;
  font-size: ${TypographyM};
  font-weight: 600;
  color: ${ColorNeutral600};
  padding-right: ${Spacing8};
  ${({ isHeader }) =>
    isHeader &&
    `
    font-size: ${TypographyS};
    font-weight: normal;
    color: ${ColorNeutral400};
  `}
`

const StyledRowContent = styled.div`
  position: relative;
`

export const TimelineRow: React.FC<TimelineRowProps> = ({
  children,
  name,
  renderRowHeader,
  isHeader,
  ...rest
}) => {
  return (
    <TimelineContext.Consumer>
      {({ hasSide }) => (
        <StyledTimelineRow data-testid="timeline-row" role="row" {...rest}>
          {hasSide && (
            <StyledRowHeader
              isHeader={isHeader}
              data-testid="timeline-row-header"
              role="rowheader"
            >
              {renderRowHeader ? renderRowHeader(name) : name}
            </StyledRowHeader>
          )}
          <StyledRowContent>{children}</StyledRowContent>
        </StyledTimelineRow>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineRow.displayName = 'TimelineRow'
