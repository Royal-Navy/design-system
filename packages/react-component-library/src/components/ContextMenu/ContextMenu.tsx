import React, { useMemo } from 'react'
import { CSSObject } from 'styled-components'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { useClickMenu, ClickType, CLICK_BUTTON } from '../../hooks/useClickMenu'
import { StyledContextMenu } from './partials/StyledContextMenu'

export interface ContextMenuProps extends ComponentWithClass {
  /**
   * A ref object for the element associated with the component.
   */
  attachedToRef: React.RefObject<HTMLElement>
  /**
   * Should the menu display when the user uses a left or right mouse click.
   */
  clickType?: ClickType
  /**
   * Toggles whether the menu is open on first render.
   */
  initialIsOpen?: boolean
  /**
   * Optional handler function to be invoked when the component is hidden.
   */
  onHide?: (e: MouseEvent) => void
  /**
   * Optional handler function to be invoked when the component is displayed.
   */
  onShow?: (e: MouseEvent) => void
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  attachedToRef,
  children,
  clickType = CLICK_BUTTON.RIGHT,
  initialIsOpen = false,
  onHide,
  onShow,
  ...rest
}) => {
  const { isOpen, floatingElementRef, styles, attributes } = useClickMenu({
    attachedToRef,
    clickType,
    initialIsOpen,
    onHide,
    onShow,
  })

  const hasIcons = useMemo(() => {
    return !!React.Children.toArray(children).filter(
      (child: React.ReactNode) => (child as React.ReactElement)?.props?.icon
    ).length
  }, [children])

  return (
    <StyledContextMenu
      ref={floatingElementRef}
      $hasIcons={hasIcons}
      $isOpen={isOpen}
      css={styles.popper as CSSObject}
      {...attributes.popper}
      data-testid="context-menu"
      role="menu"
      {...rest}
    >
      {children}
    </StyledContextMenu>
  )
}

ContextMenu.displayName = 'ContextMenu'
