import React, { useRef } from 'react'

import { Logo as DefaultLogo } from './Logo'
import { LinkTypes } from '../../../common/Link'
import { MASTHEAD_SUBCOMPONENT } from './constants'
import { MastheadUserProps } from './index'
import { Nav, NavItem } from '../../../common/Nav'
import { NotificationsProps } from '../NotificationPanel'
import { Sheet } from '../Sheet/Sheet'
import { SheetButton } from '../Sheet/SheetButton'
import { useMastheadSearch } from './useMastheadSearch'
import { StyledOption } from './partials/StyledOption'
import { StyledOptions } from './partials/StyledOptions'
import { StyledMain } from './partials/StyledMain'
import { StyledMastHead } from './partials/StyledMasthead'
import { StyledServiceName } from './partials/StyledServiceName'
import { StyledTitle } from './partials/StyledTitle'
import { StyledBanner } from './partials/StyledBanner'
import { SearchBar } from '../SearchBar'
import { StyledNotRead } from '../NotificationPanel/partials/StyledNotRead'
import { StyledIconNotifications } from './partials/StyledIconNotifications'
import { StyledIconSearch } from './partials/StyledIconSearch'
import { ValueOf } from '../../../helpers'
import { StyledInlineNav } from './partials/StyledInlineNav'

export interface MastheadProps {
  /**
   * Toggle whether or not to display the default logo.
   */
  hasDefaultLogo?: boolean
  /**
   * Toggle whether there are unread notifications.
   */
  hasUnreadNotification?: boolean
  /**
   * Link component for when a user clicks on the logo / app name.
   */
  homeLink?: React.ReactElement<LinkTypes>
  /**
   * Which subcomponent is initially open.
   * @private
   */
  initialOpenSubcomponent?: ValueOf<typeof MASTHEAD_SUBCOMPONENT>
  /**
   * Optional custom logo component (SVG reccomended).
   */
  Logo?: React.ComponentType
  /**
   * Optional JSX to render the primary navigation.
   */
  nav?: React.ReactElement<Nav<NavItem>>
  /**
   * Optional JSX to render a collection of notifications.
   */
  notifications?: React.ReactElement<NotificationsProps>
  /**
   * Optional handler invoked when the submit search button is clicked.
   */
  onSearch?:
    | ((event: React.FormEvent<HTMLFormElement>, term: string) => void)
    | null
  /**
   * Text title of the application.
   */
  title: string
  /**
   * Optional JSX to render a user menu.
   */
  user?: React.ReactElement<MastheadUserProps>
  /**
   * Whether to display the nav below (default) or within the masthead
   */
  hasInlineNav?: boolean
}

function getServiceName(
  Logo: React.ComponentType | null,
  title: string,
  homeLink?: React.ReactElement<LinkTypes>
) {
  const link = homeLink || <span />
  return React.cloneElement(link as React.ReactElement, {
    ...link.props,
    children: (
      <StyledServiceName>
        {Logo &&
          React.cloneElement(<Logo data-testid="logo" />, {
            role: 'presentation',
          })}
        <StyledTitle $hasLogo={!!Logo} data-testid="masthead-servicename">
          {title}
        </StyledTitle>
      </StyledServiceName>
    ),
  })
}

export const Masthead = ({
  hasDefaultLogo = true,
  hasUnreadNotification,
  homeLink,
  initialOpenSubcomponent,
  Logo,
  nav,
  hasInlineNav = false,
  notifications,
  onSearch,
  title,
  user,
  ...rest
}: MastheadProps) => {
  const searchButtonRef = useRef<HTMLButtonElement>(null)

  const {
    containerWidth,
    mastheadRef,
    setShowSearch,
    showSearch,
    toggleSearch,
  } = useMastheadSearch(
    initialOpenSubcomponent === MASTHEAD_SUBCOMPONENT.SEARCH
  )

  const DisplayLogo = Logo ?? (hasDefaultLogo ? DefaultLogo : null)

  const submitSearch = (e: React.FormEvent<HTMLFormElement>, term: string) => {
    onSearch?.(e, term)
    setShowSearch(false)
  }

  return (
    <StyledMastHead data-testid="masthead" ref={mastheadRef} {...rest}>
      <StyledMain>
        <StyledBanner
          data-testid="masthead-banner"
          role="banner"
          $withInlineNav={hasInlineNav}
        >
          {getServiceName(DisplayLogo, title, homeLink)}
        </StyledBanner>
        {hasInlineNav ? (
          <StyledInlineNav data-testid="masthead-inline-nav">
            {nav}
          </StyledInlineNav>
        ) : null}

        <StyledOptions
          $withInlineNav={hasInlineNav}
          data-testid="masthead-options"
        >
          {onSearch && (
            <StyledOption
              $isActive={showSearch}
              aria-expanded={showSearch}
              aria-label="Show search"
              as="button"
              onClick={toggleSearch}
              ref={searchButtonRef}
              data-testid="masthead-search-button"
            >
              <StyledIconSearch />
            </StyledOption>
          )}

          {notifications && (
            <Sheet
              aria-label="Notifications"
              button={
                <StyledOption
                  aria-label="Show notifications"
                  as={SheetButton}
                  data-testid="notification-button"
                  icon={<StyledIconNotifications />}
                >
                  {hasUnreadNotification && (
                    <StyledNotRead data-testid="not-read" />
                  )}
                </StyledOption>
              }
              initialIsOpen={
                initialOpenSubcomponent === MASTHEAD_SUBCOMPONENT.NOTIFICATIONS
              }
              placement="bottom"
            >
              {notifications}
            </Sheet>
          )}

          {user}
        </StyledOptions>
      </StyledMain>

      {onSearch && showSearch && (
        <SearchBar
          onSearch={submitSearch}
          searchButtonRef={searchButtonRef}
          setShowSearch={setShowSearch}
          containerWidth={containerWidth}
        />
      )}

      {!hasInlineNav ? nav : null}
    </StyledMastHead>
  )
}

Masthead.displayName = 'Masthead'
