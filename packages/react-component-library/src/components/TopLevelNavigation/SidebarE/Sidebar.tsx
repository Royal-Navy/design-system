import React from 'react'
import { Transition } from 'react-transition-group'

import { SidebarHandle } from './SidebarHandle'
import { SidebarUserEProps } from './SidebarUser'
import { SidebarNotifications } from './SidebarNotifications'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { SidebarContext, SidebarProvider } from './context'
import { NotificationsProps } from '../NotificationPanel'
import { TRANSITION_STYLES, TRANSITION_TIMEOUT } from './constants'
import { StyledSidebar } from './partials/StyledSidebar'
import { StyledHead } from './partials/StyledHead'
import { StyledHeadIcon } from './partials/StyledHeadIcon'
import { StyledHeadTitle } from './partials/StyledHeadTitle'

export interface SidebarEProps extends ComponentWithClass {
  icon?: React.ReactNode
  title?: string
  user?: React.ReactElement<SidebarUserEProps>
  hasUnreadNotification?: boolean
  notifications?: React.ReactElement<NotificationsProps>
}

export const SidebarE: React.FC<SidebarEProps> = ({
  icon,
  title,
  children,
  user,
  hasUnreadNotification,
  notifications,
  ...rest
}) => {
  return (
    <SidebarProvider>
      <SidebarContext.Consumer>
        {({ isOpen, hasMouseOver, setHasMouseOver }) => (
          <StyledSidebar
            data-testid="sidebar"
            isOpen={isOpen}
            onMouseEnter={(_) => setHasMouseOver(true)}
            onMouseLeave={(_) => setHasMouseOver(false)}
            {...rest}
          >
            <Transition in={hasMouseOver} timeout={0} unmountOnExit>
              {(state) => (
                <SidebarHandle style={{ ...TRANSITION_STYLES[state] }} />
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
                    <StyledHeadTitle style={{ ...TRANSITION_STYLES[state] }}>
                      {title}
                    </StyledHeadTitle>
                  )}
                </Transition>
              </StyledHead>
            )}
            {children}

            {notifications && (
              <SidebarNotifications
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

SidebarE.displayName = 'Sidebar'
