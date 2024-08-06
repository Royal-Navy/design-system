import React, { useContext, useRef } from 'react'
import { Transition } from 'react-transition-group'

import { SidebarHandle } from './SidebarHandle'
import { SidebarNotifications } from './SidebarNotifications'
import { SidebarContext } from './context'
import { TRANSITION_TIMEOUT } from './constants'
import {
  StyledHead,
  StyledHeadIcon,
  StyledHeadTitle,
  StyledSidebar,
  StyledSidebarOverlay,
} from './partials'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { NotificationsProps } from '../NotificationPanel'
import { ClassificationProps } from '../../ClassificationBar'
import { SidebarUserProps } from './SidebarUser'

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
  classificationBar,
  ...rest
}: SidebarProps) => {
  const nodeRef = useRef(null)
  const { isOpen, hasMouseOver, setHasMouseOver, setIsOpen } =
    useContext(SidebarContext)

  return (
    <>
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
        <Transition
          nodeRef={nodeRef}
          in={hasMouseOver}
          timeout={0}
          unmountOnExit
        >
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
      {isOpen && (
        <StyledSidebarOverlay
          role="dialog"
          aria-modal="true"
          data-testid="sidebar-modal"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

Sidebar.displayName = 'Sidebar'
