import React, { forwardRef } from 'react'
import classNames from 'classnames'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { FLOATING_BOX_SCHEME, FLOATING_BOX_ARROW_POSITION } from './constants'
import { getId } from '../../helpers'
import { PositionType } from '../../common/Position'

export interface FloatingBoxProps extends PositionType, ComponentWithClass {
  role?: string
  contentId?: string
  width?: number
  height?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
  scheme?: typeof FLOATING_BOX_SCHEME.LIGHT | typeof FLOATING_BOX_SCHEME.DARK
  position?:
    | typeof FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM
    | typeof FLOATING_BOX_ARROW_POSITION.LEFT_TOP
    | typeof FLOATING_BOX_ARROW_POSITION.RIGHT_BOTTOM
    | typeof FLOATING_BOX_ARROW_POSITION.RIGHT_TOP
    | typeof FLOATING_BOX_ARROW_POSITION.TOP_LEFT
    | typeof FLOATING_BOX_ARROW_POSITION.TOP_RIGHT
    | typeof FLOATING_BOX_ARROW_POSITION.BOTTOM_LEFT
    | typeof FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT
  onMouseEnter?: (e: React.MouseEvent) => void
  onMouseLeave?: (e: React.MouseEvent) => void
  children?: React.ReactNode
}

export const FloatingBox = forwardRef(
  (props: FloatingBoxProps, ref?: React.Ref<any>) => {
    const {
      contentId = getId('floating-box'),
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
      ...rest
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
        role="dialog"
        data-testid="floating-box"
        {...rest}
      >
        <div
          className="rn-floating-box__content"
          id={contentId}
          data-testid="floating-box-content"
        >
          {children}
        </div>
      </div>
    )
  }
)

FloatingBox.displayName = 'FloatingBox'
