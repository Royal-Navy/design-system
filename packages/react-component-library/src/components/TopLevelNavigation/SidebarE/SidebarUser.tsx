import React, { useContext } from 'react'
import { IconPerson, IconExitToApp } from '@royalnavy/icon-library'
import { Transition } from 'react-transition-group'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { LinkTypes } from '../../../common/Link'
import { SidebarContext } from './context'
import { SidebarUserItemE } from './SidebarUserItem'
import { SHEET_PLACEMENT } from '../Sheet/constants'
import { TRANSITION_STYLES, TRANSITION_TIMEOUT } from './constants'
import { StyledUserAvatar } from './partials/StyledUserAvatar'
import { StyledUserSheet } from './partials/StyledUserSheet'
import { StyledUserSheetButton } from './partials/StyledUserSheetButton'
import { StyledUser } from './partials/StyledUser'
import { StyledUserText } from './partials/StyledUserText'

export interface SidebarUserEProps extends ComponentWithClass {
  children?: never
  initials: string
  userLink?: React.ReactElement<LinkTypes>
  exitLink?: React.ReactElement<LinkTypes>
  name?: string
}

type SidebarAvatarWithItemsProps = Omit<SidebarUserEProps, 'link'>

const SHEET_WIDTH = 106

const SidebarAvatarWithItems: React.FC<SidebarAvatarWithItemsProps> = ({
  initials,
  userLink,
  exitLink,
}) => (
  <StyledUserSheet
    button={(
      <StyledUserSheetButton
        aria-label="Show user options"
        data-testid="user-button"
        icon={
          <StyledUserAvatar initials={initials} data-testid="sidebar-avatar" />
        }
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
  </StyledUserSheet>
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
      <StyledUserAvatar initials={initials} />
      <Transition in={isOpen} timeout={TRANSITION_TIMEOUT} unmountOnExit>
        {(state) => (
          <StyledUserText style={{ ...TRANSITION_STYLES[state] }}>
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

SidebarUserE.displayName = 'SidebarUser'
