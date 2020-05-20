import React, { ReactElement } from 'react'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import format from 'date-fns/format'

import { Avatar, AVATAR_VARIANT } from "../Avatar"

export interface NotificationProps {
  link: React.ReactElement<LinkTypes>
  name: string
  isRead?: boolean
  action: string
  on: string
  when: Date
  description: string
}

function getInitials(name: string) {
  return name
    .split(/[\s-]+/)
    .map(namePart => namePart[0])
    .join('')
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
}) => {
  return (
    <li data-testid="notification">
      <div className="rn-notifications-item-wrapper">
        {React.cloneElement(link as ReactElement, {
          ...link.props,
          children: (
            <div className="rn-notifications-item">
              <div className="rn-notifications-item__avatar">
                <Avatar
                  initials={getInitials(name)}
                  variant={AVATAR_VARIANT.DARK}
                />
                {!isRead && (
                  <span
                    className="rn-notification-panel__not-read rn-notification-panel__not-read--notification-item"
                    data-testid="not-read-item"
                  />
                )}
              </div>
              <div className="rn-notifications-item__content">
                <span className="rn-notifications-item__content-strong">
                  {name}
                </span>
                {` ${action} `}
                <span className="rn-notifications-item__content-strong">
                  {on}
                </span>
                <span
                  className="rn-notifications-item__content-circle"
                  data-testid="circle"
                />
                <span>{formatWhen(when)}</span>
                <div className="rn-notifications-item__content-description">
                  {description.substring(0, 38)}...
                </div>
              </div>
            </div>
          ),
        })}
      </div>
    </li>
  )
}
