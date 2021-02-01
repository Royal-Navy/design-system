import React, { ReactElement } from 'react'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import format from 'date-fns/format'

import { Avatar, AVATAR_VARIANT } from '../../Avatar'
import { getInitials, getId } from '../../../helpers'
import { LinkTypes } from '../../../common/Link'
import { StyledNotification } from './partials/StyledNotification'
import { StyledWrapper } from './partials/StyledWrapper'
import { StyledItem } from './partials/StyledItem'
import { StyledAvatar } from './partials/StyledAvatar'
import { StyledItemNotRead } from './partials/StyledItemNotRead'
import { StyledContent } from './partials/StyledContent'
import { StyledCircle } from './partials/StyledCircle'
import { StyledDescription } from './partials/StyledDescription'

export interface NotificationProps {
  link: React.ReactElement<LinkTypes>
  name: string
  isRead?: boolean
  action: string
  on: string
  when: Date
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

export const Notification: React.FC<NotificationProps> = ({
  link,
  name,
  isRead,
  action,
  on,
  when,
  description,
  ...rest
}) => {
  const contentId = getId('content')

  return (
    <StyledNotification data-testid="notification" {...rest}>
      <StyledWrapper>
        {React.cloneElement(link as ReactElement, {
          ...link.props,
          children: (
            <StyledItem
              aria-describedby={contentId}
              data-testid="notification-row"
              role="row"
            >
              <StyledAvatar role="gridcell">
                <Avatar
                  initials={getInitials(name)}
                  variant={AVATAR_VARIANT.DARK}
                />
                {!isRead && <StyledItemNotRead data-testid="not-read-item" />}
              </StyledAvatar>
              <StyledContent
                data-testid="notification-content"
                id={contentId}
                role="gridcell"
              >
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
