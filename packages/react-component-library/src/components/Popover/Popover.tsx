import React, { forwardRef } from 'react'
import classNames from 'classnames'

import { POPOVER_ARROW_POSITION, POPOVER_SCHEME } from './constants'

export interface PopoverProps extends PositionType, ComponentWithClass {
  height?: number
  width?: number
  left?: number
  right?: number
  bottom?: number
  top?: number
  position?:
    | POPOVER_ARROW_POSITION.LEFT_BOTTOM
    | POPOVER_ARROW_POSITION.LEFT_TOP
    | POPOVER_ARROW_POSITION.RIGHT_BOTTOM
    | POPOVER_ARROW_POSITION.RIGHT_TOP
    | POPOVER_ARROW_POSITION.TOP_LEFT
    | POPOVER_ARROW_POSITION.TOP_RIGHT
    | POPOVER_ARROW_POSITION.BOTTOM_LEFT
    | POPOVER_ARROW_POSITION.BOTTOM_RIGHT
  scheme?: POPOVER_SCHEME.LIGHT | POPOVER_SCHEME.DARK
  onMouseEnter?: (e: React.MouseEvent) => void
  onMouseLeave?: (e: React.MouseEvent) => void
  children?: React.ReactElement
}

export const Popover = forwardRef(
  (props: PopoverProps, ref?: React.Ref<HTMLDivElement>) => {
    const {
      className,
      bottom,
      children,
      height,
      left,
      position = POPOVER_ARROW_POSITION.LEFT_BOTTOM,
      right,
      scheme = POPOVER_SCHEME.LIGHT,
      top,
      width,
      onMouseEnter,
      onMouseLeave,
    } = props

    const style = {
      bottom,
      height,
      left,
      right,
      top,
      width,
    }

    const classes = classNames('rn-popover', className, {
      [`rn-popover--${position}`]: true,
      [`rn-popover--${scheme}`]: true,
    })

    return (
      <div
        ref={ref}
        className={classes}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        data-testid="popover"
      >
        <div className="rn-popover__content">{children}</div>
      </div>
    )
  }
)

Popover.displayName = 'Popover'
