import React from 'react'
import { IconMoreVert } from '@defencedigital/icon-library'

import { Nav } from '../../../common/Nav'
import { SidebarNavItemProps } from './SidebarNavItem'
import { Sheet } from '../Sheet/Sheet'
import { StyledSheetList } from './partials/StyledSheetList'
import { StyledSubNavSheetButton } from './partials/StyledSubNavSheetButton'

export const SidebarSubNav: React.FC<Nav<SidebarNavItemProps>> = ({
  children,
}) => {
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
      <StyledSheetList>{children}</StyledSheetList>
    </Sheet>
  )
}

SidebarSubNav.displayName = 'SidebarSubNav'
