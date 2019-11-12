import React from 'react'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import format from 'date-fns/format'

import { Avatar } from '../../components/Avatar'

export interface NotificationProps {
  href: string
  name: string
  read?: boolean
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
  href,
  name,
  read,
  action,
  on,
  when,
  description,
}) => {
  return (
    <li>
      <div className="rn-notifications-item-wrapper">
        <a href={href}>
          <div className="rn-notifications-item">
            <div className="rn-notifications-item__avatar">
              <Avatar initials={getInitials(name)} dark />
              {!read && (
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
        </a>
      </div>
    </li>
  )
}
