import React from 'react'
import { IconMoreVert } from '@royalnavy/icon-library'
import { Sheet } from '../Sheet/Sheet'
import { StyledSheetList, StyledSubNavSheetButton } from './partials'
import { SidebarSubNavProps } from './types'
import { mapNavItem } from './SidebarNav'

export const SidebarSubNav = ({ children, onClick }: SidebarSubNavProps) => {
  return (
    <Sheet
      button={
        <StyledSubNavSheetButton
          aria-label="Expand sub-menu"
          data-testid="sub-menu-expand-button"
          icon={<IconMoreVert />}
        />
      }
      data-testid="sidebar-sub-nav"
      placement="right"
      closeDelay={0}
    >
      <StyledSheetList>
        {React.Children.map(children, (child) => mapNavItem(child!, onClick))}
      </StyledSheetList>
    </Sheet>
  )
}

SidebarSubNav.displayName = 'SidebarSubNav'
