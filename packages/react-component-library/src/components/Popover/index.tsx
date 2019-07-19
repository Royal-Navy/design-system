import React from 'react'

interface PopoverProps extends PositionType {
  height?: number
  width?: number
  left?: number
  right?: number
  bottom?: number
  top?: number
  position?:
    | 'left_bottom'
    | 'left_top'
    | 'right_bottom'
    | 'right_top'
    | 'top_left'
    | 'top_right'
    | 'bottom_left'
    | 'bottom_right'
  scheme?: 'light' | 'dark'
}

const Popover: React.FC<PopoverProps> = ({
  bottom,
  children,
  height,
  left,
  position,
  right,
  scheme = 'dark',
  top,
  width,
}) => {
  const style = {
    bottom,
    height,
    left,
    right,
    top,
    width,
  }

  return (
    <div
      className={`rn-popover
      ${position ? `rn-popover--${position}` : ''}
      rn-popover--${scheme}
    `}
      data-testid="popover"
      style={style}
    >
      <div className="rn-popover__content">{children}</div>
    </div>
  )
}

Popover.displayName = 'Popover'

export default Popover
