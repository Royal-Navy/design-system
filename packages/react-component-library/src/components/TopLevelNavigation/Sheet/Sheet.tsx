import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import {
  SHEET_PLACEMENT,
  SHEET_PLACEMENT_ARROW_POSITION_MAP,
} from './constants'

import { FloatingBox } from '../../../primitives/FloatingBox'
import { SheetButtonProps } from './SheetButton'
import { useSheet } from './useSheet'

export interface SheetProps extends ComponentWithClass {
  button: React.ReactElement<SheetButtonProps>
  children: React.ReactElement
  placement?: typeof SHEET_PLACEMENT.RIGHT | typeof SHEET_PLACEMENT.BELOW
  width: number
  onShow?: () => void
  onHide?: () => void
}

export const Sheet: React.FC<SheetProps> = ({
  button,
  children,
  className,
  onShow,
  onHide,
  placement = SHEET_PLACEMENT.RIGHT,
  width,
}) => {
  const arrowPosition = SHEET_PLACEMENT_ARROW_POSITION_MAP[placement]

  const { ref, position, showSheet, toggleSheet } = useSheet(
    placement,
    width,
    onShow,
    onHide
  )

  return (
    <div className={className} ref={ref} data-testid="sheet-panel">
      {React.cloneElement(button, {
        ...button.props,
        onClick: toggleSheet,
      })}

      <TransitionGroup className="rn-sheet__transition-wrapper">
        {showSheet && (
          <CSSTransition timeout={{ enter: 300, exit: 300 }}>
            <FloatingBox
              className="rn-sheet__container"
              {...position}
              width={width}
              scheme="dark"
              position={arrowPosition}
            >
              {children}
            </FloatingBox>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

Sheet.displayName = 'Sheet'
