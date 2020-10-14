import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { IconMoreVert } from '@royalnavy/icon-library'

import { SHEET_PLACEMENT } from '../Sheet/constants'
import { Sheet } from '../Sheet/Sheet'
import { SheetButton } from '../Sheet/SheetButton'
import { Nav } from '../../../common/Nav'
import { SidebarNavItemProps } from './SidebarNavItem'

const SHEET_WIDTH = 200

const { color, spacing } = selectors

const StyledSheet = styled(Sheet)`
  display: flex;

  > div > div {
    margin-left: ${spacing('3')};
  }

  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    padding: ${spacing('2')};
  }

  a,
  a:hover {
    color: ${color('neutral', 'white')};
    text-decoration: none;
  }
`

const StyledSheetButton = styled(SheetButton)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
  padding: 0;
  margin-right: ${spacing('4')};
  border-radius: 2px;
  border: none;
  background-color: transparent;
  overflow: hidden;

  &:hover {
    background-color: ${color('neutral', '400')};
    cursor: pointer;

    svg {
      color: ${color('neutral', 'white')};
    }
  }

  svg {
    color: ${color('neutral', '100')};
  }
`

export const SidebarSubNav: React.FC<Nav<SidebarNavItemProps>> = ({
  children,
}) => {
  return (
    <StyledSheet
      button={(
        <StyledSheetButton
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
    </StyledSheet>
  )
}

SidebarSubNav.displayName = 'SidebarSubNav'
