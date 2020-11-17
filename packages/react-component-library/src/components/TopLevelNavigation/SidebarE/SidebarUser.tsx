import React, { useContext } from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { IconPerson, IconExitToApp } from '@royalnavy/icon-library'
import { Transition } from 'react-transition-group'

import { Avatar } from '../../Avatar'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { LinkTypes } from '../../../common/Link'
import { SidebarContext } from './context'
import { SidebarUserItemE } from './SidebarUserItem'
import { Sheet } from '../Sheet/Sheet'
import { SheetButton } from '../Sheet/SheetButton'
import { SHEET_PLACEMENT } from '../Sheet/constants'
import { TRANSITION_STYLES, TRANSITION_TIMEOUT } from './constants'

export interface SidebarUserEProps extends ComponentWithClass {
  children?: never
  initials: string
  userLink?: React.ReactElement<LinkTypes>
  exitLink?: React.ReactElement<LinkTypes>
  name?: string
}

type SidebarAvatarWithItemsProps = Omit<SidebarUserEProps, 'link'>

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
  white-space: nowrap;
  opacity: 1;
  transition: opacity 150ms linear;

  > div {
    display: inline-flex;
    justify-content: center;
    flex-direction: column;

    a:hover {
      text-decoration: none;
    }

    > span {
      color: ${color('neutral', 'white')};
      font-size: ${fontSize('m')};
    }

    a span {
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

const SidebarAvatarWithItems: React.FC<SidebarAvatarWithItemsProps> = ({
  initials,
  userLink,
  exitLink,
}) => (
  <StyledSheet
    button={(
      <StyledSheetButton
        aria-label="Show user options"
        data-testid="user-button"
        icon={<StyledAvatar initials={initials} data-testid="sidebar-avatar" />}
      />
    )}
    placement={SHEET_PLACEMENT.RIGHT_BOTTOM}
    width={SHEET_WIDTH}
  >
    <ol>
      {userLink && <SidebarUserItemE icon={<IconPerson />} link={userLink} />}
      {exitLink && (
        <SidebarUserItemE icon={<IconExitToApp />} link={exitLink} />
      )}
    </ol>
  </StyledSheet>
)

export const SidebarUserE: React.FC<SidebarUserEProps> = ({
  initials,
  userLink,
  exitLink,
  name,
}) => {
  const { isOpen } = useContext(SidebarContext)

  if (!isOpen) {
    return (
      <StyledSidebarUser data-testid="sidebar-user-closed-children">
        <SidebarAvatarWithItems
          initials={initials}
          userLink={userLink}
          exitLink={exitLink}
        />
      </StyledSidebarUser>
    )
  }

  return (
    <StyledSidebarUser
      data-testid={`sidebar-user-${isOpen ? 'open' : 'closed'}`}
    >
      <StyledAvatar initials={initials} />
      <Transition in={isOpen} timeout={TRANSITION_TIMEOUT} unmountOnExit>
        {(state) => (
          <StyledSidebarUserText style={{ ...TRANSITION_STYLES[state] }}>
            <div>
              <span>{name}</span>
              {userLink &&
                React.cloneElement(userLink as React.ReactElement, {
                  ...userLink.props,
                  children: <span>View Profile</span>,
                  'data-testid': 'sidebar-user-link',
                })}
            </div>
            {exitLink &&
              React.cloneElement(exitLink as React.ReactElement, {
                children: <IconExitToApp />,
                'data-testid': 'sidebar-exit-link',
              })}
          </StyledSidebarUserText>
        )}
      </Transition>
    </StyledSidebarUser>
  )
}

SidebarUserE.displayName = 'SidebarUser'
