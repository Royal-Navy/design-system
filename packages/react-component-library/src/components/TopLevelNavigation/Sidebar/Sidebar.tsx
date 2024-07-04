import React, { useRef, useContext, useLayoutEffect } from 'react'
import { Transition } from 'react-transition-group'

import { SidebarHandle } from './SidebarHandle'
import { SidebarUserProps } from './SidebarUser'
import { SidebarNotifications } from './SidebarNotifications'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { SidebarContext } from './context'
import { NotificationsProps } from '../NotificationPanel'
import { TRANSITION_TIMEOUT } from './constants'
import { StyledSidebar } from './partials/StyledSidebar'
import { StyledHead } from './partials/StyledHead'
import { StyledHeadIcon } from './partials/StyledHeadIcon'
import { StyledHeadTitle } from './partials/StyledHeadTitle'
import { ClassificationProps } from '../../ClassificationBar'

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
  /**
   * Optional jsx to render the classification bar above the masthead.
   */
  classificationBar?: React.ReactElement<ClassificationProps>
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
  classificationBar,
  ...rest
}: SidebarProps) => {
  const nodeRef = useRef(null)
  const { isOpen, hasMouseOver, setHasMouseOver, setIsOpen } =
    useContext(SidebarContext)

  useLayoutEffect(() => {
    setIsOpen(initialIsOpen)
  }, [initialIsOpen, setIsOpen])

  return (
    <StyledSidebar
      data-testid="sidebar"
      $isOpen={isOpen}
      onMouseEnter={(_) => setHasMouseOver(true)}
      onMouseLeave={(_) => setHasMouseOver(false)}
      {...rest}
    >
      {classificationBar &&
        React.cloneElement(classificationBar, {
          isCondensed: !isOpen,
          inSidebar: true,
        })}
      <Transition nodeRef={nodeRef} in={hasMouseOver} timeout={0} unmountOnExit>
        {(state) => <SidebarHandle ref={nodeRef} transitionStatus={state} />}
      </Transition>
      {title && (
        <StyledHead data-testid="sidebar-head">
          {icon && <StyledHeadIcon>{icon}</StyledHeadIcon>}
          <Transition in={isOpen} timeout={TRANSITION_TIMEOUT} unmountOnExit>
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
  )
}

Sidebar.displayName = 'Sidebar'
