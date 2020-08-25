import React from 'react'

import { Avatar, AVATAR_VARIANT } from '../../Avatar'
import { Link } from '../../Link'
import { UserType } from '../../../common/User'

interface UserLinkProps {
  className?: string
  user: UserType
  LinkComponent?: any
}

export const UserLink: React.FC<UserLinkProps> = ({
  className = '',
  LinkComponent = Link,
  user: { initials, ...rest },
}) => (
  <LinkComponent className={className} {...rest} data-testid="userlink">
    <Avatar initials={initials} variant={AVATAR_VARIANT.DARK} />
  </LinkComponent>
)

UserLink.displayName = 'UserLink'
