import React, { forwardRef } from 'react'
import classNames from 'classnames'

export interface FloatingBoxProps extends PositionType, ComponentWithClass {
  width?: number
  height?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
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
      onMouseEnter,
      onMouseLeave,
      children,
    } = props

    const style = {
      bottom,
      height,
      left,
      right,
      top,
      width,
    }

    const classes = classNames('rn-floating-box', className)

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
