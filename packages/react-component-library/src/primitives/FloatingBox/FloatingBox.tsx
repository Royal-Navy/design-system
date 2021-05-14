import React, { forwardRef } from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { FloatingBoxContent } from './FloatingBoxContent'
import { FloatingBoxSchemeType, FloatingBoxPositionType } from './types'
import { getId } from '../../helpers'
import { PositionType } from '../../common/Position'
import { StyledFloatingBox } from './partials/StyledFloatingBox'

export interface FloatingBoxProps extends PositionType, ComponentWithClass {
  role?: string
  contentId?: string
  width?: number
  height?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
  scheme?: FloatingBoxSchemeType
  position?: FloatingBoxPositionType
  onMouseEnter?: (e: React.MouseEvent) => void
  onMouseLeave?: (e: React.MouseEvent) => void
  children?: React.ReactElement
}

export const FloatingBox = forwardRef(
  (props: FloatingBoxProps, ref?: React.Ref<any>) => {
    const {
      contentId = getId('floating-box'),
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

    return (
      <StyledFloatingBox
        $position={position}
        $scheme={scheme}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        role="dialog"
        data-testid="floating-box"
        {...rest}
      >
        <FloatingBoxContent contentId={contentId} scheme={scheme}>
          {children}
        </FloatingBoxContent>
      </StyledFloatingBox>
    )
  }
)

FloatingBox.displayName = 'FloatingBox'
