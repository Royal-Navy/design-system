import React, { useRef, useState } from 'react'

import { Bell, Logo as DefaultLogo, Search as SearchIcon } from '../../../icons'
import { LinkTypes } from '../../../common/Link'
import { MastheadUserProps } from './index'
import { Nav, NavItem } from '../../../common/Nav'
import {
  NOTIFICATION_CONTAINER_WIDTH,
  NotificationsProps,
} from '../NotificationPanel'
import { SHEET_PLACEMENT } from '../Sheet/constants'
import { Sheet } from '../Sheet/Sheet'
import { SheetButton } from '../Sheet/SheetButton'
import { useMastheadSearch } from './useMastheadSearch'
import { StyledOption } from './partials/StyledOption'
import { StyledOptions } from './partials/StyledOptions'
import { StyledMain } from './partials/StyledMain'
import { StyledMastHead } from './partials/StyledMasthead'
import { StyledServiceName } from './partials/StyledServiceName'
import { StyledTitle } from './partials/StyledTitle'
import { StyledVerticalSeparator } from './partials/StyledVerticalSeparator'
import { StyledBanner } from './partials/StyledBanner'
import { SearchBar } from '../SearchBar/SearchBar'

export interface MastheadProps {
  hasDefaultLogo?: boolean
  hasUnreadNotification?: boolean
  homeLink?: React.ReactElement<LinkTypes>
  Logo?: React.ComponentType
  nav?: React.ReactElement<Nav<NavItem>>
  notifications?: React.ReactElement<NotificationsProps>
  onSearch?: (term: string) => void
  searchPlaceholder?: string
  title: string
  user?: React.ReactElement<MastheadUserProps>
}

function getServiceName(
  homeLink: React.ReactElement<LinkTypes>,
  Logo: React.ComponentType,
  title: string
) {
  const link = homeLink || <span />
  return React.cloneElement(link as React.ReactElement, {
    ...link.props,
    children: (
      <StyledServiceName>
        {Logo &&
          React.cloneElement(<Logo />, {
            role: 'presentation',
          })}
        <StyledTitle $hasLogo={!!Logo} data-testid="masthead-servicename">
          {title}
        </StyledTitle>
      </StyledServiceName>
    ),
  })
}

export const Masthead: React.FC<MastheadProps> = ({
  hasDefaultLogo = true,
  hasUnreadNotification,
  homeLink,
  Logo,
  nav,
  notifications,
  onSearch,
  searchPlaceholder = '',
  title,
  user,
  ...rest
}) => {
  const [showNotifications, setShowNotifications] = useState(false)
  const searchButtonRef = useRef<HTMLButtonElement>(null)

  const {
    containerWidth,
    mastheadContainerRef,
    setShowSearch,
    showSearch,
    toggleSearch,
  } = useMastheadSearch()

  const DisplayLogo = Logo ?? (hasDefaultLogo ? DefaultLogo : null)

  const submitSearch = (term: string) => {
    onSearch(term)
    setShowSearch(false)
  }

  return (
    <StyledMastHead
      $showNotifications={showNotifications}
      $showSearch={showSearch}
      data-testid="masthead"
      ref={mastheadContainerRef}
      {...rest}
    >
      <StyledMain>
        <StyledBanner data-testid="masthead-banner" role="banner">
          {getServiceName(homeLink, DisplayLogo, title)}
        </StyledBanner>

        <StyledOptions>
          {onSearch && (
            <>
              <StyledOption
                $isActive={showSearch}
                aria-expanded={showSearch}
                aria-label="Show search"
                as="button"
                onClick={toggleSearch}
                ref={searchButtonRef}
                data-testid="masthead-search-button"
              >
                <SearchIcon />
              </StyledOption>
              <StyledVerticalSeparator>
                <line x1="0" y1="14" x2="0" y2="44" />
              </StyledVerticalSeparator>
            </>
          )}

          {notifications && (
            <Sheet
              button={(
                <StyledOption
                  aria-label="Show notifications"
                  as={SheetButton}
                  data-testid="notification-button"
                  icon={<Bell />}
                >
                  {hasUnreadNotification && (
                    <span
                      className="rn-notification-panel__not-read"
                      data-testid="not-read"
                    />
                  )}
                </StyledOption>
              )}
              placement={SHEET_PLACEMENT.BELOW}
              width={NOTIFICATION_CONTAINER_WIDTH}
              onHide={() => setShowNotifications(false)}
              onShow={() => setShowNotifications(true)}
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
          searchButton={searchButtonRef}
          searchPlaceholder={searchPlaceholder}
          setShowSearch={setShowSearch}
          style={{ width: containerWidth }}
        />
      )}

      {nav}
    </StyledMastHead>
  )
}

Masthead.displayName = 'Masthead'
