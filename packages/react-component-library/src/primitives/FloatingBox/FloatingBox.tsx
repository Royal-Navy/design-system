import React, { forwardRef } from 'react'
import classNames from 'classnames'

import { FLOATING_BOX_SCHEME, FLOATING_BOX_ARROW_POSITION } from './constants'

export interface FloatingBoxProps extends PositionType, ComponentWithClass {
  width?: number
  height?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
  scheme?: FLOATING_BOX_SCHEME.LIGHT | FLOATING_BOX_SCHEME.DARK
  position?:
    | FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM
    | FLOATING_BOX_ARROW_POSITION.LEFT_TOP
    | FLOATING_BOX_ARROW_POSITION.RIGHT_BOTTOM
    | FLOATING_BOX_ARROW_POSITION.RIGHT_TOP
    | FLOATING_BOX_ARROW_POSITION.TOP_LEFT
    | FLOATING_BOX_ARROW_POSITION.TOP_RIGHT
    | FLOATING_BOX_ARROW_POSITION.BOTTOM_LEFT
    | FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT
  onMouseEnter?: (e: React.MouseEvent) => void
  onMouseLeave?: (e: React.MouseEvent) => void
  children?: React.ReactElement
}

export const FloatingBox = forwardRef(
  (props: FloatingBoxProps, ref?: React.Ref<HTMLDivElement>) => {
    const {
      className,
      width,
      height,
      top,
      right,
      bottom,
      left,
      scheme,
      position,
      onMouseEnter,
      onMouseLeave,
      children,
    } = props

    const style = {
      width,
      height,
      top,
      right,
      bottom,
      left,
    }

    const classes = classNames(
      'rn-floating-box',
      className,
      `rn-floating-box--${scheme}`,
      `rn-floating-box--${position}`
    )

    return (
      <div
        ref={ref}
        className={classes}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        data-testid="floating-box"
      >
        <div className="rn-floating-box__content">{children}</div>
      </div>
    )
  }
)

FloatingBox.displayName = 'FloatingBox'
