import React, { useContext } from 'react'
import { IconExitToApp, IconPerson } from '@royalnavy/icon-library'
import { Transition } from 'react-transition-group'

import { SidebarContext } from './context'
import { SidebarUserItem } from './SidebarUserItem'
import { TRANSITION_TIMEOUT } from './constants'
import { Sheet } from '../Sheet/Sheet'
import {
  StyledSheetList,
  StyledUser,
  StyledUserAvatar,
  StyledUserSheetButton,
  StyledUserText,
} from './partials'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { LinkProps } from '../../../common/Link'

export interface SidebarUserProps extends ComponentWithClass {
  children?: never
  /**
   * Initials of the end user (e.g. Joe Bloggs => JB).
   */
  initials: string
  /**
   * Whether the user options sheet is initially open.
   * @private
   */
  initialIsOpen?: boolean
  /**
   * Link component to apply to the user avatar.
   */
  userLink?: React.ReactElement<LinkProps>
  /**
   * Link component to apply to the exit icon.
   */
  exitLink?: React.ReactElement<LinkProps>
  /**
   * Full name of the end user (e.g. Joe Bloggs).
   */
  name?: string
}

type SidebarAvatarWithItemsProps = Omit<SidebarUserProps, 'link'>

const SidebarAvatarWithItems = ({
  initials,
  initialIsOpen,
  userLink,
  exitLink,
}: SidebarAvatarWithItemsProps) => (
  <Sheet
    aria-label="User options"
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
    initialIsOpen={initialIsOpen}
    placement="right"
  >
    <StyledSheetList>
      {userLink && <SidebarUserItem icon={<IconPerson />} link={userLink} />}
      {exitLink && <SidebarUserItem icon={<IconExitToApp />} link={exitLink} />}
    </StyledSheetList>
  </Sheet>
)

export const SidebarUser = ({
  initials,
  initialIsOpen,
  userLink,
  exitLink,
  name,
}: SidebarUserProps) => {
  const { isOpen } = useContext(SidebarContext)

  if (!isOpen) {
    return (
      <StyledUser data-testid="sidebar-user-closed-children">
        <SidebarAvatarWithItems
          initials={initials}
          initialIsOpen={initialIsOpen}
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
