import React from 'react'
import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import { IconNotifications } from '@defencedigital/icon-library'
import classNames from 'classnames'

import { NotificationsProps } from '../NotificationPanel'
import { SidebarNavProps, SidebarUserProps } from './index'
import { Sheet } from '../Sheet/Sheet'
import { SheetButton } from '../Sheet/SheetButton'
import { useOpenClose } from '../../../hooks'
import { StyledNotRead } from '../NotificationPanel/partials/StyledNotRead'
import { ComponentWithClass } from '../../../common/ComponentWithClass'

export interface SidebarProps extends ComponentWithClass {
  /**
   * Toggle whether there are unread notifications.
   */
  hasUnreadNotification?: boolean
  /**
   * Optional JSX to render the primary navigation.
   */
  nav?: React.ReactElement<SidebarNavProps>
  /**
   * Optional JSX to render a collection of notifications.
   */
  notifications?: React.ReactElement<NotificationsProps>
  /**
   * Optional JSX to render a user menu.
   */
  user?: React.ReactElement<SidebarUserProps>
}

const { color } = selectors

const StyledIconNotifications = styled(IconNotifications)`
  color: ${color('neutral', '200')};

  + span {
    top: 0px;
    right: 0px;
  }
`

/**
 * @deprecated
 */
export const Sidebar: React.FC<SidebarProps> = ({
  nav,
  notifications,
  hasUnreadNotification,
  user,
  className,
  ...rest
}) => {
  const { open, setOpen } = useOpenClose(false)
  const classes = classNames(
    'rn-sidebar',
    {
      'is-open': open,
    },
    className
  )

  return (
    <div className={classes} data-testid="sidebar" {...rest}>
      {nav &&
        React.cloneElement(nav, {
          ...nav.props,
          onBlur: () => setOpen(false),
          onFocus: () => setOpen(true),
          onItemClick: () => setOpen(false),
          onMouseOut: () => setOpen(false),
          onMouseOver: () => setOpen(true),
        })}

      <div className="rn-sidebar__bottom">
        {notifications && (
          <Sheet
            id="sidebar-notifications"
            button={
              <SheetButton
                aria-label="Show notifications"
                data-testid="notification-button"
                icon={<StyledIconNotifications />}
              >
                {hasUnreadNotification && (
                  <StyledNotRead data-testid="not-read" />
                )}
              </SheetButton>
            }
          >
            {notifications}
          </Sheet>
        )}
        {user}
      </div>
    </div>
  )
}

Sidebar.displayName = 'Sidebar'
