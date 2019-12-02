import React, { useRef, useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classNames from 'classnames'

import { Link, Searchbar, ScrollableNav, Badge } from '../../components'
import { Logo as DefaultLogo, Search as SearchIcon } from '../../icons'
import { UserLink } from './UserLink'
import {
  NotificationPanel,
  NotificationsProps,
  NOTIFICATION_PLACEMENT,
} from '../NotificationPanel'

export interface MastheadProps {
  homeLink?: LinkTypes
  LinkComponent?: any
  Logo?: React.ComponentType
  navItems?: NavItemTypes[]
  notifications?: React.ReactElement<NotificationsProps>
  onSearch?: (term: string) => void
  searchPlaceholder?: string
  title: string
  unreadNotification?: boolean
  user?: UserType
  version?: string
  versionLink?: LinkTypes
}

export const Masthead: React.FC<MastheadProps> = ({
  homeLink,
  LinkComponent = Link,
  Logo = DefaultLogo,
  navItems,
  notifications,
  onSearch,
  searchPlaceholder = '',
  title,
  unreadNotification,
  user,
  version,
  versionLink,
}) => {
  const [showSearch, setShowSearch] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const searchButtonRef = useRef<HTMLButtonElement>(null)
  const mastheadContainerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const toggleSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.currentTarget.blur()
    const newShowSearch = !showSearch

    // if opening the searchbar then get the container width and set that
    // as the width of the searchbar so that it does not spill
    // over to other parts of the page, such as the sidebar.
    if (newShowSearch === true) {
      setContainerWidth(mastheadContainerRef.current.offsetWidth)
    }

    setShowSearch(!showSearch)
  }

  const submitSearch = (term: string) => {
    onSearch(term)
    setShowSearch(false)
  }

  return (
    <div
      className={classNames('rn-masthead', {
        'rn-masthead--show-search': showSearch,
        'rn-masthead--show-notifications': showNotifications,
      })}
      data-testid="masthead"
      ref={mastheadContainerRef}
    >
      <div className="rn-masthead__main">
        <LinkComponent {...homeLink} className="rn-masthead__service-name">
          <Logo />
          <span
            className="rn-masthead__title"
            data-testid="masthead-servicename"
          >
            {title}
          </span>
        </LinkComponent>

        {version && (
          <div className="rn-masthead__version">
            <LinkComponent {...versionLink} data-testid="version">
              <Badge color="primary" className="rn-badge--no-text-transform">
                {version}
              </Badge>
            </LinkComponent>
          </div>
        )}

        <div className="rn-masthead__options">
          {onSearch && (
            <>
              <button
                className={`rn-masthead__option rn-searchbar__btn ${
                  showSearch ? 'is-active' : 'is-inactive'
                }`}
                onClick={toggleSearch}
                ref={searchButtonRef}
                data-testid="masthead-search-button"
              >
                <SearchIcon />
              </button>
              <svg className="rn-masthead__vertical-separator">
                <line x1="0" y1="14" x2="0" y2="44" />
              </svg>
            </>
          )}

          {notifications && (
            <NotificationPanel
              buttonClassName="rn-masthead__option"
              className="rn-masthead__notification"
              data-testid="masthead-notifications"
              notificationPlacement={NOTIFICATION_PLACEMENT.BELOW}
              onHide={() => setShowNotifications(false)}
              onShow={() => setShowNotifications(true)}
              unreadNotification={unreadNotification}
            >
              {notifications}
            </NotificationPanel>
          )}

          {user && (
            <UserLink
              className="rn-masthead__option"
              LinkComponent={LinkComponent}
              user={user}
            />
          )}
        </div>
      </div>

      <ReactCSSTransitionGroup
        className="rn-searchbar__overlay"
        transitionName="rn-searchbar"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {onSearch && showSearch && (
          <Searchbar
            onSearch={submitSearch}
            searchButton={searchButtonRef}
            searchPlaceholder={searchPlaceholder}
            setShowSearch={setShowSearch}
            style={{ width: containerWidth }}
          />
        )}
      </ReactCSSTransitionGroup>

      {navItems && (
        <ScrollableNav
          className="rn-masthead__nav"
          navItems={navItems}
          LinkComponent={LinkComponent}
          data-testid="masthead-nav"
        />
      )}
    </div>
  )
}

Masthead.displayName = 'Masthead'
