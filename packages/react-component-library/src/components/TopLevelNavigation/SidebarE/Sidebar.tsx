import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { SidebarHandle } from './SidebarHandle'
import { SidebarUserProps } from './SidebarUser'
import { SidebarNotifications } from './SidebarNotifications'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { SidebarContext, SidebarProvider } from './context'
import { NotificationsProps } from '../NotificationPanel'

export interface SidebarProps extends ComponentWithClass {
  icon?: React.ReactNode
  title?: string
  user?: React.ReactElement<SidebarUserProps>
  hasUnreadNotification?: boolean
  notifications?: React.ReactElement<NotificationsProps>
}

interface StyledSidebarProps {
  isOpen?: boolean
}

const { color, spacing, fontSize } = selectors

const StyledSidebar = styled.aside<StyledSidebarProps>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  width: ${({ isOpen }) => (isOpen ? '18rem' : '3.75rem')};
  height: 100vh;
  background-color: ${color('neutral', '700')};
  color: ${color('neutral', 'white')};

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
`

export const Sidebar: React.FC<SidebarProps> = ({
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
            {hasMouseOver && <SidebarHandle />}
            {title && (
              <StyledHead data-testid="sidebar-head">
                {icon && <StyledIcon>{icon}</StyledIcon>}
                {isOpen && <StyledTitle>{title}</StyledTitle>}
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

Sidebar.displayName = 'Sidebar'
