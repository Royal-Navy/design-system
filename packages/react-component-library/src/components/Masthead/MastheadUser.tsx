/* eslint-disable no-console */
import React, { ReactElement } from 'react'

import { Avatar, AVATAR_VARIANT } from '../Avatar'
import { MastheadUserItemProps } from './MastheadUserItem'
import { Nav } from '../../types/Nav'
import { Sheet } from '../TopLevelNavigation/Sheet'
import { SheetButton } from '../TopLevelNavigation/SheetButton'
import { SHEET_PLACEMENT } from '../TopLevelNavigation/constants'

const SHEET_WIDTH = 106

export interface MastheadUserWithItemsProps extends Nav<MastheadUserItemProps> {
  initials: string
  link?: never
}

export interface MastheadUserWithLinkProps extends ComponentWithClass {
  children?: never
  initials: string
  link: React.ReactElement<LinkTypes>
}

export type MastheadUserProps =
  | MastheadUserWithLinkProps
  | MastheadUserWithItemsProps

const MastheadUserWithLink: React.FC<MastheadUserWithLinkProps> = ({
  link,
  initials,
}) =>
  React.cloneElement(link as ReactElement, {
    ...link.props,
    children: (
      <Avatar
        data-testid="masthead-avatar"
        initials={initials}
        variant={AVATAR_VARIANT.DARK}
      />
    ),
    className: 'rn-masthead__option',
  })

const MastheadUserWithItems: React.FC<MastheadUserWithItemsProps> = ({
  children,
  initials,
}) => (
  <Sheet
    button={(
      <SheetButton
        className="rn-masthead__option"
        data-testid="notification-button"
        icon={(
          <Avatar
            data-testid="masthead-avatar"
            initials={initials}
            variant={AVATAR_VARIANT.DARK}
          />
        )}
      />
    )}
    className="rn-masthead__notification"
    placement={SHEET_PLACEMENT.BELOW}
    width={SHEET_WIDTH}
  >
    <ol className="rn-masthead__user-items">{children}</ol>
  </Sheet>
)

export const MastheadUser: React.FC<MastheadUserProps> = ({
  children,
  initials,
  link,
}) => {
  if (link) {
    return <MastheadUserWithLink initials={initials} link={link} />
  }

  return (
    <MastheadUserWithItems initials={initials}>
      {children}
    </MastheadUserWithItems>
  )
}

MastheadUser.displayName = 'MastheadUser'
