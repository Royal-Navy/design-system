import React from 'react'
import type { Placement } from '@floating-ui/core'

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
  placement?: Placement[]
  closeDelay?: number
  id?: string
}

export const Sheet: React.FC<SheetProps> = ({
  button,
  children,
  placement = [FLOATING_BOX_PLACEMENT.RIGHT],
  closeDelay = 250,
  id = getId('sheet'),
}) => {
  const { floatingBoxChildrenRef, isVisible, mouseEvents } = useHideShow(
    true,
    closeDelay
  )

  const SheetTarget = () => {
    return React.cloneElement(button as React.ReactElement, {
      ...button.props,
      ...mouseEvents,
      'aria-expanded': isVisible,
      'aria-owns': id,
    })
  }

  return (
    <FloatingBox
      isVisible={isVisible}
      allowedPlacements={placement}
      renderTarget={<SheetTarget />}
      scheme="dark"
    >
      <div ref={floatingBoxChildrenRef}>
        {React.cloneElement(children, {
          id,
          'aria-expanded': isVisible,
        })}
      </div>
    </FloatingBox>
  )
}

Sheet.displayName = 'Sheet'
