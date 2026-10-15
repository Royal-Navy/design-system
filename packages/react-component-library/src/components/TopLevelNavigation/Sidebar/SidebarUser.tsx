import React, { useContext } from 'react'
import { spacing } from '@royalnavy/design-tokens'
import {
  IconExitToApp,
  IconMoreHoriz,
  IconPerson,
} from '@royalnavy/icon-library'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'

import { SidebarContext } from './context'
import { SidebarUserItem, SidebarUserItemProps } from './SidebarUserItem'
import { MAX_INLINE_USER_LINKS, TRANSITION_TIMEOUT } from './constants'
import { Sheet } from '../Sheet/Sheet'
import {
  StyledSheetList,
  StyledUser,
  StyledUserAction,
  StyledUserActions,
  StyledUserAvatar,
  StyledUserMoreButton,
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
   * Additional links to display alongside the user and exit links.
   * When expanded, links beyond the first are collapsed into a menu if there are more than two.
   */
  extraLinks?: SidebarUserItemProps[]
  /**
   * Full name of the end user (e.g. Joe Bloggs).
   */
  name?: string
}

type SidebarAvatarWithItemsProps = Omit<SidebarUserProps, 'link'>

const StyledSheet = styled(Sheet)`
  margin-left: ${spacing('4')};
`

const renderUserLinkItems = (links: SidebarUserItemProps[]) =>
  links.map(({ icon, link }, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <SidebarUserItem key={index} icon={icon} link={link} />
  ))

const SidebarUserLinks = ({ links }: { links: SidebarUserItemProps[] }) => {
  const hasOverflow = links.length > MAX_INLINE_USER_LINKS
  const inlineLinks = hasOverflow
    ? links.slice(0, MAX_INLINE_USER_LINKS - 1)
    : links
  const overflowLinks = hasOverflow
    ? links.slice(MAX_INLINE_USER_LINKS - 1)
    : []

  return (
    <>
      {inlineLinks.map(({ icon, link }, index) => {
        const { children, 'aria-label': ariaLabel } = (
          link as React.ReactElement
        ).props

        return (
          // eslint-disable-next-line react/no-array-index-key
          <StyledUserAction key={index}>
            {React.cloneElement(link as React.ReactElement, {
              children: icon,
              'aria-label':
                ariaLabel ??
                (typeof children === 'string' ? children : undefined),
              'data-testid': 'sidebar-user-additional-link',
            })}
          </StyledUserAction>
        )
      })}
      {hasOverflow && (
        <Sheet
          aria-label="More user links"
          button={
            <StyledUserMoreButton
              aria-label="Show more user links"
              data-testid="sidebar-user-more-button"
              icon={<IconMoreHoriz />}
            />
          }
          placement="top"
        >
          <StyledSheetList>
            {renderUserLinkItems(overflowLinks)}
          </StyledSheetList>
        </Sheet>
      )}
    </>
  )
}

const SidebarAvatarWithItems = ({
  initials,
  initialIsOpen,
  userLink,
  exitLink,
  extraLinks,
}: SidebarAvatarWithItemsProps) => (
  <StyledSheet
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
      {extraLinks && renderUserLinkItems(extraLinks)}
      {exitLink && <SidebarUserItem icon={<IconExitToApp />} link={exitLink} />}
    </StyledSheetList>
  </StyledSheet>
)

export const SidebarUser = ({
  initials,
  initialIsOpen,
  userLink,
  exitLink,
  extraLinks,
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
          extraLinks={extraLinks}
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
            <StyledUserActions>
              {extraLinks && <SidebarUserLinks links={extraLinks} />}
              {exitLink && (
                <StyledUserAction>
                  {React.cloneElement(exitLink as React.ReactElement, {
                    children: <IconExitToApp />,
                    'data-testid': 'sidebar-exit-link',
                  })}
                </StyledUserAction>
              )}
            </StyledUserActions>
          </StyledUserText>
        )}
      </Transition>
    </StyledUser>
  )
}

SidebarUser.displayName = 'SidebarUser'
