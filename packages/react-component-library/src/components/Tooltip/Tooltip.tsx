import React from 'react'

import { PositionType } from '../../common/Position'
import { TOOLTIP_POSITION } from '.'
import { StyledTooltip } from './partials/StyledTooltip'
import { StyledContent } from './partials/StyledContent'
import { StyledTitle } from './partials/StyledTitle'
import { StyledMessage } from './partials/StyledMessage'
import { useExternalId } from '../../hooks/useExternalId'
import { ValueOf } from '../../helpers'

export type TooltipPositionType = ValueOf<typeof TOOLTIP_POSITION>

export interface TooltipProps extends PositionType {
  /**
   * Text to display within the tooltip.
   */
  children?: React.ReactNode
  /**
   * Optional HTML `id` attribute.
   */
  id?: string
  /**
   * Where to position the tooltip relative to the target element.
   */
  position?: TooltipPositionType
  /**
   * Optional text title to display above the tooltip text.
   */
  title?: string
  /**
   * Optional fixed width of the component.
   */
  width?: number
}

export const Tooltip: React.FC<TooltipProps> = ({
  bottom,
  children,
  left,
  position = TOOLTIP_POSITION.ABOVE,
  right,
  title,
  top,
  width,
  ...rest
}) => {
  const contentId = useExternalId('tooltip-content')
  const titleId = useExternalId('tooltip-title')

  return (
    <StyledTooltip
      $bottom={bottom}
      $left={left}
      $right={right}
      $top={top}
      $width={width}
      aria-describedby={contentId}
      aria-labelledby={title ? titleId : undefined}
      data-testid="tooltip"
      role="tooltip"
      {...rest}
    >
      <StyledContent $position={position}>
        {title && (
          <StyledTitle data-testid="tooltip-title" id={titleId}>
            {title}
          </StyledTitle>
        )}
        {children && (
          <StyledMessage data-testid="tooltip-content" id={contentId}>
            {children}
          </StyledMessage>
        )}
      </StyledContent>
    </StyledTooltip>
  )
}

Tooltip.displayName = 'Tooltip'
