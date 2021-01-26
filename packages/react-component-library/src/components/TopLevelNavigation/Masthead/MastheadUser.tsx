/* eslint-disable no-console */
import React, { ReactElement } from 'react'

import { Avatar, AVATAR_VARIANT } from '../../Avatar'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { LinkTypes } from '../../../common/Link'
import { MastheadUserItemProps } from './MastheadUserItem'
import { Nav } from '../../../common/Nav'
import { Sheet } from '../Sheet/Sheet'
import { SheetButton } from '../Sheet/SheetButton'
import { SHEET_PLACEMENT } from '../Sheet/constants'
import logger from '../../../utils/logger'
import { StyledOption } from './partials/StyledOption'
import { StyledUserItems } from './partials/StyledUserItems'

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
  ...rest
}) =>
  React.cloneElement(link as ReactElement, {
    ...link.props,
    children: (
      <StyledOption {...rest}>
        <Avatar
          data-testid="masthead-avatar"
          initials={initials}
          variant={AVATAR_VARIANT.DARK}
        />
      </StyledOption>
    ),
  })

const MastheadUserWithItems: React.FC<MastheadUserWithItemsProps> = ({
  children,
  initials,
}) => (
  <Sheet
    button={(
      <StyledOption
        aria-label="Show user options"
        as={SheetButton}
        data-testid="user-button"
        icon={(
          <Avatar
            data-testid="masthead-avatar"
            initials={initials}
            variant={AVATAR_VARIANT.DARK}
          />
        )}
      />
    )}
    placement={SHEET_PLACEMENT.BELOW}
    width={SHEET_WIDTH}
  >
    <StyledUserItems>{children}</StyledUserItems>
  </Sheet>
)

export const MastheadUser: React.FC<MastheadUserProps> = ({
  children,
  link,
  ...rest
}) => {
  if (link) {
    logger.warn('The `link` prop is deprecated')
    return <MastheadUserWithLink link={link} {...rest} />
  }

  return <MastheadUserWithItems {...rest}>{children}</MastheadUserWithItems>
}

MastheadUser.displayName = 'MastheadUser'
