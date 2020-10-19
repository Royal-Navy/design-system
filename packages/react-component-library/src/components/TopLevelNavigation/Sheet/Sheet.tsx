import React from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import {
  SHEET_PLACEMENT,
  SHEET_PLACEMENT_ARROW_POSITION_MAP,
} from './constants'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { FloatingBox } from '../../../primitives/FloatingBox'
import { SheetButtonProps } from './SheetButton'
import { useSheet } from './useSheet'
import { getId } from '../../../helpers'

export interface SheetProps extends ComponentWithClass {
  button: React.ReactElement<SheetButtonProps>
  children: React.ReactElement
  placement?: typeof SHEET_PLACEMENT.RIGHT | typeof SHEET_PLACEMENT.BELOW
  width: number
  onShow?: () => void
  onHide?: () => void
}

const StyledFloatingBox = styled(FloatingBox)`
  position: absolute;
`

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

      <TransitionGroup>
        {showSheet && (
          <CSSTransition timeout={{ enter: 300, exit: 300 }}>
            <StyledFloatingBox
              {...position}
              width={width}
              scheme="dark"
              position={arrowPosition}
            >
              {React.cloneElement(children, {
                'aria-expanded': showSheet,
                id: sheetId,
              })}
            </StyledFloatingBox>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

Sheet.displayName = 'Sheet'
