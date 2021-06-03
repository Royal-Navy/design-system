import React from 'react'
import { Placement } from '@popperjs/core'

import {
  FLOATING_BOX_PLACEMENT,
  FloatingBox,
} from '../../../primitives/FloatingBox'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { getId } from '../../../helpers'
import { SheetButtonProps } from './SheetButton'
import { useHideShow } from '../../../hooks/useHideShow'

export interface SheetProps extends ComponentWithClass {
  button: React.ReactElement<SheetButtonProps>
  children: React.ReactElement
  placement?: Placement
  closeDelay?: number
}

export const Sheet: React.FC<SheetProps> = ({
  button,
  children,
  placement = FLOATING_BOX_PLACEMENT.RIGHT,
  closeDelay = 250,
}) => {
  const { floatingBoxChildrenRef, isVisible, mouseEvents } = useHideShow(
    true,
    closeDelay
  )
  const sheetId = getId('sheet')

  const SheetTarget = () => {
    return React.cloneElement(button as React.ReactElement, {
      ...button.props,
      ...mouseEvents,
      'aria-expanded': isVisible,
      'aria-owns': sheetId,
    })
  }

  return (
    <FloatingBox
      isVisible={isVisible}
      placement={placement}
      renderTarget={<SheetTarget />}
      scheme="dark"
    >
      <div ref={floatingBoxChildrenRef}>
        {React.cloneElement(children, {
          id: sheetId,
          'aria-expanded': isVisible,
        })}
      </div>
    </FloatingBox>
  )
}

Sheet.displayName = 'Sheet'
