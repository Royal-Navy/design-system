import React from 'react'
import {
  IconChevronRight,
  IconChevronLeft,
  IconZoomIn,
  IconZoomOut,
} from '@royalnavy/icon-library'

import { Button, BUTTON_SIZE, BUTTON_VARIANT } from '../Button'
import { StyledToolbar } from './partials/StyledToolbar'
import { StyledToolbarButtons } from './partials/StyledToolbarButtons'
import { StyledToolbarSeparator } from './partials/StyledToolbarSeparator'
import { useTimelineScale } from './hooks/useTimelineScale'

export const TimelineToolbar: React.FC = () => {
  const {
    canZoomIn,
    canZoomOut,
    moveNext,
    movePrevious,
    zoomIn,
    zoomOut,
  } = useTimelineScale()

  return (
    <StyledToolbar>
      <StyledToolbarButtons>
        <Button
          aria-label="Navigate left"
          size={BUTTON_SIZE.SMALL}
          variant={BUTTON_VARIANT.SECONDARY}
          icon={<IconChevronLeft />}
          onClick={movePrevious}
          data-testid="timeline-side-button-left"
        />
        <Button
          aria-label="Navigate right"
          size={BUTTON_SIZE.SMALL}
          variant={BUTTON_VARIANT.SECONDARY}
          icon={<IconChevronRight />}
          onClick={moveNext}
          data-testid="timeline-side-button-right"
        />
      </StyledToolbarButtons>
      <StyledToolbarSeparator />
      <StyledToolbarButtons>
        <Button
          aria-label="Zoom out"
          isDisabled={!canZoomOut}
          size={BUTTON_SIZE.SMALL}
          variant={BUTTON_VARIANT.SECONDARY}
          icon={<IconZoomOut />}
          onClick={zoomOut}
          data-testid="timeline-toolbar-zoom-out"
        />
        <Button
          aria-label="Zoom in"
          isDisabled={!canZoomIn}
          size={BUTTON_SIZE.SMALL}
          variant={BUTTON_VARIANT.SECONDARY}
          icon={<IconZoomIn />}
          onClick={zoomIn}
          data-testid="timeline-toolbar-zoom-in"
        />
      </StyledToolbarButtons>
    </StyledToolbar>
  )
}

TimelineToolbar.displayName = 'TimelineToolbar'
