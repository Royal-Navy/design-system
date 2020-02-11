import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { Searchbar } from '../../components'
import { Logo as DefaultLogo, Search as SearchIcon } from '../../icons'
import { MastheadUserProps } from './MastheadUser'
import { Nav } from '../../types/Nav'
import {
  NOTIFICATION_PLACEMENT,
  NotificationPanel,
  NotificationsProps,
} from '../NotificationPanel'

export interface MastheadProps {
  hasUnreadNotification?: boolean
  homeLink?: React.ReactElement<LinkTypes>
  Logo?: React.ComponentType
  nav?: React.ReactElement<Nav>
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
      <>
        <Logo />
        <span className="rn-masthead__title" data-testid="masthead-servicename">
          {title}
        </span>
      </>
    ),
    className: 'rn-masthead__service-name',
  })
}

export const Masthead: React.FC<MastheadProps> = ({
  hasUnreadNotification,
  homeLink,
  Logo = DefaultLogo,
  nav,
  notifications,
  onSearch,
  searchPlaceholder = '',
  title,
  user,
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
        {getServiceName(homeLink, Logo, title)}

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
              hasUnreadNotification={hasUnreadNotification}
            >
              {notifications}
            </NotificationPanel>
          )}

          {user}
        </div>
      </div>

      <TransitionGroup>
        {onSearch && showSearch && (
          <CSSTransition
            classNames="rn-searchbar"
            timeout={{ enter: 300, exit: 300 }}
          >
            <Searchbar
              onSearch={submitSearch}
              searchButton={searchButtonRef}
              searchPlaceholder={searchPlaceholder}
              setShowSearch={setShowSearch}
              style={{ width: containerWidth }}
            />
          </CSSTransition>
        )}
      </TransitionGroup>

      {nav}
    </div>
  )
}

Masthead.displayName = 'Masthead'
