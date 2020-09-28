import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { selectors } from '@royalnavy/design-tokens'

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

const { color, zIndex, fontSize, spacing } = selectors

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
  background-color: ${color('neutral', 'white')};
  border-right: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  z-index: ${zIndex('body', 3)};
  justify-content: flex-end;
  display: inline-flex;
  align-items: center;
  font-size: ${fontSize('m')};
  font-weight: 600;
  color: ${color('neutral', '600')};
  padding-right: ${spacing('8')};
  ${({ isHeader }) =>
    isHeader &&
    `
    font-size: ${fontSize('s')};
    font-weight: normal;
    color: ${color('neutral', '400')};
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
  className,
  ...rest
}) => {
  const classes = classNames('timeline__row', className)

  return (
    <TimelineContext.Consumer>
      {({ hasSide }) => (
        <StyledTimelineRow
          className={classes}
          data-testid="timeline-row"
          role="row"
          {...rest}
        >
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
