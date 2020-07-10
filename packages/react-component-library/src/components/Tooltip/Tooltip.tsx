import React from 'react'
import classNames from 'classnames'

import { TOOLTIP_POSITION } from '.'

export interface TooltipProps extends PositionType {
  children: React.ReactNode
  id?: string
  position?:
    | typeof TOOLTIP_POSITION.ABOVE
    | typeof TOOLTIP_POSITION.BELOW
    | typeof TOOLTIP_POSITION.LEFT
    | typeof TOOLTIP_POSITION.RIGHT
  title?: string
  width?: number
}

export const Tooltip: React.FC<TooltipProps> = ({
  bottom,
  children,
  id,
  left,
  position = TOOLTIP_POSITION.ABOVE,
  right,
  title,
  top,
  width,
}) => {
  const style = {
    bottom,
    left,
    right,
    top,
    width,
  }

  const classes = classNames(['rn-tooltip', `rn-tooltip--${position}`])

  return (
    <div
      className={classes}
      data-testid="tooltip"
      id={id}
      role="tooltip"
      style={style}
    >
      <div className="rn-tooltip__content">
        {title && <div className="rn-tooltip__title">{title}</div>}
        <div className="rn-tooltip__message">{children}</div>
      </div>
    </div>
  )
}

Tooltip.displayName = 'Tooltip'
