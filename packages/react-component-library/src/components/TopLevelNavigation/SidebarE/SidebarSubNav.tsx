import React from 'react'
import { IconMoreVert } from '@royalnavy/icon-library'

import { SHEET_PLACEMENT } from '../Sheet/constants'
import { Nav } from '../../../common/Nav'
import { SidebarNavItemEProps } from './SidebarNavItem'
import { StyledSubNavSheet } from './partials/StyledSubNavSheet'
import { StyledSubNavSheetButton } from './partials/StyledSubNavSheetButton'

const SHEET_WIDTH = 200

export const SidebarSubNav: React.FC<Nav<SidebarNavItemEProps>> = ({
  children,
}) => {
  return (
    <StyledSubNavSheet
      button={(
        <StyledSubNavSheetButton
          aria-label="Expand sub-menu"
          data-testid="sub-menu-expand-button"
          icon={<IconMoreVert />}
        />
      )}
      placement={SHEET_PLACEMENT.RIGHT_TOP}
      width={SHEET_WIDTH}
      exitTiming={0}
      data-testid="sidebar-sub-nav"
    >
      <ol>{children}</ol>
    </StyledSubNavSheet>
  )
}

SidebarSubNav.displayName = 'SidebarSubNav'
