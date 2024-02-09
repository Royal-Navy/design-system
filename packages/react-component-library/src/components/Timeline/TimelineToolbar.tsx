import React from 'react'
import {
  IconChevronRight,
  IconChevronLeft,
  IconZoomIn,
  IconZoomOut,
} from '@royalnavy/icon-library'

import { Button, BUTTON_VARIANT } from '../Button'
import { COMPONENT_SIZE } from '../Forms'
import { StyledToolbar } from './partials/StyledToolbar'
import { StyledToolbarButtons } from './partials/StyledToolbarButtons'
import { StyledToolbarSeparator } from './partials/StyledToolbarSeparator'
import { useTimelineFrame } from './hooks/useTimelineFrame'
import { useTimelineZoom } from './hooks/useTimelineZoom'

interface TimelineToolbarProps {
  hideScaling: boolean
}

export const TimelineToolbar = ({ hideScaling }: TimelineToolbarProps) => {
  const { canZoomIn, canZoomOut, zoomIn, zoomOut } = useTimelineZoom()
  const { moveNext, movePrevious } = useTimelineFrame()

  return (
    <StyledToolbar data-testid="timeline-toolbar">
      <StyledToolbarButtons>
        <Button
          aria-label="Navigate left"
          size={COMPONENT_SIZE.SMALL}
          variant={BUTTON_VARIANT.TERTIARY}
          icon={<IconChevronLeft />}
          onClick={movePrevious}
          data-testid="timeline-side-button-left"
          title="Navigate left"
        />
        <Button
          aria-label="Navigate right"
          size={COMPONENT_SIZE.SMALL}
          variant={BUTTON_VARIANT.TERTIARY}
          icon={<IconChevronRight />}
          onClick={moveNext}
          data-testid="timeline-side-button-right"
          title="Navigate right"
        />
      </StyledToolbarButtons>
      {!hideScaling && (
        <>
          <StyledToolbarSeparator />
          <StyledToolbarButtons>
            <Button
              aria-label="Zoom out"
              isDisabled={!canZoomOut}
              size={COMPONENT_SIZE.SMALL}
              variant={BUTTON_VARIANT.TERTIARY}
              icon={<IconZoomOut />}
              onClick={zoomOut}
              data-testid="timeline-toolbar-zoom-out"
              title="Zoom out"
            />
            <Button
              aria-label="Zoom in"
              isDisabled={!canZoomIn}
              size={COMPONENT_SIZE.SMALL}
              variant={BUTTON_VARIANT.TERTIARY}
              icon={<IconZoomIn />}
              onClick={zoomIn}
              data-testid="timeline-toolbar-zoom-in"
              title="Zoom in"
            />
          </StyledToolbarButtons>
        </>
      )}
    </StyledToolbar>
  )
}

TimelineToolbar.displayName = 'TimelineToolbar'
