import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { Transition } from 'react-transition-group'

import { SidebarHandle } from './SidebarHandle'
import { SidebarUserEProps } from './SidebarUser'
import { SidebarNotifications } from './SidebarNotifications'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { SidebarContext, SidebarProvider } from './context'
import { NotificationsProps } from '../NotificationPanel'
import { TRANSITION_STYLES, TRANSITION_TIMEOUT } from './constants'

export interface SidebarEProps extends ComponentWithClass {
  icon?: React.ReactNode
  title?: string
  user?: React.ReactElement<SidebarUserEProps>
  hasUnreadNotification?: boolean
  notifications?: React.ReactElement<NotificationsProps>
}

interface StyledSidebarProps {
  isOpen?: boolean
}

const { color, spacing, fontSize, zIndex } = selectors

const StyledSidebar = styled.aside<StyledSidebarProps>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  z-index: ${zIndex('sidebar', 0)};
  width: ${({ isOpen }) => (isOpen ? '18rem' : '3.75rem')};
  height: 100vh;
  background-color: ${color('neutral', '700')};
  color: ${color('neutral', 'white')};
  transition: ${({ isOpen }) =>
    isOpen
      ? '200ms width cubic-bezier(0.34, 1.56, 0.64, 1)'
      : '200ms width cubic-bezier(0.34, 1, 0.64, 1)'};

  > a:hover {
    text-decoration: none;
  }
`

const StyledHead = styled.div`
  display: flex;
  align-items: center;
  padding: ${spacing('8')} ${spacing('6')};
  background-color: ${color('neutral', '800')};
`

const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  background-color: ${color('neutral', '500')};
  padding: 0.55rem;
  margin-right: ${spacing('7')};

  svg {
    width: 18px;
    height: 18px;
  }
`

const StyledTitle = styled.div`
  font-weight: 600;
  font-size: ${fontSize('l')};
  white-space: nowrap;
  opacity: 1;
  transition: opacity 150ms linear;
`

export const SidebarE: React.FC<SidebarEProps> = ({
  icon,
  title,
  children,
  user,
  hasUnreadNotification,
  notifications,
}) => {
  return (
    <SidebarProvider>
      <SidebarContext.Consumer>
        {({ isOpen, hasMouseOver, setHasMouseOver }) => (
          <StyledSidebar
            isOpen={isOpen}
            onMouseEnter={(_) => setHasMouseOver(true)}
            onMouseLeave={(_) => setHasMouseOver(false)}
          >
            <Transition in={hasMouseOver} timeout={0} unmountOnExit>
              {(state) => (
                <SidebarHandle style={{ ...TRANSITION_STYLES[state] }} />
              )}
            </Transition>
            {title && (
              <StyledHead data-testid="sidebar-head">
                {icon && <StyledIcon>{icon}</StyledIcon>}
                <Transition
                  in={isOpen}
                  timeout={TRANSITION_TIMEOUT}
                  unmountOnExit
                >
                  {(state) => (
                    <StyledTitle style={{ ...TRANSITION_STYLES[state] }}>
                      {title}
                    </StyledTitle>
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
