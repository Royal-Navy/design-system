import React, { forwardRef } from 'react'
import { IconClose } from '@defencedigital/icon-library'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { useOpenClose } from '../../hooks/useOpenClose'
import { StyledDrawer } from './partials/StyledDrawer'
import { StyledDrawerInner } from './partials/StyledDrawerInner'
import { StyledDrawerButton } from './partials/StyledDrawerButton'
import { StyledDrawerContent } from './partials/StyledDrawerContent'

export interface DrawerProps extends ComponentWithClass {
  /**
   * Arbitrary JSX content to display within the component.
   */
  children?: React.ReactNode
  /**
   * Toggles whether the component is visible or hidden outside of the viewport.
   */
  isOpen?: boolean
  /**
   * Optional handler called when the close button is clicked.
   */
  onClose?: (event: React.FormEvent<HTMLButtonElement>) => void
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ children, onClose, isOpen, className, ...rest }, ref) => {
    const { handleOnClose, open } = useOpenClose(isOpen, onClose)

    return (
      <StyledDrawer
        className={className}
        $isOpen={open}
        data-testid="drawer-wrapper"
        ref={ref}
        {...rest}
      >
        <StyledDrawerInner>
          <StyledDrawerButton
            onClick={handleOnClose}
            data-testid="drawer-close"
            aria-label="close"
          >
            <IconClose />
          </StyledDrawerButton>
          <StyledDrawerContent data-testid="drawer-content">
            {children}
          </StyledDrawerContent>
        </StyledDrawerInner>
      </StyledDrawer>
    )
  }
)

Drawer.displayName = 'Drawer'
