import React, { ReactElement } from 'react'

import { Avatar, AVATAR_VARIANT } from ".."

export interface MastheadUserProps extends ComponentWithClass {
  initials: string,
  link: React.ReactElement<LinkTypes>
}

export const MastheadUser: React.FC<MastheadUserProps> = ({
  initials,
  link,
}) => {
  return React.cloneElement(link as ReactElement, {
    ...link.props,
    className: 'rn-masthead__option',
    children: <Avatar initials={initials} variant={AVATAR_VARIANT.DARK} />
  })
}

MastheadUser.displayName = 'MastheadUser'
