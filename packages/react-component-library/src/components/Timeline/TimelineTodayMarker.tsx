import React, { useContext } from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineContext } from './context'
import { useTimelinePosition } from './hooks/useTimelinePosition'

export interface TimelineTodayMarkerWithRenderContentProps
  extends ComponentWithClass {
  render: (today: Date, offset: string) => React.ReactNode
}

export interface TimelineTodayMarkerWithChildrenProps
  extends ComponentWithClass {
  render?: never
}

export type TimelineTodayMarkerProps =
  | TimelineTodayMarkerWithRenderContentProps
  | TimelineTodayMarkerWithChildrenProps

const { spacing, color, zIndex, fontSize } = selectors

const StyledTimelineTodayMarkerWrapper = styled.div`
  position: relative;
`

interface StyledTimelineTodayMarkerProps {
  left: string
}

const StyledTimelineTodayMarker = styled.div<StyledTimelineTodayMarkerProps>`
  position: absolute;
  top: 4rem;
  display: inline-block;
  width: ${spacing('px')};
  height: 100vh;
  background-color: ${color('danger', '500')};
  z-index: ${zIndex('body', 1)};

  &::before {
    content: 'Today';
    display: inline-block;
    color: ${color('danger', '500')};
    font-size: ${fontSize('s')};
    transform: translate(-50%, -175%);
  }

  left: ${({ left }) => left};
`

function renderDefault({ offset }: { offset: string }) {
  return <StyledTimelineTodayMarker left={offset} />
}

export const TimelineTodayMarker: React.FC<TimelineTodayMarkerProps> = ({
  render,
}) => {
  const {
    state: { today },
  } = useContext(TimelineContext)

  const { offset, isBeforeStart, isAfterEnd } = useTimelinePosition(today, null)

  if (isBeforeStart || isAfterEnd) return null

  return (
    <StyledTimelineTodayMarkerWrapper
      data-testid="timeline-today-marker-wrapper"
      role="presentation"
    >
      {render ? render(today, offset) : renderDefault({ offset })}
    </StyledTimelineTodayMarkerWrapper>
  )
}

TimelineTodayMarker.displayName = 'TimelineTodayMarker'
