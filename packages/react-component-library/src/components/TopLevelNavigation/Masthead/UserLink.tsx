import React from 'react'

import { Avatar, AVATAR_VARIANT } from '../../Avatar'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { Link } from '../../Link'
import { UserType } from '../../../common/User'

interface UserLinkProps extends ComponentWithClass {
  user: UserType
  LinkComponent?: any
}

export const UserLink: React.FC<UserLinkProps> = ({
  className,
  LinkComponent = Link,
  user: { initials, ...rest },
}) => (
  <LinkComponent className={className} {...rest} data-testid="userlink">
    <Avatar initials={initials} variant={AVATAR_VARIANT.DARK} />
  </LinkComponent>
)

UserLink.displayName = 'UserLink'
