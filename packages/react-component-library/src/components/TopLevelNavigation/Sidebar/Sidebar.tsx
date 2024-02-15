import React, { useRef } from 'react'
import { Transition } from 'react-transition-group'

import { SidebarHandle } from './SidebarHandle'
import { SidebarUserProps } from './SidebarUser'
import { SidebarNotifications } from './SidebarNotifications'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { SidebarContext, SidebarProvider } from './context'
import { NotificationsProps } from '../NotificationPanel'
import { TRANSITION_TIMEOUT } from './constants'
import { StyledSidebar } from './partials/StyledSidebar'
import { StyledHead } from './partials/StyledHead'
import { StyledHeadIcon } from './partials/StyledHeadIcon'
import { StyledHeadTitle } from './partials/StyledHeadTitle'

export interface SidebarProps extends ComponentWithClass {
  /**
   * Optional icon to display at the top of the component (JSX).
   */
  icon?: React.ReactNode
  /**
   * Optional text title to display at the top of the component.
   */
  title?: string
  /**
   * Optional JSX to render a user menu.
   */
  user?: React.ReactElement<SidebarUserProps>
  /**
   * Toggle whether there are unread notifications.
   */
  hasUnreadNotification?: boolean
  /**
   * Optional JSX to render a collection of notifications.
   */
  notifications?: React.ReactElement<NotificationsProps>
  /**
   * Whether the notifications list is initially open.
   * @private
   */
  initialIsNotificationsOpen?: boolean
  /**
   * Initial `isOpen` state on first render.
   */
  initialIsOpen?: boolean
}

export const Sidebar = ({
  icon,
  title,
  children,
  user,
  hasUnreadNotification,
  notifications,
  initialIsNotificationsOpen,
  initialIsOpen = false,
  ...rest
}: SidebarProps) => {
  const nodeRef = useRef(null)

  return (
    <SidebarProvider initialIsOpen={initialIsOpen}>
      <SidebarContext.Consumer>
        {({ isOpen, hasMouseOver, setHasMouseOver }) => (
          <StyledSidebar
            data-testid="sidebar"
            isOpen={isOpen}
            onMouseEnter={(_) => setHasMouseOver(true)}
            onMouseLeave={(_) => setHasMouseOver(false)}
            {...rest}
          >
            <Transition
              nodeRef={nodeRef}
              in={hasMouseOver}
              timeout={0}
              unmountOnExit
            >
              {(state) => (
                <SidebarHandle ref={nodeRef} transitionStatus={state} />
              )}
            </Transition>
            {title && (
              <StyledHead data-testid="sidebar-head">
                {icon && <StyledHeadIcon>{icon}</StyledHeadIcon>}
                <Transition
                  in={isOpen}
                  timeout={TRANSITION_TIMEOUT}
                  unmountOnExit
                >
                  {(state) => (
                    <StyledHeadTitle $transitionStatus={state}>
                      {title}
                    </StyledHeadTitle>
                  )}
                </Transition>
              </StyledHead>
            )}
            {children}

            {notifications && (
              <SidebarNotifications
                initialIsOpen={initialIsNotificationsOpen}
                notifications={notifications}
                hasUnreadNotification={hasUnreadNotification}
              />
            )}

            {user}
          </StyledSidebar>
        )}
      </SidebarContext.Consumer>
    </SidebarProvider>
  )
}

Sidebar.displayName = 'Sidebar'
