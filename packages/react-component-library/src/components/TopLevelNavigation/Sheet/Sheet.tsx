import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import {
  SHEET_PLACEMENT,
  SHEET_PLACEMENT_ARROW_POSITION_MAP,
} from './constants'

import { FloatingBox } from '../../../primitives/FloatingBox'
import { PropsWithClassName } from '../../../types/PropsWithClassName'
import { SheetButtonProps } from './SheetButton'
import { useSheet } from './useSheet'
import { getId } from '../../../helpers'

export interface SheetProps extends PropsWithClassName {
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

  const sheetId = getId('sheet')

  return (
    <div className={className} ref={ref} data-testid="sheet-panel">
      {React.cloneElement(button as React.ReactElement, {
        ...button.props,
        'aria-expanded': showSheet,
        'aria-owns': sheetId,
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
              {React.cloneElement(children, {
                'aria-expanded': showSheet,
                id: sheetId,
              })}
            </FloatingBox>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

Sheet.displayName = 'Sheet'
