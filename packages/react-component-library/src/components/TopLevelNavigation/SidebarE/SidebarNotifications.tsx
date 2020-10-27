import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { IconNotifications } from '@royalnavy/icon-library'
import { Transition } from 'react-transition-group'

import { SidebarContext } from './context'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { SHEET_PLACEMENT } from '../Sheet/constants'
import { Sheet } from '../Sheet/Sheet'
import { SheetButton } from '../Sheet/SheetButton'
import {
  NotificationsProps,
  NOTIFICATION_CONTAINER_WIDTH,
} from '../NotificationPanel'
import { TRANSITION_STYLES, TRANSITION_TIMEOUT } from './constants'

export interface SidebarNotificationsProps extends ComponentWithClass {
  hasUnreadNotification?: boolean
  notifications?: React.ReactElement<NotificationsProps>
}

const { spacing, color, fontSize } = selectors

const StyledNotificationDot = styled.span`
  position: absolute;
  top: -7px;
  right: -5px;
  border: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background-color: ${color('danger', '600')};
  border: 3px solid ${color('neutral', '700')};
  color: ${color('neutral', 'white')};
  font-size: ${fontSize('s')};
  font-weight: 600;
`

const StyledNotificationsLabel = styled.span`
  flex: 1;
  text-align: left;
  color: ${color('neutral', '100')};
  font-size: ${fontSize('m')};
  margin-left: ${spacing('4')};
  white-space: nowrap;
  display: none;
  opacity: 1;
  transition: opacity 150ms linear;
`

const StyledSheet = styled(Sheet)`
  display: flex;
  justify-content: center;
`

const StyledSheetButton = styled<any>(SheetButton)`
  display: flex;
  align-items: center;
  padding: ${spacing('3')};
  margin-bottom: ${spacing('5')};
  white-space: nowrap;

  svg {
    color: ${color('neutral', '100')};
    width: 20px;
    height: 20px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      width: 100%;
      padding: ${spacing('8')} ${spacing('7')};
      margin: unset;

      svg {
        width: 1.5rem;
        margin-left: ${spacing('2')};
      }

      &::before {
        position: absolute;
        top: 1rem;
        left: 2rem;
        content: '';
        width: 12px;
        height: 12px;
        background-color: ${color('danger', '600')};
        border-radius: 9999px;
        border: 2px solid ${color('neutral', '700')};
      }

      ${StyledNotificationDot} {
        position: relative;
        top: unset;
        right: unset;
        order: 3;
        width: 25px;
        height: 25px;
      }

      ${StyledNotificationsLabel} {
        display: inline-block;
      }
    `}
`

export const SidebarNotifications: React.FC<SidebarNotificationsProps> = ({
  notifications,
  hasUnreadNotification,
}) => {
  const { isOpen } = useContext(SidebarContext)

  return (
    <>
      {notifications && (
        <StyledSheet
          button={(
            <StyledSheetButton
              aria-label="Show notifications"
              data-testid="notification-button"
              icon={<IconNotifications />}
              isOpen={isOpen}
            >
              {hasUnreadNotification && (
                <StyledNotificationDot data-testid="not-read">
                  {React.Children.count(notifications.props.children)}
                </StyledNotificationDot>
              )}
              <Transition
                in={isOpen}
                timeout={TRANSITION_TIMEOUT}
                unmountOnExit
              >
                {(state) => (
                  <StyledNotificationsLabel
                    style={{ ...TRANSITION_STYLES[state] }}
                  >
                    Notifications
                  </StyledNotificationsLabel>
                )}
              </Transition>
            </StyledSheetButton>
          )}
          placement={SHEET_PLACEMENT.RIGHT_BOTTOM}
          width={NOTIFICATION_CONTAINER_WIDTH}
        >
          {notifications}
        </StyledSheet>
      )}
    </>
  )
}

SidebarNotifications.displayName = 'SidebarNotifications'
