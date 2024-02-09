import React, { ReactElement } from 'react'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import format from 'date-fns/format'

import { Avatar, AVATAR_VARIANT } from '../../Avatar'
import { getInitials } from '../../../helpers'
import { LinkTypes } from '../../../common/Link'
import { StyledNotification } from './partials/StyledNotification'
import { StyledWrapper } from './partials/StyledWrapper'
import { StyledItem } from './partials/StyledItem'
import { StyledAvatar } from './partials/StyledAvatar'
import { StyledItemNotRead } from './partials/StyledItemNotRead'
import { StyledContent } from './partials/StyledContent'
import { StyledCircle } from './partials/StyledCircle'
import { StyledDescription } from './partials/StyledDescription'
import { useExternalId } from '../../../hooks/useExternalId'

export interface NotificationProps {
  /**
   * Link component for the notification item.
   */
  link: React.ReactElement<LinkTypes>
  /**
   * Text name for the notification.
   */
  name: string
  /**
   * Toggle if the notification has been read or not.
   */
  isRead?: boolean
  /**
   * Text for the action link associated with the notification.
   */
  action: string
  /**
   * Qualifier text for the action.
   */
  on: string
  /**
   * Date and time of the event.
   */
  when: Date
  /**
   * Text description of the notification.
   */
  description: string
}

function formatWhen(when: Date) {
  const now = Date.now()
  const minutesInDay = 1440

  if (differenceInMinutes(now, when) < 5) {
    return 'Just now'
  }

  if (differenceInMinutes(now, when) < minutesInDay) {
    return `${formatDistanceStrict(now, when)} ago`
  }

  return format(when, 'dd MMM yyyy')
}

export const Notification = ({
  link,
  name,
  isRead,
  action,
  on,
  when,
  description,
  ...rest
}: NotificationProps) => {
  const contentId = useExternalId('content')

  return (
    <StyledNotification data-testid="notification" {...rest}>
      <StyledWrapper>
        {React.cloneElement(link as ReactElement, {
          ...link.props,
          children: (
            <StyledItem
              aria-describedby={contentId}
              data-testid="notification-row"
            >
              <StyledAvatar>
                <Avatar variant={AVATAR_VARIANT.DARK} aria-hidden>
                  {getInitials(name)}
                </Avatar>
                {!isRead && (
                  <StyledItemNotRead
                    title="Unread"
                    data-testid="not-read-item"
                  />
                )}
              </StyledAvatar>
              <StyledContent data-testid="notification-content" id={contentId}>
                <strong>{name}</strong>
                {` ${action} `}
                <strong>{on}</strong>
                <StyledCircle data-testid="circle" />
                <span>{formatWhen(when)}</span>
                <StyledDescription>
                  {description.substring(0, 38)}...
                </StyledDescription>
              </StyledContent>
            </StyledItem>
          ),
        })}
      </StyledWrapper>
    </StyledNotification>
  )
}
