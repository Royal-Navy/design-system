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
  StyledSidebarModal,
} from './partials'
import { SidebarProps } from './types'

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
      {isOpen && <StyledSidebarModal onClick={() => setIsOpen(false)} />}
    </>
  )
}

Sidebar.displayName = 'Sidebar'
