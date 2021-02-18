import React, { useContext } from 'react'
import { IconChevronRight, IconChevronLeft } from '@royalnavy/icon-library'

import { Button, BUTTON_SIZE, BUTTON_VARIANT } from '../Button'
import { StyledToolbar } from './partials/StyledToolbar'
import { TIMELINE_ACTIONS } from './context/types'
import { TimelineContext } from './context'
import { StyledToolbarButtons } from './partials/StyledToolbarButtons'

export const TimelineToolbar: React.FC = () => {
  const { dispatch } = useContext(TimelineContext)

  return (
    <StyledToolbar>
      <StyledToolbarButtons>
        <Button
          aria-label="Navigate left"
          size={BUTTON_SIZE.SMALL}
          variant={BUTTON_VARIANT.SECONDARY}
          icon={<IconChevronLeft />}
          onClick={(_) => dispatch({ type: TIMELINE_ACTIONS.GET_PREV })}
          data-testid="timeline-side-button-left"
        />
        <Button
          aria-label="Navigate right"
          size={BUTTON_SIZE.SMALL}
          variant={BUTTON_VARIANT.SECONDARY}
          icon={<IconChevronRight />}
          onClick={(_) => dispatch({ type: TIMELINE_ACTIONS.GET_NEXT })}
          data-testid="timeline-side-button-right"
        />
      </StyledToolbarButtons>
    </StyledToolbar>
  )
}

TimelineToolbar.displayName = 'TimelineToolbar'
