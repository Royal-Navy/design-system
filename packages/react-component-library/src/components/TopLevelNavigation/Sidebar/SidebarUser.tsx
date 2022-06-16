import React, { useContext } from 'react'
import { IconPerson, IconExitToApp } from '@defencedigital/icon-library'
import { Transition } from 'react-transition-group'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { LinkTypes } from '../../../common/Link'
import { SidebarContext } from './context'
import { SidebarUserItem } from './SidebarUserItem'
import { TRANSITION_TIMEOUT } from './constants'
import { Sheet } from '../Sheet/Sheet'
import { StyledUserAvatar } from './partials/StyledUserAvatar'
import { StyledUserSheetButton } from './partials/StyledUserSheetButton'
import { StyledUser } from './partials/StyledUser'
import { StyledSheetList } from './partials/StyledSheetList'
import { StyledUserText } from './partials/StyledUserText'

export interface SidebarUserProps extends ComponentWithClass {
  children?: never
  /**
   * Initials of the end user (e.g. Joe Bloggs => JB).
   */
  initials: string
  /**
   * Link component to apply to the user avatar.
   */
  userLink?: React.ReactElement<LinkTypes>
  /**
   * Link component to apply to the exit icon.
   */
  exitLink?: React.ReactElement<LinkTypes>
  /**
   * Full name of the end user (e.g. Joe Bloggs).
   */
  name?: string
}

type SidebarAvatarWithItemsProps = Omit<SidebarUserProps, 'link'>

const SidebarAvatarWithItems: React.FC<SidebarAvatarWithItemsProps> = ({
  initials,
  userLink,
  exitLink,
}) => (
  <Sheet
    button={
      <StyledUserSheetButton
        aria-label="Show user options"
        data-testid="user-button"
        icon={
          <StyledUserAvatar data-testid="sidebar-avatar">
            {initials}
          </StyledUserAvatar>
        }
      />
    }
    placement="right"
  >
    <StyledSheetList>
      {userLink && <SidebarUserItem icon={<IconPerson />} link={userLink} />}
      {exitLink && <SidebarUserItem icon={<IconExitToApp />} link={exitLink} />}
    </StyledSheetList>
  </Sheet>
)

export const SidebarUser: React.FC<SidebarUserProps> = ({
  initials,
  userLink,
  exitLink,
  name,
}) => {
  const { isOpen } = useContext(SidebarContext)

  if (!isOpen) {
    return (
      <StyledUser data-testid="sidebar-user-closed-children">
        <SidebarAvatarWithItems
          initials={initials}
          userLink={userLink}
          exitLink={exitLink}
        />
      </StyledUser>
    )
  }

  return (
    <StyledUser data-testid={`sidebar-user-${isOpen ? 'open' : 'closed'}`}>
      <StyledUserAvatar>{initials}</StyledUserAvatar>
      <Transition in={isOpen} timeout={TRANSITION_TIMEOUT} unmountOnExit>
        {(state) => (
          <StyledUserText $transitionStatus={state}>
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
          </StyledUserText>
        )}
      </Transition>
    </StyledUser>
  )
}

SidebarUser.displayName = 'SidebarUser'
