import classNames from 'classnames'
import React from 'react'

export interface TooltipProps extends PositionType {
  id?: string
  position?: 'above' | 'below' | 'left' | 'right'
  title?: string
  width?: number
}

export const Tooltip: React.FC<TooltipProps> = ({
  bottom,
  children,
  id = '',
  left,
  position = 'above',
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

  const tooltipClassNames = classNames(
    ['rn-tooltip',
    `rn-tooltip--${position}`
  ])

  return (
    <div
      className={tooltipClassNames}
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
