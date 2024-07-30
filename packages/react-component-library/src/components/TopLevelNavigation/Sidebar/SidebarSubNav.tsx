import React from 'react'
import { IconMoreVert } from '@royalnavy/icon-library'

import { Nav } from '../../../common/Nav'
import { Sheet } from '../Sheet/Sheet'
import { StyledSheetList } from './partials/StyledSheetList'
import { StyledSubNavSheetButton } from './partials/StyledSubNavSheetButton'
import { SidebarNavItemProps } from './types'

export const SidebarSubNav = ({ children }: Nav<SidebarNavItemProps>) => {
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
