import React, { useContext } from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { IconExitToApp } from '@royalnavy/icon-library'

import { Avatar } from '../../Avatar'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { LinkTypes } from '../../../common/Link'
import { Nav } from '../../../common/Nav'
import { SidebarContext } from './context'
import { SidebarUserItemProps } from './SidebarUserItem'
import { Sheet } from '../Sheet/Sheet'
import { SheetButton } from '../Sheet/SheetButton'
import { SHEET_PLACEMENT } from '../Sheet/constants'

export interface SidebarUserWithItemsProps extends Nav<SidebarUserItemProps> {
  initials: string
  link: React.ReactElement<LinkTypes>
  name?: string
}

export interface SidebarUserWithLinkProps extends ComponentWithClass {
  children?: never
  initials: string
  link: React.ReactElement<LinkTypes>
  name?: string
}

export type SidebarUserProps =
  | SidebarUserWithLinkProps
  | SidebarUserWithItemsProps

const SHEET_WIDTH = 106

const { spacing, color, fontSize } = selectors

const StyledSidebarUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing('10')} ${spacing('8')};
  background-color: ${color('neutral', '500')};
`

const StyledSidebarUserText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 1rem);
  padding: 0 0 0 ${spacing('6')};

  > div {
    display: inline-flex;
    justify-content: center;
    flex-direction: column;

    span:first-of-type {
      color: ${color('neutral', 'white')};
      font-size: ${fontSize('m')};
    }

    span:last-of-type {
      margin-top: ${spacing('1')};
      color: ${color('neutral', '300')};
      font-size: ${fontSize('s')};
    }
  }

  svg {
    width: 1.65rem;
    height: 1.65rem;
    color: ${color('neutral', 'white')};
    background-color: ${color('neutral', '400')};
    border-radius: 2px;
    padding: ${spacing('2')};
  }
`

const StyledAvatar = styled(Avatar)`
  &:hover {
    text-decoration: none;
  }
`

const StyledSheet = styled(Sheet)`
  > div > div {
    margin-left: 1px;
  }

  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a,
  a:hover {
    color: ${color('neutral', 'white')};
    text-decoration: none;
  }
`

const StyledSheetButton = styled(SheetButton)`
  padding: 0;
`

const SidebarAvatarWithItems: React.FC<Omit<
  SidebarUserWithItemsProps,
  'link'
>> = ({ children, initials }) => (
  <StyledSheet
    button={
      <StyledSheetButton
        aria-label="Show user options"
        data-testid="user-button"
        icon={<StyledAvatar initials={initials} data-testid="sidebar-avatar" />}
      />
    }
    placement={SHEET_PLACEMENT.RIGHT}
    width={SHEET_WIDTH}
  >
    <ol>{children}</ol>
  </StyledSheet>
)

export const SidebarUser: React.FC<SidebarUserProps> = ({
  initials,
  link,
  name,
  children,
}) => {
  const { isOpen } = useContext(SidebarContext)

  if (!isOpen && children) {
    return (
      <StyledSidebarUser>
        <SidebarAvatarWithItems initials={initials}>
          {children}
        </SidebarAvatarWithItems>
      </StyledSidebarUser>
    )
  }

  if (isOpen) {
    return React.cloneElement(link as React.ReactElement, {
      ...link.props,
      children: (
        <StyledSidebarUser>
          <StyledAvatar initials={initials} />
          <StyledSidebarUserText>
            <div>
              <span>{name}</span>
              <span>View Profile</span>
            </div>
            <IconExitToApp />
          </StyledSidebarUserText>
        </StyledSidebarUser>
      ),
      'data-testid': 'sidebar-user',
    })
  }

  return React.cloneElement(link as React.ReactElement, {
    ...link.props,
    children: (
      <StyledSidebarUser>
        <StyledAvatar initials={initials} />
      </StyledSidebarUser>
    ),
    'data-testid': 'sidebar-user',
  })
}

SidebarUser.displayName = 'SidebarUser'
